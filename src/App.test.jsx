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
      <ContextProvider>
        <MemoryRouter
          //load an array of url's with ID to choose from.
          initialEntries={[
            '/char/1',
            '/char/2',
            '/char/3',
            '/char/4',
            '/char/5',
          ]}
          //select character four of the array
          initialIndex={3}
        >
          <App />
        </MemoryRouter>
      </ContextProvider>
    );
    // test and check that all parameters of Beth Smith are met
    const bethName = await screen.findByText('Beth Smith');
    expect(bethName).toBeInTheDocument();

    const bethGender = await screen.findByText('Female');
    expect(bethGender).toBeInTheDocument();

    const bethRace = await screen.findByText('Human');
    expect(bethRace).toBeInTheDocument();

    screen.debug();
  });
});
