import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

const NavLinks = [
  {
    href: "#1",
    label: "Home",
  },
  {
    href: "#2",
    label: "Contacto",
  },
  {
    href: "#3",
    label: "Info",
  },
];

const Navbar = () => {
  const display = useBreakpointValue({
    base: "none",
    lg: "flex",
  });

  const [isMobile] = useMediaQuery("(max-width: 768px");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SimpleGrid
      columns={{ base: 2, lg: 3 }}
      templateColumns={{
        base: "1fr 50px",
        lg: "100px 2fr 1fr",
      }}
      p={2}
    >
      <Heading size="md" color={{ base: "blue.400", lg: "red.500" }}>
        Logo
      </Heading>

      {!isMobile && (
        <>
          <HStack justify="center" gap={5} display={display}>
            {NavLinks.map(({ href, label }) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </HStack>

          <ButtonGroup size="sm" display={display}>
            <Button>Iniciar Sesion</Button>
            <Button>Registrarse</Button>
          </ButtonGroup>
        </>
      )}
      {isMobile && (
        <>
          <IconButton
            aria-label="open menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            display={{ base: "block", lg: "none" }}
          />

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <VStack justify="center" gap={5}>
                  {NavLinks.map(({ href, label }) => (
                    <Link href={href} key={href}>
                      {label}
                    </Link>
                  ))}
                </VStack>
              </DrawerBody>

              <DrawerFooter>
                <Button>Iniciar Sesion</Button>
                <Button>Registrarse</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </SimpleGrid>
  );
};
export default Navbar;
