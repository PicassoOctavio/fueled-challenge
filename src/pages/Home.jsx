import { useEffect } from "react"
import { useBlogStore } from "../hooks/useBlogStore"
import { useSelector } from "react-redux";
import { Post } from "../components/Post/Post";

export const Home = () => {
  const { getBlogPosts, blogPosts } = useBlogStore();
  const { user } = useSelector((state) => state.auth)
  
  useEffect(() => {
    getBlogPosts();
  }, [])

  return (
    <>
      {/* Should only show when user is logged in */}
      <section className="welcome logged-in">
        Welcome {user.name}!
      </section>
      
      <div itemScope itemType="https://schema.org/Blog">
        { blogPosts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>

    </>
  )
}
