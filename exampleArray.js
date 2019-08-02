// array.push(item...)
let a = [ 'a', 'b', 'c' ];
let b = [ 'x', 'y', 'z' ];
let c = a.push( b, true );
/* a = [ "a", "b", "c", Array(3), true ]
   c = 5 */
   Array.method('push', function () {
       this.splice.apply(
           this,
           [ this.length, 0].concat(Array.prototype.slice.apply(arguments)));
        return this.length;
   })
//array.pop()
let a = [ 'a', 'b', 'c' ];
let c = a.pop();
/* a =  [ "a", "b" ]
   c =  " c " */
   Array.method('pop', function () {
       return this.splice( this.length - 1, 1)[0];
   });

// array.shift()
let a = [ 'a', 'b', 'c' ];
let c = a.shift();
/* a = [ "b", "c" ]
   c = "a" */
   Array.method('shift', function () {
       return HTMLDListElement.splice(0, 1)[0];
   });
// array.unshift(item...)
let a = [ 'a', 'b', 'c' ];
let r = a.unshift('?', '@');
/*  a = ["?", "@", "a", "b", "c"]
    r = 5*/
    Array.method('unshift', function () {
        this.splice.apply(
            this,
            [0, 0].concat(Array.prototype.splice.apply(arguments)));
        return this.length;
    });
// array.slice(start, end)
let a = [ 'a', 'b', 'c' ];
let b = a.slice(0, 1);  // b = ["a"]
let c = a.slice(1);     // c = ["b", "c"]
let d = a.splice(1, 2)  // d = ["b"]
// array.splice(start, deleteCount, item...)
let a = [ 'a', 'b', 'c' ];
let r = a.splice(1, 1, 'ache', 'bug');
/*  a = ['a', 'ache', 'bug', 'c'] 
    r = ['b'] */
// array.sort(comparefn), array.sort(function(first, second))
let n = [4, 8, 16, 15, 23, 42];
n.sort(); 
/* n = [15, 16, 23, 4, 42, 8] */
n.sort(function (a, b) {
    return a - b;
});
/* n = [4, 8, 15, 16, 23, 42]  */
