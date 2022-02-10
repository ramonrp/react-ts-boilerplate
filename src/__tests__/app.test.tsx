import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../app';
import userEvent from '@testing-library/user-event';
test('trial', () => {
  render(<App />);
  expect(screen.getByRole('heading').textContent).toMatchInlineSnapshot(
    `"Hello React and TS With Fast Refresh"`
  );
  userEvent.click(screen.getByRole('heading'));
});
