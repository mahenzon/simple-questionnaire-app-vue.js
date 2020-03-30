// jshint -W117

import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import ButtonNext from '@/components/question-types/sub-types/ButtonNext.vue'
Vue.config.ignoredElements = ['b-button']

describe('ButtonNext.vue', () => {
  it('is component', () => {
    const wrapper = shallowMount(ButtonNext)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('text on button defaults to Next', () => {
    const wrapper = shallowMount(ButtonNext)
    expect(wrapper.text()).toBe('Next')
  })
  it('text on button can be overridden', () => {
    const buttonText = 'go next'
    const wrapper = shallowMount(ButtonNext, {
      propsData: {
        text: buttonText,
      },
    })
    expect(wrapper.text()).toBe(buttonText)
  })
  it('emits on click', async () => {
    const wrapper = shallowMount(ButtonNext)
    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().goNext).toBeTruthy()
    expect(wrapper.emitted().goNext.length).toBe(1)
  })
})
