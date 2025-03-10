import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const {counter, increment, reset, decrement} = useCounter();

    return(
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr/>
            <button
                className="btn btn-primary"
                //Incrementar de 2 en 2
                onClick={() => increment(2)}
            >+1</button>
            <button
                className="btn btn-primary"
                onClick={reset}
            >Reset</button>
            <button 
                className="btn btn-primary"
                //Decrementar de 2 en 2
                onClick={ () => decrement(2)}
            >-1</button>
        </>
    );
}
