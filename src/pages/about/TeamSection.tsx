
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
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Team</h2>
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
