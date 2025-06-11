"use client"
import CountUp from 'react-countup';

export function PropertyStats() {
  const stats = [
    {
      value: "10,000+",
      label: "Properties Listed",
      description: "Premium properties available",
    },
    {
      value: "50,000+",
      label: "Happy Customers",
      description: "Satisfied property buyers",
    },
    {
      value: "15%",
      label: "Average ROI",
      description: "Annual return on investment",
    },
    {
      value: "98%",
      label: "Success Rate",
      description: "Successful transactions",
    },
  ]

  return (
    <section className="py-10 bg-emerald-900">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="space-y-2">
                <h3 className="text-3xl font-extrabold text-foreground">
                  <CountUp 
                    start={0}
                    end={parseFloat(stat.value.replace(/,/g, ''))}
                    duration={2.5}
                    separator=","
                    decimals={stat.value.includes('.') ? stat.value.split('.')[1].length : 0}
                  />
                </h3>
                <p className="text-lg font-bold text-foreground">{stat.label}</p>
                <p className="text-sm font-semibold text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
