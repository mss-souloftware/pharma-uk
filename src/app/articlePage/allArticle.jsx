"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import api from "../../config/axios";

const SkeletonLoader = () => (
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

const ArticleCard = ({ article, onSelect }) => (
  <div
    className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
    onClick={() => onSelect(article)}
  >
    {article.thumbnail && (
      <Image
        src={article.thumbnail}
        alt={article.title}
        layout="responsive"
        width={400}
        height={224}
        className="w-full h-56 object-cover"
      />
    )}
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800">{article.title}</h3>
      <p className="text-gray-600 text-sm mt-4">
        {article.content.length > 70 ? `${article.content.substring(0, 70)}...` : article.content}
      </p>
      <button className="text-blue-500 hover:underline mt-4 block text-sm font-semibold">
        Read More →
      </button>
    </div>
  </div>
);

const ArticleModal = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-1 right-1 text-gray-600 hover:text-gray-900 text-3xl" onClick={onClose}>
          &times;
        </button>
        {article.thumbnail && (
          <Image
            src={article.thumbnail} // **Fixed image issue**
            alt={article.title}
            layout="responsive"
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded"
          />
        )}
        <h3 className="text-2xl font-bold text-gray-800 mt-4">{article.title}</h3>
        <p className="text-gray-700 text-sm mt-4">{article.content}</p>
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
        const response = await api.get("/blogs");
        setArticles(response.data.data || []);
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
          Explore our collection of insightful articles on health, medicine, and wellness.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading
          ? Array(8)
              .fill(null)
              .map((_, index) => <SkeletonLoader key={index} />)
          : articles.map((article) => (
              <ArticleCard key={article.id} article={article} onSelect={setSelectedArticle} />
            ))}
      </div>

      {/* Modal Popup */}
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  );
};

export default AllArticles;
