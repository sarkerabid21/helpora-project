
import { useEffect, useState } from "react"
import MetricsCard from "./MetricsCard"
import DonorsList from "./DonorsList"
import CampaignChart from "./CampaignChart"

export default function DonorInsights() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const metrics = [
    { label: "Most Active Donors", value: "1,247", change: "+12.5%", color: "from-blue-500 to-blue-600" },
    { label: "Average Donation", value: "$156.80", change: "+8.2%", color: "from-indigo-500 to-indigo-600" },
    { label: "Popular Amount", value: "$50", change: "Most common", color: "from-purple-500 to-purple-600" },
    { label: "Highest Volume Day", value: "Tuesday", change: "42% of donations", color: "from-cyan-500 to-cyan-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="mb-6">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                💰 Fundraising Dashboard
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Donor Insights & Donation Data
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              Quickly view key metrics on your fundraising efforts. Gain valuable insights into your donors and donation
              data right from your dashboard. At a glance, view your most active donors, popular donation amounts, and
              the effectiveness of your campaigns.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Metrics Grid */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
              {metrics.map((metric, index) => (
                <MetricsCard key={index} {...metric} delay={index * 100} isLoaded={isLoaded} />
              ))}
            </div>

            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <CampaignChart />
            </div>

            {/* Donors List Section */}
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <DonorsList />
            </div>

            {/* CTA Section */}
            <div
              className={`bg-emerald-700  rounded-2xl p-8 sm:p-12 text-white shadow-xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">Raising more money online for your nonprofit</h2>
                  <p className="text-blue-100 text-lg">
                    has never been easier. Optimize your fundraising strategies with real-time insights.
                  </p>
                </div>
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
