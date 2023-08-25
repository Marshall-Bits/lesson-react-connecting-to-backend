import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/apartments">Apartments</Link>
                </li>
                <li>
                    <Link to="/apartments/add">Add Apartment</Link>
                </li>
            </ul>
        </nav>
    )
}