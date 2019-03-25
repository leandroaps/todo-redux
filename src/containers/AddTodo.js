import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <div class="ui action input">
          <input type="text" ref={node => (input = node)} />
          <button class="ui teal icon right labeled button" type="submit">
            <i aria-hidden="true" class="add square icon" />
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
