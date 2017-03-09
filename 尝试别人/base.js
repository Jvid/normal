(function ($GLOBAL, $) {
    /**
     * 静态全局对象
     */
    this.$window = $(window);
    this.$document = $(document);
    this.$body = $('body');
    this.$header = $('header');
    this.$main = $('main');
    this.$inside = $('.main-inside');
    this.$aside = $('aside');
    this.$footer = $('footer');
    /**
     * 常用类型检测
     */
    this.isDef = function (obj) {
        return (typeof(obj) != 'undefined');
    };
    this.isStr = function (obj) {
        return (typeof(obj) == 'string');
    };
    this.isNum = function (obj) {
        return (typeof(obj) == 'number');
    };
    this.isFunc = function (obj) {
        return (typeof(obj) == 'function');
    };
    this.isArr = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
    this.isObj = function (obj) {
        return (typeof(obj) == 'object') && !isArr(obj);
    };
    /**
     * 原子对象
     */
    this.atom = function (obj) {
        return obj || {};
    };
    /**
     * 执行代理
     */
    this.proxy = function (exec, ctx) {
        return function () {
            exec.aplly(ctx || null, arguments);
        };
    };
    /**
     * 自适应的调试输出
     */
    this.cout = function (obj) {
        console ? console.info(obj) : alert(obj);
    };
    /**
     * 获取UNIX时间戳（毫秒）
     */
    this.time = function () {
        return new Date().getTime();
    };
    /**
     * 获取一个(m,n)之间的随机数
     */
    this.random = function (min, max, format) {
        var min = min || 0,
            max = max || 1,
            format = format || 'raw';
        return format == 'raw' ? (max - min) * Math.random() + min : Math[format]((max - min) * Math.random() + min);
    };
    /**
     * 深拷贝
     * @param obj
     */
    this.clone = function (obj) {
        return $.extend(true, {}, obj);
    };
    /**
     * 页面配置功能
     */
    this.$CONF = {};
    /**
     * Config读写
     */
    this.Config = function () {
        if (isStr(arguments[0])) return arguments.length > 1 ? ($CONF[arguments[0]] = arguments[1]) : $CONF[arguments[0]];
        if (isObj(arguments[0]) && arguments.length == 1) {
            for (var o in arguments[0]) {
                $CONF[o] = arguments[0][o];
            }
        }
    };
    /**
     * 页面缓存功能
     */
    this.$CACHE = {};
    /**
     * Cache读写
     */
    this.Cache = function () {
        if (isStr(arguments[0])) return arguments.length > 1 ? ($CACHE[arguments[0]] = arguments[1]) : $CACHE[arguments[0]];
        if (isObj(arguments[0]) && arguments.length == 1) {
            for (var o in arguments[0]) {
                $CACHE[o] = arguments[0][o];
            }
        }
    };
    /**
     * 删除指定Cache键值
     * @param key
     */
    this.removeCache = function (key) {
        delete $CACHE[key];
    };
    /**
     * 将指定Cache键值置为空
     * @param key
     */
    this.clearCache = function (key) {
        arguments.length ? ($CACHE[key] = null) : ($CACHE = {});
    };
    /**
     * 判断是否存在指定的键值
     * @param key
     * @returns {boolean}
     */
    this.existCache = function (key) {
        return key in $CACHE;
    };
    /**
     * cookie操作
     * @param key
     * @param value
     * @param options
     * @returns {*}
     */
    this.Cookie = function (key, value, expires) {
        var arr, expires = expires || 0, now = new Date();
        if (arguments.length > 1) {
            now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
            document.cookie = key + "=" + encodeURIComponent(value) + ";expires=" + now.toUTCString();
        }
        return (arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"))) ? decodeURIComponent(arr[2]) : null;
    };
    /**
     * 删除cookie
     * @param key
     */
    this.delCookie = function (key) {
        var now = new Date();
        now.setTime(now.getTime() - 1);
        if (Cookie(key) != null) document.cookie = key + "=;expires=" + now.toUTCString();
    };
    /**
     * 判断是否存在指定cookie
     * @param key
     * @returns {boolean}
     */
    this.existCookie = function (key) {
        return isStr(Cookie(key)) && (Cookie(key) != '');
    };
    /**
     * 操作功能容器
     */
    this.Cache('ACTION', {__hash_actions__: {}});
    this.Action = function () {
        if (arguments.length == 1) {
            if (isStr(arguments[0])) return Cache('ACTION')[arguments[0]];
            if (isObj(arguments[0])) {
                for (var o in arguments[0]) {
                    Cache('ACTION')[o] = arguments[0][o];
                }
            }
        }
        if (arguments.length > 1) Cache('ACTION')[arguments[0]] = arguments[1];
        if (arguments[2]) Cache('ACTION').__hash_actions__[arguments[0]] = arguments[1];
    };
    /**
     * AjaxTemplate容器
     */
    this.Cache('AJAXTEMPLATE', {});
    this.AjaxTemplate = function () {
        if (isStr(arguments[0])) return arguments.length > 1 ? (Cache('AJAXTEMPLATE')[arguments[0]] = arguments[1]) : Cache('AJAXTEMPLATE')[arguments[0]];
        if (isObj(arguments[0]) && arguments.length == 1) {
            for (var o in arguments[0]) {
                Cache('AJAXTEMPLATE')[o] = arguments[0][o];
            }
        }
    };
    /**
     * 类容器
     */
    this.Cache('CLASSES', {});
    this.Cache('OBJECTS', {__get__: {}});
    /**
     * 为UIComponent对象特别设置的通过id访问对象的方法
     * @param id 指定元素的ID
     * @returns {Object} 返回这个元素对应的实际对象实例
     */
    this.$$ = function (id) {
        return Cache('OBJECTS').__get__[$('#' + id).attr('instance-id')];
    };
    /**
     * 通过instance-id访问对象的方法
     * @param instanceId 指定元素的instance-id
     * @returns {Object} 返回这个元素对应的实际对象实例
     */
    this.$$$ = function (instanceId) {
        return Cache('OBJECTS').__get__[instanceId];
    };
    /**
     * 类和继承的实现
     * @param name 指定的类名称，可以直接new这个类名称，以创建实例
     * @param definition 类的定义
     * @returns {Function} 返回通用构造函数，包含这个类定义时的闭包环境，不建议使用！
     * @constructor
     */
    this.Class = function (name, definition, parent) {
        Cache('CLASSES')[name] = {__definition__: definition};
        var _CLASS = $GLOBAL[name] = function () {
            var exclusiveness = arguments[0] != 'EXTENDS' && this.__class_name__ == name;
            if (exclusiveness) {
                if (!Cache('OBJECTS')[name]) Cache('OBJECTS')[name] = [];
                this.__instance_id__ = name + '-' + Cache('OBJECTS')[name].length;
                Cache('OBJECTS')[name].push(this);
                Cache('OBJECTS').__get__[this.__instance_id__] = this;
            }
            parent && $GLOBAL[parent].apply(this, Cache('CLASSES')[name].__definition__[parent]);
            for (var m in definition) {
                if (m != name && m != parent && !isFunc(definition[m])) this[m] = definition[m];
            }
            isFunc(definition[name]) && definition[name].apply(this, arguments[0] == 'EXTENDS' ? Cache('CLASSES')[arguments[1]].__definition__[name] : arguments);
            if (exclusiveness) {
                var _this = this;
                (function (c) {
                    Cache('CLASSES')[c].__definition__.afterInitialize && Cache('CLASSES')[c].__definition__.afterInitialize.call(_this);
                    if (Cache('CLASSES')[c].__parent__) arguments.callee(Cache('CLASSES')[c].__parent__);
                })(this.__class_name__);
            }
        };
        if (parent) {
            if (!(Cache('CLASSES')[parent].__children__)) Cache('CLASSES')[parent].__children__ = [];
            Cache('CLASSES')[parent].__children__.push(name);
            Cache('CLASSES')[name].__parent__ = parent;
            _CLASS.prototype = new $GLOBAL[parent]('EXTENDS', name);
        }
        _CLASS.prototype.constructor = _CLASS;
        for (var f in definition) {
            if (f != name && f != 'afterInitialize' && isFunc(definition[f]) && !isFunc(_CLASS.prototype[f])) _CLASS.prototype[f] = definition[f];
        }
        _CLASS.prototype.__class_name__ = name;
        return _CLASS;
    };
    /*******************************************************************************************************************
     *
     * jQuery扩展代码区域
     *
     ******************************************************************************************************************/
    $.extend({
        /**
         * 判断一个元素是否存在于一个数组中。
         * 若存在，第一个值是元素在数组中的位置，否则返回-1
         */
        inArray: function (value, array) {
            if ($.isArray(array)) {
                for (var i = 0, l = array.length; i < l; i++) {
                    if (value == array[i]) return i;
                }
            }
            return -1;
        }
        /**
         * TODO:
         * 在这里扩展jQuery全局方法
         */
    });
    $.fn.extend({
        /**
         * 获取元素本身html代码的方法
         */
        selfHtml: function () {
            return $('<div></div>').append($(this).clone(false)).html();
        }
        /**
         * TODO:
         * 在这里扩展jQuery对象方法
         */
    });
    /*******************************************************************************************************************
     *
     * TODO:
     * 在这里添加全局方法/容器
     * 注意：不要在这里写与业务有关的功能！
     *
     ******************************************************************************************************************/
    /**
     * 触发无关点击事件控件容器
     */
    this.Cache('RELEVANT_CLICK_COMPONENT', []);
    /**
     * 注册无关点击事件对象
     */
    this.regRelevantClick = function ($intercepter) {
        $intercepter.attr('relevant-click-intercepter', Cache('RELEVANT_CLICK_COMPONENT').length);
        Cache('RELEVANT_CLICK_COMPONENT').push($intercepter);
    };
    /**
     * GET方法传递参数的容器
     */
    this.Cache('URL_ARGUMENTS', {});
    /**
     * 获取url中以GET方式传递的参数
     */
    this.GET = function () {
        if (arguments.length) {
            if (arguments[0] in Cache('URL_ARGUMENTS')) {
                return Cache('URL_ARGUMENTS')[arguments[0]];
            }
            else {
                //throw '"' + arguments[0] + '"参数不存在！';
                return null;
            }
        } else {
            return Cache('URL_ARGUMENTS');
        }
    };
    /**
     * Account数据容器
     */
    Cache('ACCOUNT', {
        ID: null,
        NAME: null,
        FACE_URL: null
    });
    /**
     * 日期相关（似乎不是必须的，可以使用系统自带的）
     */
    this.toDoubleDigits = function (number) {
        return number < 10 ? '0' + number : number;
    };
    this.formatDate = function (timestamp) {
        return timestamp.getFullYear() + "年" + toDoubleDigits(timestamp.getMonth() + 1) + "月" + toDoubleDigits(timestamp.getDate()) + "日";
    };
    this.formatDateTime = function (timestamp) {
        return formatDate(timestamp) + " " + toDoubleDigits(timestamp.getHours()) + ":" + toDoubleDigits(timestamp.getMinutes()) + ":" + toDoubleDigits(timestamp.getSeconds());
    };
    this.formatDateServer = function (timestamp) {
        return timestamp.getFullYear() + "-" + toDoubleDigits(timestamp.getMonth() + 1) + "-" + toDoubleDigits(timestamp.getDate());
    };
    this.formatDateTimeServer = function (timestamp) {
        return formatDateServer(timestamp) + " " + toDoubleDigits(timestamp.getHours()) + ":" + toDoubleDigits(timestamp.getMinutes()) + ":" + toDoubleDigits(timestamp.getSeconds());
    };
})(this, jQuery);