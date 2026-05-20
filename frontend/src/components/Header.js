const Header = ({ total }) => {
  return (
    <h1 className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-5 text-center text-2xl font-bold shadow-lg">
      Modern Jokes App
      <span className="text-yellow-300 ml-2">{total}</span>
    </h1>
  );
};

export default Header;
