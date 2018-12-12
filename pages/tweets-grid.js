import Layout from "../components/Layout.js";
import Link from "next/link";
import Tweet from "../components/Tweet.js";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0
};

const itemStyles = {
  flex: "1 1 290px",
  maxWidth: "290px",
  margin: "1%",
  width: "99%"
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

const TweetsGrid = props => {
  return (
    <Layout>
      <style jsx>{`
        html {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
        }
        .my-gallery-class {
          padding: 0;
          margin: 0;
        }
      `}</style>
      <Masonry
        className={"my-gallery-class"} // default ''
        elementType={"ul"} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {props.tweets.map((tweet, i) => (
          <li style={itemStyles} key={i}>
            <Link as={`/t/${tweet.id}`} href={`/tweet?id=${tweet.id}`}>
              <Tweet tweet={tweet} />
            </Link>
          </li>
        ))}
      </Masonry>
    </Layout>
  );
};
export default TweetsGrid;
