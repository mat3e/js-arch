import { createMemoryHistory } from 'history';
import React, { ReactElement } from 'react';
import { Router } from 'react-router-dom';
import { render, RenderResult } from '@testing-library/react';

export function renderWithRouter(ui: ReactElement): RenderResult {
  const history = createMemoryHistory();
  return render(
      <Router location={history.location} navigator={history}>
        {ui}
      </Router>
  );
}
