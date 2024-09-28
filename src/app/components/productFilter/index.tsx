import { GripVertical } from "lucide-react";

export default function ProductFilter({ filter, index }: any) {
  return (
    <div className="flex  h-[150px] items-stretch pr-4 border-r border-[#E6E7E9]">
      <div className="flex items-center pr-3  border-r border-[#E6E7E9] mr-2">
        <div className="font-semibold text-xl">{index + 1}</div>
        <GripVertical className="h-6 w-6 text-gray-400" />
      </div>
      <div className="rounded-lg ml-3 p-4 flex bg-white border border-dashed border-gray-50 items-center ">
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
      </div>
    </div>
  );
}
