import React, { Component } from 'react'
import '../App.css';
import Carousalslide from './Body/carousal';
import Homecontent1 from './Body/homecontent1';
import Booklist from './Body/booklist';
import Author from './AuthorDetails/design';
import Frequentques from './Body/frequentques';

export default class Home extends Component {
    render() {
        return (
            <>
                <Carousalslide/>
                <Booklist/>
                <Homecontent1/>
                <Author/>
                <Frequentques/>
            </>
        )
    }
}