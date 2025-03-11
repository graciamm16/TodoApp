import {TodoList} from './TodoList';
import {TodoAdd} from './TodoAdd';
import { useTodo } from '../hooks';

export const TodoApp = () => {
    //useTodo()
    // todos, handleDeleteTodo, handleToggleTodo, handleNewTodo
    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo();

    return (
        <>
        <h1>TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                {/* TodoList */}
                <TodoList
                    todos = {todos} 
                    onDeleteTodo = {handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                {/* TodoAdd onNewTodo(todo)*/}
                <TodoAdd
                    onNewTodo = {handleNewTodo}
                />
            </div>
        </div>
        </>
    );
}