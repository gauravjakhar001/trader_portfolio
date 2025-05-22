import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg', // Place your image in public/ or use a URL
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    description: 'Essential risk management principles every trader needs to master for long-term success.',
    content: 'Full article content here...', // Add full content for each post
  },
  {
    id: 2,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    description: 'Essential risk management principles every trader needs to master for long-term success.',
    content: 'Full article content here...',
  },
  {
    id: 3,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    description: 'Essential risk management principles every trader needs to master for long-term success.',
    content: 'Full article content here...',
  },
  {
    id: 4,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    description: 'Essential risk management principles every trader needs to master for long-term success.',
    content: 'Full article content here...',
  },
  {
    id: 5,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    description: 'Essential risk management principles every trader needs to master for long-term success.',
    content: 'Full article content here...',
  },
  {
    id: 6,
    image: 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2470698987.jpg',
    date: 'May 7, 2025',
    readTime: '5 min read',
    title: 'Risk Management: The Foundation of Consistent Trading',
    description: 'Essential risk management principles every trader needs to master for long-term success.',
    content: 'Full article content here...',
  },
];

const BlogGrid = () => (
  <section className="py-12 px-4">
    <h2 className="text-4xl font-bold text-center mb-2" style={{ fontFamily: 'serif', color: '#2d4739' }}>
      Blog's
    </h2>
    <div className="w-16 h-1 bg-green-700 mx-auto mb-6 rounded"></div>
    <p className="text-center text-gray-600 mb-10">
      # Smart trading, sharp management—mastering markets with clarity and control.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {blogPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border transition-all duration-200">
          <img src={post.image} alt="Blog" className="w-full h-48 object-cover" />
          <div className="p-5">
            <div className="text-gray-500 text-sm mb-2">
              {post.date} &nbsp;•&nbsp; {post.readTime}
            </div>
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <Link to={`/blog/${post.id}`} className="text-green-700 font-semibold hover:underline flex items-center">
              Read More <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BlogGrid; 






