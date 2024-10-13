const ListItems = ({ sortedItems }) => {
  return (
    <div className="list-container">
      <ul className="item-list">
        {sortedItems.map((item, index) => (
          <li key={index} className="list-item">
            {item.name} {new Date(item.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
