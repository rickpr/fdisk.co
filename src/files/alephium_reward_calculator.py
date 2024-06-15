from datetime import date, datetime
from functools import cached_property

import pandas as pd


class AlephiumRewardCalculator:
    drop_per_year_in_aleph = 10
    drop_per_day = drop_per_year_in_aleph / 365
    start_date_of_alephium = pd.Timestamp(date(2021, 11, 8))
    max_reward = 60
    blocks_per_day = 21_600
    shards_on_chain = 16

    one_petahash = 1_000_000_000_000_000
    one_exahash = 1_000_000_000_000_000_000
    zero_hashrate_reward_at = 128 * one_exahash
    minimum_reward_under_one_petahash = 30
    minimum_reward_under_one_exahash = 20

    def __init__(self, hashrate: float, day: date):
        self.hashrate = hashrate
        self.day = day

    @cached_property
    def reward(self) -> float:
        return (
            min(self._time_based_reward(), self._hashrate_based_reward())
            / self.shards_on_chain
        )

    @cached_property
    def daily_reward(self) -> float:
        return self.reward * self.blocks_per_day

    def _time_based_reward(self) -> float:
        reward = (
            self.max_reward
            - (self.day - self.start_date_of_alephium).days * self.drop_per_day
        )
        return max(0, reward)

    def _hashrate_based_reward(self) -> float:
        if self.hashrate < self.one_petahash:
            fraction_of_one_petahash = self.hashrate / self.one_petahash
            return max(
                self.minimum_reward_under_one_petahash,
                self.max_reward * fraction_of_one_petahash,
            )
        elif self.hashrate < self.one_exahash:
            hashrate_interval = self.one_exahash - self.one_petahash
            fraction_of_interval = (
                self.hashrate - self.one_petahash
            ) / hashrate_interval
            reduction = 1 - fraction_of_interval
            reward_interval = self.max_reward - self.minimum_reward_under_one_petahash
            return (
                max(reward_interval * reduction, 0)
                + self.minimum_reward_under_one_exahash
            )
        else:
            hashrate_interval = self.zero_hashrate_reward_at - self.one_exahash
            fraction_of_interval = (
                self.hashrate - self.one_exahash
            ) / hashrate_interval
            reduction = 1 - fraction_of_interval
            return max(0, self.minimum_reward_under_one_exahash * reduction)
