from datetime import date
from functools import cached_property

import pandas as pd

from daily_profit_calculator import DailyProfitCalculator
from hashrate_predictor import HashratePredictor
from price_predictor import PricePredictor
from predictor import Predictor


class ProfitPredictor(Predictor):
    def __init__(self, hashrate: float, watts: float, cost_per_kwh: float):
        self.daily_profit_calculator = DailyProfitCalculator(
            hashrate, watts, cost_per_kwh
        )
        self.hashrate_predictor = HashratePredictor()
        self.price_predictor = PricePredictor()
        self.mining_start = pd.Timestamp(date.today())

    def actual(self) -> None:
        # This is prediction only, there are no actual values
        return None

    @cached_property
    def _prediction(self) -> pd.DataFrame:
        profit_predictions = self._expected_case()
        lower_bound_predictions = self._worst_case()
        upper_bound_predictions = self._best_case()
        return pd.DataFrame(
            {
                "ds": profit_predictions.date,
                "yhat": profit_predictions.apply(
                    lambda row: self._calculate_daily_profit(row), axis=1
                ),
                "yhat_lower": self._worst_case().apply(
                    lambda row: self._calculate_daily_profit(row), axis=1
                ),
                "yhat_upper": upper_bound_predictions.apply(
                    lambda row: self._calculate_daily_profit(row), axis=1
                ),
            }
        )

    def _current_and_future_data(self, data: pd.DataFrame) -> pd.DataFrame:
        return data.where(data.date >= self.mining_start).dropna()

    def _expected_case(self) -> pd.DataFrame:
        return self._current_and_future_data(
            pd.merge(
                self.hashrate_predictor.prediction(),
                self.price_predictor.prediction(),
                on="date",
            )
        )

    def _worst_case(self) -> pd.DataFrame:
        return self._current_and_future_data(
            pd.merge(
                self.hashrate_predictor.upper_bound(),
                self.price_predictor.lower_bound(),
                on="date",
            )
        )

    def _best_case(self) -> pd.DataFrame:
        return self._current_and_future_data(
            pd.merge(
                self.hashrate_predictor.lower_bound(),
                self.price_predictor.upper_bound(),
                on="date",
            )
        )

    def _calculate_daily_profit(self, row: pd.Series) -> float:
        return self.daily_profit_calculator.profit(
            row.date, row.prediction_x, row.prediction_y
        )
