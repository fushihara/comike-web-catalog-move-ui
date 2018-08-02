const styleText = `
#codes{
  margin:2px;
  background:#ffffb8;
}
#codes>div{
  display:flex;
  flex-wrap:wrap;
}
#codes>div>.space{
  flex:0 0 44px;
}
#codes>div>label{
  flex:0 0 36px;
  margin:2px;
  text-align: center;
  display:flex;
  padding:2px;
}
label{
  background:#c2ffeb;
  color:gray;
}
label.checked{
  background:#7fffd4;
  color:black;
}
`;
const htmlText = `
<div style="display:flex;background:#ffff81;padding:5px;">
  <div id="titlebar" style="flex:1 1 0;text-align: center;">サークルコード指定ジャンプ</div>
  <button id="close" style="flex:0 0 10px;">×</button>
</div>
<div style="display:flex;background:#ffffb8;padding:5px;justify-content:space-around;margin:2px;">
  <label for="day1" style="display:flex;padding:5px;align-items: center;">
    <input type="radio" id="day1" name="day-select" checked>
    <div style="display:flex;flex-direction: column;align-items: center;">
      <div>1日目</div>
      <div id="day1-date">1/18(金)</div>
    </div>
  </label>
  <label for="day2" style="display:flex;padding:5px;align-items: center;">
    <input type="radio" id="day2" name="day-select">
    <div style="display:flex;flex-direction: column;align-items: center;">
      <div>2日目</div>
      <div id="day2-date">1/18(金)</div>
    </div>
  </label>
  <label for="day3" style="display:flex;padding:5px;align-items: center;">
    <input type="radio" id="day3" name="day-select">
    <div style="display:flex;flex-direction: column;align-items: center;">
      <div>3日目</div>
      <div  id="day3-date">1/18(金)</div>
    </div>
  </label>
</div>
<div id="codes">
</div>
<div style="display:flex;background:#ffffb8;padding:5px;justify-content:space-around;margin:2px;">
  <label for="view-1" style="display:flex;padding:5px;align-items: center;">
    <input type="radio" id="view-1" name="view-type" checked>
    <div style="display:flex;flex-direction: column;align-items: center;">
      WEBカタログ
    </div>
  </label>
  <label for="view-2" style="display:flex;padding:5px;align-items: center;">
    <input type="radio" id="view-2" name="view-type">
    <div style="display:flex;flex-direction: column;align-items: center;">
      冊子カタログ
    </div>
  </label>
  <label for="view-3" style="display:flex;padding:5px;align-items: center;">
    <input type="radio" id="view-3" name="view-type">
    <div style="display:flex;flex-direction: column;align-items: center;">
      サークル詳細
    </div>
  </label>
</div>
<div style="display:flex;background:#ffffb8;padding:5px;justify-content:space-around;margin:2px;">
  <button id="go">GO!</button>
</div>
`;
const コミケ開始日 = new Date("2018/08/10");
const サークルブロック一覧: { ブロック名: string, ブロック名の種類: "アルファベット" | "平仮名" | "片仮名", ホールの場所: "東123" | "東456" | "西", 存在しない日: number[], 表で後に入れる?: "スペース" | "改行", チェックエレメント?: HTMLInputElement, ラベルエレメント?: HTMLLabelElement }[] = [
  { ブロック名: "Ａ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｂ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [1, 3], 表で後に入れる: undefined },
  { ブロック名: "Ｃ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｄ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｅ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｆ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｇ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｈ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｉ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｊ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｋ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｌ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｍ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｎ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｏ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｐ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｑ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｒ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｓ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｔ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｕ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｖ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｗ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｘ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｙ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "Ｚ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: "改行" },
  { ブロック名: "ア", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "イ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ウ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "エ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "オ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: "スペース" },
  { ブロック名: "カ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "キ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ク", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ケ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "コ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [], 表で後に入れる: "改行" },
  { ブロック名: "サ", ブロック名の種類: "アルファベット", ホールの場所: "東123", 存在しない日: [3], 表で後に入れる: undefined },

  { ブロック名: "シ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ス", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [3], 表で後に入れる: undefined },
  { ブロック名: "セ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ソ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: "スペース" },
  { ブロック名: "タ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "チ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ツ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "テ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ト", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: "改行" },
  { ブロック名: "ナ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ニ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ヌ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ネ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ノ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: "スペース" },
  { ブロック名: "ハ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "パ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ヒ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ピ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "フ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: "改行" },
  { ブロック名: "プ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ヘ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ペ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ホ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ポ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: "スペース" },
  { ブロック名: "マ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ミ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ム", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "メ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "モ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: "改行" },
  { ブロック名: "ヤ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: "スペース" },
  { ブロック名: "ユ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: "スペース" },
  { ブロック名: "ヨ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: "スペース" },
  { ブロック名: "ラ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "リ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ル", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "レ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ロ", ブロック名の種類: "アルファベット", ホールの場所: "東456", 存在しない日: [1], 表で後に入れる: "改行" },

  { ブロック名: "あ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "い", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "う", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "え", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "お", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: "スペース" },
  { ブロック名: "か", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "き", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "く", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "け", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "こ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: "改行" },
  { ブロック名: "さ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "し", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "す", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "せ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "そ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: "スペース" },
  { ブロック名: "た", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ち", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "つ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "て", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "と", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: "改行" },
  { ブロック名: "な", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "に", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ぬ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ね", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "の", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: "スペース" },
  { ブロック名: "は", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ひ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ふ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "へ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "ほ", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: "改行" },
  { ブロック名: "ま", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "み", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
  { ブロック名: "む", ブロック名の種類: "アルファベット", ホールの場所: "西", 存在しない日: [], 表で後に入れる: undefined },
];
class ComikeKeyLinkElement extends HTMLElement {
  private data一覧: {
    ドラッグ中: boolean,
    hostElement: HTMLDivElement,
    何日目か: {
      日目1: { radioElement: HTMLInputElement, label: HTMLLabelElement },
      日目2: { radioElement: HTMLInputElement, label: HTMLLabelElement },
      日目3: { radioElement: HTMLInputElement, label: HTMLLabelElement },
    },
    表示方法: {
      WEBカタログ: { radioElement: HTMLInputElement, label: HTMLLabelElement },
      冊子カタログ: { radioElement: HTMLInputElement, label: HTMLLabelElement },
      サークル詳細: { radioElement: HTMLInputElement, label: HTMLLabelElement },
    }
  }
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styleText;
    const divElement = document.createElement("div");
    divElement.style.display = "flex";
    divElement.style.flexDirection = "column";
    divElement.innerHTML = htmlText;
    // ここから中身をプログラム的に書き換える
    {
      this.ドラッグイベントをセット(divElement.querySelector<HTMLDivElement>("#titlebar")!);
      // 閉じるクリック
      divElement.querySelector<HTMLButtonElement>("#close")!.addEventListener("click", () => {
        this.閉じるクリック();
      });
      // goをクリック
      divElement.querySelector<HTMLButtonElement>("#go")!.addEventListener("click", () => {
        this.goをクリック();
      });
      // 日付セット
      {
        let date = new Date(コミケ開始日.getTime());
        const 曜日 = ["日", "月", "火", "水", "木", "金", "土"];
        divElement.querySelector<HTMLDivElement>("#day1-date")!.innerText = `${date.getMonth() + 1}/${date.getDate()}(${曜日[date.getDay()]})`;
        date = new Date(date.getTime() + (24 * 60 * 60 * 1000));
        divElement.querySelector<HTMLDivElement>("#day2-date")!.innerText = `${date.getMonth() + 1}/${date.getDate()}(${曜日[date.getDay()]})`;
        date = new Date(date.getTime() + (24 * 60 * 60 * 1000));
        divElement.querySelector<HTMLDivElement>("#day3-date")!.innerText = `${date.getMonth() + 1}/${date.getDate()}(${曜日[date.getDay()]})`;
      }
      {
        // 日付を切り替えた時に無効なブロックを無効化する
        divElement.querySelector<HTMLInputElement>("#day1")!.addEventListener("click", () => { this.ブロック無効状態更新(); });
        divElement.querySelector<HTMLInputElement>("#day2")!.addEventListener("click", () => { this.ブロック無効状態更新(); });
        divElement.querySelector<HTMLInputElement>("#day3")!.addEventListener("click", () => { this.ブロック無効状態更新(); });
      }
      // コードの先頭のA～Zア～ンあ～んの文字を入れる
      this.コードの中のdomをセット(divElement.querySelector<HTMLDivElement>("#codes")!);
      // 表示方法
      divElement.querySelector<HTMLInputElement>("#view-1")!.addEventListener("click", () => { this.表示形式のlabelの選択状態のcssを更新(); });
      divElement.querySelector<HTMLInputElement>("#view-2")!.addEventListener("click", () => { this.表示形式のlabelの選択状態のcssを更新(); });
      divElement.querySelector<HTMLInputElement>("#view-3")!.addEventListener("click", () => { this.表示形式のlabelの選択状態のcssを更新(); });
    }
    shadowRoot.appendChild(styleElement);
    shadowRoot.appendChild(divElement);
    this.data一覧 = {
      ドラッグ中: false,
      hostElement: shadowRoot.host as HTMLDivElement,
      何日目か: {
        日目1: {
          radioElement: divElement.querySelector<HTMLInputElement>("#day1")!,
          label: divElement.querySelector<HTMLInputElement>("#day1")!.parentElement as HTMLLabelElement
        },
        日目2: {
          radioElement: divElement.querySelector<HTMLInputElement>("#day2")!,
          label: divElement.querySelector<HTMLInputElement>("#day2")!.parentElement as HTMLLabelElement
        },
        日目3: {
          radioElement: divElement.querySelector<HTMLInputElement>("#day3")!,
          label: divElement.querySelector<HTMLInputElement>("#day3")!.parentElement as HTMLLabelElement
        },
      },
      表示方法: {
        WEBカタログ: {
          label: divElement.querySelector<HTMLInputElement>("#view-1")!.parentElement as HTMLLabelElement,
          radioElement: divElement.querySelector<HTMLInputElement>("#view-1")!
        },
        冊子カタログ: {
          label: divElement.querySelector<HTMLInputElement>("#view-2")!.parentElement as HTMLLabelElement,
          radioElement: divElement.querySelector<HTMLInputElement>("#view-2")!
        },
        サークル詳細: {
          label: divElement.querySelector<HTMLInputElement>("#view-3")!.parentElement as HTMLLabelElement,
          radioElement: divElement.querySelector<HTMLInputElement>("#view-3")!
        },
      }
    };
    this.閉じるクリック();
    this.日付のlabelの選択状態のcssを更新();
    this.ブロック名のlabelの選択状態のcssを更新();
    this.表示形式のlabelの選択状態のcssを更新();
  }
  表示する() {
    this.data一覧.hostElement.style.display = "";
  }
  位置をリセットする() {
    const rect = this.data一覧.hostElement.getBoundingClientRect();
    const x = (document.body.clientWidth - rect.width) / 2;
    const y = (window.innerHeight - rect.height) / 2 + window.scrollY;
    //@ts-ignore
    this.data一覧.hostElement.attributeStyleMap.set('top', CSS.px(Math.max(0, y)));
    //@ts-ignore
    this.data一覧.hostElement.attributeStyleMap.set('left', CSS.px(x));
  }
  日付セット(何日目か: number) {
    switch (何日目か) {
      case 1:
        this.data一覧.何日目か.日目1.radioElement.checked = true;
        break;
      case 2:
        this.data一覧.何日目か.日目2.radioElement.checked = true;
        break;
      case 3:
        this.data一覧.何日目か.日目3.radioElement.checked = true;
        break;
      default:
        break;
    }
    this.日付のlabelの選択状態のcssを更新();
  }
  ブロックセット(ブロック名: string) {
    サークルブロック一覧.filter(a => a.ブロック名 === ブロック名).map(a => a.チェックエレメント!.checked = true);
    this.ブロック名のlabelの選択状態のcssを更新();
  }
  表示方法セット(表示方法: "WEBカタログ" | "冊子カタログ" | "サークル詳細") {
    switch (表示方法) {
      case "WEBカタログ": this.data一覧.表示方法.WEBカタログ.radioElement.checked = true; break;
      case "冊子カタログ": this.data一覧.表示方法.冊子カタログ.radioElement.checked = true; break;
      case "サークル詳細": this.data一覧.表示方法.サークル詳細.radioElement.checked = true; break;
    }
    this.表示形式のlabelの選択状態のcssを更新();
  }
  private 閉じるクリック() {
    this.data一覧.hostElement.style.display = "none";
  }
  private ブロック無効状態更新() {
    const 日付 = (() => {
      if (this.data一覧.何日目か.日目1.radioElement.checked) {
        return 1;
      } else if (this.data一覧.何日目か.日目2.radioElement.checked) {
        return 2;
      } else if (this.data一覧.何日目か.日目3.radioElement.checked) {
        return 3;
      } else {
        return 0;
      }
    })();
    サークルブロック一覧.map(a => {
      if (a.存在しない日.includes(日付)) {
        a.チェックエレメント!.disabled = true;
      } else {
        a.チェックエレメント!.disabled = false;
      }
    });
    this.日付のlabelの選択状態のcssを更新();
  }
  private コードの中のdomをセット(codesParent: HTMLDivElement) {
    this.中のdom一覧削除(codesParent);
    let 行div = document.createElement("div");
    codesParent.appendChild(行div);
    let チェック済み = false;
    for (let block of サークルブロック一覧) {
      // <label><input type="radio" name="code">A</label>
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", "code");
      input.setAttribute("value", block.ブロック名);
      if (チェック済み === false) {
        input.checked = true;
        チェック済み = true;
      }
      input.addEventListener("click", () => { this.ブロック名のlabelの選択状態のcssを更新() });
      const text = document.createTextNode(block.ブロック名);
      block.チェックエレメント = input;
      block.ラベルエレメント = label;
      label.appendChild(input);
      label.appendChild(text);
      行div.appendChild(label);
      if (block.表で後に入れる === "スペース") {
        const space = document.createElement("div");
        space.classList.add("space");
        行div.appendChild(space);
      } else if (block.表で後に入れる === "改行") {
        行div = document.createElement("div");
        codesParent.appendChild(行div);
      }
    }
  }
  private 中のdom一覧削除(element: HTMLElement) {
    while (element.hasChildNodes()) {
      element.removeChild(element.firstChild!);
    }
  }
  private ドラッグイベントをセット(ドラッグエリア: HTMLDivElement) {
    ドラッグエリア.addEventListener("mousedown", () => {
      this.data一覧.ドラッグ中 = true;
    });
    document.addEventListener("mousemove", (e: MouseEvent) => {
      if (this.data一覧.ドラッグ中) {
        // 値を更新
        let x = 0;
        let y = 0;
        //@ts-ignore
        if (this.data一覧.hostElement.attributeStyleMap.get("left").value !== undefined) {
          //@ts-ignore
          x = this.data一覧.hostElement.attributeStyleMap.get("left").value;
        }
        //@ts-ignore
        if (this.data一覧.hostElement.attributeStyleMap.get("top").value !== undefined) {
          //@ts-ignore
          y = this.data一覧.hostElement.attributeStyleMap.get("top").value;
        }
        x += e.movementX;
        y += e.movementY;
        //@ts-ignore
        this.data一覧.hostElement.attributeStyleMap.set('top', CSS.px(y));
        //@ts-ignore
        this.data一覧.hostElement.attributeStyleMap.set('left', CSS.px(x));
      }
    });
    document.addEventListener("mouseup", () => {
      this.data一覧.ドラッグ中 = false;
    });
  }
  private goをクリック() {
    let 何日目か;
    if (this.data一覧.何日目か.日目1.radioElement.checked == true) {
      何日目か = 1;
    } else if (this.data一覧.何日目か.日目2.radioElement.checked == true) {
      何日目か = 2;
    } else if (this.data一覧.何日目か.日目3.radioElement.checked == true) {
      何日目か = 3;
    }
    let ブロック名 = サークルブロック一覧.find(a => a.チェックエレメント!.checked)!.ブロック名;
    let 表示種類: "webカタログ" | "冊子カタログ" | "サークル詳細";
    if (this.data一覧.表示方法.WEBカタログ.radioElement.checked) {
      表示種類 = "webカタログ";
    } else if (this.data一覧.表示方法.冊子カタログ.radioElement.checked) {
      表示種類 = "冊子カタログ";
    } else if (this.data一覧.表示方法.サークル詳細.radioElement.checked) {
      表示種類 = "サークル詳細";
    }
    //@ts-ignore
    this.ページ移動(何日目か, ブロック名, 表示種類);
  }
  private ページ移動(何日目か: number, ブロック名: string, 表示種類: "webカタログ" | "冊子カタログ" | "サークル詳細") {
    // https://webcatalog.circle.ms/Spa#Day=1/Area=e123/Block=%EF%BC%A1/Order=Space
    const スペース = サークルブロック一覧.find(a => a.ブロック名 === ブロック名)!.ホールの場所;
    if (表示種類 === "webカタログ") {
      const area = (() => {
        if (スペース === "東123") {
          return "e123";
        } else if (スペース === "東456") {
          return "e456";
        } else if (スペース === "西") {
          return "w12";
        } else {
          return undefined;
        }
      })();
      const url = `https://webcatalog.circle.ms/Spa?${~~(Math.random() * 10000)}#Day=${何日目か}/Area=${area}/Block=${encodeURI(ブロック名)}/Order=Space`;
      window.location.assign(url);
    } else if (表示種類 == "冊子カタログ") {
      // https://webcatalog.circle.ms/Circle?area=e456&block=%E3%82%B7&day=Day1&orderBy=Space&keyword=
      const area = (() => {
        if (スペース === "東123") {
          return "e123";
        } else if (スペース === "東456") {
          return "e456";
        } else if (スペース === "西") {
          return "w12";
        } else {
          return undefined;
        }
      })();
      const url = `https://webcatalog.circle.ms/Circle?area=${area}&block=${encodeURI(ブロック名)}&day=Day${何日目か}&orderBy=Space&keyword=`;
      window.location.assign(url);
    } else if (表示種類 == "サークル詳細") {
      // https://webcatalog.circle.ms/Circle/List?area=e123&block=%EF%BC%A1&day=Day1&orderBy=Space&keyword=
      const area = (() => {
        if (スペース === "東123") {
          return "e123";
        } else if (スペース === "東456") {
          return "e456";
        } else if (スペース === "西") {
          return "w12";
        } else {
          return undefined;
        }
      })();
      const url = `https://webcatalog.circle.ms/Circle/List?area=${area}&block=${encodeURI(ブロック名)}&day=Day${何日目か}&orderBy=Space&keyword=`;
      window.location.assign(url);
    }
  }
  private 日付のlabelの選択状態のcssを更新() {
    if (this.data一覧.何日目か.日目1.radioElement.checked) {
      this.data一覧.何日目か.日目1.label.classList.add("checked");
      this.data一覧.何日目か.日目2.label.classList.remove("checked");
      this.data一覧.何日目か.日目3.label.classList.remove("checked");
    } else if (this.data一覧.何日目か.日目2.radioElement.checked) {
      this.data一覧.何日目か.日目1.label.classList.remove("checked");
      this.data一覧.何日目か.日目2.label.classList.add("checked");
      this.data一覧.何日目か.日目3.label.classList.remove("checked");
    } else if (this.data一覧.何日目か.日目3.radioElement.checked) {
      this.data一覧.何日目か.日目1.label.classList.remove("checked");
      this.data一覧.何日目か.日目2.label.classList.remove("checked");
      this.data一覧.何日目か.日目3.label.classList.add("checked");
    }
  }
  private ブロック名のlabelの選択状態のcssを更新() {
    for (let v of サークルブロック一覧) {
      if (v.チェックエレメント!.checked) {
        v.ラベルエレメント!.classList.add("checked");
      } else {
        v.ラベルエレメント!.classList.remove("checked");
      }
    }
  }
  private 表示形式のlabelの選択状態のcssを更新() {
    if (this.data一覧.表示方法.WEBカタログ.radioElement.checked) {
      this.data一覧.表示方法.WEBカタログ.label.classList.add("checked");
      this.data一覧.表示方法.冊子カタログ.label.classList.remove("checked");
      this.data一覧.表示方法.サークル詳細.label.classList.remove("checked");
    } else if (this.data一覧.表示方法.冊子カタログ.radioElement.checked) {
      this.data一覧.表示方法.WEBカタログ.label.classList.remove("checked");
      this.data一覧.表示方法.冊子カタログ.label.classList.add("checked");
      this.data一覧.表示方法.サークル詳細.label.classList.remove("checked");
    } else if (this.data一覧.表示方法.サークル詳細.radioElement.checked) {
      this.data一覧.表示方法.WEBカタログ.label.classList.remove("checked");
      this.data一覧.表示方法.冊子カタログ.label.classList.remove("checked");
      this.data一覧.表示方法.サークル詳細.label.classList.add("checked");
    }
  }
}
customElements.define(`comike-key-link`, ComikeKeyLinkElement);
const newDom = document.createElement("comike-key-link") as ComikeKeyLinkElement;
newDom.style.position = "absolute";
newDom.style.top = "50px";
newDom.style.left = "50px";
newDom.style.width = "496px";
newDom.style.background = "silver";
newDom.style.padding = "2px";
document.body.appendChild(newDom);
{
  const 表示ボタンのdiv = document.createElement("div");
  const 表示ボタン = document.createElement("button");
  表示ボタン.innerText = "移動";
  表示ボタン.style.backgroundColor = "#007ffc";
  表示ボタン.style.border = "solid 1px #0303a1";
  表示ボタン.style.color = "white";
  表示ボタン.style.backgroundImage = "-webkit-linear-gradient(bottom,#0300002b,#ffffff2b)";
  表示ボタン.addEventListener("click", () => {
    newDom.表示する();
    newDom.位置をリセットする();
  });
  表示ボタンのdiv.appendChild(表示ボタン);
  // 日付をセット
  if (window.location.pathname == "/Circle/List") {
    // サークル詳細
    newDom.表示方法セット("サークル詳細");
    if (window.location.search.search(/day=Day(\d)/)) {
      let day = Number(RegExp.$1);
      newDom.日付セット(day);
    }
    const html上のブロック = document.querySelector<HTMLHeadingElement>("#cutslist>h2")!.innerText.substr(5, 1);
    if (window.location.search.search(/block=(.+?)&/)) {
      let block = decodeURI(RegExp.$1);
      newDom.ブロックセット(block);
    } else if (html上のブロック !== undefined) {
      newDom.ブロックセット(html上のブロック);
    }
    表示ボタンのdiv.style.cssFloat = "left";
    表示ボタンのdiv.style.height = "35px";
    表示ボタンのdiv.style.display = "flex";
    表示ボタンのdiv.style.padding = "2px 3px 3px";
    document.querySelector("#view-filter")!.appendChild(表示ボタンのdiv);
  } else if (window.location.pathname == "/CircleRapid/Cut2") {
    // 冊子カタログ
    newDom.表示方法セット("冊子カタログ");
    if (window.location.search.search(/day=(\d)/)) {
      let day = Number(RegExp.$1);
      newDom.日付セット(day);
    }
    if (window.location.search.search(/block=(.+?)(&|$)/)) {
      let block = decodeURI(RegExp.$1);
      newDom.ブロックセット(block);
    }
    表示ボタンのdiv.style.cssFloat = "left";
    表示ボタンのdiv.style.height = "35px";
    表示ボタンのdiv.style.display = "flex";
    表示ボタンのdiv.style.padding = "2px 3px 3px";
    document.querySelector("#view-filter")!.appendChild(表示ボタンのdiv);
  } else if (window.location.pathname == "/Spa") {
    //webカタログ
    newDom.表示方法セット("WEBカタログ");
    if (window.location.hash.search(/Day=(\d)/)) {
      let day = Number(RegExp.$1);
      newDom.日付セット(day);
    }
    if (window.location.hash.search(/Block=(.+)\//)) {
      let block = decodeURI(RegExp.$1);
      newDom.ブロックセット(block);
    }
    表示ボタンのdiv.style.cssFloat = "left";
    表示ボタンのdiv.style.height = "37px";
    表示ボタンのdiv.style.display = "flex";
    表示ボタンのdiv.style.padding = "3px";
    表示ボタンのdiv.style.paddingTop = "6px";
    document.querySelector("#view-filter")!.appendChild(表示ボタンのdiv);
  }
}
