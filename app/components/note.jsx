// app/components/note.jsx

/**
 * Komponenta jedné poznámky.
 *
 * @param {Object} props
 * @param {{
 *  id: number|string,
 *  title: string,
 *  text: string,
 *  date: string,
 *  category_short?: string
 * }} props.data
 * @returns {JSX.Element}
 */
import { Form, Link } from "react-router";
import { getCategories } from "../api/categories.db";

export default function Note({ data, categories }) {
  function getCategoryLong(short) {
    let category = categories.find((cat) => cat.category_short === short);
    return category
      ? category.category_long || category.category_short
      : "Unknown Category";
  }

  return (
    <div className="bg-teal-700  text-white hover:bg-teal-600 transition rounded-2xl shadow-lg p-5 flex flex-col gap-3">
      <header className="flex justify-between items-start">
        <h2 className="text-xl font-bold">{data.title}</h2>
        {data.category_short && (
          <span className="bg-teal-900 text-sm px-2 py-1 rounded-lg">
            {getCategoryLong(data.category_short)}
          </span>
        )}
      </header>

      <p className="text-sm text-teal-100">{data.date}</p>
      <p className="text-teal-50 leading-relaxed">{data.text}</p>

      <Link to={`/note/${data.id}`}>Zobrazit detaily</Link>

      <section className="flex justify-end mt-2">
        <Form action="/delNote" method="post">
          <input type="hidden" name="id" value={data.id} />

          <button
            type="submit"
            // onClick={(e) => {
            //   if (!confirm("Opravdu chceš smazat tuto poznámku?")) {
            //     e.preventDefault();
            //   }
            // }}
            className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-lg transition"
          >
            Delete
          </button>
        </Form>
      </section>
    </div>
  );
}
