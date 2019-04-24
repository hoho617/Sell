let checkLogin = ()=>{
  return new Promise((resolve,reject)=>{
    let flag = document.cookie.indexOf('userId') > -1 ?true:false;

    if(flag = true){
      let userInfo = {
        status:0,
        login:true
      }
      resolve(userInfo);
    }else {
      reject("error")
    }
  })

}


let getUserInfo = ()=>{
  return new Promise((resolve,reject)=>{
    let userInfo = {
      name:'xieying',
      age:12
    };
    resolve(userInfo);
  })
}
//方式1 链式编程 直接在最后写.then
/*checkLogin().then(function (res) {
  console.log(`登录成功:${res.status}`);
  return getUserInfo();
}).catch(err=>{
  console.log(`error:${err}`)
}).then(res2=>{
  console.log(`登录成功的用户信息:${res2.name}`)
})*/

// 方式2 使用Promise.all方法

Promise.all([checkLogin(),getUserInfo()]).then(([res1,res2])=>{
  console.log(`checkLogin方法返回的信息为${res1.status},getUserInfo函数返回的信息为${res2.name}`)
})
