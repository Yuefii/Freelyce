<script lang="ts">
	import logo from '$lib/assets/logo.png';
</script>

<footer class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid gap-8 md:grid-cols-5">
			<div class="md:col-span-2">
				<a href="/" class="mb-6 flex items-center">
					<img src={logo} alt="Freelyce Logo" class="h-20" />
				</a>
				<p class="mb-6 text-sm leading-relaxed text-[#4B615E]">
					Freelyce adalah platform untuk membuat invoice berbasis website yang
					dirancang untuk freelance, pekerja mandiri, dan pelaku bisnis.
				</p>
				<div class="text-xs text-[#2F3E46]">
					© 2025 Freelyce. All rights reserved.
				</div>
			</div>
			<div>
				<h4 class="mb-4 text-sm font-semibold text-[#2f3e46]">Product</h4>
				<ul class="space-y-2 text-sm text-[#4B615E]">
					<li><a href="#features" class="hover-underline">Features</a></li>
					<li><a href="#pricing" class="hover-underline">Pricing</a></li>
				</ul>
			</div>
			<div>
				<h4 class="mb-4 text-sm font-semibold text-[#2f3e46]">Company</h4>
				<ul class="space-y-2 text-sm text-[#4B615E]">
					<li><a href="#about" class="hover-underline">About</a></li>
					<li><a href="#contact" class="hover-underline">Contact</a></li>
				</ul>
			</div>
			<div>
				<h4 class="mb-4 text-sm font-semibold text-[#2f3e46]">Resources</h4>
				<ul class="space-y-2 text-sm text-[#4B615E]">
					<li><a href="/#" class="hover-underline">Blog</a></li>
					<li><a href="/#" class="hover-underline">Help Center</a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>
