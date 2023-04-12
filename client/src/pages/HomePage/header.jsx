import React, { useCallback, useEffect, useState } from 'react';
import headerImg from "../../assets/header.jpg"
const Header = () => {
  const textArray = ['connect', 'create', 'innovate'];
  const [text, setText] = useState('connect');
  const changeText = useCallback(() => {
    const random = Math.floor(Math.random() * textArray.length);
    setText(textArray[random]);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(changeText, 1000);
    return () => clearInterval(intervalId);
  }, [changeText]);
  return (
    <div style={{ paddingTop: '50px',display:"flex",justifyContent:"space-between",height:"500px" }}>
      <div style={{fontSize:"20px",width:"50%",paddingTop:"50px",paddingLeft:"10px",backgroundColor:"lightblue",textAlign:"left"}}>
        <h1>
          One Platform to <br/><span style={{ color: 'red' }}>{text}</span>
        </h1>
        <p>Bring teams together, reimagine workspaces, engage new audiences, and delight your customers all on the MeetNow platform you know and love</p>
      </div>
      <div style={{width:"50%"}}>
         <img style={{width:"100%",height:"100%"}} src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
