import { useLoaderData } from "react-router";
import { addNote } from "../api/note.db";
import AddNoteForm from "../components/addNoteForm";
import Header from "../components/header";
import { getCategories } from "../api/categories.db";
// app/routes/addNote.jsx

export async function loader() {
  let categories = await getCategories();
  return { categories };
}
export async function action({ request }) {
  const formData = await request.formData();

  const note = {
    title: formData.get("title"),
    category_short: formData.get("category_short"),
    text: formData.get("text"),
    date: formData.get("date"),
  };

  console.log(note);

  await addNote(note);

  return null;
}
export default function AddNote() {
  let categories = useLoaderData();
  return (
    <div>
      <Header />
      <AddNoteForm categories={categories} />
    </div>
  );
}
