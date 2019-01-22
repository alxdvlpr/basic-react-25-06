import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WrappedCommentList, { CommentList } from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render a button', () => {
    const wrapper = shallow(
      <CommentList
        comments={articles[0].comments}
        toggleOpen={() => {}}
        isOpen
      />
    )

    expect(wrapper.find('.comment-list-button').length).toEqual(1)
  })

  it('should render a comments if isOpen is true', () => {
    const wrapper = render(
      <CommentList
        comments={articles[0].comments}
        toggleOpen={() => {}}
        isOpen
      />
    )

    expect(wrapper.find('.comment-item').length).toEqual(
      articles[0].comments.length
    )
  })

  it("shouldn't render a comments if isOpen false", () => {
    const wrapper = render(
      <CommentList comments={articles[0].comments} toggleOpen={() => {}} />
    )

    expect(wrapper.find('.comments-container').length).toEqual(0)
  })

  it("shouldn't render a comments if comments are empty", () => {
    const wrapper = render(
      <CommentList comments={[]} toggleOpen={() => {}} isOpen />
    )

    expect(wrapper.find('.comment-item').length).toEqual(0)
  })

  it('should render a notification if comments are empty', () => {
    const wrapper = render(
      <CommentList comments={[]} toggleOpen={() => {}} isOpen />
    )

    expect(wrapper.find('.comment-notification').length).toEqual(1)
  })

  it('should render all comments closed by default', () => {
    const wrapper = render(
      <WrappedCommentList comments={articles[0].comments} />
    )

    expect(wrapper.find('.comment-list-container').length).toEqual(0)
  })

  it('should open comments on click', () => {
    const wrapper = mount(
      <WrappedCommentList comments={articles[0].comments} />
    )

    wrapper
      .find('.comment-list-button')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.comments-container').length).toEqual(1)
  })
})
