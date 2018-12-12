import fetch from "isomorphic-unfetch";
import TweetsGrid from "./tweets-grid";

TweetsGrid.getInitialProps = async function() {
  const res = await fetch("http://127.0.0.1:3000/timeline");
  const data = await res.json();

  return {
    tweets: data
  };
};

export default TweetsGrid;
