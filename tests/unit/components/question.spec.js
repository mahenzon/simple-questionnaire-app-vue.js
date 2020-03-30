// jshint -W117

import { shallowMount, mount } from '@vue/test-utils'
import Question from '@/components/Question.vue'
import QuestionText from '@/components/question-types/QuestionText.vue'
import QuestionEmail from '@/components/question-types/QuestionEmail.vue'
import QuestionSelect from '@/components/question-types/QuestionSelect.vue'
import QuestionBool from '@/components/question-types/QuestionBool.vue'
import QuestionInfo from '@/components/question-types/QuestionInfo.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { createLocalVue } from '@vue/test-utils'
import questionTextFixture from '../fixtures/question-text'
import questionEmailFixture from '../fixtures/question-email'
import questionSelectFixture from '../fixtures/question-select'
import questionBoolFixture from '../fixtures/question-bool'
import questionInfoFixture from '../fixtures/question-info'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('Question.vue', () => {

  it('is component', () => {
    const wrapper = shallowMount(Question, {
      localVue,
      propsData: {
        question: {},
      },
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('mounts text question', () => {
    const wrapper = mount(Question, {
      localVue,
      propsData: {
        question: questionTextFixture,
      },
    })
    const subq = wrapper.find(QuestionText)
    expect(subq.isVueInstance()).toBeTruthy()
    expect(subq.element.textContent).toMatch(questionTextFixture.text)
  })

  it('mounts email question', () => {
    const wrapper = mount(Question, {
      localVue,
      propsData: {
        question: questionEmailFixture,
      },
    })
    const subq = wrapper.find(QuestionEmail)
    expect(subq.isVueInstance()).toBeTruthy()
    expect(subq.element.textContent).toMatch(questionEmailFixture.text)
    expect(subq.element.textContent).toMatch(questionEmailFixture.subtitle)
  })

  it('mounts select question', () => {
    const wrapper = mount(Question, {
      localVue,
      propsData: {
        question: questionSelectFixture,
      },
    })
    const subq = wrapper.find(QuestionSelect)
    expect(subq.isVueInstance()).toBeTruthy()
    expect(subq.element.textContent).toMatch(questionSelectFixture.text)
  })

  it('mounts bool question', () => {
    const wrapper = mount(Question, {
      localVue,
      propsData: {
        question: questionBoolFixture,
      },
    })
    const subq = wrapper.find(QuestionBool)
    expect(subq.isVueInstance()).toBeTruthy()
    expect(subq.element.textContent).toMatch(questionBoolFixture.text)
  })

  it('mounts info question', () => {
    const wrapper = mount(Question, {
      localVue,
      propsData: {
        question: questionInfoFixture,
      },
    })
    const subq = wrapper.find(QuestionInfo)
    expect(subq.isVueInstance()).toBeTruthy()
    expect(subq.element.textContent).toMatch(questionInfoFixture.text)
  })
})
