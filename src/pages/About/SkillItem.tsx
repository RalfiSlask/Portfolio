import { SkillProps } from "../../utils/types"

const SkillItem: React.FC<SkillProps> = ( { skill, logo }) => {
  return (
    <div className="flex flex-col items-center gap-1">
        <img src={logo} width="40" alt="" />
        <li>{skill}</li>
    </div>
  )
}

export default SkillItem