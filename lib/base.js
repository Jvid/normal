/***********************************************************************************************************************
 *
 * @author www.dfb365.com
 * @update 2015/12/16
 *
 **********************************************************************************************************************/
/***********************************************************************************************************************
 *
 * 底层增强代码区域
 *
 **********************************************************************************************************************/
;
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
    // Action({
    //     name:"jingduo",
    //     age:18,
    //     sex:"male"
    // });
    // Action("name","jingduo","male")
    // console.log($CACHE);
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
                return false;
            }
        } else {
            return Cache('URL_ARGUMENTS');
        }
    };
    /**
     * 上传控件容器，上传控件初始化方法
     */
    /*this.Cache('FILE_UPLOADER', {});
     this.prepareFileUploader = function ($component, url) {
     var $fileName = $component.find('.file-name');
     $component.find('.file-url').val(url);
     $fileName.attr('text', $fileName.text()).removeClass('hint').removeClass('error').attr('title', url).text(url);
     if ($component.attr('image-preview')) {
     var $oldImage = $component.find('.img-preview'), $img = $('<div class="img-preview"><img src="' + url + '" alt="' + url + '" /></div>');
     $oldImage.length ? $oldImage.replaceWith($img) : $component.append($img);
     }
     };*/
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

/***********************************************************************************************************************
 *
 * 类定义代码区域
 * TODO:
 * 在这里进行类定义
 *
 **********************************************************************************************************************/
Class('Request', {
    Request: function (options) {
        options.type = options.type || 'POST';
        options.dataType = options.dataType || 'json';
        if (Config('ajax_debug_mode')) {
            if (AjaxTemplate(options.url)) {
                options.success.call(window, AjaxTemplate(options.url)(options.data || {}));
            } else {
                throw 'error:未定义AJAX接口返回数据模板！[ajax-template-name:"' + options.url + '"]';
            }
        } else {
            $.ajax(options);
        }
    }
});
/**
 * UIComponent类
 * 所有页面原件的基类
 */
Class('UIComponent', {
    name: '',
    __self__: null,
    appendTo: function (parent) {
        parent.append(this._self);
    },
    insertAfter: function (previous) {
        this.__self__.insertAfter(previous);
    },
    self: function () {
        return this.__self__;
    },
    UIComponent: function () {
    },
    afterInitialize: function () {
        this.name != this.__instance_id__ && this.__self__.attr('id', this.name);
        this.__self__.attr('instance-id', this.__instance_id__);
    }
});
/**
 * DataGrid类
 * 数据表格
 */
Class('DataGrid', {
    data: {},
    settings: {},
    table: null,
    thead: null,
    tbody: null,
    pageCtrl: null,
    generateRow: function (row_index, row_data) {
        var $tr = $('<tr></tr>').attr('row-index', row_index + 1), CO = this.settings.COLUMNS_ORDER, CD = this.settings.COLUMNS_DISPLAY;
        $(CO).each(function (col_index, col_name) {
            var $td = $('<td></td>').html(row_data[col_name]).appendTo($tr);
            CD && CD[col_name] && CD[col_name].call($td, row_data, col_index, row_index);
            $td.attr('col-name', col_name).attr('r', row_index + 1).attr('c', col_index + 1);
        });
        this.tbody.append($tr);
    },
    generateHead: function () {
        var $thead = this.thead.find('tr').html(''), CO = this.settings.COLUMNS_ORDER, CC = this.settings.COLUMNS_CAPTION, CW = this.settings.COLUMNS_WIDTH;
        $(CO).each(function (col_index, col_name) {
            var $th = $('<th></th>').html(CC[col_name]).attr('col-name', col_name).attr('col-index', col_index + 1).appendTo($thead);
            CW && CW[col_name] && $th.css('min-width', CW[col_name]);
        });
    },
    generateBody: function () {
        var _this = this;
        this.tbody.html('');
        $(this.data.rows).each(function (row_index, row_data) {
            _this.generateRow(row_index, row_data);
        });
    },
    reload: function (data) {
        this.data = data || {};
        this.generateHead();
        this.generateBody();

        this.settings.NEED_PAGE_CTRL && this.pageCtrl && this.pageCtrl.reload({
            page: data.page,
            pageSize: data.pageSize,
            totalResults: data.totalResults
        });
    },
    render: function ($container) {
        if ($container) {
            $container.replaceWith(this.table);
            this.table.html('').append(this.thead).append(this.tbody);
            this.settings.NEED_PAGE_CTRL && this.pageCtrl.render(this.table);
        }
    },
    DataGrid: function (name, data, $container) {
        this.settings = Config(name) || {};
        this.table = $('<table></table>');
        this.thead = $('<thead><tr></tr></thead>');
        this.tbody = $('<tbody></tbody>');
        if (this.settings.NEED_PAGE_CTRL) {
            this.pageCtrl = new PageCtrl(null, {
                bindTarget: this,
                page: data.page,
                totalResults: data.totalResults,
                pageSize: this.settings.PAGE_SIZE,
                pageSizes: this.settings.PAGE_SIZES,
                pageChangedAction: this.settings.PAGE_CHANGED_ACTION
            });
        }
        this.reload(data);
        $container && this.render($container);
        this.name = name || this.__instance_id__;
        this.__self__ = this.table;
    }
}, 'UIComponent');
/**
 * PageCtrl类
 * 分页器
 */
Class('PageCtrl', {
    bindTarget: null,
    page: 1,
    totalResults: 0,
    pageSize: null,
    maxPage: 1,
    pageSizes: null,
    pageChangedAction: null,
    pageCtrl: null,
    pager: null,
    pageSizeSwitcher: null,
    getNumbers: function () {
        var current = this.page, max = this.maxPage;
        if (max < 5) {
            var nums = [];
            for (var i = 0; i < max; i++) nums.push(i + 1);
            return nums;
        } else {
            return (current < 4) ? [1, 2, 3, 4, 5] : ((current > max - 3) ? [max - 4, max - 3, max - 2, max - 1, max] : [current - 2, current - 1, current, current + 1, current + 2]);
        }
    },
    generatePager: function () {
        var _this=this;
        var current = this.page, max = this.maxPage, $numArea = this.pager.find('div').html('');
        var $front = this.pager.find('.front').attr('page-num', 1);
        var $prev = this.pager.find('.prev').attr('page-num', current - 1);
        var $next = this.pager.find('.next').attr('page-num', current + 1);
        var $end = this.pager.find('.end').attr('page-num', max);
        max > 5 && current > 3 && $numArea.append('<i>...</i>');
        $(this.getNumbers()).each(function () {
            $numArea.append('<a' + (this == current ? ' class="current"' : ' href="#page-num"') + ' page-num="' + this + '">' + this + '</a>');
        });
        max > 5 && current < max - 2 && $numArea.append('<i>...</i>');
        current != 1 ? $front.attr('href', '#page-num').removeClass('current') : $front.removeAttr('href').addClass('current');
        current > 1 ? $prev.attr('href', '#page-num').removeClass('current') : $prev.removeAttr('href').addClass('current');
        current < max ? $next.attr('href', '#page-num').removeClass('current') : $next.removeAttr('href').addClass('current');
        current != max ? $end.attr('href', '#page-num').removeClass('current') : $end.removeAttr('href').addClass('current');
        this.pager.find('span b').text(max);
        this.pager.find('span.sum').text('共' + _this.totalResults + '条');
    },
    generatePageSizeSwitcher: function () {
        var _this = this, $selArea = this.pageSizeSwitcher.find('select').html('');
        $(this.pageSizes).each(function () {
            $selArea.append('<option' + (this == _this.pageSize ? ' selected="selected">' : '>') + this + '</option>');
        });
        $selArea.next('span').remove();
        //$selArea.after('<span>共' + _this.totalResults + '条</span>')
    },
    reload: function (data) {
        this.page = data.page || this.page;
        this.totalResults = data.totalResults /*|| this.totalResults*/;
        this.pageSize = data.pageSize || this.pageSize;
        this.maxPage = Math.ceil(this.totalResults / this.pageSize);
        this.pageSizes = data.pageSizes || this.pageSizes;
        this.pageSize && this.pageSizes && this.pageSizes.length && this.generatePageSizeSwitcher();
        this.generatePager();
    },
    render: function ($bindTarget) {
        this.pageCtrl.html('').append(this.pager);
        this.pageSize && this.pageSizes && this.pageSizes.length && this.pageCtrl.prepend(this.pageSizeSwitcher);
        this.pageCtrl.insertAfter($bindTarget);
    },
    PageCtrl: function (name, data) {
        /**
         * 继承UIComponent一定要声明“绘制到页面上的最终目标是什么”
         * this._self = this.something;
         */
        var _this = this;
        this.bindTarget = data.bindTarget;
        this.pageChangedAction = data.pageChangedAction;
        this.pageCtrl = $('<div class="page-ctrl"></div>');
        this.pager = $('<div class="pager"><span class="sum" style="margin-right: 20px;"></span><span>共<b>100</b>页</span><a class="front">首页</a><a class="prev">上一页</a><div></div><a class="next">下一页</a><a class="end">末页</a></div>');
        this.pageSizeSwitcher = $('<div class="page-size"><label>每页显示条数：</label><select></select></div>');
        this.reload(data);
        this.pageSizeSwitcher && this.pageSizeSwitcher.find('select').change(function () {
            _this.pageSize = parseInt($(this).val());
            _this.pageChangedAction.call(_this);
        });
        this.name = name || this.__instance_id__;
        this.__self__ = this.pageCtrl;
    }
}, 'UIComponent');
/**
 * DateTimePicker类
 * 日期时间选择器
 */
Class('DateTimePicker', {
    container: null,
    panel: null,
    calender: null,
    data: null,
    time: null,
    type: 0,
    today: new Date(),
    supportedType: ['date', 'date time', 'period'],
    getTotalDaysOfMonth: function (month, year) {
        return (new Date(year, month + 1, 0)).getDate();
    },
    getDaysBeforeFirstDay: function (month, year) {
        var daysBefore = (new Date(year, month, 1)).getDay() - 1;
        return daysBefore == -1 ? 6 : daysBefore;
    },
    parse: function (string) {
        if (string) {
            var dt = string.split(' '), date = dt[0].split('-'), time;
            var arr = [parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]), 0, 0, 0];
            if (dt[1]) {
                time = dt[1].split(':');
                arr[3] = time[0] || 0;
                arr[4] = time[1] || 0;
                arr[5] = time[2] || 0;
            }
            return new Date(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
        }
        return new Date();
    },
    switchCalender: function ($cal, year, month) {
        var totalDays = this.getTotalDaysOfMonth(month, year), daysBefore = this.getDaysBeforeFirstDay(month, year), index = $cal.prev('.calender').length;
        $($cal.find('.year-month span b').get(0)).text(year);
        $($cal.find('.year-month span b').get(1)).text(month + 1);
        $cal.find('.dates').html('');
        for (var i = 1; i < 43; i++) {
            var $cell = $('<li class="date"></li>'), $anchor = $('<a href="#nogo">' + (i - daysBefore) + '</a>');
            if (i % 7 == 0 || (i + 1) % 7 == 0) $cell.addClass('weekend');
            if (i > daysBefore && i <= daysBefore + totalDays) {
                $cell.append($anchor);
                year == this.data[index].year && month == this.data[index].month && (i - daysBefore == this.data[index].date) && $cell.addClass('current');
            }
            $cal.find('.dates').append($cell);
        }
    },
    createCalender: function (year, month, date) {
        var _this = this, $cal = $('<div class="calender"><div class="year-month"><span><b>----</b>&nbsp;年&nbsp;<b>--</b>&nbsp;月</span><a href="#nogo" class="prev"></a><a href="#nogo" class="next"></a></div><ul class="days cf"><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li class="weekend">六</li><li class="weekend">日</li></ul><ul class="dates cf"></ul></div>');
        this.calender.push($cal);
        this.data.push({
            year: year,
            month: month,
            date: date
        });
        this.switchCalender($cal, year, month);
        this.panel.append($cal.click(function (event) {
            var $target = $(event.target), $date = $target.parent('.date');
            var $ym = $(this).find('.year-month span b'), $year = $($ym.get(0)), $month = $($ym.get(1));
            var index = $(this).prev('.calender').length;
            var currentYear = parseInt($year.text());
            var currentMonth = parseInt($month.text()) - 1;
            var currentDate = parseInt($target.text());
            var $dtc = _this.panel.find('.date-time-ctrl');
            if ($date.length) {
                var $dateSelects = $dtc.find('select.date');
                _this.data[index].year = currentYear;
                _this.data[index].month = currentMonth;
                _this.data[index].date = currentDate;
                if (_this.type == 2) {
                    $($dateSelects.get(index)).prev().prev().val(currentYear);
                    $($dateSelects.get(index)).prev().val(currentMonth + 1);
                    $($dateSelects.get(index)).val(currentDate).trigger('change');
                } else {
                    $date.parent().find('.current').removeClass('current');
                    $target.parent().addClass('current');
                    _this.changeInput();
                }
                !_this.type && _this.finish();
            }
            if ($target.hasClass('prev')) {//上一个月点击
                var prevMonth = currentMonth ? currentMonth - 1 : 11, prevYear = currentMonth ? currentYear : currentYear - 1;
                if (prevMonth == 0 && prevYear == 2013) $target.hide();
                $target.next().show();
                _this.switchCalender($(this), prevYear, prevMonth);
                //更新date-time-ctrl
                var index = _this.calender[0][0] == this?0:1;
                $($dtc.find('.month').get(index)).val(prevMonth+1).trigger('change');;
            }
            if ($target.hasClass('next')) {//下一个月点击
                var nextMonth = currentMonth < 11 ? currentMonth + 1 : 0, nextYear = currentMonth < 11 ? currentYear : currentYear + 1;
                if (nextMonth == 11 && nextYear == _this.today.getFullYear() + 1) $target.hide();
                $target.prev().show();
                _this.switchCalender($(this), nextYear, nextMonth);
              //更新date-time-ctrl
                var index = _this.calender[0][0] == this?0:1;
                $($dtc.find('.month').get(index)).val(nextMonth+1).trigger('change');;
            }
        }));
    },
    createDateTimeCtrl: function (hours, minutes) {
        var _this = this, $dtc = $('<div class="date-time-ctrl"><button class="prim">确定</button></div>');
        if (this.type == 1) {
            $dtc.prepend('<select class="hour"></select><span>时</span><select class="minute"></select><span>分</span>');
            for (var i = 0; i < 24; i++) {
                $dtc.find('.hour').append('<option value="' + i + '">' + toDoubleDigits(i) + '</option>');
            }
            for (var i = 0; i < 60; i++) {
                $dtc.find('.minute').append('<option value="' + i + '">' + toDoubleDigits(i) + '</option>');
            }
            $dtc.find('.hour').val(this.data[0].hours = hours).change(function () {
                _this.hourSelectChanged($(this));
            });
            $dtc.find('.minute').val(this.data[0].minutes = minutes).change(function () {
                _this.minuteSelectChanged($(this));
            });
        } else {
            $dtc.prepend('<select class="year"></select><select class="month"></select><select class="date"></select><span>~</span><select class="year"></select><select class="month"></select><select class="date"></select>');
            for (var i = this.today.getFullYear() + 10; i > 2012; i--) {
                $dtc.find('.year').append('<option value="' + i + '">' + i + '</option>');
            }
            for (var i = 1; i < 13; i++) {
                $dtc.find('.month').append('<option value="' + i + '">' + toDoubleDigits(i) + '</option>');
            }
            $($dtc.find('.year').get(0)).val(this.data[0].year).change(function () {
                _this.yearSelectChanged(0, $(this));
            }).trigger('change');
            $($dtc.find('.year').get(1)).val(this.data[1].year).change(function () {
                _this.yearSelectChanged(1, $(this));
            }).trigger('change');
            $($dtc.find('.month').get(0)).val(this.data[0].month + 1).change(function () {
                _this.monthSelectChanged(0, $(this));
            }).trigger('change');
            $($dtc.find('.month').get(1)).val(this.data[1].month + 1).change(function () {
                _this.monthSelectChanged(1, $(this));
            }).trigger('change');
            $($dtc.find('.date').get(0)).val(this.data[0].date).change(function () {
                _this.dateSelectChanged(0, $(this));
            }).trigger('change');
            $($dtc.find('.date').get(1)).val(this.data[1].date).change(function () {
                _this.dateSelectChanged(1, $(this));
            }).trigger('change');
        }
        $dtc.find('button').click(function () {
            _this.finish();
        });
        this.panel.append($dtc)
    },
    yearSelectChanged: function (index, $this) {
        var year = parseInt($this.val());
        this.data[index].year = year;
        $this.next().trigger('change');
    },
    monthSelectChanged: function (index, $this) {
        var $date = $this.next(), year = this.data[index].year, month = parseInt($this.val()) - 1;
        var prevDate = parseInt($date.val()), maxDate = this.getTotalDaysOfMonth(month, year), date = prevDate < maxDate ? prevDate : maxDate;
        this.data[index].month = month;
        this.switchCalender(this.calender[index], year, month);
        $date.html('');
        var l = this.getTotalDaysOfMonth(month, year);
        for (var i = 1; i <= l; i++) {
            $date.append('<option value="' + i + '">' + toDoubleDigits(i) + '</option>');
        }
        $date.val(date).trigger('change');
    },
    dateSelectChanged: function (index, $this) {
        var date = parseInt($this.val());
        this.data[index].date = date;
        this.calender[index].find('.dates .current').removeClass('current');
        $(this.calender[index].find('.dates .date a').get(date - 1)).parent().addClass('current');
        this.changeInput();
    },
    hourSelectChanged: function ($this) {
        var hours = parseInt($this.val());
        this.data[0].hours = hours;
        this.changeInput();
    },
    minuteSelectChanged: function ($this) {
        var minutes = parseInt($this.val());
        this.data[0].minutes = minutes;
        this.changeInput();
    },
    changeInput: function () {
        var $display = this.container.find('.display'), $input = $display.next(), data = this.data;
        this.time = [];
        if (this.type == 0) {
            $display.html(data[0].year + '-' + toDoubleDigits(data[0].month + 1) + '-' + toDoubleDigits(data[0].date));
            this.time.push((new Date(data[0].year, data[0].month, data[0].date)).getTime());
        }
        if (this.type == 1) {
            $display.html(data[0].year + '-' + toDoubleDigits(data[0].month + 1) + '-' + toDoubleDigits(data[0].date) + ' ' + toDoubleDigits(data[0].hours) + ':' + toDoubleDigits(data[0].minutes));
            this.time.push((new Date(data[0].year, data[0].month, data[0].date, data[0].hours, data[0].minutes)).getTime());
        }
        if (this.type == 2) {
            $display.html(data[0].year + '-' + toDoubleDigits(data[0].month + 1) + '-' + toDoubleDigits(data[0].date)).append('<b>至</b>');
            $display.append(data[1].year + '-' + toDoubleDigits(data[1].month + 1) + '-' + toDoubleDigits(data[1].date));
            this.time.push((new Date(data[0].year, data[0].month, data[0].date)).getTime());
            this.time.push((new Date(data[1].year, data[1].month, data[1].date, 23, 59, 59)).getTime());
            $input.next().val(this.time[1]);
        }
        $input.val(this.time[0]);
    },
    begin: function () {
        this.panel.show();
    },
    finish: function (irr_clk) {
        this.panel.hide();
        if (!irr_clk) {
            this.container.attr('not-irrelevant-click', 'true');
            this.container.trigger('dtp-changed');
        }
    },
    init: function (time, end_time) {
        var time = time, month = time.getMonth(), year = time.getFullYear(), date = time.getDate(), hours = time.getHours(), minutes = time.getMinutes();
        this.panel.html('').css('width', '300px');
        this.createCalender(year, month, date);
        if (this.type == 2) {
            var end_time = end_time, nextMonth = end_time.getMonth(), nextYear = end_time.getFullYear(), nextDate = end_time.getDate();
            this.panel.css('width', '600px');
            this.createCalender(nextYear, nextMonth, nextDate);
        }
        if (this.type) {
            this.createDateTimeCtrl(hours, minutes);
        }
        this.changeInput();
    },
    DateTimePicker: function (name, $container, type, time, end_time) {
        var _this = this, _type = $.inArray(type || '', this.supportedType), time = this.parse(time), end_time = this.parse(end_time);
        this.container = $container;
        this.panel = $('<div class="date-time-picker-panel"></div>');
        this.calender = [];
        this.data = [];
        this.type = _type == -1 ? 0 : _type;
        this.panel.css((this.container.offset().left + this.container.outerWidth()) < ($document.width() / 2) ? 'left' : 'right', '0px');
        this.container.append(this.panel).bind('relevant-click', function () {
            if ($(this).attr('not-irrelevant-click') == 'true') {
                $(this).removeAttr('not-irrelevant-click');
            } else {
                _this.begin();
            }
        }).bind('irrelevant-click', function () {
            _this.finish(true);
        });
        regRelevantClick(this.container);
        this.init(time, end_time);
        this.name = name || this.__instance_id__;
        this.__self__ = this.panel;
    }
}, 'UIComponent');
//Config('nav',[]);
/**权限**/
modules = [];

jurisdiction = '';
function UserRights(){
    new Request({
        url: '/csSystem/getPermissionList.do',
        data: {},
        async: false,
        success: function (response) {
            if (response.code == '200') {
                jurisdiction = response.data;
            } else {
                alert(response.message)
            }
        }
    });
    /**
     * 订单
     * **/
    var M_ORDER = {
        NAME: 'ORDER',
        TEXT: '订单',
        URL: '#',
        FEATURE_GROUPS: [{
            TEXT: '功能菜单组1',
            FEATURES: []
        }]
    };
    if (findInArr(jurisdiction, 'M_ORDER_LIST')){
      M_ORDER.FEATURE_GROUPS[0].FEATURES.push({
          NAME: 'ALL-ORDER-LIST',
          TEXT: '全部订单',
          URL: '/order/order_list.html'
      });
      M_ORDER.URL = '/order/order_list.html'
    }
    if (findInArr(jurisdiction, 'M_REFUND_ORDER')){
        M_ORDER.FEATURE_GROUPS[0].FEATURES.push({
            NAME: 'ALL-REFUND-LIST',
            TEXT: '退款订单管理',
            URL: '/order/refund_list.html'
        });
    }
    if (findInArr(jurisdiction, 'M_ORDER_IMPORT')){
        M_ORDER.FEATURE_GROUPS[0].FEATURES.push({
            NAME: 'ALL-ORDER_IMPORT',
            TEXT: '高考订单管理',
            URL: '/order/order_import.html'
        });
    }
    if (findInArr(jurisdiction, 'M_ORDER_QUERY')){
      M_ORDER.FEATURE_GROUPS[0].FEATURES.push({
          NAME: 'ORDER-QUERY',
          TEXT: '订单查询',
          URL: '/order/order_query.html'
      });
      if(M_ORDER.URL=="#") M_ORDER.URL = '/order/order_query.html'
    }

    /**订单导出当前权限**/
    if(!findInArr(jurisdiction, 'E_EXPORT_CURRENT')){
        $('#E_EXPORT_CURRENT').remove();
    }
    /**订单导全部前权限**/
    if(!findInArr(jurisdiction, 'E_EXPORT_ALL')){
        $('#E_EXPORT_ALL').remove();
    }
    /**订单导出选中权限**/
    if(!findInArr(jurisdiction, 'E_EXPORT_SELECTED')){
        $('#E_EXPORT_SELECTED').remove();
    }
    /**
     * 酒店
     * **/
    var M_HOTEL = {
        NAME: 'HOTEL',
        TEXT: '酒店',
        URL: '/hotel/hotel-management/hotel_management.html',
        FEATURE_GROUPS: [{
            TEXT: '功能菜单组',
            FEATURES: []
        }]
    };
    if (findInArr(jurisdiction, 'M_HOTEL_MANAGE')) M_HOTEL.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'HOTEL-MANAGEMENT',
        TEXT: '酒店管理',
        URL: '/hotel/hotel-management/hotel_management.html'
    });
    /**酒店管理导出权限**/
    if(!findInArr(jurisdiction, 'E_HOTEL_EXPORT_CURRENT')){
        $('#E_HOTEL_EXPORT_CURRENT').remove();
    }
    if(!findInArr(jurisdiction, 'E_HOTEL_EXPORT_ALL')){
        $('#E_HOTEL_EXPORT_ALL').remove();
    }
    if(!findInArr(jurisdiction, 'E_HOTEL_EXPORT_SELECTED')){
        $('#E_HOTEL_EXPORT_SELECTED').remove();
    }
    /**酒店详情首页推荐和上下架按钮权限**/
    if(!findInArr(jurisdiction, 'E_HOTEL_RECOMMEND')){
        $('#RecommendStatus').remove();
    }
    if(!findInArr(jurisdiction, 'E_HOTEL_ONOFF')){
        $('#IsOn').remove();
    }
    /**酒店详情导航权限**/
    if(!findInArr(jurisdiction, 'M_HOTEL_MANAGE_ROOM')){
        $('.page #SaleHouseType').remove();
    }
    if(!findInArr(jurisdiction, 'M_HOTEL_MANAGE_ORDER')){
        $('.page #Order').remove();
    }
    if(!findInArr(jurisdiction, 'M_HOTEL_MANAGE_HOTELINFO')){
        $('.page #HotelInfo').remove();
    }
    if(!findInArr(jurisdiction, 'M_HOTEL_MANAGE_SERVICE')){
        $('.page #ServiceFacilities').remove();
    }
    if(!findInArr(jurisdiction, 'M_HOTEL_MANAGE_HOTELPIC')){
        $('.page #HotelPicture').remove();
    }
    if(!findInArr(jurisdiction, 'M_HOTEL_MANAGE_CONTACTINFO')){
        $('.page #ContactInfo').remove();
    }
    if(!findInArr(jurisdiction, 'M_HOTEL_MANAGE_QUALIFICATIONINFO')){
        $('.page #QualifiInfo').remove();
    }
    if(!findInArr(jurisdiction, 'M_HOTEL_MANAGE_VENDOR')){
        $('.page #Supplier').remove();
    }
    /**
     * 初审酒店和终审酒店权限
     * **/
    var AUDIT_MANAGEMENT={
        NAME: 'AUDIT-MANAGEMENT',
        TEXT: '审核管理',
        URL: '/hotel/hotel-audit/hotel_audit_first.html'
    };
    if(!findInArr(jurisdiction, 'M_HOTEL_APPROVE_FIRST')&&!findInArr(jurisdiction, 'M_HOTEL_APPROVE_LAST')){
        $('#M_HOTEL_APPROVE_FIRST').remove();
        $('#M_HOTEL_APPROVE_LAST').remove();
        AUDIT_MANAGEMENT.URL='/hotel/hotel-audit/hotel_audit_record.html';
    }
    if(!findInArr(jurisdiction, 'M_HOTEL_APPROVE_FIRST')){
        $('#M_HOTEL_APPROVE_FIRST').remove();
        AUDIT_MANAGEMENT.URL='/hotel/hotel-audit/hotel_audit_last.html';
    }
    if(!findInArr(jurisdiction, 'M_HOTEL_APPROVE_LAST')){
        $('#M_HOTEL_APPROVE_LAST').remove();
    }
    if (findInArr(jurisdiction, 'M_HOTEL_APPROVE_MANAGE')) M_HOTEL.FEATURE_GROUPS[0].FEATURES.push(AUDIT_MANAGEMENT);
    if (findInArr(jurisdiction, 'M_HOTEL_ONLINE_MANAGE')) M_HOTEL.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'PREPAY-HOTEL-MANAGEMENT',
        TEXT: '预付酒店审核管理',
        URL: '/hotel/prepay-hotel-management/stay-audit-prepay-hotel-list/stay_audit_prepay_hotel_list.html'
    });
    if (findInArr(jurisdiction, 'M_HOTEL_RELATE')) M_HOTEL.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'HOTEL-RELATION',
        TEXT: '酒店关联',
        URL: '/hotel/hotel-relation/hotel_relation_list.html'
    });
    if (findInArr(jurisdiction, 'M_HOTEL_SIGN_MANAGE')) M_HOTEL.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'HOTEL-CONTRACT-MANAGEMENT',
        TEXT: '酒店签约管理',
        URL: '/hotel/hotel_contract_management/audit_status_query.html'
    });
    if (findInArr(jurisdiction, 'M_HOTEL_USER_MANAGE')) M_HOTEL.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'HOTEL-ACCOUNT-MANAGEMENT',
        TEXT: '酒店账户管理',
        URL: '/hotel/hotel_account_management/hotel_account_management_list.html'
    });
    if(M_HOTEL.FEATURE_GROUPS[0].FEATURES.length>0) M_HOTEL.URL = M_HOTEL.FEATURE_GROUPS[0].FEATURES[0].URL;
    /**
     * 用户
     * **/
    var M_APP_USER = {
        NAME: 'USER',
        TEXT: '用户',
        URL: '/user/user_list.html'
    };
    /**
     *促銷
     * **/
    var M_PROMOTION = {
        NAME: 'PROMO',
        TEXT: '促销',
        URL: '/promo/coupon/coupon-list/coupon_list.html',
        FEATURE_GROUPS: [{
            TEXT: '功能菜单组',
            FEATURES: []
        }]
    };
    if (findInArr(jurisdiction, 'M_PROMOTIO_ACTIVITY')) M_PROMOTION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'COUPON',
        TEXT: '优惠券',
        URL: '/promo/coupon/coupon-list/coupon_list.html'
    });
    if (findInArr(jurisdiction, 'M_PROMOTIO_BANNER')) M_PROMOTION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'HOME-ADS',
        TEXT: '首页广告',
        URL: '/promo/home-page-advertisement/advertisement_list.html'
    });
    if (findInArr(jurisdiction, 'M_PROMOTIO_DISCOVERY')) M_PROMOTION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'ACTIVITY-MANAGEMENT',
        TEXT: '发现列表',
        URL: '/promo/activity-message-management/activity/list.html'
    });
    if (findInArr(jurisdiction, 'M_PROMOTIO_STARTUP')) M_PROMOTION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'BOOT-PAGE-SETUP',
        TEXT: '启动页设置',
        URL: '/promo/boot-page-settings/boot_page_settings.html'
    });
    if(M_PROMOTION.FEATURE_GROUPS[0].FEATURES.length>0) M_PROMOTION.URL = M_PROMOTION.FEATURE_GROUPS[0].FEATURES[0].URL;
    /**
     * 数据
     * **/
    var M_DATA = {
        NAME: 'STATISTICS',
        TEXT: '数据',
        URL: '#',
        FEATURE_GROUPS: [{
            TEXT: '功能菜单组',
            FEATURES: []
        }]
    };
    if (findInArr(jurisdiction, 'M_DATA_SUMMARY')){
        M_DATA.FEATURE_GROUPS[0].FEATURES.push({
            NAME: 'ORDER-SUMMARY-STATISTICS',
            TEXT: '订单统计',
            URL: '/statistics/order-statistics/order_summary.html'
        });
        M_DATA.URL = '/statistics/order-statistics/order_summary.html'
    }
    if (findInArr(jurisdiction, 'M_DATA_REPORT')){
        M_DATA.FEATURE_GROUPS[0].FEATURES.push({
            NAME: 'ORDER-REPORTS-STATISTICS',
            TEXT: '订单数据',
            URL: '/statistics/order-statistics/order_reports.html'
        });
        if(M_DATA.URL=="#") M_DATA.URL = '/statistics/order-statistics/order_reports.html'

    }

    /**
     *财务
     * **/
    var M_FINANCIAL = {
        NAME: 'FINANCE',
        TEXT: '财务',
        URL: '/finance/advance-orders/order_list.html',
        FEATURE_GROUPS: [{
            TEXT: '功能菜单组',
            FEATURES: []
        }]
    };
    if (findInArr(jurisdiction, 'M_FINANCIA_ORDER')) M_FINANCIAL.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'ADVANCE-ORDERS',
        TEXT: '预付订单',
        URL: '/finance/advance-orders/order_list.html'
    });
    if (findInArr(jurisdiction, 'M_FINANCIA_SETTLEMENT')) M_FINANCIAL.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'SETTLEMENT-PAYMENT',
        TEXT: '结算打款',
        URL: '/finance/settlement-payment/prepaid_hotel.html'
    });
    if (findInArr(jurisdiction, 'M_FINANCIA_ACCOUNT')) M_FINANCIAL.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'HOTEL-ACCOUNT',
        TEXT: '酒店账户',
        URL: '/finance/hotel-account/hotel_account.html'
    });
    if (findInArr(jurisdiction, 'M_FINANCIA_VENDOR_SETTLEMENT')) M_FINANCIAL.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'SUPPLIER-SETTLEMENT',
        TEXT: '供应商结算打款',
        URL: '/finance/supplier-settlement/supplier-settlement/supplier_settlement.html'
    });
    if(M_FINANCIAL.FEATURE_GROUPS[0].FEATURES.length>0) M_FINANCIAL.URL = M_FINANCIAL.FEATURE_GROUPS[0].FEATURES[0].URL;
    /**
     * 运维
     * **/
    var M_OPERATION = {
        NAME: 'OPERATION',
        TEXT: '运维',
        URL: '/operation/home-recommended/home_recommended_list.html',
        FEATURE_GROUPS: [{
            TEXT: '功能菜单组',
            FEATURES: []
        }]
    };
    if (findInArr(jurisdiction, 'M_OPERATIO_RECOMMEND')) M_OPERATION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'HOME-RECOMMENDATION',
        TEXT: '首页推荐',
        URL: '/operation/home-recommended/home_recommended_list.html'
    });
    /*if (findInArr(jurisdiction, 'M_OPERATIO_SUGGESTION')) M_OPERATION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'FEEDBACK',
        TEXT: '意见反馈',
        URL: '/operation/feedback/feedback_list.html'
    });
    if (findInArr(jurisdiction, 'M_OPERATIO_REVIEW')) M_OPERATION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'COMMENT-MANAGEMENT',
        TEXT: '点评管理',
        URL: '/operation/comment-management/comment/comment_list.html'
    });*/
    if (findInArr(jurisdiction, 'M_OPERATIO_MESSAGE')) M_OPERATION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'MESSAGE-MANAGEMENT',
        TEXT: '消息管理',
        URL: '/operation/client-message-management/system/list.html'
    });
    if (findInArr(jurisdiction, 'M_OPERATIO_NAVIGATION')) M_OPERATION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'APP-BREAD-NAV',
        TEXT: 'APP面包导航设置',
        URL: '/operation/app-bread-nav/first_hurdle.html'
    });
    if (findInArr(jurisdiction, 'M_OPERATIO_PHONECODE')) M_OPERATION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'QUERY-VERIFICATION-CODE',
        TEXT: '手机验证码管理',
        URL: '/operation/query-verification-code/query_verification_code.html'
    });
    if (findInArr(jurisdiction, 'M_OPERATIO_CITY')) M_OPERATION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'CITY-MANAGEMENT',
        TEXT: '城市管理',
        URL: '/operation/city-management/city_list.html'
    });
    if (findInArr(jurisdiction, 'M_OPERATIO_REGION')) M_OPERATION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'DISTRICT-MANAGEMENT',
        TEXT: '区域管理',
        URL: '/operation/district-management/administrative-region/list.html'
    });
    if (findInArr(jurisdiction, 'M_OPERATIO_BRAND')) M_OPERATION.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'BRAND-MANAGEMENT',
        TEXT: '品牌管理',
        URL: '/operation/brand-management/brand_management_list.html'
    });
    if(M_OPERATION.FEATURE_GROUPS[0].FEATURES.length>0) M_OPERATION.URL = M_OPERATION.FEATURE_GROUPS[0].FEATURES[0].URL;
    /**
     * 管理
     * **/
    var M_MANAGE = {
        NAME: 'MANAGEMENT',
        TEXT: '管理',
        URL: '/management/hotel-operation-log/list.html',
        FEATURE_GROUPS: [{
            TEXT: '功能菜单组',
            FEATURES: []
        }]
    };
    if (findInArr(jurisdiction, 'M_MANAGE_HOTEL_LOG')) M_MANAGE.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'HOTEL-OPERATION-LOG',
        TEXT: '酒店操作日志',
        URL: '/management/hotel-operation-log/list.html'
    });
    if (findInArr(jurisdiction, 'M_MANAGE_CS_LOG')) M_MANAGE.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'CS-SYSTEM-OPERATION-LOG',
        TEXT: 'cs系统操作日志',
        URL: '/management/cs-system-operation-log/list.html'
    });
    if (findInArr(jurisdiction, 'M_MANAGE_USER_PERMISSION')) M_MANAGE.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'ACCOUNT-RIGHTS-MANAGEMENT',
        TEXT: '账号和权限管理',
        URL: '/management/account-rights-management/account-management/account_management.html'
    });
    if (findInArr(jurisdiction, 'M_MANAGE_USER_MANAGE')) M_MANAGE.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'STAFF-MANAGEMENT',
        TEXT: '员工管理',
        URL: '/management/staff-management/staff-list/staff_list.html'
    });
    M_MANAGE.FEATURE_GROUPS[0].FEATURES.push({
        NAME: 'STAFF-CACHE',
        TEXT: '缓存查询',
        URL: '/memcached.html'
    });
    if(M_MANAGE.FEATURE_GROUPS[0].FEATURES.length>0)M_MANAGE.URL = M_MANAGE.FEATURE_GROUPS[0].FEATURES[0].URL;

    if (findInArr(jurisdiction, 'M_ORDER')) modules.push(M_ORDER);
    if (findInArr(jurisdiction, 'M_HOTEL')) modules.push(M_HOTEL);
    if (findInArr(jurisdiction, 'M_APP_USER')) modules.push(M_APP_USER);
    if (findInArr(jurisdiction, 'M_PROMOTION')) modules.push(M_PROMOTION);
    if (findInArr(jurisdiction, 'M_DATA')) modules.push(M_DATA);
    if (findInArr(jurisdiction, 'M_FINANCIAL')) modules.push(M_FINANCIAL);
    if (findInArr(jurisdiction, 'M_OPERATION')) modules.push(M_OPERATION);
    if (findInArr(jurisdiction, 'M_MANAGE')) modules.push(M_MANAGE);
}
UserRights();
/**
 * Header类
 * 页面头部元件
 */
Class('Header', {
    header: $header,
    logo: $('<a href="#" class="logo"></a>'),
    nav: $('<nav class="module"></nav>'),
    account: $('<div class="account-ctrl"></div>'),
    user: $('<a class="user"></a>'),
    userFace: $('<img />'),
    userName: $('<span></span>'),
    userMenu: $('<ul class="menu"></ul>'),
    userMenuSlideSpeed: 200,
    generateNav: function () {
        /*var modules = Config('nav');*/
        this.nav.html('');
        for (var i = 0; i < modules.length; i++) {
            var module = modules[i], $a = $('<a href="' + module.URL + '">' + module.TEXT + '</a>');
            Config('module_name') && Config('module_name') == module.NAME && $a.addClass('current');
            this.nav.append($a);
        }
    },
    refreshAccount: function () {
        var _this = this;
        new Request({
            url: '/csSystem/getUserInfo.do',
            data: {},
            success: function (response) {
                var account = Cache('ACCOUNT'), umss = _this.userMenuSlideSpeed;//获取到的用户帐户信息应该保存到Cache，全局可以访问
                var $account = _this.account.html(''), $user = _this.user, $face = _this.userFace, $name = _this.userName, $menu = _this.userMenu;
                if (response.code == '200') {
                    account.ID = response.data.userId;
                    account.realName = response.data.realName;
                    account.NAME = response.data.userName;
                    account.FACE_URL = '/images/user-default.png';
                    $user.attr('href', '#' + account.ID);
                    $name.text(account.NAME);
                    $face.attr('src', account.FACE_URL);
                    $menu.append('<li><a href="/account/change_password.html">修改密码</a></li>');
                    $menu.append('<li><a href="#logout">退出登录</a></li>');
                    $account.append($user.append($face).append($name)).append($menu).hover(function () {
                        $(this).addClass('expanded').stop().clearQueue().animate({'height': 60 + $menu.height() + 'px'}, umss);
                    }, function () {
                        $(this).stop().clearQueue().animate({'height': '60px'}, umss, function () {
                            $(this).removeClass('expanded');
                        });
                    });
                } else {
                    alert(response.message);
                }
            }
        });
    },
    Header: function () {
        this.generateNav();
        this.header.html('').append(this.logo).append(this.nav).append(this.account);
        this.refreshAccount();
        this.name = 'Header';
        this.__self__ = this.header;
    }
}, 'UIComponent');
/**
 * FeatureNav类
 * 页面的左侧二级导航元件
 */
Class('FeatureNav', {
    aside: $aside,
    groupSlideSpeed: 200,
    generateNav: function () {
        var /*modules = Config('nav'),*/ module = {}, featureGroups = [], grouping = false, gss = this.groupSlideSpeed;
        this.aside.append('<span class="aside-active"></span>');
        for (var i = 0; i < modules.length; i++) {
            if (Config('module_name') == modules[i].NAME) {
                module = modules[i];
                featureGroups = module.FEATURE_GROUPS;
                grouping = featureGroups.length != 1;
            }
        }
        for (var i = 0; i < featureGroups.length; i++) {
            var group = featureGroups[i], features = group.FEATURES, $nav = $('<nav class="feature"></nav>');
            grouping && $nav.css('height', '40px').append($('<a href="#nogo" class="handler">' + group.TEXT + '</a>'));
            for (var j = 0; j < features.length; j++) {
                var feature = features[j], $a = $('<a href="' + feature.URL + '">' + feature.TEXT + '</a>');
                if (Config('feature_name') && Config('feature_name') == feature.NAME) {
                    $a.addClass('current');
                    grouping && $nav.addClass('current').css('height', features.length * 40 + 'px').find('.handler').addClass('current');
                }
                $nav.append($a);
            }
            this.aside.append($nav);
        }
        grouping && this.aside.find('.handler').click(function () {
            if ($(this).hasClass('current')) {
                $(this).removeClass('current').parent().stop().clearQueue().animate({'height': '40px'}, gss);
            } else {
                $(this).addClass('current').parent().stop().clearQueue().animate({'height': $(this).parent().children().length * 40 + 'px'}, gss);
            }
        });
    },
    FeatureNav: function () {
        this.generateNav();
        var isTrue = true;
        this.aside.find('.aside-active').click(function () {
            $inside.css('min-width', $main.width() - 80 + 'px');
            $aside.animate({'width': isTrue ? '10px' : '200px'}, 200);
            $main.animate({'margin-left': isTrue ? '10px' : '200px', 'min-width': isTrue ? '1300px' : '1100px'}, 200);
            setTimeout(function () {
                $inside.css('min-width', $main.width() - 80 + 'px');
            }, 200);
            isTrue = !isTrue;
        });
        this.name = 'FeatureNav';
        this.__self__ = this.aside;
    }
}, 'UIComponent');
/***********************************************************************************************************************
 *
 * 通用页面元件代码区域
 * TODO:
 * 在这里进行通用页面元件定义
 *
 **********************************************************************************************************************/
Action('page-num', function () {
    var pageCtrl = $$$($(this).closest('.page-ctrl').attr('instance-id'));
    pageCtrl.page = parseInt($(this).attr('page-num'));
    pageCtrl.pageChangedAction.call(pageCtrl);
});
/**退出登录**/
Action('logout', function () {
    new Request({
        url: '/system/logout.do',
        data: {},
        success: function (response) {
            if (response.code == '200') {
                location.href = '/login.html';
                alert('退出成功');
            } else {
                alert(response.message);
            }
        }
    });
});
/***********************************************************************************************************************
 *
 * 配置区域
 * TODO:
 * 在这里进行页面配置定义
 *
 **********************************************************************************************************************/
Config('name', $body.attr('id'));
Config('no_aside', false);
Config('module_name', null);
Config('feature_name', null);
Config('file_upload_service_url', '/system/fileUpload.do');
Config('file_upload_service_url_image', '/system/uploadMsgImg.do');
/*Config('nav', [{
    NAME: 'ORDER',
    TEXT: '订单',
    URL: '/order/order_list.html',
    FEATURE_GROUPS: [{
        TEXT: '功能菜单组1',
        FEATURES: [{
            NAME: 'ALL-ORDER-LIST',
            TEXT: '全部订单',
            URL: '/order/order_list.html'
        }]
    }]
}, {
    NAME: 'HOTEL',
    TEXT: '酒店',
    URL: '/hotel/hotel-management/hotel_management.html',
    FEATURE_GROUPS: [{
        TEXT: '功能菜单组',
        FEATURES: [{
            NAME: 'HOTEL-MANAGEMENT',
            TEXT: '酒店管理',
            URL: '/hotel/hotel-management/hotel_management.html'
        }, {
            NAME: 'AUDIT-MANAGEMENT',
            TEXT: '审核管理',
            URL: '/hotel/hotel-audit/hotel_audit_first.html'
        }, {
            NAME: 'PREPAY-HOTEL-MANAGEMENT',
            TEXT: '预付酒店审核管理',
            URL: '/hotel/prepay-hotel-management/stay-audit-prepay-hotel-list/stay_audit_prepay_hotel_list.html'
        }, /!*{
         NAME: 'SUPPLIER-MANAGEMENT',
         TEXT: '供应商管理',
         URL: '/hotel/supplier-management/supplier_management_list.html'
         },*!/ {
            NAME: 'HOTEL-RELATION',
            TEXT: '酒店关联',
            URL: '/hotel/hotel-relation/hotel_relation_list.html'
        }, {
            NAME: 'HOTEL-CONTRACT-MANAGEMENT',
            TEXT: '酒店签约管理',
            URL: '/hotel/hotel_contract_management/audit_status_query.html'
        }, {
            NAME: 'HOTEL-ACCOUNT-MANAGEMENT',
            TEXT: '酒店账户管理',
            URL: '/hotel/hotel_account_management/hotel_account_management_list.html'
        }]
    }]
}, {
    NAME: 'USER',
    TEXT: '用户',
    URL: '/user/user_list.html',
    FEATURE_GROUPS: [{
        TEXT: '功能菜单组',
        FEATURES: [{
            NAME: 'FEATURE1',
            TEXT: '功能菜单项条目1',
            URL: '#feature1'
        }, {
            NAME: 'FEATURE2',
            TEXT: '功能菜单项条目2',
            URL: '#feature2'
        }, {
            NAME: 'FEATURE3',
            TEXT: '功能菜单项条目3',
            URL: '#feature3'
        }, {
            NAME: 'FEATURE4',
            TEXT: '功能菜单项条目4',
            URL: '#feature4'
        }, {
            NAME: 'FEATURE5',
            TEXT: '功能菜单项条目5',
            URL: '#feature5'
        }]
    }]
}, {
    NAME: 'PROMO',
    TEXT: '促销',
    URL: '/promo/coupon/coupon-list/coupon_list.html',
    FEATURE_GROUPS: [{
        TEXT: '功能菜单组',
        FEATURES: [{
            NAME: 'COUPON',
            TEXT: '优惠券',
            URL: '/promo/coupon/coupon-list/coupon_list.html'
        }, {
            NAME: 'HOME-ADS',
            TEXT: '首页广告',
            URL: '/promo/home-page-advertisement/advertisement_list.html'
        }, {
            NAME: 'ACTIVITY-MANAGEMENT',
            TEXT: '发现列表',
            URL: '/promo/activity-message-management/activity/list.html'
        }, {
            NAME: 'BOOT-PAGE-SETUP',
            TEXT: '启动页设置',
            URL: '/promo/boot-page-settings/boot_page_settings.html'
        }]
    }]
}, /!*{
 NAME: 'STATISTICS',
 TEXT: '数据',
 URL: '/statistics/user-statistics/time_trend.html',
 FEATURE_GROUPS: [{
 TEXT: '功能菜单组',
 FEATURES: [{
 NAME: 'USER-STATISTICS',
 TEXT: '用户数据',
 URL: '/statistics/user-statistics/time_trend.html'
 }, {
 NAME: 'ORDER-STATISTICS',
 TEXT: '订单数据',
 URL: '/statistics/order-statistics/time_trend.html'
 }, {
 NAME: 'HOTEL-STATISTICS',
 TEXT: '酒店数据',
 URL: '/statistics/hotel-statistics/time_trend.html'
 }]
 }]
 },*!/ {
    NAME: 'FINANCE',
    TEXT: '财务',
    URL: '/finance/advance-orders/order_list.html',
    FEATURE_GROUPS: [{
        TEXT: '功能菜单组',
        FEATURES: [{
            NAME: 'ADVANCE-ORDERS',
            TEXT: '预付订单',
            URL: '/finance/advance-orders/order_list.html'
        }, {
            NAME: 'SETTLEMENT-PAYMENT',
            TEXT: '结算打款',
            URL: '/finance/settlement-payment/prepaid_hotel.html'
        }, {
            NAME: 'HOTEL-ACCOUNT',
            TEXT: '酒店账户',
            URL: '/finance/hotel-account/hotel_account.html'
        }, {
            NAME: 'SUPPLIER-SETTLEMENT',
            TEXT: '供应商结算打款',
            URL: '/finance/supplier-settlement/supplier-settlement/supplier_settlement.html'
        }]
    }]
}, {
    NAME: 'OPERATION',
    TEXT: '运维',
    URL: '/operation/home-recommended/home_recommended_list.html',
    FEATURE_GROUPS: [{
        TEXT: '功能菜单组',
        FEATURES: [{
            NAME: 'HOME-RECOMMENDATION',
            TEXT: '首页推荐',
            URL: '/operation/home-recommended/home_recommended_list.html'
        }, {
            NAME: 'FEEDBACK',
            TEXT: '意见反馈',
            URL: '/operation/feedback/feedback_list.html'
        }, {
            NAME: 'COMMENT-MANAGEMENT',
            TEXT: '点评管理',
            URL: '/operation/comment-management/comment/comment_list.html'
        }, {
            NAME: 'MESSAGE-MANAGEMENT',
            TEXT: '消息管理',
            URL: '/operation/client-message-management/system/list.html'
        }, {
            NAME: 'APP-BREAD-NAV',
            TEXT: 'APP面包导航设置',
            URL: '/operation/app-bread-nav/first_hurdle.html'
        }, {
            NAME: 'QUERY-VERIFICATION-CODE',
            TEXT: '查询手机验证码',
            URL: '/operation/query-verification-code/query_verification_code.html'
        }, {
            NAME: 'CITY-MANAGEMENT',
            TEXT: '城市管理',
            URL: '/operation/city-management/city_list.html'
        }, {
            NAME: 'DISTRICT-MANAGEMENT',
            TEXT: '区域管理',
            URL: '/operation/district-management/administrative-region/list.html'
        }, {
            NAME: 'BRAND-MANAGEMENT',
            TEXT: '品牌管理',
            URL: '/operation/brand-management/brand_management_list.html'
        }]
    }]
}, {
    NAME: 'MANAGEMENT',
    TEXT: '管理',
    URL: '/management/hotel-operation-log/list.html',
    FEATURE_GROUPS: [{
        TEXT: '功能菜单组',
        FEATURES: [{
            NAME: 'HOTEL-OPERATION-LOG',
            TEXT: '酒店操作日志',
            URL: '/management/hotel-operation-log/list.html'
        }, {
            NAME: 'CS-SYSTEM-OPERATION-LOG',
            TEXT: 'cs系统操作日志',
            URL: '/management/cs-system-operation-log/list.html'
        }, {
            NAME: 'ACCOUNT-RIGHTS-MANAGEMENT',
            TEXT: '账号和权限管理',
            URL: '/management/account-rights-management/account-management/account_management.html'
        }, {
            NAME: 'STAFF-MANAGEMENT',
            TEXT: '员工管理',
            URL: '/management/staff-management/staff-list/staff_list.html'
        }]
    }]
}]);*/

/***********************************************************************************************************************
 *
 * 全局事件支持
 * TODO:
 * 在这里添加页面功能代码
 *
 **********************************************************************************************************************/
(function ($GLOBAL) {
    /**
     * 页面大小变化时的处理
     */
    $window.resize(function () {
        $aside.css('height', $window.height() - $header.height() - $footer.height() - 60 + 'px');
        $main.css('height', $window.height() - $header.height() - $footer.height() + 'px');
        $inside.css('min-width', $main.width() - 80 + 'px');
        $('.pagemask').css({
            'height': $document.height() + 'px',
            'width': $document.width() + 'px'
        });
    });
    /**
     * 支持a、button元素的点击事件
     */
    $document.click(function (event) {
        var $target = $(event.target), $parent = $target.closest('a'), act = null;
        if ($target.attr('href') && $target.attr('href').charAt(0) == '#') act = $target.attr('href').slice(1);
        else if ($target.attr('action')) act = $target.attr('action');
        else if ($parent.length && $parent.attr('href') && $parent.attr('href').charAt(0) == '#') act = $parent.attr('href').slice(1);
        act && Cache('ACTION')[act] && Cache('ACTION')[act].call(event.target);
    });
    /**
     * 支持页面加载后根据地址#号后面内容执行对应操作
     */
    $document.ready(function () {
        var act = location.hash.slice(1);
        Cache('ACTION').__hash_actions__[act] && Cache('ACTION').__hash_actions__[act].call($document);
    });
    /**
     * 支持页面GET方式传递的参数
     */
    $document.ready(function () {
        if (location.search.length) {
            var args = location.search.slice(1).split('&');
            for (var i = 0; i < args.length; i++) {
                var arg = args[i].split('=');
                Cache('URL_ARGUMENTS')[arg[0]] = arg[1];
            }
        }
    });
    /**
     * 支持页面无关点击事件的功能
     */
    $document.click(function (event) {
        var $intercepter = $(event.target).closest('[relevant-click-intercepter]');
        for (var i = 0; i < Cache('RELEVANT_CLICK_COMPONENT').length; i++) {
            Cache('RELEVANT_CLICK_COMPONENT')[i].attr('relevant-click-intercepter') != $intercepter.attr('relevant-click-intercepter') && Cache('RELEVANT_CLICK_COMPONENT')[i].trigger('irrelevant-click');
        }
        $intercepter.length && $intercepter.trigger('relevant-click');
    });
    /**
     * 支持LinkageGroup相关html标签的属性和功能
     */
    $document.change(function (event) {
        var $target = $(event.target), gid = $target.attr('link-handler') || null, val = $target.val();
        if (gid) {
            $('[link-group=' + gid + ']').each(function () {
                var $this = $(this), item = $this.attr('link-item');
                if (item) {
                    if (item == val) {
                        $this.hasClass('hide') && $this.removeClass('hide');
                    } else {
                        !$this.hasClass('hide') && $this.addClass('hide');
                    }
                }
            });
        }
    });
    /**
     * 支持Ajax文件上传功能
     */
    /*$document.click(function (event) {
     var $target = $(event.target);
     if ($target.hasClass('file-uploader-button')) {
     var $component = $target.closest('.file-uploader'), name = $component.attr('name');
     var url = $component.attr('url') ? $component.attr('url') : ($component.attr('file-type') ? ($component.attr('file-type') == 'image' ? Config('file_upload_service_url_image') : Config('file_upload_service_url')) : Config('file_upload_service_url'));
     var $form = $('<form method="post" enctype="multipart/form-data" action="' + url + '" name="FormFileUploader_' + name + '" target="IframeFileUploader_' + name + '"></form>');
     var $name = $('<input name="uploaderName" type="text" />').val(name);
     var $file = $('<input name="fileName" type="file" />');
     var $iframe = $('<iframe name="IframeFileUploader_' + name + '"></iframe>');
     var $tool = $('<div class="file-uploader-tool hide"></div>').append($form.append($name).append($file)).append($iframe);
     var $old = $component.find('.file-uploader-tool');
     Cache('FILE_UPLOADER')[name] = {
     component: $component,
     success: function (name, url) {
     var $component = Cache('FILE_UPLOADER')[name].component, $button = $component.find('.file-uploader-button');
     prepareFileUploader($component, url);
     $component.find('.file-uploader-tool').remove();
     $button.removeClass('uploading').text($button.attr('text')).removeAttr('text').removeAttr('disabled');
     Action($component.attr('success')).call($component, url);
     },
     failed: function (name, code, message) {
     var $component = Cache('FILE_UPLOADER')[name].component, $fileName = $component.find('.file-name'), $button = $component.find('.file-uploader-button');
     $fileName.attr('text', $fileName.text()).attr('title', message).text(message).addClass('error').addClass('hint');
     $component.find('.file-url').val('');
     $component.find('.file-uploader-tool').remove();
     $button.removeClass('uploading').text($button.attr('text')).removeAttr('text').removeAttr('disabled');
     Action($component.attr('failed')).call($component, code, message);
     }
     };
     $old.length ? $old.replaceWith($tool) : $component.append($tool);
     $file.change(function () {
     $(this).closest('form').submit();
     $target.addClass('uploading').attr('disabled', 'disabled').attr('text', $target.text()).text('');
     }).trigger('click');
     }
     });*/
})(this);
/***********************************************************************************************************************
 *
 * 通用页面代码区域
 * TODO:
 * 在这里写通用页面代码
 * 注意：这些代码会在最后运行，而不是最先
 *
 **********************************************************************************************************************/
$(function () {
    new Header();
    Config('no_aside', !$aside.length) ? $main.addClass('no-aside') : new FeatureNav();
    $window.trigger('resize');
    $('.page-loading').fadeOut(1000, function () {
        $(this).remove();
    });
});
var path = 'http://dfbimg.dfb365.com/';
/**三级级城市联动*/
function addressInit(provinceList, _cmbProvince, _cmbCity, _cmbArea, defaultProvince, defaultCity, defaultArea) {
    var cmbProvince = document.getElementById(_cmbProvince);
    var cmbCity = document.getElementById(_cmbCity);
    var cmbArea = document.getElementById(_cmbArea);

    function cmbSelect(cmb, str) {
        for (var i = 0; i < cmb.options.length; i++) {
            if (cmb.options[i].value == str) {
                cmb.selectedIndex = i;
                return;
            }
        }
    }

    function cmbAddOption(cmb, str, str2, obj) {
        var option = document.createElement("OPTION");
        cmb.options.add(option);
        option.innerHTML = str;
        option.value = str2;
        option.obj = obj;
    }

    function changeCity() {
        cmbArea.options.length = 0;
        if (cmbCity.selectedIndex == -1)return;
        var item = cmbCity.options[cmbCity.selectedIndex].obj;
        for (var i = 0; i < item.regions.length; i++) {
            cmbAddOption(cmbArea, item.regions[i].regionName, item.regions[i].regionCode, null);
        }
        cmbSelect(cmbArea, defaultArea);
    }

    function changeProvince() {
        cmbCity.options.length = 0;
        cmbCity.onchange = null;
        if (cmbProvince.selectedIndex == -1)return;
        var item = cmbProvince.options[cmbProvince.selectedIndex].obj;
        for (var i = 0; i < item.citys.length; i++) {
            cmbAddOption(cmbCity, item.citys[i].cityName, item.citys[i].cityCode, item.citys[i]);
        }
        cmbSelect(cmbCity, defaultCity);
        changeCity();
        cmbCity.onchange = changeCity;
    }

    for (var i = 0; i < provinceList.length; i++) {
        cmbAddOption(cmbProvince, provinceList[i].name, provinceList[i].provinceCode, provinceList[i]);
    }
    cmbSelect(cmbProvince, defaultProvince);
    changeProvince();
    cmbProvince.onchange = changeProvince;
}

/**二级城市联动*/
function addressInit2(provinceList, _cmbProvince, _cmbCity, /*_cmbArea*/defaultProvince, defaultCity /*defaultArea*/) {
    var cmbProvince = document.getElementById(_cmbProvince);
    var cmbCity = document.getElementById(_cmbCity);
    /*var cmbArea = document.getElementById(_cmbArea);*/

    function cmbSelect(cmb, str) {
        for (var i = 0; i < cmb.options.length; i++) {
            if (cmb.options[i].value == str) {
                cmb.selectedIndex = i;
                return;
            }
        }
    }

    function cmbAddOption(cmb, str, str2, obj) {
        var option = document.createElement("OPTION");
        cmb.options.add(option);
        option.innerHTML = str;
        option.value = str2;
        option.obj = obj;
    }

    /*function changeCity() {
     /!*cmbArea.options.length = 0;*!/
     if (cmbCity.selectedIndex == -1)return;
     var item = cmbCity.options[cmbCity.selectedIndex].obj;
     for (var i = 0; i < item.regions.length; i++) {
     cmbAddOption(cmbArea, item.regions[i].regionName, item.regions[i].regionCode, null);
     }
     cmbSelect(cmbArea, defaultArea);
     }*/

    function changeProvince() {
        cmbCity.options.length = 0;
        cmbCity.onchange = null;
        if (cmbProvince.selectedIndex == -1)return;
        var item = cmbProvince.options[cmbProvince.selectedIndex].obj;
        for (var i = 0; i < item.citys.length; i++) {
            cmbAddOption(cmbCity, item.citys[i].cityName, item.citys[i].cityCode, item.citys[i]);
        }
        cmbSelect(cmbCity, defaultCity);
        //changeCity();
        //cmbCity.onchange = changeCity;
    }

    for (var i = 0; i < provinceList.length; i++) {
        cmbAddOption(cmbProvince, provinceList[i].name, provinceList[i].provinceCode, provinceList[i]);
    }
    cmbSelect(cmbProvince, defaultProvince);
    changeProvince();
    cmbProvince.onchange = changeProvince;
}
/**联动全选**/
function findInArr(arr, iNum) {
    if (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == iNum) {
                return true;
            }
        }
    }
    return false;
}
function findInArrJson(arr, iNum) {
    if (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].permissionId == iNum) {
                return true;
            }
        }
    }
    return false;
}

/**部门下拉控件***/
function Department(dev) {
    var firstMenu = [];
    for (var i = 0; i < dev.length; i++) {
        if (dev[i].pid == 0) {
            firstMenu.push(dev[i]);
        }
    }
    for (var i = 0; i < firstMenu.length; i++) {
        $('.menu1').append('<li level="' + firstMenu[i].pid + '"><span menuID="' + firstMenu[i].deptId + '" deptCode="' + firstMenu[i].deptCode + '">' + firstMenu[i].deptName + '</span></li>')
    }
    $('#Select li').delegate('span', 'mouseover', function () {
        var _this = this;
        $(_this).siblings('ul').remove();
        var menuID = $(_this).attr('menuID');
        var item = [];
        for (var i = 0; i < dev.length; i++) {
            if (dev[i].pid == menuID) {
                item.push(dev[i]);
            }
        }
        var list = '';
        for (var i = 0; i < item.length; i++) {
            list += '<li level="' + item[i].pid + '"><span menuID="' + item[i].deptId + '" deptCode="' + item[i].deptCode + '">' + item[i].deptName + '</span></li>';
        }
        if (list) {
            $(_this).after('<ul>' + list + '</ul>');
        }
        $(_this).closest('li').siblings('li').children('ul').hide();
        $(_this).siblings('ul').show();
    });
    $('#Select li').mouseleave(function () {
        $(this).children('ul').hide();
    });
}

/**
 * 求和
 * **/
function sum(arr){
    var result=0;
    for(var i=0;i<arr.length;i++){
        result+=arr[i];
    }
    return result;
}
