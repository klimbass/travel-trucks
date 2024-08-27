import { Link, Outlet } from "react-router-dom";

export default function ItemDetails() {
    return (
        <div>
            <h2>ItemDetails</h2>
            <div>
                <Link to='features' >Features</Link>
                <Link to='reviews' >Reviews</Link>
                <Outlet />
            </div>
        </div>
    );
}