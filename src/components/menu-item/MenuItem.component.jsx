import React from "react"
import {withRouter } from "react-router-dom"
import "./menuitem.styles.scss"

const MenuItem=({title,imageUrl,size,path,history,match})=>{
    return(
    <div style={{backgroundImage:`url(${imageUrl})`}} className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${path}`)}>
        <div style={{backgroundImage:`url(${imageUrl})`}} className="background-img" />
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span className="sub-title">SHOP NOW</span>
        </div>
    </div>
)}

export default withRouter(MenuItem)