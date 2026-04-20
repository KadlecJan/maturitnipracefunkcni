import { Form, useLoaderData, useParams } from "react-router";
import { sql } from "../api/sql";
import Header from "../components/header";

export async function loader({ params }) {
  const id = params.noteDetail;

  let note = await sql(`SELECT * FROM pre_pzop_note WHERE id = ${id}`);

  return { note };
}

export default function NoteDetail() {
  const { note } = useLoaderData();

  return (
    <section>
      <Header />
      <article className="bg-teal-700 text-white hover:bg-teal-600 transition rounded-2xl shadow-lg p-5 flex flex-col gap-3 max-w-2xl mx-auto mt-10">
        <h2 className="text-xl font-bold">{note[0].category_short}</h2>
        <h1 className="text-2xl font-bold">{note[0].title}</h1>
        <p className="text-lg">{note[0].text}</p>
        <section className="flex justify-end mt-2">
          <Form action="/delNote" method="post">
            <input type="hidden" name="id" value={note[0].id} />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-lg transition"
            >
              Delete
            </button>
          </Form>
          <Form action="/editNote" method="post">
            <input type="hidden" name="id" value={note[0].id} />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-lg transition"
            >
              Edit
            </button>
          </Form>
        </section>
      </article>
    </section>
  );
}
