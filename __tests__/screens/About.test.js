import React from 'react'
import {create, act} from 'react-test-renderer';
import About from '../../screens/About/About'

// Mock navigation stack
const navigation = {
  navigate: jest.fn(),
}


describe('About Screen Tests', () => {
  let tree
  act(() => {
    tree = create(<About navigation={navigation} />)
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
