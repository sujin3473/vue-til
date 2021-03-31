import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('ID가 이메일 형식이 아니면 경고 메세지가 출력된다', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		// console.log(warningText.html());
		expect(warningText.exists).toBeTruthy();
	});
});
