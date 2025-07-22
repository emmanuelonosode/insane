// schemas/seoDetails.js
export default {
  name: 'seoDetails',
  title: 'SEO & Optimization Details',
  type: 'object',
  fields: [
    {
      name: 'results',
      title: 'Quantifiable Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'metric', type: 'string', title: 'Metric (e.g., Organic Traffic Increase)'},
            {name: 'value', type: 'string', title: 'Value (e.g., +300%)'},
          ],
        },
      ],
      description: 'Showcase the tangible impact of your SEO efforts.',
    },
    {
      name: 'keywordRankings',
      title: 'Keyword Ranking Improvements',
      type: 'image',
      description: 'Upload a screenshot of a rank tracker graph (e.g., from SEMrush or Ahrefs).',
    },
    {
      name: 'servicesProvided',
      title: 'Services Provided',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          'Technical SEO Audit',
          'On-Page SEO',
          'Local SEO',
          'Content Strategy',
          'Link Building',
        ],
      },
    },
    {
      name: 'toolsUsed',
      title: 'Tools Used',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List the primary tools you used for this project.',
    },
  ],
}
