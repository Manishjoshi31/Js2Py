// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.4.5.1-4-10
description: >
    [[Call]] - length of parameters of 'target' is 1, length of
    'boundArgs' is 0, length of 'ExtraArgs' is 0, and with 'boundThis'
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { prop: "abc" };

        var func = function (x) {
            return this === obj && typeof x === "undefined";
        };

        var newFunc = Function.prototype.bind.call(func, obj);

        return newFunc();
    }
runTestCase(testcase);
