import { Button, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"; 
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
    const { toogleColorMode } = useColorMode()

    return ( 
        <IconButton 
         arial-label="Toogle theme"   
         colorScheme={useColorModeValue('purple', 'orange')}
         icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
         onClick={toogleColorMode}
        >
        </IconButton>
    )
}

export default ThemeToggleButton