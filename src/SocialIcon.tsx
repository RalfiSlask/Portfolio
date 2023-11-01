

type SocialIconProps = {
    logo: string;
    alt: string;
    link: string;
};

const SocialIcon: React.FC<SocialIconProps> = ( { logo, alt, link }) => {
  return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={logo} width="25" height="25" alt={alt} className="rounded-full hover:bg-gray-300 hover transform hover:scale-120"/>
        </a>
  )
}

export default SocialIcon