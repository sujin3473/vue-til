// 학습 노트 조작과 관련된 CRUD API 함수
import { post } from './index';

// 학습 노트 데이터 목록을 조회하는 API
function fetchPosts() {
	return post.get('/');
}

// 특정 학습 노트를 조회하는 API
function fetchPost(postId) {
	return post.get(postId);
}

// 학습 노트 데이터 등록하는 API
function createPost(postData) {
	return post.post('/', postData);
}

// 학습 노트를 삭제하는 API
function deletePost(postId) {
	return post.delete(postId);
}

export { fetchPosts, fetchPost, createPost, deletePost };
