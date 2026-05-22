

const Search = ({onChange}) => {

  return (
    <div>
      <input
        // value={searchTerm}
        onChange={onChange}
        type="search"
        placeholder="Search jokes..."
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
      />
    </div>
  );
}

export default Search