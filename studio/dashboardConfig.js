export default {
  widgets: [
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
                  buildHookId: '5f43ef80f2d58c8c2e093947',
                  title: 'Sanity Studio',
                  name: 'sanity-jason-web-studio',
                  apiId: '474cde6a-c466-4b2a-a568-190ebe508d86'
                },
                {
                  buildHookId: '5f43ef80bef7636a0d1cb223',
                  title: 'Blog Website',
                  name: 'sanity-jason-web',
                  apiId: '7df631a0-88b9-450b-9c11-35a9969b9e74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasonzhao588/sanity-jason-web',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-jason-web.netlify.app', category: 'apps'}
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
