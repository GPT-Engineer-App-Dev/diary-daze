import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-lg">Learn more about my background and experiences.</p>
      </section>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Personal Background</CardTitle>
          </CardHeader>
          <CardContent>
            <Image src="/images/profile.jpg" alt="Profile Picture" width={128} height={128} className="w-32 h-32 rounded-full mx-auto" />
            <p className="mt-4">Detailed introduction and personal background...</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;