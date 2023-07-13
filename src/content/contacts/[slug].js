import { getStaticProps } from "./[slug].js";
import PostTemplate from "@/components/ContactComponent";

export default function Post({ post }) {
  return <PostTemplate post={post} />;
}

export { getStaticProps };
