

"use client"

import { Box, Code, Stack } from "@chakra-ui/react"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

// const initialValue = [50]

const CustomSlider = ({onValueChange=()=>{},initialValue=[0],max}) => {
  const [value, setValue] = useState(initialValue)
  const [endValue, setEndValue] = useState(initialValue)

  return (
    <Box >
      <Slider
      min={0}
      max={max}
      style={{color:"#FE5454"}} variant="solid" width="100%" colorPalette="red" 
        value={value}
        onValueChangeEnd={(e) => {
          onValueChange(e.value[0])
          setValue(e.value)
          setEndValue(e.value[0])
        }
        }
      />
      <Stack direction="row" justify="start">
        <Code>{endValue}</Code>
        </Stack>
      
    </Box>
  )
}

export default CustomSlider
