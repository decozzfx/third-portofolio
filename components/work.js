import NextLink from "next/link";
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useMemo } from "react";

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt, isFullModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const ModalImage = useMemo(() => {
    return (
      <Modal
        size={isFullModal && "full"}
        m={10}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }, [alt, isFullModal, isOpen, onClose, src]);

  return (
    <>
      {ModalImage}
      <Image
        onClick={onOpen}
        borderRadius="lg"
        w="full"
        src={src}
        alt={alt}
        mb={4}
      />
    </>
  );
};

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
