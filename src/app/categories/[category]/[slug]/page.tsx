import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Star, ShoppingCart, Heart } from "lucide-react";

export default async function CategoryProductPage({
  params
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params;

  // Decode URL parameters
  const decodedCategory = decodeURIComponent(category);
  const decodedSlug = decodeURIComponent(slug);

  // Mock product data based on category and slug
  const mockProduct = {
    name: decodedSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    category: decodedCategory.replace(/\b\w/g, l => l.toUpperCase()),
    price: 899000,
    rating: 4.6,
    reviews: 156,
    description: `Premium ${decodedSlug.replace(/-/g, ' ')} from the ${decodedCategory} category. High-quality product with excellent features and reliability.`,
    inStock: true,
    features: [
      "High-quality construction",
      "Advanced technology",
      "User-friendly design",
      "Excellent durability",
      "Competitive pricing"
    ]
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < Math.floor(rating)
              ? 'text-yellow-400 fill-current'
              : 'text-muted-foreground'
              }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="fade-in">
      {/* Breadcrumb */}
      <section className="border-b bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-primary transition-colors">Products</a>
            <span>/</span>
            <span className="hover:text-primary transition-colors capitalize">{decodedCategory}</span>
            <span>/</span>
            <span className="text-foreground capitalize">{mockProduct.name}</span>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-6" asChild>
            <a href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </a>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <Card className="aspect-square bg-gradient-to-br from-muted/20 to-muted/40 border-0">
                <CardContent className="flex items-center justify-center h-full">
                  <Package className="h-32 w-32 text-muted-foreground" />
                </CardContent>
              </Card>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="aspect-square bg-muted/20 border cursor-pointer hover:border-primary transition-colors">
                    <CardContent className="flex items-center justify-center h-full p-2">
                      <Package className="h-8 w-8 text-muted-foreground" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4">
                  {mockProduct.category}
                </Badge>

                <h1 className="text-4xl font-bold mb-4">{mockProduct.name}</h1>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {renderStars(mockProduct.rating)}
                    <span className="text-lg font-medium ml-2">{mockProduct.rating}</span>
                  </div>
                  <span className="text-muted-foreground">
                    ({mockProduct.reviews} reviews)
                  </span>
                </div>

                <div className="text-4xl font-bold text-primary mb-6">
                  {formatPrice(mockProduct.price)}
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  {mockProduct.description}
                </p>

                <div className="flex items-center space-x-3 mb-8">
                  <div className={`w-3 h-3 rounded-full ${mockProduct.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className="font-medium">
                    {mockProduct.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <Button size="lg" className="flex-1" disabled={!mockProduct.inStock}>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {mockProduct.inStock ? 'Add to Cart' : 'Notify When Available'}
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
                <Button variant="outline" size="lg" className="w-full">
                  Buy Now
                </Button>
              </div>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Category Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                About {mockProduct.category} Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Explore our extensive collection of {decodedCategory} products. We carefully curate
                each item to ensure quality, performance, and value. From entry-level to professional-grade
                equipment, find everything you need in the {decodedCategory} category.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Products Available</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">4.7</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">1K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
              <Button asChild>
                <a href="/products">Browse All {mockProduct.category} Products</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}