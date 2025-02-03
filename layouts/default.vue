<template>
 <PageLayout type="three-columns">
  <template #header>
   <AppHeader />  <!-- AppHeaderに変更 -->
  </template>
  <template #start>
   <ViewState
    v-slot="navigation"
    src="route://meta"
    path="navigation"
   >
    <Sidebar
     id="sidebar"
     active-background-color="teal-700"
     :src="`app-config://usebootstrap/navigations/${navigation.data || 'default'}`"
    />
   </ViewState>
  </template>
  <template #end>
   <Toc
    selector="#content"
    display="none lg-block print-none"
    color="teal-700"
   >
    <Localization>
     <template #en>
      On this page
     </template>
     <template #ja>
      項目
     </template>
    </Localization>
   </Toc>
  </template>
  <template #default>
   <b-div
    id="content"
   >
    <slot />
   </b-div>
  </template>
  <template #footer>
   <AppFooter />  <!-- AppFooterに変更 -->
  </template>
 </PageLayout>
</template>