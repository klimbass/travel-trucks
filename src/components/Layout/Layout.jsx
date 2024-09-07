import AppBar from '../AppBar/AppBar.jsx';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>{children}</main>
    </>
  );
}
