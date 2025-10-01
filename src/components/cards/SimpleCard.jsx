export default function SimpleCard({ title, description }){
  return (
    <div className="p-5 rounded-xl bg-white shadow-sm border border-gray-100">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="mt-4 flex gap-2">
        <button className="text-sm px-3 py-1 rounded bg-indigo-50 text-indigo-600">Action</button>
        <button className="text-sm px-3 py-1 rounded bg-gray-50">More</button>
      </div>
    </div>
  )
}
