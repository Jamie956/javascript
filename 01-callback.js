function foo(cb) {
    cb();//execute cb
}
foo(function () { console.log('foo callback') });

function bar(cb) {
    cb.call(this);//execute cb by call
}
bar(function () { console.log('bar callback') });