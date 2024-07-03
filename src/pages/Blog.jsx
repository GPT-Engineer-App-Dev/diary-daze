import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-lg">Read my latest blog posts.</p>
      </section>
      <section>
        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Post Title 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short excerpt of the blog post...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post Title 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short excerpt of the blog post...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post Title 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short excerpt of the blog post...</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;