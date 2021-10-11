const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://dyarfi.github.io/'

const PRODUCTION = process.env.NODE_ENV !== 'development'

module.exports = {
  PRODUCTION,
  BASE_URL,
  GOOGLE_ANALYTICS_ID: 'UA-123722350-1',
  YANDEX: '68819aeb05ea83b8',
  NAME: 'Dyarfi',
  TITLE: 'Dyarfi.github.io Web Developer',
  SLOGAN: 'Build with Code',
  DESCRIPTION: 'Web Developer',
  IMAGE: `${BASE_URL}/assets/img/logo.png`,
  LOCALE: 'en-US',
  LANG: 'en',
}
