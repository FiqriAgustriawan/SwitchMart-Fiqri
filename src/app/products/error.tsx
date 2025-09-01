"use client";

import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from "lucide-react";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error untuk debugging
    console.error('Products page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="w-full max-w-lg text-center space-y-6">
        {/* Error Icon */}
        <div className="mx-auto w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Oops! Something went wrong</h1>
          <p className="text-muted-foreground">
            We encountered an error while loading the products page.
          </p>
        </div>

        {/* Error Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-destructive">Error Details</CardTitle>
            <CardDescription>
              Technical information for debugging
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-left space-y-2">
              <div className="p-3 bg-muted/50 rounded text-sm font-mono">
                {error.message || 'Unknown error occurred'}
              </div>
              {error.digest && (
                <div className="text-xs text-muted-foreground">
                  Error ID: {error.digest}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button onClick={reset} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>

          <div className="flex space-x-3">
            <Button variant="outline" className="flex-1" asChild>
              <a href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </a>
            </Button>

            <Button variant="outline" className="flex-1" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>

        {/* Support Info */}
        <div className="text-sm text-muted-foreground space-y-1">
          <p>If the problem persists, please contact our support team.</p>
          <a href="/contact" className="text-primary hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}