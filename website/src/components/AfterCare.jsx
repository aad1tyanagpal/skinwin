import React from 'react';

// Data
const afterCareData = [
  { 
    title: "Hair Transplant (FUE/DHI)", 
    content: [
      { 
        heading: "What to Do", 
        points: [
          "Sleep with your head elevated (45-degree angle) for 3-4 days to minimize swelling.", 
          "After 48 hours, wash hair gently with medicated shampoo as advised, letting water flow over grafts without direct pressure.", 
          "Take all prescribed medications (antibiotics, pain relievers) as instructed."
        ] 
      },
      { 
        heading: "What to Avoid", 
        points: [
          "Do not touch, scratch, or pick at the transplanted area or scabs.", 
          "Avoid smoking and alcohol for at least 2-3 weeks as they impair healing.", 
          "Avoid direct sun exposure on the scalp for a month. Wear a loose cap if necessary.", 
          "No strenuous exercise or heavy sweating for 10-14 days."
        ] 
      },
      { 
        heading: "What to Expect", 
        points: [
          "Transplanted hairs will shed between weeks 2-8. This is a normal and temporary phase.", 
          "New hair growth begins around month 3, starting as fine hair that thickens over time.", 
          "Visible results appear between 6-9 months, with full results achieved by 12-18 months."
        ] 
      }
    ]
  },
  { 
    title: "Laser Hair Reduction", 
    content: [
      { 
        heading: "What to Do", 
        points: [
          "Apply a cold compress or aloe vera gel to soothe any mild redness or warmth.", 
          "Use a gentle, fragrance-free cleanser and moisturizer.", 
          "Shaving is the only permitted method of hair removal between sessions."
        ] 
      },
      { 
        heading: "What to Avoid", 
        points: [
          "Avoid hot showers, saunas, steam rooms, and heavy workouts for 24-48 hours.", 
          "Do not expose the treated area to the sun for at least 1-2 weeks. Use a broad-spectrum sunscreen (SPF 30+) daily.", 
          "Do not wax, pluck, thread, or use hair removal creams on the area."
        ] 
      },
      { 
        heading: "What to Expect", 
        points: [
          "Mild redness and swelling are normal and usually resolve within a day or two.", 
          "Treated hair will begin to shed over the next 1-3 weeks. This is a sign the treatment is working."
        ] 
      }
    ]
  },
  { 
    title: "Injectables (Botox & Fillers)", 
    content: [
      { 
        heading: "What to Do", 
        points: [
          "For Botox, keep your head upright for 4-6 hours post-treatment. Gently exercise facial muscles (e.g., frowning, smiling).", 
          "For Fillers, apply a cold compress gently to reduce swelling and bruising.", 
          "Sleep on your back with your head slightly elevated for the first night."
        ] 
      },
      { 
        heading: "What to Avoid", 
        points: [
          "Do not rub, touch, or massage the treated areas for 24-48 hours.", 
          "Avoid strenuous exercise, saunas, hot yoga, and alcohol for 24 hours to reduce bruising risk.", 
          "Avoid makeup on or around injection sites for at least 12-24 hours."
        ] 
      },
      { 
        heading: "What to Expect", 
        points: [
          "Botox effects begin in 3-5 days, with full results in 10-14 days, lasting 3-4 months.", 
          "Filler results are often immediate, but mild swelling can be present. Final results are visible after 1-2 weeks as the product settles."
        ] 
      }
    ]
  },
  { 
    title: "Chemical Peel", 
    content: [
      { 
        heading: "What to Do", 
        points: [
          "Keep skin well-moisturized with a gentle, non-comedogenic moisturizer.", 
          "Cleanse gently with a mild, fragrance-free cleanser and lukewarm water.", 
          "Use a broad-spectrum sunscreen (SPF 30+) daily, as your skin will be more sensitive."
        ] 
      },
      { 
        heading: "What to Avoid", 
        points: [
          "Do not pick, scrub, or peel off any flaking skin. Let it shed naturally.", 
          "Avoid sun exposure, and wear a hat if you must be outdoors.", 
          "No exfoliants, retinoids, AHAs/BHAs, or other active ingredients until the skin is fully healed (approx. 5-7 days)."
        ] 
      },
      { 
        heading: "What to Expect", 
        points: [
          "Redness, tightness, and mild swelling are normal for 1-3 days.", 
          "Peeling or flaking usually begins 2-3 days after the treatment and can last up to a week.", 
          "Smoother, brighter skin is typically revealed 7-14 days post-treatment."
        ] 
      }
    ]
  },
];

// Component
const CareCard = ({ title, content }) => (
  <div className="bg-[#FBF5E9] p-6 rounded-lg shadow-md border border-gray-200/50">
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <div className="space-y-4">
      {content.map((section, index) => (
        <div key={index}>
          <h4 className="font-semibold text-gray-700">{section.heading}</h4>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-600">
            {section.points.map((point, pIndex) => <li key={pIndex}>{point}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const AfterCare = () => {
  return (
    <div className="bg-white py-20 sm:py-24 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#C09A50] font-semibold tracking-wide uppercase">After Care</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ensuring Optimal Results & Recovery
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Proper after-care is crucial for the success of your treatment. Follow these detailed guidelines to ensure a smooth recovery and the best possible outcome.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {afterCareData.map((item, index) => (
            <CareCard key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfterCare;