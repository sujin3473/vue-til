<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">password: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button>로그인</button>
		<p>{{ this.logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
	data: () => ({
		username: '',
		password: '',
		logMessage: '',
	}),
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
			};
			const { data } = await loginUser(userData);
			console.log(data.user.username);
			this.logMessage = `${this.username}님 환영합니다.`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
