'use client'
import React , {useEffect,useState} from 'react'


const page = () => {
    const [message,setmessage]=useState('')
    useEffect(()=>{
        fetch('http://localhost:8080').then((response)=> response.json()).then((data)=>{
            setmessage(data?.message)
            console.log(data)
        })

    },[])
  return (
    <div>{message}</div>
  )
}

export default page