import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/article.json');
        const data = await response.json();
        setArticles(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-8">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {loading ? (
          // Skeleton loader
          [1, 2].map((index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col">
              <div className="w-full h-64 md:h-72 lg:h-80 bg-gray-300 animate-pulse rounded"></div>
              <div className="mt-6">
                <div className="w-2/3 h-6 bg-gray-300 animate-pulse rounded mb-4"></div>
                <div className="w-1/2 h-4 bg-gray-300 animate-pulse rounded mb-4"></div>
                <div className="w-full h-12 bg-gray-300 animate-pulse rounded"></div>
              </div>
            </div>
          ))
        ) : (
          // Article content
          articles.slice(0, 2).map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col"
            >
              <div className="w-full h-64 md:h-72 lg:h-80">
                <Image
                  src={article.image}
                  alt={article.title}
                  height={500}
                  width={500}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800">{article.title}</h3>
                <h4 className="text-base text-gray-600 mt-2">{article.subheading}</h4>
                <p className="text-gray-600 mt-4 text-sm line-clamp-3">{article.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="text-center mt-12">
        <Link href="/articlePage">
          <span className="text-hoverUnderlineColor text-lg font-semibold underline cursor-pointer">
            Read More Articles →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Article;
