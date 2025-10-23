// /payment-success.jsx
export default function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-700">🎉 Donation Successful!</h1>
      <p className="mt-2 text-gray-700">Thank you for your contribution 💚</p>
      <a href="/donations" className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
        Back to Donations
      </a>
    </div>
  );
}
