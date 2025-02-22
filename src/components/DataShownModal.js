'use client'
import TextCustom from "@/components/text";
import styles from "../app/page.module.css";
import Dialog from "@/components/dialog";
import { Container } from "@chakra-ui/react";




export default function DataShownModal({name,codeName,sliderValue,pokemon,totalCost})  {

  return (
     <Dialog>
         <TextCustom text="Order details" className={styles.customLabelFillForm}/>
     <Container className={styles.orderDetails}>
     <TextCustom text={`name - ${name}`} className={styles.orderDetailsText}/>
     <TextCustom text={`codeName - ${codeName}`} className={styles.orderDetailsText}/>
     <TextCustom text={`Nearest Pokemon center - ${sliderValue + " -km"}`} className={styles.orderDetailsText}/>
     <TextCustom text={`pokemon Selected - ${pokemon}`} className={styles.orderDetailsText}/>
     <TextCustom text={`Total cost $${totalCost}`} className={styles.orderDetailsText}/>
        </Container>
      </Dialog>

  );
}
