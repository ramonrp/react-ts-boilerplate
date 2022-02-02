import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../app';

test('trial', () => {
  render(<App />);
  expect(screen.getByRole('heading').textContent).toMatchInlineSnapshot(
    `"Hello React and TS With Fast Refresh"`
  );
});
