import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-4 text-lg">Feel free to reach out via the form below.</p>
      </section>
      <section>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <Textarea id="message" placeholder="Your Message" />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </div>
  );
};

export default Contact;