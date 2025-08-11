import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
const CheckCircleIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CalculatorIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const SparklesIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M19 3v4M17 5h4M12 3v4M10 5h4M5 17v4M3 19h4M19 17v4M17 19h4M12 17v4M10 19h4M12 9a3 3 0 100-6 3 3 0 000 6zM12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>;
const StarIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const ClockIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CogIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


const comprehensivePackages = {
    skinTransformation: [
      { tier: "Premium", name: "Glow & Hydrate", services: [ { name: "HydraFacial", price: 10000 }, { name: "Cleanup Facial", price: 12000 }, { name: "Photo Facial", price: 24000 } ], individualTotal: 46000, packagePrice: 45000, savings: 1000, gradient: "from-blue-400 to-blue-600" },
      { tier: "Deluxe", name: "Radiance Restore", services: [ { name: "Advanced HydraFacial", price: 15000 }, { name: "Korean Glass Facial", price: 24000 }, { name: "Photo Facial", price: 24000 }, { name: "PRP", price: 9000 } ], individualTotal: 72000, packagePrice: 72000, savings: 0, gradient: "from-purple-400 to-purple-600" },
      { tier: "Platinum", name: "Ultimate Rejuvenation", services: [ { name: "E-Facial", price: 42000 }, { name: "Pumpkin Facial", price: 30000 }, { name: "Advanced HydraFacial", price: 15000 }, { name: "PRP-DermaPen", price: 17500 } ], individualTotal: 104500, packagePrice: 130000, savings: 0, gradient: "from-amber-400 to-amber-600" }
    ],
    hairRestoration: [
        { tier: "Premium", name: "Volume Boost", services: [ { name: "SMP", price: 48000 }, { name: "PRP Hair", price: 9000 } ], individualTotal: 57000, packagePrice: 60000, savings: 0, gradient: "from-green-400 to-green-600" },
        { tier: "Deluxe", name: "Crown Revival", services: [ { name: "SMP", price: 48000 }, { name: "SMB", price: 60000 }, { name: "Advanced PRP", price: 9000 }, { name: "1000-Graft Transplant", price: 16500 } ], individualTotal: 133500, packagePrice: 135000, savings: 0, gradient: "from-teal-400 to-teal-600" },
        { tier: "Platinum", name: "Full Growth Mastery", services: [ { name: "SMP", price: 48000 }, { name: "SMB", price: 60000 }, { name: "GFC-PRP", price: 21000 }, { name: "2000-Graft Transplant", price: 33000 } ], individualTotal: 162000, packagePrice: 165000, savings: 0, gradient: "from-emerald-400 to-emerald-600" }
    ],
    laserHairRemoval: [
        { tier: "Premium", name: "Everyday Smooth", services: [ { name: "Underarms", price: 6000 }, { name: "Bikini", price: 12000 }, { name: "Upper Lip", price: 3000 }, { name: "Chin", price: 3000 } ], individualTotal: 24000, packagePrice: 33000, savings: 0, gradient: "from-pink-400 to-pink-600" },
        { tier: "Deluxe", name: "Smooth & Confident", services: [ { name: "Full Legs", price: 27000 }, { name: "Underarms", price: 6000 }, { name: "Bikini", price: 12000 }, { name: "Full Back", price: 6000 } ], individualTotal: 51000, packagePrice: 65000, savings: 14000, gradient: "from-rose-400 to-rose-600" },
        { tier: "Platinum", name: "Head-to-Toe Freedom", services: [ { name: "Full Body Female", price: 60000 }, { name: "Full Body Male", price: 72000 }, { name: "Full Face Female", price: 13200 } ], individualTotal: 145200, packagePrice: 150000, savings: 0, gradient: "from-fuchsia-400 to-fuchsia-600" }
    ]
  };

const estimatorServices = {
  facials: [ { name: "HydraFacial", price: 2500, sessions: [1, 3, 6] }, { name: "Vampire Facial", price: 4000, sessions: [1, 3, 6] }, { name: "Korean Glass Facial", price: 4000, sessions: [1, 3, 6] }, { name: "Age-Revive Facial", price: 4500, sessions: [1, 3, 6] }, ],
  lhr: [ { name: "Full Face", price: 2500, sessions: [6, 8, 10] }, { name: "Underarms", price: 1500, sessions: [6, 8, 10] }, { name: "Full Body", price: 10000, sessions: [6, 8, 10] }, { name: "Full Legs", price: 4500, sessions: [6, 8, 10] }, ],
  peels: [ { name: "Glycolic Peel", price: 2200, sessions: [1, 3, 6] }, { name: "TCA Peel", price: 2000, sessions: [1, 3, 6] }, { name: "Yellow Peel", price: 3150, sessions: [1, 3, 6] }, { name: "Lightening Peel", price: 2200, sessions: [1, 3, 6] }, ],
  advanced: [ { name: "Botox (per unit)", price: 400, units: [20, 30, 40, 50] }, { name: "RF Treatment (Face)", price: 6000, sessions: [1, 3, 6] }, { name: "HIFU Treatment", price: 12500, sessions: [1, 2, 3] }, { name: "GFC Hair Therapy", price: 7000, sessions: [1, 3, 6] }, ]
};

const PackageCard = ({ package: pkg }) => (
    <div className="bg-surface rounded-lg border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className={`p-5 rounded-t-lg bg-gradient-to-r ${pkg.gradient}`}>
        <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
        <p className={`text-sm font-semibold ${getTierColor(pkg.tier)}`}>{pkg.tier}</p>
      </div>
      <div className="p-6 flex-grow">
        <div className="mb-4">
          <span className="text-3xl font-bold text-text-primary">₹{pkg.packagePrice.toLocaleString()}</span>
          {pkg.savings > 0 && <span className="ml-2 text-sm line-through text-text-secondary">₹{pkg.individualTotal.toLocaleString()}</span>}
        </div>
        <ul className="space-y-2 text-text-secondary">
          {pkg.services.map((service, idx) => (
            <li key={idx} className="flex items-center">
              <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              <span>{service.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-background rounded-b-lg">
        <Link to="/contact" className="w-full text-center bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300 block">
          Book Package
        </Link>
      </div>
    </div>
  );

const getTierColor = (tier) => {
    switch(tier) {
      case 'Premium': return 'text-blue-600';
      case 'Deluxe': return 'text-purple-600';
      case 'Platinum': return 'text-amber-600';
      default: return 'text-gray-600';
    }
  };

const PriceEstimator = () => {
    const [selectedCategory, setSelectedCategory] = useState('facials');
    const [selectedService, setSelectedService] = useState(estimatorServices.facials[0]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setSelectedService(estimatorServices[category][0]);
      setSelectedQuantity(1);
    };

    const handleServiceChange = (serviceName) => {
      const service = estimatorServices[selectedCategory].find(s => s.name === serviceName);
      setSelectedService(service);
      setSelectedQuantity(1);
    };

    const calculateTotal = () => {
      return selectedService.price * selectedQuantity;
    };

    const categoryNames = {
      facials: 'Signature Facials',
      lhr: 'Laser Hair Reduction',
      peels: 'Chemical Peels',
      advanced: 'Advanced Treatments'
    };

    return (
      <div className="bg-surface rounded-lg shadow-sm p-6 border border-gray-200/80">
        <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center"><CalculatorIcon className="h-6 w-6 mr-2" /> Price Estimator</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Category</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(estimatorServices).map((cat) => (
                <button key={cat} onClick={() => handleCategoryChange(cat)} className={`p-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-primary text-white' : 'bg-background hover:bg-gray-200/80'}`}>
                  {categoryNames[cat]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Treatment</label>
            <select value={selectedService.name} onChange={(e) => handleServiceChange(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg bg-background focus:ring-primary focus:border-primary">
              {estimatorServices[selectedCategory].map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">{selectedService.units ? 'Units' : 'Sessions'}</label>
            <div className="flex flex-wrap gap-2">
                {(selectedService.sessions || selectedService.units || [1]).map(q => (
                    <button key={q} onClick={() => setSelectedQuantity(q)} className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${selectedQuantity === q ? 'bg-primary text-white' : 'bg-background hover:bg-gray-200/80'}`}>
                        {q}
                    </button>
                ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200/80">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-text-secondary">Estimated Total</span>
              <span className="text-3xl font-bold text-primary">₹{calculateTotal().toLocaleString()}</span>
            </div>
            <p className="text-xs text-text-secondary mt-1 text-right">* All prices are exclusive of 18% GST.</p>
          </div>
        </div>
      </div>
    );
  };


const Pricing = () => {
  const [activeTab, setActiveTab] = useState('packages');

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Investment in Excellence</h2>
          <p className="mt-2 text-4xl font-extrabold text-text-primary sm:text-5xl">Transparent Pricing</p>
          <p className="mt-6 max-w-2xl text-xl text-text-secondary mx-auto">
            Choose from expertly designed packages or calculate individual treatment costs. No hidden fees, just clear value.
          </p>
        </header>

        <div className="flex justify-center mb-10">
          <div className="flex rounded-lg border border-gray-200/80 p-1 bg-surface shadow-sm">
            <button onClick={() => setActiveTab('packages')} className={`px-6 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'packages' ? 'bg-primary text-white' : 'text-text-secondary hover:bg-gray-200/50'}`}>
              Curated Packages
            </button>
            <button onClick={() => setActiveTab('individual')} className={`px-6 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'individual' ? 'bg-primary text-white' : 'text-text-secondary hover:bg-gray-200/50'}`}>
              Individual Calculator
            </button>
          </div>
        </div>

        {activeTab === 'packages' ? (
          <div className="space-y-16">
            {Object.entries(comprehensivePackages).map(([key, packages]) => (
              <section key={key}>
                <h3 className="text-2xl font-bold text-center text-text-primary mb-8">{ {skinTransformation: "Skin Transformation Packages", hairRestoration: "Hair Restoration Packages", laserHairRemoval: "Laser Hair Removal Packages"}[key] }</h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {packages.map((pkg, index) => <PackageCard key={index} package={pkg} />)}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <PriceEstimator />
          </div>
        )}

        <div className="text-center mt-16">
            <div className="bg-surface rounded-lg p-8 border border-gray-200/80 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-text-primary mb-4">Ready for a Consultation?</h3>
                <p className="text-lg text-text-secondary mb-6">
                Our experts are here to help you choose the best treatment plan for your needs and budget.
                </p>
                <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Schedule a Free Consultation
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
