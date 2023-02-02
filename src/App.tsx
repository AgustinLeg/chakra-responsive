import { Flex, SimpleGrid } from "@chakra-ui/react";
import "./App.css";
import { Navbar } from "./components";
import { CardComponent } from "./components/card/Card";

function App() {
  return (
    <>
      <Navbar />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        row={2}
        gap={5}
        justifyItems="center"
      >
        {[...new Array(6)].map((item) => (
          <CardComponent key={item} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default App;
