import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"
import useAllProduct from "../../hooks/use-all-product"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaGoogle as Gmail,
} from "react-icons/fa"

const Footer = () => {
  const allProduct = useAllProduct()
  const siteMeta = UseSiteMetadata()
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        {siteMeta.instagramUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              Contact TrapIsGodSound<span>.</span>
            </h5>
            <ul>
              {siteMeta.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/${siteMeta.instagramUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`https://www.youtube.com/@song_camp`}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  <Youtube />
                </a>
              </li>
              <li>
                <a
                  href="mailto:tydollasun@trapisgod.com"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  <Gmail />
                </a>
              </li>
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Samsung-dong 27-28, Gangnam-gu, Seoul, Republic of Korea, 서울특별시
            강남구 삼성동 27-28, B2 플러스빌딩 (트랩이스갓사운드)
            <span>.</span>
          </p>
        </div>
      </CopyrightStyles>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>Copyright © TrapisGodSound Corporation. All Rights Reserved.</p>
        </div>
      </CopyrightStyles>
    </FooterStyles>
  )
}

export default Footer
