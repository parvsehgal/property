"use client";
import { useState } from "react";
import {
  ArrowLeft,
  Calculator,
  TrendingUp,
  PieChart,
  BarChart3,
} from "lucide-react";

import Link from "next/link";

export default function ROICalculatorPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href={"/"}>
                <ArrowLeft className="w-6 h-6 text-white" />
              </Link>
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">
                  ROI Calculator
                </h1>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Investment Tools
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/20 rounded-full">
              <PieChart className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Estate Investment
            <span className="text-blue-400"> Calculator</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Calculate your potential returns on real estate investments with our
            comprehensive ROI calculator. Plan your investment strategy with
            accurate projections.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <BarChart3 className="w-5 h-5 text-green-400" />
              <span className="text-white">Rental Income</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-white">Capital Appreciation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Investment Calculator
              </h3>
              <p className="text-gray-600">
                Adjust the parameters below to see your potential returns
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left side - Controls */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <label className="block text-gray-900 text-lg mb-4 font-semibold">
                    Investment Amount
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-gray-900">₹</span>
                    <input
                      type="number"
                      value={investmentAmount}
                      onChange={(e) =>
                        setInvestmentAmount(Number(e.target.value) || 0)
                      }
                      className="flex-1 bg-white border-2 border-gray-200 rounded-xl px-4 py-4 text-gray-900 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                      placeholder="Enter amount"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Current: ₹ {investmentAmount.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-gray-900 text-lg font-semibold">
                      Net Rental Yield
                    </label>
                    <span className="text-green-600 font-bold text-2xl">
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
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1%</span>
                    <span>15%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Annual rental income as % of investment
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-gray-900 text-lg font-semibold">
                      Annual Appreciation
                    </label>
                    <span className="text-purple-600 font-bold text-2xl">
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
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-purple"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1%</span>
                    <span>15%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Expected yearly property value growth
                  </p>
                </div>
              </div>

              {/* Right side - Chart and Results */}
              <div>
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    5-Year Projection
                  </h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-800">
                          Total Rental Income
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-green-900">
                        ₹{" "}
                        {Math.round(returns[4].rental).toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-blue-800">
                          Capital Appreciation
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-blue-900">
                        ₹{" "}
                        {Math.round(returns[4].capital).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Bar Chart */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Year-by-Year Returns
                  </h4>
                  <div className="flex items-end justify-between h-48 bg-gradient-to-t from-gray-50 to-white rounded-xl p-4 border border-gray-200">
                    {returns.map((data, index) => {
                      const maxValue = Math.max(...returns.map((r) => r.total));
                      const rentalHeight =
                        maxValue > 0 ? (data.rental / maxValue) * 160 : 4;
                      const capitalHeight =
                        maxValue > 0 ? (data.capital / maxValue) * 160 : 4;

                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center group"
                        >
                          <div className="relative">
                            <div className="flex flex-col items-center mb-2 transition-transform group-hover:scale-105">
                              <div
                                className="w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg shadow-sm"
                                style={{
                                  height: `${capitalHeight}px`,
                                  minHeight: "8px",
                                }}
                              ></div>
                              <div
                                className="w-10 bg-gradient-to-t from-green-500 to-green-400 rounded-b-lg shadow-sm"
                                style={{
                                  height: `${rentalHeight}px`,
                                  minHeight: "8px",
                                }}
                              ></div>
                            </div>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                              ₹ {Math.round(data.total).toLocaleString("en-IN")}
                            </div>
                          </div>
                          <span className="text-sm text-gray-600 font-medium mt-2">
                            Year {data.year}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Enhanced Results */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Investment Summary
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700 font-medium">
                        Average Annual Return
                      </span>
                      <span className="text-2xl font-bold text-blue-600">
                        {avgReturn.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-gray-200">
                      <span className="text-gray-700 font-medium">
                        Total ROI (5 Years)
                      </span>
                      <span className="text-2xl font-bold text-green-600">
                        ₹ {Math.round(totalROI).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-gray-200">
                      <span className="text-gray-700 font-medium">
                        Final Investment Value
                      </span>
                      <span className="text-2xl font-bold text-purple-600">
                        ₹ {Math.round(finalValue).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300 mb-2">
            This calculator provides estimates based on the inputs provided.
            Actual returns may vary based on market conditions.
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 Real Estate Investment Calculator. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .slider-green::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #10b981, #059669);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
          border: 2px solid white;
        }

        .slider-green::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #10b981, #059669);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
        }

        .slider-purple::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #7c3aed);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(139, 92, 246, 0.3);
          border: 2px solid white;
        }

        .slider-purple::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #7c3aed);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 4px 8px rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </div>
  );
}
