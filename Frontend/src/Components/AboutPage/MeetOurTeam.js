// src/Components/MeetOurTeam.js

import React from 'react';
import TeamMemberCard from './TeamMemberCard.js';
import { teamMembers } from '../../Utils/constants.js';

const MeetOurTeam = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-8 rounded-lg">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-green-900 mb-2">Meet Our Experts</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our team of experts is dedicated to providing you with the best plant care and gardening solutions. Contact them today to resolve your plant related queries!
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 -mt-2.5">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
