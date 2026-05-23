const Category = ({ category, selectCategory, handleCategory }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-xl mb-4">
      <h2 className="text-lg font-semibold text-white mb-3">Categories</h2>

      <ul className="flex gap-3 flex-wrap">
        <button
          onClick={() => handleCategory("All")}
          className={`px-3 py-1 rounded-lg text-sm ${
            selectCategory === "All"
              ? "bg-red-500"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          All
        </button>

        {category.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-3 py-1 rounded-lg text-sm ${
              selectCategory === cat
                ? "bg-red-500"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Category;
