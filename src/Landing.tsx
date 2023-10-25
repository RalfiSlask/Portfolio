import image from "./assets/photo_2023-10-25_14-37-35.jpg";

const Landing = () => {
  return (
    <section className="bg-yellow-500 min-h-screen">
        <img src={image} alt="background" className="w-full h-auto object-cover"/>
    </section>
  )
}

export default Landing