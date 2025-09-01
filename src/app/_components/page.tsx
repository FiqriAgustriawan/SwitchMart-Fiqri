import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  icon: any;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
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

  const IconComponent = product.icon;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
          <IconComponent className="h-16 w-16 text-muted-foreground" />
        </div>
        <Badge variant="outline" className="w-fit">
          {product.category}
        </Badge>
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
            <span className="text-sm text-muted-foreground ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>

        <div className="text-2xl font-bold text-primary">
          {formatPrice(product.price)}
        </div>

        <div className="flex space-x-2">
          <Button className="flex-1" asChild>
            <a href={`/products/${product.id}`}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              View Details
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}