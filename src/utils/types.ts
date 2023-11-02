import { ReactNode } from "react";

export type ContextProps = {
    children: ReactNode;
};

export const ItemTypes = {
    BRUSH: 'brush',
};

export type SkillProps = {
    id?: number;
    skill: string;
    logo: string;
}