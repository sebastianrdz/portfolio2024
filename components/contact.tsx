// components/Contact.tsx
const Contact = () => {
  return (
    <section id="contact" className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Phone: +52 81 2329 5109</p>
      <p>
        Email:{" "}
        <a href="mailto:sebasstian.rdz@gmail.com">sebasstian.rdz@gmail.com</a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/sebastianrdz" target="_blank">
          github.com/sebastianrdz
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/sebastian-rodriguez123"
          target="_blank"
        >
          linkedin.com/in/sebastian-rodriguez123
        </a>
      </p>
      <p>
        Portfolio:{" "}
        <a href="https://sebastianrdz-v2.netlify.app" target="_blank">
          sebastianrdz-v2.netlify.app
        </a>
      </p>
    </section>
  );
};

export default Contact;
