import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import usePageSeo from '../../hooks/usePageSeo';
import { publicUrl } from '../../utils/publicUrl';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#C09A50] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 pr-4">{renderRichText(answer)}</p>
      </div>
    </div>
  );
};

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Renders "[label](/path)" markdown-style links as clickable Link/anchor elements.
const renderRichText = (text) =>
  text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    const linkClass = 'text-[#C09A50] font-medium hover:underline';
    return href.startsWith('/') ? (
      <Link key={i} to={href} className={linkClass}>{label}</Link>
    ) : (
      <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{label}</a>
    );
  });

const Section = ({ section }) => (
  <section id={slugify(section.heading)} className="scroll-mt-24">
    <div className="flex items-center mb-6">
      <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
      <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
    </div>

    {section.body && (
      <p className="text-gray-600 leading-relaxed mb-6 text-lg">{renderRichText(section.body)}</p>
    )}

    {section.type === 'list' && (
      <ul className="space-y-4 bg-gray-50 rounded-2xl p-8 border border-gray-100">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-start">
            <CheckIcon />
            <span className="text-gray-700">{renderRichText(item)}</span>
          </li>
        ))}
      </ul>
    )}

    {section.type === 'table' && (
      <figure>
        <img
          src={publicUrl(section.image)}
          alt={section.heading}
          className={`w-full ${section.wide ? 'max-w-3xl' : 'max-w-md'} mx-auto rounded-2xl shadow-sm border border-gray-100`}
        />
        {section.caption && (
          <figcaption className="text-center text-gray-500 text-sm mt-4 max-w-2xl mx-auto">
            {section.caption}
          </figcaption>
        )}
      </figure>
    )}
  </section>
);

const getReadingTime = (post) => {
  const words = post.sections
    .flatMap((s) => [s.body, ...(s.items || [])])
    .concat((post.faqs || []).flatMap((f) => [f.question, f.answer]))
    .filter(Boolean)
    .join(' ')
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  usePageSeo({
    title: post ? `${post.title} | Skin Win Clinic` : 'Post Not Found | Skin Win Clinic',
    description: post?.excerpt,
    canonicalPath: `/blogs/${slug}`,
    jsonLd: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: `https://www.skinwin.co.in${post.coverImage}`,
          datePublished: post.date,
          author: { '@type': 'Person', name: post.author },
          publisher: { '@type': 'Organization', name: 'Skin Win Clinic' },
        }
      : undefined,
  });

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-500 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link to="/blogs" className="text-[#C09A50] font-medium">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-gray-500">
            Author {post.author} &middot;{' '}
            {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            {' '}&middot; {getReadingTime(post)} min read
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <img
          src={publicUrl(post.coverImage)}
          alt={post.title}
          className="w-full max-w-4xl mx-auto rounded-2xl mb-16 shadow-sm border border-gray-100"
        />

        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12 lg:items-start">
          <nav
            aria-label="Table of contents"
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-16 lg:mb-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {post.sections.map((section, i) => (
                <li key={i}>
                  <a href={`#${slugify(section.heading)}`} className="text-gray-600 hover:text-[#C09A50] transition-colors">
                    {section.heading}
                  </a>
                </li>
              ))}
              {post.faqs && post.faqs.length > 0 && (
                <li>
                  <a href="#frequently-asked-questions" className="text-gray-600 hover:text-[#C09A50] transition-colors">
                    Frequently Asked Questions
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div className="space-y-16 max-w-3xl">
            {post.sections.map((section, i) => (
              <Section key={i} section={section} />
            ))}

            {post.faqs && post.faqs.length > 0 && (
              <section id="frequently-asked-questions" className="scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                <div>
                  {post.faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/blogs" className="text-[#C09A50] font-medium">
            &larr; Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
