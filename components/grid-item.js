import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={thumbnail}
        classname="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>children</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box align="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail{
            border-radius: 15px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            transition: all 0.2s ease-in-out;
        }
    `}
  />
);
