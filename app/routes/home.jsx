// app/routes/_index.jsx
import { getCategories } from "../api/categories.db";
import { getNoteData } from "../api/note.db";
import Categories from "../components/categories";
import Header from "../components/header";
import NoteList from "../components/noteList";
import { useLoaderData } from "react-router";
import { useState } from "react";

export function meta() {
  return [{ title: "My Notes" }, { name: "description", content: "Notes app" }];
}

export async function loader() {
  let data = await getNoteData();
  let categories = await getCategories();
  return { data, categories };
}

export default function Home() {
  let { data, categories } = useLoaderData();

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNotes =
    selectedCategory === "all"
      ? data
      : data.filter((note) => note.category_short === selectedCategory);

  return (
    <main>
      <Header />

      <section id="noteList" className="lg:mx-24 sm:mx-0">
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <NoteList loaderData={filteredNotes} categories={categories} />
      </section>
    </main>
  );
}
