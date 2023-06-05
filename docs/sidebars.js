/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  default: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial',
        },
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api',
        },
      ],
    },
    {
      type: 'category',
      label: 'Primitives',
      link: {
        type: 'generated-index',
        title: 'Widget Primitives',
        description: 'Learn about the Widget Primitives!',
        slug: '/primitives/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'primitives',
        },
      ],
    },
    {
      type: 'doc',
      id: 'update-widget',
    },
    {
      type: 'doc',
      id: 'handling-clicks',
    },
    {
      type: 'doc',
      id: 'demo',
    },
  ],

  api: [
    {
      label: 'Public API',
      type: 'doc',
      id: 'public-api/index',
    },
    {
      type: 'category',
      label: 'Interfaces',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'public-api/interfaces',
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
