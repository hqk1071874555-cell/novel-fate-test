export const deaths = [
  {
    id: 'sacrifice',
    name: '为爱牺牲',
    subtitle: '英雄式退场',
    description: '你用自己的生命换来了他人的平安。',
    condition: (scores) => scores.sacrifice >= 3 && scores.action >= 2
  },
  {
    id: 'betrayed',
    name: '被反杀',
    subtitle: '聪明反被聪明误',
    description: '你算尽了一切，唯独漏算了人心。',
    condition: (scores) => scores.sacrifice <= -2 && scores.principle <= -1
  },
  {
    id: 'collateral',
    name: '无辜躺枪',
    subtitle: '人在家中坐，锅从天上来',
    description: '你什么都没做错，但还是没能躲过去。',
    condition: (scores) => scores.action <= -2 && scores.emotion <= -1
  },
  {
    id: 'peaceful',
    name: '功成身退',
    subtitle: '善有善报',
    description: '你守住本心，活到了最后。',
    condition: (scores) => scores.principle >= 3 && scores.emotion >= 2
  },
  {
    id: 'used',
    name: '被牺牲',
    subtitle: '工具人的宿命',
    description: '你付出了全部，却只是别人的棋子。',
    condition: (scores) => scores.sacrifice >= 3 && scores.action <= -2
  },
  {
    id: 'survive',
    name: '活到最后',
    subtitle: '赢麻了',
    description: '不管世界怎么变，你总能找到活下去的路。',
    condition: (scores) => scores.sacrifice <= -2 && scores.action >= 2
  }
];
