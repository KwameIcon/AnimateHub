
// logo image
import whiteLogo from '../../../assets/images/logo/logo.webp'
import darkLogo from '../../../assets/images/logo/logo1.webp'



// component interface
interface LogoProps{
  themeMode: string;
}



const Logo: React.FC<LogoProps> = ({ themeMode }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-r from-red-700/50 via-red-400/50 to-gray-100/50 animate-fadeOut"/>
      {themeMode === "dark" ? (
        <img src={whiteLogo} alt="techlab" />
      ) : (
        <img src={darkLogo} alt="techlab" />
      )}
    </div>
  );
};


export default Logo;