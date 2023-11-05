

type SocialIconProps = {
    logo: string;
    alt: string;
    link: string;
};

const SocialIcon: React.FC<SocialIconProps> = ( { logo, alt, link }) => {
  return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={logo} width="20" height="20" alt={alt} className="rounded-full hover:bg-gray-300 hover transform hover:scale-125"/>
        </a>
  )
}

export default SocialIcon