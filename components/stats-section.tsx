export default function StatsSection() {
  return (
    <section className="bg-accent py-12 border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-background">4,584+</h3>
            <p className="text-background font-medium text-lg">Users</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-background">4+</h3>
            <p className="text-background font-medium text-lg">Properties Funded</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-background">11%</h3>
            <p className="text-background font-medium text-lg">Average Returns</p>
          </div>
        </div>
      </div>
    </section>
  )
}
