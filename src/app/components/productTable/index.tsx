import { Plus } from "lucide-react";
import ProductFilter from "../productFilter";
import VariantCard from "../variantCard";

export default function ProductTable() {
  const filters = [
    {
      operator: "contains",
      value1: "Product Collection",
      value2: "Kurtas",
      variants: [
        {
          title: "Anniversary Sale",
          image: "https://i.ibb.co/YRv4fJP/Fair-Lady-Baroque-Luxury-Lawn-Collection-Cotton-Fancy-Pakistani-Style-Salwar-At-Surat-Textile-Catalo.jpg"
        },
        {
          title: "Anniversary Sale",
          image: "https://i.ibb.co/YRv4fJP/Fair-Lady-Baroque-Luxury-Lawn-Collection-Cotton-Fancy-Pakistani-Style-Salwar-At-Surat-Textile-Catalo.jpg"
        },
      ],
    },
    {
      operator: "contains",
      value1: "Product Collection",
      value2: "Kurtas",
      variants: [
        {
          title: "Anniversary Sale",
          image: "https://i.ibb.co/YRv4fJP/Fair-Lady-Baroque-Luxury-Lawn-Collection-Cotton-Fancy-Pakistani-Style-Salwar-At-Surat-Textile-Catalo.jpg"
        },
        {
          title: "Anniversary Sale",
          image: "https://i.ibb.co/YRv4fJP/Fair-Lady-Baroque-Luxury-Lawn-Collection-Cotton-Fancy-Pakistani-Style-Salwar-At-Surat-Textile-Catalo.jpg"
        },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="font-semibold text-gray-600">Product Filter</div>
      </div>
      {filters.map((filter, index) => (
        <div
          key={index}
          className="flex  items-center gap-4 p-4  bg-[#F9FBFC] h-[200px] pb-3"
        >
          <ProductFilter filter={filter} index={index} />
          {filter?.variants.map((variant) => (
            <VariantCard
              variant={variant}
            />
          ))}
          <div className="bg-white p-2 h-10"><Plus className="h-6 w-6 text-gray-400"/></div>
        </div>
      ))}
    </div>
  );
}
