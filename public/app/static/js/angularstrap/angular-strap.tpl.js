/**
 * angular-strap
 * @version v2.1.2 - 2014-10-19
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
'use strict';

// Source: alert.tpl.js
angular.module('mgcrea.ngStrap.alert').run(['$templateCache', function($templateCache) {

  $templateCache.put('alert/alert.tpl.html', '<div class="alert" style="z-index:1100;" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button><strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></div>');

}]);

// Source: aside.tpl.js
angular.module('mgcrea.ngStrap.aside').run(['$templateCache', function($templateCache) {

  $templateCache.put('aside/aside.tpl.html', '<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');

}]);

// Source: dropdown.tpl.js
angular.module('mgcrea.ngStrap.dropdown').run(['$templateCache', function($templateCache) {

  $templateCache.put('dropdown/dropdown.tpl.html', '<ul tabindex="-1" class="dropdown-menu" role="menu"><li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>');

}]);

// Source: datepicker.tpl.js
angular.module('mgcrea.ngStrap.datepicker').run(['$templateCache', function($templateCache) {

  $templateCache.put('datepicker/datepicker.tpl.html', '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-show="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody></table></div>');

}]);

// Source: modal.tpl.js
angular.module('mgcrea.ngStrap.modal').run(['$templateCache', function($templateCache) {

  $templateCache.put('modal/modal.tpl.html', '<div class="modal" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">关闭</button></div></div></div></div>');
    $templateCache.put('modal/modal.confirm.tpl.html', '<div class="modal" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer" ng-hide="modalFooterHide"><button type="button" class="btn btn-primary" ng-click="$modalButtonClick()">确认</button><button type="button" class="btn btn-default" ng-click="$hide()">关闭</button></div></div></div></div>');
    $templateCache.put('buzCircle/modifyName.tpl.html','<div class="input-group"><span class="input-group-addon" id="basic-addon2">名称：</span><input id="modifyGroupName" type="text" class="form-control" ng-model="nickName" aria-describedby="basic-addon2"></div>');

}]);

// Source: popover.tpl.js
angular.module('mgcrea.ngStrap.popover').run(['$templateCache', function($templateCache) {

  $templateCache.put('popover/popover.tpl.html', '<div class="popover"><div class="arrow" style="position: fixed;"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content" style="padding: 0 0;"></div></div>');
  $templateCache.put('popover/contacts.rightMenu.tpl.html', '<div class="list-group" style="margin-bottom:0"><a role="button" ng-show="isSysGroup" ng-click="contactsMenuButtonClick($element,menuEnum.addGroup);" class="list-group-item">添加分组</a> <a role="button" ng-show="!isSysGroup" ng-click="contactsMenuButtonClick($element,menuEnum.delGroup);" class="list-group-item">删除分组</a> <a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.addPerson);" class="list-group-item">添加成员</a><a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.renameGroup);" class="list-group-item">重命名</a></div>');
  $templateCache.put('popover/buzCircle.rightMenu.tpl.html', '<div class="list-group" style="margin-bottom:0px;"> <a role="button" ng-click="buzcircleMenuButtonClick($element,menuEnum.message,item);" class="list-group-item">发送消息</a><a role="button" ng-click="buzcircleMenuButtonClick($element,menuEnum.modifyName,item);" class="list-group-item">修改名片</a><a role="button" ng-click="buzcircleMenuButtonClick($element,menuEnum.deleteBuzCircle,item);" class="list-group-item">删除商圈</a></div>');
  $templateCache.put('popover/company.rightMenu.tpl.html','<div class="list-group" style="margin-bottom:0"><a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.getCompany);" class="list-group-item">查询公司</a> <a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.modifyCompany);" class="list-group-item" ng-show="node.companyid == node.sessionid">修改公司</a> <a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.addStation);" class="list-group-item" >添加站点</a></div>');
  $templateCache.put('popover/station.rightMenu.tpl.html','<div class="list-group" style="margin-bottom:0"><a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.getStation);" class="list-group-item">查看站点</a> <a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.editStation);" class="list-group-item" >修改站点</a> <a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.delStation);" class="list-group-item" >删除站点</a><a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.addStaff);" class="list-group-item" >添加员工</a></div>');
//  $templateCache.put('popover/organization.rightMenu.tpl.html','<div class="list-group" style="margin-bottom:0"><a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.getStation);" class="list-group-item">查看站点</a> <a role="button" ng-click="contactsMenuButtonClick($element,menuEnum.delStation);" class="list-group-item" >删除站点</a></div>');
  $templateCache.put('popover/contacts.searchResult.tpl.html','<div class="list-group" style="width:180px;margin-bottom:0"><a role="button" ng-show="searchResult.length == 0" class="list-group-item">查无结果</a> <a role="button" ng-click="searchResultSelected(item);" ng-repeat="item in searchResult track by $index" class="list-group-item"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;{{item.contactname}}</a></div>');
  $templateCache.put('popover/person.detail.tpl.html','<form class="form-horizontal" style="width: 300px;"><div class="form-group"><label class="col-md-4 control-label">所属公司：</label><div class="col-md-8"><p class="form-control-static">{{cardData.companyname}}</p></div></div><div class="form-group"><label class="col-md-4 control-label">电话：</label><div class="col-md-8"><p class="form-control-static">13662491615</p></div></div><div class="form-group"><label class="col-md-4 control-label">地址：</label><div class="col-md-6"><p class="form-control-static">东诚大厦</p></div></div></form>');
  $templateCache.put('popover/resource.tpl.html','<div style="width: 300px;padding: 10px;" ng-model="button.radio" bs-radio-group><label class="btn btn-danger" ng-repeat="item in moreResources" style="top: -10px;margin-right:5px;"><input type="radio" class="btn btn-info">{{item.resourcename}}</label></div>');
  $templateCache.put('popover/message.tpl.html','<div style="width: 300px;padding: 10px;" ng-model="button.radio" bs-radio-group><label class="btn btn-danger" ng-repeat="item in moreResources" style="top: -10px;margin-right:5px;"><input type="radio" class="btn btn-info">{{item.resourcename}}</label></div>')

}]);

// Source: select.tpl.js
angular.module('mgcrea.ngStrap.select').run(['$templateCache', function($templateCache) {

  $templateCache.put('select/select.tpl.html', '<ul tabindex="-1" class="select dropdown-menu" style="max-height: 200px;overflow: auto;" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button class="btn btn-default btn-xs" ng-click="$selectAll()">All</button> <button class="btn btn-default btn-xs" ng-click="$selectNone()">None</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><span ng-bind="match.label"></span> <i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i></a></li></ul>');

}]);

// Source: tab.tpl.js
angular.module('mgcrea.ngStrap.tab').run(['$templateCache', function($templateCache) {

  /*$templateCache.put('tab/tab.tpl.html', '<ul class="nav" ng-class="$navClass" role="tablist"><li ng-repeat="$pane in $panes" ng-class="$index == $panes.$active ? $activeClass : \'\'"><a role="tab" data-toggle="tab" ng-click="$setActive($index)" data-index="{{ $index }}" ng-bind-html="$pane.title"></a></li></ul><div ng-transclude class="tab-content"></div>');*/

    $templateCache.put('tab/tab.tpl.html', '<ul class="nav" style="height: 40px;" ng-class="$navClass" role="tablist"><li ng-repeat="$pane in $panes" ng-class="$index == $panes.$active ? $activeClass : \'\'"><a role="tab" data-toggle="tab" ng-click="$setActive($index)" data-index="{{ $index }}" ng-bind-html="$pane.title"></a></li></ul><div ng-transclude class="tab-content" ui-view="contentPanel"></div>');

}]);

// Source: timepicker.tpl.js
angular.module('mgcrea.ngStrap.timepicker').run(['$templateCache', function($templateCache) {

  $templateCache.put('timepicker/timepicker.tpl.html', '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>');

}]);

// Source: tooltip.tpl.js
angular.module('mgcrea.ngStrap.tooltip').run(['$templateCache', function($templateCache) {

  $templateCache.put('tooltip/tooltip.tpl.html', '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>');

}]);

// Source: typeahead.tpl.js
angular.module('mgcrea.ngStrap.typeahead').run(['$templateCache', function($templateCache) {

  $templateCache.put('typeahead/typeahead.tpl.html', '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>');

}]);


})(window, document);