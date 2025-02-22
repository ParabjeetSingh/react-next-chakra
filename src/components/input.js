'use client'

import { Box, Field, Input, defineStyle, Text } from "@chakra-ui/react"
import { useState } from "react"

const Demo = ({ value = "", placeholder, onChange ,errorText=""}) => {
  const [inputValue, setInputValue] = useState(value)
  const isError = inputValue.length > 0 && inputValue.length < 3

  const handleChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)
    if (onChange) onChange(e.target.value)
  }

  return (
    <Field.Root>
      <Box  style={{
          marginTop: "40px",
        }} pos="relative" w="full" >
        <Input
        colorPalette="gray"
       
          variant="subtle"
          className="peer"
          placeholder={""}
          style={{
            border:"none"
          }}
          value={inputValue}
          onChange={handleChange}

        />
        <Field.Label 
         css={floatingStyles}>{placeholder}</Field.Label>
      </Box>
      {isError && <Text color="red.500" mt={1}>{errorText}</Text>}
    </Field.Root>
  )
}

export default Demo

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  background:"inherit",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
})
