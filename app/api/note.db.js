import { sql } from "./sql";

export async function getNoteData() {
  const response = await sql(`SELECT * FROM pre_pzop_note ORDER BY date ASC`);
  return response;
}
export async function addNote(note) {
  const response = await sql(
    `INSERT INTO pre_pzop_note (title, category_short, text, date) VALUES ('${note.title}', '${note.category_short}', '${note.text}', '${note.date}')`,
  );
  return response;
}

export async function delNote(id) {
  const response = await sql(`DELETE FROM pre_pzop_note WHERE id = ${id}`);
  return response;
}
