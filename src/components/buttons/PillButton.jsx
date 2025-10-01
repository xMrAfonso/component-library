export default function PillButton({ children, ...props }){
  return (
    <button {...props} className="px-5 py-2 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-600 focus:outline-none">
      {children}
    </button>
  )
}
