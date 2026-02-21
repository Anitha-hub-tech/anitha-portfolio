import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-extrabold text-primary/20">404</h1>
        <h2 className="text-3xl font-bold tracking-tight">Oops! Page not found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          It seems like the page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/">
            <MoveLeft className="mr-2 h-5 w-5" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
