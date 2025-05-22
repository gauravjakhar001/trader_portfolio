import React from 'react';
import { useParams } from 'react-router-dom';

// Mock data (replace with your actual data source)
const blogPosts = [
  {
    id: 1,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    content: 'Full article content here... ',
  },
  {
    id: 2,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    content: 'Full article content here...',
  },
  {
    id: 3,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    content: 'Full article content here...',
  },
  {
    id: 4,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    content: 'Full article content here...',
  },
  {
    id: 5,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    content: 'Full article content here...',
  },
  {
    id: 6,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    content: 'Full article content here...',
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className="max-w-6xl mx-auto bg-white rounded-lg shadow p-0 mb-12">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="px-8 pt-6 pb-2 flex flex-wrap items-center text-sm text-gray-500 space-x-6">
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" />
            <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" />
          </svg>
          {post.date}
        </span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" stroke="currentColor" />
            <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="currentColor" />
          </svg>
          By Trading Expert
        </span>
        <span className="flex items-center text-green-700 font-semibold">
          <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 7h.01M3 11l8.586-8.586a2 2 0 0 1 2.828 0l6.172 6.172a2 2 0 0 1 0 2.828L13 21a2 2 0 0 1-2.828 0L3 13.828A2 2 0 0 1 3 11z" stroke="currentColor" />
          </svg>
          Market Analysis
        </span>
      </div>
      <h1 className="px-8 pt-2 pb-1 text-2xl md:text-3xl font-bold text-green-800" style={{ fontFamily: 'serif' }}>
        {post.title}
      </h1>
      <div className="px-8 mb-4">
        <div className="w-32 h-1 bg-green-600 rounded mb-4"></div>
      </div>
      <div className="px-8 pb-8 text-gray-800 leading-relaxed text-base md:text-lg">
        <p>{post.content}</p>
      </div>
    </section>
  );
};

export default BlogDetail; 