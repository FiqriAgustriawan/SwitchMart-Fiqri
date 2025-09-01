import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShoppingBag,
  Heart,
  User,
  Settings,
  Package,
  CreditCard,
  Star,
  Truck,
  Clock,
  CheckCircle
} from "lucide-react";

export default function DashboardPage() {
  const userStats = {
    totalOrders: 12,
    activeOrders: 2,
    wishlistItems: 8,
    totalSpent: 2450000
  };

  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-12-15",
      status: "delivered",
      total: 299000,
      items: 1,
      product: "Wireless Bluetooth Headphones"
    },
    {
      id: "ORD-002",
      date: "2024-12-10",
      status: "shipped",
      total: 599000,
      items: 1,
      product: "Smart Watch Series 5"
    },
    {
      id: "ORD-003",
      date: "2024-12-05",
      status: "processing",
      total: 159000,
      items: 2,
      product: "Organic Cotton T-Shirt"
    }
  ];

  const wishlistItems = [
    { id: 1, name: "Gaming Mechanical Keyboard", price: 459000, category: "Electronics" },
    { id: 2, name: "Premium Coffee Maker", price: 899000, category: "Home & Kitchen" },
    { id: 3, name: "Professional Camera Lens", price: 1299000, category: "Electronics" }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'shipped':
        return <Truck className="h-4 w-4 text-blue-500" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <Package className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
              <p className="text-xl text-muted-foreground">
                Welcome back! Here's your account overview.
              </p>
            </div>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Account Settings
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.totalOrders}</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.activeOrders}</div>
                <p className="text-xs text-muted-foreground">In progress</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wishlist Items</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.wishlistItems}</div>
                <p className="text-xs text-muted-foreground">Saved items</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatPrice(userStats.totalSpent)}</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="orders">Recent Orders</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>
                    Your latest orders and their current status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <Card key={order.id} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(order.status)}
                              <div>
                                <div className="font-medium">{order.id}</div>
                                <div className="text-sm text-muted-foreground">
                                  {new Date(order.date).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="font-medium">{order.product}</div>
                              <div className="text-sm text-muted-foreground">
                                {order.items} item{order.items > 1 ? 's' : ''}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{formatPrice(order.total)}</div>
                            <Badge className={`text-xs ${getStatusColor(order.status)}`}>
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      View All Orders
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Wishlist</CardTitle>
                  <CardDescription>
                    Items you've saved for later
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wishlistItems.map((item) => (
                      <Card key={item.id} className="p-4">
                        <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg mb-4 flex items-center justify-center">
                          <Package className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <div className="space-y-2">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <h3 className="font-medium line-clamp-2">{item.name}</h3>
                          <div className="text-lg font-bold text-primary">
                            {formatPrice(item.price)}
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="flex-1">
                              <ShoppingBag className="mr-2 h-4 w-4" />
                              Add to Cart
                            </Button>
                            <Button variant="outline" size="sm">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Manage your account details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">john.doe@example.com</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">Member Since</div>
                        <div className="text-muted-foreground">January 2024</div>
                      </div>
                      <div>
                        <div className="font-medium">Status</div>
                        <Badge variant="secondary">Premium</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Activity</CardTitle>
                    <CardDescription>
                      Recent account activities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <div className="text-sm">
                          <div>Left a review for "Wireless Headphones"</div>
                          <div className="text-muted-foreground">2 days ago</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ShoppingBag className="h-4 w-4 text-blue-500" />
                        <div className="text-sm">
                          <div>Placed order #ORD-002</div>
                          <div className="text-muted-foreground">5 days ago</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Heart className="h-4 w-4 text-red-500" />
                        <div className="text-sm">
                          <div>Added item to wishlist</div>
                          <div className="text-muted-foreground">1 week ago</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}