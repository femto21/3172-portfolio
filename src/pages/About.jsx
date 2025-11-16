import React from "react";

const About = () => {
  return (
    <section id="aboutpage" className="mt-8 p-8">
      <div className="text-4xl w-fit m-auto mb-4">
        <div className="">About Me</div>
      </div>

      <p className="p-8 text-lg leading-8 text-gray-200">
        My name is Arpit Gahlot, and I am a third-year Computer Science student
        at Dalhousie University. I’m passionate about building software, solving
        complex problems, and working with modern technologies. Over the years I
        have developed a strong foundation in programming languages such as
        <span className="font-semibold text-purple-300">
          {" "}
          Java, Python, JavaScript, TypeScript, C#, C/C++, and PHP
        </span>
        .
        <br />
        <br />I enjoy working across the entire stack and have experience with
        frameworks and backend technologies like
        <span className="font-semibold text-purple-300">
          {" "}
          Node.js, Express.js, Next.js, .NET, Vue.js, JUnit, and Aseba
        </span>
        . On the frontend, I frequently work with modern libraries and tools
        including
        <span className="font-semibold text-purple-300">
          {" "}
          React, Three.js, TailwindCSS, DaisyUI, Shadcn UI, Pygame, Clerk, and
          the OpenAI API
        </span>
        .
        <br />
        <br />I also have hands-on experience with essential developer tools
        such as
        <span className="font-semibold text-purple-300">
          {" "}
          Git/GitHub/GitLab, Docker, Postman, MongoDB, AWS, Azure, and Google
          Cloud
        </span>
        . My professional background includes Full Stack Development,
        Cybersecurity, and Data Engineering through my internship at
        Commissionaires Nova Scotia, as well as freelance full stack development
        projects.
        <br />
        <br />
        Outside of academics and work, I’m passionate about cooking, working
        out, and exploring new technologies—especially in cloud computing and
        Artificial Intelligence. I’m always looking for opportunities to learn,
        grow, and build impactful software.
      </p>
    </section>
  );
};

export default About;
