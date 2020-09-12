export type SystemTags = {
  [key: string]: TagItem[]
}

export const systemOutlayTags: SystemTags = {
  // 餐饮类
  cateringTags: [
    { title: '餐饮', value: 'catering' },
    { title: '早餐', value: 'breakfast' },
    { title: '午餐/晚餐', value: 'lunch' },
    { title: '外卖', value: 'takeaway' },
    { title: '零食', value: 'snack' },
    { title: '小吃', value: 'refreshments' },
    { title: '酒水', value: 'drink' }
  ],
  // 购物类
  shoppingTags: [
    { title: '购物', value: 'shopping' },
    { title: '日用品', value: 'commodity' },
    { title: '衣服', value: 'clothes' },
    { title: '数码', value: 'digital' },
    { title: '电器', value: 'electricalAppliances' },
    { title: '家居', value: 'home' },
    { title: '化妆品', value: 'cosmetic' },
    { title: '果蔬', value: 'fruits' }
  ],
  // 娱乐类
  entertainmentTags: [
    { title: '娱乐', value: 'entertainment' },
    { title: '游戏', value: 'game' },
    { title: '电影', value: 'movie' },
    { title: '运动', value: 'sport' },
    { title: '旅游', value: 'travel' }
  ],
  // 交通类
  transportationTags: [
    { title: '交通', value: 'transportation' },
    { title: '公交', value: 'bus' },
    { title: '地铁', value: 'subway' },
    { title: '火车', value: 'train' },
    { title: '飞机', value: 'plane' },
    { title: '长途汽车', value: 'coach' },
    { title: '出租车', value: 'taxi' },
    { title: '滴滴', value: 'didi' }
  ],
  // 居住类
  liveTags: [
    { title: '居住', value: 'live' },
    { title: '话费网费', value: 'call' },
    { title: '水电费', value: 'water' },
    { title: '维修', value: 'repair' },
    { title: '房租', value: 'rent' }
  ],
  // 医疗类
  medicineTags: [
    { title: '医疗', value: 'medicine' },
    { title: '药品费', value: 'drug' },
    { title: '手术费', value: 'operation' }
  ],
  // 其它
  otherTags: [
    { title: '其它', value: 'other' }
  ]
}

export const systemIncomeTags: SystemTags = {
  // 理财类
  moneyManagementTags: [
    { title: '理财', value: 'moneyManagement' },
    { title: '工资', value: 'salary' },
    { title: '兼职', value: 'partTimeJob' },
    { title: '奖金', value: 'bonus' },
    { title: '报销', value: 'refund' },
    { title: '礼金', value: 'giftCash' }
  ],
  // 其它
  otherTags: [
    { title: '其它', value: 'other' }
  ]
}

