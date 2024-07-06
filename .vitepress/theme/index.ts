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
        h('span', {class: 'text-center'}, [
          h('a', { style: 'text-decoration: none', href: 'http://www.beian.miit.gov.cn/', target: '_blank' }, '冀公网安备 13112202000250 号'),
          h('a', { style: 'text-decoration: none', href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13112202000250', target: '_blank' }, '冀ICP备20003324号')
        ]),
      ]),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
