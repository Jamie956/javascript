/* 
 * 描述：动态取得本地资源文件内容 
 *  
 * 参数： 
 *   key 对应的资源的key 
 *   params 对应资源中的参数对象(Hash) 
 *    
 * 返回：对应的资源内容 
 *  
 * 用法： 
 *      getLocale("helloParam",{first:value1,second:value2}); 
 */  
function getJSLocale(key,params){  
  var result = "";    // 对应的资源的内容  
  var paramsObj = {}; // 参数对象  
  if(params) paramsObj = params;  
    
  if(typeof(key) != 'undefined' && typeof(JSLocale) != 'undefined'){  
      // 根据key取得对应的资源内容，如果没有找到则返回key值  
      if(JSLocale[key] != undefined){  
          result = JSLocale[key];  
      }else{  
          result = key;  
      }  
        
      // 替换对应参数为value的值  
      var regExp = new RegExp(); //替换资源中参数的正则  
      for(var k in paramsObj){  
          regExp = eval("/{{:" + k + "}}/g");  
          result = result.replace(regExp,paramsObj[k]);  
      }  
        
      // 如果没有找到对应的资源则返回 "No Value"  
      if(/{{:[a-zA-Z]+}}/.test(result)){  
          result = result.replace(/{{:[a-zA-Z]+}}/g, "No Value");  
      }  
  }  
  return result;  
} 