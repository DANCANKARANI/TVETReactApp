import React,{useState} from 'react'


function JKok() {
  setInterval(updateTime,1000)
  const now=new Date().toLocaleTimeString();
  const [time,setTime]=useState(now);


function updateTime(){
  const newTime=new Date().toLocaleTimeString();
  setTime(newTime)
}
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={updateTime}>get time</button>
      
    </div>
  )
}
export default JKok;