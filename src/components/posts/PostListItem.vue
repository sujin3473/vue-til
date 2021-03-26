<template>
	<li>
		<div class="post-title">
			{{ postItem.title }}
		</div>
		<div class="post-contents">
			{{ postItem.contents }}
		</div>
		<div class="post-time">
			{{ postItem.createdAt }}
			<ion-icon name="create" class="icon" @click="routeEditPage"></ion-icon>
			<ion-icon name="trash" class="icon" @click="deleteItem"></ion-icon>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async deleteItem() {
			if (confirm('Do you want to delete this content?')) {
				await deletePost(this.postItem._id);
				this.$emit('refresh');
			}
		},
		routeEditPage() {
			const id = this.postItem._id;
			this.$router.push(`/post/${id}`);
		},
	},
};
</script>
