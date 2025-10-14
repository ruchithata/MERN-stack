import {Box} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./Component/Navbar"
import { useColorModeValue } from "./components/ui/color-mode"


function App() {

  return (
    <>
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </Box>
    </>
  )
}

export default App;



// import { Button, Dialog } from "@chakra-ui/react";
// import {
//   AlertDialogCloseButton,
//   AlertDialogOverlay,
// } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";

// function TestModal() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       {/* <Button onClick={onOpen}>Open Modal</Button> */}
//       <Dialog.Root>
//         <Dialog.Trigger>Open</Dialog.Trigger>
//         <Dialog.Positioner>
//           <Dialog.Content>
//             <Dialog.Title>Hello</Dialog.Title>
//             <Dialog.CloseTrigger>x</Dialog.CloseTrigger>
//           </Dialog.Content>
//         </Dialog.Positioner>
//       </Dialog.Root>
//       {/* <Dialog isOpen={isOpen} onClose={onClose} isCentered>
//         <AlertDialogOverlay />
//         <DialogContent>
//           <DialogHeader>Hello</DialogHeader>
//           <AlertDialogCloseButton />
//           <DialogBody>This is a test modal.</DialogBody>
//         </DialogContent>
//       </Dialog> */}
//     </>
//   );
// }

// export default TestModal;
