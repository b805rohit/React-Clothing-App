const INITIAL_STATE={
    directory:{
        section:[
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                path:'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                path:'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                path:'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                path:'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                path:'shop/mens'
              }          
        ]
    }
}

const directoryReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer