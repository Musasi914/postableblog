export interface Post {
  title: string;
  postsText: string;
  author: {
    username: string;
    id: string;
  };
  createdAt: string;
}

export interface PostWithId extends Post {
  id: string;
}

export type PostListTypes = PostWithId[];
