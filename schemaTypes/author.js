export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'text',
    },
    {
      name: 'linkedin',
      title: 'Linkedin',
      type: 'text',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'text',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'text',
    },
    {
      name: 'tiktok',
      title: 'Tiktok',
      type: 'text',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'text',
    },
  ],
}
