import { Box, HStack, Radio, Text } from '@chakra-ui/react'
import React from 'react'

const Payment = () => {
  return (
    <Box>
     <Text>PAY SECURELY</Text>
     <HStack>
      <Box>
        <Radio>Credit Card</Radio>
      </Box>
      <Box></Box>
     </HStack>
    </Box>
  )
}

export default Payment
