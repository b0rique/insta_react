import React, { Component} from 'react';
import User from './User';
 
import InstaService from './services/instaservice';
import ErrorMessage from './ErrorMessage';
export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts: posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
    return arr.map((item) => {
    const {name, altname, photo } = item;

        return (

            <User 
            src={photo}
            alt={altname}
            name={name}
            min/>
    
         
            
 
        )
    })
}


    render() {
    const {error, posts} = this.state;
    if (error) {
            return <ErrorMessage/>
    }

    const items = this.renderItems(posts);


        return (
            <div className="right">

<User 
                src ="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205212/middle-aged-man-fat-2.jpg" 
                alt ="prince"
                name ="Fat Man"/>
                         <div className ="users__block">
                            {items}

     </div>
            </div>
            
        )
    }
}

