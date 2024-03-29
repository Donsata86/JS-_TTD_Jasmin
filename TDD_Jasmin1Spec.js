//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n) {
    sum = 0
    for (var i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(Sum1toN(3))

//devuelve la suma del primer y último número en el array
function sumFirstLast(arr) {
    return arr[0] + arr[arr.length - 1];
}
console.log(sumFirstLast([15, 3, 5, 8, 5, 88, 10]))


describe("Sum1toN", function() {
    it("should return 3 when we pass 2 as an argument", function() {
        expect(Sum1toN(2)).toEqual(3);
    });
    it("should return 6 when we pass 3 as an argument", function() {
        expect(Sum1toN(3)).toEqual(6);
    });
    it("should return 10 when we pass 4 as an argument", function() {
        expect(Sum1toN(4)).toEqual(10);
    });
    it("should return 0 when we pass 0 as an argument", function() {
        expect(Sum1toN(0)).toEqual(0);
    });
    it("should return 15 when we pass 5 as an argument", function() {
        expect(Sum1toN(5)).toEqual(15);
    });
});

describe("sumFirstLast", function() {
    it("should return 3 when we pass [1,2] as an argument", function() {
        expect(sumFirstLast([1, 2])).toEqual(3);
    });
    it("should return 10 when we pass [2,3,8] as an argument", function() {
        expect(sumFirstLast([2, 3, 8])).toEqual(10);
    });
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() {
        expect(sumFirstLast([-6, 23, 3, -4])).toEqual(-10);
    });
    it("should return 0 when we pass [[0, 23, 3, 0]] as an argument", function() {
        expect(sumFirstLast([0, 21, 12, 32, 12, 12, 0])).toEqual(0);
    });
    it("should return 0 when we pass [-1, 23, 3, 1] as an argument", function() {
        expect(sumFirstLast([-1, 2, 3, 23, 123, 2176, 1])).toEqual(0);
    });

});