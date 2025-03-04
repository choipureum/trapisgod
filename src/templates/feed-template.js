import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import ProductFeed from "../components/Feeds/ProductFeed"
import PostFeed from "../components/Feeds/PostFeed"

const getTemplate = (contentfulPage) => {
  const { feedType } = contentfulPage

  switch (feedType) {
    case "Products":
      return <ProductFeed {...contentfulPage} />

    default:
      return <PostFeed {...contentfulPage} />
  }
}

const FeedTemplate = (contentfulPage) => {
  const headerImage = getImage(contentfulPage.headerImage)
  return (
    <>
      <Seo title={contentfulPage.title} />
      <Layout>
        <SimpleBanner title={contentfulPage.title}>
          <GatsbyImage
            className="banner__image"
            image={headerImage}
            alt={`${contentfulPage.title} feed`}
          />
        </SimpleBanner>
        <div className="section">
          {contentfulPage?.feedType !== "Products" && (
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{ marginBottom: "60px" }}>
                트랩이스갓사운드는 글로벌 엔터테인먼트 산업에서 다양한 주요
                파트너들과 협력하여, 음악 및 방송 콘텐츠 분야에서 지속적으로
                혁신을 이끌어가고 있습니다. <br />
                주요 파트너사와의 협력을 통해 전 세계적인 트렌드를 선도하고,
                K-POP 및 K-Culture의 확산에 중요한 역할을 하고 있습니다.
              </p>
              <>
                <h3>주요 파트너사</h3>
                <hr style={{ width: "50vw" }} />
              </>
            </div>
          )}

          {contentfulPage?.feedType === "Products" && (
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{ marginBottom: "60px" }}>
                새로운 음악적 도전을 함께할 최고의 팀, 트랩이스갓사운드 최고의
                아티스트들이 선택한 프로듀서 $ÜN(썬)은 재즈, 클래식, 드라마,
                방송 OST 등 모든 장르를 넘나드는 감각적인 프로듀싱, 독창적인
                음악적 해석과 섬세한 프로듀싱으로 작곡, 편곡, 프로듀싱까지 음악
                제작의 모든 과정을 완벽하게 책임집니다.
              </p>
              <>
                <h3>포트폴리오</h3>
                <hr style={{ width: "50vw" }} />
              </>
            </div>
          )}

          <div className="feed" style={{ justifyContent: "center" }}>
            {getTemplate(contentfulPage)}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default FeedTemplate
