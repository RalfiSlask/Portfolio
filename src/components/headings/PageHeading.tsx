
type PageHeadingProps = {
    text: string;
}

const PageHeading: React.FC<PageHeadingProps> = ( { text } ) => {
  return (
    <h2 className="text-[3rem] font-bold text-Headings">{text}</h2>
  )
}

export default PageHeading