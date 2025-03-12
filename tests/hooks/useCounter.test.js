import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react";

describe('Pruebas en el useCounter', () => {
    test('Debe retornar los valores por defecto', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe generar el counter con el valor de 100', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(100);
    });

    test('Debe incrementar el contador', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, increment} = result.current;

        act(() => {
            increment(); //Valor counter = 100, incremento = 101
            increment(2); //Sigue llamando al valor de 100. Por tanto, tenemos 102
        });

        expect(result.current.counter).toBe(103);
    });

    test('Debe decrementar el contador', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement} = result.current;

        act(() => {
            decrement(); //Valor counter = 100, incremento = 101
            decrement(2); //Sigue llamando al valor de 100. Por tanto, tenemos 102
        });

        expect(result.current.counter).toBe(97);
    });

    test('Debe resetear el contador', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, reset} = result.current;

        act(() => {
            reset(); //Valor counter = 100, incremento = 101
        });

        expect(result.current.counter).toBe(100);
    });
});