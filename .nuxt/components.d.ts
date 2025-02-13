
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'ContactForm': typeof import("../components/ContactForm/ContactForm.vue")['default']
    'BadmintonBadAnimation': typeof import("../components/badminton/BadAnimation.vue")['default']
    'BadmintonBadContents': typeof import("../components/badminton/BadContents.vue")['default']
    'BadmintonBadSlider': typeof import("../components/badminton/BadSlider.vue")['default']
    'BadmintonBadTitle': typeof import("../components/badminton/BadTitle.vue")['default']
    'IndexSlidersMainSlider': typeof import("../components/index/sliders/MainSlider.vue")['default']
    'IndexSportsLinks': typeof import("../components/index/sports/links.vue")['default']
    'NewsItem': typeof import("../components/news/NewsItem.vue")['default']
    'NewsList': typeof import("../components/news/NewsList.vue")['default']
    'ShareAppFooter': typeof import("../components/share/AppFooter.vue")['default']
    'ShareAppheader': typeof import("../components/share/appheader.vue")['default']
    'SoccerSlider': typeof import("../components/soccer/Slider/soccerSlider.vue")['default']
    'SoccerLinks': typeof import("../components/soccer/links/soccer-links.vue")['default']
    'SoccerSoccersliderMainslider': typeof import("../components/soccer/soccerslider/mainslider.vue")['default']
    'WholeAnimationReturnTopButton': typeof import("../components/whole-animation/ReturnTopButton.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyContactForm': typeof import("../components/ContactForm/ContactForm.vue")['default']
    'LazyBadmintonBadAnimation': typeof import("../components/badminton/BadAnimation.vue")['default']
    'LazyBadmintonBadContents': typeof import("../components/badminton/BadContents.vue")['default']
    'LazyBadmintonBadSlider': typeof import("../components/badminton/BadSlider.vue")['default']
    'LazyBadmintonBadTitle': typeof import("../components/badminton/BadTitle.vue")['default']
    'LazyIndexSlidersMainSlider': typeof import("../components/index/sliders/MainSlider.vue")['default']
    'LazyIndexSportsLinks': typeof import("../components/index/sports/links.vue")['default']
    'LazyNewsItem': typeof import("../components/news/NewsItem.vue")['default']
    'LazyNewsList': typeof import("../components/news/NewsList.vue")['default']
    'LazyShareAppFooter': typeof import("../components/share/AppFooter.vue")['default']
    'LazyShareAppheader': typeof import("../components/share/appheader.vue")['default']
    'LazySoccerSlider': typeof import("../components/soccer/Slider/soccerSlider.vue")['default']
    'LazySoccerLinks': typeof import("../components/soccer/links/soccer-links.vue")['default']
    'LazySoccerSoccersliderMainslider': typeof import("../components/soccer/soccerslider/mainslider.vue")['default']
    'LazyWholeAnimationReturnTopButton': typeof import("../components/whole-animation/ReturnTopButton.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const ContactForm: typeof import("../components/ContactForm/ContactForm.vue")['default']
export const BadmintonBadAnimation: typeof import("../components/badminton/BadAnimation.vue")['default']
export const BadmintonBadContents: typeof import("../components/badminton/BadContents.vue")['default']
export const BadmintonBadSlider: typeof import("../components/badminton/BadSlider.vue")['default']
export const BadmintonBadTitle: typeof import("../components/badminton/BadTitle.vue")['default']
export const IndexSlidersMainSlider: typeof import("../components/index/sliders/MainSlider.vue")['default']
export const IndexSportsLinks: typeof import("../components/index/sports/links.vue")['default']
export const NewsItem: typeof import("../components/news/NewsItem.vue")['default']
export const NewsList: typeof import("../components/news/NewsList.vue")['default']
export const ShareAppFooter: typeof import("../components/share/AppFooter.vue")['default']
export const ShareAppheader: typeof import("../components/share/appheader.vue")['default']
export const SoccerSlider: typeof import("../components/soccer/Slider/soccerSlider.vue")['default']
export const SoccerLinks: typeof import("../components/soccer/links/soccer-links.vue")['default']
export const SoccerSoccersliderMainslider: typeof import("../components/soccer/soccerslider/mainslider.vue")['default']
export const WholeAnimationReturnTopButton: typeof import("../components/whole-animation/ReturnTopButton.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyContactForm: typeof import("../components/ContactForm/ContactForm.vue")['default']
export const LazyBadmintonBadAnimation: typeof import("../components/badminton/BadAnimation.vue")['default']
export const LazyBadmintonBadContents: typeof import("../components/badminton/BadContents.vue")['default']
export const LazyBadmintonBadSlider: typeof import("../components/badminton/BadSlider.vue")['default']
export const LazyBadmintonBadTitle: typeof import("../components/badminton/BadTitle.vue")['default']
export const LazyIndexSlidersMainSlider: typeof import("../components/index/sliders/MainSlider.vue")['default']
export const LazyIndexSportsLinks: typeof import("../components/index/sports/links.vue")['default']
export const LazyNewsItem: typeof import("../components/news/NewsItem.vue")['default']
export const LazyNewsList: typeof import("../components/news/NewsList.vue")['default']
export const LazyShareAppFooter: typeof import("../components/share/AppFooter.vue")['default']
export const LazyShareAppheader: typeof import("../components/share/appheader.vue")['default']
export const LazySoccerSlider: typeof import("../components/soccer/Slider/soccerSlider.vue")['default']
export const LazySoccerLinks: typeof import("../components/soccer/links/soccer-links.vue")['default']
export const LazySoccerSoccersliderMainslider: typeof import("../components/soccer/soccerslider/mainslider.vue")['default']
export const LazyWholeAnimationReturnTopButton: typeof import("../components/whole-animation/ReturnTopButton.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
