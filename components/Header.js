import Link from "next/link";

const headerStyles = {
  backgroundColor: "#222",
  padding: 10
};
const linkStyle = {
  marginRight: 15,
  color: "#FFF"
};

const Header = () => (
  <div>
    <style jsx>{``}</style>
    <div style={headerStyles} className="tml-header">
      <Link href="/">
        <a style={linkStyle}>Home Timeline</a>
      </Link>
    </div>
  </div>
);

export default Header;
