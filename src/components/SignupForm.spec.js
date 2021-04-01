import { shallowMount } from '@vue/test-utils';
import SignupForm from './LoginForm.vue';

describe('SignupForm.vue', () => {
	test('', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					username: '',
					password: '',
					nickname: '',
				};
			},
		});
		const btn = wrapper.find('button');
		expect(btn.element.disabled).toBeTruthy();
	});
});
