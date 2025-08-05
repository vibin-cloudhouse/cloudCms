
import React, { useEffect, useState } from "react";
import TeamMember from "./TeamMember";
import axios from "axios";

interface TeamMemberData {
  id: number;
  name: string;
  title: string;
  photo: string;
}

interface TeamSectionProps {
  teamMembers: TeamMemberData[];
}

const BASE_STRAPI_URL = "https://strapnew.cloudstick.io";

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
    const [team,setTeam]=useState([]);
   const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

   useEffect(() => {
    console.log("KnowledgeBaseHome: useEffect initiated - Starting data fetch.");
    setLoading(true);
    setError(null); // Clear previous errors

    axios.get("https://strapnew.cloudstick.io/api/employees?populate[profileImage]=true")
        .then((res) => {

            // Check if res.data.data exists and is an array
            if (res.data && Array.isArray(res.data.data)) {
                const formatted = res.data.data.map((item: any) => {
                    // Safely access description, assuming it's a rich text field
                    // Safely access media field
                    const imageUrl = item?.profileImage?.url ? `https://strapnew.cloudstick.io${item?.profileImage?.url}` : null;

                    // Safely map help_articles
                

                    return {
                        id: item.id,
                        Name: item?.Name || "Untitled",
                        role:item?.role,
                        imageUrl: imageUrl,
                    };
                });

                console.log("team: Formatted team:", formatted);
                setTeam(formatted);
            } else {
                console.warn("KnowledgeBaseHome: API response data.data is not an array or missing.", res.data);
                setError("Unexpected data format from API.");
            }
        })
        .catch((err) => {
            console.error("KnowledgeBaseHome: Error fetching help categories:", err);
            setError("Failed to load categories. Please try again later.");
            if (axios.isAxiosError(err)) {
                if (err.response) {
                    console.error("KnowledgeBaseHome: Error response data:", err.response.data);
                    console.error("KnowledgeBaseHome: Error response status:", err.response.status);
                    console.error("KnowledgeBaseHome: Error response headers:", err.response.headers);
                    if (err.response.data && err.response.data.error && err.response.data.error.message) {
                        setError(`Failed to load categories: ${err.response.data.error.message}`);
                    }
                } else if (err.request) {
                    console.error("KnowledgeBaseHome: No response received:", err.request);
                    setError("No response from server. Check server status.");
                } else {
                    console.error("KnowledgeBaseHome: Error setting up request:", err.message);
                    setError("An unexpected error occurred.");
                }
            } else {
                console.error("KnowledgeBaseHome: A non-Axios error occurred:", err);
                setError("An unexpected error occurred during data processing.");
            }
        })
        .finally(() => {
            setLoading(false);
            console.log("KnowledgeBaseHome: Data fetch process completed.");
        });
}, []);
  return (
    <div className="relative">
      <div className="gradient-blob w-96 h-96 opacity-10 -left-20 bottom-20"></div>
      <h2 className="text-3xl font-bold gradient-heading mb-12 text-center">Meet Our Team</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-12 text-center max-w-2xl mx-auto text-lg">
        Our diverse team of experts is passionate about creating the most secure and user-friendly cloud experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {team?.map((member) => (
          <TeamMember 
            key={member.id}
            id={member.id}
            name={member.Name}
            title={member.role}
            photo={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
