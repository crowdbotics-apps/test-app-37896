import axios from "axios"
const testAppAPI = axios.create({
  baseURL: "https://test-app-37896-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function rest_auth_login_create(payload) {
  return testAppAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return testAppAPI.post(`/rest-auth/password/change/`, payload.data)
}
function api_v1_base_table_partial_update(payload) {
  return testAppAPI.patch(`/api/v1/base_table/${payload.id}/`, payload.data)
}
function api_v1_base_table_read(payload) {
  return testAppAPI.get(`/api/v1/base_table/${payload.id}/`)
}
function api_v1_base_table_delete(payload) {
  return testAppAPI.delete(`/api/v1/base_table/${payload.id}/`)
}
function api_v1_base_table_update(payload) {
  return testAppAPI.put(`/api/v1/base_table/${payload.id}/`, payload.data)
}
function rest_auth_logout_create(payload) {
  return testAppAPI.post(`/rest-auth/logout/`)
}
function rest_auth_logout_list(payload) {
  return testAppAPI.get(`/rest-auth/logout/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testAppAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function api_v1_login_create(payload) {
  return testAppAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return testAppAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return testAppAPI.patch(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_read(payload) {
  return testAppAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testAppAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return testAppAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function api_v1_base_table_create(payload) {
  return testAppAPI.post(`/api/v1/base_table/`, payload.data)
}
function api_v1_base_table_list(payload) {
  return testAppAPI.get(`/api/v1/base_table/`)
}
function rest_auth_password_reset_create(payload) {
  return testAppAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return testAppAPI.post(`/rest-auth/registration/`, payload.data)
}
export const apiService = {
  rest_auth_login_create,
  rest_auth_password_change_create,
  api_v1_base_table_partial_update,
  api_v1_base_table_read,
  api_v1_base_table_delete,
  api_v1_base_table_update,
  rest_auth_logout_create,
  rest_auth_logout_list,
  rest_auth_password_reset_confirm_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_partial_update,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_registration_verify_email_create,
  api_v1_base_table_create,
  api_v1_base_table_list,
  rest_auth_password_reset_create,
  rest_auth_registration_create
}
