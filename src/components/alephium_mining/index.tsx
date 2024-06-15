import { Chart, Filler, PointElement, LineElement, Legend, CategoryScale, LinearScale } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'

import CodeFile from '../code_file'
import Title from '../title'
import HashratePredictions from 'files/hashrate_prediction.json'
import PricePredictions from 'files/price_prediction.json'
import ProfitPredictions from 'files/profit_prediction.json'
import RewardCurve from 'images/reward_curve.webp'
import TimeRewardCurve from 'images/time_reward_curve.webp'

Chart.register(CategoryScale)
Chart.register(LinearScale)
Chart.register(PointElement)
Chart.register(LineElement)
Chart.register(Legend)
Chart.register(Filler)

const AlephiumMining = (): JSX.Element => {
  return (
    <div className='flex flex-col px-16 pb-4 bg-base-300'>
      <Title title='Mining Alephium with GoldShell AL Box' />
      <div className='prose max-w-none p-8 flex flex-col bg-base-100'>
        <p>
          I&apos;d like to analyze the profitability of mining Alpehium using a
          GoldShell AL Box.
        </p>
        <p>
          Note that this analysis was finalized on June 15th, 2024. Things can rapidly change,
          and the outlook this paints could be very different in the future. This is in no way
          a recommendation to purchase any hardware or cryptocurrency. It is merely an analysis
          of the existing data using commonly available tools.
        </p>
        <h2 className='flex items-center text-error'>
          1. Finding out what data I need
        </h2>
        <p>
          Profitability will depend on price and hashrate:
        </p>
        <ul>
          <li>
            <a className='text-info' href='https://www.coingecko.com/en/coins/alephium/historical_data'>
              Alephium price - Coingecko
            </a>
          </li>
          <li>
            <a className='text-info' href='https://poolbay.io/crypto/5798/alephium'>
              Hashrate - Poolbay
            </a>
          </li>
        </ul>
        <h2 className='flex items-center text-error'>
          2. Predicting the future hash rate and price
        </h2>
        <p>
          To predict the future price of Alephium, I&apos;ll use{' '}
          <a className='text-info' href='https://facebook.github.io/prophet/'>
            Prophet
          </a> with Python. I&apos;ll make a base class to make predictors with.
          Open the collapse to see the code for this.
          <CodeFile filename='predictor.py' klassName='Predictor' />
        </p>
        <p>
          Next, I&apos;ll make a class to predict the future hashrate of Alephium.
          This is important because it will determine both the reward for Alephium
          as well as how much we can expect to mine relative to the rest of the network.
          Note that in scientific notation, 1E15 is 1 petahash.
        </p>
        <h3 className='text-accent'>Hashrate Predictions</h3>
        <Line data={HashratePredictions} />
        See the code used to generate this graph:
        <CodeFile filename='hashrate_predictor.py' klassName='HashratePredictor' />
        <p>
          Now, we can predict the price using a similar technique.
          <h3 className='text-accent'>Price Predictions</h3>
          <Line data={PricePredictions} />
          See the code use to predict the prices:
          <CodeFile filename='price_predictor.py' klassName='PricePredictor' />
        </p>
        <h2 className='flex items-center text-error'>
          2. Calculating the rewards over time
        </h2>
        <p>
          Alephium rewards are much more complex than Bitcoin. They are based on
          the total hashrate of the network, and have an upward and downward curve.
          <img src={RewardCurve} alt='Hashrate reward curve' />
          To complicate matters there is also a time-based reward, which is a linearly
          decreasing reward over time.
          <img src={TimeRewardCurve} alt='Time reward curve' />
          The developers have written an excellent{' '}
          <a href='https://medium.com/@alephium/alephium-block-rewards-72d9fb9fde33' target='_blank' rel='noreferrer'>
            blog post
          </a> about this, so we can calculate the rewards ourselves. We have to account for several factors:
          <ol>
            <li>How long it has been since November 8th, 2021 (when Alephium started)</li>
            <li>The maximum block reward (60 Alephium)</li>
            <li>The total hashrate of the network</li>
          </ol>

          The hashrate-based reward and the time-based reward are compared, and we take whichever one is less.
          The below code matches the developers&apos; description of the implementation, and matches the reward curve.
          <CodeFile filename='alephium_reward_calculator.py' klassName='AlephiumRewardCalculator' />
        </p>
        <h2 className='flex items-center text-error'>
          3. Calculating the rewards for any given day using the GoldShell AL Box
        </h2>
        <p>
          Now that we can know the total rewards for any given day, and we can roughly predict
          the network hashrate, we can use the parameters of the GoldShell AL Box to calculate
          how much we can expect to mine on any given day. The code for this ends up being quite simple!
          <CodeFile filename='alephium_revenue_calculator.py' klassName='AlephiumRevenueCalculator' />
        </p>
        <h2 className='flex items-center text-error'>
          4. Converting revenue to profit
        </h2>
        <p>
          This one is simple - we just need to know the cost of electricity. The GoldShell AL Box
          uses 180W of power, and we will assume 16 cents per kilowatt-hour, based on{' '}
          <a
            href='https://www.pnm.com/documents/28767612/28775078/1A+Residential+Service.pdf/729a6ae9-853e-9394-bb0f-89b565603e63?t=1706050346111'
            target='_blank'
            rel='noreferrer'
          >
            summer figures for PNM
          </a>.

          To prevent losing generality, we will create a class that will allow any
          power usage and cost, so we can change this if we use other miners.
          <CodeFile filename='daily_profit_calculator.py' klassName='DailyProfitCalculator' />
        </p>
        <h2 className='flex items-center text-error'>5. Predicting our profits</h2>
        <p>
          Now that we know how much profit we can expect to make on any given day,
          we can use our price and hashrate predictions to predict our profits.

          We will use the price prediction to convert the expected Alephium into
          expected USD.

          <h3 className='text-accent'>Profit Predictions</h3>
          <Line data={ProfitPredictions} />
          See the code used to generate this graph:
          <CodeFile filename='profit_predictor.py' klassName='ProfitPredictor' />
        </p>
        <h2 className='flex items-center text-error'>
          5. Summing it up
        </h2>
        <p>
          Now that we know the profit per day, we&apos;d like to sum it up for the
          entire year. We can take the graph above and sum each line to get the total profit
          for a year. Note that we also have to include the cost of the box! I am using the price of
          $6,599 from <a href='https://www.goldshell.com/product/goldshell-al-box/'>
          the GoldShell website</a>.
          <table className='table table-zebra'>
            <thead>
              <th>Scenario</th>
              <th>Profit</th>
              <th>Profit less cost of box</th>
            </thead>
            <tbody>
              <tr>
                <td>Best case</td>
                <td>$13,104.67</td>
                <td>$6,505.67</td>
              </tr>
              <tr>
                <td>Expected case</td>
                <td>$9,653.01</td>
                <td>$3,504.01</td>
              </tr>
              <tr>
                <td>Worst case</td>
                <td>$6,907.73</td>
                <td>$308.73</td>
              </tr>
            </tbody>
          </table>
          See the code used to generate this table:
          <CodeFile filename='total_profit_calculator.py' klassName='TotalProfitCalculator' />
        </p>
      </div>
    </div>
  )
}

export default AlephiumMining
