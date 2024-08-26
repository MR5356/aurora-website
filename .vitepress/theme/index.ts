// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'animate.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "layout-bottom": () => h('div', { class: 'flex flex-col text-xs w-full justify-center p-4 relative' }, [
        h('span', {class: 'text-center'}, 'Copyright @ 2024 Aurora'),
        h('span', {class: 'text-center flex gap-2 justify-center'}, [
          h('a', { style: 'text-decoration: none', href: 'http://www.beian.miit.gov.cn/', target: '_blank' }, '冀公网安备 13112202000250 号'),
          h('a', { style: 'text-decoration: none', href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13112202000250', target: '_blank' }, '冀ICP备20003324号')
        ]),
        h('span', { class: 'absolute right-4 bottom-4' }, 'Compiled and deployed using Aurora')
      ]),
      "home-hero-image": () => h('div', { class: 'w-full h-full flex items-center justify-center relative overflow-hidden' }, [
        h('img', { src: './logo.svg', class: 'w-40 aspect-square absolute m-auto inset-0 aspect-square z-10' }),
        h('img', { src: './assets/bg.svg', class: 'scale-90 absolute rounded-full inset-0 m-auto z-0 animate-spin rotate-180', style: 'animation: spin 60s linear infinite'})
      ]),
      "home-hero-info": () => h('div', {class: 'flex flex-col gap-6'}, [
        h('div', { class: 'text-3xl font-bold animate__animated animate__bounce'}, [
          'Aurora'
        ]),
        h('div', { class: 'text-5xl font-black'}, [
          '开源的一站式自动化运维平台'
        ]),
        h('div', { class: 'text-2xl'}, [
          '使运维效率更高效、更简单'
        ]),
        
      ])
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
