import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
// import { TodoApp } from './8-useReducer/TodoApp';
import { MainApp } from './9-useContext/MainApp';
// import { MainApp } from './9-useContext/MainApp';
// import { FocusScreen } from './4-useRef/FocusScreen';
// import { Layout } from './5-useLayoutEffect/Layout';
// import { Memorize } from './6-memos/Memorize';
// import { MemoHook } from './6-memos/MemoHook';
// import { CallbackHook } from './6-memos/CallbackHook';
// import { Padre } from './7-tarea-memo/Padre';
// import { SimpleForm } from './2-useEffect/SimpleForm';
// import { FormWithCustomHook } from './2-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './3-examples/MultipleCustomHooks';
// import { CounterApp } from './1-useState/CounterApp';
// import { CounterWithCustomHook } from './1-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';
// import "./8-useReducer/intro-reducer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     {/* <React.StrictMode> */}
        <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)