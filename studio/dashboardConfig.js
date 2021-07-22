export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60f90391bfe3d5678c59dd2f',
                  title: 'Sanity Studio',
                  name: '1-v-1-design-studio',
                  apiId: '064a0187-faf3-4958-9c3a-1197e2af8a71'
                },
                {
                  buildHookId: '60f90391badf006393adf307',
                  title: 'Landing pages Website',
                  name: '1-v-1-design',
                  apiId: 'f019ac30-9155-4065-825a-f53565587678'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fengyiyi/1v1.design',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://1-v-1-design.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
