module.exports = {
  siteMetadata: {
    title: `Decorous Tea Coding Projects`,
    name: `Decorous Tea`,
    siteUrl: `http://decoroustea.xyz`,
    description: `This is a sandbox coding portfolio by Tristan Alba`,
    hero: {
      heading: `Hi! Feel free to browse through my current projects.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/tristanjalba`,
      },
      {
        name: `github`,
        url: `https://github.com/tristanjoshuaalba`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/tristan.j.alba/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/tristanjoshuaalba/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Decorous Tea Code Projects`,
        short_name: `Decorous Tea`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
