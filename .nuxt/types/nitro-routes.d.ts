// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
    '/__site-config__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-site-config/dist/runtime/nitro/routes/__site-config__/debug').default>>>>
    }
    '/__sitemap__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/__sitemap__/debug').default>>>>
    }
    '/__sitemap__/style.xsl': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/sitemap.xsl').default>>>>
    }
    '/sitemap.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/sitemap.xml').default>>>>
    }
    '/robots.txt': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/nitro/server/robots-txt').default>>>>
    }
    '/__robots__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/nitro/server/__robots__/debug').default>>>>
    }
    '/__robots__/debug-path.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/nitro/server/__robots__/debug-path').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}