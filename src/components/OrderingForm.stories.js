import React from 'react'
import OrderingForm from './OrderingForm'

export default {
  title: 'component/OrderingForm',
  component: OrderingForm,
}

const Template = args => <OrderingForm {...args} />

export const Standard = Template.bind({})
