from datetime import date

from alephium_reward_calculator import AlephiumRewardCalculator


class AlephiumRevenueCalculator:
    def __init__(self, hashrate: float):
        self.hashrate = hashrate

    def revenue(self, day: date, hashrate: float) -> float:
        fraction_of_total_hashrate = self.hashrate / hashrate
        calculator = AlephiumRewardCalculator(hashrate, day)
        return calculator.daily_reward * fraction_of_total_hashrate
