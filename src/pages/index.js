import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HomeHeader from "../components/home/home-header"
import HomeMission from "../components/home/home-mission"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
  <HomeHeader/>
  <HomeMission/>
  </div>
)

export default IndexPage
