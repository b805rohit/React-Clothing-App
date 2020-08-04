import React from 'react'
import "./directive.styles.scss"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { sectionSelector } from "../../redux/directory/directory-selector"
import MenuItem from "../menu-item/MenuItem.component"

const Directive=({section})=>(
    <div className="directory-menu">
        {
            section.map(({id,...otherPropsData})=>(
                <MenuItem key={id} {...otherPropsData}/>  
            ))
        }
    </div>  
)
    
const mapStateToProps=createStructuredSelector({
  section:sectionSelector
})

export default connect(mapStateToProps)(Directive)