import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Card from '../components/home/Description/Card.vue'

describe('HomeCards', () => {
  it('Create instance', () => {
    expect(Card).toBeTruthy()
  })
  it('test props', () => {

    const wrapper = mount(Card, {
      props: {
        title: "Card title",
        text: "Card text",
        imageSrc: {
          src: '../../../assets/Images/arrosage.jpg',
          alt: 'plantes'
        }
      },
    });

    expect(wrapper.html()).toContain("Card title");
    expect(wrapper.html()).toContain("Card text");
    expect(wrapper.html()).toContain("../../../assets/Images/arrosage.jpg");
    expect(wrapper.html()).toContain("plantes");
  })
})