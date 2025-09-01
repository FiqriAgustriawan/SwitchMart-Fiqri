import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Headphones,
  Coffee,
  Keyboard,
  Shirt,
  Camera,
  Star
} from "lucide-react";
import { Watch } from "lucide-react";

const dummyProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 299000,
    icon: Headphones,
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    description: "Premium wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 599000,
    icon: Watch,
    category: "Electronics",
    rating: 4.8,
    reviews: 256,
    description: "Advanced smartwatch with health monitoring"
  },
  {
    id: 3,
    name: "Premium Coffee Maker",
    price: 899000,
    icon: Coffee,
    category: "Home & Kitchen",
    rating: 4.3,
    reviews: 89,
    description: "Professional-grade coffee brewing system"
  },
  {
    id: 4,
    name: "Gaming Mechanical Keyboard",
    price: 459000,
    icon: Keyboard,
    category: "Electronics",
    rating: 4.7,
    reviews: 342,
    description: "RGB mechanical keyboard for gaming enthusiasts"
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 159000,
    icon: Shirt,
    category: "Fashion",
    rating: 4.2,
    reviews: 76,
    description: "Sustainable and comfortable organic cotton tee"
  },
  {
    id: 6,
    name: "Professional Camera Lens",
    price: 1299000,
    icon: Camera,
    category: "Electronics",
    rating: 4.9,
    reviews: 194,
    description: "High-quality lens for professional photography"
  }
];

export default function ProductsPage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < fullStars
              ? 'text-yellow-400 fill-current'
              : i === fullStars && hasHalfStar
                ? 'text-yellow-400 fill-current'
                : 'text-muted-foreground'
              }`}
          />
        ))}
      </div>
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Electronics':
        return 'default';
      case 'Fashion':
        return 'secondary';
      case 'Home & Kitchen':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <div>
     
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 slide-up">
            Premium Collection
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 slide-up">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto slide-up">
            Discover our carefully curated collection of quality products at competitive prices.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <p className="text-muted-foreground">
                Showing {dummyProducts.length} products
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Filter</Button>
              <Button variant="outline" size="sm">Sort</Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="h-16 w-16 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={getCategoryColor(product.category) as any}>
                        {product.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {renderStars(product.rating)}
                        <span className="text-sm text-muted-foreground ml-1">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <CardTitle className="mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full" asChild>
                      <a href={`/products/${product.id}`}>
                        View Details
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}