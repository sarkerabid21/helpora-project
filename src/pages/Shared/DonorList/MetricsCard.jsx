export default function MetricsCard({ label, value, change, color, delay, isLoaded }) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg mb-4`}></div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{label}</p>
      <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{value}</p>
      <p className="text-sm text-green-600 dark:text-green-400 font-medium">{change}</p>
    </div>
  )
}
