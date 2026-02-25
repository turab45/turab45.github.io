// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "I have selected a few of my research papers, for updated please visit my [Google Scholar](https://scholar.google.com/citations?user=LD8VtagAAAAJ).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Below is my updated CV, also attached in .pdf format.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-internship-at-university-of-galway-ireland-under-the-supervision-of-prof-takfarinas-saber",
          title: 'Started internship at University of Galway, Ireland under the supervision of Prof Takfarinas...',
          description: "",
          section: "News",},{id: "news-started-emjmd-cosi-program-at-ntnu-norway",
          title: 'Started EMJMD COSI program at NTNU, Norway',
          description: "",
          section: "News",},{id: "news-started-second-semester-at-university-jean-monnet-france",
          title: 'Started second semester at University Jean Monnet, France',
          description: "",
          section: "News",},{id: "news-started-internship-at-colourlab-ntnu-under-the-european-project-perceive-horizon",
          title: 'Started internship at Colourlab, NTNU under the European project Perceive-Horizon',
          description: "",
          section: "News",},{id: "news-started-machine-learning-summer-school-at-oxford-university-organized-by-ai-for-global-goals",
          title: 'Started Machine learning summer school at Oxford University organized by AI for Global...',
          description: "",
          section: "News",},{id: "news-started-third-semester-at-university-of-eastern-finland",
          title: 'Started third semester at University of Eastern Finland',
          description: "",
          section: "News",},{id: "news-selected-masters-thesis-at-hubert-curien-laboratory-ujm-france-under-the-supervision-of-prof-alain-tremeau",
          title: 'Selected masters thesis at Hubert Curien Laboratory, UJM France under the supervision of...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-awesome-healthcare-agents",
          title: 'awesome-healthcare-agents',
          description: "Curated list of AI Agents, frameworks, datasets, and research papers focused on Healthcare.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/awesome-healthcare-agents/";
            },},{id: "projects-early-ad-detection",
          title: 'Early-AD-detection',
          description: "Early Alzheimer&#39;s disease detection using ensembling. Medical ML.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/early-ad-detection/";
            },},{id: "projects-explainable-ml-for-parkinson-39-s-detection",
          title: 'Explainable ML for Parkinson&amp;#39;s Detection',
          description: "Explainable Machine Learning for Parkinson&#39;s Disease Detection Using Speech Biomarkers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/explainable-ml-parkinson/";
            },},{id: "projects-gen-and-agent-ai",
          title: 'gen-and-agent-ai',
          description: "Space to learn and master GenAI and Agentic AI. Tutorials and notebooks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gen-and-agent-ai/";
            },},{id: "projects-img2patch",
          title: 'img2patch',
          description: "Turn any image to patches. Simple web tool for image patching.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/img2patch/";
            },},{id: "projects-normalization-plugin",
          title: 'Normalization-Plugin',
          description: "Normalization plugin for hyperspectral images in Spectronon software. Multispectral, hyperspectral imaging.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/normalization-plugin/";
            },},{id: "projects-pulse",
          title: 'PULSE',
          description: "A Persistent Agentic Framework for Context-Aware Healthcare Dialogue Systems. RAG, agents, medical AI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pulse/";
            },},{id: "projects-semantic-coactivationgraph",
          title: 'semantic_coactivationgraph',
          description: "Semantic coactivation graph project. Python.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/semantic-coactivation-graph/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
