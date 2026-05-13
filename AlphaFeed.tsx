
const alerts = [
  'Whale accumulation detected',
  'Momentum breakout forming',
  'Liquidity spike detected'
]

export default function AlphaFeed() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">
        AI Alpha Feed
      </h2>

      <div className="grid gap-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-xl p-4 bg-zinc-900"
          >
            {alert}
          </div>
        ))}
      </div>
    </section>
  )
}
