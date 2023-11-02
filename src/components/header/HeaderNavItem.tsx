type NavItemProps = {
    text: string,
    href: string,
}

const HeaderNavItem: React.FC<NavItemProps> = ( { text, href } ) => {
  return (
    <li className="hoverable">
        <a href={href} className="text-[1rem] font-fourth">{text}</a>
    </li>
  )
}

export default HeaderNavItem