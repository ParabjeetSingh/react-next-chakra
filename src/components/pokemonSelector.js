"use client";
import { Container, IconButton } from "@chakra-ui/react";
import styles from "../app/page.module.css";
import TextCustom from "./text";
import { IoMdAdd } from "react-icons/io";
import AddingDataModal from "./addingDataModal";
import { useState } from "react";

export default function PokemonSelector({ setSelectedChips, chips }) {
    const[showAddModal,setShowAddModal]=useState(false)
  return (
    <Container className={styles.pokemomSelector}>
      <TextCustom
        text="What do you want to pack?"
        className={styles.customLabelPack}
      />
      <IconButton onClick={()=>{
        setShowAddModal(true)
      }} style={{backgroundColor:"#FE5454"}} aria-label="Call support" rounded="full" colorPalette="red">
        <IoMdAdd />
      </IconButton>
      {showAddModal&&
      <AddingDataModal setShowAddModal={setShowAddModal} setSelectedChips={setSelectedChips} chips={chips} />}
    </Container>
  );
}
