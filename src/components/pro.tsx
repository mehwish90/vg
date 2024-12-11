

import Image from 'next/image';

export default function Products() {
  interface Card {
    name: string;

    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: 'Syltherine',
      price: 'Rp 2.500.000',
      image: "/image 5.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Leviosa',
      price: 'Rp 2.500.000',
    
      image: "/image 8.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Lolito',
      price: 'Rp 7.000.000',
      
      image: "/images7.png",
      description: 'Luxury big sofa.',
    },
    {
      name: 'Respira',
      price: 'Rp 500.000',
    
      image: "/images6.png",
      description: 'Outdoor bar table and stool',
    },
    {
      name: 'Grifo',
      price: 'Rp 1.500.000',

      image: "/images2.png",
      description: 'Night lamp',
    },
    {
      name: 'Muggo',
      price: 'Rp 1.50.000',
    
      image: "/images3.png",
      description: 'Grey sofa set.',
    },
    {
      name: 'Pingky',
      price: 'Rp 7.500.000',
      
      image: "/images4.png",
      description: 'Stylish sofa set',
    },
    {
      name: 'Potty',
      price: 'Rp 500.000',

      image: "/images6.png",
      description: 'Brown sofa',
    },
  ];

  return (
    <>
    
      <div className="text-center p-6">
        <h2 className="text-3xl font-bold">Our Products</h2>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {data.map((card, index) => (
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            key={index}
          >
      
            <Image
              src={card.image}
              alt={card.name}
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-4">
              <h5 className="text-lg font-bold text-gray-800">{card.name}</h5>
              <p className="text-sm text-gray-600">{card.description}</p>
              <h5 className="text-lg font-bold text-gray-800 mt-2">
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}