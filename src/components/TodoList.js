import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { Table } from 'semantic-ui-react';
import Footer from './Footer';

const TodoList = ({ todos, toggleTodo }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </Table.Body>
    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell colSpan="4">
          <Footer />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
