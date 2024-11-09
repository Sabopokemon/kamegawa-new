import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="block text-gray-800">ABOUT –</span>
          <span className="block text-2xl mt-2">亀川の未来をつくる実験プラットフォーム</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-600 leading-relaxed mb-6">
            亀川プロジェクトは、学生と地域のつながりを活かし、立命館アジア太平洋大学(APU)の学生が集まった亀川の魅力を引き出すための実験的なコミュニティプラットフォームです。ここでは、学生や住民が「こんなことがやってみたい」「こんな場所があったらいいな」という思いを形にし、地域とともに成長していくことを目指しています。亀川の街を舞台に、学生と地域住民が一緒になって新しい価値を創造する場を提供しています。
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">ABOUT</h3>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">A Platform for Creating the Future of Kamegawa</h4>
          <p className="text-gray-600 leading-relaxed">
            The Kamegawa Project is an experimental community platform created by students from Ritsumeikan Asia Pacific University (APU) to highlight the appeal of Kamegawa by fostering connections between students and the local community. Here, students and residents bring to life ideas like "I wish we could try this" or "It would be great if this place existed," aiming to grow alongside the community. Kamegawa serves as a stage for students and local residents to come together and create new values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">自然と温泉が織りなす癒しの町</h3>
            <p className="text-gray-600 leading-relaxed">
              大分県別府市亀川は、豊かな自然環境と温泉文化が融合した魅力的な地域です。北東部には森林と田畑が広がり、亀川温泉は「別府八湯」の一つとして大正時代から親しまれています。
            </p>
            <p className="text-gray-600 leading-relaxed">
              A Town of Relaxation, Intertwining Nature and Hot Springs
            </p>
          </div>
          
          <div
            className="h-64 md:h-auto bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1554167838-07e8a9f4f91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80")',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;