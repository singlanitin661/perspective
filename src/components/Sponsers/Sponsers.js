import React from "react";
import demo from "../../assets/sponser-demo.png";
import './Sponsers.scss';

const data = [
    {
        name: "PEC",
        image: "",
        description: "",
    },
    {
        name: "PEC",
        image: "",
        description: "",
    },
    {
        name: "PEC",
        image: "",
        description: "",
    },
];

const Sponsers = () => {
    return (
        <div className="about_root">
            <p className="about_head">Sponsored By</p>
            <div className="sponser_list">

            {data.map((item) => (
              <SponserCard item={item} />
              ))}
              </div>
        </div>
    );
};

export default Sponsers;

const SponserCard = ({ item }) => {
    return (
        <div className="sponser_card">
            <img src={demo} alt="" className="sponser_image" />
            <p className="sponser_title">{item.name}</p>
            <p>{item.description}</p>
        </div>
    );
};
