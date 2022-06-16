export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62aaf6229a44475fadc4f5a4',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-e5q9qhce',
                  apiId: '3325fdd1-26fa-41b6-ae43-24a157510c96'
                },
                {
                  buildHookId: '62aaf6231758835e434a6b35',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-obqw6s5f',
                  apiId: '76f22342-14a5-4d6c-95ee-b0796594fa57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matt-tipler/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-obqw6s5f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
