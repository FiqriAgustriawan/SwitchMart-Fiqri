import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  BookOpen,
  Code,
  Globe,
  Layers,
  Zap,
  FileText,
  ExternalLink,
  Calendar,
  User
} from "lucide-react";

export default async function WikiPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugs } = await params;

  // Generate content based on slug path
  const generateWikiContent = (slugs: string[]) => {
    const path = slugs.join('/');

    // Mock wiki data structure
    const wikiData: Record<string, any> = {
      'tech': {
        title: 'Technology',
        description: 'Explore the latest in technology trends and innovations',
        icon: Code,
        color: 'blue'
      },
      'tech/web': {
        title: 'Web Technologies',
        description: 'Modern web development technologies and best practices',
        icon: Globe,
        color: 'green'
      },
      'tech/web/framework': {
        title: 'Web Frameworks',
        description: 'Popular web frameworks for modern development',
        icon: Layers,
        color: 'purple',
        content: {
          overview: 'Web frameworks provide structured approaches to building web applications, offering pre-built components, routing systems, and development tools.',
          sections: [
            {
              title: 'React.js',
              description: 'A JavaScript library for building user interfaces, particularly single-page applications.',
              features: ['Component-based architecture', 'Virtual DOM', 'JSX syntax', 'Large ecosystem']
            },
            {
              title: 'Next.js',
              description: 'A React framework that enables server-side rendering and static site generation.',
              features: ['Server-side rendering', 'Static generation', 'API routes', 'Built-in optimization']
            },
            {
              title: 'Vue.js',
              description: 'A progressive JavaScript framework for building user interfaces.',
              features: ['Template syntax', 'Reactive data binding', 'Component system', 'Easy learning curve']
            }
          ]
        }
      },
      'business': {
        title: 'Business',
        description: 'Business strategies and market insights',
        icon: FileText,
        color: 'orange'
      },
      'design': {
        title: 'Design',
        description: 'Design principles and UI/UX best practices',
        icon: Zap,
        color: 'pink'
      }
    };

    return wikiData[path] || {
      title: slugs[slugs.length - 1]?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Wiki',
      description: `Information about ${slugs.join(' > ')}`,
      icon: BookOpen,
      color: 'gray'
    };
  };

  const wikiContent = generateWikiContent(slugs || []);
  const IconComponent = wikiContent.icon;

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      green: 'bg-green-500/10 text-green-500 border-green-500/20',
      purple: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      orange: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      pink: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
      gray: 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="fade-in">
      {/* Breadcrumb */}
      <section className="border-b bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <a href="/wiki" className="hover:text-primary transition-colors">Wiki</a>
            {(slugs || []).map((slug, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span>/</span>
                <span className={index === (slugs?.length || 0) - 1 ? 'text-foreground' : 'hover:text-primary transition-colors'}>
                  {slug.replace(/-/g, ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wiki Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-6" asChild>
            <a href={(slugs?.length || 0) > 1 ? `/wiki/${slugs!.slice(0, -1).join('/')}` : '/wiki'}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </a>
          </Button>

          <div className="flex items-start space-x-6 mb-8">
            <Card className={`p-6 ${getColorClasses(wikiContent.color)} border`}>
              <IconComponent className="h-12 w-12" />
            </Card>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-4xl font-bold">{wikiContent.title}</h1>
                <Badge variant="outline">Wiki</Badge>
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                {wikiContent.description}
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Updated: Dec 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>NexaMart Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wiki Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {wikiContent.content ? (
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Table of Contents */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a href="#overview" className="block text-sm hover:text-primary transition-colors">
                      Overview
                    </a>
                    {wikiContent.content.sections?.map((section: any, index: number) => (
                      <a
                        key={index}
                        href={`#${section.title.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-')}`}
                        className="block text-sm hover:text-primary transition-colors pl-4"
                      >
                        {section.title}
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Overview */}
                <Card id="overview">
                  <CardHeader>
                    <CardTitle className="text-2xl">Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {wikiContent.content.overview}
                    </p>
                  </CardContent>
                </Card>

                {/* Sections */}
                {wikiContent.content.sections?.map((section: any, index: number) => (
                  <Card key={index} id={section.title.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-')}>
                    <CardHeader>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {section.features?.map((feature: string, fIndex: number) => (
                            <li key={fIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            // Simple content for paths without detailed content
            <Card>
              <CardHeader>
                <CardTitle>About {wikiContent.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  This wiki section contains information about {wikiContent.title.toLowerCase()}.
                  We're constantly updating our knowledge base to provide you with the most current
                  and relevant information.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">Getting Started</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn the basics and fundamental concepts.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">Advanced Topics</h3>
                    <p className="text-sm text-muted-foreground">
                      Dive deeper into advanced techniques and strategies.
                    </p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Getting Started Guide', 'Best Practices', 'Advanced Techniques'].map((title, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <Badge variant="outline">Article</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Comprehensive guide covering essential topics and practical examples.
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}