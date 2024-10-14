import { useState, useEffect } from "react";
import initialItems from "../../../initialItems";
import ListItems from "../../../components/ListItems";

const List = () => {
  const [items, setItems] = useState([]);

  //retrieve items from local storage or set initial items if none is saved
  useEffect(() => {
    const storedItems = localStorage.getItem("listItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(initialItems);
      localStorage.setItem("listItems", JSON.stringify(initialItems));
    }
  }, []);

  //sort items based on timestamp in descending order
  const sortedItems = [...items].sort((a, b) =>
    b.timestamp.localeCompare(a.timestamp)
  );

  return <ListItems sortedItems={sortedItems} />;
};

export default List;
