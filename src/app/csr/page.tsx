"use client"

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Terminal, RefreshCcw } from "lucide-react";
import { Post } from "@/lib/data-service";
import { Button } from "@/components/ui/button";

export default function CSRPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/data");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Client-Side Rendering</h1>
          <Button variant="outline" size="sm" onClick={fetchData} disabled={loading}>
            <RefreshCcw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refetch
          </Button>
        </div>
        <p className="text-muted-foreground text-lg">
          This page loads an empty shell first and then fetches data using JavaScript. Notice the <strong>Skeleton Loaders</strong> that appear while the client is fetching data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-lg border-primary/10">
          <CardHeader>
            <CardTitle>CSR Data Table</CardTitle>
            <CardDescription>Data is fetched via API after the component mounts in the browser.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-[80px] rounded-full" /></TableCell>
                    </TableRow>
                  ))
                ) : (
                  posts.map((post) => (
                    <TableRow key={post.id} className="animate-in fade-in slide-in-from-top-1 duration-300">
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-primary/30 text-primary">{post.category}</Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Why CSR?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">App-Like</Badge>
                <p className="text-sm text-muted-foreground">Feels faster for interactions after the first load. Good for dashboards and private apps.</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">Lower Server Load</Badge>
                <p className="text-sm text-muted-foreground">The server just sends a shell; the client&apos;s browser does the heavy lifting of fetching data.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Observation Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <p>1. Open <strong>View Page Source</strong> (Ctrl+U).</p>
              <p>2. Search for the text: <code className="bg-primary/10 px-1 py-0.5 rounded text-xs">&quot;Next.js Rendering Patterns&quot;</code></p>
              <p className="font-bold text-red-500">Result: Not found! The source code only contains an empty container.</p>
              <p>3. Check the <strong>Network Tab</strong> (F12) to see the fetch request to <code className="text-xs">/api/data</code>.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
