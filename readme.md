# 概要

コミケwebカタログにサークルコードを指定してジャンプ出来るUIを追加するtampermonkey用のスクリプトです。

サークル一覧のwebカタログ、冊子カタログ、サークル詳細ページに専用のUIを表示するボタンを追加します。

サークルの位置でホ10Aと言われても、純正のUIだと東123ホールか東456ホールか、それか西ホールかを選ばないといけない。ホの位置は東456ホールと確定しているから選ぶ必要は無いはず。

# ビルド方法

- npm install
- windowsのvisualStudioCodeで「tampermonkey形式に変換」の構成を実行
- ./out/tampermonkey.js にファイルが出来る

# 使い方

- ./out/tampermonkey.js のファイルをtampermonkeyにコピペする

# 画像

webカタログ、冊子カタログ、サークル詳細の各ページに青色の移動というボタンを追加しています。そのボタンを押すと以下の画像のようなUIが表示されます。

サークルコード指定ジャンプという部分をドラッグで移動が出来ます。右上の×ボタンで閉じる事が出来ます。

日付、ブロック、表示方法を選んで一番下のGoボタンを押します。

画像はコミケカタログwebページより

![画像](https://raw.githubusercontent.com/fushihara/comike-web-catalog-move-ui/master/resource/imgTemp-2018-08-03-01-53-53.png)