import React from "react"
import Layout from "../components/layout"
import "../styles/about.css"
import backgroundImage from "../components/Background_Singapore.jpeg"
const AboutMe = () => {

  return (
    <Layout>
      <h1> Hello there. Thanks for dropping by. </h1>
      <img
                    src={backgroundImage}
                    className="background-image"
                    width=""
                    height=""
                    alt= "Landscape of Singapore"
                />

      <p> I am Faith Lee, a Singaporean who has been living in Canada since 2013. I first moved to Newfoundland on my own for my bachelor's degree. 
      I have lived in St. John's, Waterloo, Toronto, Ottawa and now Quebec City. Being able to live in different places has taught me how to adapt easily to circumstances and be independent. </p>

      <p> I derive a great amount of joy from learning new things, and constantly look to occupy my spare time with picking up something new. I also love cooking, running and reading.</p>
      </Layout>
  )


}

export default AboutMe 