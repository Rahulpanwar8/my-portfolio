import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// Variants for project card container
const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
};

// Variants for individual elements
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const techTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.3 } },
};

const Projects = () => {
  return (
    <div className="pb-4">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Project List */}
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is visible
            variants={projectCardVariants}
          >
            {/* Image Animation */}
            <motion.div
              className="w-full lg:w-1/4"
              variants={imageVariants}
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div className="w-full max-w-xl lg:w-3/4">
              {/* Title Animation */}
              <motion.h3
                className="mb-2 font-semibold text-2xl"
                variants={titleVariants}
              >
                {project.title}
              </motion.h3>

              {/* Description Animation */}
              <motion.p
                className="mb-4 text-stone-400"
                variants={descriptionVariants}
              >
                {project.description}
              </motion.p>

              {/* Technology Tags Animation */}
              <motion.div
                className="flex flex-wrap"
                initial="hidden"
                animate="visible"
                variants={projectCardVariants}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    variants={techTagVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
