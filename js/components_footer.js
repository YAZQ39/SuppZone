export function Footer() {
  return `
    <footer class="border-t border-[#30363b] bg-[#15191d]">

      <div class="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-10 lg:px-0 lg:pt-15 lg:pb-10">
      <div class="text-sm text-[#a0a5ac]">
      <a href="index.html" class="text-sm font-black tracking-tight text-white no-underline">Supp<span class="text-[#c6f135]">Zone</span></a>
      <p class="mt-3 max-w-xl leading-6">
        A complete destination for sports nutrition, supplements, and fitness essentials.
      </p>
      </div>

      <div class="flex flex-col items-start gap-2 text-sm text-[#a0a5ac]">
        <h4 class="font-semibold text-white">Explore</h4>
        <a href="shop.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">Shop all</a>
        <a href="vitamins.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">Vitamins</a>
        <a href="supplements.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">Supplements</a>
        <a href="sportswear.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">Sportswear</a>
        <a href="equipment.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">Equipment</a>
        <a href="accessories.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">Accessories</a>
      </div>

      <div class="flex flex-col items-start gap-2 text-sm text-[#a0a5ac]">
        <h4 class="font-semibold text-white">Your account</h4>
        <a href="wishlist.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">Wishlist</a>
        <a href="cart.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">Shopping cart</a>
        <a href="orders.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">My orders</a>
        <a href="profile.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">My profile</a>
      </div>

      <div class="flex flex-col items-start gap-2 text-sm text-[#a0a5ac]">
        <h4 class="font-semibold text-white">SuppZone</h4>
        <a href="about.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">About &amp; FAQ</a>
        <a href="contact.html" class="text-[#a0a5ac] no-underline transition-colors hover:text-[#c6f135]">Contact</a>
        <p class="mt-0">&copy; 2026 SuppZone.</p>
      </div>

      </div>
    </footer>
  `;
}