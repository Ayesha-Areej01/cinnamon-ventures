"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
    Command, 
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandInput
} from "@/components/ui/command";
import { 
    Popover, 
    PopoverContent, 
    PopoverTrigger 
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Category } from "@/sanity.types";

interface CategorySelectorProps {
  categories: Category[];
}

export function CategorySelectorComponent({
  categories,
}: CategorySelectorProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const router = useRouter();


  return(
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-[340px] sm:w-[560px] max-w-full relative justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-[#ddbb87] hover:bg-[#d1a35e] hover:text-white text-white font-bold py-2 px-4 mx-4 rounded"
      >
        {value
          ? categories.find((category) => category._id === value)?.title
          : "Filter By Category"}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 "/>
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-full p-1 mx-2 bg-[#ddbb87]">
      <Command className="bg-[#ddbb87]">
        <CommandInput
          placeholder="Search category..."
          className="h-9"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const selectedCategory = categories.find((c) => c.title
                  ?.toLowerCase()
                  .includes(e.currentTarget.value.toLowerCase())
              );
              if (selectedCategory?.slug?.current) {
                setValue(selectedCategory._id);
                router.push(`/categories/${selectedCategory.slug.current}`);
                setOpen(false);
              }
            }
          }}
        />
        
        <CommandList>
            <CommandEmpty>No category found</CommandEmpty>
            <CommandGroup>
                {categories.map((category) => (
                    <CommandItem
                    key={category._id}
                    value={category.title}
                    onSelect={() => {
                        setValue(value === category._id ? "" : category._id);
                        router.push(`/categories/${category.slug?.current}`);
                        setOpen(false);
                    }}
                    >
                        {category.title}
                        <Check
                        className={cn("ml-auto h-4 w-4 bg-green-600", value === category._id ? "opacity-100" : "opacity-0")}/>
                    </CommandItem>
                ))}
            </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
  )
}

