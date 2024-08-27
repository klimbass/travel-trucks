import { Link } from "react-router-dom";

export default function AppBar() {
    return (
        <>
         
        <div>Logo</div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        </nav>
        </>
    );
}