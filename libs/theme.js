import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
          bg: mode('#E9DAC1', '#202023')(props)
        }
      })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffsite: 6,
                textDecorationColor: '#525252',
                textDecorationTickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle : props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffsite: 3
        })
    },
}

const fonts = {
    heading : "'M PLUS Rounded 1c'"
}

const colors = {
    glassTeal : '#88ccca'
}

const config = {
    initialColorMode : 'dark',
    useSystemColorMode : false
}

const theme = extendTheme({config, styles, components, colors, fonts})

export default theme