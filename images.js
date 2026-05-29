// =====================================================
// ギャラリーデータ管理ファイル
// 新しい画像を追加するときは GALLERY 末尾にコピーして追加
//
// 各フィールド：
//   file        : 画像パス
//   chapter     : 章フィルター用（"序章" / "第一章" / "Background" など）
//   category    : 種類フィルター用（"場面" / "人物" / "風景" / "武器" / "生き物"）
//   title_jp    : カードタイトル（日本語）
//   title_en    : カードタイトル（英語）
//   tags        : タグ配列（最大4つ程度）
//   caption_jp  : 一言キャプション（日本語）
//   caption_en  : 一言キャプション（英語）
// =====================================================

const FEATURED = {
  file: "images/main.png",
  title_jp: "京都幻夢",
  title_en: "Kyoto Phantom Dream",
  desc_jp: "京の闇に宿る神々、妖狐、鬼、そして侍。\nAIが紡ぐ幻想の絵巻物語。",
  desc_en: "Gods, fox spirits, demons and samurai in the darkness of Kyoto.\nA phantom picture scroll woven by AI."
};

const GALLERY = [
  {
    file: "images/prologue_shrine.png",
    chapter: "序章",
    category: "場面",
    title_jp: "影世の社",
    title_en: "The Shrine Between Worlds",
    tags: ["境界", "影世", "神社"],
    caption_jp: "朱の鳥居が褪せ、二つの世界が重なり始める夜。",
    caption_en: "The night the torii fade — and two worlds begin to overlap."
  },
  {
    file: "images/prologue_kyoga_bamboo.png",
    chapter: "序章",
    category: "場面",
    title_jp: "竹林に立つ影",
    title_en: "Shadow in the Bamboo Grove",
    tags: ["鏡牙", "竹林", "影断", "影世"],
    caption_jp: "音もなく、迷いもなく——黒刀が影の獣を霧散させた。",
    caption_en: "Silent. Without hesitation. The black blade dissolved the shadow."
  },
  {
    file: "images/prologue_rei_convergence.png",
    chapter: "序章",
    category: "場面",
    title_jp: "世界の回帰",
    title_en: "The Convergence Begins",
    tags: ["玲", "世界の回帰", "狐火", "満月"],
    caption_jp: "青い狐火が静かに揺れ、二重の月が竹林に浮かぶ。",
    caption_en: "Blue fox-fires sway in silence as twin moons drift above the grove."
  },
  {
    file: "images/img15.png",
    chapter: "Background",
    category: "人物",
    title_jp: "竹林の求道者",
    title_en: "Seeker of the Bamboo Path",
    tags: ["鏡牙", "竹林", "修行", "黎明"],
    caption_jp: "師の言葉の意味を、十年経った今も探し続けている。",
    caption_en: "Ten years later — still searching for the meaning of his master's words."
  },
  {
    file: "images/bg_rei_daily.png",
    chapter: "Background",
    category: "人物",
    title_jp: "影世の縁側",
    title_en: "On the Veranda of the Shadow World",
    tags: ["玲", "影世", "狐の子", "青い狐火"],
    caption_jp: "影世の縁側で、玲は今日も鬼の子らとともにある。",
    caption_en: "On the shadow world's veranda, Rei is with the demon children once more."
  },

  // ─── 以下は一時非表示 ───
  /*
  {
    file: "images/img02.png",
    chapter: "未分類",
    category: "場面",
    title_jp: "花月温泉",
    title_en: "Kagetsu Hot Springs",
    tags: ["温泉", "狐神", "人と妖"],
    caption_jp: "",
    caption_en: ""
  },
  */

  // =====================================================
  // 新しい画像を追加するときはここにコピーして追加：
  // =====================================================
  // ,{
  //   file: "images/imgXX.png",
  //   chapter: "序章",          // "序章" / "第一章" / "Background" など
  //   category: "場面",         // "場面" / "人物" / "風景" / "武器" / "生き物"
  //   title_jp: "タイトル（日本語）",
  //   title_en: "Title (English)",
  //   tags: ["タグ1", "タグ2", "タグ3"],
  //   caption_jp: "一言キャプション（日本語）",
  //   caption_en: "One-line caption (English)"
  // }
];
