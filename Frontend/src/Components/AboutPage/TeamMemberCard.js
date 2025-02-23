import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-56 object-cover object-top" // Adjusted to avoid cutting heads
      />
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-green-700">{member.name}</h3>
        <p className="text-gray-500 italic mb-4">{member.title}</p>
        <p className="text-gray-700 mb-1">{member.description}</p>
        <div className="mt-4">
          <div className="flex items-center text-gray-600">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-600" />
            <a href={`mailto:${member.email}`} className="hover:underline">
              {member.email}
            </a>
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-green-600" />
            <a href={`tel:${member.contact}`} className="hover:underline">
              {member.contact}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
