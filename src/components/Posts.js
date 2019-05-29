import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
            <Post alt="nature" src ="https://cdn.iwastesomuchtime.com/417201806520422894.jpg" />

            <Post alt="nature" src ="http://varykeramia.hu/media/wysiwyg/csira.jpeg" />
            </div>
        )
    }
}