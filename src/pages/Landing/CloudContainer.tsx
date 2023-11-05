import cloud from "../../assets/images/backgrounds/cloud.png";


// Particles


const CloudContainer = () => {


  return (
    <div className='relative w-full h-[600px]'>
         <img src={cloud} width="150" height="auto" alt="" className="absolute top-0 object-cover"/>
    </div>
  )
}

export default CloudContainer