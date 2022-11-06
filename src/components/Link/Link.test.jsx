import {describe, expect, test} from 'vitest';
import {render, screen, getByText} from '@testing-library/react';
import { NIL as NIL_UUID } from 'uuid';
import Link from './Link';

describe('Link test', () => {
  test('Link should display list name of given list prop', () => {
    let list = {
      id: 'test',
      name: 'Test',
      color: 'red',
    }
    render(<Link list={list}/>);
    
    // test that Link displays name correctly
    expect(screen.getByText('Test')).toBeDefined();
  });

  test('Trash should not be displayed for Home list', () => {
    let list = {
      id: NIL_UUID,
      name: 'Home',
    }
    const {container} = render(<Link list={list}/>);
    
    // test that trash button is null
    expect(container.querySelector('.btn-trash')).toBeNull();
  });

  test('Trash should be displayed for any list that is not the Home list', () => {
    let list = {
      id: "testlist",
      name: 'Test List',
    }
    const {container} = render(<Link list={list}/>);
    
    // test that trash button is shown (defined)
    expect(container.querySelector('.btn-trash')).toBeDefined();
  });

});