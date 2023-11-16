import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { color } from "framer-motion";

function App() {
  let [productsArray, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then((result) => {
      let products = result.data;
      setProducts(products);
    });
  }, []);
  return (
    <ChakraProvider>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>name</Th>
              <Th>price</Th>
              <Th>discontinued</Th>
              <Th>unitsInStock</Th>
              <Th>edit</Th>
              <Th>delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {productsArray.map((product, index) => {
              return product.unitsInStock > 20 ? (
                <Tr key={index}>
                  <Td>{product.id}</Td>
                  <Td>{product.name}</Td>
                  <Td>{product.unitPrice}</Td>
                  <Td>{product.discontinued ? "true" : "false"}</Td>
                  <Td>{product.unitsInStock}</Td>
                  <Td>
                    <Button colorScheme="orange">Edit</Button>
                  </Td>
                  <Td>
                    <Button
                      id={product.id}
                      onClick={(e) => {
                        axios.delete(
                          `https://northwind.vercel.app/api/products/${e.target.id}`
                        );
                      }}
                      colorScheme="red"
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ) : (
                <Tr className="oktay" key={index}>
                  <Td>{product.id}</Td>
                  <Td>{product.name}</Td>
                  <Td>{product.unitPrice}</Td>
                  <Td>{product.discontinued ? "true" : "false"}</Td>
                  <Td>{product.unitsInStock}</Td>
                  <Td>
                    <Button colorScheme="orange">Edit</Button>
                  </Td>
                  <Td>
                    <Button
                      id={product.id}
                      onClick={(e) => {
                        axios.delete(
                          `https://northwind.vercel.app/api/products/${e.target.id}`
                        );
                      }}
                      colorScheme="red"
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
}

export default App;
