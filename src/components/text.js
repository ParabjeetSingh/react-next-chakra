import React from "react"
import { Text } from '@chakra-ui/react'
function TextCustom ({text,className}) {
    return  <Text className={className}>{text}</Text>
  
}
export default TextCustom