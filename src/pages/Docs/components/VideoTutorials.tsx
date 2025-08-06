import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Play, Loader2 } from "lucide-react";
import axios from "axios";

interface VideoResource {
  id: number;
  heading: string;
  description: string;
  slug: string;
  seo: any; // You might want to define a proper type for this
  bannerUrl: string | null;
  iframe: string;
  createdAt: string;
}

// A simple loading component with a spinning icon from lucide-react
const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-40">
      <Loader2 className="h-10 w-10 animate-spin text-gray-500" />
    </div>
);

const VideoTutorials: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [videos, setVideos] = useState<VideoResource[]>([]);

  useEffect(() => {
    console.log("VideoTutorials: useEffect initiated - Starting data fetch.");
    setLoading(true);
    setError(null);

    axios.get(
      "https://strapnew.cloudstick.io/api/video-tutorials?populate[thumbnail]=true&populate[seo][fields]"
    )
      .then(res => {
        console.log("VideoTutorials: API response received:", res.data);
        if (res.data && Array.isArray(res.data.data)) {
          const formatted = res.data.data.map((item: any) => {
            const descriptionText = item?.description || "No description available.";
            const thumbnailUrl = item?.thumbnail?.url ? `https://strapnew.cloudstick.io${item.thumbnail.url}` : null;

            return {
              id: item.id,
              documentId: item.documentId,
              heading: item?.heading || "Untitled Video",
              slug: item?.slug,
              description: descriptionText,
              seo: item?.seo,
              bannerUrl: thumbnailUrl,
              iframe: item?.iframeLink,
              createdAt: item?.createdAt,
            };
          });

          console.log("VideoTutorials: Formatted Videos:", formatted);
          setVideos(formatted);
        } else {
          console.warn("VideoTutorials: API response data is not an array or missing.", res.data);
          setError("Unexpected data format from API.");
        }
      })
      .catch(err => {
        console.error("VideoTutorials: Error fetching data:", err);
        setError("Failed to fetch video tutorials. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-12">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.slice(0, 3).map((item, index) => (
            <div
                key={index}
                className="w-full"
                dangerouslySetInnerHTML={{
                    __html: item?.iframe?.replace(
                        /<iframe /,
                        `<iframe class="w-full h-[220px] rounded-sm" `
                    ),
                }}
            />
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