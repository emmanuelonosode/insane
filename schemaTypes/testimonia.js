import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonia',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'tag',
      type: 'string',
      title: 'Tagline',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Web', value: 'web'},
          {title: 'E-commerce Development', value: 'e-commerce-development'},
          {title: 'Web Design and Development', value: 'web-design-and-development'},
          {title: 'E-commerce Design and Development', value: 'e-commerce-design-and-development'},
          {title: 'AI Automation & Workflow', value: 'ai-automation-and-workflow'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      type: 'string',
      title: 'Position',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],
})
