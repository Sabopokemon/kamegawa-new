import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            亀川の未来をつくる実験プラットフォーム
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            A Platform for Creating the Future of Kamegawa
          </p>
          <a
            href="#about"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            詳しく見る / Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;