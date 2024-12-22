let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

let newUrl = decodeURIComponent(url)
console.log(newUrl)
function parseParam(url){
    const queryString = url.split('?')[1]
    const params = new URLSearchParams(queryString)
    const parsedParams = {}
    for(let [key,value] of params.entries()){// 返回一个迭代器，允许遍历该对象中包含的所有键/值对
        let pattern = /^\d+$/
        if(value === ''){
            value = true
        }else if (pattern.test(value)){
            value = Number(value)
        }
        if(parsedParams.hasOwnProperty(key)){// 如果自有属性
            if(Array.isArray(parsedParams[key])){
                parsedParams[key].push(value)
            }else{
                parsedParams[key] = [parsedParams[key],value]
            }
        }else{
            parsedParams[key] = value
        }
    }
    return parsedParams
}
console.log(parseParam(newUrl));

/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/