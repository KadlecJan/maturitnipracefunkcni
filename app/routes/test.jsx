import { useLoaderData } from "react-router";
import { sql } from "../api/sql";
import Header from "../components/header";

export async function loader() {
  let categoryList = await sql(`SELECT * FROM pre_pzop_category`);
  let noteList = await sql(`SELECT * FROM pre_pzop_note`);

  return { categoryList, noteList };
}

export default function Test() {
  const { categoryList, noteList } = useLoaderData();
  return (
    <div>
      <Header />
      <h1>Test</h1>
      {/* kategorie */}
      <ul>
        {categoryList.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      {/* poznámky */}
      <ul>
        {noteList.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}
