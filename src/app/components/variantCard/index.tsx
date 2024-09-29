import Image from "next/image";
import { Plus } from "lucide-react";
import { Variant } from "@/app/utils/types";

interface VariantCardProps {
  variant: Variant;
  addImage: (imageUrl: string, filterIndex: number, variantIndex: number) => void;
  filterIndex: number;
  variantIndex: number;
}

export default function VariantCard({ variant, addImage, filterIndex, variantIndex }: VariantCardProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      addImage(imageUrl, filterIndex, variantIndex)
    }
  };
  if (!variant?.image) {
    return (
      <div className="border-r border-[#E6E7E9] px-4  flex items-stretch">
        <div className="bg-white border border-dashed rounded-lg shadow-sm w-[200px]  h-[180px] flex items-center justify-center">
          <label htmlFor={`file-upload-${filterIndex}-${variantIndex}`} className="p-1 flex border rounded-lg items-center">
            <Plus className="h-4 w-4 text-gray-400" />
            <p className="text-xs font-medium text-gray-900 truncate">
              Add Design
            </p>
            <input type="file" id={`file-upload-${filterIndex}-${variantIndex}`} style={{ display: "none" }} onChange={handleImageUpload} />
          </label>
        </div>
      </div>
    );
  }
  return (
    <div className="border-r border-[#E6E7E9] px-4">
      <div className="bg-white border border-dashed rounded-lg shadow-sm w-[200px]">
        <div className="p-4">
          <Image src={variant.image} alt="product" width={180} height={60} style={{ width: 180, height: 130 }} />
        </div>
        <div className="p-2">
          <p className="text-sm font-medium text-gray-900 truncate">
            {variant.title}
          </p>
        </div>
      </div>
    </div>
  );
}
