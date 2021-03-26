<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<!-- .prevent : submit 후 새로고침 방지 -->
				<div>
					<label for="username">id: </label>
					<input
						:style="{ border: borderColor }"
						id="username"
						type="text"
						v-model="username"
					/>
				</div>
				<div>
					<label for="password">pw: </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<div>
					<label for="nickname">nickname: </label>
					<input id="nickname" type="text" v-model="nickname" />
				</div>
				<button
					:disabled="!isUsernameValid || !password || !nickname"
					type="submit"
					class="btn"
				>
					회원 가입
				</button>
				<p>{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
	data: () => ({
		username: '',
		password: '',
		nickname: '',
		logMessage: '',
	}),

	computed: {
		borderColor() {
			if (validateEmail(this.username)) {
				return '1px solid black';
			} else {
				return '1px solid red';
			}
		},
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},

	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData); //destructuring
			console.log(data.username);
			this.initForm();
			this.logMessage = `${data.username}님의 회원가입이 완료되었습니다.`; //ES6 backtick
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
