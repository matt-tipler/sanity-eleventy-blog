export default {
    name: 'random',
    type: 'document',
    title: 'Random Text',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'Titles should be catchy, descriptive, and not too long'
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Image'
      },
      {
        name: 'authors',
        title: 'Authors',
        type: 'array',
        of: [
          {
            type: 'authorReference'
          }
        ]
      },
    ],
  }