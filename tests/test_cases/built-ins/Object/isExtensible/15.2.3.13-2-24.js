// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.13-2-24
description: >
    Object.isExtensible returns true if O is extensible and has a
    prototype that is extensible
includes: [runTestCase.js]
---*/

function testcase() {
       
        var proto = {};

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var obj = new ConstructFun();

        return Object.isExtensible(obj);
    }
runTestCase(testcase);
