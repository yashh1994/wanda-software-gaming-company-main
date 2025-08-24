import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Download, Calendar, ExternalLink, Monitor, HardDrive } from 'lucide-react';
import { games } from '../data/games';
import { updateSEO } from '../utils/seo';

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const game = games.find(g => g.id === id);

  useEffect(() => {
    if (game) {
      updateSEO({
        title: `${game.title} - Wanda Software`,
        description: game.shortDescription,
        keywords: `${game.title}, ${game.genre}, simulation game, Wanda Software`,
        ogImage: game.screenshots[0]
      });
    }
  }, [game]);

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Game Not Found</h1>
          <Link to="/games" className="text-blue-600 hover:text-blue-700">
            ← Back to Games
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/games"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Games
        </Link>

        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <img
                src={game.screenshots[0]}
                alt={game.title}
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {game.genre}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {game.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {game.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="font-bold text-gray-900 dark:text-white text-lg">
                      {game.rating}/5
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Player Rating</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Download className="h-5 w-5 text-green-500" />
                    <span className="font-bold text-gray-900 dark:text-white text-lg">
                      {game.downloads}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Downloads</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Released: {new Date(game.releaseDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Updated: {new Date(game.lastUpdate).toLocaleDateString()}</span>
                </div>
              </div>

              <a
                href={game.downloadUrl}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 px-6 rounded-lg transition-colors duration-200 font-semibold text-lg"
              >
                <ExternalLink className="inline mr-2 h-5 w-5" />
                Download Now
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Screenshots */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${game.title} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Section */}
            {game.videoUrl && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Trailer</h2>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400">Video player placeholder</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* System Requirements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                <Monitor className="inline mr-2 h-5 w-5" />
                System Requirements
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Minimum</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">OS:</span>
                      <span className="text-gray-900 dark:text-white">{game.systemRequirements.minimum.os}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">CPU:</span>
                      <span className="text-gray-900 dark:text-white">{game.systemRequirements.minimum.processor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">RAM:</span>
                      <span className="text-gray-900 dark:text-white">{game.systemRequirements.minimum.memory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">GPU:</span>
                      <span className="text-gray-900 dark:text-white">{game.systemRequirements.minimum.graphics}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Storage:</span>
                      <span className="text-gray-900 dark:text-white">{game.systemRequirements.minimum.storage}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Recommended</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">OS:</span>
                      <span className="text-gray-900 dark:text-white">{game.systemRequirements.recommended.os}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">CPU:</span>
                      <span className="text-gray-900 dark:text-white">{game.systemRequirements.recommended.processor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">RAM:</span>
                      <span className="text-gray-900 dark:text-white">{game.systemRequirements.recommended.memory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">GPU:</span>
                      <span className="text-gray-900 dark:text-white">{game.systemRequirements.recommended.graphics}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Storage:</span>
                      <span className="text-gray-900 dark:text-white">{game.systemRequirements.recommended.storage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Game Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Genre:</span>
                  <span className="text-gray-900 dark:text-white">{game.genre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Release Date:</span>
                  <span className="text-gray-900 dark:text-white">{new Date(game.releaseDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Last Update:</span>
                  <span className="text-gray-900 dark:text-white">{new Date(game.lastUpdate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Downloads:</span>
                  <span className="text-gray-900 dark:text-white">{game.downloads}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-gray-900 dark:text-white">{game.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;