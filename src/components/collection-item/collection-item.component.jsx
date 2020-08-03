import React from "react"
import CustomButton from "../custom-button/custom-button.component"
import { addItemToCart } from "../../redux/cart/cart-action"
import { connect } from "react-redux"
import "./collection-item.styles.scss"

const CollectionItem=({item,addItem})=>{
    const {name,price,imageUrl}=item
    return(
    <div className="collection-item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={()=>addItem(item)} inverted>Add TO Cart</CustomButton>
    </div>
)}

const mapStateToDispatch=dispatch=>({
    addItem:item=>dispatch(addItemToCart(item))
})

export default connect(null,mapStateToDispatch)(CollectionItem)