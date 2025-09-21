import { createHelloGreeting } from "@/lib/hello";

const PostExample = () => {
  const { message } = createHelloGreeting("Maxon");

  return (
    <section className="content">
      <h2 className="section-title">Post request</h2>
      {message && <h2>{message}</h2>}
    </section>
  );
}

export default PostExample;