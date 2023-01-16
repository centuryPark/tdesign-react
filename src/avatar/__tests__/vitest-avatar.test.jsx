/**
 * 该文件由脚本自动生成，如需修改请联系 PMC
 * This file generated by scripts of tdesign-api. `npm run api:docs Avatar React(PC) vitest,finalProject`
 * If you need to modify this file, contact PMC first please.
 */
import React from 'react';
import { vi, render, mockDelay } from '@test/utils';
import { Avatar, AvatarGroup } from '..';
import { getAvatarGroupDefaultMount } from './mount';

describe('Avatar Component', () => {
  // @ts-ignore
  it('props.alt works fine', () => {
    const wrapper = render(<Avatar alt="Avatar" image="https://tdesign.gtimg.com/site/avatar.jpg"></Avatar>);
    const container = wrapper.container.querySelector('img');
    expect(container.getAttribute('alt')).toBe('Avatar');
  });

  it('props.children works fine', () => {
    const { container } = render(
      <Avatar>
        <span className="custom-node">TNode</span>
      </Avatar>,
    );
    expect(container.querySelector('.custom-node')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('props.content works fine', () => {
    const { container } = render(<Avatar content={<span className="custom-node">TNode</span>}></Avatar>);
    expect(container.querySelector('.custom-node')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it.skip('props.hideOnLoadFailed works fine', async () => {
    const { container } = render(<Avatar image="https://this.is.an.error.path.jpg" hideOnLoadFailed={true}></Avatar>);
    await mockDelay(300);
    expect(container.querySelector('.t-image')).toBeFalsy();
  });

  it('props.icon works fine', () => {
    const { container } = render(<Avatar icon={<span className="custom-node">TNode</span>}></Avatar>);
    expect(container.querySelector('.custom-node')).toBeTruthy();
    expect(container.querySelector('.t-avatar-icon')).toBeTruthy();
  });

  it(`props.image is equal to https://tdesign.tencent.com/`, () => {
    const { container } = render(<Avatar image="https://tdesign.tencent.com/"></Avatar>);
    const domWrapper = container.querySelector('img');
    expect(domWrapper.getAttribute('src')).toBe('https://tdesign.tencent.com/');
  });

  ['circle', 'round'].forEach((item) => {
    it(`props.shape is equal to ${item}`, () => {
      const { container } = render(<Avatar shape={item}></Avatar>);
      expect(container.firstChild).toHaveClass(`t-avatar--${item}`);
      expect(container).toMatchSnapshot();
    });
  });

  const sizeClassNameMap = { small: 't-size-s', medium: 't-size-m', large: 't-size-l' };
  Object.entries(sizeClassNameMap).forEach(([enumValue, expectedClassName]) => {
    it(`props.size is equal to ${enumValue}`, () => {
      let propValue = { true: true, false: false }[enumValue];
      propValue = propValue === undefined ? enumValue : propValue;
      const { container } = render(<Avatar size={propValue}></Avatar>);
      expect(container.firstChild).toHaveClass(expectedClassName);
    });
  });

  it(`props.size is equal to 120px`, () => {
    const { container } = render(<Avatar size="120px"></Avatar>);
    const domWrapper = container.firstChild;
    expect(domWrapper.style.width).toBe('120px');
    expect(domWrapper.style.height).toBe('120px');
    expect(domWrapper.style.fontSize).toBe('60px');
  });

  it.skip('events.error works fine', async () => {
    const onErrorFn = vi.fn();
    const { container } = render(<Avatar image="https://this.is.an.error.path.jpg" onError={onErrorFn}></Avatar>);
    await mockDelay(300);
    expect(onErrorFn).toHaveBeenCalled(1);
    expect(onErrorFn.mock.calls[0][0].e.type).toBe('error');
  });
});

describe('AvatarGroup Component', () => {
  const cascadingClassNameList = ['t-avatar--offset-left', 't-avatar--offset-right'];
  ['left-up', 'right-up'].forEach((item, index) => {
    it(`props.cascading is equal to ${item}`, () => {
      const { container } = render(<AvatarGroup cascading={item}></AvatarGroup>);
      expect(container.firstChild).toHaveClass(cascadingClassNameList[index]);
      expect(container).toMatchSnapshot();
    });
  });

  it('props.collapseAvatar works fine', () => {
    const { container } = getAvatarGroupDefaultMount(AvatarGroup, {
      collapseAvatar: <span className="custom-node">TNode</span>,
      max: 3,
    });
    expect(container.querySelector('.custom-node')).toBeTruthy();
  });

  it('props.max works fine. `{".t-avatar":4}` should exist', () => {
    const { container } = getAvatarGroupDefaultMount(AvatarGroup, { max: 3 });
    expect(container.querySelectorAll('.t-avatar').length).toBe(4);
  });

  it('props.max works fine. `{".t-avatar__collapse":1}` should exist', () => {
    const { container } = getAvatarGroupDefaultMount(AvatarGroup, { max: 3 });
    expect(container.querySelectorAll('.t-avatar__collapse').length).toBe(1);
  });

  it('props.max works fine. `{".t-avatar__collapse > span":{"text":"+2"}}` should exist', () => {
    const { container } = getAvatarGroupDefaultMount(AvatarGroup, { max: 3 });
    expect(container.querySelector('.t-avatar__collapse > span').textContent).toBe('+2');
  });

  it(`props.size is equal to small`, () => {
    const { container } = getAvatarGroupDefaultMount(AvatarGroup, { size: 'small' });
    const domWrapper = container.querySelector('.t-avatar');
    expect(domWrapper).toHaveClass('t-size-s');
    const domWrapper1 = container.querySelector('.t-avatar:nth-child(5)');
    expect(domWrapper1).toHaveClass('t-size-l');
  });
  it(`props.size is equal to large`, () => {
    const { container } = getAvatarGroupDefaultMount(AvatarGroup, { size: 'large' });
    const domWrapper = container.querySelector('.t-avatar');
    expect(domWrapper).toHaveClass('t-size-l');
    const domWrapper1 = container.querySelector('.t-avatar:nth-child(4)');
    expect(domWrapper1).toHaveClass('t-size-s');
  });

  it(`props.size is equal to 120px`, () => {
    const { container } = getAvatarGroupDefaultMount(AvatarGroup, { size: '120px' });
    const domWrapper = container.querySelector('.t-avatar');
    expect(domWrapper.style.width).toBe('120px');
    expect(domWrapper.style.height).toBe('120px');
    expect(domWrapper.style.fontSize).toBe('60px');
  });
});
