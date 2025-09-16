export const mappedPost = (posts = []) => {
  return posts.map((post) => ({
    id: post.id,
    createdDate: post.date,
    author: post.author,
    content: post.content?.rendered ?? "",
  }));
};
