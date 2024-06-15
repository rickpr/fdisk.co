from datetime import date

from alephium_revenue_calculator import AlephiumRevenueCalculator


class DailyProfitCalculator:
    def __init__(self, hashrate: float, watts: float, cost_per_kwh: float):
        self.hashrate = hashrate
        self.daily_power_cost = watts * 24 * cost_per_kwh / 1000
        self.alephium_revenue_calculator = AlephiumRevenueCalculator(hashrate)

    def profit(self, day: date, hashrate: float, price: float) -> float:
        revenue = self.alephium_revenue_calculator.revenue(day, hashrate) * price
        return revenue - self.daily_power_cost
