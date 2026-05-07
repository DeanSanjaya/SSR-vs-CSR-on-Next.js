export interface Post {
  id: number;
  title: string;
  author: string;
  category: string;
}

export async function fetchPosts(): Promise<Post[]> {
  // Simulate delay to make the comparison obvious (2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    { id: 1, title: "Next.js Rendering Patterns", author: "Shadcn", category: "Education" },
    { id: 2, title: "Mastering SSR with App Router", author: "Vercel", category: "Advanced" },
    { id: 3, title: "CSR vs SSR: The Ultimate Guide", author: "Developer", category: "Basics" },
    { id: 4, title: "Building accessible UIs", author: "UI Expert", category: "Design" },
    { id: 5, title: "Hydration in Modern Frameworks", author: "JS Guru", category: "Architecture" },
  ];
}
