type AnchorPropsType = {
    text: string;
    href?: string;
};

const AnchorText: React.FC<AnchorPropsType> = ( { text, href } ) => {
  return (
        <span className="text-black font-bold hover:text-gray-400 cursor-pointer">
            <a href={href}>{text}</a>
        </span>
  )
}

export default AnchorText