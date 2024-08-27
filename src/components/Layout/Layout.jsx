import AppBar from "../AppBar/AppBar.jsx";

export default function Layout({children}) {
    return (
        <div>
            <div><AppBar /></div>
            <div>{children}</div>
        </div>
    );
}