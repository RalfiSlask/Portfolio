import { SkillProps } from "../../utils/types";
import SkillItem from "./SkillItem";

type CategoryListProps = {
    category: string;
    skills: SkillProps[];
}

const CategoryList: React.FC<CategoryListProps> = ( { category, skills } ) => {
  return (
    <div className="flex flex-col gap-4 items-center ">
        <h3 className="font-bold">{category}</h3>
        <ul className="flex gap-4 justify-center flex-wrap w-[300px] border border-solid border-red-300">
            {skills.map(skill => <SkillItem key={skill.id} skill={skill.skill} logo={skill.logo}/>)}
        </ul>
    </div>
  )
}

export default CategoryList