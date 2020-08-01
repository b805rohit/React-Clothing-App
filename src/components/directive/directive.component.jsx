import React from 'react'
import "./directive.styles.scss"
import MenuItem from "../menu-item/MenuItem.component"

class Directive extends React.Component{
    constructor(){
        super()
        this.state={
            section:[
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    path:'hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    path:''
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    path:''
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    path:''
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    path:''
                  }          
            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.section.map(({id,...otherPropsData})=>(
                        <MenuItem key={id} {...otherPropsData}/>  
                    ))
                }
            </div>  
        )
    }
}

export default Directive