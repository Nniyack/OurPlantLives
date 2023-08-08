import { describe, it, expect, beforeEach, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { plantResponse } from './Plant'

import Autocomplete from '../components/core/Autocomplete.vue'

describe('Autocomplete field', () => {
  let wrapper: any;

  const textName = 'Name Autocomplete'
  const textLabel = 'namePlant'

  beforeEach(() => {
    wrapper = shallowMount(Autocomplete, {
      props: {
        name: textName,
        dataField: plantResponse,
        keyLabelShowed: textLabel,
      },
    });

  });
  test('snapshot UI testing', () => {
    expect(wrapper.text()).toMatchSnapshot()
  })

  it('test props', () => {
    expect(wrapper.props().name).toBe(textName);
    expect(wrapper.props().keyLabelShowed).toBe(textLabel);
  })

  test('test input ', async () => {
    const textInput = wrapper.find('input[type="text"]')

    expect(textInput.exists()).toBe(true)
    expect(textInput.element.name).toBe(textName)

  })

  test('Remove value field', async () => {
    const textInput = wrapper.find('input[type="text"]')

    await textInput.trigger('click')
    await textInput.setValue('Plantatus regulus 1')

    expect(wrapper.find('input[type="text"]').element.value).toBe('Plantatus regulus 1')
    expect(wrapper.html()).toContain('Plantatus regulus 1');

    await wrapper.find('.remove-icon').trigger('click')

    expect(textInput.text()).toBe('')
  })

  test('All actions components ', async () => {
    const textInput = wrapper.find('input[type="text"]')

    await textInput.trigger('click')
    await textInput.setValue('Plantatus regulus 1')

    expect(wrapper.find('input[type="text"]').element.value).toBe('Plantatus regulus 1')
    expect(wrapper.html()).toContain('Plantatus regulus 1');

    await wrapper.findAll('li').at(0).trigger('click')

    expect(wrapper.emitted().returnObject).toBeTruthy()

    expect(wrapper.emitted('returnObject')[0]).toStrictEqual([13])

    expect(wrapper.emitted('returnLiveObject')[0][0]).toStrictEqual([{
      id: 13,
      namePlant: "Plantatus regulus 1",
      image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
      createPlant: false,
    }])

  })

  test('Select Multiple ', async () => {

    wrapper = shallowMount(Autocomplete, {
      props: {
        name: textName,
        dataField: plantResponse,
        keyLabelShowed: textLabel,
        multiple: true
      },
    });

    const textInput = wrapper.find('input[type="text"]')
    const selectOption = async (value: string) => {
      await textInput.trigger('click')
      await textInput.setValue(value)

      expect(wrapper.find('input[type="text"]').element.value).toBe(value)
      expect(wrapper.html()).toContain(value);

      await wrapper.findAll('li').at(0).trigger('click')
    }

    await selectOption('Plantatus regulus 1')
    await selectOption('Plantatus regulus 2')

    expect(wrapper.emitted().returnObject).toBeTruthy()

    expect(wrapper.emitted('returnObject')[0]).toStrictEqual([13, 23])

    expect(wrapper.emitted('returnLiveObject')[0][0]).toStrictEqual([{
      id: 13,
      namePlant: "Plantatus regulus 1",
      image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
      createPlant: false,
    },
    {
      id: 23,
      namePlant: "Plantatus regulus 2",
      image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
      createPlant: false,
    }])

  })

})