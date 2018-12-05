import React from "react";
import Grocery from './Grocery';

const List = ({items, name, groceryClick}) => (
  <div>
    <h1 className="title">{ name }</h1>
    <ul>
      { items.map(item => <Grocery key={item.id} {...item} groceryClick={groceryClick} />) }
    </ul>
  </div>
)

export default List;