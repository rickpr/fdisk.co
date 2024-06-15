from functools import cached_property
from typing import Union

import pandas as pd
from prophet import Prophet


class Predictor:
    def prediction(self) -> pd.DataFrame:
        return self._prediction_for_column("yhat")

    def lower_bound(self) -> pd.DataFrame:
        return self._prediction_for_column("yhat_lower")

    def upper_bound(self) -> pd.DataFrame:
        return self._prediction_for_column("yhat_upper")

    def actual(self) -> Union[pd.DataFrame, None]:
        return self._data.rename(columns={"ds": "date", "y": "actual"})

    def _prediction_for_column(self, column: str) -> pd.DataFrame:
        date_and_column = self._prediction[["ds", column]]
        return date_and_column.rename(columns={"ds": "date", column: "prediction"})

    @cached_property
    def _data(self) -> pd.DataFrame:
        # Replace this with your own data source
        return pd.DataFrame({"ds": [], "y": []})

    @cached_property
    def _prediction(self) -> pd.DataFrame:
        return self._predict(self._data)

    def _predict(self, df: pd.DataFrame) -> pd.DataFrame:
        model = Prophet()
        model.fit(df)
        future = model.make_future_dataframe(periods=365)
        return model.predict(future)
