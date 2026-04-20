// app/routes/addNote.jsx
/**
 * Formulář pro přidání nové poznámky.
 *
 * @param {Object} props
 * @param {{ categories: { id: number|string, category_short: string }[] }} props.categories
 * Data kategorií načtená z loaderu.
 * @returns {JSX.Element}
 */
import { Form, useNavigation } from "react-router";

export default function AddNoteForm({ categories }) {
  categories = categories.categories;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-teal-800 mb-6">Add Note</h2>

        <Form method="post" className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />

          <select
            name="category_short"
            required
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.category_short}>
                {category.category_short}
              </option>
            ))}
          </select>

          <textarea
            name="text"
            placeholder="Text"
            rows={4}
            required
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />

          <input
            type="date"
            name="date"
            defaultValue={today}
            required
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-800 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {isSubmitting ? "Adding..." : "Add Note"}
          </button>
        </Form>
      </div>
    </div>
  );
}
