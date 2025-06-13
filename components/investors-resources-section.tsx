"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function InvestorsResourcesSection() {
  const [investmentAmount, setInvestmentAmount] = useState([200000]);
  const [rentalYield, setRentalYield] = useState([7.5]);
  const [appreciation, setAppreciation] = useState([7.5]);

  const calculateReturns = () => {
    const amount = investmentAmount[0];
    const yield_rate = rentalYield[0] / 100;
    const appreciation_rate = appreciation[0] / 100;

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
  const finalValue = investmentAmount[0] + totalROI;
  const avgReturn = (totalROI / investmentAmount[0] / 5) * 100;

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investors Resources
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Your one-stop resource for real estate investment.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
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
                  <span className="text-gray-900 font-medium">AED</span>
                  <input
                    type="number"
                    value={investmentAmount[0]}
                    onChange={(e) =>
                      setInvestmentAmount([
                        Number.parseInt(e.target.value) || 0,
                      ])
                    }
                    className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-gray-900 text-lg font-semibold">
                    Net Rental Yield %
                  </label>
                  <span className="text-accent font-bold text-lg">
                    {rentalYield[0]}%
                  </span>
                </div>
                <Slider
                  value={rentalYield}
                  onValueChange={setRentalYield}
                  max={15}
                  min={1}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-gray-900 text-lg font-semibold">
                    Annual Appreciation %
                  </label>
                  <span className="text-accent font-bold text-lg">
                    {appreciation[0]}%
                  </span>
                </div>
                <Slider
                  value={appreciation}
                  onValueChange={setAppreciation}
                  max={15}
                  min={1}
                  step={0.1}
                  className="w-full"
                />
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
                    <div className="w-4 h-4 bg-accent rounded"></div>
                    Total Capital Appreciation (in 5 Years)
                  </span>
                </div>
                <div className="flex justify-between text-gray-900 font-semibold mb-4">
                  <span>
                    AED {Math.round(returns[4].rental).toLocaleString("en-us")}
                  </span>
                  <span>
                    AED {Math.round(returns[4].capital).toLocaleString("en-us")}
                  </span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex items-end justify-between h-40 mb-6 bg-gray-50 rounded-lg p-4">
                {returns.map((data, index) => {
                  const maxValue = Math.max(...returns.map((r) => r.total));
                  const rentalHeight = (data.rental / maxValue) * 100;
                  const capitalHeight = (data.capital / maxValue) * 100;

                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="flex flex-col items-center mb-2">
                        <div
                          className="w-8 bg-accent rounded-t"
                          style={{
                            height: `${capitalHeight}%`,
                            minHeight: "4px",
                          }}
                        ></div>
                        <div
                          className="w-8 bg-green-500 rounded-b"
                          style={{
                            height: `${rentalHeight}%`,
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
                    {avgReturn.toFixed(0)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total ROI</span>
                  <span className="text-gray-900 font-semibold">
                    AED {Math.round(totalROI).toLocaleString("en-US")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Value of Investment After 5 Years
                  </span>
                  <span className="text-accent font-bold">
                    AED {Math.round(finalValue).toLocaleString("en-us")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
