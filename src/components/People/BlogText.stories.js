import React from 'react'
import BlogText from './BlogText'

export default {
  title: 'component/BlogText',
  component: BlogText,
}

const Template = args => <BlogText {...args} />

export const Standard = Template.bind({})
