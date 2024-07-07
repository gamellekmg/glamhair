import React, { Component } from "react"
import Disqus from "disqus-react"

export default class extends Component {
  render() {
    const disqusShortname = "gokart-1"
    const disqusConfig = {
      url: "http://localhost:3000",
      identifier: "article-id",
      title: "Event racing"
    }

    return (
      <div className="article-container container">
        <br></br>
        <h3>Event Community discussion</h3>

        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}