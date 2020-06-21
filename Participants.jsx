import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Participant from "./Participant";
import Notification from "./Notification";
import DeleteConfirm from "./DeleteConfirm";
import AddParticipant from "./AddParticipant";
import NotFound from "./NotFound";

import "./Participants.css";

import subjects from "../subjects.js";

import participants from "../participants.js";

const Participants = (props) => {
  const subjectCode = props.match.params.subjectid;
  const exists = subjects.some(element => element.code === subjectCode);

  const [participantList, setParticipantList] = useState([]);
  const [deletePopup, setDeletePopup] = useState({
    show: false,
    id: undefined,
  });
  const [addParticipantShow, setAddParticipantShow] = useState(false);
  const [deletedParticipant, setDeletedParticipant] = useState(null);
  const [deleteParticipantShow, setDeleteParticipantShow] = useState(false);

  useEffect(() => {
    const localStorageRef = localStorage.getItem("ta-assist-participants");
    if(!exists) return;
    if (localStorageRef) {
      setParticipantList([...JSON.parse(localStorageRef)[subjectCode]]);
    } else {
      localStorage.setItem(
        "ta-assist-participants",
        JSON.stringify(participants)
      );
      setParticipantList([...participants[subjectCode]]);
    }
  }, []);

  useEffect(() => {
    if(!exists) return;
    const localStorageRef = localStorage.getItem("ta-assist-participants");
    if (localStorageRef) {
      localStorage.setItem(
        "ta-assist-participants",
        JSON.stringify({
          ...JSON.parse(localStorageRef),
          [subjectCode]: participantList,
        })
      );
    } else {
      localStorage.setItem(
        "ta-assist-participants",
        JSON.stringify({ ...participants, [subjectCode]: participantList })
      );
    }
  }, [participantList, subjectCode, exists]);

  if(!exists) return <NotFound />
  
  const subject = subjects.find((element) => element.code === subjectCode).name;

  const addParticipant = (participant) => {
    if(participantList.some(element => element.roll === participant.roll)) return;
    setParticipantList((prevValue) => {
      return [...prevValue, participant];
    });
  };

  const deleteParticipant = (id) => {
    // setDeletedParticipant({...participantList[id]})
    setParticipantList((prevValue) => {
      return prevValue.filter((element, index) => index !== id);
    });
    setDeleteParticipantShow(true);
    setTimeout(() => {
      setDeleteParticipantShow(false);
      setDeletedParticipant(null);
    }, 3000);
  };

  const showDeletePopup = (index) => {
    if (index !== undefined)
      setDeletedParticipant({ ...participantList[index] });
    setDeletePopup((prevValue) => {
      return { show: !prevValue.show, id: index };
    });
  };

  const showNotif = () => {
    setAddParticipantShow((prevValue) => true);
    setTimeout(() => setAddParticipantShow((prevValue) => false), 3000);
  };

  return (
    <>
      <h1 className="participants-heading">
        {subject + " "}
        <span className="participants-heading-code">({subjectCode})</span>
      </h1>
      <TransitionGroup component="div" className="participant">
        {participantList.map((element, index) => (
          <CSSTransition
            key={element.roll}
            classNames="participant"
            timeout={{ enter: 500, exit: 500 }}
          >
            <Participant
              key={element.roll}
              id={index}
              name={element.name}
              roll={element.roll}
              showDeletePopup={showDeletePopup}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <TransitionGroup component="div" className="delete-pop">
        {deletePopup.show && (
          <CSSTransition
            key={new Date().getTime()}
            classNames="delete-pop"
            timeout={{ enter: 500, exit: 500 }}
          >
            <DeleteConfirm
              deleteId={deletePopup.id}
              deleteParticipant={deleteParticipant}
              showDeletePopup={showDeletePopup}
              participant={{ ...deletedParticipant }}
              subject={subject}
              subjectCode={subjectCode}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
      <TransitionGroup component="div" className="notification-contain">
        {addParticipantShow && (
          <CSSTransition
            key={new Date().getTime()}
            classNames="notification-contain"
            timeout={{ enter: 250, exit: 250 }}
          >
            <Notification
              text={`All listed participants added to ${subject} (${subjectCode})`}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
      {/* )} */}

      {/* {deleteParticipantShow && ( */}
      <TransitionGroup component="div" className="notification-contain">
        {deleteParticipantShow && (
          <CSSTransition
            key={new Date().getTime()}
            classNames="notification-contain"
            timeout={{ enter: 250, exit: 250 }}
          >
            <Notification
              text={`Participant ${deletedParticipant.name} (${deletedParticipant.roll}) removed from ${subject} (${subjectCode})`}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
      {/* )} */}
      <AddParticipant addParticipant={addParticipant} />
      <div className="add-all-button-container">
        <div className="add-all-button" onClick={showNotif}>
          <i className="far fa-plus" /> Add All Participants
        </div>
      </div>
    </>
  );
};

export default Participants;
