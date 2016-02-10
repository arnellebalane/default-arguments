function defaultArguments(fn, defaults = {}) {
    let argnames = fn.toString().replace(/^.*\(|\)(.|\s)*$/g, '')
        .split(/,\s*/g);
    defaults = argnames.map(argname => defaults[argname]);
    return function() {
        let args = Array.from(arguments);
        args = args.concat(defaults.slice(arguments.length));
        return fn.apply(this, args);
    };
}


module.exports = defaultArguments;
