import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

// Page imports
import Home from '../pages/home/Home';
import Treatments from '../pages/treatments/Treatments';
import SkinTreatments from '../pages/treatments/skin-treatments/SkinTreatments';
import HydraFacial from '../pages/treatments/skin-treatments/face-rejuvenation/HydraFacial';
import ChemicalPeel from '../pages/treatments/skin-treatments/face-rejuvenation/ChemicalPeel';
import CarbonFacial from '../pages/treatments/skin-treatments/face-rejuvenation/CarbonFacial';
import Botox from '../pages/treatments/skin-treatments/anti-ageing/Botox';
import Fillers from '../pages/treatments/skin-treatments/anti-ageing/Fillers';
import HIFU from '../pages/treatments/skin-treatments/anti-ageing/HIFU';
import Acne from '../pages/treatments/skin-treatments/skin-concerns/Acne';
import Pigmentation from '../pages/treatments/skin-treatments/skin-concerns/Pigmentation';
import Mole from '../pages/treatments/skin-treatments/skin-concerns/Mole';
import Warts from '../pages/treatments/skin-treatments/skin-concerns/Warts';
import Psoriasis from '../pages/treatments/skin-treatments/skin-concerns/Psoriasis';
import GlutathioneTherapy from '../pages/treatments/skin-treatments/glow-skin-health/GlutathioneTherapy';
import HairTreatments from '../pages/treatments/hair-treatments/HairTreatments';
import HairTransplant from '../pages/treatments/hair-treatments/hair-loss/HairTransplant';
import BeardTransplant from '../pages/treatments/hair-treatments/hair-loss/BeardTransplant';
import EyebrowTransplant from '../pages/treatments/hair-treatments/hair-loss/EyebrowTransplant';
import PRP from '../pages/treatments/hair-treatments/therapies/PRP';
import GFC_PRP from '../pages/treatments/hair-treatments/therapies/GFC_PRP';
import Mesotherapy from '../pages/treatments/hair-treatments/therapies/Mesotherapy';
import LLLT from '../pages/treatments/hair-treatments/therapies/LLLT';
import MedicalTherapy from '../pages/treatments/hair-treatments/therapies/MedicalTherapy';
import Dandruff from '../pages/treatments/hair-treatments/scalp-care/Dandruff';
import LaserTreatments from '../pages/treatments/laser-treatments/LaserTreatments';
import LaserHairReduction from '../pages/treatments/laser-treatments/hair-removal/LaserHairReduction';
import LaserAcne from '../pages/treatments/laser-treatments/skin-concerns/LaserAcne';
import LaserScar from '../pages/treatments/laser-treatments/skin-concerns/LaserScar';
import LaserBirthmark from '../pages/treatments/laser-treatments/skin-concerns/LaserBirthmark';
import TattooRemoval from '../pages/treatments/laser-treatments/advanced-laser/TattooRemoval';
import SkinTightening from '../pages/treatments/laser-treatments/advanced-laser/SkinTightening';
import PlasticSurgery from '../pages/plastic-surgery/PlasticSurgery';
import Rhinoplasty from '../pages/plastic-surgery/face-aesthetic/Rhinoplasty';
import EyelidSurgery from '../pages/plastic-surgery/face-aesthetic/EyelidSurgery';
import BrowLift from '../pages/plastic-surgery/face-aesthetic/BrowLift';
import Liposuction from '../pages/plastic-surgery/body-contouring/Liposuction';
import TummyTuck from '../pages/plastic-surgery/body-contouring/TummyTuck';
import BreastAugmentation from '../pages/plastic-surgery/breast-surgery/BreastAugmentation';
import BreastReduction from '../pages/plastic-surgery/breast-surgery/BreastReduction';
import Gynecomastia from '../pages/plastic-surgery/reconstructive/Gynecomastia';
import ScarRevision from '../pages/plastic-surgery/reconstructive/ScarRevision';
import PShot from '../pages/plastic-surgery/sexual-wellness/PShot';
import OShot from '../pages/plastic-surgery/sexual-wellness/OShot';
import Concerns from '../pages/concerns/Concerns';
import Results from '../pages/results/Results';
import Locations from '../pages/locations/Locations';
import Contact from '../pages/contact/Contact';

const AppRoutes = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/skin-treatments" element={<SkinTreatments />} />
          <Route path="/treatments/skin-treatments/face-rejuvenation/hydra-facial" element={<HydraFacial />} />
          <Route path="/treatments/skin-treatments/face-rejuvenation/chemical-peel" element={<ChemicalPeel />} />
          <Route path="/treatments/skin-treatments/face-rejuvenation/carbon-facial" element={<CarbonFacial />} />
          <Route path="/treatments/skin-treatments/anti-ageing/botox" element={<Botox />} />
          <Route path="/treatments/skin-treatments/anti-ageing/fillers" element={<Fillers />} />
          <Route path="/treatments/skin-treatments/anti-ageing/hifu" element={<HIFU />} />
          <Route path="/treatments/skin-treatments/skin-concerns/acne" element={<Acne />} />
          <Route path="/treatments/skin-treatments/skin-concerns/pigmentation" element={<Pigmentation />} />
          <Route path="/treatments/skin-treatments/skin-concerns/mole" element={<Mole />} />
          <Route path="/treatments/skin-treatments/skin-concerns/warts" element={<Warts />} />
          <Route path="/treatments/skin-treatments/skin-concerns/psoriasis" element={<Psoriasis />} />
          <Route path="/treatments/skin-treatments/glow-skin-health/glutathione-therapy" element={<GlutathioneTherapy />} />
          <Route path="/treatments/hair-treatments" element={<HairTreatments />} />
          <Route path="/treatments/hair-treatments/hair-loss/hair-transplant" element={<HairTransplant />} />
          <Route path="/treatments/hair-treatments/hair-loss/beard-transplant" element={<BeardTransplant />} />
          <Route path="/treatments/hair-treatments/hair-loss/eyebrow-transplant" element={<EyebrowTransplant />} />
          <Route path="/treatments/hair-treatments/therapies/prp" element={<PRP />} />
          <Route path="/treatments/hair-treatments/therapies/gfc-prp" element={<GFC_PRP />} />
          <Route path="/treatments/hair-treatments/therapies/mesotherapy" element={<Mesotherapy />} />
          <Route path="/treatments/hair-treatments/therapies/lllt" element={<LLLT />} />
          <Route path="/treatments/hair-treatments/therapies/medical-therapy" element={<MedicalTherapy />} />
          <Route path="/treatments/hair-treatments/scalp-care/dandruff" element={<Dandruff />} />
          <Route path="/treatments/laser-treatments" element={<LaserTreatments />} />
          <Route path="/treatments/laser-treatments/hair-removal/laser-hair-reduction" element={<LaserHairReduction />} />
          <Route path="/treatments/laser-treatments/skin-concerns/laser-acne" element={<LaserAcne />} />
          <Route path="/treatments/laser-treatments/skin-concerns/laser-scar" element={<LaserScar />} />
          <Route path="/treatments/laser-treatments/skin-concerns/laser-birthmark" element={<LaserBirthmark />} />
          <Route path="/treatments/laser-treatments/advanced-laser/tattoo-removal" element={<TattooRemoval />} />
          <Route path="/treatments/laser-treatments/advanced-laser/skin-tightening" element={<SkinTightening />} />
          <Route path="/plastic-surgery" element={<PlasticSurgery />} />
          <Route path="/plastic-surgery/face-aesthetic/rhinoplasty" element={<Rhinoplasty />} />
          <Route path="/plastic-surgery/face-aesthetic/eyelid-surgery" element={<EyelidSurgery />} />
          <Route path="/plastic-surgery/face-aesthetic/brow-lift" element={<BrowLift />} />
          <Route path="/plastic-surgery/body-contouring/liposuction" element={<Liposuction />} />
          <Route path="/plastic-surgery/body-contouring/tummy-tuck" element={<TummyTuck />} />
          <Route path="/plastic-surgery/breast-surgery/breast-augmentation" element={<BreastAugmentation />} />
          <Route path="/plastic-surgery/breast-surgery/breast-reduction" element={<BreastReduction />} />
          <Route path="/plastic-surgery/reconstructive/gynecomastia" element={<Gynecomastia />} />
          <Route path="/plastic-surgery/reconstructive/scar-revision" element={<ScarRevision />} />
          <Route path="/plastic-surgery/sexual-wellness/p-shot" element={<PShot />} />
          <Route path="/plastic-surgery/sexual-wellness/o-shot" element={<OShot />} />
          <Route path="/concerns" element={<Concerns />} />
          <Route path="/results" element={<Results />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default AppRoutes;