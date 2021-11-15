import React from 'react';
import {create, act} from 'react-test-renderer';
import App from '../App';


describe('<App /> Basics', () => {
  it('renders App', async () => {
    let tree
    act(() => {
      tree = create(<App />)
    })
    expect(tree.toJSON().children.length).toBe(1)
  });
  it('App renders correctly', async () => {
    let tree
    act(() => {
      tree = create(<App />);
    })
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
