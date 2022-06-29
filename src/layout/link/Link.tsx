import React from 'react';
import { Link as OriginalLink } from 'react-router-dom';
import './Link.css';

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export const Link = ({to, children}: LinkProps) => (<OriginalLink className="Link" to={to}>{children}</OriginalLink>)
