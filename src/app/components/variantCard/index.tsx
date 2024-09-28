import  Image  from 'next/image'
export default function VariantCard({ variant }: any) {
  if(!variant?.image) {
    return <></>
  }
  return (
    <div className="border-r border-[#E6E7E9] rounded-lg px-4 ">
      <div className="bg-white border border-dashed rounded-lg shadow-sm overflow-hidden">
        <div className='p-4'>
          <Image src={variant.image} alt='product' width={130} height={50} />
        </div>
        <div className="p-2">
          <p className="text-sm font-medium text-gray-900 truncate">{variant.title}</p>
        </div>
      </div>
    </div>
  );
}