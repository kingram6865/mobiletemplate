import React from 'react'
import {create, act} from 'react-test-renderer';
import Welcome from '../../screens/Welcome/Welcome'

// Mock navigation stack
const navigation = {
  navigate: jest.fn(),
}

describe('Welcome Screen Tests', () => {
  let tree
  act(() => {
    tree = create(<Welcome navigation={navigation} />)
  })
  // console.log(JSON.stringify(tree))

  it('has a View component', async () => {
    const expected = "View"
    expect(tree.toJSON().type).toEqual(expected)
  })

  it('has 14 child components', async () => {
    expect(tree.toJSON().children.length).toBe(14)
  })

})
