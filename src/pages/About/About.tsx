import PageHeading from "../../components/headings/PageHeading"


const About = () => {
  return (
    <section id="page-2" className='min-h-screen flex flex-col bg-lightgray items-center pt-[100px] relative border-b border-solid border-mediumGray'>
      <div>
        <PageHeading text="About"/>
        <div>
          <ul>
            <label>Frontend Development</label>
            <li>React</li>
            <li>Figma</li>
            <li>Typescript</li>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>Tailwind</li>
            <li>Sass</li>
            <li>Git</li>
            <li>Node</li>
          </ul>
          <ul>
            <label>Tools</label>
            <li>Figma</li>
            <li>Git</li>
            <li>Node</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About