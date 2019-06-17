import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        axios.get("https://techcrunch.com/wp-json/wp/v2/posts").then(posts => {
            this.setState({
                posts: posts.data
            });
        })
    }

    createMarkup(html) {
        return { __html: html}
    }

    render(){
        return (
            <div>
                {this.state.posts.map(post => (
                   <Link to={`/${post.slug}`} key={post.id}>
                       <h3>{post.title.rendered}</h3>
                       <div
                        dangerouslySetInnerHTML={this.createMarkup(
                            post.excerpt.rendered
                        )}
                        />
                   </Link>
                ))}
            </div>
        );
    }
}

export default PostList;