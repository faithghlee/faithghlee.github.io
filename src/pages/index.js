import React from "react"
import Layout from "../components/layout"
import "../styles/index.scss"
import profileImage from "../images/profile_image.jpeg"
const IndexPage = () => {

  return (
    <Layout>
      <div className="introduction">
      <img className="profile-pic" src={profileImage}></img>
      <h1> Faith Lee</h1>
      <h1> Data Scientist | Statistician </h1>
      <p> I am a data scientist/statistician based in Quebec City, QC. I hold a master's degree in biostatistics and I have experience in analyzing data coming from different domains. I am very interested in the fields of survival analysis, longitudinal data analysis, machine learning and use of statistics in finance. I am also passionate in learning about computer science and the French language.</p>

      <h1>Skills</h1>
      <h2> Python, R, SAS, Java, HTML, CSS, LaTeX</h2>
      <h2> English (bilingual), Mandarin Chinese (bilingual), French (intermediate-advance)</h2>

      <h1>Experience</h1>
      <h2> Data Scientist, MindBridge Analytics Inc. (Jun 2018 - Apr 2020)</h2>
      <h2> Analyst (Co-op), Institute for Clinical and Evaluative Sciences (May 2017 - Dec 2017)</h2>

      <h1>Curriculum Vitae</h1>
      <a href="https://www.linkedin.com/in/faith-lee-6257b193/"><p> LinkedIn</p></a>
      <a href="https://github.com/faithghlee"><p> GitHub</p></a>
      </div>



    </Layout>

  )

}

export default IndexPage; 
