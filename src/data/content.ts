import { islandsContent } from './islands';
import { cultureContent } from './culture';
import { historyContent } from './history';
import { tourismContent } from './tourism';
import { tipsContent } from './tips';

const shared = {
  nav: { home: 'Home', islands: 'Islands', culture: 'Culture', history: 'History', tourism: 'Tourism', map: 'Map', tips: 'Tips' },
  hero: {
    greeting: 'Aloha!',
    title: 'Discover Hawaiʻi',
    subtitle: 'The Aloha State — Where Paradise Meets the Pacific',
    description: '8 islands of breathtaking beauty, ancient culture, and warm hospitality awaiting you.',
    cta: 'Start Exploring',
    img: '/images/hero.jpg',
  },
  map: {
    title: 'Interactive Map',
    subtitle: 'Explore the Hawaiian Islands — click any marker',
    markers: [
      { name: "Honolulu, O'ahu", nameZh: '檀香山，欧胡岛', lat: 21.3069, lng: -157.8583, type: 'city' },
      { name: 'Waikiki Beach', nameZh: '威基基海滩', lat: 21.2793, lng: -157.829, type: 'beach' },
      { name: 'Pearl Harbor', nameZh: '珍珠港', lat: 21.3647, lng: -157.9494, type: 'history' },
      { name: 'Diamond Head', nameZh: '钻石头山', lat: 21.2631, lng: -157.8049, type: 'nature' },
      { name: 'Kahului, Maui', nameZh: '卡胡鲁伊，茂宜岛', lat: 20.8893, lng: -156.4729, type: 'city' },
      { name: 'Haleakalā', nameZh: '哈莱阿卡拉', lat: 20.7097, lng: -156.253, type: 'nature' },
      { name: 'Hilo, Big Island', nameZh: '希洛，大岛', lat: 19.7297, lng: -155.09, type: 'city' },
      { name: 'Hawaiʻi Volcanoes NP', nameZh: '火山国家公园', lat: 19.4194, lng: -155.2885, type: 'nature' },
      { name: "Līhuʻe, Kaua'i", nameZh: '利胡埃，可爱岛', lat: 21.9783, lng: -159.37, type: 'city' },
      { name: 'Nā Pali Coast', nameZh: '纳帕里海岸', lat: 22.2028, lng: -159.6647, type: 'scenic' },
    ],
  },
  footer: {
    tagline: 'Aloha — May the spirit of Hawaiʻi travel with you always.',
    tagslineZh: '阿罗哈——愿夏威夷的精神永远与你同行。',
    disclaimer: 'Information is for reference only. Verify details before travel.',
    disclaimerZh: '本站信息仅供参考，出行前请核实相关详情。',
  },
};

export const content = {
  en: {
    nav: { ...shared.nav },
    hero: { ...shared.hero },
    map: { title: shared.map.title, subtitle: shared.map.subtitle, markers: shared.map.markers },
    footer: { tagline: shared.footer.tagline, disclaimer: shared.footer.disclaimer },
    islands: islandsContent.en,
    culture: cultureContent.en,
    history: historyContent.en,
    tourism: tourismContent.en,
    tips: tipsContent.en,
  },
  zh: {
    nav: { home: '首页', islands: '岛屿', culture: '文化', history: '历史', tourism: '旅游', map: '地图', tips: '贴士' },
    hero: {
      greeting: '阿罗哈！',
      title: '探索夏威夷',
      subtitle: '阿罗哈州——太平洋上的人间天堂',
      description: '8座岛屿，壮美自然、古老文化与热情好客，静待您的到来。',
      cta: '开始探索',
      img: shared.hero.img,
    },
    map: { title: '互动地图', subtitle: '探索夏威夷群岛——点击任意标记', markers: shared.map.markers },
    footer: { tagline: shared.footer.tagslineZh, disclaimer: shared.footer.disclaimerZh },
    islands: islandsContent.zh,
    culture: cultureContent.zh,
    history: historyContent.zh,
    tourism: tourismContent.zh,
    tips: tipsContent.zh,
  },
};
