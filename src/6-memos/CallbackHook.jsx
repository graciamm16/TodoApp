import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    
    const incrementFather = useCallback((value) => {
        setCounter((c) => c + value);
    }, []);

    //Sólo se dispara cuando cambia el padre o la función.
    useEffect(() => {
        // incrementFather();
    }, [incrementFather]);
    
    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // }
    
    return (
        <>
            <h1>useCallbackHook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={incrementFather}/>
        </>
    );
}