import './Write.scss'
import React,{useState, useEffect, useRef} from 'react'

function Write() {

    let [user, setUser] = useState([])
    let [userId, setUserId] = useState()
    let titleInput = useRef('')
    let bodyInput = useRef('')

    useEffect(()=>{
        fetch('https://backendsss.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
            user.map(elem=>{
                setUserId(elem.id)
            })
        }, [user])
    async function posts() {
        let response = await fetch(`https://backendsss.herokuapp.com/posts`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: titleInput.current.value,
            body: bodyInput.current.value,
            userId: userId,
            })  
        })
        let data = await response.json()
            titleInput.current.value = null
            bodyInput.current.value = null
    }
    return (
        <div className='write'>
            <img className='write-img'
             src="https://images.pexels.com/photos/763097/pexels-photo-763097.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
           <form 
                onSubmit={e =>{
                    e.preventDefault()
                    posts()
                }}
                className='write-form'>
            <div className="write-form-group">
                <label htmlFor="file-input">
                <i className="write-icon fas fa-plus"></i>
                </label>
                <input type="file" id="file-input" style={{display: "none"}}/>
                <input 
                    ref={titleInput}
                    className='write-input' 
                    type="text" 
                    placeholder='Title'
                    required 
                    autoFocus={true} 
                />
            </div>
                <div className="write-form-group">
                    <textarea
                        ref={bodyInput}
                        className='write-input write-text'
                        type='text' 
                        required
                        placeholder='Tell your story... (maximum 200 characters)'
                    ></textarea>
                </div>
            <button className="write-submit">Publish</button>
           </form>
        </div>
    )
}

export default Write
