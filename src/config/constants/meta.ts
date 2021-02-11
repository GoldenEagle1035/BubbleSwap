import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BubbleSwap',
  description:
    '',
  image: '/images/mouth/BubbleGum-Mouth.gif',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BubbleSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('BubbleSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('BubbleSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('BubbleSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('BubbleSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('BubbleSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BubbleSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BubbleSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('BubbleSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BubbleSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('BubbleSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BubbleSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BubbleSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('BubbleSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BubbleSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BubbleSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('BubbleSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('BubbleSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('BubbleSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('BubbleSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('BubbleSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('BubbleSwap Info & Analytics')}`,
        description: 'View statistics for BubbleSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('BubbleSwap Info & Analytics')}`,
        description: 'View statistics for BubbleSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('BubbleSwap Info & Analytics')}`,
        description: 'View statistics for BubbleSwap exchanges.',
      }
    default:
      return null
  }
}
