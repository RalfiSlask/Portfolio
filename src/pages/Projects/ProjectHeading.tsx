type ProjectHeadingProps = {
    text: string;
}

const ProjectHeading: React.FC<ProjectHeadingProps> = ( { text } ) => {
  return (
    <h3 className="font-bold text-[1.25rem]">{text}</h3>
  )
}

export default ProjectHeading