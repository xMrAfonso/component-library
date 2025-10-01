export default function PrimaryButton({ children, ...props }){
  return (
    <button {...props} className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
      {children}
    </button>
  )
}
