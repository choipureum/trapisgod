import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FeaturedProductStyles } from "./FeaturesStyles"

const FeaturedProduct = ({ feature }) => {
  const { headerImage, title, introduction } = feature
  const image = getImage(headerImage)

  return (
    <FeaturedProductStyles style={{ height: "100px" }}>
      <Link>
        <GatsbyImage
          className="features__item--img"
          image={image}
          alt="Product Image"
        />
        {title && introduction && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            {introduction && <p>{introduction}</p>}
          </div>
        )}
      </Link>
    </FeaturedProductStyles>
  )
}

export default FeaturedProduct
