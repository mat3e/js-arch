import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../common';
import { Main } from '../Main';

test('renders links', () => {
  // given
  renderWithRouter(<Main/>);

  // when
  const home = screen.getByText(/^home$/i);
  const projects = screen.getByText(/^projects$/i);
  const tags = screen.getByText(/^tags$/i);

  // then
  expect(home).toBeInTheDocument();
  expect(projects).toBeInTheDocument();
  expect(tags).toBeInTheDocument();
});
