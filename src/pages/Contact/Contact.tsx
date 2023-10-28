import ContactForm from "./ContactForm";
import PageHeading from "../../components/headings/PageHeading";

const Contact = () => {
  return (
    <section id="page-4" className="flex justify-center min-h-screen bg-lightgray">
      <div className=' flex flex-col gap-10 font-secondary'>
        <PageHeading text="Contact"/>
        <p>Get in touch or shoot me an email directly on nilssonnarki@gmail.com</p>
        <ContactForm />
      </div>
    </section>

  )
}

export default Contact