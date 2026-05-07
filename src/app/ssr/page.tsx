import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react";
import { fetchPosts } from "@/lib/data-service";

export default async function SSRPage() {
  // Fetching directly in a Server Component
  const posts = await fetchPosts();

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Server-Side Rendering</h1>
        <p className="text-muted-foreground text-lg">
          This page is pre-rendered on the server for every request. Notice there is no &quot;loading&quot; flicker here; the page just waits for the server to finish and then displays everything at once.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-lg border-primary/10">
          <CardHeader>
            <CardTitle>SSR Data Table</CardTitle>
            <CardDescription>All data below was injected into the HTML on the server.</CardDescription>
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
                {posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{post.category}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Why SSR?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge className="mt-0.5">SEO</Badge>
                <p className="text-sm text-muted-foreground">Search engines see the full content immediately because it&apos;s in the raw HTML.</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="mt-0.5">FCP</Badge>
                <p className="text-sm text-muted-foreground">Fast First Contentful Paint. No client-side &quot;Spinners&quot; are needed for the main data.</p>
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
              <p className="font-bold text-primary">Result: It exists in the source! The browser didn&apos;t have to fetch it via JavaScript.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
