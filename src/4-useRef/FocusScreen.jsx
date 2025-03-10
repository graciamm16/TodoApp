import { useRef } from "react";

export const FocusScreen = () => {
    //Permite mantener referencias y cuando esa referencia cambia no disparemos una rerenderización del componente
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr/>

            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            <button 
                className="btn btn-primary mt-2"
                onClick={onClick}
            >
                Set Focus
            </button>
        </>
    );
}
