import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';
function TodoForm({ addTodo }) {
    const [text, setText] = useState('');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    };

    const clearInputText = text.length;
    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="Enter new todo" value={text} onChange={(e) => setText(e.target.value)} />
                <Button title="Submit" type="Submit" disabled={!clearInputText}>
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default TodoForm;
