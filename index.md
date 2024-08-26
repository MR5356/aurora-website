---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Aurora"
  text: ""
  image: "./assets/dashboard.jpg"
  tagline: 开源的自动化运维工具
  actions:
    - theme: brand
      text: 快速上手
      link: /user
    - theme: alt
      text: 在线示例
      link: https://demo.docker.ac.cn
    - theme: alt
      text: 开发指南
      link: /developer
# features:
#   - title: 主机管理
#     details: 支持录入多台服务器主机，提供便捷的主机管理操作。用户可以对单个主机或主机组进行一键执行和定时执行操作，并且支持通过在线终端一键连接至主机，极大提高管理效率。
#   - title: 在线终端
#     details: 通过在线终端一键连接至主机，极大提高管理效率，同时支持多种认证方式，满足各种认证需求。
#   - title: 计划任务
#     details: 支持秒级精度的定时任务执行，提供多种定时任务策略。用户可以灵活设定任务执行时间和频率，满足各种复杂的任务调度需求。
#   - title: 个性通知
#     details: 支持多种通知类型，用户可以自定义通知类型和通知模板。内置飞书通知、Webhook通知等多种通知方式，确保重要信息及时传达。
#   - title: 健康检查
#     details: 支持多种健康检查类型，用户可以自定义健康检查类型和健康检查模板。内置HTTP健康检查、主机健康检查、数据库健康检查等多种健康检查方式，确保服务健康状态及时更新。
#   - title: 功能扩展
#     details: 通过插件系统支持动态扩展系统功能。用户可以根据需求灵活安装和使用各种插件，进一步提升系统的功能性和适用性。
---

<script setup>
import {onMounted} from 'vue'
function handleOpen(src) {
    window.open(src, '_blank')
}

onMounted(()=> {
    const buttons = document.querySelectorAll('.colorView');
    buttons.forEach((button) => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });
})
</script>
<div class="flex flex-col gap-12">
    <!-- 仪表盘 -->
    <div class="w-full aspect-video overflow-hidden rounded-md shadow-2xl shadow-blue-500/50">
        <img src="/assets/dashboard.jpg" alt="dashboard"></img>
    </div>
    <div class='flex flex-col gap-4'>
        <div class="text-3xl font-bold flex gap-2 items-center justify-start">
            <div>Features</div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-4 lg:gap-8">
            <div class="bg-blue-50 dark:bg-slate-800 p-4 rounded-xl colorView flex flex-col gap-4">
                <div class="flex justify-between">
                    <div class="flex gap-2 items-center">
                        <div class="iconfont icon-host" style="font-size: 1.8rem"></div>
                        <div class="font-bold">主机管理</div>
                    </div>
                </div>
                <div class="text-sm text-gray-500">支持录入多台服务器主机，提供便捷的主机管理操作。用户可以对单个主机或主机组进行一键执行和定时执行操作，并且支持通过在线终端一键连接至主机，极大提高管理效率。</div>
            </div>
            <div class="bg-blue-50 dark:bg-slate-800 p-4 rounded-xl colorView flex flex-col gap-4">
                <div class="flex justify-between">
                    <div class="flex gap-2 items-center">
                        <div class="iconfont icon-script" style="font-size: 1.8rem"></div>
                        <div class="font-bold">代码片段</div>
                    </div>
                </div>
                <div class="text-sm text-gray-500">提供便捷的代码片段管理功能，用户可以存储和复用常用的代码片段，提高开发效率。</div>
            </div>
            <div class="col-span-2 row-span-2 bg-blue-50 dark:bg-slate-800 p-4 rounded-xl colorView flex flex-col justify-between gap-4">
                <div>
                    <div class="flex justify-between">
                        <div class="iconfont icon-plugin" style="font-size: 3rem"></div>
                        <div class="text-xs text-slate-300">in development</div>
                    </div>
                    <div class="text-sm text-gray-500">通过插件系统支持动态扩展系统功能。用户可以根据需求灵活安装和使用各种插件，进一步提升系统的功能性和适用性。</div>
                </div>
                <div class="font-bold">扩展插件</div>
            </div>
            <div class="bg-blue-50 dark:bg-slate-800 p-4 rounded-xl colorView flex flex-col gap-4">
                <div class="flex justify-between">
                    <div class="flex gap-2 items-center">
                        <div class="iconfont icon-terminal" style="font-size: 1.8rem"></div>
                        <div class="font-bold">在线终端</div>
                    </div>
                </div>
                <div class="text-sm text-gray-500">通过在线终端一键连接至主机，极大提高管理效率，同时支持多种认证方式，满足各种认证需求。</div>
            </div>
            <!-- <div class="bg-blue-50 dark:bg-slate-800 p-4 rounded-xl colorView flex flex-col gap-4">
                <div class="flex justify-between">
                    <div class="iconfont icon-user-manager" style="font-size: 1.8rem"></div>
                </div>
                <div class="font-bold">用户管理</div>
            </div> -->
            <div class="bg-blue-50 dark:bg-slate-800 p-4 rounded-xl colorView flex flex-col gap-4">
                <div class="flex justify-between">
                    <div class="flex gap-2 items-center">
                        <div class="iconfont icon-health" style="font-size: 1.8rem"></div>
                        <div class="font-bold">主机监控</div>
                    </div>
                </div>
                <div class="text-sm text-gray-500">支持多种健康检查类型，用户可以自定义健康检查类型和健康检查模板。内置HTTP健康检查、主机健康检查、数据库健康检查等多种健康检查方式，确保服务健康状态及时更新。</div>
            </div>
            <div class="bg-blue-50 dark:bg-slate-800 p-4 rounded-xl colorView flex flex-col gap-4">
                <div class="flex justify-between">
                    <div class="flex gap-2 items-center">
                        <div class="iconfont icon-task" style="font-size: 1.8rem"></div>
                        <div class="font-bold">计划任务</div>
                    </div>
                </div>
                <div class="text-sm text-gray-500">支持秒级精度的定时任务远程执行，提供多种定时任务策略。用户可以灵活设定任务执行时间和频率，满足各种复杂的任务调度需求。</div>
            </div>
            <div class="bg-blue-50 dark:bg-slate-800 p-4 rounded-xl colorView flex flex-col gap-4">
                <div class="flex justify-between">
                    <div class="flex gap-2 items-center">
                        <div class="iconfont icon-notify" style="font-size: 1.8rem"></div>
                        <div class="font-bold">个性通知</div>
                    </div>
                    <div class="text-xs text-slate-300">in development</div>
                </div>
                <div class="text-sm text-gray-500">支持多种通知类型，用户可以自定义通知类型和通知模板。内置飞书通知、Webhook通知等多种通知方式，确保重要信息及时传达。</div>
            </div>
            <div class="bg-blue-50 dark:bg-slate-800 p-4 rounded-xl colorView flex flex-col gap-4">
                <div class="flex justify-between">
                    <div class="flex gap-2 items-center">
                        <div class="iconfont icon-pipeline" style="font-size: 1.8rem"></div>
                        <div class="font-bold">流水线</div>
                    </div>
                    <div class="text-xs text-slate-300">in development</div>
                </div>
                <div class="text-sm text-gray-500">提供强大的流水线功能，用户可以自定义任务流程，实现自动化的任务执行和管理，提高工作效率。</div>
            </div>
            <div class="bg-blue-50 dark:bg-slate-800 p-4 rounded-xl colorView flex flex-col gap-4">
                <div class="flex justify-between">
                    <div class="flex gap-2 items-center">
                        <div class="iconfont icon-branch" style="font-size: 1.8rem"></div>
                        <div class="font-bold">代码管理</div>
                    </div>
                    <div class="text-xs text-slate-300">in development</div>
                </div>
                <div class="text-sm text-gray-500">提供高效的代码管理功能，支持分支管理、合并请求等操作，方便团队协作开发。</div>
            </div>
        </div>
    </div>
    <!-- 下载 -->
    <div class="flex flex-col gap-4">
        <div class="text-3xl font-bold flex gap-2 items-center justify-start">
            <div>Download</div>
            <div><img src="https://img.shields.io/github/v/release/MR5356/aurora" alt="release"></div>
        </div>
        <div class="md:px-20 lg:px-40 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-4 lg:gap-12">
            <div class="flip-card w-full aspect-square flex-1 rounded-lg overflow-hidden">
                <div class="flip-card-inner">
                    <div class="flip-card-front bg-gray-100 dark:bg-slate-800 flex items-center justify-center iconfont icon-windows" style="font-size: calc(1rem + 3vw)"></div>
                    <div class="flip-card-back bg-slate-100 dark:bg-slate-800 flex flex-col gap-2 items-center justify-center font-mono">
                        <div class="font-bold flex gap-1 items-center w-full h-full rounded-t-lg justify-center hover:bg-sky-200 hover:dark:bg-slate-600 cursor-pointer" @click="handleOpen('https://github.com/MR5356/aurora/releases/latest/download/aurora-windows-amd64.tar.gz')">
                            <div class="iconfont icon-windows" style="font-size: calc(10px + 1.2vw)"></div>
                            <div style="font-size: calc(10px + 0.3vw)">.exe(x86_64)</div>
                        </div>
                        <div class="font-bold flex gap-1 items-center w-full h-full rounded-b-lg justify-center hover:bg-sky-200 hover:dark:bg-slate-600 cursor-pointer" @click="handleOpen('https://github.com/MR5356/aurora/releases/latest/download/aurora-windows-arm64.tar.gz')">
                            <div class="iconfont icon-windows" style="font-size: calc(10px + 1.2vw)"></div>
                            <div style="font-size: calc(10px + 0.3vw)">.exe(ARM64)&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-card w-full aspect-square flex-1 rounded-lg overflow-hidden">
                <div class="flip-card-inner">
                    <div class="flip-card-front bg-gray-100 dark:bg-slate-800 flex items-center justify-center iconfont icon-mac" style="font-size: calc(1rem + 3vw)"></div>
                    <div class="flip-card-back bg-slate-100 dark:bg-slate-800 flex flex-col gap-2 items-center justify-center font-mono">
                        <div class="font-bold flex gap-1 items-center w-full h-full rounded-t-lg justify-center hover:bg-sky-200 hover:dark:bg-slate-600 cursor-pointer" @click="handleOpen('https://github.com/MR5356/aurora/releases/latest/download/aurora-darwin-amd64.tar.gz')">
                            <div class="iconfont icon-mac" style="font-size: calc(10px + 1.2vw)"></div>
                            <div style="font-size: calc(10px + 0.3vw)">Intel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        </div>
                        <div class="font-bold flex gap-1 items-center w-full h-full rounded-b-lg justify-center hover:bg-sky-200 hover:dark:bg-slate-600 cursor-pointer" @click="handleOpen('https://github.com/MR5356/aurora/releases/latest/download/aurora-darwin-arm64.tar.gz')">
                            <div class="iconfont icon-mac" style="font-size: calc(10px + 1.2vw)"></div>
                            <div style="font-size: calc(10px + 0.3vw)">Apple Silicon</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-card w-full aspect-square flex-1 rounded-lg overflow-hidden">
                <div class="flip-card-inner">
                    <div class="flip-card-front bg-gray-100 dark:bg-slate-800 flex items-center justify-center iconfont icon-linux" style="font-size: calc(1rem + 3vw)"></div>
                    <div class="flip-card-back bg-slate-100 dark:bg-slate-800 flex flex-col gap-2 items-center justify-center font-mono">
                        <div class="font-bold flex gap-1 items-center w-full h-full rounded-t-lg justify-center hover:bg-sky-200 hover:dark:bg-slate-600 cursor-pointer" @click="handleOpen('https://github.com/MR5356/aurora/releases/latest/download/aurora-linux-amd64.tar.gz')">
                            <div class="iconfont icon-linux" style="font-size: calc(10px + 1.2vw)"></div>
                            <div style="font-size: calc(10px + 0.3vw)">AMD64</div>
                        </div>
                        <div class="font-bold flex gap-1 items-center w-full h-full rounded-b-lg justify-center hover:bg-sky-200 hover:dark:bg-slate-600 cursor-pointer" @click="handleOpen('https://github.com/MR5356/aurora/releases/latest/download/aurora-linux-amd64.tar.gz')">
                            <div class="iconfont icon-linux" style="font-size: calc(10px + 1.2vw)"></div>
                            <div style="font-size: calc(10px + 0.3vw)">ARM64</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-card w-full aspect-square flex-1 rounded-lg overflow-hidden">
                <div class="flip-card-inner">
                    <div class="flip-card-front bg-gray-100 dark:bg-slate-800 flex items-center justify-center iconfont icon-yuanma" style="font-size: calc(1rem + 3vw)"></div>
                    <div class="flip-card-back bg-slate-100 dark:bg-slate-800 flex flex-col gap-2 items-center justify-center font-mono">
                        <div class="font-bold flex gap-1 items-center w-full h-full rounded-t-lg justify-center hover:bg-sky-200 hover:dark:bg-slate-600 cursor-pointer" @click="handleOpen('https://github.com/MR5356/aurora/releases/latest')">
                            <div class="iconfont icon-zip" style="font-size: calc(10px + 1.2vw)"></div>
                            <div style="font-size: calc(10px + 0.3vw)">zip&nbsp;&nbsp;&nbsp;</div>
                        </div>
                        <div class="font-bold flex gap-1 items-center w-full h-full rounded-b-lg justify-center hover:bg-sky-200 hover:dark:bg-slate-600 cursor-pointer" @click="handleOpen('https://github.com/MR5356/aurora/releases/latest')">
                            <div class="iconfont icon-TAR" style="font-size: calc(10px + 1.2vw)"></div>
                            <div style="font-size: calc(10px + 0.3vw)">tar.gz</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 反馈 -->
    <!-- <div class='flex gap-20'>
        <div class="flex flex-col gap-4">
            <div class="text-xl font-semibold">当有新的产品功能发布时，及时通知我</div>
            <div class="flex flex-col gap-2">
                <input type="text" class="rounded shadow w-full placeholder:text-gray-400 focus:ring-2 p-2" placeholder="电子邮件" />
                <div class="text-xs text-gray-400">提交此表单，即表示同意我们的隐私政策</div>
            </div>
            <div class="px-4 py-2 bg-sky-200 hover:bg-sky-300 cursor-pointer select-none w-fit rounded-full font-semibold">提交</div>
        </div>
        <div>
            <div class="font-bold text-lg">关注我们</div>
            <div>
                社区论坛
            </div>
        </div>
    </div> -->
</div>

<style lang="scss" scope>

</style>
