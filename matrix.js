// javascript program to construct an n x n
// matrix such that every row and every
// column has distinct values.


var MAX = 100;
var mat = Array(MAX).fill(0).
map(x => Array(MAX).fill(0));

// Fills non-one entries in column j
// Given that there is a "1" at
// position mat[i][j], this function
// fills other entries of column j.
function fillRemaining(i, j, n) {
    // Initialize value to be filled
    var x = 2;

    // Fill all values below i as 2, 3, ...p
    for (k = i + 1; k < n; k++)
        mat[k][j] = x++;

    // Fill all values above i
    // as p + 1, p + 2, .. n
    for (k = 0; k < i; k++)
        mat[k][j] = x++;
}

// Fills entries in mat
// with the given set of rules
function constructMatrix(n) {
    // Alternatively fill 1s starting from
    // rightmost and leftmost columns. For
    // example for n = 3, we get { {_ _ 1],
    // {1 _ _} {_ 1 _}}
    var right = n - 1,
        left = 0;
    for (i = 0; i < n; i++) {
        // If i is even, then fill
        // next column from right
        if (i % 2 == 0) {
            mat[i][right] = 1;

            // After filling 1, fill remaining
            // entries of column "right"
            fillRemaining(i, right, n);

            // Move right one column back
            right--;
        }

        // Fill next column from left
        else {
            mat[i][left] = 1;

            // After filling 1, fill remaining
            // entries of column "left"
            fillRemaining(i, left, n);

            // Move left one column forward
            left++;
        }
    }
}

var n = 5;


constructMatrix(n);


for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++)
        console.log(mat[i][j] + " ");
    console.log('<br>');
}