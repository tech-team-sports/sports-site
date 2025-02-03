import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["site"]?: typeof import("D:/sports-site-1/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["leaflet"]?: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["unocss"]?: typeof import("@unocss/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["aos"]?: typeof import("nuxt-aos").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["usebootstrap"]?: typeof import("usebootstrap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["D:/sports-site-1/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/leaflet", Exclude<NuxtConfig["leaflet"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@unocss/nuxt", Exclude<NuxtConfig["unocss"], boolean>] | ["nuxt-aos", Exclude<NuxtConfig["aos"], boolean>] | ["usebootstrap", Exclude<NuxtConfig["usebootstrap"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["site"]?: typeof import("D:/sports-site-1/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["leaflet"]?: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["unocss"]?: typeof import("@unocss/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["aos"]?: typeof import("nuxt-aos").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["usebootstrap"]?: typeof import("usebootstrap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["D:/sports-site-1/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/leaflet", Exclude<NuxtConfig["leaflet"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@unocss/nuxt", Exclude<NuxtConfig["unocss"], boolean>] | ["nuxt-aos", Exclude<NuxtConfig["aos"], boolean>] | ["usebootstrap", Exclude<NuxtConfig["usebootstrap"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-simple-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },
  }
  interface PublicRuntimeConfig {
   usebootstrap: {
      scss: boolean,

      bootstrap: {
         prefix: Array<string>,

         presets: {
            "button-color": Array<string>,

            "alert-color": Array<string>,

            "background-color": Array<string>,

            "text-color": Array<string>,

            "border-color": Array<string>,

            "text-bg-color": Array<string>,

            "link-color": Array<string>,
         },
      },

      html: {
         prefix: string,
      },

      icon: {
         prefix: string,
      },

      extend: {
         prefix: Array<string>,
      },

      unocss: {
         prefix: string,
      },

      image: boolean,

      fonts: boolean,

      sitemap: boolean,

      robots: boolean,

      shiki: boolean,

      leaflet: boolean,

      mdc: boolean,

      tiptap: boolean,

      vueuse: {
         prefix: string,
      },

      pwa: boolean,

      aos: boolean,

      echarts: boolean,

      dynamicRoute: {
         prefix: string,

         defaults: {
            lang: string,
         },
      },

      integration: {
         prefix: string,

         protocol: {
            "local-storage": {
               type: string,
            },

            "session-storage": {
               type: string,
            },

            state: {
               type: string,
            },

            api: {
               type: string,

               prefix: string,

               lazy: boolean,

               sync: {
                  method: string,

                  delay: number,

                  maxWait: number,
               },
            },

            query: {
               type: string,
            },

            path: {
               type: string,
            },

            hash: {
               type: string,
            },

            params: {
               type: string,
            },

            route: {
               type: string,
            },

            "seo-meta": {
               type: string,
            },

            helper: {
               type: string,
            },

            "app-config": {
               type: string,
            },

            "dom-attr": {
               type: string,
            },

            localization: {
               type: string,
            },

            reqres: {
               type: string,

               prefix: string,
            },
         },

         viewState: boolean,

         actionState: {
            type: Array<string>,
         },
      },
   },

   mdc: {
      components: {
         prose: boolean,

         map: any,
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   aos: any,
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }