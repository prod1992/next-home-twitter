import React, { Component } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.appPrefix = "tml";
  }

  render() {
    return <TwitterTweetEmbed tweetId={String(this.props.tweet.id_str)} />;
  }
}

export default Tweet;
