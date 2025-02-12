<template>
  <section
    class="flex h-165 w-screen justify-center bg-[url(/src/assets/matilda-k-lzEBmA5yQj4-unsplash.jpg)] bg-cover bg-center"
  >
    <div
      class="flex flex-col items-center justify-center gap-10 self-center bg-slate-900/30 p-20 drop-shadow-xl"
    >
      <h1 class="text-6xl font-bold text-white">Kobold Store</h1>
      <p class="mt-4 text-3xl text-white">
        Browse legendary artifacts and magical items to add to your hoard!
      </p>
      <router-link
        to="/products"
        class="text-semibold mt-6 flex items-center rounded-lg bg-red-500 px-6 py-3 font-semibold text-white shadow-md hover:bg-red-700"
      >
        <span>Find Loot </span> <span class="pl-3 text-3xl">→</span>
      </router-link>
    </div>
  </section>
  <section class="flex justify-center">
    <div class="flex w-6xl flex-col items-center bg-white px-60 py-10">
      <h1 class="mb-4 text-3xl font-bold">
        What is <span class="text-red-500"> Kobold Store?</span>
      </h1>
      <p>
        Kobold store is your one stop shop for all things loot!. Here, every treasure-seeker,
        adventurer, and cunning hoarder can find legendary artifacts, enchanted trinkets, and
        magical curiosities worthy of a true dragon’s hoard! Whether you're seeking arcane relics,
        shimmering baubles, or mischievous charms, our wares are hand-selected (and possibly
        pilfered from forgotten dungeons) to bring power, luck, and just the right amount of chaos
        to your collection. So sharpen your claws, count your coins, and prepare to uncover
        treasures beyond imagination—because every hoard deserves a little more magic!
      </p>
    </div>
  </section>
</template>
