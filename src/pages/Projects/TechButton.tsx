type TechButtonProps = {
    text: string;
}

const TechButton: React.FC<TechButtonProps> = ( {text} ) => {
  return (
    <button className="rounded-[15px] flex justify-center items-center px-3 py-1 text-white">{text}</button>
  )
}

export default TechButton