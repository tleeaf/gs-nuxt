import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Nav from '../components/Nav.vue'

describe('Nav', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Nav)
    expect(wrapper.vm).toBeTruthy()
  })
})