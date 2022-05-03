import React from "react";
import "./KeyNotes.css";

const data = [
  {
    name: "Kalyanmoy Deb",
    designations: [
      {
        designation: "Indian Computer Scientist",
      },
      {
        designation: "University Distinguished Professor, Koenig Endowed Chair",
      },
      {
        designation: "Michigan State University",
      },
    ],
    image: "https://mica.org.in/2022/wp-content/uploads/2022/02/dev2.jpg",
    authorBio:
      "Professor Kalyanmoy Deb is an Indian computer scientist. Deb is the Herman E. & Ruth J. Koenig Endowed Chair in Communication Systems in the Department of Electrical and Computing Engineering at Michigan State University. Deb is also a Professor in the Department of Computer Science and Engineering and the Department of Mechanical Engineering at Michigan State University. Deb established the Kanpur Genetic Algorithms Laboratory at IIT Kanpur in 1997 and the Computational Optimization and Innovation (COIN) Laboratory at Michigan State in 2013. In 2001, Wiley published a textbook written by Deb titled Multi-Objective Optimization using Evolutionary Algorithms as part of its series titled “Systems and Optimization”.In an analysis of the network of authors in the academic field of evolutionary computation by Carlos Cotta and Juan-Julián Merelo, Deb was identified as one of the most central authors in the community and was designated as a “sociometric superstar” of the field. Deb has several honors, including the Shanti Swarup Bhatnagar award in engineering sciences (2005), the Thomson Citation Laureate award for his highly cited research in computer science (1996–2005), and the MCDM Edgeworth-Pareto Award for a record of creativity to the extent that the field of multiple-criteria decision making would not exist in its current form in 2008. Deb has been awarded the Infosys Prize in Engineering and Computer Science from Infosys Limited, Bangalore, India for his contributions to evolutionary multi-objective optimization, which have led to “advances in non-linear constraints, decision uncertainty, programming and numerical methods, the computational efficiency of large-scale problems, and optimization algorithms.” He is also a recipient of the 2012 TWAS Prize from the World Academy of Sciences. He has published over 550 research papers with a Google Scholar citation of over 1,71,135 with h-index 128.  More information about his research contribution can be found at https://www.coin-lab.org. (Source: https://en.wikipedia.org/wiki/Kalyanmoy_Deb)",
  },
  {
    name: "Kalyanmoy Deb",
    designations: [
      {
        designation: "Indian Computer Scientist",
      },
      {
        designation: "University Distinguished Professor, Koenig Endowed Chair",
      },
      {
        designation: "Michigan State University",
      },
    ],
    image: "https://mica.org.in/2022/wp-content/uploads/2022/03/raj.jpeg",
    authorBio:
      "Professor Kalyanmoy Deb is an Indian computer scientist. Deb is the Herman E. & Ruth J. Koenig Endowed Chair in Communication Systems in the Department of Electrical and Computing Engineering at Michigan State University. Deb is also a Professor in the Department of Computer Science and Engineering and the Department of Mechanical Engineering at Michigan State University. Deb established the Kanpur Genetic Algorithms Laboratory at IIT Kanpur in 1997 and the Computational Optimization and Innovation (COIN) Laboratory at Michigan State in 2013. In 2001, Wiley published a textbook written by Deb titled Multi-Objective Optimization using Evolutionary Algorithms as part of its series titled “Systems and Optimization”.In an analysis of the network of authors in the academic field of evolutionary computation by Carlos Cotta and Juan-Julián Merelo, Deb was identified as one of the most central authors in the community and was designated as a “sociometric superstar” of the field. Deb has several honors, including the Shanti Swarup Bhatnagar award in engineering sciences (2005), the Thomson Citation Laureate award for his highly cited research in computer science (1996–2005), and the MCDM Edgeworth-Pareto Award for a record of creativity to the extent that the field of multiple-criteria decision making would not exist in its current form in 2008. Deb has been awarded the Infosys Prize in Engineering and Computer Science from Infosys Limited, Bangalore, India for his contributions to evolutionary multi-objective optimization, which have led to “advances in non-linear constraints, decision uncertainty, programming and numerical methods, the computational efficiency of large-scale problems, and optimization algorithms.” He is also a recipient of the 2012 TWAS Prize from the World Academy of Sciences. He has published over 550 research papers with a Google Scholar citation of over 1,71,135 with h-index 128.  More information about his research contribution can be found at https://www.coin-lab.org. (Source: https://en.wikipedia.org/wiki/Kalyanmoy_Deb)",
  },
];

const KeyNotes = () => {
  return (
    <div className="KeyNotes__main">
      <h4 className="KeyNotes__mainHeading">KeyNotes Speakers</h4>
      <div className="KeyNotes__flexMain">
        <div className="KeyNotes__flexLeft">
          {data.map((items, i) => {
            return (
              <div key={i} className="KeyNotes__Card">
                <div className="KeyNotes__cardUpper">
                  <div className="cardUpper__left">
                    <div className="cardUpper__image">
                      <img className="cardUpper__imageItem" src={items.image} alt="" />
                    </div>
                  </div>
                  <div className="cardUpper__right">
                    <h5 className="cardUpper__name">{items.name}</h5>
                    <div className="cardUpper__designations">
                      {items.designations.map((desi, i) => {
                        return (
                          <h6 key={i} className="cardUpper__designation">
                            {desi.designation}
                          </h6>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="KeyNotes__cardDown">
                  <h3 className="cardDown__heading">Author's bio</h3>
                  <p>{items.authorBio}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="KeyNotes__flexRight"></div>
      </div>
    </div>
  );
};

export default KeyNotes;
