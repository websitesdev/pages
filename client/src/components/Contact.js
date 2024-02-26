import React from 'react'
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <form className={styles.form}>
        <label>
          Nume:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <label>
          Mesaj:
          
        </label>
        <textarea className="textarea" name="postContent" rows={15} cols={30} />
        <button type="submit">Trimite</button>
      </form>
    </div>
  )
}

export default Contact