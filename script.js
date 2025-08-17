const projectsData = [
  {
    title: "Tribute Page",
    image: "images/tribute-page.png",
    link: "https://lanuyenuit.github.io/tribute-page/",
    alt: "Tribute_Page",
    description: "A tribute page showcasing a historical figure."
  },
  {
    title: "Portfolio",
    image: "images/portfolio.png",
    link: "https://lanuyenuit.github.io/portfolio/",
    alt: "Portfolio",
    description: "My personal portfolio website."
  },
  {
    title: "Product Landing Page",
    image: "images/product-landing-page.png",
    link: "https://lanuyenuit.github.io/product-landing-lage/",
    alt: "Product_Landing_Page",
    description: "A product landing page to market a product of my choice."
  },
  {
    title: "Technical Documentation Page",
    image: "images/technical-documentation-page.png",
    link: "https://lanuyenuit.github.io/technical-documentation-page/",
    alt: "Technical_Documentation_Page",
    description: "A technical documentation page to serve as instruction or reference for a topic."
  }
]


const projects = document.querySelector('#projects-list');

if (projects) {
  projects.innerHTML = projectsData
  .map(project => {
    return `
          <a href=${project.link} target="_blank">
            <img src=${project.image} alt=${project.alt} class="project-image">
            <p>${project.title}</p>
          </a>`
  })
  .join('');
} else {
  console.error("Projects list element not found.");
}
