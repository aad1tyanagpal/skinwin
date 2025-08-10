import React from 'react';

// Data
const pricingData = [
  { 
    category: "Signature Facials", 
    items: [
      { name: "HydraFacial MD®", price: "₹2,500" },
      { name: "Vampire Facial (PRP)", price: "₹4,000" },
      { name: "Korean Glass Skin Facial", price: "₹4,000" },
    ]
  },
  { 
    category: "Laser Hair Reduction", 
    items: [
      { name: "Full Face", price: "₹2,500" },
      { name: "Underarms", price: "₹1,500" },
      { name: "Full Body", price: "₹10,000" },
    ]
  },
  { 
    category: "Advanced Aesthetics", 
    items: [
      { name: "Q-Switch Laser (Face)", price: "₹3,500" },
      { name: "GFC Hair Therapy", price: "₹7,000" },
      { name: "Botox (per unit)", price: "₹400" },
    ]
  },
  { 
    category: "Restorative Procedures", 
    items: [
      { name: "Hair Transplant (per graft)", price: "₹16.50" },
      { name: "Surgical Mole Removal", price: "₹1,000" },
      { name: "Ear Lobe Repair", price: "₹3,000" },
    ]
  },
];

const Pricing = () => (
  <div className="bg-[#FBF5E9] py-20 sm:py-24 pt-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-[#C09A50] font-semibold tracking-wide uppercase">Investment in You</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Transparent & Value-Driven Pricing
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          We believe in transparent pricing for our premier services. The following is a representative list. A personalized quote will be provided during your private consultation.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {pricingData.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200/50">
            <h3 className="text-xl font-semibold text-[#C09A50] mb-4">{category.category}</h3>
            <ul className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{item.name}</span>
                  <span className="font-semibold text-gray-800">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center mt-12 text-gray-500">All prices are subject to 18% GST. Final pricing will be confirmed after a thorough consultation.</p>
    </div>
  </div>
);

export default Pricing;