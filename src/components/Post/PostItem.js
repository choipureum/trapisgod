import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../Button/Button"
import { PostItemStyles } from "./PostStyles"

const BlogItem = ({ node }, key) => {
  const { title, introduction, logo } = node
  const logoImage = getImage(logo)
  return (
    <PostItemStyles
      key={key}
      style={{ height: "86px", justifyContent: "center" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {logo && (
          <GatsbyImage
            className="logo__image"
            image={logoImage}
            alt={`${title} feed`}
            style={{ borderRadius: "5px" }}
          />
        )}
        <h4 style={{ marginBottom: 0, fontSize: "14px" }}>{title}</h4>
      </div>
    </PostItemStyles>
  )
}

export default BlogItem
