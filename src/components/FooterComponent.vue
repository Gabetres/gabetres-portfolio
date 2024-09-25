<template>
	<footer>
		<span>© Gabriel Tres 2024</span>
	</footer>
</template>

<style scoped>
footer {
	margin: 0 auto;
	text-align: center;
	border-top: 1.5px solid #232323;
	width: 45vw;
	text-wrap: nowrap;

	span {
		line-height: 3.5rem;
	}
}

.dark {
	footer {
		border-top: 1.5px solid #c4c4c4;

		span {
			color: #fff;
		}
	}
}

@media (max-width: 640px) {
	footer {
		width: 75vw;
	}
}
</style>