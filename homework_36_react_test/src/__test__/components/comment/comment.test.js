import React from 'react';
import { shallow } from 'enzyme';
import {Comment} from '../../../components/comment/Comment';
import defaultAvatar from '../../../constants/api/common';

describe('Comment component test', () => {
  test('should render comment', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper.find('div.post-comment')).toHaveLength(1);
  });

  test('should render info', () => {
    const comment = {
        owner: {
            picture: defaultAvatar,
            firstName: "Alex",
            title: "mr.",
            lastName: "Red"
        },
        message: "Hello",
        publishDate: "yesterday"
    }
    const wrapper = shallow(<Comment
      comment={comment}
    />);
    expect(wrapper.find('div.post-comment').find('img').prop('src')).toBe(comment.owner.picture);
    expect(wrapper.find('p.post-comment__text').text()).toBe(comment.message);
    expect(wrapper.find('p.post-comment__data').text()).toBe(comment.publishDate);
  });

});

describe('Comment snapshot test', () => {
  test('should render empty comment', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper).toMatchSnapshot();
  });
});