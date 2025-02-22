import { IconButton } from "@chakra-ui/react";
import Image from "next/image";

const CustomIconButton = ({ region,onClick = () => {}}) => {
  const arr = [1, 2, 3];
  return<>
  {region.pokemons.map((item) => (
    <IconButton
    style={{ width: "84px", height: "84px",marginLeft:"13px",marginRight:"13px" }}
      key={item}
      aria-label="custom-icon"

      borderRadius="full"
      bg="gray.200"
      _hover={{ bg: "gray.300",height:"94px" }}
      onClick={()=>{onClick(item)}}
    >
          {/* <img
        src="/images/char.webp" // Directly using <img> instead of <Image />
        alt="New-image-icon"
        width="44"
        height={44}
     // Styling the <img> tag
      /> */}
         <span>
         {item}
            </span> 
    </IconButton>

    
  ))}
  </>
};

export default CustomIconButton;
