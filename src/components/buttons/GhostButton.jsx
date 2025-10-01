export default function GhostButton({ children, ...props }){
  return (
    <button {...props} className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
      {children}
    </button>
  )
}
