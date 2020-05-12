import React from "react"
import Layout from "../components/layout"
import "../styles/current.css"
const CurrentPage = () => {

  return (
    <Layout>
        <div className = "current">
        <h1>Currently ...</h1>
        <ul>
            <li>Reading :  Sapiens : Une brève histoire de l'humanité  </li>
            <progress id="file" value="36" max="100"> Prog </progress>

            <li>Working on : <a href = "https://www.soa.org/education/exam-req/edu-exam-fm-detail/">Exam FM (Financial Mathematics)</a> --> June 13!</li>
            <li>Working on : <a href ="https://www.tru.ca/distance/courses/comp2231.html">COMP 2231 TRU-OL Data Structures and Algorithms</a></li>
        </ul>
        </div>


    </Layout>
  )
}

export default CurrentPage