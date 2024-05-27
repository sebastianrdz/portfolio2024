// components/Projects.tsx
const Projects = () => {
  return (
    <section id="projects" className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div>
        <h3 className="text-2xl font-semibold">
          Movie Review Sentiment Analysis
        </h3>
        <p>
          Developed a machine learning model using Python, Pandas, and
          Scikit-learn...
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">NLP Chatbot</h3>
        <p>
          Built a Natural Language Processing chatbot using React, Python...
        </p>
      </div>
    </section>
  );
};

export default Projects;
