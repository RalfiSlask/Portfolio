import React, { useState } from 'react';

type NavItemProps = {
    text: string;
    href: string;
    dropdownItems?: { id: number; text: string; href: string }[];
    dropdownOpen: boolean;
    toggleDropdown: () => void;
};

const HeaderNavItem: React.FC<NavItemProps> = ({ text, href, dropdownItems, dropdownOpen, toggleDropdown }) => {
    const hasDropdown = dropdownItems && dropdownItems.length > 0;

    return (
        <li className="nav-item">
            <a href={href} className="text-[1rem] font-fourth" onClick={hasDropdown ? toggleDropdown : undefined}>
                {text}
            </a>
            {hasDropdown && dropdownOpen && (
                <ul className="dropdown">
                    {dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.id} className="whitespace-no-wrap">
                            <a href={dropdownItem.href} className="block px-4 py-2 text-[1rem]">
                                {dropdownItem.text}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default HeaderNavItem;
