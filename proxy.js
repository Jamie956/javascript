let p = new Proxy({a:1}, {
    get(target, name) {
        return name in target ? target[name] : 6;
    }
});
console.log(p.a);
console.log(p.b);
console.log(p.c);