/**
 * Hlavní navigační header aplikace.
 *
 * Obsahuje odkaz na hlavní stránku a stránku pro přidání poznámky.
 *
 * @returns {JSX.Element}
 */
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-teal-800 text-white p-4 flex flex-row justify-between">
      <Link to="/" className="text-white hover:text-teal-200">
        <h1 className="text-2xl font-bold">My Notes</h1>
      </Link>
      <Link to="/addNote" className="text-white hover:text-teal-200">
        Add Notee
      </Link>
    </header>
  );
}
