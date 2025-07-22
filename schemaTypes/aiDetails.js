// schemas/aiDetails.js
export default {
  name: 'aiDetails',
  title: 'AI Automation Details',
  type: 'object',
  fields: [
    {
      name: 'problemStatement',
      title: 'Problem Statement',
      type: 'text',
      description: 'A more detailed explanation of the business problem.',
    },
    {
      name: 'automationWorkflow',
      title: 'Automation Workflow Diagram',
      type: 'image',
      description: 'A visual representation of the new automated workflow.',
    },
    {
      name: 'keyOutcomes',
      title: 'Key Outcomes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'outcome', type: 'string', title: 'Outcome (e.g., Time Saved Per Week)'},
            {name: 'detail', type: 'string', title: 'Detail (e.g., 40 hours)'},
          ],
        },
      ],
      description: 'Highlight the specific benefits of the automation.',
    },
    {
      name: 'technologies',
      title: 'AI & Automation Technologies',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List the specific AI and automation tools used.',
    },
  ],
}
