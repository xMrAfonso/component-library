export default function SecondaryButton({ children, ...props }){
  return (
    <button {...props} className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 hover:shadow-md focus:outline-none">
      {children}
    </button>
  )
}
