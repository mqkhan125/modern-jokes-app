const Header = ({ total }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">🎬 Joke Dashboard</h1>

      <div className="bg-red-500 px-4 py-2 rounded-lg font-semibold">
        Total: {total}
      </div>
    </div>
  );
};

export default Header;
