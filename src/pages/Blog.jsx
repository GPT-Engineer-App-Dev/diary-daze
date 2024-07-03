import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Blog = () => {
  const [posts, setPosts] = useState([
    { title: "Post Title 1", content: "Short excerpt of the blog post..." },
    { title: "Post Title 2", content: "Short excerpt of the blog post..." },
    { title: "Post Title 3", content: "Short excerpt of the blog post..." },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setNewPost({ title: "", content: "" });
  };

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-lg">Read my latest blog posts.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">Title</label>
            <Input id="title" name="title" type="text" value={newPost.title} onChange={handleChange} placeholder="Post Title" />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium">Content</label>
            <Textarea id="content" name="content" value={newPost.content} onChange={handleChange} placeholder="Post Content" />
          </div>
          <Button type="submit">Add Post</Button>
        </form>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Recent Posts</h2>
        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;