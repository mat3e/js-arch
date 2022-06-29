import React from 'react';
import { Link } from '../link/Link';
import './Image.css';

interface ImageProps {
  url: string;
  label: string;
  link?: string;
}

export function Image({url, label, link = ""}: ImageProps) {
  if (link) {
    return (
        <div className="Image">
          <Link to={link}>
            <Img {...{url, label}}/>
          </Link>
        </div>
    );
  }
  return (
      <div className="Image">
        <Img {...{url, label}}/>
      </div>
  );
}

const Img = ({url, label}: ImageProps) => (
    <figure>
      {url && <img src={url} alt={label}/>}
      <figcaption>{label}</figcaption>
    </figure>
);
