import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fueledApi } from "../api";
import { onLoadBlogPosts } from "../store/blog/blogSlice";
import { mappedPost } from "../helpers/mappedPost";

export const useBlogStore = () => {
  const dispatch = useDispatch();
  const { blogPosts } = useSelector((state) => state.blog);

  const getBlogPosts = async () => {
    try {
      const { data } = await fueledApi.get("/wp/v2/posts");

      const mappedData = mappedPost(data);

      dispatch(onLoadBlogPosts(mappedData));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al cargar posts", error, "error");
    }
  };

  return {
    blogPosts,
    getBlogPosts,
  };
};
