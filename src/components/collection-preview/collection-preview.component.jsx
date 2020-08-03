import "./collection-preview.styles.scss"
import React from 'react'
import CollectionItem from "../collection-item/collection-item.component"

const Collection_Preview=({title,items})=>(
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
export default Collection_Preview