import React,{useEffect, useState} from 'react'
import { useLinkClickHandler } from 'react-router-dom'
import Navbar from '../includes/navbar'
import Card from './card'
import './home.css'

export default function Home(props) {
  const [data, setData] = useState("anom")
  const [profile, setProfile] = useState({name : "", age : "", place : ""})
  const dets = ["Thankan"]

  let click = (e) => {
    e.preventDefault();
    setData(profile.name)
    props.onSentData(dets)
    setProfile({...profile, name: "", age : "", place : ""})
  }

  useEffect(() => {
    console.log(data)
  })

  const nameChangeHandler = (e) => {
    setProfile((prevState) => {
      return {...prevState, name: e.target.value}
    })
  }

  const ageChangeHandler = (e) => {
    setProfile((prevState) => {
      return {...prevState, age: e.target.value}
    })
  }

  const placeChangeHandler = (e) => {
    setProfile((prevState) => {
      return {...prevState, place: e.target.value}
    })
  }

  return (
    <>
      <Card className='items'>
        <h1>hello world</h1>
      </Card>
      <Card className="item">
        <Navbar data={data}/>
      </Card>
      <form onSubmit={click}>
        <input type='text' onChange={nameChangeHandler} placeholder='Name' value={profile.name} required/>
        <input type='number' onChange={ageChangeHandler} placeholder='Age' value={profile.age} required/>
        <input type='text' onChange={placeChangeHandler} placeholder='Place' value={profile.place} required/>
        <button type='submit'>click me</button>
      </form>
    </>
  )
}
