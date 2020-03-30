// jshint -W117

import axios from 'axios'
import { BootstrapVue } from 'bootstrap-vue'
import { mount } from '@vue/test-utils'
import { createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

jest.mock('axios')
axios.get.mockResolvedValue({
  data: {
    questions: [{}],
  },
})

describe('ButtonNext.vue', () => {
  it('is component', async() => {
    const wrapper = mount(App, {
      localVue,
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('shows loader on start', async() => {
    const wrapper = mount(App, {
      localVue,
    })
    expect(wrapper.text()).toBe('Loading...')
  })
})
