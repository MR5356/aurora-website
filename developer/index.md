<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/39437323',
    name: 'Rui Ma',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/MR5356' },
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members"></VPTeamMembers>