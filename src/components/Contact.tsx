
function Contact() {
  return (
    <div className="flex px-2   hover:bg-gray-100 py-1 rounded-l ">
      <img src="assets/Ellipse 1.png" alt=""  className="w-9 rouded-full" />
      <div className="flex-1  ml-4">
        <p className="text-sm font-semibold ">Liam Anderson</p>
        <p className="text-xs text-gray-400">Hey how is it going</p>
      </div>

      <div>
        <p className="text-sm text-gray-400 font-mono -mb-1">04:50 pm</p>
        <span className="bg-blue-500 text-xs text-white font-semibold px-1 -py-0.5 rounded-full  ">1</span>
      </div>
    </div>
  )
}

export default Contact