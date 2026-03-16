import Navbar from "@/components/Navbar";
import HeroArticles from "@/components/HeroArticles";
import LatestArticles from "@/components/LatestArticles";
import Footer from "@/components/Footer";
import { getLatestPosts } from "@/lib/ghost";

export const revalidate = 3600;

export default async function HomePage() {
  const posts = await getLatestPosts(50);

  return (
    <main className="min-h-screen bg-[#fdf6ec]">
      <Navbar />
      <HeroArticles posts={posts.slice(0, 3)} />
      <LatestArticles posts={posts} />
      <Footer />
    </main>
  );
}
