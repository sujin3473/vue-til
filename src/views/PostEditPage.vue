<template>
	<div class="form-container">
		<post-edit-form></post-edit-form>
	</div>
</template>

<script>
import PostEditForm from '@/components/posts/PostEditForm.vue';
import { fetchPost } from '@/api/posts';

export default {
	components: {
		PostEditForm,
	},
	data: () => ({
		postItem: '',
	}),
	methods: {
		async fetchData() {
			const { data } = await fetchPost();
			console.log(data);
			//this.postItem = data.post;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
