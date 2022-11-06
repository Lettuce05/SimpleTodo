import {describe, expect, test} from 'vitest';
import {render, screen, getByText} from '@testing-library/react';
import App from './App';

describe('App test', () => {
  test('Should show Home list by default', () => {
    const {container} = render(<App />);
    // get h1 that holds current list title
    const h1 = container.getElementsByTagName('h1')[0];
    // test that h1 contains Home
    expect(getByText(h1, /Home/i)).toBeDefined();
  })
})