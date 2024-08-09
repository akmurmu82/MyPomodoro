// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Box } from "@chakra-ui/react";
import Sidepanel from "./components/Sidepanel";

function App() {
  return (
    <Box display="flex">
      <Sidepanel />
      <Box flex="1" bg="gray.100" p={5}>
        {/* Your main content goes here */}
      </Box>
    </Box>
  );
}

export default App;
