import React, { useState } from 'react'
import "./add.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'

const Add = () => {

    const users = {
        fname: "",
        lname: "",
        email: "",
        phone: ""
    }

    const [user, SetUser] = useState(users)
    const navigate = useNavigate()

    const inputHandler = (e) => {
        const { name, value } = e.target
        // console.log(name)
        // console.log(value)
        SetUser({ ...user, [name]: value })
        console.log(user)
    }

    const submitForm = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8000/api/create", user)
            .then((response) => {
                // console.log(response)
                toast.success(response.data.msg, { position: "top-right" })
                navigate("/")

            })
            .catch((error) => {
                // console.log(error)
                toast.error(error.response.data.msg, { position: "top-right" });
            })

    }
    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add new user</h3>
            <form className='addUserform' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="fname">First name</label>
                    <input type="text" onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='First name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lname">Last name</label>
                    <input type="text" onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='Last name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='Email' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" onChange={inputHandler} id='phone' name='phone' autoComplete='off' placeholder='Phone Number' />
                </div>
                <div className="inputGroup">
                    <button type='submit'>ADD USER</button>
                </div>
            </form>

        </div>
    )
}

export default Add