import React from 'react';

const Liposuction = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Liposuction</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Procedure Explanation</h2>
        <p className="text-gray-700">Liposuction is a body contouring procedure that removes stubborn fat deposits that do not respond to diet or exercise. It is not a weight‑loss surgery but helps improve body shape.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Common Areas</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Abdomen</li>
          <li>Thighs</li>
          <li>Arms</li>
          <li>Back</li>
          <li>Chin &amp; neck</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Who It’s For</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Localized fat deposits</li>
          <li>Good skin elasticity</li>
          <li>Individuals close to ideal body weight</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Benefits &amp; Risks</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-4">Benefits</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Improved body contour</li>
          <li>Targeted fat removal</li>
          <li>Long‑lasting results with healthy lifestyle</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-700 mt-4">Possible Risks</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Temporary swelling or bruising</li>
          <li>Mild discomfort during recovery</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Before &amp; After Results</h2>
        <p className="text-gray-700">[Liposuction Before &amp; After Gallery]</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">FAQs</h2>
        <dl className="space-y-2 text-gray-700">
          <div><dt className="font-medium">Is liposuction a weight‑loss surgery?</dt><dd>No, it is a body contouring procedure.</dd></div>
          <div><dt className="font-medium">Are results permanent?</dt><dd>Fat removed does not return if a healthy lifestyle is maintained.</dd></div>
          <div><dt className="font-medium">How long is downtime?</dt><dd>Downtime varies depending on treated areas.</dd></div>
        </dl>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Pre‑Treatment Care</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Maintain stable body weight</li>
          <li>Avoid smoking and alcohol</li>
          <li>Inform the doctor about medications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Post‑Treatment Care</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Wear compression garments as advised</li>
          <li>Avoid heavy physical activity initially</li>
          <li>Follow wound care instructions</li>
          <li>Attend follow‑ups regularly</li>
        </ul>
      </section>

      <div className="text-center mt-8">
        <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition">
          👉 Book Liposuction Consultation
        </a>
      </div>
    </div>
  );
};

export default Liposuction;