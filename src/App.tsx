import { ChakraProvider, theme, Text } from "@chakra-ui/react";
import KanbanBoard from "./KanbanBoard";

export const App = () => (
  <ChakraProvider theme={theme}>
    
    <Text fontSize="2xl" padding="5" fontWeight="bold" fontStyle="Regular" align="center">
          
Stellar Culinary Personnel LTD
    </Text>
    <Text fontSize="xl" padding="1" fontWeight="bold" fontStyle="Regular" align="center" paddingBottom="16">
          
Kanban Board
    </Text>
    <KanbanBoard />
  </ChakraProvider>
);
