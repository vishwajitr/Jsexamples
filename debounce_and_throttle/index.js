let counter=0;

function getdata() {
console.log('fetching data...',++counter);
}


function throttle(fn, limit){
let flag = true;
return function(){
  let context = this,
  args = arguments;
    if(flag){
      getdata.apply(context, arguments);
      flag = false
      setTimeout(()=>{
        flag = true;
      }, limit)
    }
  }
}

function doMagic(fn, delay){
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getdata.apply(context, arguments  );
    }, delay);
  }
}
var betterFunction = throttle(getdata(), 1000)