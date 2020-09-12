import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./ContentTitle.css"
export default class ContentTitle extends Component {
    render() {
        return (
            <div className="content_title">
                <div className="content">
                    <h2>
                    Gutenberg is more than an editor.
                    </h2>
                    <p>
                    Say Hello to the new editor. Gutenberg is a whole new way to use WordPress.
                    </p>
                    <p><Link to="/" >Publishing experience</Link> has been rebuilt for media rich pages and posts and you can enjoy the flexibility that blocks will bring.</p>
                </div>
            </div>
        )
    }
}
