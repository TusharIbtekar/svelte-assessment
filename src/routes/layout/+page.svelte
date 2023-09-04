<svelte:head>
	<title>Layout</title>
</svelte:head>

<div class="grid grid-cols-4 lg:grid-rows-6 md:grid-cols-12 md:h-screen h-screen-3x">
	<div class="md:col-span-2 md:row-span-3 col-span-4 row-span-3 grid-rows-1 bg-blue-400" />
	<div class="md:col-span-4 md:row-span-5 col-span-4 row-span-3 grid-rows-4 bg-rose-100" />
	<div class="md:col-span-6 md:row-span-2 col-span-4 row-span-3 grid-rows-7 bg-cyan-400" />
	<div
		class="md:col-span-4 md:row-span-4 col-span-4 row-span-3 grid-rows-10 bg-yellow-100 grid place-items-center"
	>
		<div class="square grid place-items-center">
			<div class="circle grid place-items-center">
				<div class="mountain1">
					<div class="mountain2" />
				</div>
			</div>
		</div>
	</div>
	<div class="md:col-span-2 md:row-span-4 col-span-4 row-span-3 grid-rows-14 bg-emerald-400" />
	<div class="md:col-span-2 md:row-span-2 col-span-4 row-span-3 grid-rows-17 bg-teal-400" />
	<div class="md:col-span-6 md:row-span-1 col-span-4 row-span-3 grid-rows-21 bg-fuchsia-400" />
</div>

<style>
	.square {
		background-color: #293462;
		height: 300px;
		width: 300px;
	}
	.circle {
		background-color: #fef9c3;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		overflow: hidden;
	}
	.mountain1 {
		background-color: #fe5f55;
		height: 130px;
		width: 120px;
		transform: rotateY(0deg) rotate(45deg) translate(40px, 10px);
	}
	.mountain2 {
		background-color: #fe5f55;
		height: 80px;
		width: 120px;
		transform: translate(-30px, 100px);
	}
</style>
