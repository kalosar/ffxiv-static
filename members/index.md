<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/3ab5f955d8fd04ddac8aa7745db82a9f_40d57ba713628f3f1ef5ef204b6d76d2fc0_96x96.jpg?1661502035',
    name: 'Kuro Sj',
    title: 'Tank',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/eu/ragnarok/kuro%20sj',
  },
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/3ad16083cb398c14316e5dd001f674db_7206469080400ed57a5373d0a9c55c59fc0_96x96.jpg?1661714841',
    name: 'Grigori Dogma',
    title: 'Tank',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/eu/lich/grigori%20dogma',
  },
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/d950ec6ba169a903c58315cb97060f0c_40d57ba713628f3f1ef5ef204b6d76d2fc0_96x96.jpg?1661704700',
    name: 'Sara Neko',
    title: 'Barrier Healer',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/eu/ragnarok/sara%20neko',
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
    avatar: 'https://img2.finalfantasyxiv.com/f/7e1816786a6868588c05a4561139caa3_40d57ba713628f3f1ef5ef204b6d76d2fc0_96x96.jpg?1661560409',
    name: 'Tontra To',
    title: 'Melee',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/eu/ragnarok/tonntra%20to',
  },
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/8047c4f1f85f1b426e4e5bf5cde1b2d7_40d57ba713628f3f1ef5ef204b6d76d2fc0_96x96.jpg?1661686301',
    name: 'Frost Toshiro',
    title: 'Ranged Physical',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/eu/ragnarok/frost%20toshiro',
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
    avatar: '/tnk4.svg',
    name: 'Tank',
    title: 'Main'
  },
  {
    avatar: '/tnk4.svg',
    name: 'Tank',
    title: 'Off'
  },
  {
    avatar: '/hlr4.svg',
    name: 'Healer',
    title: 'Barrier'
  },
  {
    avatar: '/rng4.svg',
    name: 'DPS',
    title: 'Phys. Ranged',
  },
  {
    avatar: '/mel4.svg',
    name: 'DPS',
    title: 'Melee'
  },
  {
    avatar: '/mel4.svg',
    name: 'DPS',
    title: 'Melee'
  }
]

</script>

# Limit Break

## Members

<VPTeamMembers size="medium" :members="members" />

## Available slots

See the [recruting](./recruiting.md) page for more details.

<VPTeamMembers size="small" :members="recruiting" />
