/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Save brain - Share & Save Your Insights',
  author: 'Minhdd15112003',
  headerTitle: 'Save brain',
  description:
    'Explore a personal knowledge hub where I share insights across various fields. Save your own knowledge and revisit it anytime. Open to all for learning and inspiration.',
  keywords: [
    'knowledge sharing',
    'personal blog',
    'learn online',
    'educational resources',
    'Save brain',
    'self-improvement',
    'tech insights',
    'life hacks',
  ],
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://Save_brain.com.bd',
  siteRepo: 'https://github.com/Minhdd15112003/Save_brain',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'minhdd15112003@gmail.com',
  github: 'https://github.com/minhdd15112003',
  twitter: 'https://twitter.com/minhdd15112003',
  facebook: 'https://www.facebook.com/minh.duy.ao.406644',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/minhdd15112003',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: '7d9eaf11-f5e4-484d-96d3-4719186bffba', // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'minhdd15112003/blog-comments-giscus',
      repositoryId: 'R_kgDOKOZZMg',
      category: 'General',
      categoryId: 'DIC_kwDOKOZZMs4CZCBg',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
