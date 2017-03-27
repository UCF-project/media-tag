(function (window) {
var main = function () {
    var $ = window.jQuery;

    var Plugin = function (plugins) {
        return {
            getPlugin: function (name) {
                return plugins.find(function (p) {
                    return p.identifier === name;
                });
            },
            findType: function (mediaObj) {
                var type;
                plugins.some(function (p) {
                    if (p.typeCheck(mediaObj)) {
                        type = p.identifier;
                        return true;
                    };
                    return;
                });
                return type;
            }
        };
    };

    return Plugin;
};

    if (typeof(module) !== 'undefined' && module.exports) {
        module.exports = main()
    } else if ((typeof(define) !== 'undefined' && define !== null) && (define.amd !== null)) {
        define(main);
    } else {
        window.Plugin = main(); // GLHF
    }
}(this));



