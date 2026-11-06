// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // 1. AOS (Animate On Scroll) の初期化
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 800,
            offset: 80,
            easing: 'ease-out-cubic'
        });
    }

    // 2. Typed.js によるキャッチコピーのアニメーション
    if (typeof Typed !== 'undefined' && document.getElementById('typed')) {
        new Typed('#typed', {
            strings: [
                'Webフロントエンド開発',
                '洗練されたUI/UXデザイン',
                'モダンなWebアプリケーション開発',
                '快適で高速なデジタル体験の創造'
            ],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 1800,
            loop: true
        });
    }

    // 3. モバイルメニューの開閉制御
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            });
        });
    }

    // 4. スクロール時のヘッダースタイルと「トップに戻る」ボタン
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (window.scrollY > 400) {
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            backToTopBtn.classList.add('opacity-100');
        } else {
            backToTopBtn.classList.remove('opacity-100');
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    // 5. 制作実績 (Projects) のカテゴリフィルター
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // アクティブボタンの切り替えスタイル
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-brand-600', 'text-white', 'shadow-md', 'shadow-brand-500/20');
                b.classList.add('bg-slate-100', 'text-slate-600');
            });
            btn.classList.add('active', 'bg-brand-600', 'text-white', 'shadow-md', 'shadow-brand-500/20');
            btn.classList.remove('bg-slate-100', 'text-slate-600');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden-card');
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.classList.add('hidden-card');
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 6. お問い合わせフォーム送信シミュレーション (青と白の紙吹雪エフェクト付き)
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 送信ボタンのローディング演出
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> 送信中...`;

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;

                // 青と白を基調とした紙吹雪エフェクト
                if (typeof confetti === 'function') {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#2563eb', '#38bdf8', '#ffffff', '#1e40af']
                    });
                }

                // 成功フィードバック表示
                formFeedback.className = 'p-4 rounded-xl text-center text-sm font-semibold bg-blue-50 text-brand-700 border border-blue-200 block';
                formFeedback.innerHTML = `
                    <div class="flex items-center justify-center gap-2 mb-1">
                        <i class="fa-solid fa-circle-check text-brand-600 text-lg"></i>
                        <span class="font-bold">送信が完了しました！</span>
                    </div>
                    <p class="text-xs text-slate-600 font-normal">お問い合わせありがとうございます。内容を確認の上、通常24時間以内にご連絡いたします。</p>
                `;

                contactForm.reset();

                setTimeout(() => {
                    formFeedback.classList.add('hidden');
                }, 6000);
            }, 1000);
        });
    }
});
