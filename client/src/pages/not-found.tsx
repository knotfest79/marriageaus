import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md text-center space-y-6 p-8">
        <div className="flex justify-center">
          <AlertCircle className="h-24 w-24 text-primary/20" />
        </div>
        <h1 className="text-4xl font-display font-bold text-gray-900">Page Not Found</h1>
        <p className="text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
