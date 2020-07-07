import React from 'react'
import "./homepage.styles.scss"
import Directive from "../../components/directive/directive.component"

const Homepage=()=>(
    <div className="homepage">
        <div className="directory-menu">
            <Directive />
        </div>
    </div>
)

export default Homepage