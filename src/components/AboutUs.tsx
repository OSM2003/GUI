import React from 'react';
import FlipCard from './ui/FlipCard';

interface AboutUsProps {
  isSidebarHovered: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ isSidebarHovered }) => {
  // Team members data
  const teamMembers = [
    {
      id: '1',
      firstName: 'Osamah',
      lastName: 'Alananzeh',
      fullName: 'Osamah Mohammad Mahmoud Alananzeh',
      position: 'Computer Engineering',
      email: 'ananzehosamah99@gmail.com',
      phone: '+962795224589',
      linkedin: 'https://www.linkedin.com/in/osamah-alananzeh-992078221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      image: 'src/assets/Osamah.jpeg',
      initials: 'OA',
      gradientColors: 'bg-gradient-to-br from-blue-500 to-purple-600'
    },
    {
      id: '2',
      firstName: 'Bashar',
      lastName: 'Alabdallat',
      fullName: 'Bashar Falah Faraj Alabdallat',
      position: 'Network Security Engineering',
      email: 'basharalabdallat2377@gmail.com',
      phone: '+962790851749',
      linkedin: 'https://www.linkedin.com/in/bashar-alabdallat-a8157b256/',
      image: 'src/assets/Bashar.jpg',
      initials: 'BA',
      gradientColors: 'bg-gradient-to-br from-green-500 to-blue-600'
    },
    {
      id: '3',
      firstName: 'Aktham',
      lastName: 'Alarabi',
      fullName: 'Aktham Khaleel Shehadeh Alarabi',
      position: 'Network Security Engineering',
      email: 'aktham.alarabi@gmail.com',
      phone: '+962798859514',
      linkedin: 'https://www.linkedin.com/in/aktham-alarabi-0819b8346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      initials: 'AA',
      image: 'src/assets/Akhtam.webp',
      gradientColors: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
    {
      id: '4',
      firstName: 'Almothana',
      lastName: 'Altawil',
      fullName: 'Almothana Khalid Mohammed Altawil',
      position: 'Computer Engineering',
      email: 'almothanaaltaweel@gmail.com',
      phone: '+962790012252',
      image: 'src/assets/Almothana.jpeg',
      initials: 'KA',
      linkedin: 'https://www.linkedin.com/in/almothana-altaweel-1b283316b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      gradientColors: 'bg-gradient-to-br from-green-500 to-blue-600'
    },
    {
      id: '5',
      firstName: 'Alaa',
      lastName: 'Alnajjar',
      fullName: 'Alaa Nawaf Hasan Alnajjar',
      position: 'Computer Engineering',
      email: 'Alaa_najjar2004@hotmail.com',
      phone: '+962799065467',
      linkedin: 'https://www.linkedin.com/in/alaa-alnajjar-22b78b364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      initials: 'AN',
      image: 'src/assets/Alaa.jpg',
      gradientColors: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      id: '6',
      firstName: 'Ashraf',
      lastName: 'Alsharah',
      fullName: 'Ashraf Alsharah',
      position: 'Assistant Professor',
      email: 'aalsharah@bau.edu.jo',
      linkedin: 'https://www.linkedin.com/in/ashraf-al-sharah-ph-d-513b82115?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      initials: 'AA',
      image: 'src/assets/Ashraf.jpeg',
      gradientColors: 'bg-gradient-to-br from-orange-500 to-red-600'
    }
  ];

  return (
    <div className={`flex-1 custom-scrollbar p-8 overflow-y-auto transition-all duration-300 ease-in-out ${
      isSidebarHovered ? 'blur-sm' : ''
    }`}>

      {/* Team Section Title */}
      <h1 className="text-xl font-SF Pro Rounded text-white mb-8 text-center">Final Project Team</h1>

      {/* Row 1: Single card centered */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-sm">
          <h2 className="text-lg font-SF Pro Rounded text-white mb-4 text-center">Supervisor</h2>
          <FlipCard member={teamMembers[5]} />
        </div>
      </div>

      {/* Row 2: Three cards */}
      <h2 className="text-lg font-SF Pro Rounded text-white mb-4 text-center">The Team</h2>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
        <FlipCard member={teamMembers[0]} />
        <FlipCard member={teamMembers[1]} />
        <FlipCard member={teamMembers[2]} />
      </div>

      {/* Row 3: Two cards centered */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
        <FlipCard member={teamMembers[3]} />
        <FlipCard member={teamMembers[4]} />
      </div>

    {/* Responsive Design for Mobile */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @media (max-width: 768px) {
          .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 {
            grid-template-columns: 1fr;
          }
          .grid-cols-1.md\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;

