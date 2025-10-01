export default function FeatureCard({ title, description }){
  return (
    <div className="p-5 rounded-2xl bg-gradient-card border border-gray-100">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <ul className="mt-3 space-y-1 text-sm text-gray-700">
        <li>• Fast to use</li>
        <li>• Accessible</li>
        <li>• Small bundle size</li>
      </ul>
    </div>
  )
}
