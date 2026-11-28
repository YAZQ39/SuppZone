export function Header() {
  return `
    <header class="relative z-40 flex min-h-[84px] w-full bg-[#101214]">

      <div class="mx-auto flex w-full max-w-[1250px] items-center justify-between gap-5 border-b border-[#30363b] px-5 py-3">

        <div class="shrink-0 text-[28px] font-black tracking-tight text-white">
            <a href="index.html" class="header-brand text-white no-underline">Supp<span class="header-accent text-[#c6f135]">Zone</span></a>
        </div>

        <nav class="hidden min-w-0 flex-1 md:block">

          <ul class="flex items-center justify-center gap-6 text-base font-semibold">
            <li class="whitespace-nowrap"><a href="index.html" class="text-[#c6f135] no-underline transition-colors hover:text-white">Home</a></li>
            <li class="whitespace-nowrap"><a href="shop.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-white">Shop</a></li>
            <li class="whitespace-nowrap"><a href="vitamins.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-white">Vitamins</a></li>
            <li class="whitespace-nowrap"><a href="supplements.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-white">Supplements</a></li>
            <li class="whitespace-nowrap"><a href="sportswear.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-white">Sportswear</a></li>
            <li class="whitespace-nowrap"><a href="equipment.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-white">Equipment</a></li>
            <li class="whitespace-nowrap"><a href="accessories.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-white">Accessories</a></li>
          </ul>

        </nav>

      <div class="flex shrink-0 items-center gap-2">
      
        <a href="wishlist.html" class="header-action inline-flex min-h-[46px] items-center gap-2 rounded-2xl border border-[#30363b] bg-[#1c2024] px-3.5 py-2 text-base font-semibold text-white no-underline transition hover:border-[#c6f135]">♡ <span class="header-accent font-bold text-[#c6f135]">0</span></a>
        <a href="cart.html" class="header-action inline-flex min-h-[46px] items-center gap-2 rounded-2xl border border-[#30363b] bg-[#1c2024] px-3.5 py-2 text-base font-semibold text-white no-underline transition hover:border-[#c6f135]">🛒 <span class="header-accent font-bold text-[#c6f135]">0</span></a>
        
        <button id="theme-toggle" type="button" aria-label="Toggle theme" class="header-action inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl border border-[#30363b] bg-[#1c2024] text-base text-white hover:border-[#c6f135]">☼</button>
        <a href="auth.html" class="header-action inline-flex min-h-[46px] items-center gap-2 rounded-2xl border border-[#30363b] bg-[#1c2024] px-3.5 py-2 text-base font-semibold text-white no-underline transition hover:border-[#c6f135]"><span>Account</span></a>

      </div>

      </div>
    </header>
  `;
}