import { graphql, useStaticQuery } from "gatsby"

const useAllBlogPost = () => {
  const {
    allContentfulPost: { nodes },
  } = useStaticQuery(graphql`
    query allBlogLinksQuery {
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/partnership/{contentfulPost.url}")
          createdAt(formatString: "DD MMMM, YYYY")
          introduction
          logo {
            gatsbyImageData(
              width: 44
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return nodes
}

export default useAllBlogPost
