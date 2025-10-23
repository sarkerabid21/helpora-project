export default function DonorsList() {
  const donors = [
    { name: "Sarah Johnson", amount: "$5,000", avatar: "👩‍💼" },
    { name: "Michael Chen", amount: "$3,500", avatar: "👨‍💼" },
    { name: "Emma Williams", amount: "$2,800", avatar: "👩‍🦰" },
    { name: "James Brown", amount: "$2,200", avatar: "👨‍🦱" },
    { name: "Lisa Anderson", amount: "$1,800", avatar: "👩‍🦳" },
  ]

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Top Donors</h3>
      <div className="space-y-4">
        {donors.map((donor, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="text-3xl">{donor.avatar}</div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{donor.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Active donor</p>
              </div>
            </div>
            <p className="font-bold text-green-600 dark:text-blue-400">{donor.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
