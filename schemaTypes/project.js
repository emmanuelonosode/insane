import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'A clear and concise title for the project.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Hero Image',
      type: 'image',
      description: 'A stunning, high-quality image that represents the project.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      description: 'The name of the client for this project.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Web Design and Development', value: 'web'},
          {title: 'SEO and Website Optimization', value: 'seo'},
          {title: 'AI Automation and Workflow', value: 'ai'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Project Overview',
      type: 'text',
      description: 'A summary of the project and its main goals.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      description: 'What was the core problem the client was facing?',
    }),
    defineField({
      name: 'solution',
      title: 'Our Solution',
      type: 'text',
      description: 'How did BookOne address the challenge?',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'testimonial',
    }),

    // Category-specific fields
    defineField({
      name: 'webDetails',
      title: 'Web Design & Development Details',
      type: 'webDetails',
      hidden: ({parent}) => parent?.category !== 'web',
    }),
    defineField({
      name: 'seoDetails',
      title: 'SEO & Optimization Details',
      type: 'seoDetails',
      hidden: ({parent}) => parent?.category !== 'seo',
    }),
    defineField({
      name: 'aiDetails',
      title: 'AI Automation Details',
      type: 'aiDetails',
      hidden: ({parent}) => parent?.category !== 'ai',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'webDetails.heroImage',
    },
    prepare({title, client, media}) {
      return {
        title: `${title} | ${client}`,
        media,
      }
    },
  },
})
