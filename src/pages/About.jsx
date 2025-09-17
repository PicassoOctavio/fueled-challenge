import { useEffect } from "react";
import { useBlogStore } from "../hooks/useBlogStore"
import { AboutPost } from "../components/AboutPost/AboutPost";

export const About = () => {

  const { getPages, pages } = useBlogStore();

  useEffect(() => {
    getPages()
  }, [])

  return (
    <div itemScope itemType="https://schema.org/Blog">
      { pages.map((post) => (
        <AboutPost {...post} />
      ))}
    </div>
  )
}
