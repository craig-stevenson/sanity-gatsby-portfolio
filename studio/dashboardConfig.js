export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '620f17b2d6a958be3c74ab77',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-okfjv43z',
                  apiId: 'b39d032e-75b4-4db4-b260-c43894d31165'
                },
                {
                  buildHookId: '620f17b2da9fa0b7ff0aed75',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-j3pq8dbf',
                  apiId: 'c12bc54f-154f-4414-8f96-48a515d5ec97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/craig-stevenson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-j3pq8dbf.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
