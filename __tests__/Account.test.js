import Account from '../src/components/Account'
import { exportAllDeclaration } from '@babel/types';

describe('<Account /> rendering', () => {
    it('should render one <h1>', () => {
        let wrapper = shallow(<Account />)
        expect(wrapper.children('h1'))
        
    })
})

