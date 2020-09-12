import React, { Component } from 'react'
import "./ContentMid.css"
export default class ContentMid extends Component {
    render() {
        const {title,author}=this.props;
        return (
               <div className="mid">
                    <div className='mid_content'>
                    <h2>{title}</h2>
                    <p>{author}</p>
                </div>
               </div>
        )
    }
}
