import { describe, it, expect, beforeEach, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { plantResponse } from './Plant'

import Autocomplete from '../components/core/Autocomplete.vue'

describe('Autocomplete field', () => {
  let wrapper: any;

  const textName = 'Name Autocomplete'
  const textLabel = 'Label Autocomplete'

  beforeEach(() => {
    wrapper = shallowMount(Autocomplete, {
      props: {
        name: textName,
        dataField: plantResponse,
        label: textLabel,
      },
    });
  });
  test('snapshot UI testing', () => {
    expect(wrapper.text()).toMatchSnapshot()
  })

  it('test props', () => {
    expect(wrapper.props().name).toBe(textName);
    expect(wrapper.props().label).toBe(textLabel);
  })

  test('test input ', async () => {
    const textInput = wrapper.find('input[type="text"]')

    expect(textInput.exists()).toBe(true)
    expect(textInput.element.name).toBe(textName)

  })

  test('test setValue input ', async () => {
    const textInput = wrapper.find('input[type="text"]')
    await textInput.setValue('Plantatus regulus 1')
    textInput.trigger('input')

    expect(wrapper.find('input[type="text"]').element.value).toBe('Plantatus regulus 1')


    const li = wrapper.findAll('.li-list')
    console.log(li)
  })

})