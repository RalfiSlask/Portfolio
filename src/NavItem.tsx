type NavItemProps = {
    text: string,
    href: string,
}

const NavItem: React.FC<NavItemProps> = ( { text, href } ) => {
  return (
    <li className="hoverable">
        <a href={href} className="text-[1.125rem] text-[white]">{text}</a>
    </li>
  )
}

export default NavItem