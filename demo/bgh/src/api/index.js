import fetch from '@/utils/fetch'

export function getObj(url) {	//get url
  return fetch({
    url: url,
    method: 'get'
  })
}

export function putObj(obj, url) {	//post  Obj
	return fetch({
		url: url,
		method: 'post',
		data: obj
	})
}