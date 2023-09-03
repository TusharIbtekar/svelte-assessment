<svelte:head>
	<title>Layout</title>
</svelte:head>

<main class="md:grid md:grid-rows-6 md:grid-cols-12 h-screen w-full">
	<!-- For smaller devices (6x4 grid) -->
	<div class="md:hidden grid grid-rows-6 grid-cols-4 w-full h-full">
		<div class="col-span-4 row-span-3 bg-blue-400">3 x 4 (color: blue-400)</div>
		<div class="col-span-4 row-span-3 bg-rose-100">3 x 4 (color: rose-100)</div>
	</div>
	<div class="md:hidden grid grid-rows-6 grid-cols-4 w-full h-full">
		<div class="col-span-4 row-span-3 bg-teal-400">3 x 4 (color: teal-400)</div>
		<div class="col-span-4 row-span-3 bg-fuchsia-400">3 x 4 (color: fuchsia-400)</div>
	</div>
	<div class="md:hidden grid grid-rows-6 grid-cols-4 w-full h-full">
		<div class="col-span-4 row-span-3 bg-cyan-400">3 x 4 (color: cyan-400)</div>
		<div class="col-span-4 row-span-3 bg-yellow-100">3 x 4 (color: yellow-100)</div>
	</div>
	<div class="md:hidden grid grid-rows-6 grid-cols-4 col-span-4 row-span-3 w-full h-full">
		<div class="col-span-4 row-span-3 bg-emerald-400">3 x 4 (color: emerald-400)</div>
	</div>

	<!-- For larger devices (6x12 grid) -->
	<div class="hidden md:grid md:col-span-6 md:row-span-6 grid-rows-6 grid-cols-6">
		<div class="row-span-3 col-span-2 bg-blue-400">3 x 2 (color: blue-400)</div>
		<div class="row-span-5 col-span-4 bg-rose-100">5 x 4 (color: rose-100)</div>
		<div class="row-span-2 col-span-2 bg-teal-400">2 x 2 (color: teal-400)</div>
		<div class="row-span-1 col-span-6 bg-fuchsia-400">1 x 6 (color: fuchsia-400)</div>
	</div>

	<div class="hidden md:grid md:col-span-6 md:row-span-6 grid-rows-6 grid-cols-6 bg-red-400">
		<div class="row-span-2 col-span-6 bg-cyan-400">2 x 6 (color: cyan-400)</div>
		<div class="row-span-4 col-span-4 bg-yellow-100 grid place-items-center">
			<div class="square grid place-items-center">
				<div class="circle grid place-items-center">
					<div class="mountain1">
						<div class="mountain2" />
					</div>
				</div>
			</div>
		</div>
		<div class="row-span-4 col-span-2 bg-emerald-400">4 x 2 (color: emerald-400)</div>
	</div>
</main>

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
