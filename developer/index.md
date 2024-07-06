<script setup>
import { ref } from 'vue';
import axios from 'axios';

const members = ref([]);
async function init() {
    try {
        const response = await axios.get('https://api.github.com/repos/MR5356/aurora/contributors', {
            params: {
                per_page: 100,
            }
        });
        response.data.forEach((item) => {
            members.value.push({
                avatar: item['avatar_url'],
                name: item.login,
                url: item.url.replaceAll("api.", "").replaceAll("/users", ""),
            })
        })
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

function open(url) {
    window.open(url)
}
init()
</script>
# Aurora
[![release](https://img.shields.io/github/v/release/MR5356/aurora)](https://github.com/MR5356/aurora/releases)
开源、简单、易用的 DevOps 系统 

## 许可证
[![license](https://img.shields.io/github/license/MR5356/aurora)](https://github.com/MR5356/aurora/blob/master/LICENSE)
Aurora 使用 Apache-2.0 协议开源，请遵守开源协议。

## 状态
![Alt](https://repobeats.axiom.co/api/embed/81c2dd0ddaf436e055435098a54bff3a89575182.svg "Repobeats analytics image")

## 贡献者

Say hello to our awesome contributors.
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 select-none">
    <div v-for="m in members" :key="m.name" class="flex flex-col gap-2 justify-center items-center p-4 rounded-lg cursor-pointer bg-slate-50 dark:bg-slate-800" @click="open(m.url)">
        <div>
            <img class="w-14 h-14 rounded-full bg-slate-400 shadow-lg" :src="m.avatar" /></div>
        <div class="font-bold text-sm">{{m.name}}</div>
    </div>
</div>

