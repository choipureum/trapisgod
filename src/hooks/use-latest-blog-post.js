import { graphql, useStaticQuery } from "gatsby"

const useLatestPost = () => {
  const {
    allContentfulPost: { nodes },
  } = useStaticQuery(graphql`
    query latestBlogLinksQuery {
      allContentfulPost(sort: { fields: createdAt, order: DESC }, limit: 3) {
        nodes {
          title
          gatsbyPath(filePath: "/partnership/{contentfulPost.url}")
          createdAt(formatString: "DD MMMM, YYYY")
          introduction
          logo {
            gatsbyImageData(
              width: 30
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

export default useLatestPost
