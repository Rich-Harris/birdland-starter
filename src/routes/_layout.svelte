<script>

</script>

<nav>
	<a class="logo" href=".">Birdland</a>

	<div>
		<a href="login">log in</a>
	</div>
</nav>

<slot></slot>

<style>
	nav {
		border-bottom: 1px solid var(--gray);
		font-weight: 300;
		padding: 0 0.5em;
		display: flex;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
		padding: 0.5em 0;
	}

	div {
		display: flex;
		align-items: center;
		flex: 1 1 1;
		min-width: 0;
	}

	.logo {
		background: url(/logo.svg) 0 50% no-repeat;
		background-size: 1em 1em;
		padding: 0.5em 0.5em 0.5em 1.5em;
	}
</style>