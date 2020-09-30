module.exports = {
  // productionTip: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/flatwire/'
    : '/',
  pwa: {
    manifestPath: 'manifest.webmanifest',
    name: 'Flatwire',
    themeColor: '#000000',
    msTileColor: '#000000'
  }
}
