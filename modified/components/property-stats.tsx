"use client"

import { TrendingUp, Building2, Users, Award } from "lucide-react"

export function PropertyStats() {
  const stats = [
    {
      icon: Building2,
      value: "10,000+",
      label: "Properties Listed",
      description: "Premium properties available",
    },
    {
      icon: Users,
      value: "50,000+",
      label: "Happy Customers",
      description: "Satisfied property buyers",
    },
    {
      icon: TrendingUp,
      value: "15%",
      label: "Average ROI",
      description: "Annual return on investment",
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      description: "Successful transactions",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-lg font-semibold text-gray-700">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
