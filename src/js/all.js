/**
 * Created by dongsj on 2016/10/6.
 */
function alert(t) {
  return false;
}
/**
 * Created by lixu on 16/9/29.
 */
Array.prototype.remove = function (dx) {
  if (isNaN(dx) || dx > this.length) {
    return false;
  }
  for (var i = 0, n = 0; i < this.length; i++) {
    if (this[i] != this[dx]) {
      this[n++] = this[i];
    }
  }
  this.length -= 1;
};
/**
 * Created by dongsj on 16/7/15.
 * 日期相关扩展方法
 // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
//日期转换方法
Date.prototype.format = function (format) {
  var o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S': this.getMilliseconds()
    };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return format;
};
/**
 * Created by dongsj on 2016/10/11.
 */
function resizeTextarea(a, row) {
  var agt = navigator.userAgent.toLowerCase();
  var is_op = agt.indexOf('opera') != -1;
  var is_ie = agt.indexOf('msie') != -1 && document.all && !is_op;
  if (!a) {
    return;
  }
  if (!row)
    row = 1;
  var b = a.value.split('\n');
  var c = is_ie ? 1 : 0;
  c += b.length;
  var d = a.cols;
  if (d <= 20) {
    d = 40;
  }
  for (var e = 0; e < b.length; e++) {
    if (b[e].length >= d) {
      c += Math.ceil(b[e].length / d);
    }
  }
  c = Math.max(c, row) + 1;
  console.log(c);
  if (c != a.rows) {
    a.rows = c - 1;
  }
}
/**
 * Created by lixu on 16/10/12.
 */
//表单触发
$('.triggerInputWarp').on('click', '.triggerInput', function () {
  console.log('triggerInput');
  $(this).find('input').focus();
  console.log('$(this).find(nput)');
  console.log($(this).find('input'));
});
/**
 * Created by dongsj on 16/7/15.
 * angular APP
 */
var appStoreName = '\u6d4b\u8bd5';
var app = angular.module('YHZS', ['ui.router']);
var myChatInfo = undefined;
if (localStorage['getMyChatInfo']) {
  myChatInfo = JSON.parse(localStorage['getMyChatInfo']).date;
}
var imChatType = undefined;
mui.init({ keyEventBind: { backbutton: true } });
/**
 * Created by yihuan on 2016/11/15.
 */
app.filter('andFilter', [
  '$$log',
  function ($$log) {
    return function (array, input) {
      if (!input) {
        return array;
      }
      // paramsName = paramsName ? ('\"' + paramsName + '\"' + ':\"') : '';
      // console.log(paramsName);
      $$log.log(array);
      $$log.log(input);
      var inputArray = input.split(' ');
      var resultArray = [];
      for (var i = 0; i < array.length; i++) {
        isMatching(array[i]);
      }
      function isMatching(data) {
        for (var j = 0; j < inputArray.length; j++) {
          if (JSON.stringify(data).indexOf(inputArray[j]) < 0) {
            return 0;
          }  // if (paramsName != '' && JSON.stringify(data).split(paramsName)[1].split('"')[0].indexOf(inputArray[j]) < 0) {
             //
             //     console.log('return');
             //     console.log(JSON.stringify(data));
             //     console.log(inputArray[j]);
             //     console.log('--');
             //     return 0;
             // } else if (paramsName == '' && JSON.stringify(data).indexOf(inputArray[j]) < 0) {
             //     return 0;
             //     // if (JSON.stringify(data).indexOf(paramsName+inputArray[j])<0) {
             //     //     console.log('return');
             //     //     console.log(JSON.stringify(data));
             //     //     console.log(inputArray[j]);
             //     //     console.log('--');
             //     //     return 0;
             // }
        }
        resultArray.push(data);
      }
      $$log.log(resultArray);
      return resultArray;
    };
  }
]);
/**
 * Created by dongsj on 16/7/15.
 * 颜色转换
 */
app.factory('$$color', [
  '$$log',
  function ($$log) {
    return {
      transform: function (colorStr) {
        var color = colorStr;
        switch (colorStr) {
        case 'bkColor1':
        case 'color1':
        case undefined:
        case '':
          color = 'orange';
          break;
        case 'bkColor2':
        case 'color2':
          color = 'blue';
          break;
        case 'bkColor3':
        case 'color3':
          color = 'purple';
          break;
        case 'bkColor4':
        case 'color4':
          color = 'pink';
          break;
        case 'bkColor5':
        case 'color5':
          color = 'orange';
          break;
        case 'bkColor6':
        case 'color6':
          color = 'red';
          break;
        case 'bkColor7':
        case 'color7':
        case 'bkColor8':
        case 'color8':
          color = 'yellow';
          break;
        default:  // color = 'orange';
        }
        return color;
      },
      getColor: function () {
        var colorList = [
            {
              className: 'pink',
              nickName: '\u7c89\u8272'
            },
            {
              className: 'green',
              nickName: '\u7eff\u8272'
            },
            {
              className: 'lightGreen',
              nickName: '\u6d45\u7eff\u8272'
            },
            {
              className: 'darkGreen',
              nickName: '\u6df1\u7eff\u8272'
            },
            {
              className: 'orange',
              nickName: '\u6a59\u8272'
            },
            {
              className: 'water',
              nickName: '\u6c34\u8272'
            },
            {
              className: 'yellow',
              nickName: '\u9ec4\u8272'
            },
            {
              className: 'lightGray',
              nickName: '\u6d45\u7070\u8272'
            },
            {
              className: 'lightBlue',
              nickName: '\u6d45\u84dd\u8272'
            },
            {
              className: 'blue',
              nickName: '\u84dd\u8272'
            },
            {
              className: 'red',
              nickName: '\u7ea2\u8272'
            },
            {
              classNam: 'purple',
              nickName: '\u7d2b\u8272'
            }
          ];
        return colorList;
      }
    };
  }
]);
/**
 * Created by dongsj on 16/7/15.
 * 开发环境变量
 *
 ************************************************
 *
 * $$env.setEnvirement
 * 设置开发环境变量
 *
 * $$env.getEnvirement
 * 获取开发环境变量
 *
 */
app.factory('$$env', function () {
  var _envirementIndex = 0;
  return {
    setEnvirement: function (envirement) {
      switch (envirement) {
      case 'app':
        _envirementIndex = 101;
        break;
      case 'pro':
        _envirementIndex = 2;
        break;
      case 'dev':
        _envirementIndex = 1;
        break;
      case 'debug':
        _envirementIndex = 3;
        break;
      }  // $$log.debug('$$env.setEnvirement'+envirement);
    },
    getEnvirement: function () {
      return _envirementIndex;
    }
  };
});
/**
 * Created by dongsj on 16/10/10.
 * get hplus ClientInfo
 */
app.factory('$$getClientInfo', [
  '$$env',
  '$$toast',
  '$$log',
  function ($$env, $$toast, $$log) {
    var emptyDeviceInfo = {
        appod: 'test',
        appkey: 'test',
        token: 'test',
        clientid: 'test'
      };
    // $$log.debug('$$env.getEnvirement()'+$$env.getEnvirement());
    localStorage.getEnvirement = $$env.getEnvirement();
    if ($$env.getEnvirement() == 0) {
      return emptyDeviceInfo;
    } else {
      try {
        // $$toast.show(JSON.stringify(plus.push.getClientInfo()));
        $$log.debug('$$getClientInfo');
        $$log.info(JSON.stringify(plus.push.getClientInfo()));
        return plus.push.getClientInfo();
      } catch (e) {
        // $$toast.show('无法获取设备信息');
        return emptyDeviceInfo;
      }
    }
  }
]);
/**
 * Created by dongsj on 16/7/15.
 * 获取userAgent
 */
app.factory('$$getUserAgent', function () {
  return {
    versions: function () {
      var u = navigator.userAgent;
      this.u = u;
      var app = navigator.appVersion;
      return {
        trident: u.indexOf('Trident') > -1,
        presto: u.indexOf('Presto') > -1,
        webKit: u.indexOf('AppleWebKit') > -1,
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('Android') > -1 || u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1 || u.match(/MicroMessenger/i) == 'micromessenger',
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
        iPad: u.indexOf('iPad') > -1,
        webApp: u.indexOf('Safari') == -1,
        weixin: u.indexOf('micromessenger') > -1 || u.indexOf('MicroMessenger') > -1,
        all: u
      };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  };
});
/**
 * Created by dongsj on 16/7/15.
 * iconfont转换
 */
app.factory('$$iconfont', [
  '$$env',
  function ($$env) {
    return {
      init: function (ele) {
        if ($$env.getEnvirement() > 0) {
          ele = ele.replace('&#x', '');
          ele = ele.replace(';', '');
          ele = String.fromCharCode(parseInt(ele, 16));
        }
        return ele;
      }
    };
  }
]);
/**
 * Created by dongsj on 16/7/15.
 * 重算跟节点字号
 *
 * ********************************
 *
 * $$initRem.init
 * 返回初始化方法
 *
 * $$initRem.getSize
 * 返回rem对应px字号
 *
 */
app.factory('$$initRem', [
  '$$log',
  function ($$log) {
    return {
      init: function () {
        function resizeHtmlFont() {
          var hW = $('html').width();
          $('body,html').css('font-size', hW / 16 + 'px');
          $$log.debug('$$initRem.resizeHtmlFont');
        }
        resizeHtmlFont();
        addEventListener('orientationchange', function (e) {
          resizeHtmlFont();
          e.preventDefault();
        });
        addEventListener('resize', function (e) {
          resizeHtmlFont();
          e.preventDefault();
        });
        $(document).ready(function () {
          resizeHtmlFont();
        });
      },
      getSize: function () {
        return $('html').width() / 16;
      }
    };
  }
]);
/**
 * Created by dongsj on 16/7/15.
 * 日志
 *
 ***********************************************************
 *
 * $$log.log/$$log.info/$$log.warn/$$log.error/$$log.debug
 * 输出log,通过输入参envirementIndex控制在对应环境的显示
 * info显示数据
 * warning显示警告
 * error显示错误
 * debug显示调试
 * log显示其他
 *
 */
app.factory('$$log', [
  '$log',
  '$$env',
  function ($log, $$env) {
    var isShowAll = false;
    var isHideAll = false;
    return {
      showAll: function (b) {
        isShowAll = b || true;
      },
      hideAll: function (b) {
        isHideAll = b || true;
      },
      log: function (str, envirementIndex) {
        envirementIndex = envirementIndex ? envirementIndex : 1;
        if (!isHideAll && (isShowAll || $$env.getEnvirement() <= envirementIndex)) {
          $log.log(str);
        }
      },
      info: function (str, envirementIndex) {
        envirementIndex = envirementIndex ? envirementIndex : 1;
        if (!isHideAll && (isShowAll || $$env.getEnvirement() <= envirementIndex)) {
          $log.info(str);
        }
      },
      warn: function (str, envirementIndex) {
        envirementIndex = envirementIndex ? envirementIndex : 1;
        if (!isHideAll && (isShowAll || $$env.getEnvirement() <= envirementIndex)) {
          $log.warn(str);
        }
      },
      error: function (str, envirementIndex) {
        envirementIndex = envirementIndex ? envirementIndex : 3;
        if (!isHideAll && (isShowAll || $$env.getEnvirement() <= envirementIndex)) {
          $log.error(str);
        }
      },
      debug: function (str, envirementIndex) {
        envirementIndex = envirementIndex ? envirementIndex : 1;
        if (!isHideAll && (isShowAll || $$env.getEnvirement() <= envirementIndex)) {
          $log.debug(str);
        }
      }
    };
  }
]);
/**
 * Created by dongsj on 16/8/10.
 * navbar
 * *********************
 * $$navbar.show
 * 显示navbar
 *
 * $$navbar.hide
 * 隐藏navbar
 *
 * $$navbar.showReturnBtn
 * 显示navbar的returnBtn
 *
 * $$navbar.hideReturnBtn
 * 隐藏navbar的returnBtn
 *
 * $$navbar.setTitle
 * 设置navbar的title
 */
app.factory('$$navbar', [
  '$$log',
  '$rootScope',
  function ($$log, $rootScope) {
    return {
      show: function () {
        $rootScope.$emit('setNavbarShow', true);
        $$log.debug($rootScope.setNavbarShow);
        $$log.debug('$$navbar.hide');
      },
      hide: function () {
        $rootScope.$emit('setNavbarShow', false);
        $$log.debug($rootScope.setNavbarShow);
        $$log.debug('$$navbar.hide');
      },
      showReturnBtn: function () {
        $rootScope.$emit('setNavbarReturnBtnShow', true);
        $$log.debug('$$navbar.showReturnBtn');
      },
      hideReturnBtn: function () {
        $rootScope.$emit('setNavbarReturnBtnShow', false);
        $$log.debug('$$navbar.hideReturnBtn');
      },
      setTitle: function (titleContent) {
        $rootScope.$emit('setNavbarTitle', titleContent);
        $$log.info(titleContent);
      },
      setRightBtnShow: function (showStyle, content) {
        $rootScope.$emit('setRightBtnShow', true);
        var info = '';
        switch (showStyle) {
        //-----to-dongsj
        // //右侧按钮显示为icon
        // case 1:
        //     $rootScope.$emit('setRightIconBtn', content);
        //     info = 'setRightIconBtn';
        //     break;
        //
        // //右侧显示为text
        // case 2:
        //     $rootScope.$emit('setRightTextBtn',content);
        //     info = 'setRightTextBtn';
        //     break;
        //右侧按钮显示为QR
        case 1:
          $rootScope.$emit('setRightIconBtn', true);
          info = 'setRightIconBtn';
          break;
        //右侧按钮显示为加号
        case 2:
          $rootScope.$emit('setRightAddTagBtn', true);
          break;
        //右侧显示为text
        case 3:
          $rootScope.$emit('setRightTextBtn', content);
          info = 'setRightTextBtn';
          break;
        }
        $$log.debug('$$navbar.showRightQRbtn' + 'showstyle:' + info);
      },
      hideRightQRbtn: function () {
        $rootScope.$emit('setRightBtnShow', false);
        $$log.debug('$$navbar.hideRightQRbtn');
      }
    };
  }
]);
/**
 * Created by yihuan on 2016/11/15.
 */
app.filter('orFilter', [
  '$$log',
  function ($$log) {
    return function (array, input) {
      if (!input) {
        return array;
      }
      $$log.log(array);
      $$log.log(input);
      var inputArray = input.split(' ');
      var resultArray = [];
      for (var j = 0; j < array.length; j++) {
        var flag = 0;
        for (var i = 0; i < inputArray.length; i++) {
          if (JSON.stringify(array[j]).split(inputArray[i]).length > 1) {
            flag++;
          }
        }
        if (flag > 0) {
          resultArray.push(array[j]);
        }
      }
      $$log.log(resultArray);
      return resultArray;
    };
  }
]);
/**
 * Created by gaoqz on 16/11/21.
 */
app.factory('$$patientFilter', function () {
  return {
    getpatient: function (patientData) {
      var nurseType = parseInt(localStorage.authorizedStatus);
      if (nurseType == 4 || nurseType == 5) {
        $$log.debug('nurseType == 4');
        for (var i = 0; i < patientData.length; i++) {
          for (var j = 0; j < patientData[i].member.length; j++) {
            if (typeof patientData[i].member[j].tag != 'undefined') {
              for (var k = 0; k < patientData[i].member[j].tag.length; k++) {
                if (patientData[i].member[j].tag[k].tagType == 3) {
                  patientData[i].member[j].isBlack = true;
                  break;
                } else {
                  patientData[i].member[j].isBlack = false;
                }
              }
            } else {
              patientData[i].member[j].isBlack = false;
            }
          }
        }
        for (var i = 0; i < patientData.length; i++) {
          patientData[i].isNull = false;
        }
        for (var i = 0; i < patientData.length; i++) {
          for (var j = 0; j < patientData[i].member.length; j++) {
            var flag = 1;
            if (patientData[i].member[j].isBlack == true) {
              flag = flag + 1;
              if (flag == patientData[i].member.length == flag) {
                patientData[i].isNull = true;
              }
            }
          }
        }
        return patientData;
      } else {
        return patientData;
      }
    }
  };
});
/**
 * Created by dongsj on 16/7/15.
 * 接口地址
 *
 * **************************
 *
 * $requestUrl.getUrl 获取对应环境和对应的接口地址
 */
app.factory('$$requestUrl', [
  '$$env',
  '$$log',
  '$$shence',
  function ($$env, $$log, $$shence) {
    var base = '';
    var devBase = 'json/';
    // var devBase = 'http://api.zhushou.test.youhujia.com/';
    var debugBase = 'http://api.zhushou.test.youhujia.com/';
    var proBase = 'http://api.zhushou.youhujia.com/';
    var urlList = {
        'demo': 'yh/{id1}/{id2}/demo',
        'startFollowUpStateController': 'api/nurses/followup/pages',
        'startFollowUpChat': 'api/nurses/msg/im/{fromId}/to-user/{toId}',
        'createFollowUpTemplatesStateController': 'api/nurses/followup/pages/templates',
        'chooseFollowUpTemplatesStateController': 'api/nurses/followup/pages/templates',
        'updateTemplate': 'api/nurses/followup/pages/templates/{id}',
        'getFollowUpRecord': 'api/nurses/calendars/events/followup/{id}',
        'updateFollowUpRecord': 'api/nurses/calendars/events/followup/{id}',
        'setChatFollowUp': 'api/nurses/msg/im/{fromId}/to-user/{toId}',
        'weiXinPushFollow': 'api/nurses/msg/wx-template-msg/followup',
        'followMsg': 'api/nurses/wx-template-msg/followup',
        'chooseRemindTimeStateController': 'api/nurses/followup/pages/templates/alerts',
        'changeScheduleClassStateController': 'api/nurses/rosters/departments/{departmentId}',
        'changeSchedulePersonStateController': 'api/nurses/rosters/departments/{departmentId}/by-person',
        'batchSchedulesStateController': 'api/nurses/rosters/departments/{departmentId}/by-person',
        'dropSchedule': 'api/nurses/rosters/schedules/{rosterScheduleIds}',
        'createSchedule': 'api/nurses/rosters/schedules/append',
        'dropSortSchedule': 'api/nurses/rosters/schedules/{rosterScheduleIds}',
        'createSortScheduleStateController': 'api/nurses/rosters/schedules/batch-append',
        'createNurseScheduleStateController': 'api/nurses/rosters',
        'updateNurseSchedule': 'api/nurses/rosters/{rosterId}',
        'chooseNurseScheduleStateController': 'api/nurses/rosters',
        'NurseScheduleListStateController': 'api/nurses/rosters',
        'nursePlanCounterStateController': 'api/ns/planCount',
        'nurseToolCounterStateController': 'api/ns/toolCount',
        'signOut': 'api/nurses/signout',
        'signIn': 'api/nurses/signup/phone',
        'createInviteNurse': 'api/nurses/{nurseId}/invite-via-sms',
        'contentListStateController': 'api/nurses/cms-content',
        'createDeviceClient': 'api/nurses/msg/push/client-infos',
        'userCenterInfoStateController': 'api/nurses/{nurseId}/info',
        'getLoginPhoneCaptcha': 'api/nurses/signup/phone-captcha',
        'getAlertPhoneCaptcha': 'api/nurses/signup/phone-captcha',
        'createBasicInfo': 'api/nurses/{nurseId}/info',
        'createProfessionInfo': 'api/nurses/{nurseId}/info',
        'alterNurseInfoStateController': 'api/nurses/{nurseId}/info',
        'updateNurseInfo': 'api/nurses/{nurseId}/info',
        'choiceHospitalStateController': 'api/departments',
        'createHospital': 'api/organizations',
        'choiceDepartmentStateController': 'api/departments',
        'createDepartment': 'api/departments',
        'allPatientListStateController': 'api/nurses/{nurseId}/patients',
        'otherPatientListStateController': 'api/nurses/{nurseId}/patients',
        'nurseListStateController': 'api/nurses/{nurseId}/colleagues',
        'nurseDetailStateController': 'api/nurses/{nurseId}/colleagues',
        'patientDetailStateController': 'api/nurses/users/{userId}/info',
        'patientTagStateController': 'api/departments/{departmentId}/tags/users',
        'alterNurseTagStateController': 'api/departments/{departmentId}/tags/nurses',
        'createNurseTag': 'api/nurses/tags',
        'updateNurseTags': 'api/nurses/{nurseId}/tags',
        'createPatientTagCategory': 'api/nurses/users/tags',
        'createPatientCategoryTag': 'api/nurses/users/tags',
        'updatePatientTag': 'api/nurses/users/{userId}/tags',
        'getSelectNurseStateController': 'api/nurses/{nurseId}/colleagues',
        'getSelectPatientStateController': 'api/nurses/{nurseId}/patients',
        'getTagPatientList': 'api/nurses/{nurseId}/patients',
        'createPatientChat': 'api/nurses/msg/im/{fromId}/to-user/{toId}',
        'createNurseChat': 'api/nurses/msg/im/{fromId}/to-nurse/{toId}',
        'createPatientsWeiXinPush': 'api/nurses/msg/new-im',
        'patientTagManageStateController': 'api/departments/{departmentId}/tags/users',
        'nurseTagManageStateController': 'api/departments/{departmentId}/tags/nurses',
        'deleteNurseTag': 'api/nurses/tags/delete',
        'updateNurseTag': 'api/nurses/tags',
        'deletePatientTag': 'api/nurses/users/tags/delete',
        'updateDepartmentPatientTag': 'api/nurses/users/tags',
        'createNurseTagInManage': 'api/nurses/tags',
        'createPatientCategoryTagInManage': 'api/nurses/users/tags',
        'createPatientTagCategoryInManage': 'api/nurses/users/tags',
        'attentionTagStateController': 'api/nurses/users/{nurseId}/tags',
        'blackListTagStateController': 'api/nurses/users/{nurseId}/tags',
        'allDepartmentTags': 'api/departments/{departmentId}/tags/nurses',
        'removeBlackList': 'api/nurses/users/bulk/tags',
        'blackList': 'api/nurses/{nurseId}/patients/blacklist',
        'messageTagStateController': 'api/nurses/calendars/messagePage',
        'recentCalenderStateController': 'api/nurses/calendars/messagePage',
        'getMyChatInfo': 'api/nurses/msg/im/me',
        'createGroupChat': 'api/nurses/msg/im/group-chats',
        'createC2CNurse': 'api/nurses/msg/im/{fromId}/to-nurse/{toId}',
        'createC2CUser': 'api/nurses/msg/im/{fromId}/to-user/{toId}',
        'statisticStateController': 'api/nurses/metadata/shence',
        'planCountStateController': 'api/nurses/metadata/plan',
        'toolCountStateController': 'api/nurses/metadata/tool'
      };
    return {
      getUrl: function (name, ps) {
        switch ($$env.getEnvirement()) {
        case 100:
        case 101:
          base = proBase;
          break;
        case 2:
          base = proBase;
          break;
        case 1:
          base = devBase;
          break;
        case 0:
          base = debugBase;
          break;
        case 3:
          base = debugBase;
          break;
        default:
          base = proBase;
        }
        var url = base + urlList[name] + ($$env.getEnvirement() === 0 ? '.json' : '');
        for (var p in ps) {
          // url=url.replace('{' + p + '}', ps[p]);
          url = url.replace('{' + p + '}', $$env.getEnvirement() === 0 ? p : ps[p]);
        }
        $$log.debug('requestUrl.getUrl:' + name);
        //$$log.debug(ps);
        if (url.split('{').length > 1) {
          $$log.warn('please check params');
        }
        $$log.info(url);
        $$shence.track('_' + name);
        return url;
      }
    };
  }
]);
/**
 * Created by dongsj on 16/7/15.
 * 设置titile方法,针对微信重新加载favicon
 */
app.factory('$$title', [
  '$$getUserAgent',
  '$timeout',
  '$$log',
  '$$navbar',
  function ($$getUserAgent, $timeout, $$log, $$navbar) {
    return {
      setTitle: function (title) {
        var $body = $('body');
        document.title = title;
        $$navbar.setTitle(title);
        if ($$getUserAgent.versions.weixin || $$getUserAgent.mobile) {
          var $iframe = $('<iframe style="display: none" src="/favicon.ico"></iframe>').on('load', function () {
              $timeout(function () {
                $iframe.remove();
                $$log.debug('$$title.setTitle.removeIframe');
              }, 100);
            }).appendTo($body);
        }
        $$log.debug('$$title.setTitle');
      }
    };
  }
]);
/**
 * Created by dongsj on 16/7/15.
 * 神策打点
 *
 ****************************************************
 *
 * $$shence.identify
 * 设置用户信息
 *
 * $$shence.track
 * 记录用户操作
 *
 */
app.factory('$$shence', [
  '$$log',
  '$$env',
  function ($$log, $$env) {
    return {
      init: function () {
        //神策初始化
        (function (para) {
          var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script', x = null, y = null;
          w.sensorsDataAnalytic201505 = n;
          w[n] = w[n] || function (a) {
            return function () {
              (w[n]._q = w[n]._q || []).push([
                a,
                arguments
              ]);
            };
          };
          var ifs = [
              'track',
              'quick',
              'register',
              'registerPage',
              'registerOnce',
              'registerSession',
              'registerSessionOnce',
              'trackSignup',
              'trackAbtest',
              'setProfile',
              'setOnceProfile',
              'appendProfile',
              'incrementProfile',
              'deleteProfile',
              'unsetProfile',
              'identify'
            ];
          for (var i = 0; i < ifs.length; i++) {
            w[n][ifs[i]] = w[n].call(null, ifs[i]);
          }
          if (!w[n]._t) {
            x = d.createElement(s);
            y = d.getElementsByTagName(s)[0];
            x.async = 1;
            x.src = p;
            y.parentNode.insertBefore(x, y);
            w[n]._t = 1 * new Date();
            w[n].para = para;
          }
        }({
          sdk_url: 'js/lib/sensorsdata.min.js ',
          name: 'sa',
          server_url: 'http://123.56.231.188:8006/sa?project=yhzs_nurse'
        }));
      },
      identify: function (name, info) {
        if (sa !== undefined) {
          $$log.debug('shence.identify');
          $$log.info(name);
          $$log.info(info);
          // if ($$env.getEnvirement() > 1) {
          sa.identify(name, info);  // }
        } else {
          $$log.error('shence is not loaded');
        }
      },
      track: function (name, info) {
        if (sa !== undefined) {
          info = info || {};
          info.departmentId = localStorage.globalDepartmentId;
          info.hospitalId = localStorage.hospitalId;
          info.department = localStorage.department;
          info.hospital = localStorage.hospital;
          info.phone = localStorage.phone;
          info.appStoreName = appStoreName;
          $$log.debug('shence.track');
          $$log.info(name);
          if (localStorage.globalNurseId) {
            sa.identify(localStorage.globalNurseId);
          }
          sa.track(name, info);
          sa.quick('autoTrack');  //神策系统必须是1.4最新版及以上
                                  // }
        } else {
          $$log.error('shence is not loaded');
        }
      }
    };
  }
]);
/**
 * Created by dongsj on 16/8/10.
 * http拦截器
 */
app.factory('$$timestampMarker', [
  '$$requestUrl',
  '$$log',
  '$location',
  '$q',
  '$injector',
  '$$env',
  '$$toast',
  '$timeout',
  function ($$requestUrl, $$log, $location, $q, $injector, $$env, $$toast, $timeout) {
    //http拦截器
    return {
      request: function (config) {
        config.requestTimestamp = new Date().getTime();
        config.headers['Authorization'] = localStorage.token || 'empty';
        config.headers['Accept'] = 'application/json';
        config.headers['Access-Control-Allow-Origin'] = '*';
        config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        config.headers['Access-Control-Allow-Headers'] = 'X-Requested-With';
        config.headers['Content-Type'] = 'application/json';
        // header('Access-Control-Allow-Origin: *');
        // header('Access-Control-Allow-Headers: X-Requested-With');
        $$log.debug('requestSend');
        $$log.info(config);
        return config;
      },
      responseError: function (response) {
        $$log.debug('responseError');
        $$log.debug(response);
        if (response.status == 500) {
          $$toast.show('\u670d\u52a1\u5668\u9519\u8bef');  //     location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/' + 'login';
                                                           // location.hash = 'login';
        }
      },
      response: function (response) {
        console.log(response);
        if (response.data.result && response.data.result.success == false && response.data.result.displaymsg === undefined) {
          response.data.result.displaymsg = response.data.result.displayMsg;
        }
        if (response.data.result && response.data.result.success == false && response.data.result.displayMsg === undefined) {
          response.data.result.displayMsg = response.data.result.displaymsg;
        }
        if (response.data.result && (response.data.result.success == false || response.data.result.success == 'false') && response.data.result.code == 401) {
          localStorage.clear();
          localStorage.guided = 'true';
          $timeout(function () {
            location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/' + 'login';
          }, 1000);
          location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/' + 'login';
        }
        if (response.data.result && (response.data.result.success == false || response.data.result.success == 'false') && response.data.result.code == 403) {
          $$toast.show(response.data.result.displayMsg, function () {
          });
          location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/' + 'userCenter';
        } else if (response.data.result && response.data.result.success == false && response.data.result.code > 10000) {
          $$toast.show(response.data.result.displayMsg);
        }
        response.config.responseTimestamp = new Date().getTime();
        return response;
      }
    };
  }
]);
/**
 * Created by dongsj on 16/7/15.
 * 腾讯IM
 *
 ********************************************************************
 *
 *
 */
var selSess = {};
// var myChatInfo = {id: '', sig: ''};
// var targetChatInfo = {id: '', sig: ''};
// var imChatType = 'C2C';
// var imChatType='C2C';
var targetArray = [];
var eleArray = [];
app.factory('$$txIM', [
  '$$log',
  '$$toast',
  '$http',
  '$$requestUrl',
  '$$tabbar',
  '$$title',
  '$$env',
  '$timeout',
  function ($$log, $$toast, $http, $$requestUrl, $$tabbar, $$title, $$env, $timeout) {
    var sdkAppID = 1400013584;
    var accountType = 6943;
    // var sdkAppID = 1400013758;
    // var accountType = 7033;
    var isAccessFormalEnv = true;
    //是否访问正式环境
    var isLogOn = false;
    //是否开启sdk在控制台打印日志
    var userHead = './img/title.png';
    //默认头像;
    var loginInfo = {};
    var splitAlpha = '!-!Alpha!-!';
    var splitBeta = '!-!Beta!-!';
    var splitGamma = '!-!Gamma!-!';
    var lastMsgTime = 0;
    var msgKey = '';
    var txSelf = '';
    return {
      login: function (listeners, loginSuccessCallback, loginErrorCallback) {
        if ($$env.getEnvirement() < 1) {
          return false;
        }
        txSelf = this;
        function login() {
          selSess = {};
          listeners = listeners || {};
          loginSuccessCallback = loginSuccessCallback || function (resp) {
          };
          loginErrorCallback = loginErrorCallback || function (err) {
          };
          var loginOptions = {
              'isAccessFormalEnv': isAccessFormalEnv,
              'isLogOn': isLogOn
            };
          loginInfo = {
            'sdkAppID': sdkAppID,
            'accountType': accountType,
            'identifier': myChatInfo.id,
            'userSig': myChatInfo.sig,
            'headurl': myChatInfo.userHead || userHead
          };
          var loginListeners = {
              onConnNotify: function (resp) {
                $$log.debug('$$txIM.onConnNotify');
                $$log.info(resp);
                var info;
                switch (resp.ErrorCode) {
                case webim.CONNECTION_STATUS.ON:
                  webim.Log.warn('\u5efa\u7acb\u8fde\u63a5\u6210\u529f: ' + resp.ErrorInfo);
                  break;
                case webim.CONNECTION_STATUS.OFF:
                  info = '\u8fde\u63a5\u5df2\u65ad\u5f00\uff0c\u65e0\u6cd5\u6536\u5230\u65b0\u6d88\u606f\uff0c\u8bf7\u68c0\u67e5\u4e0b\u4f60\u7684\u7f51\u7edc\u662f\u5426\u6b63\u5e38: ' + resp.ErrorInfo;
                  // alert(info);
                  webim.Log.warn(info);
                  break;
                case webim.CONNECTION_STATUS.RECONNECT:
                  info = '\u8fde\u63a5\u72b6\u6001\u6062\u590d\u6b63\u5e38: ' + resp.ErrorInfo;
                  // alert(info);
                  webim.Log.warn(info);
                  break;
                default:
                  webim.Log.error('\u672a\u77e5\u8fde\u63a5\u72b6\u6001: =' + resp.ErrorInfo);
                  break;
                }
                if (listeners.onConnNotify) {
                  listeners.onConnNotify(resp);
                }
              },
              onMsgNotify: function (resp) {
                $$log.debug('$$txIM.onMsgNotify');
                $$log.info(resp);
                if (listeners.onMsgNotify) {
                  listeners.onMsgNotify(resp);
                }
              }
            };
          $$log.debug('$$txIM.login');
          function loginFunction() {
            webim.login(loginInfo, loginListeners, loginOptions, function (resp) {
              $$log.debug('$$txIM.login.success');
              $$log.info(resp);
              // txSelf.sendIMArray();
              loginSuccessCallback(resp);
            }, function (err) {
              $$log.error('$$txIM.login.error');
              $$log.error(err);
              loginErrorCallback(err);
              $timeout(function () {
                login();
              }, 2000);
            });
          }
          webim.logout(function () {
            loginFunction();
          }, function (e) {
            txSelf.login(listeners, loginSuccessCallback, loginErrorCallback);
          });
        }
        if (localStorage['getMyChatInfo'] && +new Date() - +JSON.parse(localStorage['getMyChatInfo']).time < 60 * 60 * 1000) {
          myChatInfo = JSON.parse(localStorage['getMyChatInfo']).date;
        }
        if (myChatInfo !== undefined && myChatInfo != {} && myChatInfo.id != '' && myChatInfo.id != undefined) {
          login();
        } else {
          $http({
            method: 'GET',
            url: $$requestUrl.getUrl('getMyChatInfo'),
            params: {}
          }).success(function (response) {
            $$log.debug('getMyChatInfo');
            $$log.info(response);
            myChatInfo = {
              id: response.identifier,
              sig: response.signature,
              userHead: response.avatarUrl,
              nickName: response.nickname
            };
            if (myChatInfo.id != undefined && myChatInfo.id != '') {
              localStorage.myChatId = myChatInfo.id;
              localStorage['getMyChatInfo'] = JSON.stringify({
                time: +new Date(),
                date: myChatInfo
              });
              login();
            } else {
              history.go(-1);
            }  // login(listeners, loginSuccessCallback, loginErrorCallback);
          }).error(function (e) {
            // login(listeners, loginSuccessCallback, loginErrorCallback);
            login();
          });
        }
      },
      loadList: function () {
        var chatList = localStorage.chatList !== undefined ? JSON.parse(localStorage.chatList) : [];
        for (var i = 0; i < chatList.length; i++) {
          var lastMsg = this.loadLastMsg(chatList[i].chatId);
          if (lastMsg.type != 'empty' && chatList[i].lastMsg.fullTime <= lastMsg.fullTime) {
            chatList[i].lastMsg = lastMsg;
          }
        }
        return chatList;
      },
      checkIMArray: function () {
        if (localStorage.imSendArray) {
          return JSON.parse(localStorage.imSendArray);
        } else {
          localStorage.imSendArray = JSON.stringify([]);
          return [];
        }
      },
      pushIMArray: function (ele, targetId) {
        var arr = this.checkIMArray();
        arr.push(targetId + splitAlpha + JSON.stringify(ele));
        localStorage.imSendArray = JSON.stringify(arr);
      },
      sendIMArray: function (successCallback, errorCallback) {
        var arr = this.checkIMArray();
        var self = this;
        var msg = [];
        var count = 0;
        var countArray = [];
        var resps = [];
        for (var i = 0; i < arr.length; i++) {
          msg = arr[i].split(splitAlpha);
          (function (index, targetId) {
            self.sendElementMsg(JSON.parse(msg[1]), msg[0], function (resp) {
              // self.popIMArray(JSON.parse(msg[1]), msg[0]);
              // if (self.checkIMArray().length == 0 && successCallback) {
              //     successCallback();
              // }
              // (function (index) {
              //     popImArrayByIndex(index);
              // })(i);
              resps.push(resp);
              txSelf.saveLastMsgWithId(txSelf.createMsgEle(resp, false), targetId);
              count++;
              countArray.push(index);
              if (count >= arr.length) {
                var errArray = [];
                // while (countArray.length > 0) {
                //     arr.remove(countArray[0]);
                //     countArray.unshift();
                // }
                for (var i = 0; i < arr.length; i++) {
                  if (countArray.indexOf(i) < 0) {
                    errArray.push(arr[i]);
                  }
                }
                localStorage.imSendArray = JSON.stringify(errArray);
                if (errArray.length > 0) {
                  $$log.error('sendIMArray error');
                  $$log.info(errArray);
                } else {
                  $$log.debug('sendIMArray success');
                }
                if (successCallback && errArray.length === 0) {
                  successCallback(resps);
                } else if (errorCallback && errArray.length > 0) {
                  errorCallback();
                }
              }
            });
          }(i, msg[0]));
        }
      },
      initImArrayAndSend: function (targetArray, eleArray, notSend) {
        for (var i = 0; i < targetArray.length; i++) {
          for (var j = 0; j < eleArray.length; j++) {
            this.pushIMArray(eleArray[j], targetArray[i]);
          }
        }
        if (notSend == true) {
        } else {
          this.sendIMArray();
        }
      },
      sendElementMsg: function (ele, targetId, successCallback, clearCallback, errorCallback) {
        var splitAlpha = '!-!Alpha!-!';
        var splitBeta = '!-!Beta!-!';
        var splitGamma = '!-!Gamma!-!';
        // ele = {
        //     type: 'type',
        //     id:'1',
        //     name: 'name',
        //     desc: 'descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc',
        //     img: 'img'
        // };
        var msg = ele.type + splitBeta + (ele.id || '') + splitGamma + (ele.name || '') + splitGamma + (ele.desc || '') + splitGamma + (ele.img || '');
        this.sendTextMsg(msg, targetId, successCallback, clearCallback, errorCallback);
      },
      sendTextMsg: function (msg, targetId, successCallback, clearCallback, errorCallback) {
        $$log.debug('$$txIM.sendTextMsg');
        $$log.info(msg);
        if (msg.length < 1) {
          clearCallback();
          return false;
        }
        var maxLen, msgLen, errInfo;
        msgLen = webim.Tool.getStrBytes(msg);
        maxLen = targetId.indexOf('@') < 0 ? webim.MSG_MAX_LENGTH.C2C : webim.MSG_MAX_LENGTH.GROUP;
        errInfo = '\u6d88\u606f\u957f\u5ea6\u8d85\u51fa\u9650\u5236(\u6700\u591a' + Math.round(maxLen / 3) + '\u6c49\u5b57)';
        if (msgLen > maxLen) {
          // $$toast.show(errInfo);
          return false;
        }
        if (!selSess[targetId]) {
          selSess[targetId] = new webim.Session(targetId.indexOf('@') < 0 ? webim.SESSION_TYPE.C2C : webim.SESSION_TYPE.GROUP, targetId, targetId, loginInfo.headurl, Math.round(new Date().getTime() / 1000));
        }
        var isSend = true;
        //是否为自己发送
        var seq = -1;
        //消息序列，-1表示sdk自动生成，用于去重
        var random = Math.round(Math.random() * 4294967296);
        //消息随机数，用于去重
        var msgTime = Math.round(new Date().getTime() / 1000);
        //消息时间戳
        var subType = 0;
        // if (imChatType == 'C2C') {
        //     subType = webim.C2C_MSG_SUB_TYPE.COMMON;
        // } else {
        //     //webim.GROUP_MSG_SUB_TYPE.COMMON-普通消息,
        //     //webim.GROUP_MSG_SUB_TYPE.LOVEMSG-点赞消息，优先级最低
        //     //webim.GROUP_MSG_SUB_TYPE.TIP-提示消息(不支持发送，用于区分群消息子类型)，
        //     //webim.GROUP_MSG_SUB_TYPE.REDPACKET-红包消息，优先级最高
        //     subType = webim.GROUP_MSG_SUB_TYPE.COMMON;
        // }
        // $$log.debug('!!!!!!');
        // $$log.info(subType);
        var msgToSend = new webim.Msg(selSess[targetId], isSend, seq, random, msgTime, loginInfo.identifier, subType, loginInfo.identifierNick);
        // console.log(loginInfo);
        //textObj
        var finalMsg = (msg.indexOf(splitBeta) >= 0 ? msg : 'text' + splitBeta + msg) + splitAlpha + myChatInfo.userHead + splitAlpha + myChatInfo.nickName;
        var text_obj = new webim.Msg.Elem.Text(finalMsg);
        msgToSend.addText(text_obj);
        webim.sendMsg(msgToSend, function (resp) {
          $$log.debug('$$txIM.sendMsg.success');
          $$log.info(resp);
          if (successCallback) {
            successCallback(msgToSend);
          }
          if (clearCallback) {
            clearCallback(msgToSend);
          }
        }, function (err) {
          $$log.error('$$txIM.sendMsg.err');
          $$log.error(err);
          // $$toast.show(err.ErrorInfo);
          if (clearCallback) {
            clearCallback(msgToSend);
          }
          if (errorCallback) {
            errorCallback(err);
          }
        });
      },
      getGroupInfo: function (group_id, cbOK, cbErr) {
        var options = {
            'GroupIdList': [group_id],
            'GroupBaseInfoFilter': [
              'Type',
              'Name',
              'Introduction',
              'Notification',
              'FaceUrl',
              'CreateTime',
              'Owner_Account',
              'LastInfoTime',
              'LastMsgTime',
              'NextMsgSeq',
              'MemberNum',
              'MaxMemberNum',
              'ApplyJoinOption'
            ],
            'MemberInfoFilter': [
              'Account',
              'Role',
              'JoinTime',
              'LastSendMsgTime',
              'ShutUpUntil'
            ]
          };
        webim.getGroupInfo(options, function (resp) {
          $$log.debug('$$txIM.getGroupInfo');
          $$log.info(resp);
          if (cbOK) {
            cbOK(resp);
          }
        }, function (err) {
          alert(err.ErrorInfo);
        });
      },
      setRead: function (targetId) {
        if (!selSess[targetId]) {
          selSess[targetId] = new webim.Session(targetId.indexOf('@') < 0 ? webim.SESSION_TYPE.C2C : webim.SESSION_TYPE.GROUP, targetId, targetId, loginInfo.headurl, Math.round(new Date().getTime() / 1000));
        }
        webim.setAutoRead(selSess[targetId], true, true);
      },
      getHistoryMsgs: function (successCallback, errorCallback) {
        if (localStorage.targetChatId.indexOf('@') < 0) {
          $$log.debug('getC2CHistoryMsgs');
          var historyOption = {
              'Peer_Account': localStorage.targetChatId,
              'MaxCnt': 15,
              'LastMsgTime': lastMsgTime,
              'MsgKey': msgKey
            };
          webim.getC2CHistoryMsgs(historyOption, function (resp) {
            $$log.debug('$$txIM.getC2CHistoryMsgs.success');
            $$log.info(resp);
            lastMsgTime[localStorage.targetChatId] = resp.LastMsgTime;
            msgKey[localStorage.targetChatId] = resp.MsgKey;
            successCallback(resp.MsgList);
          }, function (err) {
            $$log.error('$$txIM.getC2CHistoryMsgs.error');
            $$log.error(err);
            if (errorCallback) {
              errorCallback(err);
            }
          });
        } else {
          $$log.debug('getGroupHistoryMsgs');
          this.getGroupInfo(localStorage.targetChatId, function (resp) {
            //拉取最新的群历史消息
            var opts = {
                'GroupId': localStorage.targetChatId,
                'ReqMsgSeq': resp.GroupInfo[0].NextMsgSeq - 1 > 0 ? resp.GroupInfo[0].NextMsgSeq - 1 : 0,
                'ReqMsgNumber': 80
              };
            $$title.setTitle(resp.GroupInfo[0].Name + '(' + resp.GroupInfo[0].MemberNum + ')');
            webim.syncGroupMsgs(opts, function (resp) {
              $$log.debug('$$txIM.getGroupHistoryMsgs.success');
              $$log.debug(resp);
              successCallback(resp);
            }, function (err) {
              alert(err.ErrorInfo);
              $$log.error('$$txIM.getGroupHistoryMsgs.error');
              $$log.error(err);
              if (errorCallback) {
                errorCallback(err);
              }
            });
          });
        }
      },
      syncC2CMsgs: function (cbOK) {
        $$log.debug('$$txIM.syncMsg!');
        webim.syncMsgs(function (resp) {
          $$log.debug('$$txIM.syncMsg');
          $$log.info(resp);
          if (cbOK) {
            cbOK(resp);
          }
        });
      },
      syncGROUPLastMsgs: function (groupIds, cbOK) {
        this.getGroupInfo(groupIds, function (resp) {
          var opts = {
              'GroupId': groupIds,
              'ReqMsgSeq': resp.GroupInfo[0].NextMsgSeq - 1 > 0 ? resp.GroupInfo[0].NextMsgSeq - 1 : 0,
              'ReqMsgNumber': 1
            };
          webim.syncGroupMsgs(opts, function (resp) {
            $$log.debug('$$txIM.syncGROUPMsgs.success');
            $$log.info(resp);
            if (cbOK) {
              cbOK(resp);
            }
          });
        });
      },
      saveLastMsg: function (msgEle) {
        $$log.debug('$$txIM.saveLastMsg');
        $$log.info(JSON.stringify(msgEle));
        localStorage[myChatInfo.id + ':lastChatMsg:' + localStorage.targetChatId] = JSON.stringify(msgEle);
      },
      saveLastMsgWithId: function (msgEle, targetId) {
        $$log.debug('$$txIM.saveLastMsgWithId');
        $$log.info(JSON.stringify(msgEle));
        localStorage[myChatInfo.id + ':lastChatMsg:' + targetId] = JSON.stringify(msgEle);
      },
      loadLastMsg: function (targetUserId) {
        return JSON.parse(localStorage[localStorage.myChatId + ':lastChatMsg:' + targetUserId] || '{"type": "empty","newMsg":false}');
      },
      markReadLastMsg: function (targetUserId) {
        var msgEle = this.loadLastMsg(targetUserId);
        msgEle.newMsg = false;
        this.saveLastMsg(msgEle);
      },
      createMsgEle: function (respMsgEle, readed) {
        var newMsgEle = {};
        if (!respMsgEle.elems || respMsgEle.elems.length === 0) {
          return false;
        }
        // $$log.debug('$$txIM.createMsgEle');
        // $$log.info(respMsgEle);
        // $$log.info(respMsgEle.elems[0].content.text);
        // $$log.info(respMsgEle.elems[0].content.text.indexOf(splitAlpha));
        // $$log.info(respMsgEle.elems[0].content.text.indexOf(splitBeta));
        if (respMsgEle.elems[0].content.text === undefined || respMsgEle.elems[0].content.text.indexOf(splitAlpha) < 0 || respMsgEle.elems[0].content.text.indexOf(splitBeta) < 0) {
          return false;
        }
        this.updateLastMsgTime(respMsgEle.time);
        if (respMsgEle.elems[0].content.text.split(splitAlpha)[0].split(splitBeta)[0] == 'text') {
          newMsgEle = {
            type: respMsgEle.elems[0].content.text.split(splitAlpha)[0].split(splitBeta)[0] || 'text',
            msg: respMsgEle.elems[0].content.text.split(splitAlpha)[0].split(splitBeta)[1] || respMsgEle.elems[0].content.text.split(splitAlpha)[0] || ' ',
            fromAccount: respMsgEle.fromAccount,
            fromNickName: respMsgEle.elems[0].content.text.split(splitAlpha)[2] || respMsgEle.fromAccountNick || respMsgEle.fromNickName,
            userHead: respMsgEle.elems[0].content.text.split(splitAlpha)[1] || ' ',
            time: new Date(respMsgEle.time * 1000).format('MM-dd hh:mm:ss'),
            fullTime: respMsgEle.time,
            sessId: respMsgEle.sess._impl.id,
            sessName: respMsgEle.sess._impl.name,
            newMsg: readed !== false,
            unread: respMsgEle.sess._impl.unread
          };
          $$log.debug('$$txIM.createMsgEle.typeText');
        } else {
          newMsgEle = {
            type: respMsgEle.elems[0].content.text.split(splitAlpha)[0].split(splitBeta)[0],
            msg: respMsgEle.elems[0].content.text.split(splitAlpha)[0].split(splitBeta)[1].split(splitGamma) || [],
            fromAccount: respMsgEle.fromAccount,
            fromNickName: respMsgEle.elems[0].content.text.split(splitAlpha)[2] || respMsgEle.fromNickName || respMsgEle.fromAccountNick,
            userHead: respMsgEle.elems[0].content.text.split(splitAlpha)[1] || ' ',
            time: new Date(respMsgEle.time * 1000).format('MM-dd hh:mm:ss'),
            fullTime: respMsgEle.time,
            sessId: respMsgEle.sess._impl.id,
            sessName: respMsgEle.sess._impl.name,
            newMsg: readed !== false,
            unread: respMsgEle.sess._impl.unread
          };
          $$log.debug('$$txIM.createMsgEle.typeOther');
        }
        $$log.info(newMsgEle);
        return newMsgEle;
      },
      updateLastMsgTime: function (msgTime) {
        if (!lastMsgTime) {
          return;
        }
        lastMsgTime = msgTime < lastMsgTime ? msgTime : lastMsgTime;
      },
      updateGroupInfo: function (groupId, name, cbOK, cbErr) {
        if (webim.Tool.getStrBytes(name) > 30) {
          $$toast.show('\u7fa4\u7ec4\u540d\u79f0\u6700\u957f10\u4e2a\u6c49\u5b57');
          return false;
        } else if (name.trim().length == 0) {
          $$toast.show('\u7fa4\u7ec4\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a');
          return false;
        } else {
          var options = {
              'GroupId': groupId,
              'Name': name
            };
          webim.modifyGroupBaseInfo(options, function (resp) {
            $$log.debug('$$txIM.updateGroupInfo.success');
            $$log.info(resp);
            if (cbOK) {
              cbOK(resp);
            }
          }, function (err) {
            $$log.error('$$txIM.updateGroupInfo.error');
            $$log.info(err);
            if (cbErr) {
              cbErr(err);
            }
          });
        }
      },
      syncC2CMsg: function (cbOK) {
        if (cbOK) {
          cbOK();
        }
      },
      getAllGroup: function (cbOK, cbErr) {
        var options = {
            'Member_Account': loginInfo.identifier,
            'Limit': 9999,
            'Offset': 0,
            'GroupBaseInfoFilter': [
              'Type',
              'Name',
              'Introduction',
              'Notification',
              'FaceUrl',
              'CreateTime',
              'Owner_Account',
              'LastInfoTime',
              'LastMsgTime',
              'NextMsgSeq',
              'MemberNum',
              'MaxMemberNum',
              'ApplyJoinOption'
            ],
            'SelfInfoFilter': [
              'Role',
              'JoinTime',
              'MsgFlag',
              'UnreadMsgNum'
            ]
          };
        webim.getJoinedGroupListHigh(options, function (resp) {
          $$log.debug('$$txIM.getAllGroup.success');
          $$log.info(resp);
          if (cbOK) {
            cbOK(resp);
          }
        }, function (err) {
          $$log.error('$$txIM.getAllGroup.error');
          $$log.info(err);
          if (cbErr) {
            cbErr();
          }
        });
      },
      getC2CInfo: function (userArray, cbOK, cbErr) {
        var tag_list = [
            'Tag_Profile_IM_Nick',
            'Tag_Profile_IM_Gender',
            'Tag_Profile_IM_AllowType',
            'Tag_Profile_IM_Image'
          ];
        var options = {
            'To_Account': userArray,
            'LastStandardSequence': 0,
            'TagList': tag_list
          };
        webim.getProfilePortrait(options, function (resp) {
          $$log.debug('$$txIM.getC2CInfo.success');
          $$log.info(resp);
          if (cbOK) {
            cbOK(resp);
          }
        }, function (err) {
          $$log.error('$$txIM.getC2CInfo.error');
          $$log.info(err);
          if (cbErr) {
            cbErr(err);
          }
        });
      },
      getAllFriend: function (cbOK, cbErr) {
        var options = {
            'From_Account': myChatInfo.id,
            'TimeStamp': 0,
            'StartIndex': 0,
            'GetCount': 9999,
            'LastStandardSequence': 0,
            'TagList': [
              'Tag_Profile_IM_Nick',
              'Tag_SNS_IM_Remark'
            ]
          };
        webim.getAllFriend(options, function (resp) {
          $$log.debug('$$txIM.getAllFriend.success');
          $$log.info(resp);
          if (cbOK) {
            cbOK(resp);
          }
        }, function (err) {
          $$log.error('$$txIM.getAllFriend.error');
          $$log.info(err);
          if (cbErr) {
            cbErr();
          }
        });
      }
    };
  }
]);
/**
 * Created by dongsj on 16/7/15.
 * 微信相关操作,可链式调用
 *
 ********************************************************************
 *
 * $$wx.config
 * 配置微信js
 *
 * $$wx.setPayInfo
 * 设置微信支付信息
 *
 * $$wx.payAction
 * 调用微信支付
 *
 * $$wx.setShare
 * 设置微信分享
 *
 * $$wx.runReady
 * 绑定wx.ready,调用所有已设置函数
 *
 */
// var department='empty';
app.factory('$$wx', [
  '$http',
  '$rootScope',
  '$$requestUrl',
  '$$log',
  '$location',
  function ($http, $rootScope, $$requestUrl, $$log, $location) {
    var _payInfo = { timestamp: 0 };
    var _wxReadyFunctionArray = [];
    return {
      getDepartment: function () {
        $$log.debug('$$wx.getDepartment');
        $$log.info(department);
        return department;
      },
      configByHttp: function (callback) {
        // if ($$env.getEnvirement() > 2) {
        //     return false;
        // }
        $http({
          method: 'GET',
          url: $$requestUrl.getUrl('wxInit'),
          cache: false,
          params: { url: $location.absUrl() }
        }).success(function (response) {
          // department = response.data;
          wx.config({
            appId: response.appId,
            timestamp: response.timestamp,
            nonceStr: response.nonceStr,
            signature: response.signature,
            debug: false,
            jsApiList: [
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo',
              'onMenuShareQZone',
              'hideOptionMenu',
              'showOptionMenu',
              'hideMenuItems',
              'showMenuItems',
              'hideAllNonBaseMenuItem',
              'showAllNonBaseMenuItem',
              'scanQRCode',
              'chooseWXPay'
            ]
          });
          $$log.debug('$$wx.configByHttp');
          $$log.info(response.data);
          callback(response.data);
        });
      },
      config: function (wxInfo) {
        wx.config(wxInfo);
        _wxReadyFunctionArray = [];
        return this;
      },
      getPayInfoByHttp: function (orderId) {
        $rootScope.$emit('loadingShow');
        $http({
          method: 'GET',
          url: '/user/pay/wechat-pay-info',
          params: { generalOrderId: orderId }
        }).success(function (response) {
          $rootScope.$emit('loadingHide');
          _payInfo = {
            appId: response.appId,
            timestamp: response.timeStamp,
            nonceStr: response.nonceStr,
            package: response.package,
            signType: response.signType,
            paySign: response.paySign,
            success: function (res) {
              $rootScope.$emit('toastShow', '\u652f\u4ed8\u6210\u529f', function () {
                location.href = '#/orderList';
              });
            },
            fail: function (res) {
              $rootScope.$emit('toastShow', '\u652f\u4ed8\u5931\u8d25', function () {
                location.reload();
              });
            }
          };
        });
      },
      setPayInfo: function (payInfo) {
        _payInfo = payInfo;
        return this;
      },
      payAction: function (callback) {
        if (_payInfo.timestamp > 0) {
          wx.chooseWXPay({
            timestamp: _payInfo.timestamp,
            nonceStr: _payInfo.nonceStr,
            package: _payInfo.package,
            signType: _payInfo.signType,
            paySign: _payInfo.paySign,
            success: function (res) {
              callback();
            },
            fail: function (res) {
            }
          });
        } else {
          $rootScope.$emit('toastShow', '\u83b7\u53d6\u8ba2\u5355\u4fe1\u606f\u51fa\u9519', function () {
            location.reload();
          });
        }
        return this;
      },
      setShare: function (shareData) {
        var shareFunction = function () {
          wx.showOptionMenu();
          wx.onMenuShareAppMessage(shareData);
          wx.onMenuShareTimeline(shareData);
          wx.onMenuShareQQ(shareData);
          wx.onMenuShareWeibo(shareData);
          wx.onMenuShareQZone(shareData);
        };
        shareFunction();
        wx.ready(function () {
          shareFunction();
        });
        _wxReadyFunctionArray.push(shareFunction);
        return this;
      },
      runReady: function () {
        wx.ready(function () {
          for (var i = 0; i < _wxReadyFunctionArray.length; i++) {
            _wxReadyFunctionArray[i]();
          }
          _wxReadyFunctionArray = [];
        });
        return this;
      }
    };
  }
]);
/**
 * Created by dongsj on 16/8/10.
 */
app.directive('confirmController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/common/confirmController.html',
    replace: true,
    scope: {},
    controller: [
      '$rootScope',
      '$timeout',
      '$sce',
      '$scope',
      '$$log',
      function ($rootScope, $timeout, $sce, $scope, $$log) {
        var animateTime = 200;
        $scope.showBlock = false;
        $scope.msg = '';
        $scope.hideAnimate = false;
        $scope.title = '';
        $scope.cancelContent = '\u53d6\u6d88';
        $scope.confirmContent = '\u786e\u5b9a';
        $scope.btnConfirmCallback = null;
        $scope.btnConfirm = function () {
          $$log.log('confirmController.btnConfirm');
          $rootScope.$emit('confirmHide', $scope.btnConfirmCallback);
        };
        $scope.btnCancel = function () {
          $$log.log('confirmController.btnCancel');
          $rootScope.$emit('confirmHide', function () {
          });
        };
        $rootScope.$on('confirmShow', function (e, option) {
          // option={
          //     title:'',
          //     msg:'',
          //     callback:function(){
          //     },
          //     confirmText:'',
          //     cancelText:''
          // };
          if (option.title && option.msg && option.callback) {
            $scope.title = option.title;
            $scope.msg = $sce.trustAsHtml(option.msg);
            $scope.btnConfirmCallback = option.callback;
            $scope.cancelText = option.cancelText ? option.cancelText : '\u53d6\u6d88';
            $scope.confirmText = option.confirmText ? option.confirmText : '\u786e\u5b9a';
            $scope.showBlock = true;  // $scope.$apply();
          } else {
            $$log.error('confirmShow option error');
          }
        });
        $rootScope.$on('confirmHide', function (e, callback) {
          $scope.hideAnimate = true;
          $timeout(function () {
            $scope.showBlock = false;
            $scope.hideAnimate = false;
            $scope.msg = '';
            $timeout(function () {
              $scope.$apply();
            });
            // $scope.$apply();
            callback();
          }, animateTime);
        });  // $timeout(function () {
             //     $rootScope.$emit('confirmShow', {
             //             title: 'title',
             //             msg: 'msg',
             //             callback: function () {
             //
             //             }
             //         }
             //     );
             // }, 1000);
      }
    ]
  };
});
/**
 * Created by dongsj on 16/8/10.
 * confirm框
 * *********************
 * $$confirm.show
 * 显示confirm
 * option={
 *          title:显示标题
 *          msg: 显示内容
 *          callback:确定时的callback
 *          confirmText:确定文本
 *          cancelText:取消文本
 *         }
 */
app.factory('$$confirm', [
  '$$log',
  '$rootScope',
  function ($$log, $rootScope) {
    return {
      show: function (option) {
        $rootScope.$emit('confirmShow', option);
        $$log.debug('$$confirm.show');
        $$log.info(option);
      }
    };
  }
]);
/**
 * Created by dongsj on 16/8/10.
 */
app.directive('loadingController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/common/loadingController.html',
    replace: true,
    scope: {},
    controller: [
      '$rootScope',
      '$timeout',
      '$sce',
      '$scope',
      '$$log',
      function ($rootScope, $timeout, $sce, $scope, $$log) {
        // var animateTime = 250;
        $scope.showBlock = false;
        $scope.msg = '';
        $scope.hideAnimate = false;
        $rootScope.$on('loadingShow', function (e) {
          $scope.showBlock = true;
          $timeout(function () {
            $scope.$apply();
          });
        });
        $rootScope.$on('loadingHide', function (e) {
          // $scope.hideAnimate = true;
          // $timeout(function () {
          $scope.showBlock = false;
          $timeout(function () {
            $scope.$apply();
          });  // $scope.hideAnimate = false;
               // }, 250);
        });  // $timeout(function(){
             //     $rootScope.$emit('loadingShow');
             // },1000)
      }
    ]
  };
});
/**
 * Created by dongsj on 16/8/10.
 * loading
 * *********************
 * $$loading.show
 * 显示loading
 *
 * $$loading.hide
 * 隐藏loading
 *
 */
app.factory('$$loading', [
  '$$log',
  '$rootScope',
  function ($$log, $rootScope) {
    return {
      show: function () {
        $rootScope.$emit('loadingShow');
        $$log.debug('$$loading.show');
      },
      hide: function () {
        $rootScope.$emit('loadingHide');
        $$log.debug('$$loading.hide');
      }
    };
  }
]);
/**
 * Created by dongsj on 16/8/10.
 */
app.directive('navbarController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/common/navbarController.html',
    replace: true,
    scope: {},
    controller: [
      '$rootScope',
      '$timeout',
      '$sce',
      '$scope',
      '$$log',
      '$$env',
      function ($rootScope, $timeout, $sce, $scope, $$log, $$env) {
        $scope.navbarShow = true;
        $scope.returnBtnShow = false;
        $scope.navbarContent = '';
        $scope.rightBtnShow = false;
        $scope.QRbtn = false;
        $scope.addTagBtn = false;
        $scope.addBtn = false;
        $scope.textBtn = '';
        $scope.returnBtnClick = function () {
          $$log.debug('navbarController.returnBtnClick');
          history.go(-1);
        };
        //是否显示标题栏
        //监听从$rootScope传来的setNavbarShow
        $rootScope.$on('setNavbarShow', function (e, navbarShow) {
          // $$log.debug('tittittittittittittittittittittittittittittit');
          $$log.debug(navbarShow);
          $scope.navbarShow = navbarShow;  // $scope.$apply();
        });
        //返回按钮
        $rootScope.$on('setNavbarReturnBtnShow', function (e, returnBtnShow) {
          $scope.returnBtnShow = returnBtnShow;  // $scope.$apply();
        });
        //设置标题
        $rootScope.$on('setNavbarTitle', function (e, titleContent) {
          $scope.navbarTitle = titleContent;
          // $scope.$apply();
          $timeout(function () {
            $scope.$apply();
          });
        });
        //是否显示右侧按钮
        $rootScope.$on('setRightBtnShow', function (e, rightBtnShow) {
          $scope.rightBtnShow = rightBtnShow;  // $scope.$apply();
        });
        //右侧按钮显示为icon-QR
        $rootScope.$on('setRightIconBtn', function (e, iconNum) {
          $scope.iconNum = iconNum;  // $scope.$apply();
        });
        //右侧按钮显示为加号
        $rootScope.$on('setRightAddTagBtn', function (e, addTagBtn) {
          $scope.addTagBtn = addTagBtn;  // $scope.$apply();
        });
        //右侧text
        $rootScope.$on('setRightTextBtn', function (e, textBtn) {
          $scope.textBtn = textBtn;  // $scope.$apply();
        });
        $scope.goMessageTag = function () {
          $$log.debug('\u8df3\u5230\u9996\u9875');
          //点击跳过,跳到首页
          var t = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/messageTag';
          $$log.debug(t);
          jumpPage(t);
          function jumpPage(p) {
            location.href = p;
          }
        };  //-----------to-dongsj
            // //右侧按钮显示为icon
            // $rootScope.$on('setRightIconBtn', function (e, iconNum) {
            //     $scope.iconNum = iconNum;
            // });
            //
            // //右侧text
            // $rootScope.$on('setRightTextBtn', function (e, textBtn) {
            //     $scope.textBtn = textBtn;
            // });
      }
    ]
  };
});
/**
 * Created by dongsj on 16/7/16.
 */
app.directive('tabbarController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/common/tabbarController.html',
    replace: true,
    scope: { active: '@active' },
    controller: [
      '$$shence',
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$rootScope',
      '$timeout',
      '$state',
      function ($$shence, $scope, $element, $attrs, $$log, $rootScope, $timeout, $state) {
        $scope.active = $scope.active || 0;
        $scope.newMsgsActive = [
          false,
          false,
          false,
          false
        ];
        $scope.gotoPage = function (page) {
          switch (page) {
          case 0:
            location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/messageTag';
            break;
          case 1:
            if ($state.current.name == 'messageTag') {
              location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/show/allPatientList';
            } else {
              $state.go('allPatientList', { operateType: 'show' });
            }
            break;
          case 2:
            if ($state.current.name == 'messageTag') {
              location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/toolList';
            } else {
              $state.go('toolList');
            }
            break;
          case 3:
            if ($state.current.name == 'messageTag') {
              location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/userCenter';
            } else {
              $state.go('userCenter');
            }
            break;
          }
        };
        $rootScope.$on('tabbarChange', function (e, index) {
          scrollTo(0, 0);
          $scope.active = index;
          $timeout(function () {
            $scope.$apply();
          });
          $timeout(function () {
            $scope.$apply();
          }, 1000);  // $scope.$apply();
        });
        $rootScope.$on('setTabbarNewMsg', function (e, index, msgStatus) {
          $scope.newMsgsActive[index] = msgStatus;
          $timeout(function () {
            $scope.$apply();
          });
        });
        $$log.debug('tabbarController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by dongsj on 16/8/10.
 * tabbar
 * *********************
 * $$tabbar.show
 * 显示tabbar
 *
 * $$tabbar.hide
 * 隐藏tabbar
 *
 */
app.factory('$$tabbar', [
  '$$log',
  '$rootScope',
  function ($$log, $rootScope) {
    return {
      hide: function () {
        $rootScope.$emit('tabbarChange', -1);
      },
      setIndex: function (index) {
        $rootScope.$emit('tabbarChange', index);
        $$log.debug('tabbarChange' + index);
      },
      setNewMsg: function (index, msgStatus) {
        $$log.debug('setNewMsg' + index + ':' + msgStatus !== false);
        $rootScope.$emit('setTabbarNewMsg', index, msgStatus !== false);
      }
    };
  }
]);
/**
 * Created by dongsj on 16/8/10.
 * toast
 * *********************
 * $$toast.show
 * 显示toast
 *
 */
app.factory('$$toast', [
  '$$log',
  '$rootScope',
  function ($$log, $rootScope) {
    return {
      show: function (msg, callback) {
        if (callback === undefined) {
          callback = function () {
          };
        }
        $$log.debug('$$toast.show');
        $$log.info(msg);
        $$log.info(callback);
        $rootScope.$emit('toastShow', msg, callback);
      }
    };
  }
]);
app.directive('toastController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/common/toastController.html',
    replace: true,
    scope: {},
    controller: [
      '$rootScope',
      '$timeout',
      '$sce',
      '$scope',
      function ($rootScope, $timeout, $sce, $scope) {
        var showTime = 3000;
        $scope.showBlock = false;
        $scope.msg = '';
        $rootScope.$on('toastShow', function (e, msg, callback) {
          $scope.showBlock = true;
          $scope.msg = $sce.trustAsHtml(msg);
          // $scope.$apply();
          $timeout(function () {
            $scope.showBlock = false;
            $scope.msg = '';
            // $scope.$apply();
            if (callback) {
              callback();
            }
          }, showTime);
        });
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/14.
 */
var basicInfoObject = {
    'id': 0,
    'name': '',
    'organizationId': '',
    'organizationName': '',
    'departmentId': '',
    'departmentName': '',
    'professionalTitle': '',
    'avatarUrl': '',
    'phone': ''
  };
var basicInfo = {
    'hospital': '',
    'office': ''
  };
app.directive('basicInfoController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/basicInfoController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$$env',
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$$toast',
      '$http',
      '$$requestUrl',
      '$$loading',
      '$rootScope',
      '$$iconfont',
      function ($$env, $scope, $element, $attrs, $$log, $state, $$toast, $http, $$requestUrl, $$loading, $rootScope, $$iconfont) {
        if (basicInfoObject.name.length === 0 || basicInfoObject.professionalTitle.length === 0) {
          $scope.name = '';
          $scope.professionalTitle = '';
          $scope.hospitalName = '';
          $scope.departmentName = '';
          $scope.avatarUrl = '';
        } else {
          $scope.name = basicInfoObject.name;
          $scope.professionalTitle = basicInfoObject.professionalTitle;
          $('#id-1-img').attr('src', basicInfoObject.avatarUrl);
        }
        //跳页面选择值
        function getValueArr(valueArr) {
          switch (valueArr) {
          case 'hospitalObj':
            $$log.debug('hospitalObj');
            $$log.debug(hospitalObj);
            $scope.hospitalName = hospitalObj.organizationName;
            $scope.hospitalId = hospitalObj.organizationId;
            break;
          case 'departmentObj':
            $scope.departmentName = departmentObj.departmentName;
            $scope.departmentId = departmentObj.departmentId;
            break;
          }
        }
        //页面在加载时读取orderArr,attentionObjArr,classArr,remindArr
        getValueArr('hospitalObj');
        getValueArr('departmentObj');
        $scope.goChoiceHospital = function () {
          basicInfoObject.name = $scope.name;
          basicInfoObject.professionalTitle = $scope.professionalTitle;
          basicInfoObject.avatarUrl = $('#id-1-img').attr('src');
          basicInfo.hospital = true;
          $state.go('choiceHospital');
        };
        //跳转选择科室页面
        $scope.goChoiceDepartment = function () {
          if ($scope.hospitalName === '' || $scope.hospitalName === undefined) {
            $$toast.show('\u8bf7\u5148\u9009\u62e9\u6240\u5728\u533b\u9662');
          } else {
            basicInfoObject.name = $scope.name;
            basicInfoObject.professionalTitle = $scope.professionalTitle;
            basicInfoObject.avatarUrl = $('#id-1-img').attr('src');
            basicInfo.office = true;
            $state.go('choiceDepartment', { 'hospitalId': $scope.hospitalId });
          }
        };
        //上传头像
        $scope.changeUserHead = function () {
          function guid() {
            function s4() {
              return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          }
          var file = document.getElementById('id-1-file').files[0];
          var localUrl = document.getElementById('id-1-file').files[0].name;
          function getFileName(o) {
            var pos = o.lastIndexOf('.');
            // var last = pos.lastIndexOf(".");
            return o.substring(pos + 1);
          }
          var postfix = getFileName(localUrl);
          var storeAs = 'avatar/' + guid() + '.' + postfix;
          $$log.debug('$$env');
          $$log.debug($$env.getEnvirement());
          var bucket = '';
          var urlStr = '';
          if ($$env.getEnvirement() == 1) {
            $$log.debug('dev 1');
            bucket = 'yhjstatic-dev';
            urlStr = 'http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/';
          } else if ($$env.getEnvirement() == 2) {
            $$log.debug('pro 2');
            bucket = 'yhjstatic';
            urlStr = 'http://yhjstatic.oss-cn-shanghai.aliyuncs.com/';
          }
          $$log.debug('bucket' + bucket);
          $$log.debug('ulrStr' + urlStr);
          var client = new OSS.Wrapper({
              region: 'oss-cn-shanghai',
              accessKeyId: 'LTAICadISGBAyskk',
              accessKeySecret: 'TSnzCdIizqqW1QdW7VxbBJYStaMeZj',
              bucket: bucket
            });
          $$loading.show();
          client.multipartUpload(storeAs, file).then(function (result) {
            var url = urlStr + result.name + '?x-oss-process=image/resize,h_500';
            $$log.debug('\u8fd4\u56de\u7684\u56fe\u7247\u8def\u5f84\u4e3a\uff1a' + url);
            $scope.headImgUrl = url;
            document.getElementById('id-1-img').src = url;
            $scope.avatarUrl = document.getElementById('id-1-img').src;
            $$loading.hide();
          }).catch(function (err) {
            $$loading.hide();
            $$toast.show('\u4e0a\u4f20\u5931\u8d25\uff01\u8bf7\u91cd\u65b0\u4e0a\u4f20');
            $$log.debug(err);
          });
        };
        $('#id-1-img').on('click', function () {
          var id = $(this).attr('id');
          console.log(id);
          $('#id-1-file').trigger('click');
        });
        $scope.nextTwoUser = function () {
          $scope.avatarUrl = $('#id-1-img').attr('src');
          $$log.debug('$scope.avatarUrl' + $scope.avatarUrl);
          var isHospitalNameNull = $scope.hospitalName == '' || typeof $scope.hospitalName == 'undefined';
          var isDepartmentNameNull = $scope.departmentName == '' || typeof $scope.departmentName == 'undefined';
          $$log.debug('departmentName' + isHospitalNameNull);
          $$log.debug('isDepartmentNameNull' + isDepartmentNameNull);
          if ($scope.name == '' || $scope.professionalTitle == '' || isHospitalNameNull || isDepartmentNameNull) {
            $$toast.show('\u8bf7\u68c0\u67e5\u4fe1\u606f\u518d\u63d0\u4ea4');
            return false;
          } else {
            basicInfoObject = {
              'id': parseInt(localStorage.globalNurseId),
              'name': $scope.name,
              'organizationId': $scope.hospitalId,
              'organizationName': $scope.hospitalName,
              'departmentId': $scope.departmentId,
              'departmentName': $scope.departmentName,
              'professionalTitle': $scope.professionalTitle,
              'avatarUrl': $scope.avatarUrl,
              'phone': globalNursePhone.toString()
            };
            $http({
              method: 'PATCH',
              url: $$requestUrl.getUrl('createBasicInfo', { 'nurseId': localStorage.globalNurseId }),
              data: { 'basic': basicInfoObject }
            }).success(function (response) {
              if (response.result.success === true) {
                $state.go('professionInfo');
                $$log.debug('creatBasicInfo');
                $$log.info(response);
                localStorage.globalDepartmentId = $scope.departmentId;
                localStorage.department = $scope.departmentName;
                localStorage.hospital = $scope.hospitalName;
                localStorage.hospitalId = $scope.hospitalId;
              } else {
                $$toast.show(response.result.displayMsg.toString() ? response.result.displayMsg.toString() : '\u670d\u52a1\u5668\u6254\u8fc7\u6765\u4e00\u4e2a\u9519\u8bef');
              }
            });
          }
        };
        localStorage.globalDepartmentId = $scope.departmentId;
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/20.
 */
app.directive('beforeRecordController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/beforeRecordController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $rootScope, $$iconfont) {
        //$scope.iconfont = $$iconfont.init;
        $scope.phone = '';
        $scope.identifyCode = '';
        $scope.password = '';
        $scope.count = -1;
        $$log.debug('beforeRecordController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by gaoqz on 16/11/10.
 */
app.directive('blackListController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/blackListController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$timeout',
      '$$loading',
      '$$txIM',
      '$$toast',
      '$http',
      '$$requestUrl',
      '$state',
      '$$title',
      '$$confirm',
      function ($scope, $element, $attrs, $$log, $timeout, $$loading, $$txIM, $$toast, $http, $$requestUrl, $state, $$title, $$confirm) {
        $scope.blackListTagId = [];
        $scope.patientBlackList = [];
        for (var i = 0; i < $scope.data.user.length; i++) {
          var member = [];
          for (var j = 0; j < $scope.data.user[i].member.length; j++) {
            if ($scope.data.user[i].member[j].tag !== undefined) {
              for (var k = 0; k < $scope.data.user[i].member[j].tag.length; k++) {
                if ($scope.data.user[i].member[j].tag[k].tagType == 3) {
                  member.push($scope.data.user[i].member[j]);
                  break;
                }
              }
            }
          }
          $scope.patientBlackList.push({
            'member': member,
            'title': $scope.data.user[i].title
          });
        }
        $scope.patientBlackList = $scope.patientBlackList.filter(function (item) {
          return item.member.length > 0 && item.title != '\u7279\u522b\u5173\u6ce8';
        });
        $scope.onEditClick = function () {
          if ($scope.patientBlackList.length > 0) {
            $scope.isEdit = true;
          }
        };
        $scope.onCheckSelfClick = function (user, member) {
          if ($scope.isEdit === true) {
            member.sel = !member.sel;
          }
        };
        $scope.onRemovePatientClick = function (patient) {
          $scope.isEdit = false;
          var data = [];
          for (var i = 0; i < patient.length; i++) {
            for (var j = 0; j < patient[i].member.length; j++) {
              var userTag = [];
              if (patient[i].member[j].sel === true) {
                var tags = [];
                for (var k = 0; k < patient[i].member[j].tag.length; k++) {
                  if (patient[i].member[j].tag[k].tagType !== 3) {
                    tags.push({ 'tagId': patient[i].member[j].tag[k].tagId });
                  }
                }
                userTag = {
                  'userId': patient[i].member[j].userId,
                  'tag': tags
                };
              }
            }
            data.push(userTag);
          }
          if (data.length < 1) {
            $$toast.show('\u8bf7\u9009\u62e9\u8981\u79fb\u51fa\u79d1\u5ba4\u9ed1\u540d\u5355\u7684\u60a3\u8005');
            return false;
          }
          for (var i = 0; i < data.length; i++) {
            if (data[i].userId == undefined) {
              data.splice(i, 1);
              i--;
            }
          }
          $$loading.show();
          $http({
            method: 'PATCH',
            url: $$requestUrl.getUrl('removeBlackList'),
            data: { 'userTag': data }
          }).success(function (response) {
            $$loading.hide();
            if (response.result.success === true) {
              $$toast.show('\u79fb\u51fa\u9ed1\u540d\u5355\u6210\u529f');
              // history.go(-1);
              for (var i = 0; i < patient.length; i++) {
                for (var j = 0; j < patient[i].member.length; j++) {
                  for (var k = 0; k < data.length; k++) {
                    if (patient[i].member[j].userId == data[k].userId) {
                      patient[i].member.splice(j, 1);
                      j--;
                      break;
                    }
                  }
                }
              }
              for (var m = 0; m < patient.length; m++) {
                if (patient[m].member.length < 1) {
                  patient.splice(m, 1);
                  m--;
                }
              }
              var ls = { time: 0 };
              localStorage['allPatientList'] = JSON.stringify(ls);
            }
          });
        };
        $scope.onCancelRemoveClick = function (patient) {
          $scope.isEdit = false;
          for (var i = 0; i < patient.length; i++) {
            for (var j = 0; j < patient[i].member.length; j++) {
              if (patient[i].member[j].sel === true) {
                patient[i].member[j].sel = false;
              }
            }
          }
        };
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/18.
 */
app.directive('changeInfoController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/changeInfoController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $rootScope, $$iconfont) {
        //$scope.iconfont = $$iconfont.init;
        $scope.phone = '';
        $scope.identifyCode = '';
        $scope.password = '';
        $scope.count = -1;
        $$log.debug('changeInfoController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by dongsj on 16/8/16.
 */
app.directive('chatController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/chatController.html',
    replace: true,
    scope: {},
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$timeout',
      '$$loading',
      '$$txIM',
      '$$toast',
      '$state',
      '$$title',
      '$$confirm',
      function ($scope, $element, $attrs, $$log, $timeout, $$loading, $$txIM, $$toast, $state, $$title, $$confirm) {
        // $scope.targetUserId = sessionStorage.saveChatTargetId;
        // $scope.targetUserHead = sessionStorage.saveChatTargetHead;
        // $scope.targetNickname = sessionStorage.saveChatTargetNickname;
        // $scope.myUserId = sessionStorage.saveChatMyId;
        // $scope.myUserSig = sessionStorage.saveChatMySig;
        // $scope.myUserHead = sessionStorage.saveChatMyHead;
        // var defaultUserHead = 'http://123.57.52.12:7963/img/userHead.jpg';
        // $scope.myUserHead = sessionStorage.saveChatMyHead || defaultUserHead;
        // $scope.targetUserHead = $scope.targetUserHead || defaultUserHead;
        $$loading.show();
        $scope.msg = '';
        $scope.rows = 1;
        // $scope.msgArray = localStorage['chatList:'+localStorage.targetChatId]==undefined?[]:JSON.parse(localStorage['chatList:'+localStorage.targetChatId]);
        $scope.msgArray = [];
        $scope.updateGroupInfo = function () {
          if (localStorage.targetChatId.indexOf('@') >= 0) {
            $$confirm.show({
              title: '\u4fee\u6539\u7fa4\u7ec4\u540d\u79f0',
              msg: '<input class="h3 border-line border-color-global-base" type="text">',
              callback: function () {
                var name = $('.confirm').find('input').val();
                $$txIM.updateGroupInfo(localStorage.targetChatId, name, function () {
                  $$title.setTitle(name + '(' + $('.titleContent').html().split('(')[1]);
                }, function () {
                });
              },
              confirmText: '\u786e\u5b9a',
              cancelText: '\u53d6\u6d88'
            });
          }
        };
        $scope.gotoMsgTag = function () {
          location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/messageTag';
        };
        var addMsg = function (msg) {
          $$log.log('addMsg');
          $$log.debug(msg);
          var msgEle = $$txIM.createMsgEle(msg, false);
          if (!msgEle) {
            return false;
          }
          for (var i = 0; i < $scope.msgArray.length; i++) {
            if ($scope.msgArray[i].fullTime == msgEle.fullTime && $scope.msgArray[i].fromAccount == msgEle.fromAccount && $scope.msgArray[i].msg == msgEle.msg) {
              return false;
            }
          }
          $scope.msgArray.push(msgEle);
          $scope.$apply();
          // if (myChatInfo.id != msg.fromAccount) {
          $$txIM.saveLastMsg(msgEle);
          $$txIM.markReadLastMsg(localStorage.targetChatId);
          $$txIM.setRead(localStorage.targetChatId);
          // }
          $scope.iscroll.refresh();
          $scope.iscroll.scrollToElement('.msgBlock:last-of-type', 0);
          localStorage['chatList:' + localStorage.targetChatId] = JSON.stringify($scope.msgArray);
        };
        var listeners = {
            'onMsgNotify': function (newMsgList) {
              for (var i = 0; i < newMsgList.length; i++) {
                if (newMsgList[i].fromAccount != myChatInfo.id && newMsgList[i].sess._impl.id == localStorage.targetChatId) {
                  addMsg(newMsgList[i]);
                }
              }
            }
          };
        function loadHistory() {
          $$txIM.getHistoryMsgs(function (resp) {
            $$txIM.markReadLastMsg(localStorage.targetChatId);
            var msgEle;
            for (var i = resp.length - 1; i >= 0; i--) {
              msgEle = $$txIM.createMsgEle(resp[i], false);
              if (!msgEle) {
                continue;
              }
              var inArray = false;
              for (var j = 0; j < $scope.msgArray.length; j++) {
                if ($scope.msgArray[j].fullTime == msgEle.fullTime && $scope.msgArray[j].fromAccount == msgEle.fromAccount && $scope.msgArray[j].msg == msgEle.msg) {
                  inArray = true;
                }
              }
              if (!inArray) {
                $scope.msgArray.unshift(msgEle);
              }
            }
            for (i = resp.length - 1; i >= 0; i--) {
              msgEle = $$txIM.createMsgEle(resp[i], false);
              if (msgEle != false && msgEle != undefined && msgEle.type != undefined) {
                $$txIM.saveLastMsg(msgEle);
                $$txIM.setRead(localStorage.targetChatId);
                break;
              }
            }
            $scope.$apply();
            $scope.iscroll.refresh();
            $scope.iscroll.scrollToElement('.msgBlock:last-of-type', 0);
            $$txIM.sendIMArray(function (resp) {
              for (var i = resp.length - 1; i >= 0; i--) {
                var msgEle = $$txIM.createMsgEle(resp[i], false);
                if (!msgEle) {
                  continue;
                }
                $scope.msgArray.push(msgEle);
              }
              $scope.$apply();
              $scope.iscroll.refresh();
              $scope.iscroll.scrollToElement('.msgBlock:last-of-type', 0);
            });
            $$txIM.saveLastMsg($scope.msgArray[$scope.msgArray.length - 1]);
          });
        }
        $$txIM.login(listeners, function () {
          $timeout(function () {
            $$loading.hide();
          }, 1000);
          $scope.myUserId = myChatInfo.id;
          $scope.msgArray = [];
          $$txIM.markReadLastMsg(myChatInfo.id, localStorage.targetChatId);
          if (localStorage.targetChatId.indexOf('@') < 0) {
            $$log.debug('C2C');
            $$log.debug(localStorage.targetChatId);
            $$txIM.getC2CInfo([localStorage.targetChatId], function (resp) {
              for (var i = 0; i < resp.UserProfileItem[0].ProfileItem.length; i++) {
                if (resp.UserProfileItem[0].ProfileItem[i].Tag == 'Tag_Profile_IM_Nick') {
                  $$title.setTitle(resp.UserProfileItem[0].ProfileItem[i].Value);
                  break;
                }
              }
            });
            $$txIM.syncC2CMsgs(function (newMsgList) {
              // if (newMsgList.length >= 15) {
              for (var i = 0; i < newMsgList.length; i++) {
                if (newMsgList[i].sess._impl.id == localStorage.targetChatId) {
                  addMsg(newMsgList[i]);
                }
              }
              if ($scope.msgArray.length < 15) {
                loadHistory();
              }
              $scope.iscroll.refresh();
              $scope.iscroll.scrollToElement('.msgBlock:last-of-type', 0);  // }
                                                                            // else {
                                                                            // }
            });
          } else {
            loadHistory();
          }
        }, function () {
        });
        $scope.sendMsg = function () {
          if ($scope.msg.trim() !== '') {
            $$txIM.sendTextMsg($scope.msg, localStorage.targetChatId, function (msg) {
              addMsg(msg);
              // $('#msg').val('');
              $scope.msg = '';
              $scope.rows = 1;
              $timeout(function () {
                $scope.$apply();
              });  // $('textarea').trigger('change');
            }, function () {
              // $('#msg').val('');
              $scope.msg = '';
              $scope.rows = 1;
              $timeout(function () {
                $scope.$apply();
              });  // $('textarea').trigger('change');
            });
          }
        };
        $scope.sendEle = function () {
          localStorage.pushPatient = localStorage.targetChatId;
          location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/patientPushObj/contentList';  // $state.go('contentList', {operateType: 'patientPushObj'});
                                                                                                                                        // var targetArray = ['test1', 'test3'];
                                                                                                                                        // var eleArray = [
                                                                                                                                        //     {
                                                                                                                                        //         type: 'type1',
                                                                                                                                        //         id: '1',
                                                                                                                                        //         name: 'name1',
                                                                                                                                        //         desc: '1descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc',
                                                                                                                                        //         img: 'img'
                                                                                                                                        //     },
                                                                                                                                        //     {
                                                                                                                                        //         type: 'type2',
                                                                                                                                        //         id: '2',
                                                                                                                                        //         name: 'name2',
                                                                                                                                        //         desc: '2descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc',
                                                                                                                                        //         img: 'img'
                                                                                                                                        //     }
                                                                                                                                        // ];
                                                                                                                                        // $$txIM.initImArrayAndSend(targetArray,eleArray);
                                                                                                                                        // $$txIM.sendElementMsg(
                                                                                                                                        //     {
                                                                                                                                        //         type: 'type1',
                                                                                                                                        //         id: '1',
                                                                                                                                        //         name: 'name',
                                                                                                                                        //         desc: 'descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc',
                                                                                                                                        //         img: 'img'
                                                                                                                                        //     },localStorage.targetChatId, function (msg) {
                                                                                                                                        //         addMsg(msg);
                                                                                                                                        //     },
                                                                                                                                        //     function () {
                                                                                                                                        //     });
        };
        $scope.showTime = function (msg) {
          var index = $scope.msgArray.indexOf(msg);
          if (index === 0) {
            return true;
          }
          return $scope.msgArray[index].fullTime - $scope.msgArray[index - 1].fullTime >= 60 * 5;
        };
        $timeout(function () {
          $scope.iscroll = new IScroll('.chatMsg');
        });
        $$log.debug('chatController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by dongsj on 16/9/19.
 */
app.directive('chatListController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/chatListController.html',
    replace: true,
    scope: {},
    controller: [
      '$scope',
      '$$log',
      '$$txIM',
      '$$toast',
      '$state',
      '$interval',
      function ($scope, $$log, $$txIM, $$toast, $state, $interval) {
        $scope.goChat = function (chat) {
          localStorage.targetChatId = chat.chatId;
          imChatType = chat.type;
          // location.href = location.href.split('#')[0] + '#/chat';
          location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/chat';
        };
        var addMsg = function (msg) {
          var msgEle = $$txIM.createMsgEle(msg, true);
          if (!msgEle) {
            return false;
          }
          $$log.debug('add');
          $$log.info(msgEle);
          for (var i = 0; i < $scope.chatList.length; i++) {
            if ($scope.chatList[i].chatId == msgEle.sessId && msgEle.fullTime > $scope.chatList[i].lastMsg.fullTime || $scope.chatList[i].chatId == msgEle.sessId && $scope.chatList[i].lastMsg.fullTime == undefined) {
              $$log.debug('add2');
              $$log.info(msgEle);
              $$log.info($scope.chatList[i].lastMsg);
              $scope.chatList[i].lastMsg = msgEle;
              $scope.chatList[i].lastMsgTime = msgEle.fullTime;
              $$log.debug('finded');
              $$log.info(msgEle);
              localStorage.chatList = JSON.stringify($scope.chatList);
              $scope.$apply();
            }
            if ($scope.chatList[i].chatId == msgEle.sessId) {
              localStorage.chatList = JSON.stringify($scope.chatList);
              return false;
            }
          }  // $$toast.show('您有新的好友');
             // $$log.debug('new friend');
             // $$log.info(msg);
             // $scope.initList();
             // location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/messageTag';
        };
        var listeners = {
            'onMsgNotify': function (newMsgList) {
              try {
                for (var i = 0; i < newMsgList.length; i++) {
                  addMsg(newMsgList[i]);
                }
              } catch (e) {
                $$log.debug('page error');  // $$toast.show('您有新的消息');
                                            // $scope.initList();
                                            // location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/messageTag';
              }
            }
          };
        $scope.initList = function () {
          $$txIM.login(listeners, function () {
            $$txIM.sendIMArray();
            $$txIM.getAllFriend(function (resp) {
              var inChatList = false;
              for (var i = 0; i < resp.InfoItem.length; i++) {
                inChatList = false;
                for (var j = 0; j < $scope.chatList.length; j++) {
                  if ($scope.chatList[j].chatId == resp.InfoItem[i].Info_Account) {
                    inChatList = true;
                    var newMsg = $$txIM.loadLastMsg($scope.chatList[j].chatId);
                    if ($scope.chatList[j].lastMsg.type == 'empty' || newMsg.fullTime > $scope.chatList[j].lastMsg.fullTime) {
                      $scope.chatList[j].lastMsg = newMsg;
                    }
                  }
                }
                if (!inChatList) {
                  $scope.chatList.push({
                    chatId: resp.InfoItem[i].Info_Account,
                    name: resp.InfoItem[i].SnsProfileItem[0].Value,
                    type: 'C2C',
                    lastMsg: $$txIM.loadLastMsg(resp.InfoItem[i].Info_Account),
                    lastMsgTime: $$txIM.loadLastMsg(resp.InfoItem[i].Info_Account).fullTime,
                    memberNum: 0
                  });  // localStorage.chatList = JSON.stringify($scope.chatList);
                }
              }
              $$log.debug('C2C list loaded');
              $$log.info($scope.chatList);
              $$txIM.syncC2CMsgs(function (resp) {
                $$log.debug('C2C syncC2CMsgs');
                for (var i = 0; i < resp.length; i++) {
                  addMsg(resp[i]);
                }
              });
              localStorage.chatList = JSON.stringify($scope.chatList);
              $scope.$apply();
            });
            $$txIM.getAllGroup(function (resp) {
              var inChatList = false;
              for (var i = 0; i < resp.GroupIdList.length; i++) {
                inChatList = false;
                for (var j = 0; j < $scope.chatList.length; j++) {
                  if ($scope.chatList[j].chatId == resp.GroupIdList[i].GroupId) {
                    inChatList = true;
                    var newMsg = $$txIM.loadLastMsg($scope.chatList[j].chatId);
                    if ($scope.chatList[j].lastMsg.type == 'empty' || newMsg.fullTime > $scope.chatList[j].lastMsg.fullTime) {
                      $scope.chatList[j].lastMsg = newMsg;
                    }
                  }
                }
                if (!inChatList) {
                  $scope.chatList.push({
                    chatId: resp.GroupIdList[i].GroupId,
                    name: resp.GroupIdList[i].Name,
                    type: 'GROUP',
                    lastMsg: $$txIM.loadLastMsg(resp.GroupIdList[i].GroupId),
                    lastMsgTime: $$txIM.loadLastMsg(resp.GroupIdList[i].GroupId).fullTime,
                    memberNum: resp.GroupIdList[i].MemberNum
                  });
                }
                // groupIds.push(resp.GroupIdList[i].GroupId);
                $$txIM.syncGROUPLastMsgs(resp.GroupIdList[i].GroupId, function (resp) {
                  for (var i = 0; i < resp.length; i++) {
                    addMsg(resp[i]);
                  }
                });
              }
              $$log.debug('GROUP list loaded');
              $$log.info($scope.chatList);
              localStorage.chatList = JSON.stringify($scope.chatList);
              $scope.$apply();
            });
          });
        };
        $scope.chatList = $$txIM.loadList();
        $scope.initList();
        $interval(function () {
          $scope.initList();
        }, 60000);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/19.
 */
var classArr = [];
var colorName = 'green';
var isAddOrder = true;
app.directive('choiceClassController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/choiceClassController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      '$location',
      '$stateParams',
      function ($scope, $element, $attrs, $$log, $state, $interval, $http, $$requestUrl, $$toast, $rootScope, $$iconfont, $location, $stateParams) {
        if ($stateParams.operateType == 'add') {
          $scope.isAdd = true;
        } else {
          $scope.isAdd = false;
        }
        if ($scope.data.roster != undefined && $scope.data.roster.length > 0) {
          if (classArr.length > 0) {
            for (var i = 0; i < $scope.data.roster.length; i++) {
              for (var j = 0; j < classArr.length; j++) {
                if ($scope.data.roster[i].id == classArr[j].id) {
                  $scope.data.roster[i].sel = true;
                } else {
                  // $scope.data.roster[i].sel = false;
                  $scope.data.roster[i].sel = $scope.data.roster[i].sel || false;
                }
              }
            }
          } else {
            for (var m = 0; m < $scope.data.roster.length; m++) {
              $scope.data.roster[m].sel = false;
            }
          }
        }
        $scope.chooseOrder = function (rosters) {
          rosterData = rosters;
          $state.go('setOrder', { operateType: rosters.id });
        };
        $scope.confirmRoster = function () {
          classArr = [];
          for (var n = 0; n < $scope.data.roster.length; n++) {
            if ($scope.data.roster[n].sel === true) {
              classArr.push($scope.data.roster[n]);
            }
          }
          history.go(-1);
        };
        $$log.debug('choiceClassController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/23.
 */
app.directive('choiceColorController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/choiceColorController.html',
    replace: true,
    scope: {},
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$$color',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      function ($scope, $element, $attrs, $$log, $$color, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $rootScope, $$iconfont) {
        $scope.obj = obj;
        $scope.selColor = function (className) {
          colorName = className;
          isAddOrder = false;
          history.go(-1);
        };
        $$log.debug('choiceColorController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/23.
 */
var remindArr = [];
app.directive('choiceDayController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/choiceDayController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $rootScope, $$iconfont) {
        $scope.alertClick = function (alert) {
          if (remindArr.length >= 1) {
            remindArr = [];
          }
          remindArr.push(alert);
          history.go(-1);
        };
        $$log.debug('choiceDayController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/24.
 */
var departmentObj = {};
var aletrNurseInfoOffice = {};
app.directive('choiceDepartment', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/choiceDepartmentController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      '$stateParams',
      '$$confirm',
      function ($scope, $element, $attrs, $$log, $state, $interval, $http, $$requestUrl, $$toast, $rootScope, $$iconfont, $stateParams, $$confirm) {
        $scope.dataArr = $scope.data.organization;
        for (var i = 0; i < $scope.dataArr.length; i++) {
          if ($scope.dataArr[i].organizationId == $stateParams.hospitalId) {
            $scope.dataFilter = $scope.dataArr[i].department;
          }
        }
        //newDepartment
        $scope.newDepartment = function () {
          $$confirm.show({
            title: '\u6dfb\u52a0\u79d1\u5ba4',
            msg: '<input class="h3 border-line border-color-global-base padding-left-md" style="width:80%;" type="text">',
            callback: function () {
              var name = $('.confirm').find('input').val();
              if ($scope.dataFilter === undefined || $scope.dataFilter.length === 0) {
                $scope.dataFilter = [];
              }
              if (name === '') {
                $$toast.show('\u8bf7\u8f93\u5165\u79d1\u5ba4\u540d\u79f0\uff01');
                return false;
              }
              $http({
                method: 'POST',
                url: $$requestUrl.getUrl('createDepartment'),
                data: {
                  'organizationId': parseInt($stateParams.hospitalId),
                  'departmentName': name
                }
              }).success(function (response) {
                if (response.result.success === true) {
                  $scope.dataFilter.push(response.department);
                  $('.confirm').find('input').val('');
                } else {
                  $$toast.show(response.result.displayMsg);
                }
                return response;
              });
            },
            confirmText: '\u786e\u5b9a',
            cancelText: '\u53d6\u6d88'
          });
        };
        //selDepartment
        $scope.selDepartment = function (department) {
          var ls = { time: 0 };
          if (localStorage['allPatientList'] == undefined) {
            localStorage['allPatientList'] = JSON.stringify(ls);
          }
          if (localStorage['nurseList'] == undefined) {
            localStorage['nurseList'] = JSON.stringify(ls);
          }
          aletrNurseInfoOffice = {};
          departmentObj = {};
          if (basicInfo.office) {
            departmentObj = department;
          } else {
            aletrNurseInfoOffice = department;
          }
          history.go(-1);
        };
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/24.
 */
var hospitalObj = {};
var aletrNurseInfoHospital = {};
app.directive('choiceHospitalController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/choiceHospitalController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$$confirm',
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      function ($$confirm, $scope, $element, $attrs, $$log, $state, $interval, $http, $$requestUrl, $$toast, $rootScope) {
        hospitalObj = {};
        aletrNurseInfoHospital = {};
        $scope.dataArr = $scope.data.organization;
        $scope.selHospital = function (hospital) {
          var ls = { time: 0 };
          if (localStorage['allPatientList'] == undefined) {
            localStorage['allPatientList'] = JSON.stringify(ls);
          }
          if (localStorage['nurseList'] == undefined) {
            localStorage['nurseList'] = JSON.stringify(ls);
          }
          $$log.debug('\u9009\u4e2d\u7684hospital');
          $$log.debug(hospital);
          if (basicInfo.hospital) {
            hospitalObj = hospital;
            departmentObj = {};
          } else {
            aletrNurseInfoHospital = hospital;
            aletrNurseInfoOffice = {};
          }
          history.go(-1);
        };
        $scope.addHospital = function () {
          $$confirm.show({
            title: '\u6dfb\u52a0\u533b\u9662',
            msg: '<input class="h3 border-line border-color-global-base padding-left-md" type="text" style="width:80%;">',
            callback: function () {
              var name = $('.confirm').find('input').val();
              if (name === '') {
                $$toast.show('\u8bf7\u8f93\u5165\u533b\u9662\u540d\uff01');
                return false;
              }
              $http({
                method: 'POST',
                url: $$requestUrl.getUrl('createHospital'),
                data: { 'organizationName': name }
              }).success(function (response) {
                if (response.result.success === true) {
                  $scope.dataArr.push(response.organization);
                  $('.confirm').find('input').val('');
                } else {
                  $$toast.show(response.result.displayMsg);
                }
                return response;
              });
            },
            confirmText: '\u786e\u5b9a',
            cancelText: '\u53d6\u6d88'
          });
        };
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/19.
 */
var templateObj = {};
app.directive('choiceVisitController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/choiceVisitController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      function ($scope, $element, $attrs, $$log, $state, $http, $$requestUrl, $$toast, $rootScope, $$iconfont) {
        globalTemplateData = {};
        newSelPushTemplate = [];
        $scope.followClick = function (follow) {
          templateObj = follow;
          history.go(-1);
        };
        //点击编辑的随访模板
        $scope.editTemplate = function () {
          $state.go('editVisit', { operateType: 'show' });
        };
        //点击新建随访模板
        $scope.newUser = function (follow) {
          $state.go('setTemplate', { operateType: 'new' });
        };
        $$log.debug('choiceVisitController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/10/10.
 */
var rosterData;
app.directive('classListController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/classListController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      '$location',
      '$stateParams',
      function ($scope, $element, $attrs, $$log, $state, $interval, $http, $$requestUrl, $$toast, $rootScope, $$iconfont, $location, $stateParams) {
        $scope.listClass = function (index) {
          rosterData = $scope.data.roster[index];
          $state.go('setOrder', { 'operateType': 'orderId' });
        };
        $$log.debug('classListController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/19.
 */
app.directive('doVisitController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/doVisitController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $rootScope, $$iconfont) {
        $scope.phone = '';
        $scope.identifyCode = '';
        $scope.password = '';
        $scope.count = -1;
        $$log.debug('doVisitController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/20.
 */
var delCalender = [];
var admissionTime = null;
var sortType;
app.directive('dutyCalendarController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/dutyCalendarController.html',
    replace: true,
    scope: {
      data: '=data',
      weekOffset: '=weekOffset'
    },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$$loading',
      '$rootScope',
      '$$iconfont',
      '$stateParams',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $$loading, $rootScope, $$iconfont, $stateParams) {
        // //判断
        $scope.nums = [];
        if ($scope.data.scheduleByPerson != undefined && $scope.data.scheduleByPerson.length > 0) {
          $scope.dateNum = $scope.data.scheduleByPerson[0].data;
          for (var i = 0; i < $scope.data.scheduleByPerson.length; i++) {
            var d = [];
            for (var j = 0; j < $scope.data.scheduleByPerson[i].data.length; j++) {
              d.push($scope.data.scheduleByPerson[i].data[j].rosterIds.length);
            }
            d.sort(function (m, n) {
              return n - m;
            });
            $scope.nums.push(d[0]);
          }
        }
        $scope.nowTimeDay = new Date().format('yyyy-MM-dd').split('-')[2];
        $scope.nowTimeMonth = new Date().format('yyyy-MM-dd').split('-')[1];
        admissionTime = null;
        remindArr = [];
        //点击向上的按钮
        $scope.prevWeek = function () {
          $scope.weekOffset = parseInt($scope.weekOffset) - 1;
          getData($scope.weekOffset);
        };
        //点击向下的按钮
        $scope.nextWeek = function () {
          $scope.weekOffset = parseInt($scope.weekOffset) + 1;
          getData($scope.weekOffset);
        };
        function getData(weekOffset) {
          $$loading.show();
          $http({
            method: 'GET',
            url: $$requestUrl.getUrl('changeSchedulePersonStateController', { 'departmentId': localStorage.globalDepartmentId }),
            params: { 'weekOffset': weekOffset }
          }).success(function (response) {
            $$loading.hide();
            if (response.result.success === true) {
              $scope.data = response;
              if ($scope.data.scheduleByPerson != undefined && $scope.data.scheduleByPerson.length > 0) {
                $scope.nums = [];
                $scope.dateNum = $scope.data.scheduleByPerson[0].data;
                $scope.nowTime = new Date($scope.data.scheduleByPerson[0].data[0].date).format('yyyy\u5e74MM\u6708');
                for (var i = 0; i < $scope.data.scheduleByPerson.length; i++) {
                  var d = [];
                  for (var j = 0; j < $scope.data.scheduleByPerson[i].data.length; j++) {
                    d.push($scope.data.scheduleByPerson[i].data[j].rosterIds.length);
                  }
                  d.sort(function (m, n) {
                    return n - m;
                  });
                  $scope.nums.push(d[0]);
                }
                for (var q = 0; q < $scope.data.scheduleByPerson.length; q++) {
                  if ($scope.data.scheduleByPerson[q].personId == localStorage.globalNurseId) {
                    var personIdData = $scope.data.scheduleByPerson[q];
                    $scope.data.scheduleByPerson.splice(q, 1);
                    $scope.data.scheduleByPerson.unshift(personIdData);
                  }
                }
              }
            } else {
              response.result.displayMsg ? $$toast.show(response.result.displayMsg) : $$toast.show('\u52a0\u8f7d\u5931\u8d25');
            }
            $$log.debug('dutyCalendarWeekOffsetData');
            $$log.info(response);
          });
        }
        $scope.routerToMessageTag = function () {
          $state.go('messageTag');
        };
        //点击td
        $scope.editShedule = function (list, index) {
          sortType = 'dutyCalendar';
          admissionTime = list.data[index].date;
          orderObjArr = [{
              member: {
                name: list.name,
                id: list.personId
              },
              delObj: list.data[index].rosterScheduleIds
            }];
          //rosterIds中找班次的rosterId;然后拿出来
          classArr = [], delCalender = [];
          for (var i = 0; i < list.data[index].rosterIds.length; i++) {
            for (var j = 0; j < $scope.data.rosters.length; j++) {
              if ($scope.data.rosters[j].rosterId == list.data[index].rosterIds[i]) {
                delCalender.push({
                  rosterId: list.data[index].rosterIds[i],
                  title: $scope.data.rosters[j].name
                });
                break;
              }
            }
          }
          for (var m = 0; m < list.data[index].rosterIds.length; m++) {
            for (var n = 0; n < $scope.data.rosters.length; n++) {
              if ($scope.data.rosters[n].rosterId == list.data[index].rosterIds[m]) {
                classArr.push({
                  id: list.data[index].rosterIds[m],
                  title: $scope.data.rosters[n].name
                });
                break;
              }
            }
          }
          $state.go('sort', { operateType: 'alert' });
          $$log.debug('dutyCalendarController');
          $$log.info($scope);
        };
        //排序
        for (var q = 0; q < $scope.data.scheduleByPerson.length; q++) {
          if ($scope.data.scheduleByPerson[q].personId == localStorage.globalNurseId) {
            var personIdData = $scope.data.scheduleByPerson[q];
            $scope.data.scheduleByPerson.splice(q, 1);
            $scope.data.scheduleByPerson.unshift(personIdData);
            console.log($scope.data.scheduleByPerson);
          }
        }
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/26.
 */
app.directive('dutyChangeController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/dutyChangeController.html',
    replace: true,
    scope: {
      data: '=data',
      weekOffset: '=weekOffset'
    },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$$loading',
      '$rootScope',
      '$$iconfont',
      '$stateParams',
      function ($scope, $element, $attrs, $$log, $state, $interval, $http, $$requestUrl, $$toast, $$loading, $rootScope, $$iconfont, $stateParams) {
        $scope.nums = [];
        if ($scope.data.scheduleByRoster != undefined && $scope.data.scheduleByRoster.length > 0) {
          $scope.dateNum = $scope.data.scheduleByRoster[0].data;
          for (var i = 0; i < $scope.data.scheduleByRoster.length; i++) {
            var d = [];
            for (var j = 0; j < $scope.data.scheduleByRoster[i].data.length; j++) {
              d.push($scope.data.scheduleByRoster[i].data[j].executors.length);
            }
            d.sort(function (m, n) {
              return n - m;
            });
            $scope.nums.push(d[0]);
          }
        }
        $scope.nowTimeDay = new Date().format('yyyy-MM-dd').split('-')[2];
        $scope.nowTimeMonth = new Date().format('yyyy-MM-dd').split('-')[1];
        admissionTime = null;
        //点击向上的按钮
        $scope.prevWeek = function () {
          $scope.weekOffset = parseInt($scope.weekOffset) - 1;
          getData($scope.weekOffset);
        };
        //点击向下的按钮
        $scope.nextWeek = function () {
          $scope.weekOffset = parseInt($scope.weekOffset) + 1;
          getData($scope.weekOffset);
        };
        function getData(weekOffset) {
          $$loading.show();
          $http({
            method: 'GET',
            url: $$requestUrl.getUrl('changeScheduleClassStateController', { 'departmentId': localStorage.globalDepartmentId }),
            params: { 'weekOffset': weekOffset }
          }).success(function (response) {
            $$loading.hide();
            if (response.result.success === true) {
              $scope.data = response;
              if ($scope.data.scheduleByRoster != undefined && $scope.data.scheduleByRoster.length > 0) {
                $scope.nums = [];
                $scope.dateNum = $scope.data.scheduleByRoster[0].data;
                $scope.nowTime = new Date($scope.data.scheduleByRoster[0].data[0].date).format('yyyy\u5e74MM\u6708');
                for (var i = 0; i < $scope.data.scheduleByRoster.length; i++) {
                  var d = [];
                  for (var j = 0; j < $scope.data.scheduleByRoster[i].data.length; j++) {
                    d.push($scope.data.scheduleByRoster[i].data[j].executors.length);
                  }
                  d.sort(function (m, n) {
                    return n - m;
                  });
                  $scope.nums.push(d[0]);
                }
              }
            } else {
              response.result.displayMsg ? $$toast.show(response.result.displayMsg) : $$toast.show('\u52a0\u8f7d\u5931\u8d25');
            }
            $$log.debug('dutyChangeWeekOffsetData');
            $$log.info(response);
          });
        }
        $scope.routerToMessageTag = function () {
          $state.go('messageTag');
        };
        //点击排班按钮
        $scope.setShedules = function (list, row) {
          //不能点击
          return false;
          sortType = 'dutyChange';
          admissionTime = row.date;
          orderObjArr = [], classArr = [], delCalender = [];
          classArr.push({
            id: list.rosterId,
            title: list.name
          });
          delCalender.push({
            rosterId: list.rosterId,
            title: list.name
          });
          for (var i = 0; i < row.executors.length; i++) {
            orderObjArr.push({
              member: {
                'id': row.executors[i].personId,
                'name': row.executors[i].name
              },
              delObj: [row.executors[i].rosterScheduleId]
            });
          }
          $state.go('sort', { operateType: 'alert' });
        };
        $$log.debug('dutyChangeController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/21.
 */
app.directive('dutyListController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/dutyListController.html',
    replace: true,
    scope: {
      data: '=data',
      showDetail: '=showDetail',
      patientTag: '=patientTag',
      patientId: '=patientId',
      weekOffset: '=weekOffset'
    },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$$loading',
      '$$title',
      '$rootScope',
      '$$iconfont',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $$loading, $$title, $rootScope, $$iconfont) {
        console.log($scope.data);
        //判断
        if ($scope.data.scheduleByPerson != undefined && $scope.data.scheduleByPerson.length > 0) {
          $scope.dateNum = $scope.data.scheduleByPerson[0].data;
        }
        $scope.selRoster = $scope.data.rosters != undefined && $scope.data.rosters.length > 0 ? $scope.data.rosters[0].rosterId : -1;
        $scope.nowTimeDay = new Date().format('yyyy-MM-dd').split('-')[2];
        $scope.nowTimeMonth = new Date().format('yyyy-MM-dd').split('-')[1];
        admissionTime = null;
        $scope.changeSelRoster = function (selId) {
          $scope.selRoster = selId;
        };
        $$title.setTitle('\u6279\u91cf\u6392\u73ed' + '\uff08' + new Date($scope.data.scheduleByPerson[0].data[0].date).format('MM') + '\u6708' + '\uff09');
        //点击向上的按钮
        $scope.prevWeek = function () {
          // $state.go('dutyList', {weekOffset: parseInt($scope.weekOffset) - 1});
          $scope.weekOffset = parseInt($scope.weekOffset) - 1;
          getData($scope.weekOffset);
        };
        //点击向下的按钮
        $scope.nextWeek = function () {
          // $state.go('dutyList', {weekOffset: parseInt($scope.weekOffset) + 1});
          $scope.weekOffset = parseInt($scope.weekOffset) + 1;
          getData($scope.weekOffset);
        };
        //点击完成按钮
        $scope.dutyList = function () {
          $state.go('dutyCalendar');
        };
        function getData(weekOffset) {
          $$loading.show();
          $http({
            method: 'GET',
            url: $$requestUrl.getUrl('batchSchedulesStateController', { 'departmentId': localStorage.globalDepartmentId }),
            params: { 'weekOffset': parseInt(weekOffset) }
          }).success(function (response) {
            $$loading.hide();
            if (response.result.success === true) {
              $scope.data = response;
              $scope.dateNum = $scope.data.scheduleByPerson[0].data;
              $$title.setTitle('\u6279\u91cf\u6392\u73ed' + '\uff08' + new Date($scope.data.scheduleByPerson[0].data[0].date).format('MM') + '\u6708' + '\uff09');
              //排序
              for (var q = 0; q < $scope.data.scheduleByPerson.length; q++) {
                if ($scope.data.scheduleByPerson[q].personId == localStorage.globalNurseId) {
                  var personData = $scope.data.scheduleByPerson[q];
                  $scope.data.scheduleByPerson.splice(q, 1);
                  $scope.data.scheduleByPerson.unshift(personData);
                  console.log($scope.data.scheduleByPerson);
                }
              }
            } else {
              response.result.displayMsg ? $$toast.show(response.result.displayMsg) : $$toast.show('\u52a0\u8f7d\u5931\u8d25');
            }
            $$log.debug('dutyListWeekOffsetData');
            $$log.info(response);
          });
        }
        $scope.routerToMessageTag = function () {
          history.go(-1);
        };
        // 点击td
        $scope.changeShedule = function (list, idx, index) {
          if ($scope.selRoster < 0) {
            $$toast.show('\u8bf7\u65b0\u5efa\u73ed\u6b21');
            return false;
          }
          if (list.data[index].rosterIds.indexOf($scope.selRoster) > -1) {
            $$loading.show();
            $http({
              method: 'DELETE',
              url: $$requestUrl.getUrl('dropSchedule', { 'rosterScheduleIds': list.data[index].rosterScheduleIds[list.data[index].rosterIds.indexOf($scope.selRoster)] })
            }).success(function (response) {
              $$loading.hide();
              if (response.result.success === true) {
                list.data[index].rosterScheduleIds.remove(list.data[index].rosterIds.indexOf($scope.selRoster));
                list.data[index].rosterIds.remove(list.data[index].rosterIds.indexOf($scope.selRoster));
              } else {
                $$toast.show(response.result.displayMsg);
              }
              var ls = { time: 0 };
              localStorage['changeScheduleClassStateController'] = JSON.stringify(ls);
              localStorage['batchSchedulesStateController'] = JSON.stringify(ls);
              localStorage['changeSchedulePersonStateController'] = JSON.stringify(ls);
              $$log.debug('deleteClass');
              $$log.info(response);
            });
          } else {
            $$loading.show();
            $http({
              method: 'POST',
              url: $$requestUrl.getUrl('createSchedule', { 'rosterScheduleId': list.data[index].rosterScheduleIds[list.data[index].rosterIds.indexOf($scope.selRoster)] }),
              data: {
                rosterId: $scope.selRoster,
                executorId: list.personId,
                date: list.data[index].date
              }
            }).success(function (response) {
              $$loading.hide();
              if (response.result.success === true) {
                list.data[index].rosterScheduleIds.push(response.id);
                if (list.data[index].rosterIds.indexOf($scope.selRoster) == -1) {
                  list.data[index].rosterIds.push($scope.selRoster);
                }
              } else {
                $$toast.show(response.result.displayMsg);
              }
              var ls = { time: 0 };
              localStorage['changeScheduleClassStateController'] = JSON.stringify(ls);
              localStorage['batchSchedulesStateController'] = JSON.stringify(ls);
              localStorage['changeSchedulePersonStateController'] = JSON.stringify(ls);
              $$log.debug('createSchedule');
              $$log.info(response);
            });
          }
        };
        // //滚动条 90 140
        if ($scope.data.rosters != undefined && $scope.data.rosters.length > 0) {
          var len = $scope.data.rosters.length, row;
          if (len % 5 === 0) {
            row = len / 5;
          } else {
            row = parseInt(len / 5 + 1);
          }
          $('table').css('margin-top', row * 1.6 + 3 + 'rem');
        }
        //排序
        for (var q = 0; q < $scope.data.scheduleByPerson.length; q++) {
          if ($scope.data.scheduleByPerson[q].personId == localStorage.globalNurseId) {
            var personData = $scope.data.scheduleByPerson[q];
            $scope.data.scheduleByPerson.splice(q, 1);
            $scope.data.scheduleByPerson.unshift(personData);
            console.log($scope.data.scheduleByPerson);  // $scope.data.scheduleByPerson[q].unshift($scope.data.scheduleByPerson[q].personId);
          }
        }
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/19.
 */
app.directive('editVisitController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/editVisitController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$stateParams',
      function ($scope, $element, $attrs, $$log, $state, $interval, $http, $$requestUrl, $$toast, $rootScope, $stateParams) {
        if ($stateParams.operateType == 'add') {
          $scope.isAdd = true;
        } else {
          $scope.isAdd = false;
        }
        $scope.goSetTemplate = function (follow) {
          globalTemplateData = follow;
          $state.go('setTemplate', { 'operateType': follow.templateId });
        };
        $scope.newTemplate = function () {
          globalTemplateData = {};
          $state.go('setTemplate', { 'operateType': 'new' });
        };
        $$log.debug('editVisitControl$$$ler');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by dongsj on 16/10/27.
 */
app.directive('guidePageController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/guidePageController.html',
    replace: true,
    scope: {},
    controller: [
      '$timeout',
      '$scope',
      function ($timeout, $scope) {
        var swiper;
        // localStorage.clear();
        $scope.selIndex = 0;
        localStorage.guided = 'true';
        $timeout(function () {
          swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            onSlideNextStart: function () {
              $scope.selIndex++;
              $timeout(function () {
                $scope.$apply();
              });
            },
            onSlidePrevStart: function () {
              $scope.selIndex--;
              $timeout(function () {
                $scope.$apply();
              });
            }
          });
        });
        $scope.next = function () {
          swiper.slideNext();
        };
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/14.
 */
var globalNursePhone = '';
app.directive('loginController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/loginController.html',
    replace: true,
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$getClientInfo',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      '$$loading',
      '$$shence',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$getClientInfo, $$toast, $rootScope, $$iconfont, $$loading, $$shence) {
        //$scope.iconfont = $$iconfont.init;
        $scope.phone = '';
        $scope.identifyCode = '';
        $scope.password = '';
        $scope.count = 0;
        // localStorage.clear();
        $scope.checkPhone = function () {
          if ($scope.phone.toString().length == 0) {
            $$toast.show('\u8f93\u5165\u7684\u7535\u8bdd\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a');
          } else {
            if ($scope.phone.toString().length < 11) {
              $$toast.show('\u8f93\u5165\u7684\u7535\u8bdd\u53f7\u7801\u4e0d\u6b63\u786e');
            } else {
              $$loading.show();
              $http({
                method: 'POST',
                url: $$requestUrl.getUrl('getLoginPhoneCaptcha'),
                data: { 'phone': $scope.phone.toString() }
              }).success(function (response) {
                if (typeof response.result.success != 'undefined') {
                  $$loading.hide();
                }
                $$log.info(response);
                if (response.result.success == true) {
                  // 倒计时
                  $scope.count = 60;
                  if ($scope.count > 0) {
                    $scope.countDown = $interval(function () {
                      $scope.count--;
                      $$log.debug($scope.count);
                    }, 1000, 60);
                  }
                } else {
                  $$toast.show(response.result.displayMsg);
                }
              });
            }
          }
        };
        //点击登录
        $scope.nextUser = function () {
          if ($scope.phone.toString().length <= 0 || $scope.identifyCode.toString().length <= 0) {
            $$toast.show('\u8bf7\u68c0\u67e5\u518d\u63d0\u4ea4');
            return false;
          } else {
            //别在倒计时了
            $$loading.show();
            //登录
            var phone = $scope.phone;
            var captcha = $scope.identifyCode;
            localStorage.phone = phone.toString();
            $http({
              method: 'post',
              url: $$requestUrl.getUrl('signIn'),
              data: {
                'phone': phone.toString(),
                'captcha': captcha.toString()
              }
            }).success(function (response) {
              if (typeof response.result.success != 'undefined') {
                $$loading.hide();
              }
              if (response.result.success == false) {
                $$toast.show('\u9a8c\u8bc1\u7801\u9519\u8bef');
                return false;
              } else {
                $interval.cancel($scope.countDown);
                $$log.info(response);
                localStorage.token = response.token;
                localStorage.globalNurseId = response.nurse.id;
                localStorage.authorizedStatus = response.nurse.authorizedStatus;
                // $$shence.identify(response.nurse.id);
                $$log.debug('response.nurse.phone' + response.nurse.phone);
                $$log.debug(' phone.toString()' + phone.toString());
                globalNursePhone = response.nurse.phone ? response.nurse.phone : phone.toString();
                $$log.debug('localStorage.token:' + localStorage.token);
                $$log.debug('LocalStorage.globalNurseId:' + localStorage.globalNurseId);
                $$log.debug('globalNursePhone:' + globalNursePhone);
                // 新用户
                if (response.newly === true) {
                  $state.go('basicInfo');
                } else {
                  if (typeof response.nurse.departmentId != 'undefined' && response.nurse.departmentId != '') {
                    localStorage.globalDepartmentId = response.nurse.departmentId;
                  } else {
                    $$log.debug('localStorage.globalDepartmentId is null');
                  }
                  if (typeof response.nurse.departmentName != 'undefined' && response.nurse.departmentName != '') {
                    localStorage.department = response.nurse.departmentName;
                  } else {
                    $$log.debug('localStorage.department is null');
                  }
                  if (typeof response.nurse.organizationName != 'undefined' && response.nurse.organizationName != '') {
                    localStorage.hospital = response.nurse.organizationName;
                  } else {
                    $$log.debug('localStorage.hospital is null');
                  }
                  if (typeof response.nurse.organizationId != 'undefined' && response.nurse.organizationId != '') {
                    localStorage.hospitalId = response.nurse.organizationId;
                  } else {
                    $$log.debug('localStorage.hospitalId is null');
                  }
                  $http({
                    method: 'POST',
                    url: $$requestUrl.getUrl('createDeviceClient'),
                    data: {
                      'personId': localStorage.globalNurseId,
                      'cid': $$getClientInfo.clientid
                    }
                  }).success(function (response) {
                    if (response.result.success == false) {
                      // $$toast.show(response.result.displayMsg ? response.result.displayMsg.toString() : '服务器扔过来一个错误');
                      localStorage.gloalIsGetDeviceID = false;
                    } else {
                      localStorage.gloalIsGetDeviceID = true;
                    }
                    var t = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/messageTag';
                    jumpPage(t);
                    function jumpPage(p) {
                      location.href = p;
                    }
                  });
                }
              }
            });
          }
        };
      }
    ]
  };
});
/**
 * Created by yihuan on 2016/11/9.
 */
app.directive('nurseTagManageController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/nurseTagManageController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$loading',
      '$$confirm',
      function ($scope, $element, $attrs, $$log, $state, $interval, $http, $$requestUrl, $$toast, $rootScope, $$loading, $$confirm) {
        $scope.searchKey = '';
        $scope.isSearch = false;
        // var flag = 0;
        if (typeof $scope.data.tag != 'undefined') {
          for (var j = 0; j < $scope.data.tag.length; j++) {
            $scope.data.tag[j].isShow = true;  // if($scope.data.tag[j].tagType > 1){
                                               //     flag++;
                                               // }
                                               // $$log.debug('flag'+flag);
                                               // $$log.debug('$scope.data.tag.length'+$scope.data.tag.length);
                                               // if(flag == $scope.data.tag.length){
                                               //     $scope.data.tag.length = 0;
                                               // }
          }
        }
        //为护士添加标签
        $scope.onAddTag = function () {
          $$confirm.show({
            title: '\u6dfb\u52a0\u62a4\u58eb\u6807\u7b7e',
            msg: '<input class="h3 border-line border-color-global-base padding-left-md"  style="width:80%;" type="text">',
            callback: function () {
              var tags = [];
              var tagName = $('.confirm').find('input').val();
              if (tagName == '') {
                $$toast.show('\u6807\u7b7e\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01');
                return false;
              }
              tags.push({ 'tagName': tagName });
              $http({
                method: 'POST',
                url: $$requestUrl.getUrl('createNurseTagInManage'),
                data: { 'tag': tags }
              }).success(function (response) {
                if (response.result.success == true) {
                  if ($scope.data.tag == undefined) {
                    for (var i = 0; i < response.tag.length; i++) {
                      $scope.data.tag = [{
                          'tagId': response.tag[i].tagId,
                          'tagName': response.tag[i].tagName,
                          'tagType': response.tag[i].tagType,
                          'isShow': true
                        }];
                    }
                  } else {
                    for (var i = 0; i < response.tag.length; i++) {
                      $scope.data.tag.push({
                        'tagId': response.tag[i].tagId,
                        'tagName': response.tag[i].tagName,
                        'tagType': response.tag[i].tagType,
                        'isShow': true
                      });
                    }
                  }
                  $('.confirm').find('input').val('');
                  $$log.debug('111111');
                  $$log.debug($scope.data.tag);
                } else {
                  $$toast.show(response.result.displayMsg);
                }
              });
            },
            confirmText: '\u6dfb\u52a0',
            cancelText: '\u53d6\u6d88'
          });
        };
        //删除护士标签
        $scope.onDelTag = function (tag) {
          $$log.debug('tagId' + tag.tagId);
          $$confirm.show({
            title: '\u5220\u9664\u63d0\u793a',
            msg: '\u786e\u8ba4\u5220\u9664\u8be5\u62a4\u58eb\u6807\u7b7e\u5417',
            callback: function () {
              $$loading.show();
              var tags = [{ 'tagId': tag.tagId }];
              $http({
                method: 'POST',
                url: $$requestUrl.getUrl('deleteNurseTag'),
                data: { 'tag': tags }
              }).success(function (response) {
                if (typeof response.result.success != 'undefined') {
                  $$loading.hide();
                }
                if (response.result.success == true) {
                  tag.isShow = false;
                  $('.confirm').find('input').val('');
                  var ls = { time: 0 };
                  localStorage['nurseList'] = JSON.stringify(ls);
                } else {
                  $$toast.show(response.result.displayMsg);
                }
              });
            },
            confirmText: '\u786e\u5b9a',
            cancelText: '\u53d6\u6d88'
          });
        };
        //修改护士标签
        $scope.onAlterTag = function (tag) {
          $$log.debug('tagId' + tag.tagId);
          $$log.debug('tagId' + tag.tagName);
          //alertTag
          $$confirm.show({
            title: '\u4fee\u6539\u62a4\u58eb\u6807\u7b7e',
            msg: '<input id="alertTag" class="h3 border-line border-color-global-base padding-left-md" value="' + tag.tagName + '" style="width:80%;" type="text">',
            callback: function () {
              var tags = [];
              var tagName = $('#alertTag').val();
              if (tagName == '') {
                $$toast.show('\u6807\u7b7e\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01');
                return false;
              }
              tags.push({
                'tagId': tag.tagId,
                'tagName': tagName
              });
              $http({
                method: 'PATCH',
                url: $$requestUrl.getUrl('updateNurseTag'),
                data: { 'tag': tags }
              }).success(function (response) {
                if (response.result.success == true) {
                  for (var i = 0; i < response.tag.length; i++) {
                    for (var j = 0; j < $scope.data.tag.length; j++) {
                      if (response.tag[i].tagId == $scope.data.tag[j].tagId) {
                        $scope.data.tag[j] = {
                          isShow: true,
                          tagCategoryId: response.tag[i].tagCategoryId,
                          tagCategoryName: response.tag[i].tagCategoryName,
                          tagId: response.tag[i].tagId,
                          tagName: response.tag[i].tagName,
                          tagType: response.tag[i].tagType
                        };
                      }
                    }
                  }
                  $('.confirm').find('input').val('');
                  var ls = { time: 0 };
                  localStorage['nurseList'] = JSON.stringify(ls);
                } else {
                  $$toast.show(response.result.displayMsg);
                }
              });
            },
            confirmText: '\u786e\u8ba4',
            cancelText: '\u53d6\u6d88'
          });
        };
        //清空当前输入
        $scope.onClearInput = function () {
          $scope.searchKey = '';
        };
        //判断是否是查找状态
        $scope.onIsSearchStatus = function (juge) {
          $scope.isSearch = juge;
          if ($scope.isSearch == false) {
            $scope.searchKey = '';
          } else {
            $('.searchInput').focus();
          }
        };
      }
    ]
  };
});
/**
 * Created by yihuan on 16/9/18.
 */
var followPatientObj = {};
app.directive('patientListController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/patientListController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$$patientFilter',
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      '$stateParams',
      function ($$patientFilter, $scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $rootScope, $$iconfont, $stateParams) {
        $scope.searchKey = null;
        $scope.isSearch = false;
        $scope.isManage = localStorage.getItem('authorizedStatus') > 3 ? true : false;
        $scope.nurseType = localStorage.globalNurseId;
        if ($scope.data.result.success == false) {
          $scope.service = false;
          $$toast.show($scope.data.result.displayMsg);
          return false;
        } else {
          $scope.service = true;
        }
        switch ($stateParams.operateType) {
        case 'show':
          $scope.isSelect = false;
          $scope.inNum = 0;
          $scope.allNum = 0;
          if (typeof $scope.data.user != 'undefined') {
            for (var i = 0; i < $scope.data.user.length; i++) {
              if ($scope.data.user[i].member !== undefined) {
                $scope.allNum += $scope.data.user[i].member.length;
                for (var j = 0; j < $scope.data.user[i].member.length; j++) {
                  if ($scope.data.user[i].member[j].status !== 0) {
                    $scope.inNum++;
                  }
                }
              }
            }
          } else {
          }
          $scope.outNum = $scope.allNum - $scope.inNum;
          break;
        case 'selectFollowObj':
          $scope.isSelect = true;
          break;
        }
        $scope.operateType = $stateParams.operateType;
        if (typeof $scope.data.user != 'undefined' && $scope.isManage != true) {
          for (var i = 0; i < $scope.data.user.length; i++) {
            for (var j = 0; j < $scope.data.user[i].member.length; j++) {
              if (typeof $scope.data.user[i].member[j].tag != 'undefined') {
                $$log.debug('typeof $scope.data.user[i].member[j].tag ');
                $$log.debug(typeof $scope.data.user[i].member[j].tag != 'undefined');
                for (var k = 0; k < $scope.data.user[i].member[j].tag.length; k++) {
                  if ($scope.data.user[i].member[j].tag[k].tagType == 3) {
                    $scope.data.user[i].member[j].isBlack = true;
                    $$log.debug('$scope.data.user[i].member[j].isBlack');
                    $$log.debug($scope.data.user[i].member[j].isBlack);
                    break;
                  } else {
                    $scope.data.user[i].member[j].isBlack = false;
                  }
                }
              } else {
                $scope.data.user[i].member[j].isBlack = false;
              }
            }
          }
          for (var i = 0; i < $scope.data.user.length; i++) {
            $scope.data.user[i].isNull = false;
          }
          for (var i = 0; i < $scope.data.user.length; i++) {
            for (var j = 0; j < $scope.data.user[i].member.length; j++) {
              var flag = 0;
              if ($scope.data.user[i].member[j].isBlack == true) {
                flag = flag + 1;
                $$log.debug('flag' + flag);
                $$log.debug('$scope.data.user[i].member.length' + $scope.data.user[i].member.length);
                if (flag == $scope.data.user[i].member.length) {
                  $scope.data.user[i].isNull = true;
                }
              }
            }
          }
          // $scope.data.user =  $$patientFilter.getpatient($scope.data.user);
          $$log.debug('$scope.data.user');
          $$log.debug($scope.data.user);
        }
        $scope.patientData = $scope.data.user;
        //patientAllCheck
        $scope.patientAllCheck = function (patientData) {
          patientData.sel = patientData.sel == 2 ? 0 : 2;
          for (var i = 0; i < patientData.length; i++) {
            for (var j = 0; j < patientData[i].member.length; j++) {
              patientData[i].member[j].sel = patientData.sel == 2;
            }
          }
        };
        //checkPatientSelf
        $scope.checkPatientSelf = function (patientData, selfObj) {
          selfObj.sel = !selfObj.sel;
          followPatientObj = selfObj;
          history.go(-1);  // var selAll = true;
                           // var unselAll=true;
                           // for (var i = 0; i < patientData.length; i++) {
                           //     for(var j = 0 ; j < patientData[i].member.length ; j++){
                           //         if (patientData[i].member[j].sel === false) {
                           //             selAll = false;
                           //
                           //         }else{
                           //
                           //             unselAll=false;
                           //         }
                           //     }
                           // }
                           //
                           // if(selAll===true){
                           //     patientData.sel=2;
                           // }else if(unselAll===true){
                           //     patientData.sel=0;
                           // }else{
                           //     patientData.sel=1;
                           // }
        };
        //patientObj
        $scope.patientObj = function () {
          if (followPatientObj.length >= 1) {
            followPatientObj = [];
          }
          for (var i = 0; i < $scope.patientData.length; i++) {
            for (var j = 0; j < $scope.patientData[i].member.length; j++) {
              if ($scope.patientData[i].member[j].sel === true) {
                followPatientObj.push($scope.patientData[i].member[j]);
              }
            }
          }
          if (followPatientObj.length === 0) {
            $$toast.show('\u8bf7\u9009\u62e9\u968f\u8bbf\u5bf9\u8c61');
          } else {
            history.go(-1);
          }
        };
        //清空当前输入
        $scope.onClearInput = function () {
          $scope.searchKey = '';
        };
        //判断是否是查找状态
        $scope.onIsSearchStatus = function (juge) {
          $scope.isSearch = juge;
          if ($scope.isSearch == false) {
            $scope.searchKey = '';
          } else {
            $('.searchInput').focus();
          }
        };
      }
    ]
  };
});
/**
 * Created by gaoqz on 16/11/9.
 */
app.directive('patientRelationController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/patientRelationController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$$confirm',
      '$$toast',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$loading',
      '$rootScope',
      '$$iconfont',
      function ($scope, $$confirm, $$toast, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$loading, $rootScope, $$iconfont) {
        $scope.attentionIds = [];
        if (patientInfo.tag !== undefined) {
          for (var j = 0; j < patientInfo.tag.length; j++) {
            if (patientInfo.tag[j].tagType == 2 && localStorage.globalNurseId == patientInfo.tag[j].tagName) {
              $scope.isAttention = true;
            }
            if (patientInfo.tag[j].tagType == 3) {
              $scope.isBlackList = true;
            }
          }
        } else {
          $scope.isAttention = false;
          $scope.isBlackList = false;
        }
        if (patientInfo.departmentTag !== undefined && patientInfo.departmentTag.tag !== undefined) {
          for (var i = 0; i < patientInfo.departmentTag.tag.length; i++) {
            for (var j = 0; j < patientInfo.departmentTag.tag[i].tag.length; j++) {
              if (patientInfo.departmentTag.tag[i].tag[j].tagType == 3) {
                $scope.blackListTagId = { 'tagId': patientInfo.departmentTag.tag[i].tag[j].tagId };
              }
              if (patientInfo.departmentTag.tag[i].tag[j].tagType == 2) {
                $scope.attentionIds.push(patientInfo.departmentTag.tag[i].tag[j]);
              }
            }
          }
        }
        $scope.onChangeAttentionClick = function () {
          var data = [];
          if ($scope.isBlackList == true) {
            $$toast.show('\u8bf7\u5148\u5c06\u8be5\u60a3\u8005\u79fb\u51fa\u79d1\u5ba4\u9ed1\u540d\u5355\uff0c\u7136\u540e\u6dfb\u52a0\u5173\u6ce8');
            return false;
          }
          $$loading.show();
          if (patientInfo.tag !== undefined) {
            for (var i = 0; i < patientInfo.tag.length; i++) {
              if (patientInfo.tag[i].tagName != localStorage.globalNurseId && patientInfo.tag[i].tagType != 3) {
                data.push({ 'tagId': patientInfo.tag[i].tagId });
              }
            }
          }
          if ($scope.isAttention != true) {
            data.push({ 'tagId': -1 });
          }
          $http({
            method: 'PATCH',
            url: $$requestUrl.getUrl('attentionTagStateController', { 'nurseId': patientInfo.userId }),
            data: { 'tag': data }
          }).success(function (response) {
            $$loading.hide();
            if (response.result.success === true) {
              var content = $scope.isAttention != true ? '\u6dfb\u52a0\u5173\u6ce8\u6210\u529f' : '\u53d6\u6d88\u5173\u6ce8\u6210\u529f';
              $scope.isAttention = $scope.isAttention != true ? true : false;
              $$toast.show(content);
              var ls = { time: 0 };
              localStorage['allPatientList'] = JSON.stringify(ls);  // history.go(-1);
            }
          });
        };
        $scope.onChangeStatusClick = function () {
          if (localStorage.authorizedStatus !== '4' && localStorage.authorizedStatus !== '5') {
            $$toast.show('\u60a8\u6ca1\u6709\u6743\u9650\u8fdb\u884c\u6b64\u64cd\u4f5c');
            return false;
          }
          ;
          if ($scope.isBlackList !== true) {
            var msg;
            if ($scope.attentionIds.length > 0) {
              msg = '\u8be5\u60a3\u8005\u5df2\u7ecf\u88ab' + $scope.attentionIds.length + '\u4f4d\u62a4\u58eb\u5173\u6ce8\uff0c\u52a0\u5165\u79d1\u5ba4\u9ed1\u540d\u5355\u5c06\u53d6\u6d88\u6240\u6709\u5173\u6ce8\uff0c\u786e\u5b9a\u52a0\u5165\u79d1\u5ba4\u9ed1\u540d\u5355\u5417\uff1f';
            } else {
              msg = '\u52a0\u5165\u79d1\u5ba4\u9ed1\u540d\u5355\u5c06\u53d6\u6d88\u6240\u6709\u5173\u6ce8\uff0c\u786e\u5b9a\u52a0\u5165\u79d1\u5ba4\u9ed1\u540d\u5355\u5417\u5417\uff1f';
            }
            $$confirm.show({
              title: '\u91cd\u8981\u63d0\u793a',
              msg: msg,
              callback: function () {
                httpRequest();
              },
              confirmText: '\u786e\u5b9a',
              cancelText: '\u53d6\u6d88'
            });
          } else {
            httpRequest();
          }
        };
        var httpRequest = function () {
          var data = [];
          if (patientInfo.tag !== undefined) {
            for (var i = 0; i < patientInfo.tag.length; i++) {
              if (patientInfo.tag[i].tagType != 2 && patientInfo.tag[i].tagType != 3) {
                data.push({ 'tagId': patientInfo.tag[i].tagId });
              }
            }
          }
          if ($scope.isBlackList != true) {
            data.push($scope.blackListTagId);
          }
          $$loading.show();
          $http({
            method: 'PATCH',
            url: $$requestUrl.getUrl('blackListTagStateController', { 'nurseId': patientInfo.userId }),
            data: { 'tag': data }
          }).success(function (response) {
            $$loading.hide();
            if (response.result.success === true) {
              var content = $scope.isBlackList != true ? '\u52a0\u5165\u79d1\u5ba4\u9ed1\u540d\u5355\u6210\u529f' : '\u79fb\u51fa\u79d1\u5ba4\u9ed1\u540d\u5355\u6210\u529f';
              $scope.isBlackList = $scope.isBlackList != true ? true : false;
              $scope.isAttention = $scope.isBlackList == true ? false : $scope.isBlackList;
              $$toast.show(content);
              var ls = { time: 0 };
              localStorage['allPatientList'] = JSON.stringify(ls);  // history.go(-1);
            }
          });
        };
      }
    ]
  };
});
/**
 * Created by yihuan on 2016/11/9.
 */
app.directive('patientTagManageController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/patientTagManageController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$$confirm',
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$$loading',
      function ($$confirm, $scope, $element, $attrs, $$log, $state, $interval, $http, $$requestUrl, $$toast, $$loading) {
        $$log.debug('data');
        $$log.debug($scope.data);
        $scope.isDelState = false;
        $scope.isSearch = false;
        $scope.searchKey = '';
        $scope.searchTag = null;
        $scope.searchJuge = null;
        if ($scope.data.tag != undefined) {
          for (var j = 0; j < $scope.data.tag.length; j++) {
            for (var k = 0; k < $scope.data.tag[j].tag.length; k++) {
              $scope.data.tag[j].tag[k].isShow = true;
              var flag = 0;
              if ($scope.data.tag[j].tag[k].tagType < 2) {
                flag++;
              }
              $$log.debug('flag' + flag);
              $$log.debug('$scope.data.tag[j].tag[k].length' + $scope.data.tag[j].tag.length);
              if (flag > 0) {
                $scope.data.tag[j].isShow = true;
              } else {
                $scope.data.tag[j].isShow = false;
              }
            }
            var juge = 0;
            if ($scope.data.tag[j].isShow == false) {
              juge++;
            }
            if (juge == $scope.data.tag.length) {
              $scope.data.tag.length = 0;
            }
          }
        }
        //清空当前输入
        $scope.onClearInput = function () {
          $scope.searchKey = '';
        };
        //判断是否是查找状态
        $scope.onIsSearchStatus = function (juge) {
          $scope.isSearch = juge;
          if ($scope.isSearch == false) {
            $scope.searchKey = '';
          } else {
            $('.searchInput').focus();
          }
        };
        //修改标签
        $scope.onAlertTag = function (tag, tagObj) {
          $$log.debug('tag.tagId' + tag.tagId);
          //删除标签
          if ($scope.isDelState) {
            $$confirm.show({
              title: '\u5220\u9664\u63d0\u793a',
              msg: '\u786e\u8ba4\u5220\u9664\u8be5\u6807\u7b7e\u5417\uff1f',
              callback: function () {
                $http({
                  method: 'POST',
                  url: $$requestUrl.getUrl('deletePatientTag'),
                  data: { 'tag': { 'tagId': tag.tagId } }
                }).success(function (response) {
                  // $$toast.show('删除');
                  // $$toast.show(JSON.stringify(response));
                  if (response.result.success == true) {
                    $('.confirm').find('input').val('');
                    //删除
                    tag.isShow = false;
                    var flag = 0;
                    for (var j = 0; j < tagObj.tag.length; j++) {
                      if (tagObj.tag[j].isShow == true) {
                        flag++;
                      }
                      if (flag > 0) {
                        tagObj.isShow = true;
                      } else {
                        tagObj.isShow = false;
                      }
                    }
                    var ls = { time: 0 };
                    localStorage['allPatientList'] = JSON.stringify(ls);
                  } else {
                    $$toast.show(response.result.displayMsg);
                  }
                });
              },
              confirmText: '\u786e\u8ba4',
              cancelText: '\u53d6\u6d88'
            });
          } else {
            //获取当前标签的名称
            $$log.debug('tag.tagName' + tag.tagName);
            $$log.debug('tag.tagId' + tag.tagId);
            //获取当前标签
            $$confirm.show({
              title: '\u4fee\u6539\u60a3\u8005\u6807\u7b7e',
              msg: '<input class="h3 border-line border-color-global-base padding-left-md" value="' + tag.tagName + '" style="width:80%;" type="text">',
              callback: function () {
                var tags = [];
                var tagName = $('.confirm').find('input').val();
                $$log.debug('tagName' + tagName);
                if (tagName == '') {
                  $$toast.show('\u6807\u7b7e\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01');
                  return false;
                }
                tags.push({
                  'tagId': tag.tagId,
                  'tagName': tagName
                });
                $http({
                  method: 'PATCH',
                  url: $$requestUrl.getUrl('updateDepartmentPatientTag'),
                  data: { 'tag': tags }
                }).success(function (response) {
                  // $$toast.show('修改');
                  // $$toast.show(JSON.stringify(response));
                  if (response.result.success == true) {
                    for (var i = 0; i < response.tag.length; i++) {
                      for (var j = 0; j < $scope.data.tag.length; j++) {
                        for (var k = 0; k < $scope.data.tag[j].tag.length; k++) {
                          $$log.debug('$scope.data.tag[j].tag[k].tagId' + $scope.data.tag[j].tag[k].tagId);
                          $$log.debug('response.tag[i].tagId' + response.tag[i].tagId);
                          $$log.debug($scope.data.tag[j].tag[k].tagId == response.tag[i].tagId);
                          if ($scope.data.tag[j].tag[k].tagId == response.tag[i].tagId) {
                            $scope.data.tag[j].tag[k].tagName = response.tag[i].tagName || tagName;
                            $$log.debug('$scope.data.tag[j].tag[k].tagName ' + $scope.data.tag[j].tag[k].tagName);
                          }
                        }
                      }
                    }
                    var ls = { time: 0 };
                    localStorage['allPatientList'] = JSON.stringify(ls);
                  } else {
                    $$toast.show(response.result.displayMsg);
                  }
                  $('.confirm').find('input').val('');
                });
              },
              confirmText: '\u786e\u8ba4',
              cancelText: '\u53d6\u6d88'
            });
          }
        };
        //添加标签
        $scope.onAddTag = function (tagObj) {
          $$confirm.show({
            title: '\u6dfb\u52a0\u6807\u7b7e',
            msg: '<input class="h3 border-line border-color-global-base padding-left-md" style="width:80%;" type="text">',
            callback: function () {
              $$log.debug(tagObj);
              var tagCategoryId = tagObj.tagCategoryId;
              // $$log.debug('categoryIdcategoryId');
              //
              // $$log.debug(categoryId);
              var name = $('.confirm').find('input').val();
              var tagsObj = [{
                    'tagName': name,
                    'tagCategoryId': tagCategoryId
                  }];
              $$log.debug('tagsObj');
              $$log.debug(tagsObj);
              if (name != '') {
                $$loading.show();
                $http({
                  method: 'POST',
                  url: $$requestUrl.getUrl('createPatientCategoryTag'),
                  data: { 'tag': tagsObj }
                }).success(function (response) {
                  if (response.result.success != 'undefined') {
                    $$loading.hide();
                  }
                  if (response.result.success === true) {
                    for (var i = 0; i < response.tag.length; i++) {
                      for (var j = 0; j < $scope.data.tag.length; j++) {
                        if ($scope.data.tag[j].tagCategoryId == response.tag[i].tagCategoryId) {
                          $scope.data.tag[j].isShow = true;
                          $scope.data.tag[j].tag.push({
                            'tagId': response.tag[i].tagId,
                            'tagName': response.tag[i].tagName,
                            'tagCategoryId': response.tag[i].tagCategoryId,
                            'tagCategoryName': response.tag[i].tagCategoryName,
                            'tagType': response.tag[i].tagType,
                            'isShow': true
                          });
                        }
                      }
                    }
                    $$log.debug('$scope.dataArr.departmentTag');
                    $$log.debug($scope.data.tag);
                    $('.confirm').find('input').val('');
                  } else {
                    var display = response.result.displayMsg;
                    $$toast.show(display.toString());
                  }
                  $$log.debug('createPatientCategoryTag');
                  $$log.info(response);
                  return response;
                });
              } else {
                $$toast.show('\u6570\u636e\u9879\u4e0d\u80fd\u4e3a\u7a7a');
              }
            },
            confirmText: '\u786e\u5b9a',
            cancelText: '\u53d6\u6d88'
          });
        };
        //添加分类
        $scope.onAddCategory = function () {
          $$confirm.show({
            title: '\u6dfb\u52a0\u5206\u7c7b',
            msg: '<label for="tagCategoryName">\u5206\u7c7b\uff1a</label><input style="margin-bottom:0.64rem;" id="tagCategoryName" class="h3 border-line border-color-global-base padding-left-md" type="text"><br/><label for="tagCategoryName">\u6807\u7b7e\uff1a</label><input id="tagName" class="h3 border-line border-color-global-base padding-left-md" type="text">' + '',
            callback: function () {
              var tagCategoryName = $('.confirm').find('#tagCategoryName').val();
              var tagName = $('.confirm').find('#tagName').val();
              $$log.debug(tagCategoryName);
              $$log.debug(tagName);
              var categoriesArr = [{
                    'tagId': null,
                    'tagName': tagName,
                    'tagCategoryId': null,
                    'tagCategoryName': tagCategoryName
                  }];
              $$log.debug('categoriesArr');
              $$log.debug(categoriesArr);
              if (tagCategoryName != '' && tagName != '') {
                $$loading.show();
                $http({
                  method: 'POST',
                  url: $$requestUrl.getUrl('createPatientTagCategory'),
                  data: { 'tag': categoriesArr }
                }).success(function (response) {
                  if (response.result.success == true) {
                    $$loading.hide();
                    $$log.debug(response.tag + 'response.tag');
                    if (response.tag.length > 0) {
                      for (var i = 0; i < response.tag.length; i++) {
                        if (typeof $scope.data.tag == 'undefined') {
                          $scope.data.tag = [{
                              tag: [{
                                  'tagId': response.tag[i].tagId,
                                  'tagName': response.tag[i].tagName,
                                  'tagCategoryId': response.tag[i].tagCategoryId,
                                  'tagCategoryName': response.tag[i].tagCategoryName,
                                  'tagType': response.tag[i].tagType,
                                  'isShow': true
                                }],
                              tagCategoryId: response.tag[i].tagCategoryId,
                              tagCategoryName: response.tag[i].tagCategoryName,
                              isShow: true
                            }];
                          $$log.debug('\u5f53\u524d\u7528\u6237\u7684$scope.dataArr.departmentTags\u4e3a\u7a7a\uff0c\u6dfb\u52a0\u540e\u7684$scope.dataArr.departmentTags\uff1a');
                          $$log.debug($scope.data.tag);
                        } else {
                          for (var j = 0; j < response.tag.length; j++) {
                            $scope.data.tag.push({
                              tag: [{
                                  'tagId': response.tag[i].tagId,
                                  'tagName': response.tag[i].tagName,
                                  'tagCategoryId': response.tag[i].tagCategoryId,
                                  'tagCategoryName': response.tag[i].tagCategoryName,
                                  'tagType': response.tag[i].tagType,
                                  'isShow': true
                                }],
                              tagCategoryId: response.tag[j].tagCategoryId,
                              tagCategoryName: response.tag[j].tagCategoryName,
                              isShow: true
                            });
                          }
                        }
                      }
                    }
                  } else {
                    var display = response.result.displayMsg;
                    $$toast.show(display.toString());
                  }
                  //clear
                  $('.confirm').find('#tagCategoryName').val('');
                  $('.confirm').find('#tagName').val('');
                  $$log.debug('createPatientTagCategory.response');
                  $$log.info(response);
                });
              } else {
                $$toast.show('\u6570\u636e\u9879\u4e0d\u80fd\u4e3a\u7a7a');
              }
            },
            confirmText: '\u786e\u5b9a',
            cancelText: '\u53d6\u6d88'
          });
        };
        //展示删除的状态
        $scope.onShowDelStatus = function () {
          $scope.isDelState = true;
        };
        //隐藏删除的状态
        $scope.onHideDelStatus = function () {
          $scope.isDelState = false;
        };
        //判断是否是子标签
        $scope.isTag = function (tagObj) {
          return tagObj.tagCategoryName.indexOf($scope.searchKey) >= -1 ? true : false;
        };
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/14.
 */
app.directive('professionInfoController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/professionInfoController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$$env',
      '$$loading',
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$http',
      '$$requestUrl',
      '$$toast',
      function ($$env, $$loading, $scope, $element, $attrs, $$log, $state, $http, $$requestUrl, $$toast) {
        $scope.IDNumber = '';
        $scope.practiceNum = '';
        $scope.technologyNum = '';
        $scope.otherName = '';
        $scope.otherNum = '';
        $scope.numAllrr = [2];
        $scope.numArrLength = 1;
        $scope.photocopyArr = [];
        $scope.imgArray = [];
        function bindPicInput(id) {
          //trigger触发input
          $('' + id + '-file').trigger('click');
          $('' + id + '-img').bind('click', function () {
            $('' + id + '-file').trigger('click');
          });
        }
        $('#id-1').on('click', function () {
          var id = $(this).attr('id');
          bindPicInput('#' + id);
        });
        $scope.delImg = function (img) {
          img.isShow = !img.isShow;
        };
        $scope.changeUserHead = function (id) {
          function guid() {
            function s4() {
              return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          }
          ;
          var file = document.getElementById('id-1-file').files[0];
          var localUrl = document.getElementById('id-1-file').files[0].name;
          function getFileName(o) {
            var pos = o.lastIndexOf('.');
            // var last = pos.lastIndexOf(".");
            return o.substring(pos + 1);
          }
          var postfix = getFileName(localUrl);
          var storeAs = 'avatar/' + guid() + '.' + postfix;
          var bucket = '';
          var urlStr = '';
          if ($$env.getEnvirement() == 1) {
            $$log.debug('dev 1');
            bucket = 'yhjstatic-dev';
            urlStr = 'http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/';
          } else if ($$env.getEnvirement() == 2) {
            $$log.debug('pro 2');
            bucket = 'yhjstatic';
            urlStr = 'http://yhjstatic.oss-cn-shanghai.aliyuncs.com/';
          }
          var client = new OSS.Wrapper({
              region: 'oss-cn-shanghai',
              accessKeyId: 'LTAICadISGBAyskk',
              accessKeySecret: 'TSnzCdIizqqW1QdW7VxbBJYStaMeZj',
              bucket: bucket
            });
          $$loading.show();
          client.multipartUpload(storeAs, file).then(function (result) {
            var url = urlStr + result.name + '?x-oss-process=image/resize,h_500';
            $$log.debug('\u8fd4\u56de\u7684\u56fe\u7247\u8def\u5f84\u4e3a\uff1a' + url);
            $scope.imgArray.push({
              'url': url,
              'isShow': true
            });
            $scope.$apply();
            $$loading.hide();
            $('#id-1-text').hide();
            $('#id-2-text').show();
          }).catch(function (err) {
            $$loading.hide();
            $$toast.show('\u4e0a\u4f20\u5931\u8d25\uff01\u8bf7\u91cd\u65b0\u4e0a\u4f20');
            $$log.debug(err);
          });
        };
        $scope.register = function () {
          for (var i = 0; i < $scope.imgArray.length; i++) {
            if ($scope.imgArray[i].isShow == true) {
              $scope.photocopyArr.push($scope.imgArray[i].url);
            }
          }
          $scope.occupation = {
            'IDNumber': $scope.IDNumber.toString(),
            'certs': JSON.stringify([
              {
                'certNo': $scope.practiceNum,
                'certName': '\u62a4\u58eb\u6267\u4e1a\u8bc1\u4e66\u7ba1\u7406\u53f7'
              },
              {
                'certNo': $scope.technologyNum,
                'certName': '\u62a4\u58eb\u4e13\u4e1a\u6280\u672f\u8d44\u683c\u8bc1\u4e66\u7ba1\u7406\u53f7'
              },
              {
                'certNo': $scope.otherNum,
                'certName': $scope.otherName
              }
            ]),
            'photocopy': JSON.stringify($scope.photocopyArr)
          };
          function jumpPage(p) {
            location.href = p;
          }
          if ($scope.photocopyArr.length < 0 || $scope.IDNumber == '' || $scope.practiceNum == '' || $scope.technologyNum == '' || $scope.photocopyArr.length < 0) {
            $$toast.show('\u8bf7\u68c0\u67e5\u4fe1\u606f\u518d\u63d0\u4ea4');
            return false;
          } else {
            var obj = { 'occupation': $scope.occupation };
            $$log.info(obj);
            $http({
              method: 'PATCH',
              url: $$requestUrl.getUrl('createProfessionInfo', { 'nurseId': localStorage.globalNurseId }),
              data: { 'occupation': $scope.occupation }
            }).success(function (response) {
              $$log.debug('createRegisterInfoStateController');
              $$log.info(response);
              if (response.result.success == true) {
                //打开首页
                var t = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/messageTag';
                jumpPage(t);
              } else {
                $$toast.show(response.result.display);
              }
            });
          }
        };
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/18.
 */
app.directive('scheduleController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/scheduleController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $rootScope, $$iconfont) {
        //$scope.iconfont = $$iconfont.init;
        $$log.debug('scheduleController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/19.
 */
var obj = {
    colorId: [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    ColorName: [
      '#32c86e',
      '#fd8a58',
      '#f25d5d',
      '#fec24b',
      '#529eff',
      '#ff8080',
      '#8a8ae7'
    ],
    'name': '',
    'description': '',
    'from': '',
    'to': ''
  };
app.directive('setOrderController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/setOrderController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$stateParams',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      '$timeout',
      '$$loading',
      function ($scope, $stateParams, $element, $attrs, $$log, $state, $interval, $http, $$requestUrl, $$toast, $rootScope, $$iconfont, $timeout, $$loading) {
        $scope.getDTime = function (time) {
          return new Date(time).format('hh:mm');
        };
        $scope.setStartTime = function () {
          try {
            var dTime = new Date();
            dTime.setHours($scope.from.format('hh'), $scope.from.format('mm'));
            plus.nativeUI.pickTime(function (e) {
              $scope.from = e.date;
              $timeout(function () {
                $scope.$apply();
              }, 500);
            }, function (e) {
            }, {
              title: '\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4',
              is24Hour: true,
              time: dTime
            });
          } catch (e) {
          }
        };
        $scope.setEndTime = function () {
          try {
            var dTime = new Date();
            dTime.setHours($scope.to.format('hh'), $scope.to.format('mm'));
            plus.nativeUI.pickTime(function (e) {
              $scope.to = e.date;
              $timeout(function () {
                $scope.$apply();
              }, 500);
            }, function (e) {
            }, {
              title: '\u8bf7\u9009\u62e9\u7ed3\u675f\u65f6\u95f4',
              is24Hour: true,
              time: dTime
            });
          } catch (e) {
          }
        };
        //表单触发
        $('.triggerInputWarp').on('click', '.triggerInput', function () {
          $(this).find('input').focus();
        });
        var d = new Date().format('yyyy/MM/dd');
        if ($stateParams.operateType == 'new') {
          if (isAddOrder === false) {
            $scope.title = obj.name;
            $scope.describe = obj.description;
            $scope.from = obj.from;
            $scope.to = obj.to;
            $scope.colorClass = colorName;
            isAddOrder = true;
          } else {
            $scope.title = '';
            $scope.describe = '';
            // $scope.from = (new Date());
            // $scope.to = (new Date());
            $scope.from = new Date(d + ' ' + '08:00');
            $scope.to = new Date(d + ' ' + '18:00');
            $scope.colorClass = 'green';
          }
        } else {
          $scope.title = rosterData.title;
          $scope.describe = rosterData.description;
          if (typeof rosterData.startTime == 'string') {
            $scope.from = new Date(d + ' ' + rosterData.startTime);
          } else {
            $scope.from = rosterData.startTime;
          }
          if (typeof rosterData.startTime == 'string') {
            $scope.to = new Date(d + ' ' + rosterData.endTime);
          } else {
            $scope.to = rosterData.endTime;
          }
          if (isAddOrder === false) {
            $scope.colorClass = colorName;
            isAddOrder = true;
          } else {
            $scope.colorClass = rosterData.colorClass;
          }
        }
        $scope.getColor = function () {
          if ($stateParams.operateType == 'new') {
            obj.name = $scope.title;
            obj.description = $scope.describe;
            obj.from = $scope.from;
            obj.to = $scope.to;
          } else {
            rosterData.title = $scope.title;
            rosterData.description = $scope.describe;
            rosterData.startTime = $scope.from;
            rosterData.endTime = $scope.to;
          }
          $state.go('choiceColor');
        };
        $scope.setOrder = function () {
          if ($scope.title.length > 3) {
            $$toast.show('\u73ed\u6b21\u6700\u591a\u53ef\u8f93\u51653\u4e2a\u5b57');
            return false;
          }
          if ($scope.title == '' || $scope.describe == '' || $scope.from == '' || $scope.to == '' || $scope.colorClass == '') {
            $$toast.show('\u8bf7\u68c0\u67e5\u4fe1\u606f\u540e\u63d0\u4ea4');
            return false;
          } else {
            if ($stateParams.operateType == 'new') {
              $$loading.show();
              $http({
                method: 'POST',
                url: $$requestUrl.getUrl('createNurseScheduleStateController'),
                data: {
                  'title': $scope.title,
                  'description': $scope.describe,
                  'startTime': new Date($scope.from).format('hh:mm'),
                  'endTime': new Date($scope.to).format('hh:mm'),
                  'colorClass': $scope.colorClass,
                  'gaps': 0
                }
              }).success(function (response) {
                $$loading.hide();
                if (response.result.success == true) {
                  var ls = { time: 0 };
                  localStorage['changeScheduleClassStateController'] = JSON.stringify(ls);
                  localStorage['batchSchedulesStateController'] = JSON.stringify(ls);
                  localStorage['changeSchedulePersonStateController'] = JSON.stringify(ls);
                  //全局变量置空
                  colorName = '';
                  rosterData = '';
                  $$toast.show('\u521b\u5efa\u6210\u529f');
                  history.go(-1);
                } else {
                  $$toast.show(response.result.msg);
                }
              });
            } else {
              $$loading.show();
              $http({
                method: 'POST',
                url: $$requestUrl.getUrl('updateNurseSchedule', { 'rosterId': rosterData.id }),
                data: {
                  'title': $scope.title,
                  'description': $scope.describe,
                  'startTime': new Date($scope.from).format('hh:mm'),
                  'endTime': new Date($scope.to).format('hh:mm'),
                  'colorClass': $scope.colorClass,
                  'gaps': 0
                }
              }).success(function (response) {
                $$loading.hide();
                if (response.result.success == true) {
                  var ls = { time: 0 };
                  localStorage['changeScheduleClassStateController'] = JSON.stringify(ls);
                  localStorage['batchSchedulesStateController'] = JSON.stringify(ls);
                  localStorage['changeSchedulePersonStateController'] = JSON.stringify(ls);
                  //全局变量置空
                  colorName = '';
                  rosterData = '';
                  $$toast.show('\u4fee\u6539\u6210\u529f');
                  history.go(-1);
                } else {
                  $$toast.show(response.result.msg);
                }
              });
            }
          }
        };
        $$log.debug('setOrderController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/19.
 */
var oldSelPushTemplate;
app.directive('setTemplateController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/setTemplateController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$$toast',
      '$stateParams',
      '$scope',
      '$attrs',
      '$$log',
      '$element',
      '$state',
      '$interval',
      '$http',
      '$$requestUrl',
      '$rootScope',
      '$$iconfont',
      '$$loading',
      function ($$toast, $stateParams, $scope, $attrs, $$log, $element, $state, $interval, $http, $$requestUrl, $rootScope, $$iconfont, $$loading) {
        //判断对象是否为空
        function isEmptyObject(obj) {
          for (var key in obj) {
            return false;
          }
          return true;
        }
        $scope.dataArrFilter = [];
        if ($stateParams.operateType == 'new') {
          var newDataArr = [{
                'title': '',
                'event': [{
                    'days': '',
                    'purpose': '',
                    'article': [],
                    'tool': [],
                    'eventMark': 0
                  }]
              }];
          $scope.dataArrFilter = isEmptyObject(globalTemplateData) ? newDataArr : [globalTemplateData];
        } else {
          if (isEmptyObject(globalTemplateData) == true) {
            var globalTemplate = $scope.data;
            for (var i = 0; i < globalTemplate.followUp.length; i++) {
              if (globalTemplate.followUp[i].templateId == $stateParams.operateType) {
                $scope.dataArrFilter.push(globalTemplate.followUp[i]);
                globalTemplateData = globalTemplate.followUp[i];
              }
            }
          } else {
            $scope.dataArrFilter.push(globalTemplateData);
          }
          //对模版中的每个的event添加标示
          for (var j = 0; j < $scope.dataArrFilter.length; j++) {
            for (var k = 0; k < $scope.dataArrFilter[j].event.length; k++) {
              $scope.dataArrFilter[j].event[k].eventMark = k;
            }
          }
        }
        //点击添加随访记录
        $scope.addFollowUpRecord = function () {
          $scope.arr = {
            'days': '',
            'purpose': '',
            'article': [],
            'tool': [],
            'eventMark': $scope.dataArrFilter[0].event.length
          };
          $scope.dataArrFilter[0].event.push($scope.arr);
          globalTemplateData = $scope.dataArrFilter[0];
        };
        //推送随访
        $scope.selPush = function (event) {
          if ($stateParams.operateType == 'new' && isEmptyObject(globalTemplateData) == true) {
            globalTemplateData = $scope.dataArrFilter[0];
          }
          if (event.tool == undefined) {
            event.tool = [];
          }
          if (event.article == undefined) {
            event.article = [];
          }
          oldSelPushTemplate = {
            'eventMark': event.eventMark,
            'article': event.article,
            'tool': event.tool
          };
          $state.go('contentList', { operateType: 'pushTemplate' });
        };
        for (var m in newSelPushTemplate) {
          if (newSelPushTemplate[m].article == undefined) {
            newSelPushTemplate[m].article = [];
          }
          if (newSelPushTemplate[m].tool == undefined) {
            newSelPushTemplate[m].tool = [];
          }
        }
        //读取newSelPushTemplate
        if (newSelPushTemplate.length > 0) {
          for (var item = 0; item < $scope.dataArrFilter.length; item++) {
            for (var items = 0; items < $scope.dataArrFilter[item].event.length; items++) {
              for (var q = 0; q < newSelPushTemplate.length; q++) {
                if ($scope.dataArrFilter[item].event[items].eventMark == newSelPushTemplate[q].eventMark) {
                  $scope.dataArrFilter[item].event[items].article = newSelPushTemplate[q].article;
                  $scope.dataArrFilter[item].event[items].tool = newSelPushTemplate[q].tool;
                }
              }
            }
          }
        }
        //点击完成
        $scope.saveFollowUpRecord = function () {
          if ($scope.dataArrFilter[0].title == '') {
            $$toast.show('\u8bf7\u68c0\u67e5\u4fe1\u606f\u540e\u63d0\u4ea4');
            return false;
          }
          var event = [], events = $scope.dataArrFilter[0].event;
          for (var i = 0; i < events.length; i++) {
            if (typeof events[i].days != 'number' || events[i].days < 0 || events[i].days != parseInt(events[i].days)) {
              $$toast.show('\u968f\u8bbf\u8bf7\u8f93\u5165\u6b63\u786e\u65f6\u95f4');
              return false;
            }  // if ((events[i].article == undefined && events[i].tool== undefined) ||  events[i].days == "" || events[i].purpose == "") {
               //     $$toast.show('请检查信息后提交');
               //     return false;
               // }
          }
          for (var n = 0; n < events.length; n++) {
            var article = [], tool = [];
            if (events[n].article) {
              if (events[n].article.length >= 1) {
                for (var k = 0; k < events[n].article.length; k++) {
                  article.push(events[n].article[k].id);
                }
              }
            } else {
              events[n].article = [];
            }
            if (events[n].tool) {
              if (events[n].tool.length >= 1) {
                for (var m = 0; m < events[n].tool.length; m++) {
                  tool.push(events[n].tool[m].id);
                }
              }
            } else {
              events[n].tool = [];
            }
            if (events[n].purpose == '' || article.length < 1 && tool.length < 1) {
              $$toast.show('\u8bf7\u68c0\u67e5\u4fe1\u606f\u540e\u63d0\u4ea4');
              return false;
            }
            event.push({
              'days': events[n].days,
              'purpose': events[n].purpose,
              'article': article,
              'tool': tool
            });
          }
          if ($stateParams.operateType == 'new') {
            // if (localStorage.globalDepartmentId === 0 || localStorage.globalDepartmentId == '0') {
            //     $$toast.show('请选择科室再进行此操作');
            //     return false;
            // }
            $$loading.show();
            $http({
              method: 'POST',
              url: $$requestUrl.getUrl('createFollowUpTemplatesStateController'),
              data: {
                'title': $scope.dataArrFilter[0].title,
                'event': event
              }
            }).success(function (response) {
              $$loading.hide();
              if (response.result.success === true) {
                globalTemplateData = {};
                $$toast.show('\u4fe1\u606f\u63d0\u4ea4\u6210\u529f!');
                history.go(-1);
              } else {
                $$toast.show(response.result.displaymsg);
              }
            }).catch(function (err) {
              $$log.err(err);
              $$loading.hide();
            });
          } else {
            // if (localStorage.globalDepartmentId === 0 || localStorage.globalDepartmentId == '0') {
            //     $$toast.show('请选择科室再进行此操作');
            //     return false;
            // }
            $$loading.show();
            $http({
              method: 'PATCH',
              url: $$requestUrl.getUrl('updateTemplate', { id: $stateParams.operateType }),
              data: {
                'templateId': parseInt($stateParams.operateType),
                'title': $scope.dataArrFilter[0].title,
                'event': event
              }
            }).success(function (response) {
              $$loading.hide();
              if (response.result.success === true) {
                globalTemplateData = {};
              } else {
                $$toast.show(response.displaymsg);
              }
              $$toast.show('\u4fe1\u606f\u63d0\u4ea4\u6210\u529f!');
              history.go(-1);
            });
          }
        };
        $$log.debug('setTemplateController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/18.
 */
var orderObjArr = [];
app.directive('sortController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/sortController.html',
    replace: true,
    scope: {
      data: '=data',
      orderDate: '=date'
    },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$stateParams',
      '$$iconfont',
      '$timeout',
      '$$loading',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $rootScope, $stateParams, $$iconfont, $timeout, $$loading) {
        $scope.rosterId = [];
        //班次Id
        $scope.executorId = [];
        //排班对象
        $scope.watchers = [];
        $scope.delIds = [];
        //排班表带来的数据
        $scope.setDate = function () {
          try {
            var dDate = new Date();
            dDate.setFullYear($scope.admissionTime.format('yyyy'), $scope.admissionTime.format('MM') - 1, $scope.admissionTime.format('dd'));
            var minDate = new Date();
            minDate.setFullYear(2016, 0, 1);
            var maxDate = new Date();
            maxDate.setFullYear(2018, 11, 31);
            plus.nativeUI.pickDate(function (e) {
              $scope.admissionTime = e.date;
              $scope.setAdmissionTime();
              $timeout(function () {
                $scope.$apply();
              }, 500);
            }, function (e) {
            }, {
              title: '\u8bf7\u9009\u62e9\u65e5\u671f',
              date: dDate,
              minDate: minDate,
              maxDate: maxDate
            });
          } catch (e) {
          }
        };
        //表单触发
        $('.triggerInputWarp').on('click', '.triggerInput', function () {
          $(this).find('input').focus();
        });
        if (admissionTime != null) {
          if (typeof admissionTime == 'number') {
            $scope.admissionTime = new Date(parseInt(admissionTime));
          } else {
            $scope.admissionTime = admissionTime;
          }
        } else {
          $scope.admissionTime = $scope.admissionTime || new Date();
        }
        function setValueArr(valueArr) {
          var nameArr = [];
          switch (valueArr) {
          case 'orderObjArr':
            for (var i = 0; i < orderObjArr.length; i++) {
              nameArr.push(orderObjArr[i].member.name);
              $scope.executorId.push(orderObjArr[i].member.id);
              for (var k = 0; k < orderObjArr[i].delObj.length; k++) {
                $scope.delIds.push(orderObjArr[i].delObj[k]);
              }
            }
            $scope.name = nameArr.join('\uff0c');
            break;
          case 'classArr':
            for (var q = 0; q < classArr.length; q++) {
              nameArr.push(classArr[q].title);
              $scope.rosterId.push(classArr[q].id);
            }
            $scope.class = nameArr.join('\uff0c');
            break;
          }
        }
        //页面在加载时读取orderArr,attentionObjArr,classArr,remindArr
        setValueArr('orderObjArr');
        setValueArr('attentionObjArr');
        setValueArr('classArr');
        $scope.setAdmissionTime = function () {
          admissionTime = $scope.admissionTime;
        };
        $scope.submitSchedules = function () {
          if ($scope.name == '' || $scope.admissionTime === undefined || $scope.admissionTime === null || $scope.class == '') {
            $$toast.show('\u8bf7\u68c0\u67e5\u4fe1\u606f\u540e\u63d0\u4ea4');
            return false;
          } else {
            var delId;
            if ($scope.delIds.length == 1) {
              delId = $scope.delIds[0];
            } else if ($scope.delIds.length > 1) {
              delId = $scope.delIds.join(',');
            } else {
              delId = '';
            }
            if (delId != '' && delId != undefined && delId != null) {
              $http({
                method: 'DELETE',
                url: $$requestUrl.getUrl('dropSortSchedule', { 'rosterScheduleIds': delId })
              }).success(function (response) {
                if (response.result.success === true) {
                  $$loading.show();
                  $http({
                    method: 'POST',
                    url: $$requestUrl.getUrl('createSortScheduleStateController'),
                    data: {
                      'rosterId': $scope.rosterId,
                      'executorId': $scope.executorId,
                      'date': Date.parse($scope.admissionTime)
                    }
                  }).success(function (response) {
                    $$loading.hide();
                    if (response.result.success === true) {
                      //全局变量置空
                      orderObjArr = [];
                      classArr = [];
                      remindArr = [];
                      delId = [];
                      $$toast.show('\u4fee\u6539\u6392\u73ed\u6210\u529f');
                      if (sortType == 'dutyCalendar' || sortType == 'dutyChange') {
                        history.go(-1);
                      } else {
                        $state.go('dutyCalendar');
                      }
                      var ls = { time: 0 };
                      localStorage['changeScheduleClassStateController'] = JSON.stringify(ls);
                      localStorage['batchSchedulesStateController'] = JSON.stringify(ls);
                      localStorage['changeSchedulePersonStateController'] = JSON.stringify(ls);
                    } else {
                      response.result.displaymsg ? $$toast.show(response.result.displaymsg) : $$toast.show('\u4fee\u6539\u6392\u73ed\u5931\u8d25');
                    }
                    $$log.debug('sorts');
                    $$log.info(response);
                  });
                }
              });
            } else {
              $$loading.show();
              $http({
                method: 'POST',
                url: $$requestUrl.getUrl('createSortScheduleStateController'),
                data: {
                  'rosterId': $scope.rosterId,
                  'executorId': $scope.executorId,
                  'date': Date.parse($scope.admissionTime)
                }
              }).success(function (response) {
                $$loading.hide();
                if (response.result.success === true) {
                  //全局变量置空
                  orderObjArr = [];
                  classArr = [];
                  remindArr = [];
                  delId = [];
                  $$toast.show('\u6392\u73ed\u6210\u529f');
                  if (sortType == 'dutyCalendar' || sortType == 'dutyChange') {
                    history.go(-1);
                  } else {
                    $state.go('dutyCalendar');
                  }
                  var ls = { time: 0 };
                  localStorage['changeScheduleClassStateController'] = JSON.stringify(ls);
                  localStorage['batchSchedulesStateController'] = JSON.stringify(ls);
                  localStorage['changeSchedulePersonStateController'] = JSON.stringify(ls);
                } else {
                  response.result.displaymsg ? $$toast.show(response.result.displaymsg) : $$toast.show('\u6392\u73ed\u5931\u8d25');
                }
                $$log.debug('sorts');
                $$log.info(response);
              });
            }
          }
        };
        $$log.debug('sortController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/19.
 */
var templateTime = '';
var followUpData = {
    'followObj': '',
    'admissionTime': ''
  };
app.directive('startVisitController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/startVisitController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      '$$loading',
      '$timeout',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $rootScope, $$iconfont, $$loading, $timeout) {
        $scope.targetId = [], $scope.executorId = [], $scope.runNurseObj = [];
        $scope.onPickDateClick = function () {
          try {
            var dDate = new Date();
            dDate.setFullYear($scope.admissionTime.format('yyyy'), $scope.admissionTime.format('MM') - 1, $scope.admissionTime.format('dd'));
            var minDate = new Date();
            minDate.setFullYear(2016, 0, 1);
            var maxDate = new Date();
            maxDate.setFullYear(2018, 11, 31);
            plus.nativeUI.pickDate(function (e) {
              $scope.admissionTime = e.date;
              $scope.onAdmissionTimeChange();
              $timeout(function () {
                $scope.$apply();
              }, 500);
            }, function (e) {
            }, {
              title: '\u8bf7\u9009\u62e9\u65e5\u671f',
              date: dDate,
              minDate: minDate,
              maxDate: maxDate
            });
          } catch (e) {
          }
        };
        //表单触发
        $('.triggerInputWarp').on('click', '.triggerInput', function () {
          $(this).find('input').focus();
        });
        if (typeof templateTime != 'string') {
          $scope.admissionTime = templateTime;
        } else {
          $scope.admissionTime = $scope.admissionTime || new Date();
        }
        //跳页面选择值
        $scope.targetId.push(followPatientObj.userId);
        $scope.followObj = followPatientObj.name;
        $scope.followtemplateId = templateObj.templateId;
        $scope.followTemplateObj = templateObj.title;
        for (var i = 0; i < runNurseObjArr.length; i++) {
          $scope.runNurseObj.push(runNurseObjArr[i].member.name);
          $scope.executorId.push(runNurseObjArr[i].member.id);
        }
        // $scope.runNurseObj = $scope.runNurseObj.join('，');
        //提醒
        if (remindArr.length > 0) {
          $scope.alertTemplateId = remindArr[0].id;
          $scope.remind = remindArr[0].title;
        } else {
          $scope.alertTemplateId = '';
          $scope.remind = '';
        }
        $scope.onAdmissionTimeChange = function () {
          templateTime = $scope.admissionTime;
        };
        $scope.onSaveFollowUpClick = function () {
          if ($scope.targetId[0] == undefined || $scope.executorId.length < 1 || $scope.alertTemplateId === '' || $scope.followtemplateId == '' || $scope.followtemplateId == undefined) {
            $$toast.show('\u8bf7\u68c0\u67e5\u4fe1\u606f\u540e\u63d0\u4ea4');
            return false;
          } else {
            $$loading.show();
            var date = $scope.admissionTime.format('yyyy/MM/dd');
            $http({
              method: 'POST',
              url: $$requestUrl.getUrl('startFollowUpStateController'),
              data: {
                'dischargeAt': Date.parse(new Date(date)),
                'targetId': $scope.targetId,
                'executorId': $scope.executorId,
                'alertTemplateId': $scope.alertTemplateId,
                'followUptemplateId': $scope.followtemplateId
              }
            }).success(function (response) {
              $$loading.hide();
              if (response.result.success === true) {
                //全局变量置空
                followPatientObj = [];
                templateObj = [];
                remindArr = [];
                templateTime = null;
                runNurseObjArr = [];
                $$toast.show('\u53d1\u8d77\u6210\u529f');
                $state.go('messageTag');
              }
              $$log.debug('startVisitStateController');
              $$log.info(response);
            });
          }
        };
        $$log.debug('startVisitController');
        $$log.info($scope);
      }
    ]
  };
});
/**
 * Created by lixu on 16/9/20.
 */
app.directive('writeRecordController', function () {
  return {
    restrict: 'AE',
    templateUrl: 'templates/controller/writeRecordController.html',
    replace: true,
    scope: { data: '=data' },
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$$log',
      '$state',
      '$interval',
      '$$txIM',
      '$http',
      '$$requestUrl',
      '$$toast',
      '$rootScope',
      '$$iconfont',
      '$stateParams',
      '$timeout',
      '$$loading',
      function ($scope, $element, $attrs, $$log, $state, $interval, $$txIM, $http, $$requestUrl, $$toast, $rootScope, $$iconfont, $stateParams, $timeout, $$loading) {
        $scope.event = $scope.data.event;
        $scope.actions = null;
        console.log($scope.event);
        //时间格式转化
        for (var i = 0; i < $scope.event.length; i++) {
          $scope.event[i].startTime = new Date(parseInt($scope.event[i].startTime)).format('yyyy-MM-dd');
        }
        $scope.stateButton = function (index) {
          $scope.selIndex = $scope.selIndex == index ? -1 : index;
        };
        //设置默认展开的随访
        for (var j = 0; j < $scope.data.event.length; j++) {
          if ($stateParams.eventId == $scope.data.event[j].id) {
            $scope.selIndex = j;
          }
        }
        //点击推送
        $scope.push = function (target) {
          $$loading.show();
          $http({
            method: 'POST',
            url: $$requestUrl.getUrl('weiXinPushFollow'),
            data: target.wechat.content.msg
          }).success(function (response) {
            if (response.result.success === true) {
              $http({
                method: 'PATCH',
                url: $$requestUrl.getUrl('updateFollowUpRecord', { id: target.id }),
                data: {
                  'eventId': target.id,
                  'purpose': target.purpose,
                  'brief': target.brief,
                  'wechat': {
                    'actionId': target.wechat.actionId,
                    'status': 2
                  }
                }
              }).success(function (response) {
                $$loading.hide();
                if (response.result.success === true) {
                  $$toast.show('\u63a8\u9001\u6210\u529f');
                  target.wechat.status = 2;
                }
              });
            } else {
              $$toast.show('\u63a8\u9001\u5931\u8d25');
            }
          });
        };
        //点击完成本次随访
        $scope.completeFollowUp = function (target) {
          if (target.purpose == '' || target.brief.content == '') {
            $$toast.show('\u8bf7\u68c0\u67e5\u4fe1\u606f\u540e\u63d0\u4ea4');
          } else {
            $http({
              method: 'PATCH',
              url: $$requestUrl.getUrl('updateFollowUpRecord', { id: target.id }),
              data: {
                'eventId': target.id,
                'purpose': target.purpose,
                'brief': target.brief,
                'wechat': {
                  'actionId': target.wechat.actionId,
                  'status': 2
                },
                'status': 2
              }
            }).success(function (response) {
              $$log.debug('writeRecordStateController');
              $$log.info(response);
              if (response.result.success === true) {
                $$toast.show('\u4fee\u6539\u968f\u8bbf\u4fe1\u606f\u6210\u529f');
                history.go(-1);
              }
            });
          }
        };
        //建立单聊聊
        $scope.setSelChat = function (target) {
          $http({
            method: 'GET',
            url: $$requestUrl.getUrl('setChatFollowUp', {
              fromId: localStorage.globalNurseId,
              toId: target.personId
            }),
            params: {}
          }).success(function (response) {
            localStorage.targetChatId = response.toAccount.identifier;
            $$log.debug('localStorage.targetChatId:  ' + localStorage.targetChatId);
            location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/chat';
            $$log.debug('setChatFollowUp');
            $$log.info(response);
          });  // $$shence.track('_setChatFollowUp');
        };
      }
    ]
  };
});
/**
 * Created by yihuan on 16/9/29.
 */
var nurseInfo = {};
app.controller('aletrNurseInfoStateController', [
  '$$env',
  '$$tabbar',
  '$interval',
  '$$requestUrl',
  '$http',
  '$$toast',
  '$$navbar',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$loading',
  '$$confirm',
  function ($$env, $$tabbar, $interval, $$requestUrl, $http, $$toast, $$navbar, $rootScope, $state, $scope, $location, $$log, $$title, getData, $$loading, $$confirm) {
    $scope.data = getData.data;
    if (nurseInfo.basic !== undefined) {
      $scope.data = nurseInfo;
      if ($scope.data.occupation.certs.length > 0) {
        $scope.data.occupation.certs = JSON.stringify($scope.data.occupation.certs);
      } else {
        $scope.data.occupation.certs = '';
      }
      if ($scope.data.occupation.photocopy.length > 0) {
        $scope.data.occupation.photocopy = JSON.stringify($scope.data.occupation.photocopy);
      } else {
        $scope.data.occupation.photocopy = '';
      }
    } else {
      nurseInfo = $scope.data;
    }
    //认证之后，不允许再修改
    if (typeof getData.data.basic != 'undefined' && getData.data.basic.authorizedStatus > 2) {
      $scope.isPass = true;
    } else {
      $scope.isPass = false;
    }
    if ($scope.data.result.success) {
      if ($scope.data.occupation.certs === '') {
        $scope.data.occupation.certs = [
          {
            'certNo': '',
            'certName': '\u62a4\u58eb\u6267\u4e1a\u8bc1\u4e66\u7ba1\u7406\u53f7'
          },
          {
            'certNo': '',
            'certName': '\u62a4\u58eb\u4e13\u4e1a\u6280\u672f\u8d44\u683c\u8bc1\u4e66\u7ba1\u7406\u53f7'
          },
          {
            'certNo': '',
            'certName': ''
          }
        ];
      } else {
        $scope.data.occupation.certs = JSON.parse($scope.data.occupation.certs);
        if ($scope.data.occupation.certs.length < 3) {
          $scope.data.occupation.certs.push({
            'certNo': '',
            'certName': ''
          });
        }
      }
      $scope.data.occupation.photocopy = $scope.data.occupation.photocopy === '' ? [] : JSON.parse($scope.data.occupation.photocopy);
    }
    $$title.setTitle('\u4f18\u62a4\u52a9\u624b - \u8eab\u4efd\u8ba4\u8bc1');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
    $scope.isAlert = false;
    $scope.setIsAlert = function () {
      $scope.isAlert = !$scope.isAlert;
    };
    $scope.basic = $scope.data.basic;
    $scope.occupation = $scope.data.occupation;
    if (aletrNurseInfoHospital.organizationId !== undefined) {
      $scope.basic.organizationName = aletrNurseInfoHospital.organizationName;
      $scope.basic.organizationId = aletrNurseInfoHospital.organizationId;
      $scope.basic.departmentName = '';
      $scope.basic.departmentId = '';
    }
    if (aletrNurseInfoOffice.departmentName !== undefined) {
      $scope.basic.departmentName = aletrNurseInfoOffice.departmentName;
      $scope.basic.departmentId = aletrNurseInfoOffice.departmentId;
    }
    $scope.count = 0;
    $scope.checkPhone = function () {
      if ($scope.basic.phone.toString().length < 11) {
        $$toast.show('\u8f93\u5165\u7684\u7535\u8bdd\u53f7\u7801\u4e0d\u6b63\u786e');
      } else {
        $http({
          method: 'POST',
          url: $$requestUrl.getUrl('getAlertPhoneCaptcha'),
          data: { 'phone': $scope.basic.phone }
        }).success(function (response) {
          if (response.result.success === true) {
            // 倒计时
            $scope.count = 60;
            if ($scope.count > 0) {
              $scope.countDown = $interval(function () {
                $scope.count--;
              }, 1000, 60);
            }
          } else {
            $$toast.show(response.result.displayMsg);
          }
        });
      }
    };
    $scope.goChoiceHospital = function () {
      if ($scope.isPass == false) {
        $state.go('choiceHospital');
      } else {
        return;
      }
    };
    $scope.goChoiceDepartment = function () {
      if ($scope.isPass == false) {
        $state.go('choiceDepartment', { 'hospitalId': $scope.basic.organizationId });
      } else {
        return;
      }
    };
    $scope.delUrl = function (url) {
      if ($scope.isPass == false) {
        $$confirm.show({
          title: '\u5220\u9664\u63d0\u793a',
          msg: '<p style="text-align: center;">\u786e\u5b9a\u8981\u5220\u9664\u8be5\u56fe\u7247\u5417\uff1f</p>',
          callback: function () {
            var urls = $scope.data.occupation.photocopy;
            for (var i = 0; i < urls.length; i++) {
              if (url == urls[i]) {
                $scope.data.occupation.photocopy.splice(i, 1);
              }
            }
            $$toast.show('\u5220\u9664\u6210\u529f');
          },
          confirmText: '\u786e\u5b9a',
          cancelText: '\u53d6\u6d88'
        });
      } else {
        return;
      }
    };
    function bindPicInput(id) {
      //trigger触发input
      $('' + id + '-file').trigger('click');
      $('' + id + '-img').bind('click', function () {
        $('' + id + '-file').trigger('click');
      });
    }
    $scope.imgIndex = 0;
    if ($scope.isPass == false) {
      $('#id-1').on('click', function () {
        var id = $(this).attr('id');
        bindPicInput('#' + id);
        $scope.imgIndex = 1;
      });
      $('#id-0-img').on('click', function () {
        $('#id-0-file').trigger('click');
        $scope.imgIndex = 0;
      });
    }
    $scope.putCertificate = function (id) {
      function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }
      var file, localUrl;
      if ($scope.imgIndex === 0) {
        file = document.getElementById('id-0-file').files[0];
        localUrl = document.getElementById('id-0-file').files[0].name;
      } else {
        file = document.getElementById('id-1-file').files[0];
        localUrl = document.getElementById('id-1-file').files[0].name;
      }
      function getFileName(o) {
        var pos = o.lastIndexOf('.');
        // var last = pos.lastIndexOf(".");
        return o.substring(pos + 1);
      }
      var postfix = getFileName(localUrl);
      var storeAs = 'avatar/' + guid() + '.' + postfix + '';
      var bucket = '';
      var urlStr = '';
      if ($$env.getEnvirement() == 1) {
        $$log.debug('dev 1');
        bucket = 'yhjstatic-dev';
        urlStr = 'http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/';
      } else if ($$env.getEnvirement() == 2) {
        $$log.debug('pro 2');
        bucket = 'yhjstatic';
        urlStr = 'http://yhjstatic.oss-cn-shanghai.aliyuncs.com/';
      }
      var client = new OSS.Wrapper({
          region: 'oss-cn-shanghai',
          accessKeyId: 'LTAICadISGBAyskk',
          accessKeySecret: 'TSnzCdIizqqW1QdW7VxbBJYStaMeZj',
          bucket: bucket
        });
      $$loading.show();
      client.multipartUpload(storeAs, file).then(function (result) {
        var url = urlStr + result.name + '?x-oss-process=image/resize,h_500';
        if ($scope.imgIndex === 0) {
          $scope.data.basic.avatarUrl = url;
          $$log.debug('url++' + $scope.data.basic.avatarUrl);
          $scope.$apply();
          $$loading.hide();
        } else {
          $scope.data.occupation.photocopy.push(url);
          $scope.$apply();
          $$loading.hide();
          $('#id-1-text').hide();
          $('#id-2-text').show();
        }
      }).catch(function (err) {
        $$loading.hide();
        $$toast.show('\u4e0a\u4f20\u5931\u8d25\uff01\u8bf7\u91cd\u65b0\u4e0a\u4f20');
        $$log.debug(err);
      });
    };
    $scope.register = function () {
      // var basicData = $scope.data.basic;
      // var occupationData = $scope.data.occupation;
      var certs = [];
      for (var j = 0; j < $scope.data.occupation.certs.length; j++) {
        if ($scope.data.occupation.certs[j].certNo !== '' && $scope.data.occupation.certs[j].certName !== '') {
          certs.push($scope.data.occupation.certs[j]);
        }
      }
      if ($scope.data.basic.name == '') {
        $$toast.show('\u7528\u6237\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a');
      } else {
        $$loading.show();
        $http({
          method: 'patch',
          url: $$requestUrl.getUrl('updateNurseInfo', { 'nurseId': localStorage.globalNurseId }),
          data: {
            'basic': {
              'id': parseInt(localStorage.globalNurseId),
              'name': $scope.data.basic.name,
              'avatarUrl': $scope.data.basic.avatarUrl,
              'authorizedName': $scope.data.basic.authorizedName,
              'authorizedStatus': parseInt($scope.data.basic.authorizedStatus),
              'departmentId': $scope.data.basic.departmentId,
              'organizationId': $scope.data.basic.organizationId,
              'organizationName': $scope.data.basic.organizationName,
              'departmentName': $scope.data.basic.departmentName,
              'professionalTitle': $scope.data.basic.professionalTitle
            },
            'occupation': {
              'IDNumber': $scope.data.occupation.IDNumber,
              'certs': JSON.stringify(certs),
              'photocopy': JSON.stringify($scope.data.occupation.photocopy)
            }
          }
        }).success(function (response) {
          if (typeof response.result != 'undefined') {
            $$loading.hide();
          }
          if (response.result.success === true) {
            $$toast.show('\u6570\u636e\u63d0\u4ea4\u6210\u529f');
            nurseInfo = {};
            history.go(-1);
          } else {
            $$toast.show(response.result.displayMsg);
          }
        });
      }  // if(basicData.phone != "" ){
         //     $$toast.show('手机号不能为空');
         // }else  if(){
         //
         // }
         // if (basicData.organizationName === '' || basicData.departmentName === '' || basicData.name === '' || basicData.phone === '' || basicData.professionalTitle === '' || occupationData.IDNumber === '' ||   occupationData.certs[0].certNo === '' || occupationData.certs[1].certNo === '' || occupationData.photocopy.length < 1 || (occupationData.certs[2].certNo !== '' && occupationData.certs[2].certName === '') || (occupationData.certs[2].certName !== '' && occupationData.certs[2].certNo === '')) {
         //     $$toast.show('请检查信息再提交');
         //     return false;
         // } else {
         //
         // }
    };
  }
]);
/**
 * Created by yihuan on 16/9/18.
 */
app.controller('allPatientListStateController', [
  '$stateParams',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$tabbar',
  '$$navbar',
  function ($stateParams, $rootScope, $state, $scope, $location, $$log, $$title, getData, $$tabbar, $$navbar) {
    // 1-住院，2-出院，0-未入院
    $$log.debug('allPatientListStateController');
    $$log.debug($stateParams.operateType);
    if ($stateParams.operateType == 'show') {
      $$title.setTitle('\u6211\u7684\u60a3\u8005');
      $$tabbar.setIndex(1);
      $$navbar.hideReturnBtn();
    } else {
      $$title.setTitle('\u9009\u62e9\u968f\u8bbf\u5bf9\u8c61');
      $$tabbar.setIndex(-1);
      $$navbar.showReturnBtn();
    }
    $scope.data = getData.data;
    $$log.debug(getData.data);  // $$navbar.setRightBtnShow(2);
                                // $$tabbar.hide();
                                // $$navbar.hideReturnBtn();
  }
]);
/**
 * Created by yihuan on 16/9/28.
 */
app.controller('alterNurseTagStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$tabbar',
  '$$navbar',
  '$stateParams',
  '$http',
  '$$requestUrl',
  '$$confirm',
  '$$toast',
  '$$loading',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$tabbar, $$navbar, $stateParams, $http, $$requestUrl, $$confirm, $$toast, $$loading) {
    $$navbar.show();
    $$navbar.setTitle('\u4fee\u6539\u540c\u4e8b\u6807\u7b7e');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
    $scope.data = getData.data;
    $scope.dataArr = $scope.data;
    $scope.tagsArr = [];
    console.log($scope.dataArr);
    if ($scope.dataArr.tag == undefined) {
      $scope.dataArr.tag = [];
    }
    //设置默认选中的tag
    for (var i = 0; i < $scope.dataArr.tag.length; i++) {
      $scope.dataArr.tag[i].checked = false;
      for (var j = 0; j < checkedNurseTag.length; j++) {
        if ($scope.dataArr.tag[i].tagId == checkedNurseTag[j]) {
          $scope.dataArr.tag[i].checked = true;
        }
      }
    }
    $$log.debug('$scope.dataArr.tag');
    $$log.debug($scope.dataArr.tag);
    $scope.checkTag = function (tag) {
      tag.checked = !tag.checked;
    };
    $scope.newNurseTag = function () {
      $$confirm.show({
        title: '\u6dfb\u52a0\u6807\u7b7e',
        msg: '<input class="h3 border-line border-color-global-base padding-left-md" style="width:80%;" type="text">',
        callback: function () {
          // $$toast.show('confirm clicked', function () {
          //     $$loading.show();
          // });
          var tags = [];
          var tagName = $('.confirm').find('input').val();
          if (tagName == '') {
            $$toast.show('\u6807\u7b7e\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01');
            return false;
          }
          tags.push({ 'tagName': tagName });
          $http({
            method: 'POST',
            url: $$requestUrl.getUrl('createNurseTag'),
            data: { 'tag': tags }
          }).success(function (response) {
            if (response.result.success == true) {
              for (var i = 0; i < response.tag.length; i++) {
                $scope.dataArr.tag.push(response.tag[i]);
                $('.confirm').find('input').val('');
              }
            } else {
              $$toast.show(response.result.displayMsg);
            }
          });
        },
        confirmText: '\u6dfb\u52a0',
        cancelText: '\u53d6\u6d88'
      });
    };
    $scope.submitNurseTags = function () {
      $$loading.show();
      var tags = [];
      for (var i = 0; i < $scope.dataArr.tag.length; i++) {
        if ($scope.dataArr.tag[i].checked === true) {
          tags.push({ 'tagId': $scope.dataArr.tag[i].tagId });
        }
      }
      $http({
        method: 'PATCH',
        url: $$requestUrl.getUrl('updateNurseTags', { 'nurseId': $stateParams.nurseId }),
        data: { 'tag': tags }
      }).success(function (response) {
        if (typeof response.result.success != 'undefined' || response.result.success != '') {
          $$loading.hide();
        }
        if (response.result.success == true) {
          var ls = { time: 0 };
          localStorage['nurseList'] = JSON.stringify(ls);
          $$toast.show('\u6807\u7b7e\u4fee\u6539\u5b8c\u6210\uff01');
          history.go(-1);
        } else {
          $$toast.show(response.result.displayMsg);
        }
      });
    };
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by lixu on 16/9/14.
 */
app.controller('basicInfoStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar) {
    $scope.data = '';
    $$title.setTitle('\u4f18\u62a4\u52a9\u624b-\u8eab\u4efd\u8ba4\u8bc1');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
    $$navbar.hideRightQRbtn();
    // $$navbar.hideRightText();
    $$navbar.show();
  }
]);
/**
 * Created by lixu on 16/9/20.
 */
app.controller('beforeRecordStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$navbar',
  '$$tabbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$navbar, $$tabbar) {
    $scope.data = getData.data;
    $$log.debug('beforeRecordStateController');
    $$log.info($scope);
    $$navbar.setTitle('\u4e4b\u524d\u7684\u968f\u8bbf');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by gaoqz on 16/11/10.
 */
app.controller('blackListStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$navbar',
  '$$tabbar',
  'getData',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$navbar, $$tabbar, getData) {
    $$log.debug('blackListStateController');
    $scope.data = getData.data;
    $$title.setTitle('\u79d1\u5ba4\u9ed1\u540d\u5355');
    $$log.info($scope);
    $$tabbar.hide();
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by dongsj on 16/9/14.
 */
app.controller('chatStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$navbar',
  '$$tabbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$navbar, $$tabbar) {
    sessionStorage.imLoaded = false;
    $$log.debug('chatStateController');
    $$title.setTitle('\u804a\u5929');
    $$log.info($scope);
    $$tabbar.hide();
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by lixu on 16/9/19.
 */
app.controller('choiceClassStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$navbar',
  '$$tabbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$navbar, $$tabbar) {
    $scope.data = getData.data;
    $$log.debug('choiceClassStateController');
    $$log.info($scope);
    //view config
    $$title.setTitle('\u9009\u62e9\u73ed\u6b21');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by lixu on 16/9/23.
 */
app.controller('choiceColorStateController', [
  '$$tabbar',
  '$$navbar',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$color',
  function ($$tabbar, $$navbar, $rootScope, $state, $scope, $location, $$log, $$title, $$color) {
    $$log.debug('choiceColorStateController');
    $$log.info($scope);
    //view config
    $$title.setTitle('\u9009\u62e9\u989c\u8272');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by lixu on 16/9/23.
 */
app.controller('choiceDayStateController', [
  '$$tabbar',
  '$$navbar',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  function ($$tabbar, $$navbar, $rootScope, $state, $scope, $location, $$log, $$title, getData) {
    $scope.data = getData.data;
    $$log.debug('choiceDayStateController');
    $$log.info($scope);
    //view config
    $$title.setTitle('\u9009\u62e9\u63d0\u9192\u65f6\u95f4');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by lixu on 16/9/24.
 */
app.controller('choiceDepartmentStateController', [
  '$$tabbar',
  '$$navbar',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  function ($$tabbar, $$navbar, $rootScope, $state, $scope, $location, $$log, $$title, getData) {
    $scope.data = getData.data;
    //view config
    $$title.setTitle('\u9009\u62e9\u79d1\u5ba4');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by lixu on 16/9/23.
 */
app.controller('choiceHospitalStateController', [
  '$$tabbar',
  '$$navbar',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  function ($$tabbar, $$navbar, $rootScope, $state, $scope, $location, $$log, $$title, getData) {
    $scope.data = getData.data;
    //view config
    $$title.setTitle('\u9009\u62e9\u6240\u5728\u533b\u9662');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by lixu on 16/9/19.
 */
app.controller('choiceVisitStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$stateParams',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $stateParams, $$tabbar, $$navbar) {
    $scope.data = getData.data;
    //view config
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
    switch ($stateParams.operateType) {
    case 'show':
      $$title.setTitle('\u9009\u62e9\u968f\u8bbf\u6a21\u677f');
      break;
    }
    $$log.debug('choiceVisitStateController');
    $$log.info($scope);
  }
]);
/**
 * Created by lixu on 16/10/10.
 */
app.controller('classListStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$navbar',
  '$$tabbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$navbar, $$tabbar) {
    $scope.data = getData.data;
    $$log.debug('classListStateController');
    $$log.info($scope);
    //view config
    $$title.setTitle('\u73ed\u6b21\u5217\u8868');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by yihuan on 16/9/19.
 */
var newSelPushTemplate = [];
app.controller('contentListStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$navbar',
  '$$tabbar',
  'getData',
  '$stateParams',
  '$$txIM',
  '$$toast',
  '$http',
  '$$requestUrl',
  '$$iconfont',
  '$$color',
  '$$loading',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$navbar, $$tabbar, getData, $stateParams, $$txIM, $$toast, $http, $$requestUrl, $$iconfont, $$color, $$loading) {
    $scope.colorTransform = $$color.transform;
    $scope.data = getData.data;
    $scope.iconfont = $$iconfont.init;
    $$log.debug('contentListStateController');
    $$log.info($scope.data);
    $$navbar.setTitle('\u9009\u62e9\u63a8\u9001\u5185\u5bb9');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
    $scope.dataArr = $scope.data;
    $$log.debug('$scope.dataArr');
    $$log.debug($scope.dataArr);
    $scope.selectData = {};
    function getOldPushObj(pushObj) {
      switch (pushObj) {
      case 'oldSelPushTemplate':
        if (oldSelPushTemplate.article.length !== 0 || oldSelPushTemplate.tool.length !== 0) {
          //art
          changeDataSel('art', $scope.dataArr['cms-a'], oldSelPushTemplate.article);
          //tool
          changeDataSel('tool', $scope.dataArr['cms-t'], oldSelPushTemplate.tool);
        }
        function changeDataSel(str, group, oldgroup) {
          switch (str) {
          case 'art':
            for (var i = 0; i < group.articleGroup.length; i++) {
              //设置第一个选项默认展开
              if (i === 0) {
                group.articleGroup[i].open = true;
              } else {
                group.articleGroup[i].open = false;
              }
              // i == 0 ? group.articleGroup[i].open = true : group.articleGroup[i].open = false;
              if (group.articleGroup[i].article !== undefined) {
                for (var j = 0; j < group.articleGroup[i].article.length; j++) {
                  for (var k = 0; k < oldgroup.length; k++) {
                    if (oldgroup[k].id == group.articleGroup[i].article[j].id) {
                      group.articleGroup[i].article[j].sel = true;
                    } else {
                      group.articleGroup[i].article[j].sel = group.articleGroup[i].article[j].sel || false;
                    }
                  }
                }
                var artLen = group.articleGroup[i].article.length;
                for (var m = 0; m < group.articleGroup[i].article.length; m++) {
                  if (group.articleGroup[i].article[m].sel === true) {
                    artLen = artLen - 1;
                  }
                }
                //对全选操作处理
                if (artLen == group.articleGroup[i].article.length) {
                  group.articleGroup[i].sel = 0;
                } else if (artLen === 0) {
                  group.articleGroup[i].sel = 2;
                } else {
                  group.articleGroup[i].sel = 1;
                }
              } else {
                i = i + 1;
              }
            }
            break;
          case 'tool':
            for (var i = 0; i < group.toolGroup.length; i++) {
              //设置第一个选项默认展开
              if (i === 0) {
                group.toolGroup[i].open = true;
              } else {
                group.toolGroup[i].open = false;
              }
              // i== 0 ? group.toolGroup[i].open = true : group.toolGroup[i].open =false;
              if (group.toolGroup[i].tool !== undefined) {
                for (var j = 0; j < group.toolGroup[i].tool.length; j++) {
                  for (var k = 0; k < oldgroup.length; k++) {
                    if (oldgroup[k].id == group.toolGroup[i].tool[j].id) {
                      group.toolGroup[i].tool[j].sel = true;
                    } else {
                      group.toolGroup[i].tool[j].sel = group.toolGroup[i].tool[j].sel || false;
                    }
                  }
                }
                var toolLen = group.toolGroup[i].tool.length;
                for (var m = 0; m < group.toolGroup[i].tool.length; m++) {
                  if (group.toolGroup[i].tool[m].sel === true) {
                    toolLen = toolLen - 1;
                  }
                }
                //对全选操作处理
                if (toolLen == group.toolGroup[i].tool.length) {
                  group.toolGroup[i].sel = 0;
                } else if (toolLen === 0) {
                  group.toolGroup[i].sel = 2;
                } else {
                  group.toolGroup[i].sel = 1;
                }
              } else {
                i = i + 1;
              }
            }
            break;
          }
          if (str == 'art') {
            var isAllArt = true;
            for (var j = 0; j < group.articleGroup.length; j++) {
              if (group.articleGroup[j].sel != 2) {
                isAllArt = false;
                break;
              }
            }
            $scope.dataArr['cms-a'].sel = isAllArt;
          } else {
            var isAllTool = true;
            for (var j = 0; j < group.toolGroup.length; j++) {
              if (group.toolGroup[j].sel != 2) {
                isAllTool = false;
                break;
              }
            }
            $scope.dataArr['cms-t'].sel = isAllTool;
          }
        }
        break;
      }
    }
    if (oldSelPushTemplate !== undefined) {
      getOldPushObj('oldSelPushTemplate');
    } else {
      $$log.debug('\u8fdb\u5165');
      //设置第一个选项默认展开
      if (typeof $scope.dataArr['cms-t'].toolGroup != 'undefined') {
        for (var i = 0; i < $scope.dataArr['cms-t'].toolGroup.length; i++) {
          //设置第一个选项默认展开
          if (i === 0) {
            $scope.dataArr['cms-t'].toolGroup[i].open = true;
          } else {
            $scope.dataArr['cms-t'].toolGroup[i].open = false;
          }  // i== 0 ? $scope.dataArr['cms-t'].toolGroup[i].open = true : $scope.dataArr['cms-t'].toolGroup[i].open =false;
        }
      }
      if (typeof $scope.dataArr['cms-a'].articleGroup != 'undefined') {
        for (var j = 0; j < $scope.dataArr['cms-a'].articleGroup.length; j++) {
          //设置第一个选项默认展开
          if (j === 0) {
            $scope.dataArr['cms-a'].articleGroup[j].open = true;
          } else {
            $scope.dataArr['cms-a'].articleGroup[j].open = false;
          }  // j== 0 ? $scope.dataArr['cms-a'].articleGroup[j].open = true : $scope.dataArr['cms-a'].articleGroup[j].open =false;
        }
      }
    }
    //判断是否全选
    function isAllCheck(type) {
      var allChoose = true;
      if (type == 'art') {
        for (var i = 0; i < $scope.dataArr['cms-a'].articleGroup.length; i++) {
          if ($scope.dataArr['cms-a'].articleGroup[i].article !== undefined) {
            for (var j = 0; j < $scope.dataArr['cms-a'].articleGroup[i].article.length; j++) {
              if ($scope.dataArr['cms-a'].articleGroup[i].article[j].sel !== true) {
                allChoose = false;
                break;
              }
            }
            $scope.dataArr['cms-a'].sel = allChoose;
          } else {
            i = i + 1;
          }
        }
      } else {
        for (var i = 0; i < $scope.dataArr['cms-t'].toolGroup.length; i++) {
          if ($scope.dataArr['cms-t'].toolGroup[i].tool !== undefined) {
            for (var j = 0; j < $scope.dataArr['cms-t'].toolGroup[i].tool.length; j++) {
              if ($scope.dataArr['cms-t'].toolGroup[i].tool[j].sel !== true) {
                allChoose = false;
                break;
              } else {
              }
            }
            $scope.dataArr['cms-t'].sel = allChoose;
          }
        }
      }
    }
    //选择当前全部
    $scope.allCheck = function (content) {
      $$log.debug(content);
      content.sel = content.sel == 2 ? 0 : 2;
      if (content.mark == 'art') {
        if (content.article !== undefined) {
          for (var i = 0; i < content.article.length; i++) {
            content.article[i].sel = content.sel == 2;
          }
          isAllCheck('art');
        }
      } else {
        if (content.tool !== undefined) {
          for (var j = 0; j < content.tool.length; j++) {
            content.tool[j].sel = content.sel == 2;
          }
          isAllCheck('tool');
        }
      }
      $$log.debug(content.sel);
    };
    $scope.allCheckArticle = function () {
      $scope.dataArr['cms-a'].sel = $scope.dataArr['cms-a'].sel !== true;
      for (var i = 0; i < $scope.dataArr['cms-a'].articleGroup.length; i++) {
        if ($scope.dataArr['cms-a'].sel) {
          $scope.dataArr['cms-a'].articleGroup[i].sel = 2;
          if ($scope.dataArr['cms-a'].articleGroup[i].article !== undefined) {
            for (var j = 0; j < $scope.dataArr['cms-a'].articleGroup[i].article.length; j++) {
              $scope.dataArr['cms-a'].articleGroup[i].article[j].sel = true;
            }
          } else {
            i = i + 1;
          }
        } else {
          $scope.dataArr['cms-a'].articleGroup[i].sel = 0;
          if ($scope.dataArr['cms-a'].articleGroup[i].article !== undefined) {
            for (var j = 0; j < $scope.dataArr['cms-a'].articleGroup[i].article.length; j++) {
              $scope.dataArr['cms-a'].articleGroup[i].article[j].sel = false;
            }
          } else {
            i = i + 1;
          }
        }
      }
    };
    $scope.allCheckTools = function () {
      $scope.dataArr['cms-t'].sel = $scope.dataArr['cms-t'].sel !== true;
      $$log.info($scope.dataArr);
      for (var i = 0; i < $scope.dataArr['cms-t'].toolGroup.length; i++) {
        if ($scope.dataArr['cms-t'].sel) {
          $scope.dataArr['cms-t'].toolGroup[i].sel = 2;
          if ($scope.dataArr['cms-t'].toolGroup[i].tool !== undefined) {
            for (var j = 0; j < $scope.dataArr['cms-t'].toolGroup[i].tool.length; j++) {
              $scope.dataArr['cms-t'].toolGroup[i].tool[j].sel = true;
            }
          } else {
            i = i + 1;
          }
        } else {
          $scope.dataArr['cms-t'].toolGroup[i].sel = 0;
          if ($scope.dataArr['cms-t'].toolGroup[i].tool !== undefined) {
            for (var j = 0; j < $scope.dataArr['cms-t'].toolGroup[i].tool.length; j++) {
              $scope.dataArr['cms-t'].toolGroup[i].tool[j].sel = false;
            }
          } else {
            i = i + 1;
          }
        }
      }
    };
    //选择当前
    $scope.checkPush = function (content, article) {
      $$log.debug(article);
      $$log.info(content);
      article.sel = !article.sel;
      var selAll = true;
      var unselAll = true;
      if (content.mark == 'art') {
        for (var i = 0; i < content.article.length; i++) {
          if (content.article[i].sel !== true) {
            selAll = false;
          } else {
            unselAll = false;
          }
        }
      } else {
        for (var j = 0; j < content.tool.length; j++) {
          if (content.tool[j].sel !== true) {
            selAll = false;
          } else {
            unselAll = false;
          }
        }
      }
      if (selAll === true) {
        content.sel = 2;
      } else if (unselAll === true) {
        content.sel = 0;
      } else {
        content.sel = 1;
      }
      isAllCheck(content.mark);
    };
    //卷展
    $scope.openClose = function (content) {
      content.open = !content.open;
    };
    //完成选择
    $scope.submitPush = function () {
      pushPatient = pushPatient || [localStorage.targetChatId];
      $$log.debug('$scope.dataArr$scope.dataArr$scope.dataArr$scope.dataArr');
      $$log.debug($scope.dataArr);
      switch ($stateParams.operateType) {
      case 'pushTemplate':
        var article = [];
        var tool = [];
        for (var i = 0; i < $scope.dataArr['cms-a'].articleGroup.length; i++) {
          if ($scope.dataArr['cms-a'].articleGroup[i].article !== undefined) {
            for (var j = 0; j < $scope.dataArr['cms-a'].articleGroup[i].article.length; j++) {
              if ($scope.dataArr['cms-a'].articleGroup[i].article[j].sel === true) {
                article.push({
                  'id': $scope.dataArr['cms-a'].articleGroup[i].article[j].id,
                  'title': $scope.dataArr['cms-a'].articleGroup[i].article[j].name
                });
              }
            }
          } else {
            i = i + 1;
          }
        }
        for (var k = 0; k < $scope.dataArr['cms-t'].toolGroup.length; k++) {
          if ($scope.dataArr['cms-t'].toolGroup[k].tool !== undefined) {
            for (var m = 0; m < $scope.dataArr['cms-t'].toolGroup[k].tool.length; m++) {
              if ($scope.dataArr['cms-t'].toolGroup[k].tool[m].sel === true) {
                tool.push({
                  'id': $scope.dataArr['cms-t'].toolGroup[k].tool[m].id,
                  'title': $scope.dataArr['cms-t'].toolGroup[k].tool[m].name
                });
              }
            }
          } else {
            k = k + 1;
          }
        }
        $$log.info('article');
        $$log.debug(article);
        //去重
        var articleArr = [], isArtUnique;
        for (var i = 0; i < article.length; i++) {
          isArtUnique = true;
          for (var j = 0; j < articleArr.length; j++) {
            if (articleArr[j].id == article[i].id) {
              isArtUnique = false;
              break;
            }
          }
          if (isArtUnique) {
            articleArr.push(article[i]);
          }
        }
        var toolArr = [], isToolUnique;
        for (var i = 0; i < tool.length; i++) {
          isToolUnique = true;
          for (var j = 0; j < toolArr.length; j++) {
            if (toolArr[j].id == tool[i].id) {
              isToolUnique = false;
              break;
            }
          }
          if (isToolUnique) {
            toolArr.push(tool[i]);
          }
        }
        //模版推送
        if (newSelPushTemplate.length === 0) {
          newSelPushTemplate.push({
            'article': articleArr,
            'tool': toolArr,
            'eventMark': oldSelPushTemplate.eventMark
          });
        } else {
          for (var q = 0; q < newSelPushTemplate.length; q++) {
            if (newSelPushTemplate[q].eventMark == oldSelPushTemplate.eventMark) {
              newSelPushTemplate[q] = {
                'article': articleArr,
                'tool': toolArr,
                'eventMark': oldSelPushTemplate.eventMark
              };
            } else {
              newSelPushTemplate.push({
                'article': articleArr,
                'tool': toolArr,
                'eventMark': oldSelPushTemplate.eventMark
              });
            }
          }
        }
        $$log.debug('\u65b0\u9009\u62e9\u7684\u6a21\u7248\u63a8\u9001\u5185\u5bb9\u4e3a:newSelPushTemplate');
        $$log.debug(newSelPushTemplate);
        history.go(-1);
        break;
      case 'patientPushObj':
        //通过患者标签筛选页面为患者选择
        $$log.debug('pushPatientpushPatientpushPatient');
        //读取患者对象数组
        $$log.debug(pushPatient);
        $$log.debug('pushPatientId');
        $$log.debug(pushPatientId);
        if (pushPatient.length == 0) {
          if (localStorage.targetChatId !== '') {
            pushPatient = [localStorage.targetChatId];
          }
        }
        var articleIds = [];
        var toolIds = [];
        var eleArr = [];
        for (var i = 0; i < $scope.dataArr['cms-a'].articleGroup.length; i++) {
          if ($scope.dataArr['cms-a'].articleGroup[i].article !== undefined) {
            for (var j = 0; j < $scope.dataArr['cms-a'].articleGroup[i].article.length; j++) {
              if ($scope.dataArr['cms-a'].articleGroup[i].article[j].sel === true) {
                eleArr.push({
                  'id': $scope.dataArr['cms-a'].articleGroup[i].article[j].id,
                  'name': $scope.dataArr['cms-a'].articleGroup[i].article[j].name,
                  'desc': $scope.dataArr['cms-a'].articleGroup[i].article[j].brief,
                  'img': $scope.dataArr['cms-a'].articleGroup[i].article[j].iconUrl,
                  'type': '[\u5eb7\u590d\u6587\u7ae0]'
                });
                articleIds.push($scope.dataArr['cms-a'].articleGroup[i].article[j].id);
              }
            }
          } else {
            i = i + 1;
          }
        }
        for (var k = 0; k < $scope.dataArr['cms-t'].toolGroup.length; k++) {
          if ($scope.dataArr['cms-t'].toolGroup[k].tool !== undefined) {
            for (var m = 0; m < $scope.dataArr['cms-t'].toolGroup[k].tool.length; m++) {
              if ($scope.dataArr['cms-t'].toolGroup[k].tool[m].sel === true) {
                eleArr.push({
                  'id': $scope.dataArr['cms-t'].toolGroup[k].tool[m].id,
                  'name': $scope.dataArr['cms-t'].toolGroup[k].tool[m].name,
                  'desc': $scope.dataArr['cms-t'].toolGroup[k].tool[m].brief,
                  'img': $scope.dataArr['cms-t'].toolGroup[k].tool[m].iconUrl,
                  'type': '[\u5eb7\u590d\u5de5\u5177]'
                });
                toolIds.push($scope.dataArr['cms-t'].toolGroup[k].tool[m].id);
              }
            }
          } else {
            k = k + 1;
          }
        }
        //去重
        var eleArrData = [], isTrue;
        for (var i = 0; i < eleArr.length; i++) {
          isTrue = true;
          for (var j = 0; j < eleArrData.length; j++) {
            if (eleArrData[j].id === eleArr[i].id) {
              isTrue = false;
              break;
            }
          }
          if (isTrue === true) {
            eleArrData.push(eleArr[i]);
          }
        }
        var articleArrIds = [], isArtUnique;
        for (var i = 0; i < articleIds.length; i++) {
          isArtUnique = true;
          for (var j = 0; j < articleArrIds.length; j++) {
            if (articleArrIds[j] == articleIds[i]) {
              isArtUnique = false;
              break;
            }
          }
          if (isArtUnique === true) {
            articleArrIds.push(articleIds[i]);
          }
        }
        var toolArrIds = [], isToolUnique;
        for (var i = 0; i < toolIds.length; i++) {
          isToolUnique = true;
          for (var j = 0; j < toolArrIds.length; j++) {
            if (toolArrIds[j] == toolIds[i]) {
              isToolUnique = false;
              break;
            }
          }
          if (isToolUnique === true) {
            toolArrIds.push(toolIds[i]);
          }
        }
        $$log.info('-------------');
        $$log.debug(eleArrData);
        $$log.debug(articleArrIds);
        $$log.debug(toolArrIds);
        if (eleArrData.length === 0) {
          $$toast.show('\u8bf7\u9009\u62e9\u60f3\u8981\u63a8\u9001\u7684\u5185\u5bb9');
        } else {
          $$loading.show();
          $$txIM.initImArrayAndSend(pushPatient, eleArrData, true);
          for (var i = 0; i < pushPatientId.length; i++) {
            createFriend(pushPatientId[i]);
          }
          function createFriend(toId) {
            $http({
              method: 'GET',
              url: $$requestUrl.getUrl('createPatientChat', {
                fromId: localStorage.globalNurseId,
                toId: toId
              })
            }).success(function (response) {
              if (response.result.success == true) {
                $$log.debug('\u548c\u60a3\u8005\u5efa\u7acb\u804a\u5929\u6210\u529f\uff01');
                $$log.debug('createPatientNurseChatStateController.response');
                $$log.info(response);
              } else {
                var display = response.result.displayMsg;
                $$toast.show(display.toString());
              }
            });
          }
          ;
          $http({
            method: 'POST',
            url: $$requestUrl.getUrl('createPatientsWeiXinPush'),
            data: {
              'fromId': localStorage.globalNurseId,
              'toChatIdentifiers': pushPatient,
              'articleIds': articleArrIds,
              'toolIds': toolArrIds,
              'departmentId': localStorage.globalDepartmentId
            }
          }).success(function (response) {
            if (typeof response.result.success != 'undefined') {
              $$loading.hide();
            }
            if (response.result.success === true) {
              if (pushPatient.length == 1) {
                localStorage.targetChatId = pushPatient[0];
                pushPatient = [];
                $state.go('chat');
              } else {
                //打开首页
                pushPatient = [];
                var t = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/messageTag';
                $$log.debug(t);
                jumpPage(t);
              }
              function jumpPage(p) {
                location.href = p;
              }
            }
          });
        }
        break;
      }
    };
  }
]);
/**
 * Created by lixu on 16/9/14.
 */
app.controller('createCalenderStateController', [
  '$$navbar',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  function ($$navbar, $rootScope, $state, $scope, $location, $$log, $$title, $$tabbar) {
    $$log.debug('createCalenderStateController');
    $$log.info($scope);
    $$title.setTitle('\u65b0\u5efa\u65e5\u7a0b');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();  // $$navbar.setRightBtnShow(3,'跳过');
  }
]);
/**
 * Created by lixu on 16/9/20.
 */
app.controller('dutyCalendarStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$stateParams',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $stateParams, $$tabbar, $$navbar) {
    $scope.data = getData.data;
    $$log.debug($stateParams);
    $scope.weekOffset = $stateParams.weekOffset === '' ? 0 : $stateParams.weekOffset;
    $$log.debug('dutyCalendarStateController');
    $$log.info($scope);
    $$title.setTitle('\u67e5\u770b\u6392\u73ed\u8868');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by lixu on 16/9/26.
 */
app.controller('dutyChangeStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$stateParams',
  '$$tabbar',
  '$$navbar',
  '$$shence',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $stateParams, $$tabbar, $$navbar, $$shence) {
    $scope.data = getData.data;
    $scope.weekOffset = $stateParams.weekOffset === '' ? 0 : $stateParams.weekOffset;
    // $$shence.track('changeScheduleClassStateController',{
    //     weekOffset:($stateParams.weekOffset===""?0:$stateParams.weekOffset)
    // });
    // $$shence.track('_YHZS-V1.2', {
    //     activeOption: 'changeScheduleClassStateController'
    // });
    $$log.debug('dutyChangeStateController');
    $$log.info($scope);
    $$title.setTitle('\u67e5\u770b\u6392\u73ed\u8868');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by lixu on 16/9/21.
 */
app.controller('dutyListStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$stateParams',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $stateParams, $$tabbar, $$navbar) {
    $scope.data = getData.data;
    $scope.weekOffset = $stateParams.weekOffset === '' ? 0 : $stateParams.weekOffset;
    $$log.debug('dutyListStateController');
    $$log.info($scope);
    $scope.nowTimeDay = new Date().format('yyyy-MM-dd').split('-')[1];
    console.log($scope.nowTimeDay);
    // $$title.setTitle('批量排班'+'（'+$scope.nowTimeDay+'月）');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by lixu on 16/9/19.
 */
var globalTemplateData = {};
app.controller('editVisitStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$tabbar',
  '$$navbar',
  '$$title',
  'getData',
  '$stateParams',
  function ($rootScope, $state, $scope, $location, $$log, $$tabbar, $$navbar, $$title, getData, $stateParams) {
    $scope.data = getData.data;
    newSelPushTemplate = [];
    globalTemplateData = {};
    switch ($stateParams.operateType) {
    case 'show':
      $$title.setTitle('\u7f16\u8f91\u968f\u8bbf\u6a21\u677f');
      break;
    case 'add':
      $$title.setTitle('\u7ba1\u7406\u968f\u8bbf\u6a21\u677f');
      break;
    }
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
    $$log.debug('editVisitStateController');
    $$log.info($scope);
  }
]);
/**
 * Created by dongsj on 16/10/12.
 */
app.controller('fakeMainPageStateController', [
  '$$confirm',
  '$$toast',
  '$state',
  '$scope',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  function ($$confirm, $$toast, $state, $scope, $$log, $$title, $$tabbar, $$navbar) {
    $scope.toLogin = function () {
      $$confirm.show({
        title: '\u5c1a\u672a\u767b\u5f55',
        msg: '\u8bf7\u767b\u5f55\u540e\u8fdb\u884c\u64cd\u4f5c',
        callback: function () {
          $state.go('login');
        },
        confirmText: '\u767b\u5f55',
        cancelText: '\u53d6\u6d88'
      });  // $$toast.show('请您登录后进行操作');
           // $state.go('login');
    };
    $$log.debug('fakeMainPageStateController');
    $$log.info($scope);
    $$title.setTitle('\u4f18\u62a4\u52a9\u624b');
    $$navbar.show();
    $$tabbar.setIndex(0);
    $$navbar.hideReturnBtn();
  }
]);
/**
 * Created by dongsj on 16/10/11.
 */
app.controller('guidePageStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$navbar',
  '$$tabbar',
  '$$shence',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$navbar, $$tabbar, $$shence) {
    $$shence.track('_guidePageStateController', { appStoreName: appStoreName });
    localStorage.guided = 'true';
    $$tabbar.hide();
    $$navbar.hide();
  }
]);
/**
 * Created by dongsj on 2016/9/14.
 */
app.controller('inputConfirmDemo', [
  '$$confirm',
  '$timeout',
  '$$loading',
  '$$toast',
  '$$navbar',
  function ($$confirm, $timeout, $$loading, $$toast, $$navbar) {
    $timeout(function () {
      $$navbar.setTitle('test');
      $$navbar.showReturnBtn();
      $$confirm.show({
        title: 'confirm',
        msg: '<input class="h3 border-line border-color-global-base" type="text">',
        callback: function () {
          $$toast.show('confirm clicked', function () {
            $$loading.show();
          });
        },
        confirmText: 'confirm',
        cancelText: 'cancel'
      });
    });
  }
]);
/**
 * Created by yihuan on 16/9/18.
 */
app.controller('inviteNurseStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$http',
  '$$requestUrl',
  '$$toast',
  '$$navbar',
  '$$tabbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $http, $$requestUrl, $$toast, $$navbar, $$tabbar) {
    $scope.headImgUrl = headImgUrl;
    $$navbar.setTitle('\u9080\u8bf7\u540c\u4e8b');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
    $scope.inviteNurse = function () {
      $scope.nurseId = 1;
      //模拟数据
      if ($scope.nursePhone == undefined || $scope.nursePhone == null) {
        $$toast.show('\u4e0d\u80fd\u4e3a\u7a7a');
        return false;
      }
      if ($scope.nursePhone.toString().length < 11) {
        $$toast.show('\u8bf7\u68c0\u67e5\u4fe1\u606f\u540e\u63d0\u4ea4');
        return false;
      } else {
        $scope.phone = $scope.nursePhone.toString();
        $http({
          method: 'post',
          url: $$requestUrl.getUrl('createInviteNurse', { 'nurseId': localStorage.globalNurseId }),
          data: { phone: $scope.phone.toString() }
        }).success(function (response) {
          if (response.result.success == true) {
            $$toast.show('\u53d1\u9001\u77ed\u4fe1\u9080\u8bf7\u6210\u529f\uff01');
          } else {
            $$toast.show(response.result.displayMsg);
          }
        });
      }
    };
  }
]);
/**
 * Created by lixu on 16/9/14.
 */
app.controller('loginStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$navbar',
  '$$tabbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$navbar, $$tabbar) {
    $$tabbar.setIndex(-1);
    $$navbar.hide();
  }
]);
/**
 * Created by lixu on 16/11/16.
 */
app.controller('manageStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  '$$shence',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar, $$shence) {
    $$log.debug('manageStateController');
    $$log.info($scope);
    $$shence.track('manageStateController');
    //配置页面信息
    $$navbar.setTitle('\u7ba1\u7406');
    $$navbar.show();
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by dongsj on 16/9/18.
 */
app.controller('messageTagStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$tabbar',
  '$$navbar',
  '$$shence',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$tabbar, $$navbar, $$shence) {
    sessionStorage.imLoaded = false;
    $$tabbar.setNewMsg(0, false);
    $scope.data = getData.data;
    $scope.notify = [];
    $scope.calendar = [];
    $scope.onAddClick = function () {
      $$shence.track('_messageTagStateControllerAdd');
    };
    $scope.gotoPage = function (page) {
      location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/' + page;
    };
    var i;
    for (i = 0; $scope.data.today != undefined && i < $scope.data.today.length; i++) {
      // if ($scope.data.today[i].type == 1) {
      $scope.notify.push($scope.data.today[i].title);  // }
    }
    for (i = 0; $scope.data.expire != undefined && i < $scope.data.expire.length; i++) {
      // if ($scope.data.expire[i].type == 1) {
      $scope.notify.push($scope.data.expire[i].title);  // }
    }
    for (i = 0; $scope.data.future != undefined && i < $scope.data.future.length; i++) {
      // if ($scope.data.future[i].type == 1) {
      $scope.notify.push($scope.data.future[i].title);  // }
    }
    for (i = 0; $scope.data.roster != undefined && i < $scope.data.roster.length; i++) {
      $scope.calendar.push($scope.data.roster[i].title);
    }
    $scope.calendar = $scope.calendar.join(' ');
    $$log.debug('messageTagStateController');
    $$log.info($scope);
    $$title.setTitle('\u4f18\u62a4\u52a9\u624b');
    $$navbar.show();
    $$tabbar.setIndex(0);
    $$navbar.hideReturnBtn();
  }
]);
/**
 * Created by yihuan on 16/9/19.
 */
var nurseDetail = '';
var checkedNurseTag = [];
app.controller('nurseDetailStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$navbar',
  '$$tabbar',
  'getData',
  '$stateParams',
  '$http',
  '$$requestUrl',
  '$$loading',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$navbar, $$tabbar, getData, $stateParams, $http, $$requestUrl, $$loading) {
    checkedNurseTag = [];
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
    $scope.data = getData.data;
    $scope.filterJuge = $stateParams.nurseId;
    for (var i = 0; i < $scope.data.all.length; i++) {
      if ($scope.data.all[i].nurseId == $scope.filterJuge) {
        nurseDetail = $scope.data.all[i];
        break;
      }
    }
    $$navbar.setTitle(nurseDetail.name ? nurseDetail.name : '\u540c\u4e8b\u8be6\u60c5\u9875');
    //设置默认选中的tag数组
    if (typeof nurseDetail.tag != 'undefined') {
      for (var j = 0; j < nurseDetail.tag.length; j++) {
        checkedNurseTag.push(nurseDetail.tag[j].tagId);
      }
    }
    $scope.ownNurseId = localStorage.globalNurseId;
    $scope.nurseInfo = nurseDetail;
    $scope.tagStr = '';
    if ($scope.nurseInfo.tag != undefined) {
      for (var i = 0; i < $scope.nurseInfo.tag.length; i++) {
        if (i < $scope.nurseInfo.tag.length - 1) {
          $scope.tagStr = $scope.tagStr + $scope.nurseInfo.tag[i].tagName + '\uff0c';
        } else {
          $scope.tagStr = $scope.tagStr + $scope.nurseInfo.tag[i].tagName;
        }
      }
    }
    classArr = [];
    orderObjArr = [];
    remindArr = [];
    admissionTime = null;
    $scope.goToSort = function (nurse) {
      var nurserData = {
          'member': {
            'id': nurse.nurseId,
            'name': nurse.name
          },
          'delObj': []
        };
      orderObjArr = [nurserData];
      $state.go('sort', { operateType: 'alert' });
    };
    $scope.gotoChat = function (nurse) {
      $$loading.show();
      $http({
        method: 'GET',
        url: $$requestUrl.getUrl('createNurseChat', {
          fromId: localStorage.globalNurseId,
          toId: $stateParams.nurseId
        })
      }).success(function (response) {
        $$loading.hide();
        if (response.result.success == true) {
          $$log.debug('\u548c\u62a4\u58eb\u5efa\u7acb\u804a\u5929\u6210\u529f\uff01');
          localStorage.targetChatId = response.toAccount.identifier;
          location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/chat';
          $$log.debug('createNurseNurseChatStateController');
          $$log.info(response);
        } else {
          $$toast.show(response.result.displayMsg ? response.result.displayMsg : '\u670d\u52a1\u5668\u5411\u4f60\u6254\u6765\u4e86\u4e00\u4e2a\u9519\u8bef');
        }
      });
    };
  }
]);
/**
 * Created by yihuan on 16/9/19.
 */
var orderObjArr = [];
var attentionObjArr = [];
var runNurseObjArr = [];
app.controller('nurseListStateController', [
  '$$toast',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$navbar',
  '$$tabbar',
  'getData',
  '$stateParams',
  function ($$toast, $rootScope, $state, $scope, $location, $$log, $$title, $$navbar, $$tabbar, getData, $stateParams) {
    $scope.data = getData.data;
    $scope.open = true;
    if (typeof $scope.data == 'undefined') {
      $$log.debug('\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6570\u636e\u4e3a\u7a7a');
      $$toast.show('\u670d\u52a1\u5668\u8fd4\u56de\u6570\u636e\u4e3a\u7a7a');
      return false;  // $scope.dataArr.nurse.length == 0;
    } else {
      $scope.dataArr = $scope.data;
    }
    $scope.operateType = $stateParams.operateType;
    //1--选择我的同事页面, 2--同事页面
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
    $scope.ownNurseId = localStorage.globalNurseId;
    if (typeof $scope.dataArr.nurse != 'undefined') {
      for (var i = 0; i < $scope.dataArr.nurse.length; i++) {
        $scope.dataArr.nurse[i].memberNum = $scope.dataArr.nurse[i].member.length;  // if (i == 0) {
                                                                                    //     $scope.dataArr.nurse[i].open = true;
                                                                                    // } else {
                                                                                    //     $scope.dataArr.nurse[i].open = false;
                                                                                    // }
      }
    }
    //显示已经选择的同事
    switch ($stateParams.operateType) {
    case 'show':
      $$navbar.setTitle('\u6211\u7684\u540c\u4e8b');
      break;
    case 'selectOrder':
      $$navbar.setTitle('\u9009\u62e9\u6392\u73ed\u5bf9\u8c61');
      showSel(orderObjArr);
      break;
    case 'selectAttention':
      $$navbar.setTitle('\u9009\u62e9\u5173\u6ce8\u5bf9\u8c61');
      showSel(attentionObjArr);
      break;
    case 'selectRunNurse':
      $$navbar.setTitle('\u9009\u62e9\u6267\u884c\u62a4\u58eb');
      showSel(runNurseObjArr);
      break;
    }
    function showSel(arr) {
      $$log.debug('\u9ed8\u8ba4\u9009\u4e2d\u7684\u6570\u7ec4');
      $$log.debug(arr);
      if (arr.length == 0) {
        $$log.debug('selArr === null');
        return false;
      } else {
        for (var j = 0; j < $scope.dataArr.all.length; j++) {
          for (var i = 0; i < arr.length; i++) {
            if ($scope.dataArr.all[j].nurseId == arr[i].member.id) {
              $scope.dataArr.all[j].sel = true;
            } else {
              $scope.dataArr.all[j].sel = $scope.dataArr.all[j].sel || false;
            }
          }
        }
        var isAll = true;
        for (var j = 0; j < $scope.dataArr.all.length; j++) {
          if ($scope.dataArr.all[j].sel != true) {
            isAll = false;
            break;
          } else {
            isAll = true;
          }
        }
        $scope.dataArr.all.sel = isAll;
      }
    }
    //openCloseAll
    $scope.openCloseAll = function () {
      $scope.open = !$scope.open;
    };
    //openClose
    $scope.openClose = function (nurse) {
      nurse.open = !nurse.open;
    };
    //allCheck
    $scope.allCheck = function () {
      $scope.dataArr.all.sel = !$scope.dataArr.all.sel;
      for (var j = 0; j < $scope.dataArr.all.length; j++) {
        $scope.dataArr.all[j].sel = $scope.dataArr.all.sel;
      }
    };
    $scope.allNurseCheck = function (nurse) {
      nurse.sel = !nurse.sel;
      for (var j = 0; j < nurse.member.length; j++) {
        nurse.member[j].sel = nurse.sel;
      }
    };
    $scope.checkNurseSelf = function (selfObj, nurse) {
      selfObj.sel = !selfObj.sel;
      nurse.sel = true;
      for (var i = 0; i < nurse.member.length; i++) {
        if (nurse.member[i].sel != true) {
          nurse.sel = false;
          break;
        } else {
        }
      }
    };
    //checkSelf
    $scope.checkSelf = function (selfObj) {
      selfObj.sel = !selfObj.sel;
      var isAll = true;
      for (var j = 0; j < $scope.dataArr.all.length; j++) {
        if ($scope.dataArr.all[j].sel != true) {
          isAll = false;
          break;
        }
      }
      $scope.dataArr.all.sel = isAll;
    };
    //setNurseArr
    $scope.setNurseArr = function () {
      $$log.debug($scope.dataArr);
      $scope.nurseObjArr = [];
      $$log.debug($scope.nurseObjArr);
      for (var i = 0; i < $scope.dataArr.all.length; i++) {
        if ($scope.dataArr.all[i].sel == true) {
          var member = {
              'name': $scope.dataArr.all[i].name,
              'id': $scope.dataArr.all[i].nurseId
            };
          var item = {
              'member': member,
              delObj: []
            };
          $scope.nurseObjArr.push(item);
        }
      }
      if ($scope.dataArr.nurse != undefined) {
        for (var i = 0; i < $scope.dataArr.nurse.length; i++) {
          for (var j = 0; j < $scope.dataArr.nurse[i].member.length; j++) {
            if ($scope.dataArr.nurse[i].member[j].sel == true) {
              var member = {
                  'name': $scope.dataArr.nurse[i].member[j].name,
                  'id': $scope.dataArr.nurse[i].member[j].nurseId
                };
              var item = {
                  'member': member,
                  delObj: []
                };
              $scope.nurseObjArr.push(item);
            }
          }
        }
      }
      var nurseArr = [], isUnique;
      for (var i = 0; i < $scope.nurseObjArr.length; i++) {
        isUnique = true;
        for (var j = 0; j < nurseArr.length; j++) {
          if (nurseArr[j].member.id == $scope.nurseObjArr[i].member.id) {
            isUnique = false;
            break;
          }
        }
        if (isUnique) {
          nurseArr.push($scope.nurseObjArr[i]);
        }
      }
      $scope.nurseObjArr = nurseArr;
      switch ($scope.operateType) {
      case 'selectOrder':
        orderObjArr = $scope.nurseObjArr;
        break;
      case 'selectAttention':
        attentionObjArr = $scope.nurseObjArr;
        $$log.debug(attentionObjArr);
        break;
      case 'selectRunNurse':
        runNurseObjArr = $scope.nurseObjArr;
        break;
      }
      if ($scope.nurseObjArr.length == 0) {
        $$toast.show('\u6ca1\u6709\u9009\u62e9\u540c\u4e8b,\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a');
      } else {
        $$log.debug('\u9009\u62e9\u7684\u540c\u4e8b\u5bf9\u8c61');
        $$log.debug($scope.nurseObjArr);
        // $state.go('sort');
        history.go(-1);
      }
    };
  }
]);
/**
 * Created by lixu on 16/11/16.
 */
app.controller('nursePlanCounterStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  '$$shence',
  'getData',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar, $$shence, getData) {
    $scope.data = getData.data;
    $$log.debug('nursePlanCounterStateController');
    $$log.info($scope);
    $$shence.track('nursePlanCounterStateController');
    $$title.setTitle('\u5eb7\u590d\u8ba1\u5212\u7edf\u8ba1');
    $$navbar.show();
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by yihuan on 2016/11/11.
 */
app.controller('nurseTagManageStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$tabbar, $$navbar) {
    $$log.debug('nurseTagManageStateController');
    $$log.info($scope);
    $$navbar.show();
    $$navbar.setTitle('\u62a4\u58eb\u6807\u7b7e');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
    $scope.data = getData.data;
  }
]);
/**
 * Created by lixu on 16/11/16.
 */
app.controller('nurseToolCounterStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  '$$shence',
  'getData',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar, $$shence, getData) {
    $scope.data = getData.data;
    $$log.debug('nursePlanCounterStateController');
    $$log.info($scope);
    $$shence.track('nurseToolCounterStateController');
    $$title.setTitle('\u5eb7\u590d\u5de5\u5177\u7edf\u8ba1');
    $$navbar.show();
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by yihuan on 16/9/26.
 */
app.controller('otherPatientListStateController', [
  '$$shence',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$navbar',
  '$$tabbar',
  '$stateParams',
  function ($$shence, $rootScope, $state, $scope, $location, $$log, $$title, getData, $$navbar, $$tabbar, $stateParams) {
    $scope.data = getData.data;
    $$log.debug('otherPatientListStateController');
    $$log.debug($scope.data);
    $scope.dataArr = $scope.data.user;
    if ($stateParams.isIn == 'true') {
      $$shence.track('_getInHospitalPatientList');
      $$log.debug($stateParams.isIn);
      $$navbar.setTitle('\u4f4f\u9662\u60a3\u8005');
      $scope.isIn = 1;
      $scope.inLength = 0;
      for (var i = 0; i < $scope.dataArr.length; i++) {
        for (var j = 0; j < $scope.dataArr[i].member.length; j++) {
          if ($scope.dataArr[i].member[j].status == 1) {
            $scope.inLength++;
          }
        }
      }
      $$log.debug('inLength' + $scope.inLength);
    } else {
      $$shence.track('_getOutHospitalPatientList');
      $$log.debug($stateParams.isIn);
      $$navbar.setTitle('\u5df2\u51fa\u9662\u60a3\u8005');
      $scope.isIn = 0;
      $$log.debug('otherPatientListStateController');
      $scope.outLength = 0;
      for (var i = 0; i < $scope.dataArr.length; i++) {
        for (var j = 0; j < $scope.dataArr[i].member.length; j++) {
          if ($scope.dataArr[i].member[j].status == 0) {
            $scope.outLength++;
          }
        }
      }
      $$log.debug('outLength' + $scope.outLength);
    }
    $$log.info($scope);
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by lixu on 16/9/14.
 */
var patientInfo = {};
app.controller('patientDetailStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$navbar',
  '$$tabbar',
  '$stateParams',
  '$$confirm',
  '$$toast',
  '$http',
  '$$requestUrl',
  '$$loading',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$navbar, $$tabbar, $stateParams, $$confirm, $$toast, $http, $$requestUrl, $$loading) {
    $scope.data = getData.data;
    $scope.dataArr = $scope.data;
    $scope.patientId = $stateParams.patientId;
    $$log.debug('personalInformationStateController');
    $$log.debug($scope.patientId);
    $$log.info($scope);
    $$navbar.setTitle('\u60a3\u8005\u59d3\u540d');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
    $scope.searchKey = '';
    $$log.debug('$scope.dataArr.tag');
    $$log.debug($scope.dataArr);
    $$log.debug($scope.dataArr.tag);
    //判断是否是子标签
    $scope.isTag = function (tag) {
      $$log.debug(tag);
      $$log.debug(typeof tag.tagCategoryName !== 'undefined');
      if (typeof tag.tagCategoryName !== 'undefined') {
        return tag.tagCategoryName.indexOf($scope.searchKey) > -1;
      }
    };
    if ($scope.data.departmentTag != undefined || $scope.data.departmentTag.tag != undefined) {
      for (var j = 0; j < $scope.data.departmentTag.tag.length; j++) {
        for (var k = 0; k < $scope.data.departmentTag.tag[j].tag.length; k++) {
          $scope.data.departmentTag.tag[j].tag[k].isShow = true;
          var flag = 0;
          if ($scope.data.departmentTag.tag[j].tag[k].tagType < 2) {
            flag++;
          }
          $$log.debug('flag' + flag);
          $$log.debug('$scope.data.tag[j].tag[k].length' + $scope.data.departmentTag.tag[j].tag.length);
          if (flag > 0) {
            $scope.data.departmentTag.tag[j].isShow = true;
          } else {
            $scope.data.departmentTag.tag[j].isShow = false;
          }
        }
        var juge = 0;
        if ($scope.data.departmentTag.tag[j].isShow == false) {
          juge++;
        }
        if (juge == $scope.data.departmentTag.tag.length) {
          $scope.data.departmentTag.tag.length = 0;
        }
      }
    }
    //清空当前输入
    $scope.onClearInput = function () {
      $scope.searchKey = '';
    };
    // /判断是否是查找状态
    $scope.onIsSearchStatus = function (juge) {
      $scope.isSearch = juge;
      if ($scope.isSearch == false) {
        $scope.searchKey = '';
      } else {
        $('.searchInput').focus();
      }
    };
    if (typeof $scope.dataArr.tag != 'undefined' && typeof $scope.dataArr.departmentTag.tag != 'undefined') {
      for (var i = 0; i < $scope.dataArr.tag.length; i++) {
        if ($scope.dataArr.tag[i].tagType == 2 && $scope.dataArr.tag[i].tagName == localStorage.globalNurseId) {
          $scope.isAttention = true;
        }
        for (var j = 0; j < $scope.dataArr.departmentTag.tag.length; j++) {
          if ($scope.dataArr.tag[i].tagCategoryId == $scope.dataArr.departmentTag.tag[j].tagCategoryId) {
            $$log.debug('\u540c\u4e00\u4e2a\u7c7b');
            for (var k = 0; k < $scope.dataArr.departmentTag.tag[j].tag.length; k++) {
              if ($scope.dataArr.tag[i].tagId == $scope.dataArr.departmentTag.tag[j].tag[k].tagId) {
                // $$log.debug('同一个id');
                // $$log.debug('i:' + i);
                // $$log.debug('j:' + j);
                // $$log.debug('k:' + k);
                $scope.dataArr.departmentTag.tag[j].tag[k].sel = true;
              } else {
                // $$log.debug('!同一个id');
                // $$log.debug('i:' + i);
                // $$log.debug('j:' + j);
                // $$log.debug('k:' + k);
                $scope.dataArr.departmentTag.tag[j].tag[k].sel = $scope.dataArr.departmentTag.tag[j].tag[k].sel === true || false;
              }
            }
          }
        }
      }
      $$log.debug('$scope.dataArr');
      $$log.debug($scope.dataArr);
    }
    $scope.onMoreOperationClick = function () {
      patientInfo = $scope.data;
      $state.go('patientRelation');
    };
    //增加标签
    $scope.addTag = function (deTag) {
      $$confirm.show({
        title: '\u6dfb\u52a0\u6807\u7b7e',
        msg: '<input class="h3 border-line border-color-global-base padding-left-md" style="width:80%;" type="text">',
        callback: function () {
          $$log.debug(deTag);
          var tagCategoryId = deTag.tagCategoryId;
          // $$log.debug('categoryIdcategoryId');
          //
          // $$log.debug(categoryId);
          var name = $('.confirm').find('input').val();
          var tagsObj = [{
                'tagName': name,
                'tagCategoryId': tagCategoryId
              }];
          $$log.debug('tagsObj');
          $$log.debug(tagsObj);
          if (name != '') {
            $$loading.show();
            $http({
              method: 'POST',
              url: $$requestUrl.getUrl('createPatientCategoryTag'),
              data: { 'tag': tagsObj }
            }).success(function (response) {
              if (response.result.success != 'undefined') {
                $$loading.hide();
              }
              if (response.result.success === true) {
                for (var i = 0; i < response.tag.length; i++) {
                  for (var j = 0; j < $scope.dataArr.departmentTag.tag.length; j++) {
                    if ($scope.dataArr.departmentTag.tag[j].tagCategoryId == response.tag[i].tagCategoryId) {
                      $scope.dataArr.departmentTag.tag[j].tag.push({
                        'tagId': response.tag[i].tagId,
                        'tagName': response.tag[i].tagName,
                        'tagCategoryId': response.tag[i].tagCategoryId,
                        'tagCategoryName': response.tag[i].tagCategoryId,
                        'tagType': response.tag[i].tagType
                      });
                    }
                  }
                }
                $$log.debug('$scope.dataArr.departmentTag');
                $$log.debug($scope.dataArr.departmentTag.tag);
                $('.confirm').find('input').val('');
              } else {
                var display = response.result.displayMsg;
                $$toast.show(display.toString());
              }
              $$log.debug('createPatientCategoryTag');
              $$log.info(response);
              return response;
            });
          } else {
            $$toast.show('\u6570\u636e\u9879\u4e0d\u80fd\u4e3a\u7a7a');
          }
        },
        confirmText: '\u786e\u5b9a',
        cancelText: '\u53d6\u6d88'
      });
    };
    //增加分类
    $scope.addCategory = function () {
      // $$log.debug('dianjile');
      $$confirm.show({
        title: '\u6dfb\u52a0\u5206\u7c7b',
        msg: '<label for="tagCategoryName">\u5206\u7c7b\uff1a</label><input style="margin-bottom:0.64rem;" id="tagCategoryName" class="h3 border-line border-color-global-base padding-left-md" type="text"><br/><label for="tagCategoryName">\u6807\u7b7e\uff1a</label><input id="tagName" class="h3 border-line border-color-global-base padding-left-md" type="text">' + '',
        callback: function () {
          var tagCategoryName = $('.confirm').find('#tagCategoryName').val();
          var tagName = $('.confirm').find('#tagName').val();
          $$log.debug(tagCategoryName);
          $$log.debug(tagName);
          var categoriesArr = [{
                'tagId': null,
                'tagName': tagName,
                'tagCategoryId': null,
                'tagCategoryName': tagCategoryName
              }];
          $$log.debug('categoriesArr');
          $$log.debug(categoriesArr);
          if (tagCategoryName != '' && tagName != '') {
            $$loading.show();
            $http({
              method: 'POST',
              url: $$requestUrl.getUrl('createPatientTagCategory'),
              data: { 'tag': categoriesArr }
            }).success(function (response) {
              if (response.result.success == true) {
                $$loading.hide();
                if (response.tag.length > 0) {
                  for (var i = 0; i < response.tag.length; i++) {
                    if (typeof $scope.dataArr.departmentTag.tag == 'undefined') {
                      $scope.dataArr.departmentTag.tag = [{
                          tag: [{
                              'tagId': response.tag[i].tagId,
                              'tagName': response.tag[i].tagName,
                              'tagCategoryId': response.tag[i].tagCategoryId,
                              'tagCategoryName': response.tag[i].tagCategoryId,
                              'tagType': response.tag[i].tagType
                            }],
                          tagCategoryId: response.tag[i].tagCategoryId,
                          tagCategoryName: response.tag[i].tagCategoryName,
                          isShow: true
                        }];
                      $$log.debug('\u5f53\u524d\u7528\u6237\u7684$scope.dataArr.departmentTags\u4e3a\u7a7a\uff0c\u6dfb\u52a0\u540e\u7684$scope.dataArr.departmentTags\uff1a');
                      $$log.debug($scope.dataArr.departmentTag);
                    } else {
                      for (var j = 0; j < response.tag.length; j++) {
                        $scope.dataArr.departmentTag.tag.push({
                          tag: [{
                              'tagId': response.tag[j].tagId,
                              'tagName': response.tag[j].tagName,
                              'tagCategoryId': response.tag[i].tagCategoryId,
                              'tagCategoryName': response.tag[i].tagCategoryId,
                              'tagType': response.tag[i].tagType
                            }],
                          tagCategoryId: response.tag[j].tagCategoryId,
                          tagCategoryName: response.tag[j].tagCategoryName,
                          isShow: true
                        });
                      }
                    }
                  }
                }
              } else {
                var display = response.result.displayMsg;
                $$toast.show(display.toString());
              }
              //clear
              $('.confirm').find('#tagCategoryName').val('');
              $('.confirm').find('#tagName').val('');
              $$log.debug('createPatientTagCategory.response');
              $$log.info(response);
            });
          } else {
            $$toast.show('\u6570\u636e\u9879\u4e0d\u80fd\u4e3a\u7a7a');
          }
        },
        confirmText: '\u786e\u5b9a',
        cancelText: '\u53d6\u6d88'
      });
    };
    $scope.setSelfChat = function () {
      $$log.debug('\u5efa\u7acb\u804a\u5929');
      $http({
        method: 'GET',
        url: $$requestUrl.getUrl('createPatientChat', {
          fromId: localStorage.globalNurseId,
          toId: $scope.patientId
        })
      }).success(function (response) {
        if (response.result.success == true) {
          $$log.debug('\u548c\u60a3\u8005\u5efa\u7acb\u804a\u5929\u6210\u529f\uff01');
          localStorage.targetChatId = response.toAccount.identifier;
          location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/chat';
          $$log.debug('createPatientNurseChatStateController.response');
          $$log.info(response);
        } else {
          var display = response.result.displayMsg;
          $$toast.show(display.toString());
        }
      });
    };
    $scope.gotoPush = function () {
      localStorage.targetChatId = $scope.data.identifier;
      pushPatient = [localStorage.targetChatId];
      $$log.debug('gotoPush');
      $state.go('contentList', { operateType: 'patientPushObj' });
    };
    //给患者修改标签
    $scope.alertTag = function (tag) {
      $$loading.show();
      var tags = typeof $scope.dataArr.tag != 'undefined' ? $scope.dataArr.tag : [];
      if (tag.sel == true) {
        $$log.debug('del : \u5bf9\u8be5\u540d\u60a3\u8005\u5df2\u6709\u7684\u6807\u7b7e\u5220\u9664');
        for (var i = 0; i < $scope.dataArr.tag.length; i++) {
          if (tag.tagId == $scope.dataArr.tag[i].tagId) {
            tags.splice(i, 1);
          }
        }
        $$log.debug(tags);
      } else {
        $$log.debug('add : \u7ed9\u8be5\u540d\u60a3\u8005\u6dfb\u52a0\u6807\u7b7e');
        tags.push({
          'tagId': tag.tagId,
          'tagName': tag.tagName
        });
        $$log.debug(tags);
      }
      $http({
        method: 'PATCH',
        url: $$requestUrl.getUrl('updatePatientTag', { 'userId': $stateParams.patientId }),
        data: { 'tag': tags }
      }).success(function (response) {
        if (typeof response.result.success != 'undefined') {
          $$loading.hide();
        }
        if (response.result.success == true) {
          var ls = { time: 0 };
          localStorage['allPatientList'] = JSON.stringify(ls);
          $$log.debug('localStorage[\'allPatientList\']:' + localStorage['allPatientList']);
          tag.sel = !tag.sel;
          $$log.debug('response');
          $$log.debug(response);
          $scope.dataArr.tag = response.tag;
          $$log.debug('updatePatientTag.response');
          $$log.info(response);
        } else {
          var display = response.result.displayMsg;
          $$toast.show(display.toString());
        }
      });
    };
  }
]);
/**
 * Created by yihuan on 16/9/18.
 */
app.controller('patientListStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$tabbar, $$navbar) {
    $$log.debug('patientListStateController');
    $$log.info($scope);
    $$navbar.show();
    $$navbar.setTitle('\u6211\u7684\u60a3\u8005');
    $$tabbar.setIndex(1);
    $$navbar.hideReturnBtn();
    $scope.data = getData.data;
    $scope.dataArr = {};  // function sortOrder(userArr){
                          //
                          //     for(var i = 0 ; i<userArr.length ; i++){
                          //         for(var j=0,len=userArr[i].length;i<len;j++){
                          //             //获得unicode码
                          //             var ch = userArr.charAt(userArr[i].name);
                          //             //检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
                          //             arrResult.push(checkCh(ch));
                          //         }
                          //         //处理arrResult,返回所有可能的拼音首字母串数组
                          //         return arrResult;
                          //
                          //     }
                          //
                          //     // if(typeof(str) != "string")
                          //     //     throw new Error(-1,"函数makePy需要字符串类型参数!");
                          //
                          // }
                          // sortOrder($scope.data);
  }
]);
/**
 * Created by gaoqz on 16/11/9.
 */
app.controller('patientRelationStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar) {
    $$log.info($scope);
    $$title.setTitle('\u66f4\u591a');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by yihuan on 2016/11/11.
 */
app.controller('patientTagManageStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$tabbar, $$navbar) {
    $$log.debug('patientTagManageStateController');
    $$log.info($scope);
    $$navbar.show();
    $$navbar.setTitle('\u60a3\u8005\u6807\u7b7e');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
    $scope.data = getData.data;
  }
]);
/**
 * Created by yihuan on 16/9/19.
 */
var pushPatient = [];
var pushPatientId = [];
app.controller('patientTagStateController', [
  '$stateParams',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$tabbar',
  '$$navbar',
  '$http',
  '$$requestUrl',
  '$$toast',
  '$$confirm',
  '$$loading',
  function ($stateParams, $rootScope, $state, $scope, $location, $$log, $$title, getData, $$tabbar, $$navbar, $http, $$requestUrl, $$toast, $$confirm, $$loading) {
    $scope.data = getData.data;
    $scope.dataArr = $scope.data;
    $$log.debug('patientTagStateController');
    $$log.info($scope.dataArr);
    // $$navbar.show();
    $$navbar.setTitle('\u60a3\u8005');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
    $$tabbar.hide();
    pushPatient = [];
    pushPatientId = [];
    $scope.tagArr = [];
    $scope.seacheArr = [];
    $scope.showResult = false;
    //判断是选择沟通的对象,推送的对象
    $$log.debug('\u5bf9\u9875\u9762\u7684\u64cd\u4f5c\u7c7b\u578b\u4e3a' + $stateParams.operateType);
    // communicate -- 筛选需要沟通的对象, push -- 选择推送对象
    switch ($stateParams.operateType) {
    case 'communicate':
      $scope.show = 'communicate';
      break;
    case 'push':
      $scope.show = 'push';
      break;
    }
    //删除搜索条件
    $scope.delSeaTag = function (tag) {
      $$log.info('---seacheArr---tag---');
      $$log.debug('tag');
      $$log.debug(tag);
      $$log.debug('$scope.seacheArr');
      $$log.debug($scope.seacheArr);
      $$log.debug('$scope.showResult' + $scope.showResult);
      for (var j = 0; j < $scope.dataArr.tag.length; j++) {
        for (var k = 0; k < $scope.dataArr.tag[j].tag.length; k++) {
          $scope.dataArr.tag[j].tag[k].isActive = false;
        }
      }
      for (var i = 0; i < $scope.seacheArr.length; i++) {
        if ($scope.seacheArr[i].tagMember.tagId == tag.tagMember.tagId && tag.tagCategoryId == $scope.seacheArr[i].tagCategoryId) {
          $$log.debug('del');
          $scope.seacheArr.splice(i, 1);
          if ($scope.seacheArr.length == 0) {
            $scope.showResult = false;
            $$toast.show('\u8bf7\u9009\u62e9\u6807\u7b7e');
            $$loading.hide();
            $$log.debug('$scope.seacheArr');
            $$log.debug($scope.seacheArr);
            $$log.debug($scope.seacheArr == []);
          }
        }
      }
      for (var i = 0; i < $scope.seacheArr.length; i++) {
        for (var j = 0; j < $scope.dataArr.tag.length; j++) {
          for (var k = 0; k < $scope.dataArr.tag[j].tag.length; k++) {
            // $$log.debug('$scope.data.tag[j].tag[k].tagId' + $scope.dataArr.tag[j].tag[k].tagId);
            // $$log.debug('tag.tagId' + tag.tagMember.tagId);
            if ($scope.dataArr.tag[j].tag[k].tagId == $scope.seacheArr[i].tagMember.tagId) {
              $scope.dataArr.tag[j].tag[k].isActive = true;
            }
          }
        }
      }
      $$log.debug($scope.seacheArr);
      if ($scope.seacheArr.length != 0) {
        if ($scope.showResult) {
          $$loading.show();
          $$log.debug('\u6539\u53d8\u7b5b\u9009\u6761\u4ef6\uff0c\u53d1\u9001\u8bf7\u6c42');
          var tags = [];
          if (tags.length != 0) {
            tags = [];
          }
          for (var j = 0; j < $scope.seacheArr.length; j++) {
            tags.push($scope.seacheArr[j].tagMember.tagId);
          }
          $http({
            method: 'GET',
            url: $$requestUrl.getUrl('getTagPatientList', { 'nurseId': localStorage.globalNurseId }),
            params: { 'tag': tags.join(',') }
          }).success(function (response) {
            if (typeof response.result.success != 'undefined') {
              $$loading.hide();
            }
            if (response.result.success === true) {
              $scope.showResult = true;
              $scope.userData = response.user;
              $$log.debug($scope.userData);
            } else {
              $$log.debug('\u670d\u52a1\u5668\u8fd4\u56de\u9519\u8bef');
              var display = response.result.displayMsg;
              $$toast.show(display.toString());
            }
            $$log.debug('getTagPatientList.response');
            $$log.info(response);
          });
        }
      }
    };
    //添加搜索条件
    $scope.alertSeach = function (tag, tagMember) {
      tagMember.isActive = !tagMember.isActive;
      if (tagMember.isActive === true) {
        $scope.seacheArr.push({
          'tagCategoryId': tag.tagCategoryId,
          'tagMember': tagMember
        });
        $$log.debug($scope.seacheArr);
      } else {
        for (var i = 0; i < $scope.seacheArr.length; i++) {
          if ($scope.seacheArr[i].tagMember.tagId == tagMember.tagId) {
            $scope.seacheArr.splice(i, 1);
          }
        }
        $$log.debug('del');
      }
    };
    //点击搜索
    $scope.tagSeacher = function () {
      $$log.debug($scope.seacheArr);
      var seacheArrTags = [];
      for (var i = 0; i < $scope.seacheArr.length; i++) {
        seacheArrTags.push($scope.seacheArr[i].tagMember.tagId);
      }
      $$log.debug('seacheArrTags');
      $$log.debug(seacheArrTags);
      if ($scope.seacheArr.length === 0) {
        $$toast.show('\u8bf7\u8f93\u5165\u7b5b\u9009\u6761\u4ef6');
      } else {
        $$loading.show();
        $$log.debug(seacheArrTags);
        $$log.debug('seacheArrTags', seacheArrTags.join(','));
        $http({
          method: 'GET',
          url: $$requestUrl.getUrl('getTagPatientList', { 'nurseId': localStorage.globalNurseId }),
          params: { 'tag': seacheArrTags.join(',') }
        }).success(function (response) {
          if (response.result.success != 'undefined') {
            $$loading.hide();
          }
          if (response.result.success === true) {
            $scope.showResult = true;
            $scope.userData = response.user;
          } else {
            var display = response.result.displayMsg;
            $$toast.show(display.toString());
          }
          $$log.debug('tagPatientList.response');
          $$log.info(response);
          $$log.debug($scope.seacheArr);
        });
      }
    };
    //返回添加搜素条件
    $scope.returnAddTag = function () {
      $scope.showResult = false;
    };
    //全选
    $scope.allCheck = function (userData) {
      userData.sel = userData.sel == 2 ? 0 : 2;
      for (var i = 0; i < userData.length; i++) {
        for (var j = 0; j < userData[i].member.length; j++) {
          userData[i].member[j].sel = userData.sel == 2;
        }
      }
    };
    //选择自己
    $scope.checkSelf = function (member) {
    };
    //给患者推送信息
    $scope.pushPatient = function () {
      $$log.debug('userData');
      $$log.debug($scope.userData);
      // for (var i = 0; i < $scope.userData.length; i++) {
      //     for (var j = 0; j < $scope.userData[i].member.length; j++) {
      //         if ($scope.userData[i].member[j].sel === true) {
      //             pushPatient.push($scope.userData[i].member[j].identifier);
      //         }
      //     }
      // }
      // if (pushPatient.length == 0) {
      //     $$toast.show('请选择患者');
      // } else {
      //     $$log.debug('pushPatient.length');
      //     $$log.debug(pushPatient.length);
      //     $state.go('contentList', {operateType: 'patientPushObj'});
      // }
      for (var i = 0; i < $scope.userData.length; i++) {
        for (var j = 0; j < $scope.userData[i].member.length; j++) {
          pushPatient.push($scope.userData[i].member[j].identifier);
          pushPatientId.push($scope.userData[i].member[j].userId);
        }
      }
      $$log.debug('pushPatient');
      $$log.debug(pushPatient);
      $$log.debug(pushPatientId);
      $state.go('contentList', { operateType: 'patientPushObj' });
    };
    //沟通
    $scope.setCommunicate = function () {
      $$log.debug('userData');
      $$log.debug($scope.userData);
      $scope.resultArr = [];
      // for (var i = 0; i < $scope.userData.length; i++) {
      //     for (var j = 0; j < $scope.userData[i].member.length; j++) {
      //
      //         if ($scope.userData[i].member[j].sel === true) {
      //             $scope.resultArr.push($scope.userData[i].member[j]);
      //         }
      //     }
      // }
      for (var i = 0; i < $scope.userData.length; i++) {
        for (var j = 0; j < $scope.userData[i].member.length; j++) {
          $scope.resultArr.push($scope.userData[i].member[j]);
        }
      }
      if ($scope.resultArr.length === 0) {
        $$toast.show('\u8bf7\u9009\u62e9\u6c9f\u901a\u5bf9\u8c61');
        return false;
      }
      //判断是否为群聊
      if ($scope.resultArr.length > 1) {
        $$confirm.show({
          title: '\u8bf7\u8f93\u5165\u7fa4\u804a\u540d\u79f0',
          msg: '<input class="h3 border-line border-color-global-base" type="text">',
          callback: function () {
            var name = $('.confirm').find('input').val();
            var nurseId = [parseInt(localStorage.globalNurseId)];
            var userId = [];
            $scope.groupName = name;
            $$log.debug('\u7fa4\u804a\u540d\u79f0');
            $$log.debug($scope.groupName);
            for (var i = 0; i < $scope.resultArr.length; i++) {
              userId.push($scope.resultArr[i].userId);
            }
            $$log.debug('--------------');
            $$log.debug(userId);
            $http({
              method: 'POST',
              url: $$requestUrl.getUrl('createGroupChat'),
              data: {
                groupName: $scope.groupName,
                nurseIds: nurseId,
                userIds: userId
              }
            }).success(function (response) {
              if (typeof response.result.success != 'undefined') {
                $$loading.hide();
              }
              if (response.result.success === true) {
                localStorage.targetChatId = response.groupId;
              } else {
                $$toast.show(response.result.displayMsg.toString());
              }
              location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/chat';
            });
            $$log.debug('\u7fa4\u804a\u6570\u7ec4');
            $$log.debug($scope.resultArr);
          },
          confirmText: '\u786e\u5b9a',
          cancelText: '\u53d6\u6d88'
        });
      } else {
        $$log.debug('\u5355\u804a\u6570\u7ec4');
        $$log.debug($scope.resultArr);
        $http({
          method: 'POST',
          url: $$requestUrl.getUrl('createC2CUser', {
            fromId: localStorage.globalNurseId,
            toId: $scope.resultArr[0].userId
          })
        }).success(function (response) {
          if (typeof response.result.success != 'undefined') {
            $$loading.hide();
          }
          if (response.result.success === true) {
            localStorage.targetChatId = response.toAccount.identifier;
          } else {
            $$toast.show(response.result.displayMsg.toString());
          }
          location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/chat';
        });
      }
    };
  }
]);
/**
 * Created by lixu on 16/9/14.
 */
app.controller('professionInfoStateController', [
  '$$navbar',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  function ($$navbar, $rootScope, $state, $scope, $location, $$log, $$title, $$tabbar) {
    $scope.data = '';
    $$log.debug('professionInfoStateController');
    $$log.info($scope);
    $$title.setTitle('\u4f18\u62a4\u52a9\u624b-\u8eab\u4efd\u8ba4\u8bc1');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
    $$navbar.setRightBtnShow(3, '\u8df3\u8fc7');
  }
]);
/**
 * Created by dongsj on 16/9/18.
 */
var content = {};
app.controller('recentCalenderStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$tabbar',
  '$$navbar',
  '$$shence',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$tabbar, $$navbar, $$shence) {
    $scope.data = getData.data;
    $scope.parseDateExpire = function (event) {
      // if((new Date(event.startTime)).format('hh:mm')=='00:00' && (new Date(event.endTime)).format('hh:mm')=='23:59'){
      //     return '全天';
      // }else{
      //     return (new Date(event.startTime)).format('hh:mm')+'-'+(new Date(event.endTime)).format('hh:mm');
      // }
      return new Date(event.startTime).format('MM\u6708dd\u65e5');
    };
    $scope.onAddClick = function () {
      $$log.debug('onAddClick');
      $$shence.track('_recentCalenderStateControllerAdd');
    };
    $scope.parseDateToday = function (event) {
      if (new Date(event.startTime).format('hh:mm') == '00:00' && new Date(event.endTime).format('hh:mm') == '23:59') {
        return '\u5168\u5929';
      } else {
        return new Date(event.startTime).format('hh:mm') + '-' + new Date(event.endTime).format('hh:mm');
      }
    };
    $scope.parseDateFuture = function (event) {
      var sdd = new Date(event.startTime).format('dd');
      var edd = new Date(event.endTime).format('dd');
      if (sdd == edd) {
        // return (new Date(event.startTime)).format('MM月dd日') + ' ' + (new Date(event.startTime)).format('hh:mm') + '-' + (new Date(event.endTime)).format('hh:mm');
        return new Date(event.startTime).format('MM\u6708dd\u65e5');
      } else {
        // return (new Date(event.startTime)).format('MM月dd日') + ' ' + (new Date(event.startTime)).format('hh:mm') + '-' + (new Date(event.endTime)).format('hh:mm') + ' 跨' + (Math.floor((event.endTime - event.startTime) / 1000 / 60 / 60 / 24) + 1) + '天';
        return new Date(event.startTime).format('MM\u6708dd\u65e5') + ' ' + ' \u8de8' + (Math.floor((event.endTime - event.startTime) / 1000 / 60 / 60 / 24) + 1) + '\u5929';
      }  // return (new Date(t)).format('mm月dd日');
    };
    $$log.debug('recentCalenderStateController');
    $$log.info($scope);
    $$title.setTitle('\u65e5\u7a0b');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by yihuan on 16/9/26.
 */
app.controller('selectListStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  'getData',
  '$$navbar',
  '$$tabbar',
  '$stateParams',
  '$$confirm',
  '$$toast',
  '$http',
  '$$requestUrl',
  '$$loading',
  function ($rootScope, $state, $scope, $location, $$log, $$title, getData, $$navbar, $$tabbar, $stateParams, $$confirm, $$toast, $http, $$requestUrl, $$loading) {
    $$log.debug('selectListStateController');
    $$log.info($scope);
    $$navbar.setTitle('\u9009\u62e9\u6c9f\u901a\u7684\u5bf9\u8c61');
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
    $scope.allNursesData = getData.nurse.data.all;
    $scope.nurseData = getData.nurse.data.nurse === undefined ? [] : getData.nurse.data.nurse;
    $$log.debug('getData.patient.user');
    $$log.debug(getData.patient.user);
    $scope.isManage = localStorage.getItem('authorizedStatus') > 3 ? true : false;
    $$log.debug('00000000' + $scope.isManage);
    $$log.debug('typeof getData.patient.user != "undefined"' + (typeof getData.patient.data.user != 'undefined'));
    if (typeof getData.patient.data.user != 'undefined' && $scope.isManage != true) {
      $$log.debug('00000000');
      for (var i = 0; i < getData.patient.data.user.length; i++) {
        for (var j = 0; j < getData.patient.data.user[i].member.length; j++) {
          if (typeof getData.patient.data.user[i].member[j].tag != 'undefined') {
            $$log.debug('typeof $scope.data.user[i].member[j].tag ');
            $$log.debug(typeof getData.patient.data.user[i].member[j].tag != 'undefined');
            for (var k = 0; k < getData.patient.data.user[i].member[j].tag.length; k++) {
              if (getData.patient.data.user[i].member[j].tag[k].tagType == 3) {
                getData.patient.data.user[i].member[j].isBlack = true;
                $$log.debug('$scope.data.user[i].member[j].isBlack');
                $$log.debug(getData.patient.data.user[i].member[j].isBlack);
                break;
              } else {
                getData.patient.data.user[i].member[j].isBlack = false;
              }
            }
          } else {
            getData.patient.data.user[i].member[j].isBlack = false;
          }
        }
      }
      for (var i = 0; i < getData.patient.data.user.length; i++) {
        getData.patient.data.user[i].isNull = false;
      }
      for (var i = 0; i < getData.patient.data.user.length; i++) {
        for (var j = 0; j < getData.patient.data.user[i].member.length; j++) {
          var flag = 0;
          if (getData.patient.data.user[i].member[j].isBlack == true) {
            flag = flag + 1;
            $$log.debug('flag' + flag);
            $$log.debug('$scope.data.user[i].member.length' + getData.patient.data.user[i].member.length);
            if (flag == getData.patient.data.user[i].member.length) {
              getData.patient.data.user[i].isNull = true;
            }
          }
        }
      }
      // $scope.data.user =  $$patientFilter.getpatient($scope.data.user);
      $$log.debug('$scope.data.user');
      $$log.debug(getData.patient.data.user);
    }
    $$log.debug('$scope.patientData');
    $scope.patientData = getData.patient.data.user;
    $$log.debug($scope.patientData);
    //去重护士本身
    for (var i = 0; i < $scope.allNursesData.length; i++) {
      if ($scope.allNursesData[i].nurseId == localStorage.globalNurseId) {
        $scope.allNursesData.splice(i, 1);
      }
    }
    for (var i = 0; i < $scope.nurseData.length; i++) {
      for (var j = 0; j < $scope.nurseData[i].member.length; j++) {
        if ($scope.nurseData[i].member[j].nurseId == localStorage.globalNurseId) {
          $scope.nurseData[i].member.splice(j, 1);
          break;
        }
      }
      if ($scope.nurseData[i].member.length === 0) {
        $scope.nurseData.splice(i, 1);
      }
    }
    $scope.nurseLength = 0;
    $scope.patientLength = 0;
    $scope.memberLength = 0;
    $scope.isNurseShow = true;
    function gotoChat() {
      location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/chat';
    }
    if (typeof $scope.nurseData != 'undefined') {
      $scope.nurseLength = $scope.allNursesData.length;
      for (var i = 0; i < $scope.nurseData.length; i++) {
        // $scope.nurseLength += $scope.nurseData[i].member.length;
        $scope.nurseData[i].memberNum = $scope.nurseData[i].member.length;
      }
    }
    if (typeof $scope.patientData != 'undefined') {
      for (var j = 0; j < $scope.patientData.length; j++) {
        $scope.patientLength += $scope.patientData[j].member.length;
      }
    }
    $scope.switchActive = function (isNurseShow) {
      $scope.isNurseShow = isNurseShow;
    };
    $scope.allCheckNurse = function () {
      $scope.open = !$scope.open;
    };
    //卷展
    $scope.openClose = function (obj) {
      obj.open = !obj.open;
    };
    //allCheck
    $scope.allCheck = function (allObj) {
      allObj.sel = allObj.sel == 2 ? 0 : 2;
      for (var i = 0; i < allObj.member.length; i++) {
        allObj.member[i].sel = allObj.sel == 2;
      }
    };
    $scope.allNurseCheck = function () {
      $scope.allSel = !$scope.allSel;
      for (var i = 0; i < $scope.allNursesData.length; i++) {
        $scope.allNursesData[i].sel = $scope.allSel;
      }
    };
    //checkSelf
    $scope.checkSelf = function (allObj, selfObj) {
      selfObj.sel = !selfObj.sel;
      var selAll = true;
      var unselAll = true;
      for (var i = 0; i < allObj.member.length; i++) {
        if (allObj.member[i].sel === false) {
          selAll = false;
        } else {
          unselAll = false;
        }
      }
      if (selAll === true) {
        allObj.sel = 2;
      } else if (unselAll === true) {
        allObj.sel = 0;
      } else {
        allObj.sel = 1;
      }
    };
    $scope.checkAllSelf = function (nurse) {
      nurse.sel = !nurse.sel;
      var isAll = true;
      for (var i = 0; i < $scope.allNursesData.length; i++) {
        if ($scope.allNursesData[i].sel !== true) {
          isAll = false;
          break;
        } else {
          isAll = true;
        }
      }
      $scope.allSel = isAll;
    };
    //patientAllCheck
    $scope.patientAllCheck = function (patientData) {
      patientData.sel = patientData.sel == 2 ? 0 : 2;
      for (var i = 0; i < patientData.length; i++) {
        for (var j = 0; j < patientData[i].member.length; j++) {
          patientData[i].member[j].sel = patientData.sel == 2;
        }
      }
    };
    //checkPatientSelf
    $scope.checkPatientSelf = function (patientData, selfObj) {
      selfObj.sel = !selfObj.sel;
      var selAll = true;
      var unselAll = true;
      for (var i = 0; i < patientData.length; i++) {
        for (var j = 0; j < patientData[i].member.length; j++) {
          if (patientData[i].member[j].sel === false) {
            selAll = false;
          } else {
            unselAll = false;
          }
        }
      }
      if (selAll === true) {
        patientData.sel = 2;
      } else if (unselAll === true) {
        patientData.sel = 0;
      } else {
        patientData.sel = 1;
      }
    };
    $scope.setCommunicate = function () {
      $$loading.show();
      var resultArr = [];
      var nurseIds = [];
      var userIds = [];
      if (typeof $scope.nurseData != 'undefined') {
        for (var i = 0; i < $scope.nurseData.length; i++) {
          for (var j = 0; j < $scope.nurseData[i].member.length; j++) {
            if ($scope.nurseData[i].member[j].sel === true && $scope.nurseData[i].member[j].isBlack != true) {
              resultArr.push($scope.nurseData[i].member[j]);
              nurseIds.push($scope.nurseData[i].member[j]);
            }
          }
        }
        for (var m = 0; m < $scope.allNursesData.length; m++) {
          if ($scope.allNursesData[m].sel === true) {
            resultArr.push($scope.allNursesData[m]);
            nurseIds.push($scope.allNursesData[m]);
          }
        }
      }
      if (typeof $scope.patientData != 'undefined') {
        for (var k = 0; k < $scope.patientData.length; k++) {
          for (var q = 0; q < $scope.patientData[k].member.length; q++) {
            if ($scope.patientData[k].member[q].sel === true && $scope.patientData[k].member[q].isBlack != true) {
              resultArr.push($scope.patientData[k].member[q]);
              userIds.push($scope.patientData[k].member[q]);
            }
          }
        }
      }
      //去重
      var arr = resultArr;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].userId != undefined) {
          arr.splice(i, 1);
          i = i - 1 < 0 ? 0 : i - 1;
        }
      }
      var resultUnique = [], isRusltUnique;
      for (var a = 0; a < arr.length; a++) {
        isRusltUnique = true;
        for (var b = 0; b < resultUnique.length; b++) {
          if (arr[a].nurseId == resultUnique[b].nurseId) {
            isRusltUnique = false;
            break;
          }
        }
        if (isRusltUnique) {
          resultUnique.push(arr[a]);
        }
      }
      for (var m = 0; m < userIds.length; m++) {
        resultUnique.push(userIds[m]);
      }
      var nurseUnique = [], isNurseIdUnique;
      for (var c = 0; c < nurseIds.length; c++) {
        isNurseIdUnique = true;
        for (var d = 0; d < nurseUnique.length; d++) {
          if (nurseIds[c].nurseId == nurseUnique[d].nurseId) {
            isNurseIdUnique = false;
            break;
          }
        }
        if (isNurseIdUnique) {
          nurseUnique.push(nurseIds[c]);
        }
      }
      resultArr = resultUnique;
      nurseIds = nurseUnique;
      console.log('---0000');
      console.log(resultArr);
      console.log(nurseIds);
      if (resultArr.length === 0) {
        $$toast.show('\u8bf7\u9009\u62e9\u6c9f\u901a\u5bf9\u8c61');
        $$loading.hide();
        return false;
      }
      $$log.debug('resultArr.length ' + resultArr.length);
      //判断是否为群聊
      if (resultArr.length > 1) {
        $$loading.hide();
        $$confirm.show({
          title: '\u8bf7\u8f93\u5165\u7fa4\u804a\u540d\u79f0',
          msg: '<input class="h3 border-line border-color-global-base padding-left-md" style="width:80%" type="text">',
          callback: function () {
            $$loading.show();
            var name = $('.confirm').find('input').val();
            $scope.groupName = name;
            var nurseId = [];
            var userId = [];
            if (nurseIds.length > 0) {
              for (var i = 0; i < nurseIds.length; i++) {
                nurseId.push(nurseIds[i].nurseId);
              }
            }
            nurseId.push(localStorage.globalNurseId);
            if (userIds.length > 0) {
              for (var j = 0; j < userIds.length; j++) {
                userId.push(userIds[j].userId);
              }
            }
            $http({
              method: 'POST',
              url: $$requestUrl.getUrl('createGroupChat'),
              data: {
                groupName: $scope.groupName,
                nurseIds: nurseId,
                userIds: userId
              }
            }).success(function (response) {
              if (typeof response.result.success != 'undefined') {
                $$loading.hide();
              }
              if (response.result.success === true) {
                localStorage.targetChatId = response.groupId;
              } else {
                $$toast.show(response.result.displayMsg.toString());
              }
              gotoChat();
            });
          },
          confirmText: '\u786e\u5b9a',
          cancelText: '\u53d6\u6d88'
        });
      } else {
        $http({
          method: 'POST',
          url: $$requestUrl.getUrl(resultArr[0].type == 'nurse' ? 'createC2CNurse' : 'createC2CUser', {
            fromId: localStorage.globalNurseId,
            toId: resultArr[0].type == 'nurse' ? resultArr[0].nurseId : resultArr[0].userId
          })
        }).success(function (response) {
          if (typeof response.result.success != 'undefined') {
            $$loading.hide();
          }
          if (response.result.success === true) {
            localStorage.targetChatId = response.toAccount.identifier;
          } else {
            $$toast.show(response.result.displayMsg.toString());
          }
          gotoChat();
        });
      }
    };
  }
]);
/**
 * Created by lixu on 16/9/19.
 */
app.controller('setOrderStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$navbar',
  '$$tabbar',
  'getData',
  '$stateParams',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$navbar, $$tabbar, getData, $stateParams) {
    $scope.data = getData.data;
    $$log.debug('setOrderStateController');
    $$log.info($scope);
    switch ($stateParams.operateType) {
    case 'new':
      $$title.setTitle('\u521b\u5efa\u73ed\u6b21');
      break;
    default:
      $$title.setTitle('\u4fee\u6539\u73ed\u6b21');
      break;
    }
    $$navbar.showReturnBtn();
    $$tabbar.setIndex(-1);
  }
]);
/**
 * Created by lixu on 16/9/19.
 */
app.controller('setTemplateStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$stateParams',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $stateParams, $$tabbar, $$navbar) {
    switch ($stateParams.operateType) {
    case 'new':
      $$title.setTitle('\u65b0\u5efa\u968f\u8bbf\u6a21\u677f');
      break;
    default:
      $$title.setTitle('\u7f16\u8f91\u968f\u8bbf\u6a21\u677f');
      break;
    }
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
    $$log.debug('setTemplateStateController');
    $$log.info($scope);
  }
]);
/**
 * Created by gaoqz on 16/11/10.
 */
app.controller('settingStateController', [
  '$http',
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  '$$confirm',
  '$$requestUrl',
  '$$toast',
  function ($http, $rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar, $$confirm, $$requestUrl, $$toast) {
    $$log.info($scope);
    $$title.setTitle('\u8bbe\u7f6e');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
    $scope.nurseStatus = parseInt(localStorage.authorizedStatus);
    $scope.exitSign = function () {
      $$confirm.show({
        title: '\u9000\u51fa\u63d0\u793a',
        msg: '\u786e\u5b9a\u9000\u51fa\u5417\uff1f',
        callback: function () {
          $http({
            method: 'POST',
            url: $$requestUrl.getUrl('signOut')
          }).success(function (response) {
            if (response.result.success == true) {
              $$toast.show('\u9000\u51fa\u6210\u529f\uff01');
              localStorage.clear();
              localStorage.guided = 'true';
              // $$log.debug('globalNurseId:'+localStorage.globalNurseId);
              // $$log.debug('token:'+localStorage.token);
              // $$log.debug('globaldepartment:'+localStorage.globalDepartmentId);
              location.href = location.origin + location.pathname + '?' + '#/login';
            } else {
              $$toast.show(response.result.display);
            }
            return response;
          });
        },
        confirmText: '\u786e\u5b9a',
        cancelText: '\u53d6\u6d88'
      });
    };
  }
]);
/**
 * Created by lixu on 16/9/18.
 */
app.controller('sortStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar) {
    $$log.debug('sortStateController');
    $$log.info($scope);
    $$title.setTitle('\u6392\u73ed');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by lixu on 16/9/19.
 */
app.controller('startVisitStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar) {
    $$log.debug('startVisitStateController');
    $$log.info($scope);
    $$title.setTitle('\u53d1\u8d77\u968f\u8bbf');
    $$navbar.show();
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by lsh on 16/11/16.
 */
app.controller('statisticStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  '$$shence',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar, $$shence) {
    // $$log.info(getData.data);
    //统计管理
    $$navbar.setTitle('\u7edf\u8ba1\u7ba1\u7406');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
    var myChart = echarts.init(document.getElementById('userEChart'));
    var xAxisData = [];
    var seriesData = [];
    var temp = $scope.data.seven;
    //时间
    for (var i = 0; i < temp.date.length; i++) {
      xAxisData.push(temp.date[i].substr(5, 5));
    }
    for (i = 0; i < temp.times.length - 1; i++) {
      seriesData.push(temp.times[i]);
    }
    seriesData.push({
      value: temp.times[temp.times.length - 1],
      symbolSize: 8,
      label: {
        normal: {
          textStyle: {
            fontSize: 15,
            color: '#FF585C'
          }
        }
      },
      itemStyle: {
        normal: {
          color: '#FF585C',
          borderWidth: 50
        }
      }
    });
    option = {
      tooltip: {
        trigger: 'axis',
        show: false
      },
      grid: {
        left: '7%',
        right: '10%',
        bottom: '15%',
        top: '15%',
        show: false,
        containLabel: false
      },
      xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisTick: { show: true },
          data: xAxisData,
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: '#ddd'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: { fontSize: 13 }
          }
        }],
      yAxis: [{
          type: 'value',
          splitNumber: 3,
          splitLine: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false }
        }],
      textStyle: {
        fontSize: 12,
        color: '#888'
      },
      series: [{
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 6,
          data: seriesData,
          itemStyle: { normal: { color: '#00BD8F' } },
          label: {
            normal: {
              show: true,
              formatter: '+{c}\u4eba',
              position: [
                -12,
                -18
              ]
            }
          }
        }]
    };
    myChart.setOption(option);  // $$wx.configByHttp(function (department) {
                                //     $$wx.setShare({
                                //         title: department.name,
                                //         desc: department.name + ' @' + department.hospitalName,
                                //         link: $location.absUrl(),
                                //         imgUrl: encodeURI(department.iconImgUrl)
                                //     });
                                // });
                                // hospitalName = $scope.data.department.hospitalName;
                                // hospitalId = $scope.data.department.hospitalId;
                                // departmentName = $scope.data.department.name;
                                // departmentId = $scope.data.department.id;
                                // $$shence.track('_nurseHomeState', {
                                //     hospital: hospitalName,
                                //     hospitalId: hospitalId,
                                //     department: departmentName,
                                //     departmentId: departmentId
                                // });
                                // scrollTo(0, 0);
                                // $$log.debug('nurseHomeStateController');
                                // $$log.info($scope);
                                // $$title.setTitle('首页');
                                // $$zhugeIO.track('首页', {
                                //     "医院": $scope.data.department.hospital,
                                //     "科室": $scope.data.department.name,
                                //     "医院_科室": $scope.data.department.hospital + '_' + $scope.data.department.name
                                // });
                                // $$shence.track('_nurseHomeState', {
                                //     hospital: $scope.data.department.hospital,
                                //     department: $scope.data.department.name,
                                //     hospital_department: $scope.data.department.hospital + '_' + $scope.data.department.name
                                // });
  }
]);
/**
 * Created by lsh on 16/11/16.
 */
app.controller('statisticsCountStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  '$$shence',
  '$stateParams',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar, $$shence, $stateParams) {
    $$navbar.showReturnBtn();
    $$tabbar.hide();
    $scope.type = $stateParams.statisticType;
    $$title.setTitle($scope.type == 'plan' ? '\u5eb7\u590d\u8ba1\u5212\u9605\u8bfb\u7edf\u8ba1' : '\u5eb7\u590d\u5de5\u5177\u4f7f\u7528\u7edf\u8ba1');
  }
]);
/**
 * Created by yihuan on 2016/11/9.
 */
app.controller('tagManageStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  '$$shence',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar, $$shence) {
    $$log.debug('tagManageStateController');
    $$log.info($scope);
    // $$shence.track('_tagManageStateController');
    //配置页面信息
    $$navbar.setTitle('\u6807\u7b7e\u7ba1\u7406');
    $$navbar.show();
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by yihuan on 16/9/19.
 */
app.controller('toolListStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  '$$navbar',
  '$$shence',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, $$navbar, $$shence) {
    $$log.debug('toolListStateController');
    $$log.info($scope);
    $$shence.track('_toolListStateController');
    //配置页面信息
    $$navbar.setTitle('\u5de5\u5177');
    $$navbar.show();
    $$tabbar.setIndex(2);
    $$navbar.hideReturnBtn();
    followPatientObj = [];
    templateObj = {};
    runNurseObjArr = {};
    templateTime = '';
    globalTemplateData = {};
    classArr = [];
    orderObjArr = [];
    remindArr = [];
    admissionTime = null;
    sortType = 'new';
  }
]);
/**
 * Created by yihuan on 16/9/18.
 */
var headImgUrl = '';
app.controller('userCenterStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$http',
  '$$requestUrl',
  '$$title',
  'getData',
  '$$tabbar',
  '$$confirm',
  '$$toast',
  '$$navbar',
  '$$getClientInfo',
  function ($rootScope, $state, $scope, $location, $$log, $http, $$requestUrl, $$title, getData, $$tabbar, $$confirm, $$toast, $$navbar, $$getClientInfo) {
    // var currentTime = (new Date()).valueOf();
    //
    // var sevenTime = (new Date('2016-10-31 00:00:00')).valueOf();
    // $$log.debug('当前时间'+currentTime);
    //
    // $$log.debug('7tian:'+sevenTime);
    // if(currentTime >= sevenTime ){
    //
    //     $scope.overTime = true;
    //
    // }else{
    //
    //     $scope.overTime = false;
    // }
    $scope.data = getData.data;
    if (typeof $scope.data.basic.departmentId != 'undefined' && $scope.data.basic.departmentId != '') {
      localStorage.globalDepartmentId = $scope.data.basic.departmentId;
    } else {
      $$log.debug('localStorage.globalDepartmentId is null');
    }
    if (typeof $scope.data.basic.departmentName != 'undefined' && $scope.data.basic.departmentName != '') {
      localStorage.department = $scope.data.basic.departmentName;
    } else {
      $$log.debug('localStorage.department is null');
    }
    if (typeof $scope.data.basic.organizationName != 'undefined' && $scope.data.basic.organizationName != '') {
      localStorage.hospital = $scope.data.basic.organizationName;
    } else {
      $$log.debug('localStorage.hospital is null');
    }
    if (typeof $scope.data.basic.organizationId != 'undefined' && $scope.data.basic.organizationId != '') {
      localStorage.hospitalId = $scope.data.basic.organizationId;
    } else {
      $$log.debug('localStorage.hospitalId is null');
    }
    if (typeof $scope.data.basic.avatarUrl != 'undefined') {
      headImgUrl = $scope.data.basic.avatarUrl;
    }
    if (!localStorage.getItem('gloalIsGetDeviceID')) {
      $http({
        method: 'POST',
        url: $$requestUrl.getUrl('createDeviceClient'),
        data: {
          'personId': localStorage.globalNurseId,
          'cid': $$getClientInfo.clientid
        }
      }).success(function (response) {
        if (response.result.success == false) {
          // $$toast.show(response.result.displayMsg ? response.result.displayMsg.toString() : '服务器扔过来一个错误');
          localStorage.gloalIsGetDeviceID = false;
        } else {
          localStorage.gloalIsGetDeviceID = true;
        }
      });
    }
    $$log.debug('headImgUrl:' + headImgUrl);
    $$log.debug('userCenterStateController');
    $$log.info($scope.data);
    $$log.info($scope);
    $$title.setTitle('\u6211\u7684');
    $$tabbar.setIndex(3);
    $$navbar.hideReturnBtn();
  }
]);
/**
 * Created by lixu on 16/9/20.
 */
app.controller('writeRecordStateController', [
  '$rootScope',
  '$state',
  '$scope',
  '$location',
  '$$log',
  '$$title',
  '$$tabbar',
  'getData',
  '$$toast',
  '$$navbar',
  '$stateParams',
  function ($rootScope, $state, $scope, $location, $$log, $$title, $$tabbar, getData, $$toast, $$navbar, $stateParams) {
    $scope.data = getData.data;
    $scope.eventId = $stateParams.eventId;
    $$log.debug('writeRecordStateController');
    $$log.info($scope);
    $$title.setTitle('\u586b\u5199\u8bb0\u5f55');
    $$tabbar.setIndex(-1);
    $$navbar.showReturnBtn();
  }
]);
/**
 * Created by dongsj on 16/7/60 * 24 .
 * app.config
 */
app.config([
  '$stateProvider',
  '$urlMatcherFactoryProvider',
  '$urlRouterProvider',
  '$httpProvider',
  '$locationProvider',
  '$sceProvider',
  function ($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $httpProvider, $locationProvider, $sceProvider) {
    //禁用html5 mode
    $locationProvider.html5Mode(true);
    //启用http拦截器
    $httpProvider.interceptors.push('$$timestampMarker');
    //启用$sec
    $sceProvider.enabled(true);
    //禁用url大小写
    $urlMatcherFactoryProvider.caseInsensitive(true);
    if (localStorage.guided == undefined || localStorage.guided != 'true') {
      $urlRouterProvider.otherwise('/guidePage');
    } else if (localStorage.token == undefined || localStorage.token == '') {
      $urlRouterProvider.otherwise('/fakeMainPage');
    } else {
      $urlRouterProvider.otherwise('/messageTag');
    }
    $stateProvider.state('inputConfirmDemo', {
      url: '/inputConfirmDemo',
      controller: 'inputConfirmDemo',
      template: '',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$q',
          function ($http, $stateParams, $$log, $$requestUrl, $q) {
            $q.all({
              first: $http({
                method: 'GET',
                url: $$requestUrl.getUrl('registerStateController'),
                params: {}
              }),
              second: $http({
                method: 'GET',
                url: $$requestUrl.getUrl('demo', {
                  id1: 1,
                  id2: 2
                }),
                params: {}
              })
            }).then(function (arr) {
              $$log.debug('debug');
              $$log.info(arr);
            });
          }
        ]
      }
    }).state('setOrder', {
      url: '/:operateType/setOrder',
      controller: 'setOrderStateController',
      templateUrl: 'templates/state/setOrderState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            if ($stateParams.operateType == 'new') {
              $$log.debug('new setOrder');
              return {};
            } else {
              return $http({
                method: 'GET',
                url: $$requestUrl.getUrl('createNurseScheduleStateController'),
                params: {}
              }).success(function (response) {
                $$log.debug('setOrderStateController');
                $$log.info(response);
                return response;
              });
            }
          }
        ]
      }
    }).state('sort', {
      url: '/:operateType/sort',
      controller: 'sortStateController',
      templateUrl: 'templates/state/sortState.html'
    }).state('setTemplate', {
      url: '/:operateType/setTemplate',
      controller: 'setTemplateStateController',
      templateUrl: 'templates/state/setTemplateState.html'
    }).state('startVisit', {
      url: '/:operateType/startVisit',
      controller: 'startVisitStateController',
      templateUrl: 'templates/state/startVisitState.html'
    }).state('editVisit', {
      url: '/:operateType/editVisit',
      controller: 'editVisitStateController',
      templateUrl: 'templates/state/editVisitState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('createFollowUpTemplatesStateController'),
              params: {}
            }).success(function (response) {
              $$log.debug('editVisitStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('choiceClass', {
      url: '/:operateType/choiceClass',
      controller: 'choiceClassStateController',
      templateUrl: 'templates/state/choiceClassState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('chooseNurseScheduleStateController'),
              params: {}
            }).success(function (response) {
              $$log.debug('choiceClassStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('classList', {
      url: '/classList',
      controller: 'classListStateController',
      templateUrl: 'templates/state/classListState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('NurseScheduleListStateController'),
              params: {}
            }).success(function (response) {
              $$log.debug('classListStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('choiceVisit', {
      url: '/:operateType/choiceVisit',
      controller: 'choiceVisitStateController',
      templateUrl: 'templates/state/choiceVisitState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('chooseFollowUpTemplatesStateController'),
              params: {}
            }).success(function (response) {
              $$log.debug('choiceVisitStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('writeRecord', {
      url: '/:eventId/writeRecord',
      controller: 'writeRecordStateController',
      templateUrl: 'templates/state/writeRecordState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('getFollowUpRecord', { id: $stateParams.eventId }),
              params: {}
            }).success(function (response) {
              $$log.debug('writeRecordStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('dutyCalendar', {
      url: '/dutyCalendar/:weekOffset',
      controller: 'dutyCalendarStateController',
      templateUrl: 'templates/state/dutyCalendarState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            if (($stateParams.weekOffset == undefined || $stateParams.weekOffset == 0) && localStorage['changeSchedulePersonStateController'] && +new Date() - +JSON.parse(localStorage['changeSchedulePersonStateController']).time < 5 * 60 * 1000) {
              return { data: JSON.parse(localStorage['changeSchedulePersonStateController']).date };
            } else {
              return $http({
                method: 'GET',
                url: $$requestUrl.getUrl('changeSchedulePersonStateController', { 'departmentId': localStorage.globalDepartmentId }),
                params: { 'dateFrom': $stateParams.weekOffset || 0 }
              }).success(function (response) {
                $$log.debug('dutyCalendarStateController');
                $$log.info(response);
                if (response.result.success == true && ($stateParams.weekOffset == undefined || $stateParams.weekOffset == 0)) {
                  var ls = {
                      time: +new Date(),
                      date: response
                    };
                  localStorage['changeSchedulePersonStateController'] = JSON.stringify(ls);
                }
                return response;
              });
            }
          }
        ]
      }
    }).state('dutyChange', {
      url: '/dutyChange/:weekOffset',
      controller: 'dutyChangeStateController',
      templateUrl: 'templates/state/dutyChangeState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            if (($stateParams.weekOffset == undefined || $stateParams.weekOffset == 0) && localStorage['changeScheduleClassStateController'] && +new Date() - +JSON.parse(localStorage['changeScheduleClassStateController']).time < 5 * 60 * 1000) {
              return { data: JSON.parse(localStorage['changeScheduleClassStateController']).date };
            } else {
              return $http({
                method: 'GET',
                url: $$requestUrl.getUrl('changeScheduleClassStateController', { 'departmentId': localStorage.globalDepartmentId }),
                params: { 'dateFrom': $stateParams.weekOffset || 0 }
              }).success(function (response) {
                $$log.debug('dutyChangeStateController');
                $$log.info(response);
                if (response.result.success == true && ($stateParams.weekOffset == undefined || $stateParams.weekOffset == 0)) {
                  var ls = {
                      time: +new Date(),
                      date: response
                    };
                  localStorage['changeScheduleClassStateController'] = JSON.stringify(ls);
                }
                return response;
              });
            }
          }
        ]
      }
    }).state('dutyList', {
      url: '/dutyList/:weekOffset',
      controller: 'dutyListStateController',
      templateUrl: 'templates/state/dutyListState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            if (($stateParams.weekOffset == undefined || $stateParams.weekOffset == 0) && localStorage['batchSchedulesStateController'] && +new Date() - +JSON.parse(localStorage['batchSchedulesStateController']).time < 5 * 60 * 1000) {
              return { data: JSON.parse(localStorage['batchSchedulesStateController']).date };
            } else {
              return $http({
                method: 'GET',
                url: $$requestUrl.getUrl('batchSchedulesStateController', { 'departmentId': localStorage.globalDepartmentId }),
                params: { 'dateFrom': $stateParams.weekOffset || 0 }
              }).success(function (response) {
                $$log.debug('dutyListStateController');
                $$log.info(response);
                if (response.result.success == true && ($stateParams.weekOffset == undefined || $stateParams.weekOffset == 0)) {
                  var ls = {
                      time: +new Date(),
                      date: response
                    };
                  localStorage['batchSchedulesStateController'] = JSON.stringify(ls);
                }
                return response;
              });
            }
          }
        ]
      }
    }).state('choiceColor', {
      url: '/choiceColor',
      controller: 'choiceColorStateController',
      templateUrl: 'templates/state/choiceColorState.html'
    }).state('choiceDay', {
      url: '/choiceDay',
      controller: 'choiceDayStateController',
      templateUrl: 'templates/state/choiceDayState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('chooseRemindTimeStateController'),
              params: {}
            }).success(function (response) {
              $$log.debug('choiceDayStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('choiceHospital', {
      url: '/choiceHospital',
      controller: 'choiceHospitalStateController',
      templateUrl: 'templates/state/choiceHospitalState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('choiceHospitalStateController'),
              params: {}
            }).success(function (response) {
              $$log.debug('choiceHospitalStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('choiceDepartment', {
      url: '/:hospitalId/choiceDepartment',
      controller: 'choiceDepartmentStateController',
      templateUrl: 'templates/state/choiceDepartmentState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('choiceDepartmentStateController'),
              params: {}
            }).success(function (response) {
              $$log.debug('choiceDepartmentStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('nurseToolCounter', {
      url: '/nurseToolCounter',
      controller: 'nurseToolCounterStateController',
      templateUrl: 'templates/nurseMaster/state/nurseToolCounterState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$state',
          function ($http, $stateParams, $$log, $$requestUrl, $state) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('nurseToolCounterStateController'),
              params: {}
            }).success(function (response) {
              $$log.debug('nurseToolCounterStateController');
              $$log.info(response);
              return response;
            }).error(function () {
              $state.go('nurseLogin');
            });
          }
        ]
      }
    }).state('manage', {
      url: '/manage',
      controller: 'manageStateController',
      templateUrl: 'templates/state/manageState.html'
    }).state('nursePlanCounter', {
      url: '/nursePlanCounterStateController',
      controller: 'nursePlanCounterStateController',
      templateUrl: 'templates/state/nursePlanCounterState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$state',
          function ($http, $stateParams, $$log, $$requestUrl, $state) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('nursePlanCounterStateController'),
              params: {}
            }).success(function (response) {
              $$log.debug('nursePlanCounterStateController');
              $$log.info(response);
              return response;
            }).error(function () {
              $state.go('nurseLogin');
            });
          }
        ]
      }
    }).state('login', {
      url: '/login',
      controller: 'loginStateController',
      templateUrl: 'templates/state/loginState.html'
    }).state('basicInfo', {
      url: '/basicInfo',
      controller: 'basicInfoStateController',
      templateUrl: 'templates/state/basicInfoState.html'
    }).state('professionInfo', {
      url: '/professionInfo',
      controller: 'professionInfoStateController',
      templateUrl: 'templates/state/professionInfoState.html'
    }).state('allPatientList', {
      url: '/:operateType/allPatientList',
      controller: 'allPatientListStateController',
      templateUrl: 'templates/state/allPatientListState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            if (localStorage['allPatientList'] && +new Date() - +JSON.parse(localStorage['allPatientList']).time < 5 * 60 * 1000) {
              return { data: JSON.parse(localStorage['allPatientList']).date };
            } else {
              return $http({
                method: 'GET',
                url: $$requestUrl.getUrl('allPatientListStateController', { 'nurseId': localStorage.globalNurseId }),
                params: {}
              }).success(function (response) {
                $$log.debug('allPatientListStateController');
                $$log.info(response);
                if (response.result.success == true) {
                  var ls = {
                      time: +new Date(),
                      date: response
                    };
                  localStorage['allPatientList'] = JSON.stringify(ls);
                }
                return response;
              });
            }
          }
        ]
      }
    }).state('otherPatientList', {
      url: '/:isIn/otherPatientList',
      controller: 'otherPatientListStateController',
      templateUrl: 'templates/state/otherPatientListState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('otherPatientListStateController', { 'nurseId': localStorage.globalNurseId }),
              params: {}
            }).success(function (response) {
              $$log.debug('otherPatientListStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('patientDetail', {
      url: '/:patientId/patientDetail',
      controller: 'patientDetailStateController',
      templateUrl: 'templates/state/patientDetailState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('patientDetailStateController', { 'userId': $stateParams.patientId }),
              params: {}
            }).success(function (response) {
              $$log.debug('patientDetailStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('inviteNurse', {
      url: '/inviteNurse',
      controller: 'inviteNurseStateController',
      templateUrl: 'templates/state/inviteNurseState.html'
    }).state('userCenter', {
      url: '/userCenter',
      controller: 'userCenterStateController',
      templateUrl: 'templates/state/userCenterState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$$toast',
          function ($http, $stateParams, $$log, $$requestUrl, $$toast) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('userCenterInfoStateController', { 'nurseId': localStorage.globalNurseId }),
              params: {}
            }).success(function (response) {
              if (response.result.success == false) {
                $$toast.show(response.result.displayMsg);
              }
              $$log.debug('userCenterInfoStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('aletrNurseInfo', {
      url: '/aletrNurseInfo',
      controller: 'aletrNurseInfoStateController',
      templateUrl: 'templates/state/aletrNurseInfoState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$$toast',
          function ($http, $stateParams, $$log, $$requestUrl, $$toast) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('alterNurseInfoStateController', { 'nurseId': localStorage.globalNurseId }),
              params: {}
            }).success(function (response) {
              if (response.result.success == false) {
                $$toast.show(response.result.displayMsg);
              }
              $$log.debug('alterNurseInfoStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('nurseList', {
      url: '/:operateType/nurseList',
      controller: 'nurseListStateController',
      templateUrl: 'templates/state/nurseListState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$$toast',
          function ($http, $stateParams, $$log, $$requestUrl, $$toast) {
            if (localStorage['nurseList'] && +new Date() - +JSON.parse(localStorage['nurseList']).time < 5 * 60 * 1000) {
              return { data: JSON.parse(localStorage['nurseList']).date };
            } else {
              return $http({
                method: 'GET',
                url: $$requestUrl.getUrl('nurseListStateController', { 'nurseId': localStorage.globalNurseId }),
                params: {}
              }).success(function (response) {
                if (response.result.success == false) {
                  $$toast.show(response.result.displayMsg);
                }
                $$log.debug('nurseListStateController');
                $$log.info(response);
                if (response.result.success == true) {
                  var ls = {
                      time: +new Date(),
                      date: response
                    };
                  localStorage['nurseList'] = JSON.stringify(ls);
                }
                return response;
              });
            }
          }
        ]
      }
    }).state('nurseDetail', {
      url: '/:nurseId/nurseDetail',
      controller: 'nurseDetailStateController',
      templateUrl: 'templates/state/nurseDetailState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$$toast',
          function ($http, $stateParams, $$log, $$requestUrl, $$toast) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('nurseDetailStateController', { 'nurseId': $stateParams.nurseId }),
              params: {}
            }).success(function (response) {
              if (response.result.success == false) {
                $$toast.show(response.result.displayMsg);
              }
              $$log.debug('nurseDetailStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('alterNurseTag', {
      url: '/:nurseId/alterNurseTag',
      controller: 'alterNurseTagStateController',
      templateUrl: 'templates/state/alterNurseTagState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$$toast',
          function ($http, $stateParams, $$log, $$requestUrl, $$toast) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('alterNurseTagStateController', { 'departmentId': localStorage.globalDepartmentId }),
              params: {}
            }).success(function (response) {
              if (response.result.success == false) {
                $$toast.show(response.result.displayMsg);
              }
              $$log.debug('alterNurseTagStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('toolList', {
      url: '/toolList',
      controller: 'toolListStateController',
      templateUrl: 'templates/state/toolListState.html'
    }).state('contentList', {
      url: '/:operateType/contentList',
      controller: 'contentListStateController',
      templateUrl: 'templates/state/contentListState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$$toast',
          function ($http, $stateParams, $$log, $$requestUrl, $$toast) {
            if (localStorage['contentListStateController'] && +new Date() - +JSON.parse(localStorage['contentListStateController']).time < 60 * 60 * 1000) {
              return { data: JSON.parse(localStorage['contentListStateController']).date };
            } else {
              return $http({
                method: 'GET',
                url: $$requestUrl.getUrl('contentListStateController'),
                params: {}
              }).success(function (response) {
                if (response.result.success == false) {
                  $$toast.show(response.result.displayMsg);
                }
                $$log.debug('contentListStateController');
                $$log.info(response);
                if (response.result.success == true) {
                  var ls = {
                      time: +new Date(),
                      date: response
                    };
                  localStorage['contentListStateController'] = JSON.stringify(ls);
                }
                return response;
              });
            }
          }
        ]
      }
    }).state('patientTag', {
      url: '/:operateType/patientTag',
      controller: 'patientTagStateController',
      templateUrl: 'templates/state/patientTagState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$$toast',
          function ($http, $stateParams, $$log, $$requestUrl, $$toast) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('patientTagStateController', { 'departmentId': localStorage.globalDepartmentId }),
              params: {}
            }).success(function (response) {
              if (response.result.success == false) {
                $$toast.show(response.result.displayMsg);
              }
              $$log.debug('patientTagStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('selectList', {
      url: '/selectList',
      controller: 'selectListStateController',
      templateUrl: 'templates/state/selectListState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          '$q',
          function ($http, $stateParams, $$log, $$requestUrl, $q) {
            if (localStorage['selectList'] && +new Date() - +JSON.parse(localStorage['selectList']).time < 5 * 60 * 1000) {
              return JSON.parse(localStorage['selectList']);
            } else {
              return $q.all({
                nurse: $http({
                  method: 'GET',
                  url: $$requestUrl.getUrl('getSelectNurseStateController', { 'nurseId': localStorage.globalNurseId }),
                  params: {}
                }),
                patient: $http({
                  method: 'GET',
                  url: $$requestUrl.getUrl('getSelectPatientStateController', { 'nurseId': localStorage.globalNurseId }),
                  params: {}
                })
              }).then(function (arr) {
                $$log.debug('debug');
                $$log.info(arr);
                if (arr.nurse.data.result.success == true && arr.patient.data.result.success == true) {
                  var ls = arr;
                  ls.time = +new Date();
                  localStorage['selectList'] = JSON.stringify(ls);
                }
                return arr;
              });
            }
          }
        ]
      }
    }).state('tagManage', {
      url: '/tagManage',
      controller: 'tagManageStateController',
      templateUrl: 'templates/state/tagManageState.html'
    }).state('patientTagManage', {
      url: '/patientTagManage',
      controller: 'patientTagManageStateController',
      templateUrl: 'templates/state/patientTagManageState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('patientTagManageStateController', { 'departmentId': localStorage.globalDepartmentId }),
              params: {}
            }).success(function (response) {
              $$log.debug('patientTagManageStateController');
              $$log.info(response);
              return response;
            });  // }
          }
        ]
      }
    }).state('nurseTagManage', {
      url: '/nurseTagManage',
      controller: 'nurseTagManageStateController',
      templateUrl: 'templates/state/nurseTagManageState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('nurseTagManageStateController', { 'departmentId': localStorage.globalDepartmentId }),
              params: {}
            }).success(function (response) {
              $$log.debug('nurseTagManageStateController');
              $$log.info(response);
              return response;
            });  // }
          }
        ]
      }
    }).state('messageTag', {
      url: '/messageTag',
      controller: 'messageTagStateController',
      templateUrl: 'templates/state/messageTagState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            // if (!localStorage['messageTag']) {
            //     localStorage['messageTag'] = 1;
            // }
            // localStorage['messageTag'] = parseInt(localStorage['messageTag']) + 1;
            // if (parseInt(localStorage['messageTag']) % 2 == 1) {
            //     location.reload();
            // } else {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('messageTagStateController'),
              params: { scenario: 'messageCenter' }
            }).success(function (response) {
              $$log.debug('messageTagStateController');
              $$log.info(response);
              return response;
            });  // }
          }
        ]
      }
    }).state('recentCalender', {
      url: '/recentCalender',
      controller: 'recentCalenderStateController',
      templateUrl: 'templates/state/recentCalenderState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('recentCalenderStateController'),
              params: { scenario: 'messageCenter' }
            }).success(function (response) {
              $$log.debug('recentCalenderStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('chat', {
      url: '/chat',
      controller: 'chatStateController',
      templateUrl: 'templates/state/chatState.html'
    }).state('createCalender', {
      url: '/createCalender',
      controller: 'createCalenderStateController',
      templateUrl: 'templates/state/createCalenderStateController.html'
    }).state('guidePage', {
      url: '/guidePage',
      controller: 'guidePageStateController',
      templateUrl: 'templates/state/guidePageState.html'
    }).state('fakeMainPage', {
      url: '/fakeMainPage',
      controller: 'fakeMainPageStateController',
      templateUrl: 'templates/state/fakeMainPageState.html'
    }).state('patientRelation', {
      url: '/patientRelation',
      controller: 'patientRelationStateController',
      templateUrl: 'templates/state/patientRelationState.html'
    }).state('setting', {
      url: '/setting',
      controller: 'settingStateController',
      templateUrl: 'templates/state/settingState.html'
    }).state('blackList', {
      url: '/blackList',
      controller: 'blackListStateController',
      templateUrl: 'templates/state/blackListState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('blackList', { 'nurseId': localStorage.globalNurseId }),
              params: {}
            }).success(function (response) {
              $$log.debug('allPatientListStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('statistic', {
      url: '/statistic',
      controller: 'statisticStateController',
      templateUrl: 'templates/state/statisticState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('statisticStateController'),
              params: { 'nurseId': localStorage.globalNurseId }
            }).success(function (response) {
              $$log.debug('statisticStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('planCount', {
      url: '/:statisticType/planCount',
      controller: 'statisticsCountStateController',
      templateUrl: 'templates/state/statisticsCountState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('planCountStateController'),
              params: { 'nurseId': localStorage.globalNurseId }
            }).success(function (response) {
              $$log.debug('planCountStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    }).state('toolCount', {
      url: '/:statisticType/toolCount',
      controller: 'statisticsCountStateController',
      templateUrl: 'templates/state/statisticsCountState.html',
      resolve: {
        getData: [
          '$http',
          '$stateParams',
          '$$log',
          '$$requestUrl',
          function ($http, $stateParams, $$log, $$requestUrl) {
            return $http({
              method: 'GET',
              url: $$requestUrl.getUrl('toolCountStateController'),
              params: { 'nurseId': localStorage.globalNurseId }
            }).success(function (response) {
              $$log.debug('toolCountStateController');
              $$log.info(response);
              return response;
            });
          }
        ]
      }
    });
  }
]);
/**
 * Created by dongsj on 16/7/15.
 * app.run
 */
var imLoaded = 'false';
app.run([
  '$rootScope',
  '$window',
  '$location',
  '$$log',
  '$$env',
  '$$initRem',
  '$$wx',
  '$$shence',
  '$$loading',
  '$$navbar',
  '$state',
  '$$txIM',
  '$$tabbar',
  '$timeout',
  function ($rootScope, $window, $location, $$log, $$env, $$initRem, $$wx, $$shence, $$loading, $$navbar, $state, $$txIM, $$tabbar, $timeout) {
    // $$log.hideAll(true);
    $$log.showAll(true);
    $$shence.init();
    // $$log.showAll();
    $$env.setEnvirement('dev');
    // $$env.setEnvirement('debug');
    // $$env.setEnvirement('pro');
    $$initRem.init();
    $rootScope.$on('$locationChangeStart', locationChangeStart);
    $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);
    $rootScope.$on('$stateChangeStart', stateChangeStart);
    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
    function stateChangeStart($rootScope, $state) {
      // if (localStorage.lastPage == 'messageTag' && $state.name != 'messageTag') {
      //     $$log.debug('important!!!');
      //     $$log.debug(localStorage.lastPage);
      //     $$log.debug($state.name);
      //     localStorage.lastPage = $state.name;
      //     location.reload();
      // }
      // localStorage.lastPage = $state.name;
      // if ($state.name == 'messageTag') {
      // if (localStorage.messageTag === undefined) {
      //     localStorage.messageTag = 0;
      // }
      // localStorage.messageTag = parseInt(localStorage.messageTag) + 1;
      // if (parseInt(localStorage.messageTag) % 2 == 1) {
      //     location.href = location.origin + location.pathname + '?' + parseInt(Math.random() * 1000) + '#/messageTag';
      // }
      // }
      if (($state.name == 'allPatientList' || $state.name == 'toolList') && imLoaded == 'false') {
        var listeners = {
            'onMsgNotify': function (newMsgList) {
              for (var i = 0; i < newMsgList.length; i++) {
                addMsg(newMsgList[i]);
              }
            }
          };
        var chatList = $$txIM.loadList();
        for (var i = 0; i < chatList.length; i++) {
          if (chatList[i].lastMsg.type != 'empty' && chatList[i].lastMsg.newMsg === true) {
            $timeout(function () {
              $$tabbar.setNewMsg(0, true);
            }, 2000);
          }
        }
        var addMsg = function (msg) {
          var msgEle = $$txIM.createMsgEle(msg);
          if (!msgEle) {
            return false;
          }
          // var lastEle = $$txIM.loadLastMsg(msgEle.fromAccount);
          // if (lastEle.fullTime == undefined || msgEle.fullTime > lastEle.fullTime) {
          $$tabbar.setNewMsg(0, true);  // }
        };
        $$txIM.login(listeners, function () {
          imLoaded = 'true';
          $$txIM.sendIMArray();  // $$txIM.getAllFriend(function (resp) {
                                 //     $$txIM.syncC2CMsgs(function (resp) {
                                 //         for (var i = 0; i < resp.length; i++) {
                                 //             if($$txIM.createMsgEle(resp[i]).fullTime>$$txIM.loadLastMsg(resp[i].fromAccount)){
                                 //                 addMsg(resp[i]);
                                 //             }
                                 //         }
                                 //     });
                                 // });
                                 // $$txIM.getAllGroup(function (resp) {
                                 //     // var groupIds=[];
                                 //     for (var i = 0; i < resp.GroupIdList.length; i++) {
                                 //         $$txIM.syncGROUPLastMsgs(resp.GroupIdList[i].GroupId, function (resp) {
                                 //             for (var i = 0; i < resp.length; i++) {
                                 //                 if($$txIM.createMsgEle(resp[i]).fullTime>$$txIM.loadLastMsg(resp[i].fromAccount)){
                                 //                     addMsg(resp[i]);
                                 //                 }
                                 //             }
                                 //         });
                                 //     }
                                 // });
        });
      }
      $$log.debug('stateChangeStart');
      $$log.info(arguments, 3);
      $$log.info($state);
      $$shence.track('__page_' + $state.name, {
        name: $state.name,
        url: $state.url,
        pre: sessionStorage.prePage
      });
      sessionStorage.prePage = $state.name;
      $$loading.show();
    }
    function stateChangeSuccess($rootScope) {
      $$log.debug('stateChangeSuccess');
      $$log.info(arguments, 3);
      $$loading.hide();
    }
    function locationChangeStart(event) {
      $$log.debug('locationChangeStart');
      $$log.info(arguments, 3);  // wx.ready(function () {
                                 //     wx.hideOptionMenu();
                                 // });
    }
    function locationChangeSuccess(event) {
      $$log.debug('locationChangeSuccess');
      $$log.info(arguments, 3);
      $$loading.hide();
    }
  }
]);