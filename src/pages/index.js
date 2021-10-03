import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/hero/hero.component"
import Work from "../components/work/work.component"
import Features from "../components/features/features.component"
import Contact from "../components/contact/contact.component"

const HomePage = () => (
  <Layout>
    <Seo title="Web Developer and Designer" />
    <div style={{ backgroundColor: "#f2f4f6" }}>
      <Hero />
      <Work />
      <Features />
      <Contact />
    </div>
  </Layout>
)

export default HomePage
