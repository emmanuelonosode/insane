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
