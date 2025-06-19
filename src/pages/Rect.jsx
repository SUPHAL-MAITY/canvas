import {useRef,useEffect} from 'react'

const Rect = () => {
    const canvasRef=useRef(null)

    useEffect(()=>{
       const canvas=canvasRef.current;
       if(!canvas) return;


       canvas.width=600;
       canvas.height=800;


       const ctx=canvas.getContext("2d")
       if(!ctx) return;


       let x=200;
       let speed=2;

       function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height)


        ctx.fillStyle="blue"
        ctx.fillRect(x,50,100,75)


        x+=speed;
       
        if(x>600 || x<0 ) speed= speed * -1;

        requestAnimationFrame(animate)

       }

       animate()


       return ()=>{cancelAnimationFrame(animate)}

    },[])
    

  return (
    <div>
        <canvas ref={canvasRef}  ></canvas>
      
    </div>
  )
}

export default Rect
