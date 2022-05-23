const Buttons = ({ options, onMakeClassOptions, onMakeIndex }) => (
  <div>
    {options.map((option, index) => {
      return (
        <button
          key={option.color}
          className={onMakeClassOptions(index)}
          style={{
            backgroundColor: option.color,
            color: "black",
            border: "2px solid black",
          }}
          onClick={() => onMakeIndex(index)}
        >
          {option.label}
        </button>
      );
    })}
  </div>
);

export default Buttons;
