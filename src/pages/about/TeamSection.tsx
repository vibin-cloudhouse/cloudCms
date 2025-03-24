
import React from "react";
import TeamMember from "./TeamMember";

interface TeamMemberData {
  id: number;
  name: string;
  title: string;
  photo: string;
}

interface TeamSectionProps {
  teamMembers: TeamMemberData[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  return (
    <div className="relative">
      <div className="gradient-blob w-96 h-96 opacity-10 -left-20 bottom-20"></div>
      <h2 className="text-3xl font-bold gradient-heading mb-12 text-center">Meet Our Team</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-12 text-center max-w-2xl mx-auto text-lg">
        Our diverse team of experts is passionate about creating the most secure and user-friendly cloud experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <TeamMember 
            key={member.id}
            id={member.id}
            name={member.name}
            title={member.title}
            photo={member.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
