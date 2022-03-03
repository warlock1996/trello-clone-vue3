import { defineRule } from 'vee-validate'
import rules from '@vee-validate/rules'

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})
