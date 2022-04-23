import "./CallForPapersNavbar.scss";

const data = [
    {
        title: "Computing",
        subparts: [
            "High Performance Computing",
            "Distributed and parallel systems",
            "Cloud Computing",
            "Edge Computing",
            "Fog Computing",
            "Human-centered Computing",
        ],
    },
    {
        title: "Artificial Intelligence",
        subparts: [
            "Fuzzy Logic",
            "Expert Systems",
            "Agents and Multi-agent Systems",
            "Computational Optimization",
            "Bio inspired algorithms",
        ],
    },
    {
        title: "Machine Learning",
        subparts: [
            "Deep Learning",
            "Neural Networks",
            "Natural Laguage Processing",
            "Data Mining",
            "Data Science",
            "GANs",
        ],
    },
    // {
    //     title: "Software Engineering",
    //     subparts: ["Recommender systems", "Semantic web analysis"],
    // },
    {
        title: "Machine Vision",
        subparts: [
            "Human Computer Interaction",
            "Computer Vision",
            "Image and Video Processing",
            "Medical Diagnosis",
            "Augmented Reality",
            "Virtual Reality",
        ],
    },
    {
        title: "Communication",
        subparts: [
            "Networking",
            "Wireless and Mobile Communication",
            "Signal Processing",
            "Internet of Things",
            "Cyber Physical Systems",
            "Wireless Sensor Networks",
            "Software defined networks",
            "Industry 4.0",
            "Security and Privacy",
            "Biometric security",
            "Cyber security",
        ],
    },
    {
        title: "Futuristic Applications",
        subparts: [
            "Sustainable cities & Societies",
            "Smart Grids and Energy Networks",
            "Ambient Assisted Living",
            "Smart Healthcare",
        ],
    },
    // { title: "Intelligent Transportation Systems", subparts: [] },
];

const CallForPapersNavbar = () => {
    return (
        <div className="paper-navbar__main">
            {data.map(({ title, subparts }) => {
                return (
                    <div key={title} className="paper-navbar__item">
                        <p className="paper-navbar__title">{title}</p>
                        <div className="paper-navbar__subpart">
                            {subparts?.map((subpart) => {
                                return (
                                    <p
                                        className="paper-navbar__option"
                                        key={subpart}
                                    >
                                        {subpart}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CallForPapersNavbar;