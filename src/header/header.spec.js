import {Header} from './header';
import React from 'react';
import {shallow} from 'enzyme';

describe('Application header snapshot', () => {
    let testProps = Object.freeze({
        application: ''
    });

    it('should match its previous snapshot', () => {
        expect(shallow(<Header {...testProps} />)).toMatchSnapshot();
    });
});
