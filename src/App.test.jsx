import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom';
import App from './App';

describe('this is a behaviour test', () => {
  it('testing for working links', async () => {
    render(
      <MemoryRouter
        initialEntries={['1/', '/2', '/3', '/4', '/5']}
        initialIndex={4}
      >
        <App />
      </MemoryRouter>
    );
    screen.debug();
  });
});
