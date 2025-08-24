import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { newsArticles } from '../data/games';
import { updateSEO } from '../utils/seo';

const News: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'News & Updates - Wanda Software',
      description: 'Stay updated with the latest news, game updates, patch notes, and community events from Wanda Software.',
      keywords: 'game news, updates, patch notes, Wanda Software news, gaming events',
      ogImage: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1200'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay connected with the latest developments, game updates, and community events.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        {newsArticles.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(newsArticles[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    5 min read
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {newsArticles[0].title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {newsArticles[0].excerpt}
                </p>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.slice(1).map((article) => (
            <article key={article.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(article.date).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Game Updates', count: 12, color: 'bg-blue-500' },
              { name: 'Patch Notes', count: 8, color: 'bg-green-500' },
              { name: 'Community Events', count: 5, color: 'bg-purple-500' },
              { name: 'Developer Blogs', count: 3, color: 'bg-orange-500' }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{category.count} articles</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Stay In The Loop</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest news, updates, and exclusive content delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;