<!-- @component A slim strip above the nav marking this site as the v10 archive. -->
<div class="archive-banner">
	<span class="tag">Archived</span>
	<p>
		<span class="detail">Documentation for Layer Cake v10, before Svelte 5 runes.</span>
		<span class="pointer">
			Current docs at <a href="https://layercake.graphics">layercake.graphics</a>
		</span>
	</p>
</div>

<style>
	.archive-banner {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: var(--banner-height);
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75em;
		padding: 0 1rem;
		background-color: #26221f;
		color: rgba(232, 226, 217, 0.82);
		font-size: 13px;
		line-height: 1;
		z-index: 14;
	}

	.tag {
		flex: none;
		padding: 3px 8px 2px 8px;
		border: 1px solid rgba(224, 169, 78, 0.45);
		border-radius: 999px;
		color: #e0a94e;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.09em;
		text-transform: uppercase;
	}

	p {
		margin: 0;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.pointer {
		color: rgba(232, 226, 217, 0.55);
	}

	a {
		color: #fff;
		text-decoration: underline;
		text-decoration-color: rgba(255, 255, 255, 0.35);
		text-underline-offset: 3px;
	}

	a:hover {
		text-decoration-color: #e0a94e;
	}

	/* Only the pointer to the live site has to survive on a narrow screen. */
	@media (max-width: 760px) {
		.detail {
			display: none;
		}
	}
</style>
