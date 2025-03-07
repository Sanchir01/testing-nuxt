<script setup lang="ts">
export interface IHeaderProps {
  text: string,
  href: string
}
const HeaderProps: IHeaderProps[] = [{
  text: 'products',
  href: "/products"
}]
</script>
<template>
  <header>
    <div>logo</div>
    <nav>
      <ul>
        <li>
          <NuxtLink to='/products'>${1}</NuxtLink>
        </li>
        <li>
          <NuxtLink to='/products'>${2}</NuxtLink>
        </li>
        <li>
          <NuxtLink to='/products'>${0}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
