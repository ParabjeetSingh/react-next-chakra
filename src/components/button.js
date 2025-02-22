import { Button } from "@chakra-ui/react"
import styles from "../app/page.module.css"
const CustomButton = ({text,onClick}) => {
  return (
      <Button className={styles.customButton}  onClick={onClick}  colorPalette="#FE5454" size="sm">{text}</Button>
  )
}
export default CustomButton
