<template>
  <header class="site-header">
    <div class="logo">SHO's Portfolio</div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* このコンポーネント内だけで効くスタイル */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
</style>