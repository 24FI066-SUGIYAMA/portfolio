# Blue & White Portfolio

青と白を基調とした、清潔感と洗練された印象を与えるモダンなポートフォリオサイトです。
ビルド不要（CDN活用）で動作し、GitHub Pagesにそのままデプロイして公開できます。

---

## 🎨 特徴
- **青と白（Blue & White）の洗練された配色**: 信頼感・先進性・清潔感を表現するカラーパレット
- **完全CDN駆動**: ビルドツール（Node.js/npmなど）不要。HTML/CSS/JSをブラウザで開くだけで即座に動作
- **レスポンシブデザイン**: スマートフォン、タブレット、PCのすべての画面サイズに最適化
- **リッチなアニメーション演出**:
  - Typed.js による自動タイピングキャッチコピー
  - AOS (Animate On Scroll) によるスクロール連動フェードイン
  - お問い合わせ送信時の紙吹雪（Confetti）エフェクト
  - 実績一覧のリアルタイムカテゴリフィルタリング

---

## 🚀 GitHub Pages への公開手順

以下の手順に沿ってGitHubへプッシュすると、数分でサイトが世界中に公開されます。

### 1. GitHubで新しいリポジトリを作成
1. [GitHub](https://github.com/) にログインし、右上の「+」ボタンから **「New repository」** を選択します。
2. **Repository name**（例: `portfolio`）を入力します。
3. **Public** を選択します。
4. 「Initialize this repository with...」のチェックはすべて外した状態で、**「Create repository」** をクリックします。

---

### 2. ローカルからGitHubへプッシュ
ターミナルを開き、以下のコマンドを実行します（`<ユーザー名>` と `<リポジトリ名>` はご自身のアカウント・リポジトリ名に置き換えてください）。

```bash
# 1. 変更をコミット
git add .
git commit -m "Initial commit: Blue & White portfolio"

# 2. mainブランチを設定
git branch -M main

# 3. リモートリポジトリを追加
git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git

# 4. GitHubへプッシュ
git push -u origin main
```

---

### 3. GitHub Pages の有効化
1. GitHubのリポジトリページ上部にある **「Settings」** タブを開きます。
2. 左サイドバーから **「Pages」** をクリックします。
3. **「Build and deployment」** の **「Source」** で以下のいずれかを選択します：
   - **「Deploy from a branch」** を選ぶ場合：
     - Branch: `main` / Folder: `/ (root)` を選択し、**「Save」** をクリック。
   - **「GitHub Actions」** を選ぶ場合：
     - 自動的に本リポジトリ内の `.github/workflows/deploy.yml` が実行されます。
4. 数分待つと、画面上部に公開URL（例: `https://<ユーザー名>.github.io/<リポジトリ名>/`）が表示されます。

---

## 📂 ファイル構成

```text
├── index.html               # メインHTML（セクション構造・CDN読み込み）
├── style.css                # カスタムスタイル・アニメーション調整
├── script.js                # インタラクティブ機能（フィルター、タイピング、送信演出等）
├── .nojekyll                # GitHub PagesのJekyll処理バイパス設定
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actionsによる自動デプロイ設定
└── README.md                # 本手順書
```

---

## 🛠️ 活用しているCDNライブラリ
- [Tailwind CSS Play CDN](https://tailwindcss.com/)
- [Font Awesome 6](https://fontawesome.com/)
- [Google Fonts (Outfit & Noto Sans JP)](https://fonts.google.com/)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [Typed.js](https://github.com/mattboldt/typed.js/)
- [Canvas Confetti](https://github.com/catdad/canvas-confetti)
