"use client";
import { useState } from "react";

export default function InvestorsResourcesSection() {
  const [investmentAmount, setInvestmentAmount] = useState(2000000);
  const [rentalYield, setRentalYield] = useState(7.5);
  const [appreciation, setAppreciation] = useState(7.5);

  const calculateReturns = () => {
    const amount = investmentAmount;
    const yield_rate = rentalYield / 100;
    const appreciation_rate = appreciation / 100;

    const years = [1, 2, 3, 4, 5];
    return years.map((year) => {
      const rentalIncome = amount * yield_rate * year;
      const capitalAppreciation =
        amount * Math.pow(1 + appreciation_rate, year) - amount;
      return {
        year,
        rental: rentalIncome,
        capital: capitalAppreciation,
        total: rentalIncome + capitalAppreciation,
      };
    });
  };

  const returns = calculateReturns();
  const totalROI = returns[4].total;
  const finalValue = investmentAmount + totalROI;
  const avgReturn = (totalROI / investmentAmount / 5) * 100;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 border-t border-white/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investors Resources
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Your one-stop resource for real estate investment.
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ROI Investment Calculator
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Controls */}
            <div className="space-y-8">
              <div>
                <label className="block text-gray-900 text-lg mb-4 font-semibold">
                  Enter Investment Amount
                </label>
                <div className="flex items-center gap-4">
                  <span className="text-gray-900 font-medium">₹</span>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) =>
                      setInvestmentAmount(Number(e.target.value) || 0)
                    }
                    className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-gray-900 text-lg font-semibold">
                    Net Rental Yield %
                  </label>
                  <span className="text-blue-600 font-bold text-lg">
                    {rentalYield}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.1"
                  value={rentalYield}
                  onChange={(e) => setRentalYield(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-gray-900 text-lg font-semibold">
                    Annual Appreciation %
                  </label>
                  <span className="text-blue-600 font-bold text-lg">
                    {appreciation}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.1"
                  value={appreciation}
                  onChange={(e) => setAppreciation(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>

            {/* Right side - Chart and Results */}
            <div>
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    Total Return Rental (in 5 Years)
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    Total Capital Appreciation (in 5 Years)
                  </span>
                </div>
                <div className="flex justify-between text-gray-900 font-semibold mb-4">
                  <span>
                    ₹ {Math.round(returns[4].rental).toLocaleString("en-IN")}
                  </span>
                  <span>
                    ₹ {Math.round(returns[4].capital).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex items-end justify-between h-40 mb-6 bg-gray-50 rounded-lg p-4">
                {returns.map((data, index) => {
                  const maxValue = Math.max(...returns.map((r) => r.total));
                  const rentalHeight =
                    maxValue > 0 ? (data.rental / maxValue) * 120 : 4;
                  const capitalHeight =
                    maxValue > 0 ? (data.capital / maxValue) * 120 : 4;

                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="flex flex-col items-center mb-2">
                        <div
                          className="w-8 bg-blue-500 rounded-t"
                          style={{
                            height: `${capitalHeight}px`,
                            minHeight: "4px",
                          }}
                        ></div>
                        <div
                          className="w-8 bg-green-500 rounded-b"
                          style={{
                            height: `${rentalHeight}px`,
                            minHeight: "4px",
                          }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 font-medium">
                        {data.year} Year
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Results */}
              <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Annualized Return</span>
                  <span className="text-gray-900 font-semibold">
                    {avgReturn.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total ROI</span>
                  <span className="text-gray-900 font-semibold">
                    ₹ {Math.round(totalROI).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Value of Investment After 5 Years
                  </span>
                  <span className="text-blue-600 font-bold">
                    ₹ {Math.round(finalValue).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
