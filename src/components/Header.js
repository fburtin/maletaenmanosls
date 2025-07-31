import '../styles/Header.css';

function Header() {
  return (
    <header className="py-3 text-center">
      <div className="container">
        <img
          src="/images/logo.png"
          alt="Logo Maleta en Mano"
          className="logo-img"
        />
      </div>
    </header>
  );
}

export default Header;
