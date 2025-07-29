
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Play } from "lucide-react";

interface VideoResource {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  duration: string;
}

const VideoTutorials: React.FC = () => {
  const videoResources: VideoResource[] = [
    {
      title: "Getting Started with CloudStick",
      description: "Learn the basics in under 10 minutes",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "/resources/videos/getting-started",
      duration: "9:47"
    },
    {
      title: "Advanced Security Features",
      description: "Protect your data with enterprise-grade encryption",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "/resources/videos/security-features",
      duration: "12:35"
    },
    {
      title: "Custom Domain Setup",
      description: "Connect CloudStick to your own domain in minutes",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "/resources/videos/domain-setup",
      duration: "7:23"
    },
    {
      title: "Team Collaboration Tips",
      description: "Best practices for working with multiple users",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      link: "/resources/videos/collaboration",
      duration: "14:08"
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoResources.map((video, index) => (
          <Link 
            to={video.link} 
            key={index}
            className="group flex flex-col hover:transform hover:scale-[1.01] transition-all"
          >
            <div className="relative rounded-lg overflow-hidden aspect-video mb-3 bg-slate-200 dark:bg-slate-800">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-95 transition-opacity">
                <div className="w-12 h-12 bg-[#006FEE] rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                {video.duration}
              </div>
            </div>
            <h3 className="font-medium text-base text-slate-900 dark:text-white mb-1 group-hover:text-[#006FEE] dark:group-hover:text-teal-400">
              {video.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {video.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link 
          to="/resources/videos" 
          className="flex items-center gap-2 text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium"
        >
          View all video tutorials
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default VideoTutorials;
