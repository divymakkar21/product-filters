import { Filter } from "@/app/utils/types";
import { GripVertical, Trash } from "lucide-react";
import { useState } from "react";

type ProductFilterProps = {
  filter: Filter
  index: number
  deleteFilter: (index: number) => void
}
export default function ProductFilter({ filter, index, deleteFilter }: ProductFilterProps) {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="button"
      className="flex  h-[180px] items-stretch pr-4 border-r border-[#E6E7E9]"
    >
      <div className="pr-3  mt-2  flex flex-col items-center border-r border-[#E6E7E9] mr-2">
        {hover ? <Trash className="h-4 w-4  text-red-600" onClick={() => deleteFilter(index)} /> : <div className="h-4 w-4"></div>}
        <div className="flex items-center mt-2">
          <div className="font-semibold text-xl">{index + 1}</div>
          <GripVertical className="h-6 w-6 text-gray-400" />
        </div>
      </div>
      <div className="rounded-lg ml-3 p-4 flex bg-white border border-dashed border-gray-50 items-center w-[300px] justify-center">
        {filter?.value1 ? (
          <div className="flex gap-3  justify-center items-center ">
            <span className="font-medium text-xs p-1 border rounded-lg">
              {filter.value1}
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs">
              {filter.operator}
            </span>
            <span className="text-gray-600 text-xs border rounded-lg p-1">
              {filter.value2}
            </span>
          </div>
        ) : (
          <div className="border border-gray-200 rounded-lg p-2 items-center flex justify-center">
            <div className="text-xs">Add Product Filters</div>
          </div>
        )}
      </div>
    </div>
  );
}
