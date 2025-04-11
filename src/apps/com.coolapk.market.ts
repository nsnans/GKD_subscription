import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      excludeActivityIds: [
        '.view.search.', // 在搜索页面禁用
        '.view.feed.', // 在动态页面禁用
        '.view.node.DynamicNodePageActivity',
      ],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12503773',
            'https://i.gkd.li/i/13247610',
            'https://i.gkd.li/i/13264779',
            'https://i.gkd.li/i/13826359',
            'https://i.gkd.li/i/13827095',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          excludeMatches:
            '[id="com.coolapk.market:id/item_view" || vid="card_view"]',
          matches: '[text*="跳过"][text.length<5][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12917990',
            'https://i.gkd.li/i/13211392',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13247733',
            'https://i.gkd.li/i/13296816',
            'https://i.gkd.li/i/18245546',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-信息流广告',
      fastQuery: true,
      activityIds: [
        '.view.feed.FeedDetailActivityV8',
        '.view.main.MainActivity',
        '.view.node.DynamicNodePageActivity',
      ],
      rules: [
        {
          key: 0,
          matches: ['[vid="coolapk_card_view"]', '[vid="close_view"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/19004644',
            'https://i.gkd.li/i/19004652',
            'https://i.gkd.li/i/19004663',
            'https://i.gkd.li/i/19005176',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14996359',
            'https://i.gkd.li/i/15159886',
            'https://i.gkd.li/i/15587119',
          ],
        },
        {
          preKeys: [0],
          anyMatches: [
            '@[clickable=true] > [text="不感兴趣"][visibleToUser=true]',
            '[text="不感兴趣"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19004649',
            'https://i.gkd.li/i/19643258',
            'https://i.gkd.li/i/19643262',
            'https://i.gkd.li/i/19534649',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          activityIds: '.view.main.MainActivity',
          matches: '[text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/15511206',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.view.main.MainActivity',
          matches: '[text="去开启"] - [text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13296465',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-[大家还下载了]应用推荐',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.view.search.SuperSearchResultActivity',
            '.view.node.DynamicNodePageActivity',
          ],
          matches: '[text="大家还下载了"] + [vid="close_view"]',
          exampleUrls: 'https://e.gkd.li/0cfa8038-dc74-46c3-9e06-998965d73711',
          snapshotUrls: [
            'https://i.gkd.li/i/16448265',
            'https://i.gkd.li/i/16448385',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.view.search.SuperSearchResultActivity',
          matches:
            '@[desc="关闭"] <<n [vid="item_view"] <<n [vid="to_native_ad_view"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/efd366d9-1c66-4c35-b164-6f91a623e2f2',
          snapshotUrls: 'https://i.gkd.li/i/19643150',
        },
      ],
    },
  ],
});
