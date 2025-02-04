import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="mt-4 text-lg">A place to share my thoughts and experiences.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Recent Posts</h2>
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

export default Index;