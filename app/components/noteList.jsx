// app/components/NoteList.jsx
import Note from "./note";
/**
 * Seznam poznámek.
 *
 * @param {Object} props
 * @param {Array} props.loaderData
 * Pole poznámek načtené z loaderu.
 * @returns {JSX.Element}
 */

export default function NoteList({ loaderData, categories }) {
  return (
    <div className="flex justify-center px-4 mt-8">
      <div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loaderData.map((note) => (
          <Note key={note.id} data={note} categories={categories} />
        ))}
      </div>
    </div>
  );
}
