<template>
	<router-view v-slot="{Component, route}">
		<transition :name="route.meta.transition || 'fade'">
			<component :is="Component"></component>
		</transition>
	</router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

});

</script>
