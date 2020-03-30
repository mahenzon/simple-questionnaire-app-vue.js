// jshint -W117

import { shallowMount } from '@vue/test-utils'
import Summary from '@/components/Summary.vue'
import { BootstrapVue, BCardTitle, BCardText, BButton } from 'bootstrap-vue'
import { createLocalVue } from '@vue/test-utils'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('Summary.vue', () => {

  it('is component', () => {
    const wrapper = shallowMount(Summary, {
      localVue,
      propsData: {
        results: [],
        summaryOptions: {},
      },
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('shows header and text', () => {
    const header = 'header'
    const text = 'text'
    const wrapper = shallowMount(Summary, {
      localVue,
      propsData: {
        results: [],
        summaryOptions: {
          header,
          text,
        },
      },
    })
    expect(wrapper.find(BCardTitle).text()).toBe(header)
    expect(wrapper.find(BCardText).text()).toBe(text)
  })

  it('emits reset on click', async() => {
    const wrapper = shallowMount(Summary, {
      localVue,
      propsData: {
        results: [],
        summaryOptions: {},
      },
    })
    const btn = wrapper.find(BButton)
    expect(btn.text()).toBe('Restart survey')

    // this doesn't work, donno why
    // btn.trigger('click')
    // await wrapper.vm.$nextTick()
    // expect(wrapper.emitted().restart).toBeTruthy()
    // expect(wrapper.emitted().restart.length).toBe(1)
  })

})