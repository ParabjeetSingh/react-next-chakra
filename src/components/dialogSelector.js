'use client'
import TextCustom from "@/components/text";
import styles from "../app/page.module.css";
import Dialog from "@/components/dialog";
import InputCustom from "@/components/input";
import CustomSlider from "@/components/slider";
import SelectCustom from "@/components/select";
import CustomIconButton from "@/components/roundedImage";


export default function Home() {
  return (
    <div className={styles.page}>
     <Dialog>
     <TextCustom text="Fill This Form" className={styles.customLabelFillForm}/>
     <TextCustom text="We'll use this info to dominate the poke world! Muhahahahah" className={styles.customLabelMuah}/>
     <InputCustom placeholder={"Full Name"} value={""} onChange={()=>{}} />
     <InputCustom placeholder={"Code Name"} value={""} onChange={()=>{}} />
     <CustomSlider/>
     <TextCustom text="How far is your nearest pokemon center? (In KMs)" className={styles.poekmonCenter}/>
     <SelectCustom/>
     <CustomIconButton/>
      </Dialog>
    </div>
  );
}
