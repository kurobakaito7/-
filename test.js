function testAsy(x){
    return new Promise(resolve=>{setTimeout(() => {
        resolve(x);
      }, 3000)
     }
    )
 }
 async function testAwt(){    
   let result =  await testAsy('hello world');
   console.log(result);    // 3秒钟之后出现hello world
   console.log('cuger')   // 3秒钟之后出现cuger
 }
 testAwt();
 console.log('cug')  //立即输出cug