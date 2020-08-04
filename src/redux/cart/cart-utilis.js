export const addItem=(cart,item)=>{
    const data=cart.find(d=> d.id===item.id)
    return data ? cart.map(d=> {
            if(d.id===item.id){
               return {...d,quantity:data.quantity+1}
            }
            else{
               return {...d}
            }
    }):[...cart,{...item,quantity:1}]
}
    // const index=cart.findIndex(d=> d.id===item.id)
    // if(index!==-1){
    //     const quantity=cart[index].quantity+1
    //     cart[index]={...item,quantity:quantity,price:item.price*quantity}
    //     return cart
    // }
    // return [...cart,{...item,quantity:1}]
