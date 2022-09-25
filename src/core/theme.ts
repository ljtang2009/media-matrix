
export enum ThemeType {
  'light' = 'light',
  'light-compact' = 'light-compact',
  'dark' = 'dark',
  'dark-compact' = 'dark-compact',
}

export function changeTheme(themeType: ThemeType) {
  const themeLinkTagId = __CURRENT_THEME_TAG_ID__;
  const currentThemeTag = document.getElementById(themeLinkTagId);
  let themeStr = '';
  const themeTags = document.querySelectorAll("[name=themeMeta]");
  for (const themeTag of themeTags) {
    const src = themeTag.getAttribute('content');
    if (src && src.indexOf(`${themeType.toString()}-theme`) >= 0) {
      themeStr = src;
      break;
    }
  }
  if (themeStr.length > 0) {
    if (currentThemeTag) {
      if (currentThemeTag.getAttribute('href') !== themeStr) {
        currentThemeTag.setAttribute('href', themeStr);
      }
    } else {
      const head = document.getElementsByTagName('head')[0];
      const link = document.createElement('link');
      link.id = themeLinkTagId;
      link.href = themeStr;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      head.appendChild(link);
    }
  }
}
