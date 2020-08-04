import React  from 'react'
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'
import {shopItemSelector} from "../../redux/shop/shop-selector"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

const ShopPage =({collections})=>
(
    <div>
        {
            collections.map(({id,...otherPropsData})=>(
                <CollectionPreview key={id} {...otherPropsData}  ></CollectionPreview>
            ))
        }
    </div>
)

const mapStateToProps=createStructuredSelector({
    collections:shopItemSelector
})

export default connect(mapStateToProps)(ShopPage)