import stl from "./FeedbackFormHock.module.css";
import React, { useState, useEffect } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(storageKey)) ?? defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  return [state, setState];
};

const FeedbackFormHock = () => {
  const [name, setName] = useLocalStorage("name", '');
  const [feadback, setFeadback] = useLocalStorage("feadback", '');

  const handleInputClick = (evt) => {
    switch (evt.currentTarget.name) {
      case "name":
        setName(evt.currentTarget.value);

        break;

      case "feadback":
        setFeadback(evt.currentTarget.value);

        break;

      default:
        return;
    }

    // if (evt.currentTarget.name === 'name') {
    //     setName(evt.currentTarget.value)
    // }

    // if (evt.currentTarget.name === 'feadback') {
    //     setFeadback(evt.currentTarget.value)
    // }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setName("");
    setFeadback("");
  };

  return (
    <div>
      <form className={stl.Feedback__form} onSubmit={formSubmit}>
        <label className={stl.Feedback__label}>
          <input
            className={stl.Feedback__input}
            type="text"
            value={name}
            name="name"
            onChange={handleInputClick}
          />
          Name
        </label>
        <textarea
          className={stl.Feedback__area}
          name="feadback"
          value={feadback}
          onChange={handleInputClick}
        ></textarea>
        <button className={stl.Feedback__btn} type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default FeedbackFormHock;

