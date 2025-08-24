import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Download, ArrowRight } from 'lucide-react';
import { games } from '../data/games';
import { updateSEO } from '../utils/seo';
import GameCard from '../components/GameCard';

const Home: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'Wanda Software - Premium Simulation Games',
      description: 'Leading developer of immersive simulation games including Truckers of Europe series, City Bus Simulator, and Farm Life Simulator.',
      keywords: 'simulation games, trucking simulator, farming games, bus simulator, Wanda Software',
      ogImage: 'https://play-lh.googleusercontent.com/4B1BdBtOBkw_Fq7DOblCNjmA1snJG2ZQdwpvc3Lb-v9KG0q5UFEWaNklpopMGvm3PJw=w5120-h2880-rw'
    });
  }, []);

  const featuredGame = games.find(game => game.id === 'truckers-europe-3');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Immersive
                  <span className="text-blue-400"> Simulation</span>
                  <br />Experiences
                </h1>
                <p className="text-xl text-blue-100 max-w-2xl">
                  Creating realistic virtual worlds where every detail matters. 
                  Join millions of players in authentic simulation adventures.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/games"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 group"
                >
                  Explore Games
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#featured"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Trailer
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">20M+</div>
                  <div className="text-blue-100">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">4.6★</div>
                  <div className="text-blue-100">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">4</div>
                  <div className="text-blue-100">Games Published</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-black/20 backdrop-blur rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://play-lh.googleusercontent.com/ypgEpiqrz7uzhhQvZ6w_Y9fng2FY0bRzwIXSJI3tjTEnTrKyuBX9zuWeMTJaKOWY4gBr=w1052-h592-rw"
                  alt="Truckers of Europe 3 Screenshot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">Truckers of Europe 3</h3>
                  <p className="text-blue-100">Our flagship simulation experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Game */}
      {featuredGame && (
        <section id="featured" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="h-4 w-4" />
                    <span>Featured Game</span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {featuredGame.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {featuredGame.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {featuredGame.rating}/5
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Player Rating</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Download className="h-5 w-5 text-green-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {featuredGame.downloads}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Downloads</p>
                  </div>
                </div>

                <Link
                  to={`/games/${featuredGame.id}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {featuredGame.screenshots.slice(0, 4).map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${featuredGame.title} screenshot ${index + 1}`}
                    className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Games */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Game Collection
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our full range of simulation games, each crafted with attention to detail and realism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.filter(game => game.id !== 'truckers-europe-3').map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/games"
              className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 group"
            >
              View All Games
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;