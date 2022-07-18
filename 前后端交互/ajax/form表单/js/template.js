function template(id, data){
   let str = document.getElementById(id).innerHTML 
   let pattern = /{{\s*([a-zA-Z]+)\s*}}/
   let res = null;
   while( res = pattern.exec(str)){
    str = str.replace(res[0], data[res[1]])
   }

   return str;
}