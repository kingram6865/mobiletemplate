import React from 'react'
import {create, act} from 'react-test-renderer';
import Privacy from '../../screens/Privacy/Privacy'

// Mock navigation stack
const navigation = {
  navigate: jest.fn(),
}

describe('Privacy Screen Tests', () => {
  let tree
  act(() => {
    tree = create(<Privacy navigation={ navigation } />)
  })
  // console.log(JSON.stringify(tree))

  it('has a View component', async () => {
    const expected = "View"
    expect(tree.toJSON().type).toEqual(expected)
  })

  it('has 13 child components', async () => {
    expect(tree.toJSON().children.length).toBe(13)
  })

})
