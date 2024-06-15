from datetime import date

import pandas as pd

from profit_predictor import ProfitPredictor


class TotalProfitCalculator:
    def __init__(self, hashrate: float, watts: float, cost_per_kwh: float):
        self.profit_predictor = ProfitPredictor(hashrate, watts, cost_per_kwh)
        self.mining_start = pd.Timestamp(date.today())

    def profit(self) -> float:
        return self.profit_predictor.prediction().prediction.sum()

    def lower_bound(self) -> float:
        return self.profit_predictor.lower_bound().prediction.sum()

    def upper_bound(self) -> float:
        return self.profit_predictor.upper_bound().prediction.sum()
