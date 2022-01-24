import './Settings.scss'
import React,{useEffect, useState} from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import UseAuth from '../../Hooks/UseAuth'

function Settings() {

    let [token] = UseAuth()
    let [deleteProfile, setDeleteProfile] = useState(false)

    // State for GET
    let [user, setUser] = useState([])
    let [post, setPost] = useState([])
     
    // State for PUT
    let [updateName, setUpdateName] = useState()
    let [updateSurname, setUpdateSurname] = useState()
    let [updateEmail, setUpdateEmail] = useState()
    let [updateAddress, setUpdateAddress] = useState()
    
    useEffect(() => {
        fetch('https://backendsss.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
        fetch('https://backendsss.herokuapp.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);
    function deleteUser(id){
        fetch(`https://backendsss.herokuapp.com/users/${id}`,{
            method: 'DELETE',
        })
    }
    function deletPost(id){
        fetch(`https://backendsss.herokuapp.com/posts/${id}`,{
            method: 'DELETE',
        })
    }

    
    let userData = {}
    user.filter(f => f.id === token).map(u =>{
        userData = {
            userId: u.id,
            name: u.name,
            surname: u.surname,
            email: u.email,
            address: u.address
        }
    });

    async function Update(){
            let response = await fetch(`https://backendsss.herokuapp.com/users`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: token,
                name: updateName,
                surname: updateSurname,
                email: updateEmail,
                address: updateAddress
            })
        })
        let data = await response.json()
    }

    return (
        <>
        <div className='settings'>
            <div className="settings-wrapper">
                <div className="settings-title">
                    <span className="settings-update-title">Update Your Account</span>
                    <span onClick={() => deleteProfile ? setDeleteProfile(false) : setDeleteProfile(true)} 
                        className="settings-delete-title">
                        Delete Account
                    </span>
                </div>
                <form 
                    onSubmit={e =>{
                        e.preventDefault()
                        Update()
                    }}
                    className="settings-form">
                    <label>Profile Picture</label>
                    <div className="settings-PP">
                        <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width='200' alt="" />
                        <label htmlFor='file-input'>
                        <i className="settings-PP-icon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="file-input" style={{display: 'none'}}/>
                    </div>
                        <label>User Name</label>
                        <input 
                            onChange={e => setUpdateName(e.target.value)}
                            type="text" 
                            placeholder={userData.name}
                            required
                            />
                        <label>Surname</label>
                        <input 
                            onChange={e => setUpdateSurname(e.target.value)}
                            type="text" 
                            placeholder={userData.surname}
                            required
                            />
                        <label>Email</label>
                        <input 
                            onChange={e => setUpdateEmail(e.target.value)}
                            type="email" 
                            placeholder={userData.email}
                            required
                            />
                        <label>Address</label>
                        <input 
                            onChange={e => setUpdateAddress(e.target.value)}
                            type="text" 
                            placeholder={userData.address}
                            required
                            />
                            <div className="settings-alert">
                                <span>successfully update </span>
                            </div>
                    <button className="settings-submit">Update</button>
                </form>
            </div>
        <Sidebar/>
        </div>
        <div className={deleteProfile === true ? 'settings-delete-profile del-active' : 'settings-delete-profile'}>
            <div className="settings-delete-content">
                <p>Do you really delete ?</p>
                <div className="settings-btn">
                    <span onClick={()=> setDeleteProfile(false)}>
                        Cancel
                    </span>
                    <button 
                        onClick={() =>{
                            post.filter( f => f.userid === userData.userId).map(p =>{
                                deletPost(p.id)
                            })
                            deleteUser(token)
                            window.localStorage.removeItem('_blogtoken_')
                            setTimeout(()=>{
                                window.location.reload()
                            }, 1000)
                        }}
                    >
                        Ok 
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Settings
