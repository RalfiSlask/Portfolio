import React from 'react'

type NavItemProps = {
    text: string;
    href: string;
};

const HeaderNavItem: React.FC<NavItemProps> = ({ text, href }) => {
    return (
        <li className="flex items-center gap-2">
            <a href={href} className="text-[1rem] w-16 text-right">
                {text}
            </a>
        </li>
    );
};

export default HeaderNavItem;
