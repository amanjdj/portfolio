import wildoasis from "../assets/portfolio/wildoasis.jpg";
import pizza from "../assets/portfolio/pizza.jpg";
import analytics from "../assets/portfolio/analytics.jpg";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: wildoasis,
      link: "https://wildoasisbyaman.netlify.app/",
      repo: "https://github.com/amanjdj/WildOasis",
    },
    {
      id: 2,
      src: pizza,
      link: "https://fastreactcobyaman.netlify.app/",
      repo: "https://github.com/amanjdj/fast-react-co",
    },
    {
      id: 3,
      src: analytics,
      link: "https://useranalyticsbyaman.netlify.app/",
      repo: "https://github.com/amanjdj/userAnalytics",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
