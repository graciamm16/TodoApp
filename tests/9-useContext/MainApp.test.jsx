import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/9-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp/>', () => {
    test('Debe mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>   
        );

        // screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('Debe mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>   
        );

        // screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });

    test('Debe mostrar el AboutPage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>   
        );

        // screen.debug();
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
});