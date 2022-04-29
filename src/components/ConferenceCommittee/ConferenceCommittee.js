import React from "react";
import "./ConferenceCommittee.scss";
import image from '../../assets/PERS.png';

const data = [
  {
    title: "PATRON",
    members: [
      {
        name: "Prof. Baldev Setia",
        designation: "Director",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "CO-PATRON",
    members: [
      {
        name: "Prof. Siby John",
        designation: "Deputy Director",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "GENERAL CHAIR",
    members: [
      {
        name: "Prof. Shailendra Singh",
        designation: "Head of Department (CSE)",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "CONFERENCE-CHAIR",
    members: [
      {
        name: "Prof. T.C. Aseri",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Sanjeev Sofat",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Rajesh Bhatia",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "ORGANIZING-SECRETARY",
    members: [
      {
        name: "Dr. Sandeep Harit",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Padmavati",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "TECHNICAL-PROGRAM-CHAIRS",
    members: [
      {
        name: "Prof. Mayank Gupta",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Manish Kumar",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Amandeep Singh",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "PUBLICATION-CHAIRS",
    members: [
      {
        name: "Dr. Poonam Sain",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Sachin Chaudhary",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "PUBLICITY-CHAIRS",
    members: [
      {
        name: "Prof. Rajesh Bhatia",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Rupali Syal",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "FINANCE-CHAIRS",
    members: [
      {
        name: "Prof. Sudesh Rani",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Manish Kumar",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "WORKSHOP-CHAIRS",
    members: [
      {
        name: "Prof. Sanjeev Sofat",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Alka Jindal",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "HOSPITALITY-AND-LOGISTIC-CHAIRS",
    members: [
      {
        name: "Prof. T.C. Aseri",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Amandeep Kaur",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Aruna Kumar Pundir",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "WEB-MANAGEMENT-CHAIRS",
    members: [
      {
        name: "Prof. Shilpa",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Mamta",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
];

const data2 = {
  title: "NATIONAL-ADVISORY-BOARD",
  members: [
    {
      name: "Prof. Baldev Setia",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Rajeev Ahuja",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Ajit Kumar Chaturvedi",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Pushpak Bhattacharyya",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Prem Kalra",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Rajeev Tripati",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Lalit Kumar Awasthi",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. B.D. Chaudhary",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Jai Prakash Saini",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Yogesh Singh",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. P. K. Khosla",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Dr. Satish Kumar",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Mayank Dave",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Neeraj Tyagi",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Er. Prateek Kishore",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Chiranjeev Kumar",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Rama Krishna Challa",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Subramaniam Anantha Ramakrishna",
      designation: "",
      image: "",
      details: "",
    },
  ],
};

const ConferenceCommittee = () => {
  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {data.map((items, i) => {
          return (
            <div key={i} className="accordion-item">
              <h2
                className="accordion-header"
                id={`panelsStayOpen-heading${data.id}`}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#panelsStayOpen-collapse${data.id}`}
                  aria-expanded="false"
                  aria-controls={`panelsStayOpen-collapse${data.id}`}
                >
                  {items.title}
                </button>
              </h2>
              <div
                id={`panelsStayOpen-collapse${data.title}`}
                className="accordion-collapse collapse"
                aria-labelledby={`panelsStayOpen-heading${data.title}`}
              >
                <div className="accordion-body ConferenceComittee__grid">
                  {items.members.map((member, i) => {
                    return (
                      <div
                        key={i}
                        className="card ConferenceComittee__card accordion-button collapsed"
                        style={{ width: "18rem" }}
                        data-bs-toggle="collapse"
                        data-bs-target={`#panelsStayOpen-collapse${member.name}`}
                        aria-expanded="false"
                        aria-controls={`panelsStayOpen-collapse${member.name}`}
                      >
                        <img
                          className="card-img-top"
                          src={image}
                          alt="Card cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{member.name}</h5>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ConferenceCommittee__advisory">
        <h4 className="ConferenceCommittee__advisoryheading">{data2.title}</h4>
        <div className="ConferenceCommittee__items">
          {data2.members.map((items, i) => {
            return (
              <div key={i} className="ConferenceCommittee__item">
                <h5>{items.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ConferenceCommittee;
