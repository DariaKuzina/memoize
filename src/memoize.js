export { memoize };

function memoize(func) {
	var _cashe = new Map();
	return function () {
		var key = getKey(arguments);
		if (!_cashe.has(key)) {
			_cashe.set(key, func.apply(null, arguments));
		}
		return _cashe.get(key);
	}
}

function getKey(args) {
	var res = "";
	for (var i = 0; i < args.length; i++) {
		res += args[i] + typeof (args[i]) + ";";
	}
	return res;
}
