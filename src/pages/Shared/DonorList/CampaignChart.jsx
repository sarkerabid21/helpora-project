import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const campaignData = [
  { month: "Jan", donations: 4200, donors: 240, effectiveness: 85 },
  { month: "Feb", donations: 3800, donors: 221, effectiveness: 78 },
  { month: "Mar", donations: 5200, donors: 329, effectiveness: 92 },
  { month: "Apr", donations: 4890, donors: 300, effectiveness: 88 },
  { month: "May", donations: 6100, donors: 380, effectiveness: 95 },
  { month: "Jun", donations: 7200, donors: 420, effectiveness: 98 },
]

export default function CampaignChart() {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Campaign Effectiveness</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Track your donation trends and campaign performance
            </p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={campaignData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorDonors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                  color: "#f1f5f9",
                }}
              />
              <Legend />
              <Bar dataKey="donations" fill="url(#colorDonations)" radius={[8, 8, 0, 0]} name="Total Donations ($)" />
              <Bar dataKey="donors" fill="url(#colorDonors)" radius={[8, 8, 0, 0]} name="Number of Donors" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
