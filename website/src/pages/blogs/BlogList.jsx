import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import usePageSeo from '../../hooks/usePageSeo';

const POSTS_PER_PAGE = 6;

const BlogList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = blogPosts.slice(start, start + POSTS_PER_PAGE);

  usePageSeo({
    title: 'Skin & Hair Care Blog | Skin Win Clinic',
    description:
      'Expert skin and hair care articles from the dermatologists at Skin Win Clinic — Jaipur, Kota & Ajmer.',
    canonicalPath: currentPage > 1 ? `/blogs?page=${currentPage}` : '/blogs',
  });

  const goToPage = (n) => {
    if (n === 1) {
      searchParams.delete('page');
    } else {
      searchParams.set('page', String(n));
    }
    setSearchParams(searchParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Skin & Hair Care Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Insights from our dermatologists on skin, hair, and aesthetic care.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {visiblePosts.map((post) => (
          <article key={post.slug}>
            <Link to={`/blogs/${post.slug}`} className="group">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-[#C09A50] transition-colors mb-3">
                {post.title}
              </h2>
            </Link>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C09A50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                By {post.author}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C09A50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <Link to={`/blogs/${post.slug}`} className="block">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full rounded-2xl shadow-sm border border-gray-100 hover:opacity-95 transition-opacity"
              />
            </Link>
          </article>
        ))}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#C09A50] hover:text-[#C09A50] transition-colors"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goToPage(n)}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  n === currentPage
                    ? 'bg-[#C09A50] text-white'
                    : 'border border-gray-200 text-gray-600 hover:border-[#C09A50] hover:text-[#C09A50]'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#C09A50] hover:text-[#C09A50] transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
