<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/cb6632a5931eb842b9abfc842b2727c7_40d57ba713628f3f1ef5ef204b6d76d2fc0_96x96.jpg?1658452507',
    name: 'Emi E\'yla',
    title: 'Caster',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/eu/ragnarok/emi%20e%27yla'
  },
  {
    avatar: 'https://img2.finalfantasyxiv.com/f/76207937f8c9a5e2f5dc149c0ab15f70_40d57ba713628f3f1ef5ef204b6d76d2fc0_96x96.jpg?1657995139',
    name: 'Elizynne E\'yla',
    title: 'Pure Healer',
    org: 'FFLOGS',
    orgLink: 'https://www.fflogs.com/character/eu/ragnarok/elizynne%20e%27yla'
  }
]

const recruiting = [
  {
    avatar: '../assets/tnk4.svg',
    name: 'Tank',
    title: 'Main'
  },
  {
    avatar: '../assets/tnk4.svg',
    name: 'Tank',
    title: 'Off'
  },
  {
    avatar: '../assets/hlr4.svg',
    name: 'Healer',
    title: 'Barrier'
  },
  {
    avatar: '../assets/rng4.svg',
    name: 'DPS',
    title: 'Phys. Ranged',
  },
  {
    avatar: '../assets/mel4.svg',
    name: 'DPS',
    title: 'Melee'
  },
  {
    avatar: '../assets/mel4.svg',
    name: 'DPS',
    title: 'Melee'
  }
]

</script>

# Recruiting

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus tempora alias. Cum quisquam vero officia facilis deserunt nulla! Non saepe soluta odit iusto suscipit veniam, placeat beatae inventore molestiae.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nihil. Excepturi, delectus dignissimos quam in aspernatur, alias temporibus eum, laudantium necessitatibus doloremque minima quasi perferendis consectetur sed ex! Nostrum, tenetur.
Debitis consequuntur magni ullam, ex provident non pariatur laboriosam explicabo porro aliquam deserunt a accusantium amet eligendi. Accusantium a totam qui fugiat nostrum iure cumque ipsum dolores quisquam, quia quo?

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe dolores atque autem illum ipsum omnis iste rem dolor optio ut commodi aut ullam perferendis, facilis debitis. Quos, obcaecati?

## Available slots

<VPTeamMembers size="medium" :members="recruiting" />

## Requirements

Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio sunt modi libero blanditiis maxime, deleniti corporis tempore dicta quisquam dolore neque cumque molestiae ab voluptatibus hic, impedit at nulla!

### Logs

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nulla, architecto voluptate quasi doloremque, ut, minus iusto unde porro possimus alias. Impedit tempora ducimus dolorem, aperiam velit facere molestias minus!

### Schedule

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum hic laboriosam, voluptatum labore delectus et quisquam eligendi vero odit ad dolor culpa veritatis porro repellat, possimus illum dolorem reiciendis voluptas?

#### Week 1

| Monday - Sunday |
| --------------- |
| 10ST - 22ST     |

#### Week 2 - Until clear

| Monday - Friday | Saturday - Sunday |
| --------------- | ----------------- |
| 16ST - 22ST     | 10ST - 22ST       |

#### Reclears

| Tuesday      |
| ------------ |
| 16ST - CLEAR |

## Members

<VPTeamMembers size="medium" :members="members" />
