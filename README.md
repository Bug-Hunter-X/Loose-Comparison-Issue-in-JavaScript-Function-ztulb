# Loose Comparison Issue in JavaScript Function
This repository demonstrates an unexpected behavior in JavaScript when using loose comparison (==) with null and undefined values.

The `foo` function is intended to return 0 if the input is null, and input + 1 otherwise. However, due to how loose comparison works, it produces an unexpected result for undefined values.

## Bug
The `bug.js` file contains the problematic function. The loose comparison `x == null` evaluates to true for both `null` and `undefined`. This leads to unexpected behavior when `undefined` is passed as input. Loose comparisons can lead to unexpected behavior in javascript. It is advisable to use strict comparison to reduce the possibilities of encountering such unexpected behavior.

## Solution
The `bugSolution.js` file demonstrates how to fix this using strict equality (===) to properly handle null and undefined separately. This improves the function's correctness and avoids unexpected behavior.
