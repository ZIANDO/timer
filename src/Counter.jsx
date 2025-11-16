import React from 'react'
import { useState , useEffect } from 'react'
import App from './App'

export default function Counter() {
  const [sec, setSec] = useState(0)
  const [timeRunning, setTimeRunning] = useState(false)
  useEffect(() => {
    if (timeRunning) {
    const time=setInterval(() =>{
      setSec(sec => sec + 1)
    }, 1000);
      return()=>clearInterval(time)
  }
    else {
      return
    }
  },[timeRunning]
  )
  
    return (
      <>
        <div className='w-screen h-screen text-center text-white bg-black'>
          <p className='font-bold'> ثانیه :  {sec} </p>
          <button className='px-2 py-2 m-1 font-light text-gray-900 bg-green-400' onClick={()=> setTimeRunning(true)}>start</button>
          <button className='px-2 py-2 m-1 font-light text-gray-900 bg-green-400' onClick={()=> setTimeRunning(false)}>pause</button>
          <button className='px-2 py-2 m-1 font-light text-gray-900 bg-green-400' onClick={() => { setTimeRunning(false), setSec(0) }}>reset</button>

        </div>
      </>
  )
}
