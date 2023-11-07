var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
var obj = {
    school: [
        {
            name: 'test school',
            frends: [
                {
                    name: 'nee'
                },
                {
                    name: 'nee2',
                }
            ]
        },
        {
            name: 'test school',
            year: 1,
            frends: [
                {
                    name: 'nee'
                },
            ]
        },
    ]
};
var obj2 = {
    name: '',
    age: 0,
    school: [
        {
            name: 's1',
            year: 1,
        }
    ],
};
var newS = (_b = (_a = obj.school) === null || _a === void 0 ? void 0 : _a.filter(function (v) { return v.name && v.year; })) !== null && _b !== void 0 ? _b : [];
var obj3 = __assign(__assign({}, obj2), { school: __spreadArray(__spreadArray([], obj2.school, true), newS, true) });
