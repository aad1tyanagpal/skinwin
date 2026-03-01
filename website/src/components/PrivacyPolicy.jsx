import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: "Information We Collect",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    content: (
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            We may collect your name, contact details (email address, phone number), and demographic information when you interact with us online or during appointments.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-2">Non-Personal Information</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Automatically collected data such as IP address, browser type, device information, operating system, and browsing behaviour through cookies or similar technologies.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "How We Use Your Information",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    content: (
      <ul className="space-y-3">
        {[
          "To provide and manage our services",
          "To respond to your inquiries or appointment requests",
          "To personalise your experience on our website",
          "To send appointment reminders or promotional content (only with your consent)",
          "For analytics and continuous service improvement",
          "To comply with applicable legal obligations",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-gray-600 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    )
  },
  {
    title: "Non-Personal Information",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        We may use non-personal information for analytical purposes, website administration, enhancing user experience, and improving our services. This data cannot be used to identify you individually.
      </p>
    )
  },
  {
    title: "Disclosure of Information",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Your data may be shared with trusted third-party service providers who assist us in delivering our services. We ensure these providers uphold strict confidentiality and data protection standards. Information may also be disclosed to comply with applicable legal obligations or regulatory requirements.
      </p>
    )
  },
  {
    title: "Data Security",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, misuse, or disclosure. However, no method of data transmission over the internet is completely secure, and we cannot guarantee absolute security.
      </p>
    )
  },
  {
    title: "Your Rights",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    content: (
      <div>
        <p className="text-gray-600 text-sm mb-4">You have the right to:</p>
        <ul className="space-y-3">
          {[
            "Access your personal information held by us",
            "Request corrections or deletions of your data",
            "Withdraw consent for the use of your data",
            "Lodge a complaint with a data protection authority (if applicable)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-600 text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 text-sm mt-4">To exercise any of these rights, please contact us using the details at the bottom of this page.</p>
      </div>
    )
  },
  {
    title: "Third-Party Links",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    ),
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before sharing any personal information.
      </p>
    )
  },
  {
    title: "Children's Privacy",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected such information, please contact us immediately and we will take prompt steps to delete it.
      </p>
    )
  },
  {
    title: "Cross-Border Data Transfers",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Your data may be stored or processed outside India where data protection laws may differ. We take appropriate steps to ensure your data remains protected in accordance with this Privacy Policy regardless of where it is processed.
      </p>
    )
  },
  {
    title: "Changes to This Policy",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Your continued use of our services after changes are posted constitutes your acceptance of the revised policy.
      </p>
    )
  },
];

const SectionCard = ({ section, index }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#C09A50]/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-8 py-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#C09A50]/10 flex items-center justify-center text-[#C09A50] flex-shrink-0">
            {section.icon}
          </div>
          <h2 className="font-serif text-lg font-semibold text-gray-900">{section.title}</h2>
        </div>
        <svg
          className={`w-5 h-5 text-[#C09A50] transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-8 pb-7 pt-0">
          <div className="border-t border-gray-100 pt-5">
            {section.content}
          </div>
        </div>
      )}
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="bg-[#FBF5E9] py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-divider mx-auto mb-6"></div>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-gray-900 mb-5">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            At Skin Win Clinic, we are committed to protecting your privacy and handling your personal information with the utmost care and transparency.
          </p>
          <p className="text-gray-400 text-sm mt-5">Last updated: 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Intro */}
        <div className="bg-[#FBF5E9]/60 border border-[#C09A50]/20 rounded-2xl p-8 mb-10">
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy explains how <strong>Skin Win Clinic</strong> collects, uses, shares, and protects your information when you visit our website or use our services. By using our website, you agree to the terms described in this policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, i) => (
            <SectionCard key={i} section={section} index={i} />
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 bg-gray-900 rounded-2xl p-10 text-center">
          <div className="gold-divider mx-auto mb-6"></div>
          <h2 className="font-serif text-2xl font-semibold text-white mb-2">Contact Us</h2>
          <p className="text-gray-400 text-sm mb-8">
            For any questions, requests, or concerns related to this Privacy Policy, reach out to us:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.skinwin.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl text-sm transition-colors"
            >
              🌐 www.skinwin.co.in
            </a>
            <a
              href="mailto:info@skinwin.co.in"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl text-sm transition-colors"
            >
              ✉️ info@skinwin.co.in
            </a>
            <a
              href="tel:+919773311102"
              className="inline-flex items-center gap-2 bg-[#C09A50] hover:bg-[#B08A40] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              📞 +91 97733 11102
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <Link
              to="/"
              className="text-gray-400 hover:text-[#C09A50] text-sm transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;