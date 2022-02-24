import {render,screen} from '@testing-library/react';
import {Header} from './Header';
import { ProfileContext } from "../../context/Profile/Profile";
import { MemoryRouter } from "react-router-dom";

test('render', () => {


  const profile = {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

    render(<MemoryRouter><ProfileContext.Provider value={{profile}}><Header /></ProfileContext.Provider></MemoryRouter>)
    const linkElement = screen.getByText(/characters/i);
    const linkElement2 = screen.getByText(/locations/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
})