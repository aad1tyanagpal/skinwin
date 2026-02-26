import React from 'react';

const Rhinoplasty = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Rhinoplasty (Nose Surgery)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Procedure Explanation</h2>
        <p className="text-gray-700">Rhinoplasty is a surgical procedure performed to improve the shape, size, proportion, or function of the nose. It can be done for cosmetic enhancement as well as to correct breathing problems caused by structural issues.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Who It’s For</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Crooked or asymmetrical nose</li>
          <li>Broad, flat, or large nose</li>
          <li>Nose hump or drooping tip</li>
          <li>Breathing difficulties</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Benefits &amp; Risks</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-4">Benefits</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Improved facial harmony</li>
          <li>Enhanced nose shape</li>
          <li>Better nasal breathing (if functional correction done)</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-700 mt-4">Possible Risks</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Temporary swelling or bruising</li>
          <li>Healing time varies</li>
          <li>Results may vary from person to person</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Before &amp; After Results</h2>
        <p className="text-gray-700">[Rhinoplasty Before &amp; After Gallery – 2–4 Images]</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">FAQs</h2>
        <dl className="space-y-2 text-gray-700">
          <div><dt className="font-medium">Is rhinoplasty permanent?</dt><dd>Yes, results are long‑lasting once healing is complete.</dd></div>
          <div><dt className="font-medium">Will there be visible scars?</dt><dd>Scars are minimal and usually well hidden.</dd></div>
          <div><dt className="font-medium">How long is recovery?</dt><dd>Initial recovery takes a few weeks; final results settle gradually.</dd></div>
          <div><dt className="font-medium">Is rhinoplasty painful?</dt><dd>Discomfort is manageable and controlled with medication.</dd></div>
        </dl>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Pre‑Treatment Care</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Avoid smoking and alcohol before surgery</li>
          <li>Inform the doctor about medications or medical conditions</li>
          <li>Follow all pre‑surgery instructions carefully</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Post‑Treatment Care</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Avoid touching or injuring the nose</li>
          <li>Follow medication and cleaning instructions</li>
          <li>Avoid strenuous activity and sun exposure</li>
          <li>Attend follow‑up visits as advised</li>
        </ul>
      </section>

      <div className="text-center mt-8">
        <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition">
          👉 Book Rhinoplasty Consultation
        </a>
      </div>
    </div>
  );
};

export default Rhinoplasty;