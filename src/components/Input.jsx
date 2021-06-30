import React, { useState } from "react";
import Timeline from "./Timeline";

const Input = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [meows, setMeows] = useState([
    {
      id: "1",
      username: "Mac",
      message: "Meow World!",
      datestamp: `${new Date("2021-06-30T18:31:00.000Z").toLocaleString()}`,
    },
    {
      id: "2",
      username: "Koot",
      message: "Meow yourself, Mac!!",
      datestamp: `${new Date("2021-06-30T18:33:00.000Z").toLocaleString()}`,
    },
    {
      id: "3",
      username: "Mac",
      message: "BIRD ALERT! A robin near the left fence! #bigbird",
      datestamp: `${new Date("2021-06-30T18:33:30.000Z").toLocaleString()}`,
    },
    {
      id: "4",
      username: "Koot",
      message: "MEOW! Engaging tail-wag and deploying big eyes!",
      datestamp: `${new Date("2021-06-30T18:34:00.000Z").toLocaleString()}`,
    },
  ]);

  let submitMeow = () => {
    let date = new Date();
    let newMeows = {
      username: username,
      message: message,
      datestamp: date.toLocaleString(),
    };
    setMeows([...meows, newMeows]);
    setUsername("");
    setMessage("");
  };

  let meowsTimeline = meows.map((meow, id) => (
    <Timeline key={id} meow={meow} />
  ));

  const handleUsernameChange = (e) => {
    console.log("handleUsernameChange triggered");
    setUsername(e.target.value);
  };

  const handleMessageChange = (e) => {
    console.log("handleMessageChange triggered");
    setMessage(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault(); // Prevents form from refreshing page (& attempting to send form data)
    console.log("Submit Button was clicked!");
    submitMeow();
  };

  return (
    <div className="d-flex row my-3">
      <form className="form-group col-md-10 mt-3 d-flex justify-content-center align-items-center">
        <input
          className="col-sm-2 m-2"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          className="col-sm-4 m-2"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
        />
        <button
          className="btn btn-primary col-sm-2 m-2 mx-3 btn-sm"
          onClick={handleClick}
        >
          Meow!
        </button>
      </form>

      <div className="row col-10 m-auto justify-content-start align-content-start">{meowsTimeline}</div>
    </div>
  );
};

export default Input;
