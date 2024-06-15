from functools import cached_property

import pandas as pd

from predictor import Predictor


class PricePredictor(Predictor):
    FILENAME = "price.csv"

    @cached_property
    def _data(self) -> pd.DataFrame:
        df = pd.read_csv(self.FILENAME)
        df = df[["snapped_at", "price"]].rename(
            columns={"snapped_at": "ds", "price": "y"}
        )
        df.ds = pd.to_datetime(df.ds).dt.tz_localize(None)
        return df
