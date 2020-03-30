// jshint -W117

import { mount } from '@vue/test-utils'
import QuestionBool from '@/components/question-types/QuestionBool.vue'
import questionFixture from '../../fixtures/question-bool'
import { BootstrapVue, BButton } from 'bootstrap-vue'
import { createLocalVue } from '@vue/test-utils'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('QuestionBool.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(QuestionBool, {
      localVue,
      propsData: {
        question: questionFixture,
      },
    })
  })

  it('is component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('emits result on click', async () => {
    const [btn1, btn2] = wrapper.findAll(BButton).wrappers
    btn1.trigger('click')
    btn2.trigger('click')
    await wrapper.vm.$nextTick()
    
    expect(wrapper.emitted().sendAnswer).toBeTruthy()
    expect(wrapper.emitted().sendAnswer.length).toBe(2)
    expect(wrapper.emitted().sendAnswer[0]).toEqual([{result: false}])
    expect(wrapper.emitted().sendAnswer[1]).toEqual([{result: true}])
  })

  it('changes btns text to custom', () => {
    const question = JSON.parse(JSON.stringify(questionFixture))
    const textNo = 'custom no'
    const textYes = 'custom yes'
    question.customOption.textNo = textNo
    question.customOption.textYes = textYes

    const wrapper = mount(QuestionBool, {
      localVue,
      propsData: {
        question,
      },
    })
    const [btn1, btn2] = wrapper.findAll(BButton).wrappers
    expect(btn1.text()).toBe(textNo)
    expect(btn2.text()).toBe(textYes)
  })

})
