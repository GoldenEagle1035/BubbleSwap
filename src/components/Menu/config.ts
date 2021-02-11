import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Dashboard'),
    icon: './images/menuicons/Dashboard.png',
    href: '/',
  },
  {
    label: t('BubbleTracker'),
    icon: './images/menuicons/Tracker.png',
    href: '/tracker',
  },
  {
    label: t('BubbleSwap'),
    icon: './images/menuicons/BubbleSwap.png',
    href: '/swap',
  }
  // {
  //   label: t('Home'),
  //   icon: 'HomeIcon',
  //   href: '/',
  // },
  // {
  //   label: t('Trade'),
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: t('Exchange'),
  //       href: '/swap',
  //     },
  //     {
  //       label: t('Liquidity'),
  //       href: '/liquidity',
  //     }
  //   ],
  // },
  // {
  //   label: t('Farms'),
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: t('Pools'),
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // }
]

export default config
