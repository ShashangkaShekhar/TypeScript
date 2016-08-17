//// [arrayOfSubtypeIsAssignableToReadonlyArray.ts]
class A { a }
class B extends A { b }
class C<T> extends Array<T> { c }
declare var ara: A[];
declare var arb: B[];
declare var cra: C<A>;
declare var crb: C<B>;
declare var rra: ReadonlyArray<A>;
declare var rrb: ReadonlyArray<B>;
rra = ara;
rrb = arb; // OK, Array<B> is assignable to ReadonlyArray<A>
rra = arb;
rrb = ara; // error: 'A' is not assignable to 'B'

rra = cra;
rra = crb; // OK, C<B> is assignable to ReadonlyArray<A>
rrb = crb;
rrb = cra; // error: 'A' is not assignable to 'B'


//// [arrayOfSubtypeIsAssignableToReadonlyArray.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
    }
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
}(A));
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    return C;
}(Array));
rra = ara;
rrb = arb; // OK, Array<B> is assignable to ReadonlyArray<A>
rra = arb;
rrb = ara; // error: 'A' is not assignable to 'B'
rra = cra;
rra = crb; // OK, C<B> is assignable to ReadonlyArray<A>
rrb = crb;
rrb = cra; // error: 'A' is not assignable to 'B'
