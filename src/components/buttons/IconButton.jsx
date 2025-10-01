export default function IconButton({ children, ...props }){
  return (
    <button {...props} className="p-2 rounded-md hover:bg-gray-100 inline-flex items-center justify-center focus:outline-none" >
      <span className="text-lg">{children}</span>
    </button>
  )
}
