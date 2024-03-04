/*import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <form className={styles.form}>
        <input type="text" name="name" placeholder="Nume" />
        <input type="text" name="name" placeholder="Email" />
        <textarea className="textarea" placeholder="Mesaj" name="postContent" rows={15} cols={30} />
        <button type="submit">Trimite</button>
      </form>
    </div>
  );
};

export default Contact;*/

import { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.scss";

function Contact() {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendMail = () => {
    axios
      .get("http://localhost:5000", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        //success
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };

  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Recipient Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          className="textarea"
          rows={15}
          cols={30}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMail}>Send Email</button>
      </form>
    </div>
  );
}

export default Contact;
