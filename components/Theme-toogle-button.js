import { Button, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"; 
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
    const { toggleColorMode, colorMode } = useColorMode()

    return ( 
        <IconButton ml={2}
         arial-label="Toogle theme"   
         colorScheme={useColorModeValue('purple', 'orange')}
         icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
         onClick={toggleColorMode}
        >
        </IconButton>
    )
}

export default ThemeToggleButton