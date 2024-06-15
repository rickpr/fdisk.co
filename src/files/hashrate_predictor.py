from functools import cached_property
import pandas as pd

from predictor import Predictor


class HashratePredictor(Predictor):
    ANOMALOUS_ROW_NUMBER = 146  # bad data
    FILENAME = "hashrate.csv"

    @cached_property
    def _data(self) -> pd.DataFrame:
        df = pd.read_csv(self.FILENAME)
        df.iloc[self.ANOMALOUS_ROW_NUMBER, 1] = int(
            (
                df.iloc[self.ANOMALOUS_ROW_NUMBER - 1, 1]
                + df.iloc[self.ANOMALOUS_ROW_NUMBER + 1, 1]
            )
            / 2
        )
        return df[["Category", "Hashrate"]].rename(
            columns={"Category": "ds", "Hashrate": "y"}
        )
