import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("addNote", "routes/addNote.jsx"),
  route("delNote", "routes/delNote.jsx"),
  route("test", "routes/test.jsx"),
  route("note/:noteDetail", "routes/noteDetail.jsx"),
];
