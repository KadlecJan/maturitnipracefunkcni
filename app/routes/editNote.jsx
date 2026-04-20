// app/routes/_index.jsx (nebo kde máš loader + list)
import { redirect } from "react-router";

import Header from "../components/header";

export async function action({ request }) {
  const formData = await request.formData();

  return redirect("/");
}
export default function EditNote() {
  return <Header />;
}
