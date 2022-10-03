<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/040caef37e001cbc608ce33f1916c2dd_777c57311d510ca65dac3c1077dee435fc0_96x96.jpg?1663706276',
    name: 'Maki Yato',
    title: 'Main Tank',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/id/137685'
  },
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/e7d5bbfd231842ba050b0b091d940133_f0a43d6e5eea19af337a176e9836acddfc0_96x96.jpg?1664585219',
    name: 'Leon Glaves',
    title: 'Off Tank',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/id/18796231'
  },
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/76207937f8c9a5e2f5dc149c0ab15f70_40d57ba713628f3f1ef5ef204b6d76d2fc0_96x96.jpg?1657995139',
    name: 'Elizynne E\'yla',
    title: 'Pure Healer',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/eu/ragnarok/elizynne%20e%27yla',
    links: [
      {
        icon: 'discord',
        link: 'https://discordapp.com/users/228154454304751626/'
      }
    ]
  },
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/41a6cce8bf7411adc78dc4c22a665608_5047bc596a4bab2dc7f7c120bb22dec5fc0_96x96.jpg?1664584758',
    name: 'Siero Mclala',
    title: 'Melee',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/id/11604165',
  },
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/03a93c1264f864a1b62f9a507ffd4943_40d57ba713628f3f1ef5ef204b6d76d2fc0_96x96.jpg?1661719909',
    name: 'Meluna Miyazaki',
    title: 'Melee',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/eu/ragnarok/meluna%20miyazaki',
  },
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/e5186396ae58e4e54ec955345e677046_f0a43d6e5eea19af337a176e9836acddfc0_96x96.jpg?1664613852',
    name: 'Shizune Noraneko',
    title: 'Ranged Physical',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/id/18797922',
  },
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/cb6632a5931eb842b9abfc842b2727c7_40d57ba713628f3f1ef5ef204b6d76d2fc0_96x96.jpg?1658452507',
    name: 'Emi E\'yla',
    title: 'Caster',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/eu/ragnarok/emi%20e%27yla',
    links: [
      { 
        icon: 'discord',
        link: 'https://discordapp.com/users/102178270178480128/'
      }
    ]
  }
]

const recruiting = [
  {
    avatar: '/hlr4.svg',
    name: 'Healer',
    title: 'Barrier',
    org: '',
    orgLink: '',
  }
]

</script>
# Meet the members

<VPTeamMembers size="medium" :members="members" />

## Available slots

See the [recruting](./recruiting.md) page for more details.

<VPTeamMembers size="small" :members="recruiting" />
