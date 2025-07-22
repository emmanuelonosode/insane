// schemas/webDetails.js
export default {
  name: 'webDetails',
  title: 'Web Design & Development Details',
  type: 'object',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'A stunning, high-quality image that represents the project.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{type: 'image'}],
      description: 'Showcase different aspects of the design.',
    },
    {
      name: 'beforeAndAfter',
      title: 'Before & After',
      type: 'object',
      fields: [
        {name: 'before', type: 'image', title: 'Before'},
        {name: 'after', type: 'image', title: 'After'},
      ],
      description: 'Visually demonstrate the transformation.',
    },
    {
      name: 'techStack',
      title: 'Technology Stack',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List the key technologies used.',
    },
    {
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Highlight standout functionalities of the website.',
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    },
  ],
}
