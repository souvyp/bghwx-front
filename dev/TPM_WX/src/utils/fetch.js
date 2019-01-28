import axios from 'axios'

//创建axios实例
const instance = axios.create({
	//baseURL: 'https://some-domain.com/api/',
	//headers: {'X-Custom-Header': 'foobar'},
	timeout: 5000	//请求超出时间
})

//添加请求拦截器
instance.interceptors.request.use(
	config => {
		return config		//请求之前，config:请求配置信息
	},
	error => {
		return Promise.reject(error)	//请求错误
	}
)

//添加响应拦截器
instance.interceptors.response.use(
	response => {
		return response		//响应数据
	}, 
	error => {
		return Promise.reject(error)	//响应错误
	}
)

export default instance
