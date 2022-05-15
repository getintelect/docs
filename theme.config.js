export default {
  github: 'https://github.com/getintelect/docs',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – Docs',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Intelect</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        The Roblox technology group
      </span>
    </>
  ),
  head: (
    <>
      <meta name="title" content="Intelect | Reliable Tech" />
      <meta name="description" content="We are a Roblox technology group. We try to innovate new technologies for the RoAviation community." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Intelect | Reliable Tech" />
      <meta property="og:description" content="We are a Roblox technology group. We try to innovate new technologies for the RoAviation community." />
      <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Intelect | Reliable Tech" />
      <meta property="twitter:description" content="We are a Roblox technology group. We try to innovate new technologies for the RoAviation community." />
      <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'https://www.intelect.cc',
  footerText: <>© MIT {new Date().getFullYear()} Intelect. All rights reserved.</>,
  unstable_faviconGlyph: '👋',
}
