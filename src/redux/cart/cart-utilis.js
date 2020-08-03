export const addItem=(cart,item)=>{
    const index=cart.findIndex(d=> d.id===item.id)
    if(index!==-1){
        const quantity=(cart[index].quantity)+1
        cart[index]={...item,quantity:quantity,price:item.price*quantity}
        return cart
    }
    return [...cart,{...item,quantity:1}]
}