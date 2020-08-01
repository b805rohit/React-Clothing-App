import React  from 'react'
import SHOP_DATA from "./ShopData"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            collections:SHOP_DATA
        }
    }
        render(){
            const {collections}=this.state
            return(
                <div>
                    {
                        collections.map(({id,...otherPropsData})=>(
                            <CollectionPreview key={id} {...otherPropsData}  ></CollectionPreview>
                        ))
                    }
                </div>
            )
        }
}

export default ShopPage