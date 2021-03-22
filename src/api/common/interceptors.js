export function setInterceptors(instance) {
	// Add a request interceptor
	instance.interceptors.request.use(
		function(config) {
			// Do something before request is sent
			return config;
		},
		function(error) {
			// Do something with request error
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function(response) {
			return response;
		},
		function(error) {
			return Promise.reject(error);
		},
	);
	return instance;
}
