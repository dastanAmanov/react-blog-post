import './SinglePost.scss'
import React,{useState, useEffect} from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import UseAuth from '../../Hooks/UseAuth'

function SinglePost() {
    // import Hook
    let [token] = UseAuth()
    
    const { id } = useParams()

    // State for modals
    let [edit, setEdit] = useState(false)
    let [deletePost, setDeletePost] = useState(false)

    // State for get fetch
    let [posts, setPosts] = useState([])
    let [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://backendsss.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
        fetch('https://backendsss.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    },[posts]);

    function deletPost(id){
        fetch(`https://backendsss.herokuapp.com/posts/${id}`,{
            method: 'DELETE',
        })
    }

        // State for update
        let [editTitle, setEditTitle] = useState()
        let [editBody, setEditBody] = useState()
    
        // State for get post content
        let [postId, setPostId] = useState()
        let [title, setTitle] = useState()
        let [body, setBody] = useState()
    
        async function Update(){
            try{
                let response = await fetch(`https://backendsss.herokuapp.com/posts`,{
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: postId,
                        title: title,
                        body: body,
                        userId: token,
                    })
                })
                let data = response.json()   
            }catch(error){
                console.log("error");
            }
        }
        let postdeleteId = {}
    return (
        <>
        <div className='single-post'>
        {
            posts.filter(f => f.id === Number(id)).map(elem =>{
                postdeleteId = {deletePostId: elem.id}
            return(
                <div key={elem.id} className="single-post-wrapper">
                     <img className='single-post-img'
                     src='https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200' alt="" />
                    <h2 className="single-post-title">{elem.title}
                    {token === elem.userid ? <div className="single-post-icons">
                        <i onClick={()=>{
                                setPostId(elem.id)
                                setEditBody(elem.body)
                                setEditTitle(elem.title)
                            edit ? setEdit(false) : setEdit(true)}}
                        className="far fa-edit single-post-icon"></i>

                        <i onClick={()=> deletePost ? setDeletePost(false) : setDeletePost(true)}
                            className="far fa-trash-alt single-post-icon"></i>
                    </div> : null}
                    </h2>
                    <div className="single-post-info">
                        {
                            users.filter(f => f.id === elem.userid).map(user =>{
                                return(
                                    <span key={user.id} className="single-post-author">
                                        Author: <b>{user.name}</b>
                                    </span>
                                )
                            })
                        }
                        <span className="single-post-date">12 hour ago</span>
                    </div>
                    <p className="single-post-descriptin">{elem.body}</p>
                </div>
                )
           }) 
        }
        </div>
        <div className={deletePost === true ? 'single-post-delete single-active' : 'single-post-delete'}>
            <div className='single-post-delete-content'>
                <p>Do you really delete ?</p>
                <div className="post-btn">
                    <span onClick={()=> setDeletePost(false)}>
                        Cancel
                    </span>
                    <button 
                        onClick={e => {
                        deletPost(e.target.value)
                        setTimeout(()=>{
                            setDeletePost(false)
                        }, 1000)
                        }} 
                        value={postdeleteId.deletePostId}>
                            Ok
                    </button>
                </div>
            </div>
        </div>
        <div onClick={()=> setEdit(false)}
            className={edit === true ? "single-post-edit single-active" : "single-post-edit"}>
            <div onClick={e=> e.stopPropagation()}
                className="edit-content">
            <form 
                onSubmit={e =>{
                    e.preventDefault()
                    Update()
                }}
                className='single-post-form'>
                <input 
                    onChange={e => 
                    setTitle(e.target.value)}
                    defaultValue={editTitle}
                    className='edit-title'
                    type="text"
                    placeholder='Title'
                    />
                <textarea 
                    onChange={e =>
                    setBody(e.target.value)}
                    defaultValue={editBody}
                    className='edit-text'
                    placeholder='maximum 200 characters'
                    type="text"></textarea>
                <button onClick={()=> setTimeout(()=>{setEdit(false)}, 1500)}
                    type='submit'
                    className="save-btn">
                    Save
                </button>
            </form>
        </div>
    </div>
    </>
    )
}

export default SinglePost
