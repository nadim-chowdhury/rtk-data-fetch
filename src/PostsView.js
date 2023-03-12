import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  });

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {posts &&
        posts.map((post) => {
          return (
            <div key={posts.id}>
              <h3>{posts.title}</h3>
              <p>{posts.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default PostsView;
