import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideCart = ({ watchTime }) => {
  const [breakTime,setBreakTime]=useState();
  const [time, setTime] = useState([]);
  useEffect(() => {
    const getWatchTimeFromStorage = localStorage.getItem("watchTime");
    setTime(getWatchTimeFromStorage);
    const breakTime1=localStorage.getItem('breakTime');
    if(breakTime1)
    {
      setBreakTime(breakTime1)

    }
  else{
    setBreakTime(0)
  }
  }, [watchTime]);
  const handleBreakTime=(bt)=>{
    localStorage.setItem('breakTime',bt);
    setBreakTime(bt);

  }
  const toastDisplay=()=>{
    const watchtime=localStorage.getItem('watchTime');
    const breakTim=localStorage.getItem('breakTime');
const difference=watchtime-breakTim;
console.log(difference)
    toast(` You have watched..${difference} times `)
  }
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h1 className="card-title">My Card</h1>
          <p class="card-text">Total Watch Time</p>
          <input
            type="text"

            class="form-control"
            id="textInputFiled"
            disabled
            value={time}
            aria-describedby="textHelp"
          ></input>
        </div>
        <div>
          <h1>Add Break Time</h1>
          <button type="button" onClick={()=>handleBreakTime(15)} className="btn btn-primary btn-btn-circle m-1 border round"> 15
          </button>
          <button type="button" onClick={()=>handleBreakTime(20)} class="btn btn-primary m-1">
            20
          </button>
          <button type="button" onClick={()=>handleBreakTime(25)} class="btn btn-primary m-1">
            25
          </button>
        </div>
        <input
            type="text"
            class="form-control"
            id="textInputFiled"
            disabled
            value={breakTime}
            aria-describedby="textHelp"
          ></input>
          <button type="button" class="btn btn-success w-100 mt-4" onClick={toastDisplay}>
            Complete
          </button>
        
      </div>
    </div>
  );
};

export default SideCart;
