import React from 'react'
import {create, act} from 'react-test-renderer';
import App from '../../App'

describe('Routing', () => {
  let tree
  act(() => {
    tree = create(<App />)
  })
  it('App has 1 child', async () => {
    expect(tree.toJSON().children.length).toBe(1)
  })
})