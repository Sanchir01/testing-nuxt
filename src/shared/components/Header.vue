<script setup lang="ts">
export interface IHeaderProps {
	text: string
	href: string
}
const HeaderProps: IHeaderProps[] = [
	{
		text: 'products',
		href: '/products'
	},
	{
		text: 'about',
		href: '/about'
	}
]
</script>

<template>
	<header class="header">
		<div>logo</div>
		<nav>
			<ul>
				<li v-for="(items, i) in HeaderProps" :key="i">
					<NuxtLink :to="items.href">{{ items.text }}</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
.header {
	height: 80px;
}
</style>
