import React from "react"
import Email from "../components/Email"
import Heroe from "../components/Heroe"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <Heroe />
      <Trips heading="Our favourite Destination" />
      <Testimonials />
      <Stats />
      <Email />
    </Layout>
  )
  

export default IndexPage
