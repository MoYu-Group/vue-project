import Mock from 'mockjs'
const url = window.location.hostname;
const baseUrl = url + '/api';
const statusApi = baseUrl + '/allStatus';
const allStatus = Mock.mock(statusApi,'get',{
    status: 200,
})

export default allStatus