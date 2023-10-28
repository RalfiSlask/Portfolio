type AnchorPropsType = {
    text: string;
    href?: string;
};

const AnchorText: React.FC<AnchorPropsType> = ( { text, href } ) => {
  return (
    <span>
        <span className="text-black font-bold">
            <a href={href}>{text}</a>
        </span>
    </span>
  )
}

export default AnchorText