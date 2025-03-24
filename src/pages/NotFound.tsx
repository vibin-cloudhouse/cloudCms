
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full">
        <div className="text-center">
          <h1 className="font-display text-9xl font-bold bg-gradient-to-r from-cloud-600 to-cloud-400 bg-clip-text text-transparent animate-fade-in">
            404
          </h1>
          <h2 className="text-2xl font-display font-semibold text-slate-800 mt-4 mb-6 animate-fade-in animate-delay-1">
            Page not found
          </h2>
          <p className="text-slate-600 mb-8 animate-fade-in animate-delay-2">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="animate-fade-in animate-delay-3">
            <Link to="/">
              <Button className="cloud-button inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
