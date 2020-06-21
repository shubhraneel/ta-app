import React from "react";
import SubjectCard from "./SubjectCard";

import subjects from "../subjects.js";

const Subjects = (props) => {
  const openSubject = (event, code) => {
    event.preventDefault();
    props.history.push(`/participants/${code}`)
  }

  return subjects.map((element) => (
    <SubjectCard
      key={element.code}
      subject={element.name}
      code={element.code}
      students={element.students}
      image={element.image}
      credits={element.credits}
      semester={element.semester}
      openSubject={openSubject}
    />
  ));
};

export default Subjects;
