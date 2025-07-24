import React, { useState } from 'react';
import './FlipCard.css';

interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  position: string;
  email: string;
  phone: string;
  linkedin: string;
  image?: string;
  initials: string;
  gradientColors: string;
}

interface FlipCardProps {
  member: TeamMember;
}

const FlipCard: React.FC<FlipCardProps> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="flip-card-container">
      <div 
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
        onTouchStart={handleFlip}
      >
        {/* Front Side */}
        <div className="flip-card-front">
          <div className={`profile-image-container ${member.gradientColors}`}>
            {member.image ? (
              <img
                src={member.image}
                alt={member.fullName}
                className="profile-image rounded-lg"
              />
            ) : (
              <span className="profile-initials">{member.initials}</span>
            )}
          </div>
          <h3 className="card-name">{member.firstName}</h3>
          <h3 className="card-name">{member.lastName}</h3>
          <p className="card-hint">Tap to see more</p>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <div className="text-center space-y-3">
            <h3 className="card-name text-lg font-bold">{member.fullName}</h3>
            <p className="card-position">{member.position}</p>
            <div className="space-y-2">
              <p className="card-info">
                <span className="card-label">Email:</span> {member.email}
              </p>
              <p className="card-info">
                <span className="card-label">Phone:</span> {member.phone}
              </p>
              <p className="card-info">
                <span className="card-label">LinkedIn:</span>{' '}
                <a 
                  href={member.linkedin} 
                  className="card-link"
                  onClick={handleLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </p>
            </div>
            <p className="card-hint">Tap to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

