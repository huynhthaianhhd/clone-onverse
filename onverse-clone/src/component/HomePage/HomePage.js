import React, { Component } from 'react'
import Header from '../Header/Header'
import ContentTitle from '../ContentTitle/ContentTitle'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                <ContentTitle></ContentTitle>
                </div>
                
            </div>
        )
    }
}
