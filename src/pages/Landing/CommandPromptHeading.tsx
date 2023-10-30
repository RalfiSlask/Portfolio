

const CommandPromptHeading: React.FC< {title: string, underline?: boolean} > = ( {title, underline} ) => {
  return (
    <h4 className={`${underline ? "underline" : ""}`}>{title}</h4>
  )
}

export default CommandPromptHeading