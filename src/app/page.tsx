import MarqueeHeader from "@/components/MarqueeHeader";
import Navbar from "@/components/Navbar";
import HeroArticles from "@/components/HeroArticles";
import LatestArticles from "@/components/LatestArticles";
import RankSection from "@/components/RankSection";
import TagSection from "@/components/TagSection";
import Footer from "@/components/Footer";
import { getLatestPosts, getAllTags } from "@/lib/ghost";

export const revalidate = 3600;

export default async function HomePage() {
  const [posts, tags] = await Promise.all([
    getLatestPosts(50),
    getAllTags(),
  ]);

  return (
    <main className="min-h-screen bg-[#fdf6ec]">
      <MarqueeHeader />
      <Navbar tags={tags} />
      <HeroArticles posts={posts.slice(0, 3)} />
      <LatestArticles posts={posts} />
      <RankSection posts={posts} />
      <TagSection tags={tags} />
      <Footer />
    </main>
  );
}
