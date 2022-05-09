import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ContextProvider } from './context/BasicContext';

describe('this is a test for linking pages', () => {
  it('linking test', async () => {
    render(
      <ContextProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ContextProvider>
    );
    //1) find main
    const one = await screen.findByText('Main');
    //2)click main
    userEvent.click(one);

    //3 load state test
    screen.findByText(/loadingpage/i);

    //4 find Morty Smith
    const four = await screen.findByText('Morty Smith');
    //5Click Morty Smith
    userEvent.click(four);

    //6 Find gender is male
    const six = await screen.findByText('Male');
    //7 Confirm gender is male
    expect(six).toBeInTheDocument();
    screen.debug();
  });
});

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
