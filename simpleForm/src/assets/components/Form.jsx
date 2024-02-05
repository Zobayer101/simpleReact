

import { useState } from 'react';
import '../css/form.css'

const Form=()=>{
   const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    geander:'',
    city:''
   })
    const onInput=(propaty,value)=>{
        setData(previus=>({
            ...previus,
            [propaty]:value
        }))
    }
    const Formsubmit=()=>{
        alert(JSON.stringify(data))
    }
    return(
        <div>
            <div className="frombox">
                <form id='Form' onSubmit={Formsubmit} action="#">
                <input value={data.name} type="text" onChange={(e)=>{onInput('name',e.target.value)}} placeholder="Enter your name" />
                <br />
                <input value={data.email}  type="email" onChange={(e)=>{onInput('email',e.target.value)}} placeholder="Enter your email" />
                <br />
                <input value={data.password} type="password" onChange={(e)=>{onInput('password',e.target.value)}} placeholder="Enter your password" />
                <br />
                <div className="geander">
                    <div className="title">Gender</div>
                    <div className="status">
                        <div className="male">
                            <label htmlFor="male">Male</label>
                            <input name='geander' type="radio" checked={data.geander=='Male'} onChange={()=>{onInput('geander','Male')}}/>
                        </div>
                        <br />
                       <div className="female">
                         <label htmlFor="femail">Female</label>
                         <input type="radio"  name='geander' checked={data.geander=='Female'} onChange={()=>{onInput('geander','Female')}}/>
                       </div>
                    </div>
                </div>
                <select value={data.city} onChange={(e)=>{onInput('city',e.target.value)}}>
                    <option value="">Chooge city</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Noagoan">Noagoan</option>
                    <option value="Manda">Manda</option>
                    <option value="Dhaka">Dhaka</option>
                </select>
                <br />
                <button type="submit" >Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Form
