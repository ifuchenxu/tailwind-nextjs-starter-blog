/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '罗昭道长Blog',
  author: '王罗昭',
  headerTitle: '罗昭道长Blog',
  description: '抱元守一归清静，大路无涯任自然。',
  language: 'zh-cn',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog.ifcx.cc.cd',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  // 1. 这里已经完美换成了你刚刚上传的红黄太极图 logo.svg
  siteLogo: `${process.env.BASE_PATH || ''}/logo.svg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'w2020010801@163.com',
  github: 'https://github.com',
  x: 'https://twitter.com/x',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com',
  bluesky: 'https://bsky.app/',
  // 2. 语言环境切回中文
  locale: 'zh-CN',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  // 3. 订阅功能：如果你想在前端彻底隐藏那个输入框，把这里的 'buttondown' 直接改成空字符串 ''
  // 如果想留着框，就保持原样。这里我先帮你保留，等看前端效果
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      // 4. 把底部的评论区组件也顺手汉化成中文
      lang: 'zh-CN',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
