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
import { validateEmail } from '@/utils/validation';

export default {
	data: () => ({
		username: '',
		password: '',
		logMessage: '',
	}),
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				console.log(data.user.username);
				this.logMessage = `${this.username}님 환영합니다.`;
			} catch (error) {
				console.log(error.response.data);
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
