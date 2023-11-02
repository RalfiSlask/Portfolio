type AnchorPropsType = {
    text: string;
    href?: string;
};

const AnchorText: React.FC<AnchorPropsType> = ( { text, href } ) => {
  return (
      <a className="hoverable text-black font-bold cursor-pointer hover:text-secBG" href={href}>{text}</a>
  )
}

export default AnchorText