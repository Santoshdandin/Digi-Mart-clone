import { Box, Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useReducer } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  pincode: "",
  firstname: "",
  lastname: '',
  houseno: "",
  colony: "",
  landmark: "",
  city: "",
  state: "",
  mobile: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    case "pincode":
      return {
        ...state,
        pincode: action.payload
      }

    case "firstname":
      return {
        ...state,
        firstname: action.payload
      }

    case "lastname":
      return {
        ...state,
        lastname: action.payload
      }

    case "houseno":
      return {
        ...state,
        houseno: action.payload
      }

    case "colony":
      return {
        ...state,
        colony: action.payload
      }

      case "landmark":
        return {
          ...state,
          landmark: action.payload
        }
      
        case "city":
          return {
            ...state,
            city: action.payload
          } 
          
          case "state":
            return {
              ...state,
              state: action.payload
            }
            
            case "mobile":
              return {
                ...state,
                mobile: action.payload
              }    

    case "reset":
      return initialState

    default:
      return state


  }
}



const Checkout = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
const [ userData, SetUser ] = useState({})
  const [formData, dispatch] = useReducer(reducer, initialState)
  
//    const [submitedData, setSubmitedData] = useState(formData);  
   const submitHandler=(e)=>{
      e.preventDefault()
      // console.log(formData)
      dispatch(initialState)
  SetUser(formData)
  console.log(userData, 22);
      alert("Saved Address")
      // setSubmitedData({...formData})
      onClose()
      dispatch({type:"reset"})
   }

  return (
    <>
    <Box>
      <HStack p="20px">
      <Link to="/payment"><Button bgColor="#e42529" color="white" >PROCEED TO PAYMENT</Button></Link>
        <Button variant='outline' onClick={onOpen} >ADD NEW SHIPPING ADDRESS</Button>
      </HStack>
      {  [userData].length > 0 && [userData].map((el)=>{
      return <Box border="1px solid grey">
        <Text>{el.firstname}{el.lastname}</Text>
        <Text>{el.houseno}{el.colony}{el.landmark}</Text>
        <Text>{el.city}</Text>
        <Text>{el.state}</Text>
        <Text>Mobile:{el.mobile}</Text>
      </Box>
     })}
    </Box>

<Modal
initialFocusRef={initialRef}
finalFocusRef={finalRef}
isOpen={isOpen}
onClose={onClose}
>
<ModalOverlay />
<ModalContent>
  <ModalHeader>Add a New Address</ModalHeader>
  <ModalCloseButton />
  <ModalBody pb={6}>
    <FormControl isRequired>
      <FormLabel>Pincode</FormLabel>
      <Input ref={initialRef} placeholder='Pincode' value={formData.pincode} onChange={(e)=>dispatch({type:"pincode",payload:e.target.value})} />
    </FormControl>

    <FormControl mt={4} isRequired>
      <FormLabel>First Name</FormLabel>
      <Input placeholder='Enter First Name' value={formData.firstname} onChange={(e)=>dispatch({type:"firstname",payload:e.target.value})} />
    </FormControl>

    <FormControl mt={4} isRequired>
      <FormLabel>Last Name</FormLabel>
      <Input ref={initialRef} placeholder='Enter Last Name' value={formData.lastname} onChange={(e)=>dispatch({type:"lastname",payload:e.target.value})} />
    </FormControl>

    <FormControl mt={4} isRequired>
      <FormLabel>House No</FormLabel>
      <Input ref={initialRef} placeholder='Enter House No' value={formData.houseno} onChange={(e)=>dispatch({type:"houseno",payload:e.target.value})} />
    </FormControl>

    <FormControl mt={4}>
      <FormLabel>Colony / Stree</FormLabel>
      <Input ref={initialRef} placeholder='Enter Colony / Street' value={formData.colony} onChange={(e)=>dispatch({type:"colony",payload:e.target.value})} />
    </FormControl>

    <FormControl mt={4}>
      <FormLabel>Landmark</FormLabel>
      <Input ref={initialRef} placeholder='Enter Landmark' value={formData.landmark} onChange={(e)=>dispatch({type:"landmark",payload:e.target.value})} />
    </FormControl>

    <FormControl mt={4} isRequired>
      <FormLabel>City</FormLabel>
      <Input ref={initialRef} placeholder='Enter City' value={formData.city} onChange={(e)=>dispatch({type:"city",payload:e.target.value})} />
    </FormControl>

    <FormControl mt={4} isRequired>
      <FormLabel>State</FormLabel>
      <Input ref={initialRef} placeholder='Enter State' value={formData.state} onChange={(e)=>dispatch({type:"state",payload:e.target.value})} />
    </FormControl>

    <FormControl mt={4} isRequired>
      <FormLabel>Mobile Number</FormLabel>
      <Input ref={initialRef} placeholder='Enter Mobile Number' value={formData.mobile} onChange={(e)=>dispatch({type:"mobile",payload:e.target.value})} />
    </FormControl>
  </ModalBody>

  <ModalFooter>
    <Button colorScheme='blue' mr={3} onClick={submitHandler}>
      Submit
    </Button>
    <Button onClick={onClose}>Cancel</Button>
  </ModalFooter>
</ModalContent>
</Modal>

</>
  )
}

export default Checkout
