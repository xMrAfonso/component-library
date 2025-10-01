export default function PricingCard({ plan, price, features=[] }){
  return (
    <div className="p-6 rounded-2xl bg-white shadow-md border border-gray-100">
      <div className="flex items-baseline gap-3">
        <h3 className="text-xl font-semibold">{plan}</h3>
        <div className="text-2xl font-bold">{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {features.map((f, i) => <li key={i}>• {f}</li>)}
      </ul>
      <div className="mt-5">
        <button className="w-full rounded-lg py-2 bg-indigo-600 text-white">Choose {plan}</button>
      </div>
    </div>
  )
}
