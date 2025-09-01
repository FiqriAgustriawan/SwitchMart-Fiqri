import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  Truck,
  Shield,
  Star,
  ArrowRight,
  Zap,
  Users,
  Gift,
  Sparkles,
  TrendingUp,
  Award
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Clean dengan gradient biru subtle */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-background via-background to-blue-50/30 dark:from-background dark:via-background dark:to-blue-950/20 flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <Badge variant="secondary" className="px-3 py-1">
                  Welcome to SwitchMart
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Switch to{" "}
                <span className="text-primary">
                  Better
                </span>{" "}
                Shopping
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Discover premium products at unbeatable prices. Your one-stop destination for quality electronics, fashion, and lifestyle products.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300" asChild>
                  <Link href="/products">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Shop Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-background"></div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">50K+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  { icon: ShoppingBag, label: "Quality Products" },
                  { icon: Truck, label: "Fast Delivery" },
                  { icon: Shield, label: "Secure Payment" },
                  { icon: Star, label: "Top Rated" }
                ].map((item, index) => (
                  <Card key={index} className="p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 border">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center shadow-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm lg:text-base">{item.label}</h3>
                  </Card>
                ))}
              </div>

              {/* Floating Elements - subtle blue */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full opacity-50 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Clean Design */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <Badge variant="outline" className="px-4 py-2">
                Why Choose SwitchMart?
              </Badge>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Everything You Need,{" "}
              <span className="text-primary">
                All in One Place
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve revolutionized online shopping with our innovative platform and exceptional service.
            </p>
          </div>

          {/* Features Grid - Clean Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Experience blazing fast loading times and smooth navigation throughout your shopping journey."
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Our dedicated support team is available 24/7 to ensure you have the best shopping experience."
              },
              {
                icon: Gift,
                title: "Great Deals",
                description: "Enjoy exclusive discounts, seasonal sales, and special offers available only to SwitchMart members."
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Dark dengan gradient biru */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/10 to-blue-600/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="h-5 w-5 text-blue-400" />
              <Badge variant="secondary" className="px-4 py-2 bg-white/10 text-white border-white/20">
                Trusted Worldwide
              </Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Join Our Growing Community
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Thousands of customers trust SwitchMart for their shopping needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Happy Customers", icon: Users },
              { number: "10K+", label: "Products", icon: ShoppingBag },
              { number: "99.9%", label: "Uptime", icon: Zap },
              { number: "24/7", label: "Support", icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean dengan accent biru */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="relative overflow-hidden border bg-background shadow-xl shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5"></div>
            <CardContent className="relative z-10 text-center py-16 lg:py-20">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <Badge variant="secondary" className="px-4 py-2">
                  Ready to Switch?
                </Badge>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Start Your Shopping{" "}
                <span className="text-primary">
                  Journey Today
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied customers and discover why SwitchMart is the preferred choice for smart shoppers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300" asChild>
                  <Link href="/products">
                    Browse Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
