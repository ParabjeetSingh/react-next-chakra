
"use client";
import { For, Stack, createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { useState } from "react";
const Demo = ({ label, items = [],onValueChange=()=>{} }) => {
  const frameworks = createListCollection({
    items: items,
  });
  const [selectedValue, setSelectedValue] = useState("");
  return (

      <For each={["subtle"]}>
        {(variant) => (
          <SelectRoot
            onValueChange={(e) => {
              setSelectedValue(e.value[0]);
              const obj=items.find((item)=>item.value===e.value[0])
              onValueChange(obj)
            }}
            key={variant}
            variant={variant}
            collection={frameworks}
          >
            <SelectTrigger>
              <SelectValueText placeholder={label} />
            </SelectTrigger>
            <SelectContent style={{ zIndex: 100000 }}>
              {frameworks.items.map((movie) => (
                <SelectItem item={movie} key={movie.value}>
                  {movie.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        )}
      </For>
  );
};

export default Demo;
