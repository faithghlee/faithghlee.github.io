import React from "react"
import Layout from "../components/layout"
import "../styles/projects.css"
import cheriskCakes from "../images/cherishCakes.png"
const Projects = () => {

  return (
    <Layout>
      <div className="project">
      <a href="https://cherishcakes.ca/"><h1>CherishCakes</h1></a>
      <img src={cheriskCakes}
      width = ""
      height= "" />

      <p>Using the <a href="https://www.gatsbyjs.org/">Gatsby open-source framework</a>, a friend and I collaborated to create a static website for another friend who's a freelance baker.
      Instead of advertising her services on Kijiji all the time, she's able to display information about her services to customers and also showcase her past creations.
      Gradual improvements to be made and this was a project where I learned something about web development and frontend tools. 
      </p>

      </div>
    </Layout>
  )
}

export default Projects