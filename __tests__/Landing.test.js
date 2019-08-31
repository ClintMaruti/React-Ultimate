import Landing from '../src/components/Landing/index'
import { exportAllDeclaration } from '@babel/types';

describe('<Landing /> rendering', () => {
  it('should render one <h1>', () => {
      let wrapper = shallow(<Landing />)
      expect(wrapper.children('h1')).toHaveLength(1)
  })

  it('should render one <p>', () => {
    let wrapper = shallow(<Landing />)
    expect(wrapper.children('p')).toHaveLength(1)
  })
})
