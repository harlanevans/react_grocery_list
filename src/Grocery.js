import React from 'react';

const Grocery  = ({ id, name, complete, groceryClick }) => (
  <li className="listed"
  style={ complete ? { ...styles.grocery, ...styles.complete } : styles.grocery }
  onClick={ () => groceryClick(id)}
  >
  {name}
  </li>
);

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: 'red', textDecoration: 'line-through' },
};

export default Grocery;