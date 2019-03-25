import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { Container, Menu } from 'semantic-ui-react';
const App = () => (
  <>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          Redux todo
        </Menu.Item>
      </Container>
    </Menu>
    <Container style={{ marginTop: '7em' }}>
      <AddTodo />
      <VisibleTodoList />
    </Container>
  </>
);

export default App;
