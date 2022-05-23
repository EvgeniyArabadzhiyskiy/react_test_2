import Painting from "../Painting/Painting";
import PropTypes from "prop-types";

function PaintingList({ items }) {
  return (
    <ul>
      {items.map((painting) => {
        return (
          <li key={painting.id}>
            <Painting
              imageUrl={painting.url}
              title={painting.title}
              authorTag={painting.author.tag}
              authorUrl={painting.author.url}
              quantity={painting.quantity}
              price={painting.price}
            />
          </li>
        );
      })}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default PaintingList;


