import React from "react";
import Post from "../components/Post";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import MainLayout from "../layouts/MainLayout";
import { useRouter } from "next/dist/client/router";

export default function index() {
  const router = useRouter();
  const { posts, error, loading } = useTypedSelector((state) => state.posts);
  const { fetchPosts } = useActions();

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <MainLayout>
      <div>
        {posts.map((post) => (
          <div onClick={() => router.push(`posts/${post.id}?_embed=comments`)}>
            <Post key={post.id} post={post} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
