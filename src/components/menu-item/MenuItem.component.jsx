import React from "react"
import "./menuitem.styles.scss"

const MenuItem=({title,imageUrl,size})=>(
    <div style={{backgroundImage:`url(${imageUrl})`}} className={`${size} menu-item`}>
        <div style={{backgroundImage:`url(${imageUrl})`}} className="background-img" />
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span className="sub-title">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem