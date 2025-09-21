import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <section className="content">
      <h2 className="section-title">About</h2>
      <p>Next.js - это мощный фреймворк поверх React, используемый ведущими компаниями для разработки проивзодительных и масштабируемых приложений.</p>
      <Image src="/dodge-400-200.jpg" alt="dodge" width="400" height="200" priority />
      <br />
      <Image src="https://webcademy.ru/blog/wp-content/uploads/2023/07/Travel-X-Cover-870x400.jpg" alt="dodge" width="400" height="200" priority />
    </section>
  )
}

export default AboutPage;