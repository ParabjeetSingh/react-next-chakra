"use client";
import TextCustom from "@/components/text";
import styles from "./page.module.css";
import Dialog from "@/components/dialog";
import InputCustom from "@/components/input";
import CustomSlider from "@/components/slider";
import SelectCustom from "@/components/select";
import CustomIconButton from "@/components/roundedImage";
import PokemonSelector from "@/components/pokemonSelector";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import CustomButton from "@/components/button";
import TagList from "@/components/chipsContainer";
import DataShownModal from "@/components/DataShownModal";

const items = [
  {
    label: "Kanto",
    value: "Kanto",
    pokemons: ["Bulbasaur", "Charmander", "Squirtle"],
    id: "1234",
  },
  {
    label: "Jhoto",
    value: "Jhoto",
    pokemons: ["Chikorita", "Cyndaquil", "Totodyle"],
    id: "1235",
  },
  {
    label: "Hoenn",
    value: "Hoenn",
    pokemons: ["Treeko", "Torchik", "Mudkip"],
    id: "1236",
  },
];

export default function Home() {
  const [pokemon, setPokemon] = useState("");
  const [name, setName] = useState("");
  const [codeName, setCodeName] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [region, setRegion] = useState({
    label: "Kanto",
    value: "Kanto",
    pokemons: ["Bulbasaur", "Charmander", "Squirtle"],
  });
  const [chips, setSelectedChips] = useState([]);
  const [showLastModal, setShowLastModal] = useState(false);
  const totalCost = chips.reduce((acc, chip) => {
    return acc + parseInt(chip.cost);
  }
  , 0);
  return (
    <div className={styles.page}>
      <Dialog>
        <TextCustom
          text="Fill This Form"
          className={styles.customLabelFillForm}
        />
        <TextCustom
          text="We'll use this info to dominate the poke world! Muhahahahah"
          className={styles.customLabelMuah}
        />
        <InputCustom
          placeholder={"Full Name"}
          value={""}
          onChange={(val) => {
            setName(val);
          }}
          errorText={"We know that's not yo name!!"}
        />
        <InputCustom
          placeholder={"Code Name"}
          value={""}
          onChange={(val) => {
            setCodeName(val);
          }}
          errorText={"Enter Code name"}
        />
        <Container className={styles.containerSelectCustomMain}>
          <CustomSlider
            max={100}
            onValueChange={(val) => {
              setSliderValue(val);
            }}
          />
        </Container>

        <TextCustom
          text="How far is your nearest pokemon center? (In KMs)"
          className={styles.poekmonCenter}
        />

        <Container className={styles.containerSelectCustomRegion}>
          <SelectCustom
            items={items}
            onValueChange={(val) => {
              setRegion(val);
            }}
            label={"What's your starting region?"}
          />
        </Container>
        <CustomIconButton
          setPokemon={setPokemon}
          region={region}
          setRegion={setRegion}
          onClick={(val) => {
            setPokemon(val);
          }}
        />
        <PokemonSelector setSelectedChips={setSelectedChips} chips={chips} />
        <TagList items={chips} setSelectedChips={setSelectedChips} />

        <Container className={styles.pokemomSelector}>
          <TextCustom text="Cost:" className={styles.AddModalCost} />

          <TextCustom
            text={"$" + totalCost}
            className={styles.costAddModal}
          />
        </Container>

        <CustomButton
          text={"START MY JOURNEY"}
          onClick={() => {
            setShowLastModal(true);
          }}
        />
        {showLastModal && <DataShownModal 
        name={name}
        codeName={codeName}
        sliderValue={sliderValue}
        region={region}
        pokemon={pokemon}
        chips={chips}
        totalCost={totalCost}
        />}
      </Dialog>
    </div>
  );
}
