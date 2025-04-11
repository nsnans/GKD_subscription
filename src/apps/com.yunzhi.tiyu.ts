import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yunzhi.tiyu',
  name: '云运动',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/6df5defd-2455-4c58-ad9a-a6ccab1c5e96',
          snapshotUrls: 'https://i.gkd.li/i/14429559',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-首页卡片广告',
      desc: '点击关闭-点击[不感兴趣]',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击关闭',
          activityIds: 'com.yunzhi.tiyu.module.MainActivity',
          matches:
            '@Image[childCount=0][visibleToUser=true][width<80&&height<80] < View[childCount=1] +n View[childCount=2] >(2,3) [text="广告"] <<n [vid="viewAd" || vid="fl_flow_content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/369a65c8-4207-441b-a20d-2f5e402ea983',
          snapshotUrls: [
            'https://i.gkd.li/i/14428780',
            'https://i.gkd.li/i/14428777',
            'https://i.gkd.li/i/14446375',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[不感兴趣]',
          activityIds: 'com.yunzhi.tiyu.module.MainActivity',
          matches: '@[clickable=true] > [text="不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1e5bff7e-b82b-458e-9179-364e6bf2c1da',
          snapshotUrls: 'https://i.gkd.li/i/14446216',
        },
      ],
    },
  ],
});
