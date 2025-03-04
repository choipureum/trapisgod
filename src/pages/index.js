import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
// import Features from "../components/Features/Features"
// import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="TrapIsGodSound"
          subTitle="TrapIsGodSound(트랩이스갓사운드)는 K-Culture를 이끄는 종합 콘텐츠 제작사로, 차세대 예술 산업을 창조하는 선도적인 회사입니다."
        />
        <BasicTextModule
          title="TrapisgodSound: Leading Innovation in Global Entertainment  "
          content="트랩이스갓사운드는 글로벌 엔터테인먼트 산업에서 다양한 주요 파트너들과 협력하여, 음악 및 방송 콘텐츠 분야에서 지속적으로 혁신을 이끌어가고 있습니다."
          link="/partnership"
          linkText="Partnership"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
      </Layout>
    </>
  )
}

export default Index
