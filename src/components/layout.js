import React from "react"
import NavigationBar from "./header"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import layoutStyles from "../styles/layout.module.scss"
import "../styles/index.scss"

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}> 
                <NavigationBar/>
                {props.children} 
            </div>
            <Footer/>
        </div>
    )
}


export default Layout