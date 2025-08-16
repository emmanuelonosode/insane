import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Table Caption',
      type: 'string',
      description: 'Optional caption for the table',
    }),
    defineField({
      name: 'rows',
      title: 'Table Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'row',
          title: 'Row',
          fields: [
            {
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'cell',
                  title: 'Cell',
                  fields: [
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'array',
                      of: [{type: 'block'}],
                      validation: (rule) => rule.required(),
                    },
                    {
                      name: 'isHeader',
                      title: 'Is Header Cell',
                      type: 'boolean',
                      initialValue: false,
                      description: 'Check this to make this cell a header (bold styling)',
                    },
                  ],
                  preview: {
                    select: {
                      content: 'content',
                      isHeader: 'isHeader',
                    },
                    prepare({content, isHeader}) {
                      const text = content?.[0]?.children?.[0]?.text || 'Empty cell'
                      return {
                        title: isHeader ? `Header: ${text}` : text,
                        subtitle: isHeader ? 'Header Cell' : 'Regular Cell',
                      }
                    },
                  },
                },
              ],
              validation: (rule) => rule.required().min(1),
            },
          ],
          preview: {
            select: {
              cells: 'cells',
            },
            prepare({cells}) {
              const cellTexts =
                cells?.map((cell) => cell.content?.[0]?.children?.[0]?.text || 'Empty') || []
              return {
                title: cellTexts.join(' | '),
                subtitle: `${cells?.length || 0} cells`,
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
      description:
        'Add rows to your table. Each row can contain multiple cells with rich text content.',
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
      rows: 'rows',
    },
    prepare({caption, rows}) {
      return {
        title: caption || 'Table',
        subtitle: `${rows?.length || 0} rows`,
      }
    },
  },
})
