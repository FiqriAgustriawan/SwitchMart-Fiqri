'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search, ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="w-full max-w-2xl text-center space-y-8">
        {/* 404 Icon */}
        <div className="mx-auto w-32 h-32 bg-muted/20 rounded-full flex items-center justify-center">
          <FileQuestion className="h-16 w-16 text-muted-foreground" />
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Suggested Actions */}
        <Card>
          <CardHeader>
            <CardTitle>What can you do?</CardTitle>
            <CardDescription>
              Here are some helpful links to get you back on track
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button asChild variant="outline" className="h-auto p-6 flex-col space-y-2">
                <a href="/">
                  <Home className="h-8 w-8" />
                  <span className="font-semibold">Go Home</span>
                  <span className="text-sm text-muted-foreground">
                    Return to our homepage
                  </span>
                </a>
              </Button>

              <Button asChild variant="outline" className="h-auto p-6 flex-col space-y-2">
                <a href="/products">
                  <Search className="h-8 w-8" />
                  <span className="font-semibold">Browse Products</span>
                  <span className="text-sm text-muted-foreground">
                    Explore our product catalog
                  </span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="/wiki" className="text-muted-foreground hover:text-primary transition-colors">
            Wiki
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
            Dashboard
          </a>
        </div>

        {/* Back Button */}
        <Button variant="ghost" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>
      </div>
    </div>
  );
}