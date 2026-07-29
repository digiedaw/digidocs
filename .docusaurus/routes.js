import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dmworld/blog',
    component: ComponentCreator('/dmworld/blog', '2a5'),
    exact: true
  },
  {
    path: '/dmworld/blog/archive',
    component: ComponentCreator('/dmworld/blog/archive', 'a98'),
    exact: true
  },
  {
    path: '/dmworld/blog/authors',
    component: ComponentCreator('/dmworld/blog/authors', '2f5'),
    exact: true
  },
  {
    path: '/dmworld/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/dmworld/blog/authors/all-sebastien-lorber-articles', 'e84'),
    exact: true
  },
  {
    path: '/dmworld/blog/authors/yangshun',
    component: ComponentCreator('/dmworld/blog/authors/yangshun', '0cf'),
    exact: true
  },
  {
    path: '/dmworld/blog/first-blog-post',
    component: ComponentCreator('/dmworld/blog/first-blog-post', 'c6f'),
    exact: true
  },
  {
    path: '/dmworld/blog/long-blog-post',
    component: ComponentCreator('/dmworld/blog/long-blog-post', 'e8a'),
    exact: true
  },
  {
    path: '/dmworld/blog/mdx-blog-post',
    component: ComponentCreator('/dmworld/blog/mdx-blog-post', '990'),
    exact: true
  },
  {
    path: '/dmworld/blog/tags',
    component: ComponentCreator('/dmworld/blog/tags', '36d'),
    exact: true
  },
  {
    path: '/dmworld/blog/tags/docusaurus',
    component: ComponentCreator('/dmworld/blog/tags/docusaurus', 'afe'),
    exact: true
  },
  {
    path: '/dmworld/blog/tags/facebook',
    component: ComponentCreator('/dmworld/blog/tags/facebook', 'ea7'),
    exact: true
  },
  {
    path: '/dmworld/blog/tags/hello',
    component: ComponentCreator('/dmworld/blog/tags/hello', 'c84'),
    exact: true
  },
  {
    path: '/dmworld/blog/tags/hola',
    component: ComponentCreator('/dmworld/blog/tags/hola', 'b92'),
    exact: true
  },
  {
    path: '/dmworld/blog/welcome',
    component: ComponentCreator('/dmworld/blog/welcome', 'd1a'),
    exact: true
  },
  {
    path: '/dmworld/markdown-page',
    component: ComponentCreator('/dmworld/markdown-page', 'a97'),
    exact: true
  },
  {
    path: '/dmworld/docs',
    component: ComponentCreator('/dmworld/docs', '406'),
    routes: [
      {
        path: '/dmworld/docs',
        component: ComponentCreator('/dmworld/docs', '1b2'),
        routes: [
          {
            path: '/dmworld/docs',
            component: ComponentCreator('/dmworld/docs', 'a8a'),
            routes: [
              {
                path: '/dmworld/docs/category/tutorial---basics',
                component: ComponentCreator('/dmworld/docs/category/tutorial---basics', 'e76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dmworld/docs/category/tutorial---extras',
                component: ComponentCreator('/dmworld/docs/category/tutorial---extras', '501'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dmworld/docs/intro',
                component: ComponentCreator('/dmworld/docs/intro', '929'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dmworld/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/dmworld/docs/tutorial-basics/congratulations', '05c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dmworld/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/dmworld/docs/tutorial-basics/create-a-blog-post', '723'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dmworld/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/dmworld/docs/tutorial-basics/create-a-document', 'f18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dmworld/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/dmworld/docs/tutorial-basics/create-a-page', '1f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dmworld/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/dmworld/docs/tutorial-basics/deploy-your-site', '86a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dmworld/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/dmworld/docs/tutorial-basics/markdown-features', 'd0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dmworld/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/dmworld/docs/tutorial-extras/manage-docs-versions', '21f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dmworld/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/dmworld/docs/tutorial-extras/translate-your-site', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/dmworld/',
    component: ComponentCreator('/dmworld/', '342'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
