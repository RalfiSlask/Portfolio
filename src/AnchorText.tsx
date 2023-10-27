type AnchorPropsType = {
    text: string;
};

const AnchorText: React.FC<AnchorPropsType> = ( { text } ) => {
  return (
    <span>
        <span className="text-greenColor font-bold">
            <a href="">{text}</a>
        </span>
    </span>
  )
}

export default AnchorText