import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function Reddit(){
    const [posts, setPosts] =  React.useState([]);
    React.useState(() => {
            axios.get(`https://www.reddit.com/r/formula1.json`)
            .then(res => {
                console.log("res",res);
                const newPosts = res.data.data.children.map(obj => obj.data)

                setPosts(newPosts)
            });
        },[]);
    return (
        <div>
            <h1>https://www.reddit.com/r/formula1</h1>
            <ul className="posts__lists">
                {
                    posts.map(post => (
                    <li className="post" key={post.id}>
                        <h4 className="post__title"><a href={post.url}>Title: {post.title} </a> </h4>
                        <div>Author: <strong>{post.author}</strong> </div>
                        <div>Scor: <strong>{post.score}</strong></div>
                    </li>
                    ))
                }
            </ul>
        </div>
    );
}

ReactDOM.render(
    <Reddit/>,
    document.getElementById("root")
);