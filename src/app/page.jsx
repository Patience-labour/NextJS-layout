import Button from "@/components/Button/Button";

export const metadata = {
  title: "Next JS tutorial",
  description: "Learning Next JS",
  keywords: "Business, Next JS, React"
}

export default function Home() {
  return (
    <section className="content">
      <h1>Изучаем Next.js</h1>
      <p>
        Next.js - это современный React-фреймворк, который позволяет создавать быстрые, масштабируемые и SEO-дружественные приложения. <br />
      <Button />
      </p>
    </section>
  );
}
