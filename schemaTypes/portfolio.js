import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'challenge',
      type: 'text',
    }),
    defineField({
      name: 'whatWeDid',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'results',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'techStack',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'liveUrl',
      type: 'url',
    }),
    defineField({
      name: 'testimonial',
      type: 'object',
      fields: [
        {name: 'quote', type: 'text'},
        {name: 'author', type: 'string'},
        {name: 'role', type: 'string'},
      ],
    }),
  ],
})
