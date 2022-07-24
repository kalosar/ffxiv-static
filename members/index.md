<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
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
