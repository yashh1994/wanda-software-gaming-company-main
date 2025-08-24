import React, { useEffect } from 'react';
import { Award, Users, Gamepad2, Target } from 'lucide-react';
import { updateSEO } from '../utils/seo';

const About: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'About Us - Wanda Software',
      description: 'Learn about Wanda Software, our mission to create immersive simulation games, our achievements, and the passionate team behind our games.',
      keywords: 'Wanda Software, about us, game development, simulation games, team',
      ogImage: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1200'
    });
  }, []);

  const milestones = [
    { year: '2019', event: 'Wanda Software Founded', description: 'Started with a vision to create realistic simulation games' },
    { year: '2020', event: 'First Game Released', description: 'Truckers of Europe launched to critical acclaim' },
    { year: '2022', event: '10M Downloads', description: 'Reached our first major milestone across all games' },
    { year: '2023', event: 'Expanded Portfolio', description: 'Launched City Bus Simulator and Farm Life Simulator' },
    { year: '2024', event: '20M+ Downloads', description: 'Doubled our player base with Truckers of Europe 3' }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15 years in game development',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Game Designer',
      description: 'Creative mind behind our immersive game experiences',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Technical Director',
      description: 'Expert in simulation physics and game engines',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Emma Thompson',
      role: 'Art Director',
      description: 'Brings visual excellence to every game we create',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Wanda Software</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're passionate about creating immersive simulation experiences that transport players 
              into realistic virtual worlds where every detail matters.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <Target className="h-12 w-12 text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To develop the most authentic and engaging simulation games that provide players with 
              realistic experiences across various industries and lifestyles. We believe in creating 
              games that not only entertain but also educate and inspire.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <Gamepad2 className="h-12 w-12 text-green-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To be the leading developer of simulation games worldwide, known for our commitment to 
              realism, innovation, and player satisfaction. We strive to set new standards in the 
              simulation gaming industry through cutting-edge technology and creative excellence.
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20M+</div>
              <div className="text-gray-600 dark:text-gray-400">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400">Games Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-400">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Awards & Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-yellow-500 mr-3" />
                  <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {milestone.event}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-blue-100">
                We listen to our players and build games that bring communities together.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-blue-100">
                Every game we release meets the highest standards of quality and polish.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation Drive</h3>
              <p className="text-blue-100">
                We push boundaries with new technologies and creative gameplay mechanics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;