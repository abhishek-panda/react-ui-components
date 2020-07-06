import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './index';

describe('<Button />', () => {
  describe('Taking Snaphot', () => {
    let wrapper: ReactWrapper;
    const component = <Button>Hello</Button>;
    beforeEach(() => {
      wrapper = mount(component);
    });

    it('should match its snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
