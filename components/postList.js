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
            <div className="">
                {this.state.posts.map(post => (
                <div className="card">
                    <Link to={`/${post.slug}`} key={post.id}>
                        <h3 className="card-header">{post.title.rendered}</h3>
                        <div className="card-content">
                        <div className="content"
                            dangerouslySetInnerHTML={this.createMarkup(
                                post.excerpt.rendered
                            )}
                            />
                        </div>
                    </Link>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Save</a>
                        <a href="#" class="card-footer-item">Edit</a>
                        <a href="#" class="card-footer-item">Delete</a>
                    </footer>
                </div>
                ))}
            </div>
        );
    }
}

export default PostList;