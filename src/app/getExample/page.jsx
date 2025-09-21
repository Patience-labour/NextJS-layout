import ButtonGetReq from "@/components/Button/ButtonGetReq";
import { getHelloMessage } from "@/lib/hello";

const GetExample = () => {
  const {message} = getHelloMessage();
  return (
    <section className="content">
      <h2 className="section-title">Get request</h2>
      {message && <p>{message}</p>}
      <ButtonGetReq />
    </section>
  );
}

export default GetExample;