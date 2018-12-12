import Header from "./Header";

const Layout = props => (
  <div>
    <style jsx>{`
      body {
        margin: 0;
        padding: 0;
        font-smoothing: antialiased;
        -webkit-font-smoothing: antialiased;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `}</style>
    <div>
      <Header />
      {props.children}
    </div>
  </div>
);

export default Layout;
