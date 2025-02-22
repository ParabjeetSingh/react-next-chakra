"use client";
import TextCustom from "@/components/text";
import styles from "../app/page.module.css";
import Dialog from "@/components/dialog";
import CustomSlider from "@/components/slider";
import SwitchCustom from "./switchCustom";
import { Container } from "@chakra-ui/react";
import CustomButton from "./button";
import SelectCustom from "@/components/select";
import { useState } from "react";
const items = [
  { label: "Poke Ball", value: "pokeball", cost: "5" },
  { label: "Great Ball", value: "greatball", cost: "10" },
  { label: "Super Potion", value: "superpotion", cost: "10" },
  { label: "Hyper Potion", value: "hyperpotion", cost: "20" },
];

export default function AddingDataModal({ chips, setSelectedChips ,setShowAddModal}) {
  const [selectValue, setSelectValue] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [bag, setBag] = useState(false);
  const overallCost = selectValue
    ? selectValue?.cost * quantity + (bag ? 2 : 0)
    : "0";

  return (
    <div className={styles.page}>
      <Dialog addingData={true}>
        <TextCustom
          text="Place Your Order"
          className={styles.placeYourOrrder}
        />
        <TextCustom
          text="We'll use this info to pack your order! Muhahahahahaha"
          className={styles.customLabelMuahPack}
        />
        <Container className={styles.containerSelectCustom}>
          <SelectCustom
            label={"Choose Item"}
            items={items}
            onValueChange={(value) => {
              setSelectValue(value);
            }}
          />
        </Container>

        <CustomSlider
          max={10}
          onValueChange={(value) => {
            setQuantity(value);
          }}
        />
        <TextCustom text="Select Quantity" className={styles.selectQuantity} />
        <Container className={styles.pokemomSelectorOne}>
          <TextCustom
            text="I need a bag for that!"
            className={styles.customLabelPack}
          />
          <SwitchCustom
            onChange={() => {
              setBag(!bag);
            }}
          />
        </Container>
        <Container className={styles.pokemomSelector}>
          <TextCustom text="Cost:" className={styles.AddModalCost} />

          <TextCustom
            text={"$" + overallCost}
            className={styles.costAddModal}
          />
        </Container>
        <CustomButton
          text={"ADD TO CART"}
          onClick={() => {
            if (selectValue && quantity > 0) {
              setSelectedChips([
                ...chips,
                {
                  label: selectValue.label,
                  quantity: quantity,
                  bag: bag,
                  cost: overallCost,
                  id: Math.random(100)+"-chips",
                },
              ]);
              setShowAddModal(false)
            } else {
              window.alert("Please select an item and quantity");
            }
          }}
        />
      </Dialog>
    </div>
  );
}
