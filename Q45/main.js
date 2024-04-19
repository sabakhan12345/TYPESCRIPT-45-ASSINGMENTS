//  =================  45 QUESTIONS ASSINGMENT   ===================
// ==========   Q45  ========= 
function create_Car(manufacture, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacture: manufacture, model: model };
    args.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(create_Car("toyota", "camry", ["color", "blue"], ["year", "2023"]));
