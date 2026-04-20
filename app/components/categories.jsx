// app/components/Categories.jsx
/**
 * Komponenta pro výběr kategorie a filtrování poznámek.
 *
 * @param {Object} props
 * @param {{ id: number|string, category_short: string }[]} props.categories
 * @param {string} props.selectedCategory
 * @param {(category: string) => void} props.setSelectedCategory
 * @returns {JSX.Element}
 */
export default function Categories({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex flex-col text-center justify-center px-4 mt-8">
      <h1 className="text-2xl font-bold text-teal-800 mb-6">Categories</h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {/* ALL */}
        <button
          onClick={() => setSelectedCategory("all")}
          className={`rounded-2xl shadow-lg p-4 transition text-white ${
            selectedCategory === "all"
              ? "bg-teal-800 ring-2 ring-teal-400"
              : "bg-teal-700 hover:bg-teal-600"
          }`}
        >
          <h2 className="text-lg font-semibold">All</h2>
        </button>

        {/* Kategorie */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.category_short)}
            className={`rounded-2xl shadow-lg p-4 transition text-white ${
              selectedCategory === category.category_short
                ? "bg-teal-800 ring-2 ring-teal-400"
                : "bg-teal-700 hover:bg-teal-600"
            }`}
          >
            <h2 className="text-lg font-semibold">{category.category_short}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}
