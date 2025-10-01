export default function ImageCard({ title, description }){
  return (
    <div className="p-5 rounded-xl bg-white shadow-sm border border-gray-100 flex flex-col">
      <div className="h-36 w-full rounded-md bg-gradient-to-r from-indigo-50 to-teal-50 flex items-center justify-center">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 7v10a2 2 0 0 0 2 2h14" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="10.5" r="1.5" fill="#06b6d4"/>
          <path d="M21 7l-5 5-3-3-6 6" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="font-semibold text-lg mt-4">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  )
}
