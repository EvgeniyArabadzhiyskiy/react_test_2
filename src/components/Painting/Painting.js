import PropTypes from "prop-types";
import "./Painting.css";
import defaultImage from "./default.jpg";

function Painting({
  imageUrl = defaultImage,
  title = "Неизвестно",
  authorTag,
  authorUrl,
  price,
  quantity,
}) {
  return (
    <div className="Painting">
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор:
        <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? "Заканчивается" : "Есть в наличии"}</p>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Painting;
