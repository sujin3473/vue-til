<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<loading-spinner v-if="isLoading"></loading-spinner>
			<ul v-else>
				<post-list-item
					v-for="postItem in postItems"
					:key="postItem._id"
					:postItem="postItem"
					@refresh="fetchData"
				>
				</post-list-item>
			</ul>
		</div>
		<router-link to="/add" class="create-button">
			<ion-icon name="add-outline"></ion-icon>
		</router-link>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/posts';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
	components: {
		PostListItem,
		LoadingSpinner,
	},
	data: () => ({
		postItems: [],
		isLoading: false,
	}),
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		},
	},
	created() {
		// 현재 페이지 진입하자마자 실행
		this.fetchData();
	},
};
</script>

<style></style>
