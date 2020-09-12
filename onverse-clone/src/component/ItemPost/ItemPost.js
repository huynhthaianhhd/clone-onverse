import React, { Component } from 'react'
import "./ItemPost.css"
export default class ItemPost extends Component {
    render() {
        const {image,date,type,title,description} = this.props;
        return (
            <div className='item_post'>
                    <img className='item_image' src={image} alt=""/>
                <div className='item_content'>
                    <p className="item_dateType">
                        <span>{date}</span>  
                        <span> •  {type}</span>
                    </p>
                    <h2>{title}</h2>
                    <p className="item_description">{description}</p>
                    <span className="read_more">
                    READ MORE →
                    </span>
                </div>
            </div>
        )
    }
}
