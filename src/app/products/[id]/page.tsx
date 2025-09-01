import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Headphones,
  Coffee,
  Keyboard,
  Shirt,
  Camera
} from "lucide-react";
import { Watch } from "lucide-react";
import { notFound } from "next/navigation";

// Data dummy yang sama dengan products page
const dummyProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 299000,
    icon: Headphones,
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    description: "Premium wireless headphones with noise cancellation",
    fullDescription: "Experience superior sound quality with our premium wireless Bluetooth headphones. Featuring advanced noise cancellation technology, these headphones deliver crystal-clear audio for music, calls, and entertainment. With up to 30 hours of battery life and quick-charge capability, you can enjoy uninterrupted listening all day long.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge (15 min = 3 hours)",
      "Premium drivers for rich sound",
      "Comfortable over-ear design",
      "Built-in microphone"
    ],
    specs: {
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.0",
      "Warranty": "2 years"
    }
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 599000,
    icon: Watch,
    category: "Electronics",
    rating: 4.8,
    reviews: 256,
    description: "Advanced smartwatch with health monitoring",
    fullDescription: "Stay connected and healthy with our advanced smartwatch. Track your fitness, monitor your health metrics, and stay connected with smart notifications. The always-on display and long battery life make it perfect for your active lifestyle.",
    features: [
      "Health monitoring sensors",
      "GPS tracking",
      "Water resistant (50m)",
      "Always-on display",
      "7-day battery life",
      "Multiple workout modes"
    ],
    specs: {
      "Display": "1.4\" AMOLED",
      "Battery": "7 days",
      "Water Resistance": "5ATM",
      "Sensors": "Heart rate, SpO2, GPS",
      "Compatibility": "iOS & Android"
    }
  },
  {
    id: 3,
    name: "Premium Coffee Maker",
    price: 899000,
    icon: Coffee,
    category: "Home & Kitchen",
    rating: 4.3,
    reviews: 89,
    description: "Professional-grade coffee brewing system",
    fullDescription: "Brew café-quality coffee at home with our professional-grade coffee maker. Featuring precise temperature control and multiple brewing options, this machine delivers the perfect cup every time.",
    features: [
      "Precise temperature control",
      "Multiple brew sizes",
      "Built-in grinder",
      "Programmable timer",
      "Auto-clean function",
      "Stainless steel design"
    ],
    specs: {
      "Capacity": "12 cups",
      "Power": "1200W",
      "Material": "Stainless Steel",
      "Grinder": "Burr grinder",
      "Warranty": "3 years"
    }
  },
  {
    id: 4,
    name: "Gaming Mechanical Keyboard",
    price: 459000,
    icon: Keyboard,
    category: "Electronics",
    rating: 4.7,
    reviews: 342,
    description: "RGB mechanical keyboard for gaming enthusiasts",
    fullDescription: "Elevate your gaming experience with our premium mechanical keyboard. Featuring tactile switches, customizable RGB lighting, and durable construction for competitive gaming.",
    features: [
      "Mechanical switches",
      "RGB backlighting",
      "Anti-ghosting",
      "Programmable keys",
      "Aluminum frame",
      "Detachable cable"
    ],
    specs: {
      "Switch Type": "Cherry MX Red",
      "Backlighting": "RGB",
      "Layout": "Full-size",
      "Connection": "USB-C",
      "Warranty": "2 years"
    }
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 159000,
    icon: Shirt,
    category: "Fashion",
    rating: 4.2,
    reviews: 76,
    description: "Sustainable and comfortable organic cotton tee",
    fullDescription: "Made from 100% organic cotton, this t-shirt offers superior comfort while being environmentally friendly. Perfect for everyday wear with a classic fit.",
    features: [
      "100% organic cotton",
      "Pre-shrunk fabric",
      "Classic fit",
      "Reinforced seams",
      "Eco-friendly dyes",
      "Machine washable"
    ],
    specs: {
      "Material": "100% Organic Cotton",
      "Fit": "Classic",
      "Care": "Machine wash cold",
      "Origin": "Made in Indonesia",
      "Certification": "GOTS Certified"
    }
  },
  {
    id: 6,
    name: "Professional Camera Lens",
    price: 1299000,
    icon: Camera,
    category: "Electronics",
    rating: 4.9,
    reviews: 194,
    description: "High-quality lens for professional photography",
    fullDescription: "Capture stunning images with our professional-grade camera lens. Featuring advanced optics and image stabilization for sharp, clear photos in any condition.",
    features: [
      "Image stabilization",
      "Weather sealed",
      "Ultra-low dispersion glass",
      "Silent autofocus motor",
      "Manual focus override",
      "Lens hood included"
    ],
    specs: {
      "Focal Length": "24-70mm",
      "Aperture": "f/2.8",
      "Mount": "Canon EF",
      "Weight": "805g",
      "Warranty": "3 years"
    }
  }
];

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = parseInt(id);

  // Cek jika ID tidak valid
  if (isNaN(productId) || productId < 1) {
    notFound();
  }

  const product = dummyProducts.find(p => p.id === productId);

  // Jika produk tidak ditemukan, panggil notFound()
  if (!product) {
    notFound();
  }

  const IconComponent = product.icon;

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
            <a href="/" className="hover:text-primary">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-primary">Products</a>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <Card className="aspect-square bg-gradient-to-br from-muted/20 to-muted/40 border-0">
                <CardContent className="flex items-center justify-center h-full p-0">
                  <IconComponent className="h-32 w-32 text-muted-foreground" />
                </CardContent>
              </Card>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="aspect-square bg-muted/20 border cursor-pointer hover:border-primary transition-colors">
                    <CardContent className="flex items-center justify-center h-full p-2">
                      <IconComponent className="h-8 w-8 text-muted-foreground" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-2">{product.category}</Badge>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="text-3xl font-bold text-primary mb-6">
                  {formatPrice(product.price)}
                </div>

                <p className="text-muted-foreground mb-6">
                  {product.fullDescription}
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-5 w-5" />
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
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Shipping & Returns */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-4">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">Orders over IDR 500K</div>
                </Card>
                <Card className="text-center p-4">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Warranty</div>
                  <div className="text-xs text-muted-foreground">2 Year Coverage</div>
                </Card>
                <Card className="text-center p-4">
                  <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Easy Returns</div>
                  <div className="text-xs text-muted-foreground">30 Day Policy</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-muted last:border-0">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold">{product.rating}</div>
                  <div>
                    {renderStars(product.rating)}
                    <div className="text-sm text-muted-foreground">
                      Based on {product.reviews} reviews
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center space-x-2">
                      <span className="text-sm w-8">{star}★</span>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{
                            width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2}%`
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-8">
                        {star === 5 ? '70%' : star === 4 ? '20%' : star === 3 ? '5%' : star === 2 ? '3%' : '2%'}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}