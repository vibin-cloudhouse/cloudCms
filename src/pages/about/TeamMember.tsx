
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamMemberProps {
  id: number;
  name: string;
  title: string;
  photo: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ id, name, title, photo }) => {
  return (
    <Card key={id} className="overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-700">
      <CardHeader className="p-6 pb-4">
        <div className="flex justify-center mb-4">
          <Avatar className="h-20 w-20 shadow-md">
            {photo ? (
              <AvatarImage src={photo} alt={name} />
            ) : (
              <AvatarFallback className="bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100 text-xl">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            )}
          </Avatar>
        </div>
        <CardTitle className="text-center text-xl">{name}</CardTitle>
        <p className="text-center text-teal-600 dark:text-teal-400 font-medium mt-1">
          {title}
        </p>
      </CardHeader>
    </Card>
  );
};

export default TeamMember;
