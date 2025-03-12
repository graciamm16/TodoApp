import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/3-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {
    const mockIncrement = jest.fn();
    
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Información de Pokemon'));

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        // console.log(nextButton.disabled);
        expect(nextButton.disabled).toBeTruthy();

        // screen.debug();
    });

    test('Debe mostrar un pokemon', () => {
        useFetch.mockReturnValue({
            data: {
                name: 'Pikachu',
                sprites: {
                    front_default: 'front_default_url',
                    front_shiny: 'front_shiny_url',
                    back_default: 'back_default_url',
                    back_shiny: 'back_shiny_url'
                }
            },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        expect(screen.getByText((content, element) => content.includes('Pikachu'))).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        expect(nextButton.disabled).toBeFalsy();
    });

    test('Debe llamar a la función de incrementar', () => {
        useFetch.mockReturnValue({
            data: {
                name: 'Pikachu',
                sprites: {
                    front_default: 'front_default_url',
                    front_shiny: 'front_shiny_url',
                    back_default: 'back_default_url',
                    back_shiny: 'back_shiny_url'
                }
            },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });

    // test('Debe mostrar un mensaje de error', () => {
    //     useFetch.mockReturnValue({
    //         data: null,
    //         isLoading: false,
    //         hasError: true
    //     });

    //     render(<MultipleCustomHooks/>);
    //     expect(screen.getByText(/Error fetching data/i)).toBeTruthy();
    // });
});