// jshint -W117

import { shallowMount, mount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import { createLocalVue } from '@vue/test-utils'

import Survey from '@/components/Survey.vue'
import QuestionText from '@/components/question-types/QuestionText.vue'
import QuestionEmail from '@/components/question-types/QuestionEmail.vue'
import QuestionSelect from '@/components/question-types/QuestionSelect.vue'
import QuestionBool from '@/components/question-types/QuestionBool.vue'
import QuestionInfo from '@/components/question-types/QuestionInfo.vue'

import questionTextFixture from '../fixtures/questions/question-text'
import questionEmailFixture from '../fixtures/questions/question-email'
import questionSelectFixture from '../fixtures/questions/question-select'
import questionBoolFixture from '../fixtures/questions/question-bool'
import questionInfoFixture from '../fixtures/questions/question-info'
import summaryOptions from '../fixtures/summary-options'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('Survey.vue', () => {

  it('is component', () => {
    const wrapper = shallowMount(Survey, {
      localVue,
      propsData: {
        questions: [],
      },
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('mounts text question', () => {
    const wrapper = mount(Survey, {
      localVue,
      propsData: {
        summaryOptions,
        questions: [
          questionTextFixture,
        ],
      },
    })

    const qText = wrapper.find(QuestionText)
    expect(qText.text()).toMatch(questionTextFixture.text)
  })

  it('mounts email question', () => {
    const wrapper = mount(Survey, {
      localVue,
      propsData: {
        summaryOptions,
        questions: [
          questionEmailFixture,
        ],
      },
    })

    const qEmail = wrapper.find(QuestionEmail)
    expect(qEmail.text()).toMatch(questionEmailFixture.text)
  })

  it('mounts select question', () => {
    const wrapper = mount(Survey, {
      localVue,
      propsData: {
        summaryOptions,
        questions: [
          questionSelectFixture,
        ],
      },
    })
    const qSelect = wrapper.find(QuestionSelect)
    expect(qSelect.text()).toMatch(questionSelectFixture.text)
  })

  it('mounts bool question', () => {
    const wrapper = mount(Survey, {
      localVue,
      propsData: {
        summaryOptions,
        questions: [
          questionBoolFixture,
        ],
      },
    })

    const qBool = wrapper.find(QuestionBool)
    expect(qBool.text()).toMatch(questionBoolFixture.text)
  })

  it('mounts info question', () => {
    const wrapper = mount(Survey, {
      localVue,
      propsData: {
        summaryOptions,
        questions: [
          questionInfoFixture,
        ],
      },
    })
    const qInfo = wrapper.find(QuestionInfo)
    expect(qInfo.text()).toMatch(questionInfoFixture.text)
  })
})
