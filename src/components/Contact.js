import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-blue-600 dark:bg-blue-900 text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8 text-lg">
          I'm currently open to opportunities. Let’s connect and build something awesome!
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:jacobabraham615@gmail.com"
            className="underline text-lg hover:text-blue-200"
          >
            📧 jacobabraham615@gmail.com
          </a>
          <div className="flex gap-6 justify-center mt-4">
            <a
              href="https://github.com/iam-Jacoby"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-abraham-48a61b229"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
