import PropTypes from "prop-types";

const ListItems = ({ sortedItems }) => {
  return (
    <div className="item-list-container">
      <ul className="item-list">
        {sortedItems.map((item, index) => (
          <li key={index} className="list-item">
            <span className="list-item-name">{item.name}</span>{" "}
            <span>{new Date(item.timestamp).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

ListItems.propTypes = {
  sortedItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};

ListItems.defaultProps = {
  sortedItems: [],
};

export default ListItems;
