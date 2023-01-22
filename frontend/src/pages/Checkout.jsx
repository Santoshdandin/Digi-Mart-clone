import { Box, Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const Checkout = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
    <Box>
      <HStack>
      <Button bgColor="#e42529" color="white" >DELIIVER HERE</Button>
        <Button variant='outline' onClick={onOpen} >ADD NEW SHIPPING ADDRESS</Button>
      </HStack>
      
    </Box>

<Modal
initialFocusRef={initialRef}
finalFocusRef={finalRef}
isOpen={isOpen}
onClose={onClose}
>
<ModalOverlay />
<ModalContent>
  <ModalHeader>Create your account</ModalHeader>
  <ModalCloseButton />
  <ModalBody pb={6}>
    <FormControl>
      <FormLabel>First name</FormLabel>
      <Input ref={initialRef} placeholder='First name' />
    </FormControl>

    <FormControl mt={4}>
      <FormLabel>Last name</FormLabel>
      <Input placeholder='Last name' />
    </FormControl>

    <FormControl>
      <FormLabel>First name</FormLabel>
      <Input ref={initialRef} placeholder='First name' />
    </FormControl>

    <FormControl>
      <FormLabel>First name</FormLabel>
      <Input ref={initialRef} placeholder='First name' />
    </FormControl>

    <FormControl>
      <FormLabel>First name</FormLabel>
      <Input ref={initialRef} placeholder='First name' />
    </FormControl>

    <FormControl>
      <FormLabel>First name</FormLabel>
      <Input ref={initialRef} placeholder='First name' />
    </FormControl>

    <FormControl>
      <FormLabel>First name</FormLabel>
      <Input ref={initialRef} placeholder='First name' />
    </FormControl>

    <FormControl>
      <FormLabel>First name</FormLabel>
      <Input ref={initialRef} placeholder='First name' />
    </FormControl>

    <FormControl>
      <FormLabel>First name</FormLabel>
      <Input ref={initialRef} placeholder='First name' />
    </FormControl>
  </ModalBody>

  <ModalFooter>
    <Button colorScheme='blue' mr={3}>
      Save
    </Button>
    <Button onClick={onClose}>Cancel</Button>
  </ModalFooter>
</ModalContent>
</Modal>

</>
  )
}

export default Checkout
