// app/components/Note.jsx

export default function Note({ data }) {
  console.log(data);
  return (
    <div className="">
      <h2>{data.title}</h2>
      <small>
        {data.date} - <b>{data.category_shortcut}</b>
      </small>
      <p>{data.text}</p>
    </div>
  );
}
