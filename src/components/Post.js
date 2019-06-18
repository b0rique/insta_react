import React, {Component} from 'react';
import User from './User';
export default class Post extends Component {
    render(){
        return (
            <div className ="post">
                <User 
                src ="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205212/middle-aged-man-fat-2.jpg" 
                alt ="prince"
                name ="Fat Man"
                min/>
            <img src ={this.props.src} alt ={this.props.alt}></img>
            <div className="post__name">
                Some Account
            </div>
            <div className ="post__descr">
       Et voluptate ea dolor labore sunt incididunt adipisicing. Dolor fugiat ex Lorem enim. Lorem sunt nulla sint voluptate. Qui consequat ut labore duis cupidatat irure qui fugiat aute aliqua eiusmod.
            </div>
            </div>
        )
    }
} 