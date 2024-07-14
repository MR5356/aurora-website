// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "layout-bottom": () => h('div', { class: 'flex flex-col text-xs w-full justify-center p-4' }, [
        h('span', {class: 'text-center'}, 'Copyright @ 2024 Aurora'),
        h('span', {class: 'text-center flex gap-2 justify-center'}, [
          h('a', { style: 'text-decoration: none', href: 'http://www.beian.miit.gov.cn/', target: '_blank' }, '冀公网安备 13112202000250 号'),
          h('a', { style: 'text-decoration: none', href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13112202000250', target: '_blank' }, '冀ICP备20003324号')
        ]),
      ]),
      "home-hero-image": () => h('div', { class: 'w-full h-full flex items-center justify-center' }, [
        h('img', { src: './assets/dashboard.jpg', class: 'w-full aspect-video rounded-md shadow-2xl shadow-blue-500/50' })
      ])
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
