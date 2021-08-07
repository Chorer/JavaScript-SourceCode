const ajax = (method = 'GET',url,params) => {
  return new Promise((resolve,reject) => {
    // 初始化 xhr 对象
    const xhr = new XMLHttpRequest()
    // 请求成功处理
    xhr.onload = () => {
      const result = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders(),
        data: xhr.response || xhr.responseText
      }
      if(xhr.status >=200 && xhr.status < 300 || xhr.status == '304'){
        resolve(result)
      } else {
        reject(result)
      }
    }
    // 请求错误处理
    xhr.onerror = () => {
      reject(new TypeError('请求错误'))
    }
    xhr.timeout = () => {
      reject(new TypeError('请求超时'))
    }
    xhr.onabort = () => {
      reject(new TypeError('请求中断'))
    }
    // 如果是 GET 请求
    if(method == 'GET'){
      // 构造 query string
      if(params && typeof params == 'object'){
        params = Object.keys(params).map(key => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        }).join('&')
        url = `${url}?${params}`
      }
      // 发起请求
      xhr.open(method,url,false)
      xhr.send()
    }
    // 如果是 POST 请求
    if(method == 'POST'){
      xhr.setRequestHeader('content-type','application/json;charset = utf-8')
      xhr.open(method,url,false)
      xhr.send(JSON.stringify(params))
    }
  })
}