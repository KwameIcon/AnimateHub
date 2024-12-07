
// logo image
import { useEffect, useState } from 'react'
import whiteLogo from '../../../assets/images/logo/logo.webp'
import darkLogo from '../../../assets/images/logo/logo1.webp'



// component interface
interface LogoProps{
    themeMode: string;
    setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}



const Logo: React.FC<LogoProps> = ({themeMode, setThemeMode}) => {



    return(
        <div>
            { themeMode === 'dark' ?
                <img src= {whiteLogo} alt="techlab" />
                :
                <img src= {darkLogo} alt="techlab" />
            }
        </div>
    )
}

export default Logo;