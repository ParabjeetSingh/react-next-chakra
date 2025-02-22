import {
  DialogBody,
  DialogContent,
  DialogRoot,
} from "@/components/ui/dialog"
 import styles from "../app/page.module.css";

const Dialog = ({children}) => {
  return (
    <DialogRoot  open={true} size="sm" scrollBehavior="outside">
        <DialogContent   className={styles.dialogCustom}>
            <DialogBody >
                {children}
            </DialogBody>
        </DialogContent>
    </DialogRoot>
  )
}

export default Dialog