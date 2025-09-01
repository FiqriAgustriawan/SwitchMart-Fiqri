import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Target,
  Heart,
  Zap,
  Globe,
  Users,
  Award,
  TrendingUp
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 slide-up">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 slide-up">
            About <span className="text-primary">NexaMart</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up">
            We're passionate about bringing you the best shopping experience with quality products,
            competitive prices, and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Founded in 2025
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2025, NexaMart emerged from a simple idea: make online shopping
                more accessible, reliable, and enjoyable for everyone. We started as a small
                team with big dreams and have grown into a trusted e-commerce platform.
              </p>
              <p className="text-muted-foreground mb-6">
                Our commitment to quality, innovation, and customer satisfaction drives
                everything we do. We carefully curate our product selection and work with
                trusted suppliers to ensure you get the best value for your money.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Brand Partners</div>
                </div>
              </div>

              <Button asChild>
                <a href="/products">
                  Explore Products
                </a>
              </Button>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Modern E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Built with cutting-edge technology and user-centric design principles
                  to deliver the best possible shopping experience for our customers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              What We Stand For
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our customers every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We never compromise on product quality and maintain the highest standards in everything we offer.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-destructive/20 transition-colors">
                  <Heart className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle>Customer Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Your satisfaction is our top priority. We're here to support you every step of the way.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/20 transition-colors">
                  <Zap className="h-8 w-8 text-yellow-500" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We continuously evolve and embrace new technologies to enhance your shopping experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                  <Globe className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We're committed to responsible business practices and caring for our planet's future.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals driving NexaMart's vision forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Leadership Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Experienced professionals with decades of combined expertise in e-commerce and technology.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-12 w-12 text-green-500" />
                </div>
                <CardTitle>Expert Curators</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Product specialists who carefully select and verify every item in our catalog.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-12 w-12 text-blue-500" />
                </div>
                <CardTitle>Growth Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Data-driven professionals focused on improving our platform and customer experience.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}