// app/routes/_index.jsx (nebo kde máš loader + list)
import { redirect } from "react-router";
import { delNote } from "../api/note.db";
import Header from "../components/header";

export async function action({ request }) {
  const formData = await request.formData();

  const id = formData.get("id");
  await delNote(id);

  return redirect("/");
}
export default function DelNote() {
  return <Header />;
}
