import pngquant from 'imagemin-pngquant'

export const DIR = {
  PATH: '/',
  SRC: 'src',
  DST: 'dst',
  IMG: 'images',
  BUILD: 'public'
}

export const isProduction = process.env.NODE_ENV === 'production'

export const AUTOPREFIXER = [
  'ie >= 11',
  'ie_mob >= 11',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 8',
  'opera >= 23',
  'ios >= 8',
  'android >= 4.3'
]

export const sass = {
  src: [
    `${DIR.SRC}/css/*.scss`,
    `!${DIR.SRC}/css/modules/*`,
    `!${DIR.SRC}/css/vender/*`
  ],
  dev: {
    dst: `${DIR.DST}${DIR.PATH}assets/css`
  },
  build: {
    dst: `${DIR.BUILD}${DIR.PATH}assets/css`
  }
}

export const pug = {
  src: [
    `${DIR.SRC}/**/*.pug`,
    `!${DIR.SRC}/**/_**/*.pug`,
    `!${DIR.SRC}/**/_*.pug`
  ],
  dst: `${DIR.DST}${DIR.PATH}`,
  opts: {
    pretty: true,
    basedir: `${DIR.SRC}/html`
  }
};

export const serve = {
  open: 'external',
  reloadDebounce: 2000,
  ui: false,
  notify: false,
  startPath: DIR.PATH,
  ghostMode: false,
  server: {
    baseDir: 'dst',
    index: `${DIR.DST}${DIR.PATH}`,
    routes: {
      [DIR.PATH]: `${DIR.DST}${DIR.PATH}`
    }
  }
};

export const clean = {
  build: {
    path: [
      `${DIR.BUILD}`
    ]
  }
}

export const imagemin = {
  build: {
    src: [
      `${DIR.SRC}/${DIR.IMG}/**/*.{png,svg,jpg,jpeg,ico}`
    ],
    dst: `${DIR.BUILD}${DIR.PATH}assets/${DIR.IMG}`,
    opts: {
      progressive: true,
      use: [
        pngquant(
          {
            quality: '60-80',
            speed: 1
          }
        )
      ]
    }
  }
}

export const copy = {
  img: {
    src: [`${DIR.SRC}/${DIR.IMG}/**`],
    dst: `${DIR.DST}${DIR.PATH}assets/${DIR.IMG}`
  },
  build: {
    src: [
      `${DIR.DST}${DIR.PATH}**`,
      `!${DIR.DST}${DIR.PATH}assets/js/**`,
      `!${DIR.DST}${DIR.PATH}assets/${DIR.IMG}`,
      `!${DIR.DST}${DIR.PATH}assets/${DIR.IMG}/**`
    ],
    dst: `${DIR.BUILD}${DIR.PATH}`
  }
};