import React from 'react';
import './Tile.css';

interface TileProps {
  name: string;
  value: string;
}

export function Tile({name, value}: TileProps) {
  return (
      <div className="Tile">
        {name} <strong>=</strong> {value}
      </div>
  );
}
