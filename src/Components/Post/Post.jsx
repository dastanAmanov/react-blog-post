import './Post.scss'
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
function Post() {

    let [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('https://backendsss.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    },[]);
    return (
        posts.map(item =>{
            return(
                <div className='post' key={item.id} >
                    <img className='post-img' 
                    src='https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200' width='600' alt="" />
                    <div className="post-info">
                        <div className="post-cats">
                            <span className="post-cat">{item.postCats}, </span>
                            <span className="post-cat">{item.postCat}</span>
                        </div>
                        <Link to={`/post/${item.id}`}
                            className='link'>
                            <span className="post-title">{item.title}</span>
                        </Link>
                        <span className='post-date'>12 hour ago</span>
                    </div>
                    <p className='post-description'>{item.body}</p>
                </div>
            )
        })
    )
}

export default Post
