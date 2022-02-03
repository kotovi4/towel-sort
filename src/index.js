// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) {
        return result;
    }

    matrix.forEach(function (a, b) {
        if (b % 2 !== 0) {
            a.reverse();
        }
        result = result.concat(a);
    });

    return result;
};
