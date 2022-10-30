import Logo from './Logo'
import NextLink from 'next/link'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './Theme-toogle-button'

const LinkItem = ({ href, path, children }) => {
    const active = path.includes(href)
    const inActiveColor = useColorModeValue('gray200', 'whiteAlpha')

    return (
        <NextLink href={href}>
            <Link 
             p={2}   
             bg={active ? 'glassTeal' : undefined}
             color={active ? '#202023' : inActiveColor}
            >
            {children}
            </Link>
        </NextLink>
    )

}

const Navbar = props => {
    const {path} = props

    return (
        <Box
        position='fixed'
        as='nav'
        w='100%'
        bb={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}
        >
            <Container display='flex' p={2} maxW='container.md' wrap='wrap' align='center' justify='space-between' >
                <Flex align='center' mr={5}>
                    <Heading  size='lg' cursor='pointer'>
                        <Logo/>
                    </Heading>
                </Flex>
                <Box flex={1} align="right">
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex'}}
                    width={{ base: 'full', md: 'auto'}}
                    justifyContent='right'
                    flexGrow={1}
                    mt={{base: 4, md:0}}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                </Stack>

                {/* <ThemeToggleButton/> */}
                    <Box ml={2} display={{ base: 'inline-blok', md: 'none'}}>
                        <Menu autoSelect={false}>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant='outline' aria-label='Options' />
                            <MenuList >
                                <NextLink href='/' passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href='/works' passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href='/posts' passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar