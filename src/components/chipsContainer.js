"use client";

import { useState } from "react";
import { Tag, Wrap } from "@chakra-ui/react";

const TagList = ({ items = [], onRemove ,setSelectedChips}) => {
  const [tags, setTags] = useState(items);

  const handleRemove = (index) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
    if (onRemove) onRemove(updatedTags); // Notify parent if needed
  };

  return (
    <Wrap spacing={2}>
          {items.map((item, index) => (
        <Tag.Root key={item.value} colorPalette={item.bag?"cyan":"gray"}>
        <Tag.Label>{item.label}</Tag.Label>
        <Tag.EndElement onClick={() => {
            const arr=items.filter((items)=>items.id!==item.id)
            setSelectedChips(arr)

        }}>
          <Tag.CloseTrigger />
        </Tag.EndElement>
      </Tag.Root>
        ))}
    </Wrap>
  );
};

export default TagList;
