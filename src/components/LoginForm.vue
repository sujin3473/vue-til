<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id:</label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">pw:</label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button
					:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
					:class="!isUsernameValid || !password ? 'disabled' : null"
				>
					로그인
				</button>
			</form>
		</div>
	</div>
</template>

<script>
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
				await this.$store.dispatch('LOGIN', userData);
				//로그인 처리가 끝나고 main으로 이동해야되기 때문에 꼭 await를 넣어준다.
				this.$router.push('/main');
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

<style>
.btn {
	color: white;
}
</style>
