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

        screen.debug();
    });
});