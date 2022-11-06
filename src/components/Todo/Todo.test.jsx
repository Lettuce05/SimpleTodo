import {describe, expect, test} from 'vitest';
import {render, screen, getByText} from '@testing-library/react';
import Todo from './Todo';

describe('Todo test', () => {
  test('Todo should display text passed through todo prop', () => {
    let todo = {
      id: 'testtodo',
      listId: 'testList',
      text: 'Test Todo',
      completed: false,
    }
    render(<Todo todo={todo}/>);
    
    // test that Todo displays name correctly
    expect(screen.getByText('Test Todo')).toBeDefined();
  });

  test('Checkbox should be checked if todo is completed', () => {
    let todo = {
      id: 'testtodo',
      listId: 'testList',
      text: 'Test Todo',
      completed: true,
    }
    const {container} = render(<Todo todo={todo}/>);
    
    // test that Todo checkbox is checked
    expect(container.getElementsByTagName('input')[0].checked).toBeTruthy();
  });

  test('Checkbox should not be checked if todo is not completed', () => {
    let todo = {
      id: 'testtodo',
      listId: 'testList',
      text: 'Test Todo',
      completed: false,
    }
    const {container} = render(<Todo todo={todo}/>);
    
    // test that Todo checkbox is not checked
    expect(container.getElementsByTagName('input')[0].checked).toBeFalsy();
  });
});