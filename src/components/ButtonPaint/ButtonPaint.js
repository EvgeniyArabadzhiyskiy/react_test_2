import "./ButtonPaint.css";
import classNames from "classnames";

function ButtonPaint({ type = "button", disabled, label }) {
  const buttonClassNames = classNames("ButtonPaint",{
    "Button-disabled": disabled
  })

  // const btnClasses = ["ButtonPaint"];
  // if (disabled) {
  //   btnClasses.push("Button-disabled");
  // }

  return (
    <button
      // className={btnClasses.join(" ")}
      className={buttonClassNames}
      style={{ backgroundColor: "red" }}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default ButtonPaint;
