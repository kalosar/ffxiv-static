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

# Recruiting

Limit Break is a New Hard Core static with aims to complete the next upcoming savage tier in the first week. We wish to raid everyday when the tier releases, and have a team without toxicity. Limit Break’s standard encourages people to give and receive constructive feedback, helping out your team members so that we can get those clears.

## Available slots

<VPTeamMembers size="small" :members="recruiting" />

## Requirements

- Discord VC
- You do not have to have experience in a hardcore static, only have a hardcore mindset
- No rules against partyfinder provided it’s not before the weekly clear.
- Team Player
- Must have completed all of the current tier.
- It is really important that you understand your class and job very well. That being said, we expect a minimum best of purples for each kill.

## Schedule

To complete our aim, there will be daily raiding for 12 hours a day upon release. You will be expected to take the first week off work. If a clear has not been achieved in the first week, then the second week onwards we will be raiding daily at a reduced schedule to fit with work. Once cleared, raid days will be reduced to one reclear day a week.

### Week 1

| Monday - Sunday |
| --------------- |
| 10ST - 22ST     |

### Week 2 - Until clear

| Monday - Friday | Saturday - Sunday |
| --------------- | ----------------- |
| 17ST - 22ST     | 10ST - 22ST       |

### Reclears

| Tuesday      |
| ------------ |
| 17ST - CLEAR |

## Members

<VPTeamMembers size="medium" :members="members" />
