import "./collection-preview.styles.scss"
import React from 'react'
import { connect } from "react-redux"
import {selectCollectionForPreview} from "../../redux/shop/shop-selector"
import { createStructuredSelector } from "reselect"
import CollectionItem from "../collection-item/collection-item.component"

const Collection_Preview=({collections})=>{
    return(
    collections.map(({title,items})=>
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
            {
                items.slice(0,4).map((item)=>(
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }
            </div>
        </div>
    )
)}

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionForPreview
})

export default connect(mapStateToProps)(Collection_Preview)