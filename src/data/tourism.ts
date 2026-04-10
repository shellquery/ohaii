export const tourismContent = {
  en: {
    title: 'Top Attractions',
    subtitle: 'Must-visit destinations across the Hawaiian Islands',
    categories: ['All', 'Beach', 'Nature', 'History', 'Adventure', 'Scenic'],
    items: [
      { id: 'waikiki', name: 'Waikiki Beach', location: "Honolulu, O'ahu", category: 'Beach', rating: 4.8, img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80', description: 'Two miles of golden sand backed by the iconic Diamond Head crater. Perfect for swimming, surf lessons, and sunset cocktails. The most famous beach on Earth.' },
      { id: 'volcanoes', name: 'Hawaiʻi Volcanoes NP', location: 'Big Island', category: 'Nature', rating: 4.9, img: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800&auto=format&fit=crop&q=80', description: 'Witness active lava flows, hike through lava tubes, and peer into massive volcanic craters. One of the most unique national parks on Earth.' },
      { id: 'napali', name: 'Nā Pali Coast', location: "Kaua'i", category: 'Scenic', rating: 5.0, img: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&auto=format&fit=crop&q=80', description: 'Jaw-dropping sea cliffs rising 4,000 feet above the Pacific. Accessible by boat, helicopter, or the challenging 11-mile Kalalau Trail.' },
      { id: 'pearlharbor', name: 'Pearl Harbor Memorial', location: "O'ahu", category: 'History', rating: 4.9, img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop&q=80', description: 'The USS Arizona Memorial marks the resting place of 1,102 sailors. A deeply moving tribute to those who died on December 7, 1941.' },
      { id: 'hana', name: 'Road to Hana', location: 'Maui', category: 'Scenic', rating: 4.7, img: 'https://images.unsplash.com/photo-9HbAjlblA3k?w=800&auto=format&fit=crop&q=80', description: 'A legendary 64-mile highway with 620 curves, 59 bridges, rainforest waterfalls, bamboo groves, and black sand beaches. The journey IS the destination.' },
      { id: 'surfing', name: 'North Shore Surfing', location: "O'ahu", category: 'Adventure', rating: 4.9, img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&auto=format&fit=crop&q=80', description: "The surfing capital of the world. Winter waves at Pipeline reach 30+ feet, hosting the Triple Crown — the world's most prestigious surf competitions." },
      { id: 'haleakala', name: 'Haleakalā Sunrise', location: 'Maui', category: 'Nature', rating: 4.8, img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80', description: 'Watch the sun rise above the clouds from the 10,023-ft summit of this dormant shield volcano. Arrive before dawn for a life-changing experience.' },
      { id: 'snorkeling', name: 'Molokini Crater', location: 'Maui', category: 'Adventure', rating: 4.8, img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80', description: 'A half-submerged volcanic crater forms a natural aquarium with 250+ species of tropical fish and visibility up to 150 feet. Snorkeling paradise.' },
    ],
  },
  zh: {
    title: '热门景点',
    subtitle: '夏威夷群岛必游目的地精选',
    categories: ['全部', '海滩', '自然', '历史', '冒险', '风景'],
    items: [
      { id: 'waikiki', name: '威基基海滩', location: '欧胡岛·檀香山', category: '海滩', rating: 4.8, img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80', description: '两英里金色沙滩，背衬标志性的钻石头火山口。游泳、冲浪入门和欣赏日落的绝佳之地，地球上最著名的海滩。' },
      { id: 'volcanoes', name: '夏威夷火山国家公园', location: '大岛', category: '自然', rating: 4.9, img: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800&auto=format&fit=crop&q=80', description: '亲眼目睹活跃的熔岩流，穿越熔岩隧道，近距离俯瞰巨大的火山口。地球上最独特的国家公园之一。' },
      { id: 'napali', name: '纳帕里海岸', location: '可爱岛', category: '风景', rating: 5.0, img: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&auto=format&fit=crop&q=80', description: '高达4000英尺的壮观海崖耸立于太平洋之上。可乘船、搭直升机或沿11英里的卡拉劳步道徒步前往。' },
      { id: 'pearlharbor', name: '珍珠港纪念馆', location: '欧胡岛', category: '历史', rating: 4.9, img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop&q=80', description: '亚利桑那号纪念碑标志着1102名水兵的长眠之地。这是纪念1941年12月7日遇难者的深情致敬。' },
      { id: 'hana', name: '哈纳公路', location: '茂宜岛', category: '风景', rating: 4.7, img: 'https://images.unsplash.com/photo-9HbAjlblA3k?w=800&auto=format&fit=crop&q=80', description: '传奇的64英里公路，620个弯道，59座桥梁，穿越雨林瀑布、竹林和黑沙滩。旅途本身就是目的地。' },
      { id: 'surfing', name: '北岸冲浪', location: '欧胡岛', category: '冒险', rating: 4.9, img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&auto=format&fit=crop&q=80', description: '世界冲浪之都。冬季管道湾浪高可达30英尺以上，举办世界最负盛名的三冠王冲浪大赛。' },
      { id: 'haleakala', name: '哈莱阿卡拉日出', location: '茂宜岛', category: '自然', rating: 4.8, img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80', description: '在海拔10023英尺的休眠盾形火山山顶，欣赏云海之上的壮丽日出。黎明前抵达，感受改变人生的震撼时刻。' },
      { id: 'snorkeling', name: '莫洛基尼火山口', location: '茂宜岛', category: '冒险', rating: 4.8, img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80', description: '半沉没的火山口形成天然水族馆，栖息着250余种热带鱼类，水下能见度高达150英尺，是浮潜爱好者的天堂。' },
    ],
  },
};
