import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const Todo = ({ onClick, completed, text }) => (
  <Table.Row>
    <Table.Cell
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </Table.Cell>
  </Table.Row>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
