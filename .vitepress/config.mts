import {defineConfig} from 'vitepress'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const logo = "/logo.svg"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Aurora",
    description: "Aurora一站式运维工具平台, DevOps Tools",
    lang: "zh-CN",
    vite: {
        css: {
            postcss: {
                plugins: [
                    tailwindcss,
                    autoprefixer,
                ]
            }
        }
    },
    head: [
        ['link', {
            rel: 'icon',
            href: logo,
        }],
        // ['link', {rel: 'stylesheet', href: '/style.css'}],
    ],
    lastUpdated: false,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: logo,
        nav: [
            {text: '使用手册', link: '/user/'},
            {text: '开发者指南', link: '/developer/'},
            {text: 'Demo', link: 'https://docker.ac.cn'}
        ],
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        },

        sidebar: {
            "user": [
                {
                    text: "简介",
                    link: "/user/",
                },
                {
                    text: "快速开始",
                    items: [
                        {
                            text: "写在前面",
                            link: "/user/start/",
                        },
                        {
                            text: "安装指南",
                            link: "/user/start/install",
                        },
                        {
                            text: "配置项",
                            link: "/user/start/options",
                        }
                    ]
                },
                {
                    text: "使用指南",
                    items: [
                        {
                            text: "登录",
                            link: "/user/use/login",
                        }
                    ]
                }
            ],
            "developer": [
                {
                    text: "开发者指南",
                    collapsed: true,
                    link: "/developer/",
                    items: [
                        {
                            text: "系统开发",
                            link: "/developer/system/"
                        },
                        {
                            text: "插件开发",
                            link: "/developer/plugin/",
                            items: [
                                {text: "准备工作", link: "/developer/plugin/prepare"},
                                {text: "插件描述", link: "/developer/plugin/manifest"},
                                {
                                    text: "服务端",
                                    collapsed: true,
                                    items: [
                                        {text: "生命周期", link: "/developer/plugin/server/lifecycle"},
                                        // {text: "扩展点", link: "/developer/plugin/server/extension"},
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        // footer: {
        //     message: "",
        //     copyright: "<div class='flex flex-col text-xs'><span>Copyright @ 2024 Aurora</span><span><a style='text-decoration: none' href='http://www.beian.miit.gov.cn/' target='_blank'>冀公网安备 13112202000250 号</a> <a style='text-decoration: none' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13112202000250' target='_blank'>冀ICP备20003324号</a></span></div>"
        // },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/mr5356/aurora'}
        ]
    }
})
