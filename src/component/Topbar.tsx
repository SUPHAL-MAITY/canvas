import React from 'react'

const Topbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",gap:"16px",  marginTop:"10px",backgroundColor:"rgb(30, 29, 29)",width:"50%",height:"50px",borderRadius:"16px",position:"fixed",left:"50%",transform:"translateX(-50%)"}}>
      
      <i className="fas fa-minus fa-2x" style={{ color: "white" }}></i>
      <i className="fa-regular fa-square fa-2x" style={{color:"white"}}></i>
      <i  className="fa-regular fa-circle fa-2x" style={{color:"white"}}></i>
      <i  className="fas fa-diamond fa-2x" style={{color:"white"}}></i>
      <i className="fas fa-pencil fa-2x" style={{color:"white"}}></i>
      <i className="fa-solid fa-regular fa-t fa-2x" style={{color:"white"}}></i>
    </div>
  )
}

export default Topbar
