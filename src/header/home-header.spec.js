import {HomeHeader} from './home-header';
import React from 'react';
import {shallow} from 'enzyme';

describe('Application home header snapshot', () => {
    it('should match its previous snapshot', () => {
        expect(shallow(<HomeHeader />)).toMatchSnapshot();
    });
});
