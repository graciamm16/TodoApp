// import { memo } from "react";
import React from 'react';

//Memorizar un componente y sus resultados para evitar su recalculación
export const Small = React.memo(({value}) => {
    console.log('Me volví a dibujar :(');

    return (
        <small>{value}</small>
    );
})