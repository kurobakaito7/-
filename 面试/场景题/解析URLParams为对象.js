let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

/* URLSearchParams(option): 一个实现了 URLSearchParams 的对象可以直接用在 for...of 结构中，
以键/值对在查询字符串中出现的顺序对它们进行迭代

参数option：可以是以下之一：
1. 一个字符串，会按 application/x-www-form-urlencoded 的格式进行解析。开头的 '?' 字符会被忽略。
2. 一系列基于字面量的字符串键值对，或者任何对象（例如 FormData 对象），能提供一系列字符串对的迭代器对象。
需要注意，File 将被序列化为 [object File]，而不是它们的文件名（就像 application/x-www-form-urlencoded 格式中的那样）。
3. 一个由字符串键和字符串值组成的键值对对象。请注意，不支持嵌套。 */

function parseParam(url){
    const queryString = url.split('?')[1]
    const params = new URLSearchParams(queryString)
    const parsedParams = {}
    for(let [key,value] of params.entries()){
        let pattern = /^\d+$/
        if(value === ''){
            value = true
        }else if (pattern.test(value)){
            value = Number(value)
        }
        if(parsedParams.hasOwnProperty(key)){
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

console.log(parseParam(url))
