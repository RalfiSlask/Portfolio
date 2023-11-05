type AnchorPropsType = {
    text: string;
    href?: string;
};

const AnchorText: React.FC<AnchorPropsType> = ( { text, href } ) => {
  return (
      <a className="hoverable font-bold cursor-pointer" href={href}>{text}</a>
  )
}

export default AnchorText