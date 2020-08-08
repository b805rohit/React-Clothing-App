import React  from 'react'
import { Route,Switch } from "react-router-dom"
import CollectionsOverview from "../../components/collection-preview/collection-preview.component"
import CollectionPage from "../../pages/collection/collection.component"

const ShopPage =({match})=>(
    <div className="shop-page">   
        <Switch>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </Switch>
    </div>
)

export default ShopPage