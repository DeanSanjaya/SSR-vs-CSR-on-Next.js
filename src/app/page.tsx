import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Server, User, ArrowRight, Zap, Search, Layout } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4">
          Experimental Lab
        </Badge>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          SSR vs CSR
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A visual laboratory to understand how Next.js handles data rendering on the server versus the client.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* SSR Card */}
        <Card className="relative overflow-hidden group border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-xl hover:shadow-primary/5">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Server size={120} />
          </div>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Server size={24} />
            </div>
            <CardTitle className="text-2xl">Server-Side Rendering (SSR)</CardTitle>
            <CardDescription>
              HTML is generated on the server for each request.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Search size={16} className="text-primary" />
                Best for SEO (Search Engine Optimization)
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap size={16} className="text-primary" />
                Faster initial page display
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Layout size={16} className="text-primary" />
                Better for static content or blogs
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/ssr" className="w-full">
              <Button className="w-full group">
                Go to SSR Page
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* CSR Card */}
        <Card className="relative overflow-hidden group border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-xl hover:shadow-primary/5">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <User size={120} />
          </div>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 text-secondary-foreground">
              <User size={24} />
            </div>
            <CardTitle className="text-2xl">Client-Side Rendering (CSR)</CardTitle>
            <CardDescription>
              Data is fetched and rendered in the browser using JavaScript.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap size={16} className="text-secondary-foreground" />
                Rich, app-like interactivity
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Layout size={16} className="text-secondary-foreground" />
                Fast subsequent page transitions
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Server size={16} className="text-secondary-foreground" />
                Reduced server computing costs
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/csr" className="w-full">
              <Button variant="secondary" className="w-full group">
                Go to CSR Page
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-muted/30 rounded-2xl p-8 border border-dashed border-muted-foreground/20 text-center">
        <h3 className="text-lg font-semibold mb-2">How to use this comparison?</h3>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Navigate to both pages. Notice that the <strong>SSR</strong> page will feel like it&apos;s &quot;loading&quot; before it appears, but once it does, everything is there. The <strong>CSR</strong> page appears instantly as an empty shell, with data &quot;popping in&quot; via skeletons.
        </p>
      </div>
    </div>
  );
}
