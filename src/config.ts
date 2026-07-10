import * as cfg from './types/config';

export const site = cfg.defineSiteConfig({
  title: "ashbwin's blog",
  titleTemplate: "ashbwin's blog",

  coverImageStyle: 'half-parallax',
  defaultLicense: 'CC-BY-4.0',
});

export const navbar = cfg.defineNavBarConfig({
  icon: 'mingcute:home-2-line',
  homeText: 'Home',
});

export const theme = cfg.defineThemeConfig({
  expressiveCode: {
    themeDark: 'andromeeda',
    themeLight: 'rose-pine-dawn',
  },
  defaultHue: 0,
});

export const author = cfg.defineAuthorConfig({
  defaultAuthor: 'ashbwin',
  authors: {
    ashbwin: {
      name: 'ashbwin',
      bio: 'xun',
      avatar:
        'rawimage|https://avatars.githubusercontent.com/u/101867999?v=4',
      socialLinks: {
        github: 'https://github.com/ashbwin',
        bilibili: 'https://space.bilibili.com/269017331',
      },
    },
  },
});

export const layout = cfg.defineLayoutConfig({
  basic: {
    aside: 'left',
  },
});
