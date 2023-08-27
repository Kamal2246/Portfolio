import React from "react";
import "./Components.css";
import Certis from "./Certis";

const Skills = () => {
  const data = [
    {
      name: "AZ-900",
      platform: "Microsoft",
      link: "https://learn.microsoft.com/en-us/users/kamaldeepsharma-4130/credentials/90ace5f0a4961b3b",
      img: "/Images/az.PNG",
    },
    {
      name: "Data Science",
      platform: "365 DataScience",
      link: "https://learn.365datascience.com/certificates/DD-461565B8B1/",
      img: "/Images/ds.PNG",
    },
  ];
  return (
    <section className="Skills">
      <div className="certicards">
        {data.map((data1) => {
          return <Certis data={data1} key={data.indexOf(data1)} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
