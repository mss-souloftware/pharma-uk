"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const SkeletonLoader = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-56 bg-gray-300"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/article.json");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Latest Articles</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our collection of insightful articles on health, medicine, and wellness. Stay informed with the latest trends and research.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading
          ? Array(8).fill(null).map((_, index) => <SkeletonLoader key={index} />)
          : articles.map((article) => (
              <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{article.title}</h3>
                  <h4 className="text-lg text-gray-600 mt-2">{article.subheading}</h4>
                  <p className="text-gray-600 mt-4 line-clamp-3">{article.description}</p>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-blue-600 hover:underline mt-4 block text-sm font-semibold"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
      </div>

      {/* Modal Popup */}
      {selectedArticle && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={() => setSelectedArticle(null)}
            >
              &times;
            </button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 object-cover rounded" />
            <h3 className="text-3xl font-bold text-gray-800 mt-4">{selectedArticle.title}</h3>
            <p className="text-lg text-gray-600 mt-2">{selectedArticle.subheading}</p>
            <p className="text-gray-700 mt-4">{selectedArticle.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllArticles;