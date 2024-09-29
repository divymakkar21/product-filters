"use client";
import { Plus } from "lucide-react";
import ProductFilter from "../productFilter";
import VariantCard from "../variantCard";
import { useState } from "react";
import { defaultFilters } from "@/app/utils/constants";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function ProductTable() {
  const [filters, setFilters] = useState(defaultFilters);

  const addVariant = () => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) => ({
        ...filter,
        variants: [
          ...filter.variants,
          {
            title: "",
            image: "",
          },
        ],
      }))
    );
  };

  const addFilter = () => {
    setFilters([
      ...filters,
      {
        operator: "",
        value1: "",
        value2: "",
        variants: Array(filters[0].variants.length).fill({
          title: "",
          image: "",
        }),
      },
    ]);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const newFilters = Array.from(filters);
    const [reorderedItem] = newFilters.splice(result.source.index, 1);
    newFilters.splice(result.destination.index, 0, reorderedItem);

    setFilters(newFilters);
  };

  const deleteFilter = (index: number) => {
    setFilters((prevFilters) => prevFilters.filter((_, i) => i !== index));
  };

  const handleImageUpload = (
    imageUrl: string,
    filterIndex: number,
    variantIndex: number
  ) => {
   
    
    setFilters((prevFilters) => {
      const updatedFilters = [...prevFilters];
      const updatedVariants = [...updatedFilters[filterIndex].variants];
      updatedVariants[variantIndex] = {
        ...updatedVariants[variantIndex],
        image: imageUrl,
      };
      updatedFilters[filterIndex] = {
        ...updatedFilters[filterIndex],
        variants: updatedVariants,
      };
      return updatedFilters;
    });
  };

  return (
    <>
      <div className="bg-[#F9FBFC] rounded-lg shadow">
        <div className="flex gap-4 p-4">
          <div className="font-semibold basis-1/3 text-gray-600 text-center">Product Filter</div>
          {filters[0].variants?.map((variant, index) => (<div className="w-[200px] font-semibold text-gray-600 text-center">{index === 0 ? 'Primary Variant' : `Variant ${index }`}</div>))}
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="filters">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {filters.map((filter, index) => (
                  <Draggable
                    key={index}
                    draggableId={index.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        className="flex items-center gap-4 p-4 rounded-md overflow-hidden"
                      >
                        <ProductFilter
                          filter={filter}
                          index={index}
                          deleteFilter={() => deleteFilter(index)}
                        />
                        <div className="flex overflow-x-scroll">
                          {filter?.variants.map((variant, variantIndex) => (
                            <VariantCard
                              key={variantIndex}
                              variant={variant}
                              filterIndex={index}
                              variantIndex={variantIndex}
                              addImage={handleImageUpload}
                            />
                          ))}
                        </div>
                        <div className="bg-white p-2 h-10" onClick={addVariant}>
                          <Plus className="h-6 w-6 text-gray-400 cursor-pointer" />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div
          className="bg-white p-2 ml-5 mb-5 w-8 h-8 cursor-pointer"
          onClick={addFilter}
        >
          <Plus className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </>
  );
}
