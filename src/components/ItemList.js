import React from 'react';
import Card from './Card';

function ItemList({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
