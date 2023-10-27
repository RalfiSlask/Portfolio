import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <section id="page-4" className="flex justify-center min-h-screen">
      <div className=' flex flex-col gap-10 font-secondary'>
        <h2 className="text-[3rem] font-bold">Contact</h2>
        <p>Get in touch or shoot me an email directly on nilssonnarki@gmail.com</p>
        <ContactForm />
      </div>
    </section>

  )
}

export default Contact