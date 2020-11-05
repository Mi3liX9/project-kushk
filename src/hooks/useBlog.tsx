import { useState, useContext, useEffect, createContext } from "react";
import { PostProps } from "src/interfaces/post";

interface ContextProps {
  readonly original: PostProps[];
  posts: PostProps[];
  setPosts: React.Dispatch<
    React.SetStateAction<React.PropsWithChildren<PostProps[]>>
  >;
  search: string;
  setSearch: React.Dispatch<
    React.SetStateAction<React.PropsWithChildren<string>>
  >;
  tags: string[];
  setTags: React.Dispatch<
    React.SetStateAction<React.PropsWithChildren<string[]>>
  >;
}

const PostsContext = createContext<ContextProps | undefined>(undefined);

const PostsProvider: React.FC<{ original: PostProps[] }> = ({
  original,
  children,
}) => {
  const originalWithoutFuturePosts = original.filter(
    (post) => new Date().getTime() - new Date(post.date).getTime() > 0
  );
  const [posts, setPosts] = useState(originalWithoutFuturePosts);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        original: originalWithoutFuturePosts,
        search,
        setSearch,
        tags,
        setTags,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;

export const useBlog = () => {
  const {
    posts,
    setPosts,
    original,
    search,
    setSearch,
    tags,
    setTags,
  } = useContext(PostsContext)!;

  useEffect(() => {
    setPosts(
      original.filter((post) => {
        const title = post.title;
        const words = search.split(" ");
        const isSeearched = words.every((word) => title.includes(word));
        const isTagged = tags.every((tag) => post.tags?.includes(tag));
        return isSeearched && isTagged;
      })
    );
  }, [search, tags]);
  return { posts, setPosts, original, search, setSearch, tags, setTags };
};
