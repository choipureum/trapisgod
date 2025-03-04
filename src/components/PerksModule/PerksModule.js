import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="Trend Leadership"
          content="주요 파트너사와의 협력을 통해 전 세계적인 트렌드를 선도하고, K-POP 및 K-Culture의 확산에 중요한 역할을 하고 있습니다."
        ></Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="Top-tier Team"
          content="새로운 음악적 도전을 함께할 최고의 팀, 트랩이스갓사운드"
        >
          {/*<StaticImage*/}
          {/*  src="../../../static/logos/contentful-logo.svg"*/}
          {/*  alt="Perk Image"*/}
          {/*  layout="constrained"*/}
          {/*  placeholder="tracedSVG"*/}
          {/*/>*/}
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
