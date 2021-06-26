import React from "react";

const ListGroup = (props) => {
  const { items, onItemSelect } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className="list-group-item"
          key={item._id}
          onClick={() => onItemSelect(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
