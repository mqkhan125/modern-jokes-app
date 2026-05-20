const Sidebar = () => {
  return (
    <div className="w-64 bg-black p-6 hidden md:block">
      <h1 className="text-2xl font-bold text-red-500 mb-10">JOKES HUB</h1>

      <ul className="space-y-4 text-gray-300">
        <li className="hover:text-white cursor-pointer">🏠 Dashboard</li>
        <li className="hover:text-white cursor-pointer">🔥 Trending</li>
        <li className="hover:text-white cursor-pointer">😂 Jokes</li>
        <li className="hover:text-white cursor-pointer">⚙️ Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
