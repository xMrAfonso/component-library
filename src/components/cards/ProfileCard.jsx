export default function ProfileCard({ name, role }){
  return (
    <div className="p-5 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center gap-4">
      <div className="h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">{(name||'U')[0]}</div>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
      <div className="ml-auto">
        <button className="text-sm px-3 py-1 rounded bg-indigo-50 text-indigo-600">Follow</button>
      </div>
    </div>
  )
}
