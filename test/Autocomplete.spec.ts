import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { v4 as uuidv4 } from "uuid";

import Autocomplete from '../components/core/Autocomplete.vue'

describe('Autocomplete field', () => {
  it('Create instance', () => {
    expect(Autocomplete).toBeTruthy()
  })
  it('test props', () => {

    const wrapper = mount(Autocomplete, {
      props: {
        name: "Name Autocomplete",
        dataField: [
          {
            id: uuidv4(),
            namePlant: "Plantatus regulus 1",
            image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
            createPlant: false,
          },
          {
            id: uuidv4(),
            namePlant: "Plantatus regulus notarius elegatus rogos moultivaz",
            image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
            createPlant: false,
          },
        ],
        label: "namePlant",
      },
    });

    expect(wrapper.html()).toContain("Name Autocomplete");
  })
})