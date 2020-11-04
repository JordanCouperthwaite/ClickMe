/*
bootstrap4 v0.1.0
Copyright (c) 2020 RojobaCo All rights reserved.
*/

'use strict';
RojobaCo = window.RojobaCo = {};
$ = jQuery;

this["RojobaCo"] = this["RojobaCo"] || {};
this["RojobaCo"]["Templates"] = this["RojobaCo"]["Templates"] || {};

this["RojobaCo"]["Templates"]["b4-checkbox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.colInput || (depth0 != null ? depth0.colInput : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"colInput","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "col-sm-12";
},"5":function(container,depth0,helpers,partials,data) {
    return "checked";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row form-group\">\r\n  <div class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colInput : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label>\r\n      <input type=\"checkbox\" class=\"b4-checkbox\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /> "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n    </label>\r\n  </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-currency"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <li><a href=\"javascript:void(0);\">"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-btn\">\r\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><span id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "CurrencyLabel\">GBP</span>&nbsp;<span class=\"caret\"></span></button>\r\n                <ul class=\"dropdown-menu\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\r\n            </div><!-- /btn-group -->\r\n            <input type=\"hidden\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "Currency\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "Currency\" value=\"GBP\" />\r\n            <input type=\"text\" class=\"form-control az-currency\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" />\r\n            <span class=\"input-group-addon\">.00</span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-datepicker"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <div class=\"input-group date\">\r\n            <input type=\"text\" class=\"form-control b4-datepicker\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" readonly />\r\n            <span class=\"input-group-addon\">\r\n                <span class=\"las la-calendar\"></span>\r\n            </span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-datetimepicker"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <div class=\"input-group date\">\r\n            <input type=\"text\" class=\"form-control az-datetimepicker\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" readonly />\r\n            <span class=\"input-group-addon\">\r\n                <span class=\"glyphicon glyphicon-calendar\"></span>\r\n            </span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-decimal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control az-decimal\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" />\r\n            <span class=\"input-group-addon\">.00</span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-editor"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <textarea rows=\"5\" cols=\"0\" class=\"form-control ckeditor\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\"></textarea>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-file"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <div class=\"input-group\">\r\n            <input type=\"file\" class=\"form-control az-file\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" />\r\n            <span class=\"input-group-addon\"><i class=\"fa fa-file\"></i></span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-formfooter"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"form-footer\">\r\n			<div id=\"toaster-alert\" class=\"alert alert-success\" role=\"alert\" style=\"display:none;\"><strong>Success!</strong>&nbsp;CER saved.</div>\r\n            <button type=\"button\" class=\"btn btn-default\" onclick=\"window.history.go(-1); return false;\">Cancel</button>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-grid"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col-sm-12 no-gutter\">\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col-sm-12\">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.removeGutter : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  <input type=\"hidden\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" />\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-hidden"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input type=\"hidden\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" />";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-html"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<div class=\"form-group\">\r\n    <label class=\"col-sm-3 control-label\">"
    + container.escapeExpression(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9 az-html\">\r\n        "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-input"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.colLabel || (depth0 != null ? depth0.colLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colLabel","hash":{},"data":data}) : helper)))
    + " control-label my-auto\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.colInput || (depth0 != null ? depth0.colInput : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"colInput","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return "col-sm-12";
},"7":function(container,depth0,helpers,partials,data) {
    return " form-control-required";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row form-group\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colInput : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n    <input type=\"text\" class=\"form-control b4-input"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" />\r\n  </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-label"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.colLabel || (depth0 != null ? depth0.colLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colLabel","hash":{},"data":data}) : helper)))
    + " control-label my-auto\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.colInput || (depth0 != null ? depth0.colInput : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"colInput","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return "col-sm-12";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row form-group\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colInput : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n    <input type=\"hidden\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">\r\n    <p class=\"form-control-static\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\r\n  </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-link"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <p class=\"form-control-static\"><a name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</a></p>\r\n    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-money"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currency","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return "GBP";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.currency : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\r\n            <input type=\"text\" class=\"form-control az-money\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" />\r\n            <span class=\"input-group-addon\">.00</span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-multiselect"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <select class=\"form-control az-multiselect\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" multiple=\"multiple\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-number"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.colLabel || (depth0 != null ? depth0.colLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colLabel","hash":{},"data":data}) : helper)))
    + " control-label my-auto\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.colInput || (depth0 != null ? depth0.colInput : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"colInput","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return "col-sm-12";
},"7":function(container,depth0,helpers,partials,data) {
    return " form-control-required";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row form-group\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colInput : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n    <input type=\"text\" class=\"form-control b4-number"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" />  \r\n  </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-password"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " form-control-required";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">      \r\n        <input type=\"password\" class=\"form-control"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" />\r\n    </div>        \r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-percentage"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control az-percentage\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" />\r\n            <span class=\"input-group-addon\">%</span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-radio"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "        <label class=\"radio-inline\">\r\n            <input type=\"radio\" name=\""
    + alias2(alias1((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "\" id=\""
    + alias2(alias1((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias2(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"value","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias2(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n        </label>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["RojobaCo"]["Templates"]["b4-richtext"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <div class=\"az-richtext\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-searchselect"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <input class=\"form-control az-searchselect\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"/>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-select"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.colLabel || (depth0 != null ? depth0.colLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colLabel","hash":{},"data":data}) : helper)))
    + " control-label my-auto\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.colInput || (depth0 != null ? depth0.colInput : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"colInput","hash":{},"data":data}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    return "col-sm-12";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "      <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colInput : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n    <select class=\"form-control b4-select\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\r\n      <option value=\"\" disabled selected hidden>"
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "</option>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-tab"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " class=\"active\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li role=\"presentation\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n    <a href=\"javascript:void(0);\" aria-controls=\"home\" role=\"tab\" data-target=\"#"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"tab\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</a>\r\n</li>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-textarea"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-feedback";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"col-sm-3 control-label\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <div class=\"col-sm-9\">\r\n        <textarea rows=\"5\" cols=\"0\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["b4-timepicker"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.colLabel || (depth0 != null ? depth0.colLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colLabel","hash":{},"data":data}) : helper)))
    + " control-label my-auto\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</label>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.colInput || (depth0 != null ? depth0.colInput : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"colInput","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return "col-sm-12";
},"7":function(container,depth0,helpers,partials,data) {
    return " form-control-required";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row form-group\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colInput : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"input-group date\">\r\n      <input type=\"text\" class=\"form-control b4-timepicker"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" readonly />\r\n      <span class=\"input-group-append my-auto\">\r\n        <span class=\"input-group-text\" style=\"height: 38px;\">\r\n          <i class=\"la la-clock-o\"></i>\r\n        </span>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});

this["RojobaCo"]["Templates"]["completedjobs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row header-buttons\">\r\n  <div class=\"col\">\r\n  </div>\r\n  <div class=\"col\">\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"completedjobsgrid"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"CompletedJobsPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["dispatch"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row header-buttons\">\r\n  <div class=\"col\">\r\n    <div class=\"row h-100 dispatch-schedule-heading\">\r\n      <div class=\"col\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"placeholder":"Dispatch Edit","items":(depth0 != null ? depth0.actions : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","name":"action"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"col\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"placeholder":"Filter By","items":(depth0 != null ? depth0.filterby : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","name":"filterby"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>  \r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"dispatchgrid"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n\r\n<div class=\"modal\" id=\"bc-post-responsemodal\" >\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Consumption Response</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\" id=\"bc-post-responsemodal-body\" style=\"overflow-y: scroll; max-height:400px\">\r\n        \r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"DispatchPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["form"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"PageForm"},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = "";

  stack1 = ((helper = (helper = helpers["b4-tabs"] || (depth0 != null ? depth0["b4-tabs"] : depth0)) != null ? helper : alias2),(options={"name":"b4-tabs","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers["b4-tabs"]) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers["b4-tabpanels"] || (depth0 != null ? depth0["b4-tabpanels"] : depth0)) != null ? helper : alias2),(options={"name":"b4-tabpanels","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers["b4-tabpanels"]) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n"
    + ((stack1 = container.invokePartial(partials["b4-formfooter"],depth0,{"name":"b4-formfooter","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-tab"],depth0,{"name":"b4-tab","hash":{"selected":true,"name":"generalTab","caption":"General"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-tab"],depth0,{"name":"b4-tab","hash":{"name":"budgetTab","caption":"Budget"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-tab"],depth0,{"name":"b4-tab","hash":{"name":"documentsTab","caption":"Supporting documents"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-tab"],depth0,{"name":"b4-tab","hash":{"name":"costTab","caption":"Project estimate"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-tab"],depth0,{"name":"b4-tab","hash":{"name":"cashflowTab","caption":"Cashout"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-tab"],depth0,{"name":"b4-tab","hash":{"name":"approversTab","caption":"Approvers"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = (helpers["b4-tabpanel"] || (depth0 && depth0["b4-tabpanel"]) || alias2).call(alias1,{"name":"b4-tabpanel","hash":{"selected":true,"name":"generalTab"},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-tabpanel"] || (depth0 && depth0["b4-tabpanel"]) || alias2).call(alias1,{"name":"b4-tabpanel","hash":{"name":"budgetTab"},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-tabpanel"] || (depth0 && depth0["b4-tabpanel"]) || alias2).call(alias1,{"name":"b4-tabpanel","hash":{"name":"documentsTab"},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-tabpanel"] || (depth0 && depth0["b4-tabpanel"]) || alias2).call(alias1,{"name":"b4-tabpanel","hash":{"name":"costTab"},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-tabpanel"] || (depth0 && depth0["b4-tabpanel"]) || alias2).call(alias1,{"name":"b4-tabpanel","hash":{"name":"cashflowTab"},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-tabpanel"] || (depth0 && depth0["b4-tabpanel"]) || alias2).call(alias1,{"name":"b4-tabpanel","hash":{"name":"approversTab"},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-hidden"],depth0,{"name":"b4-hidden","hash":{"value":(depth0 != null ? depth0.ID : depth0),"name":"CapexRequestId"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"required":true,"items":(depth0 != null ? depth0.CerTypes : depth0),"placeholder":"Select the type of CER","name":"CerType","caption":"Type of CER"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"required":true,"items":(depth0 != null ? depth0.RequestTypes : depth0),"placeholder":"Select the type of request","name":"RequestType","caption":"Request type"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"required":true,"items":(depth0 != null ? depth0.CostCentres : depth0),"placeholder":"Select the cost centre","name":"Cost_Centre","caption":"Cost centre"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"required":true,"placeholder":"Enter the name of the project","value":(depth0 != null ? depth0.ProjectName : depth0),"name":"ProjectName","caption":"Project name"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-datepicker"],depth0,{"name":"b4-datepicker","hash":{"required":true,"placeholder":"Select start date","value":(depth0 != null ? depth0.ProjectStartDate : depth0),"name":"ProjectStartDate","caption":"Start date"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-datepicker"],depth0,{"name":"b4-datepicker","hash":{"required":true,"placeholder":"Select completion date","value":(depth0 != null ? depth0.ProjectCompleteDate : depth0),"name":"ProjectCompleteDate","caption":"Estimated completion date"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-label"],depth0,{"name":"b4-label","hash":{"text":(depth0 != null ? depth0.DurationMonths : depth0),"value":(depth0 != null ? depth0.DurationMonths : depth0),"name":"DurationMonths","caption":"Duration in months"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"placeholder":"If not you, search and select the CER author","name":"CerAuthor","caption":"CER author"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"required":true,"placeholder":"Search and select the project manager","name":"ProjectManager","caption":"Project manager"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-textarea"],depth0,{"name":"b4-textarea","hash":{"required":true,"placeholder":"Enter an executive summary","value":(depth0 != null ? depth0.ExecutiveSummary : depth0),"name":"ExecutiveSummary","caption":"Executive summary"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"required":true,"items":(depth0 != null ? depth0.YesAndNo : depth0),"placeholder":"Select Yes or No","value":(depth0 != null ? depth0.BudgetForecast : depth0),"name":"BudgetForecast","caption":"Budget forecast"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"required":true,"items":(depth0 != null ? depth0.BudgetYears : depth0),"placeholder":"Select start year","value":(depth0 != null ? depth0.BudgetStartYear : depth0),"name":"BudgetStartYear","caption":"Budget start year"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"required":true,"items":(depth0 != null ? depth0.BudgetYears : depth0),"placeholder":"Select end year","value":(depth0 != null ? depth0.BudgetEndYear : depth0),"name":"BudgetEndYear","caption":"Budget end year"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "                <div class=\"row\">\r\n                    <div class=\"col-md-3\">&nbsp;</div>\r\n                    <div class=\"col-md-3\" style=\"text-align:center;\"><label class=\"control-label\">GBP</label></div>\r\n                    <div class=\"col-md-3\" style=\"text-align:center;\"><label class=\"control-label\">USD</label></div>\r\n                    <div class=\"col-md-3\" style=\"text-align:center;\"><label class=\"control-label\">EUR</label></div>\r\n                </div>\r\n\r\n                <div class=\"form-group has-feedback\">\r\n                    <div class=\"col-md-3\" style=\"text-align:right;\"><label class=\"control-label\">CER Value</label></div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"has-feedback\">\r\n                            <input type=\"text\" class=\"form-control b4-money\" id=\"CerGbp\" name=\"CerGbp\" value=\""
    + alias4(((helper = (helper = helpers.CerGbp || (depth0 != null ? depth0.CerGbp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CerGbp","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Enter GBP value\" />\r\n                            <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"has-feedback\">\r\n                            <input type=\"text\" class=\"form-control b4-money\" id=\"CerUsd\" name=\"CerUsd\" value=\""
    + alias4(((helper = (helper = helpers.CerUsd || (depth0 != null ? depth0.CerUsd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CerUsd","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Enter USD value\" />\r\n                            <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"has-feedback\">\r\n                            <input type=\"text\" class=\"form-control b4-money\" id=\"CerEur\" name=\"CerEur\" value=\""
    + alias4(((helper = (helper = helpers.CerEur || (depth0 != null ? depth0.CerEur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CerEur","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Enter EUR value\" />\r\n                            <i class=\"fa fa-asterisk form-control-feedback\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"form-group\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Documents : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\r\n"
    + ((stack1 = container.invokePartial(partials["b4-file"],depth0,{"name":"b4-file","hash":{"required":true,"name":"Document1","caption":"Document #1"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-file"],depth0,{"name":"b4-file","hash":{"name":"Document2","caption":"Document #2"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-file"],depth0,{"name":"b4-file","hash":{"name":"Document3","caption":"Document #3"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-file"],depth0,{"name":"b4-file","hash":{"name":"Document4","caption":"Document #4"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-file"],depth0,{"name":"b4-file","hash":{"name":"Document5","caption":"Document #5"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "                <div class=\"row\">\r\n                    <div class=\"col-sm-offset-3 col-sm-9\"><button type=\"button\" id=\"AddMoreFiles\" class=\"btn btn-default\">Add more files</button></div>\r\n                </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div class=\"row\" id=\"row-DocumentId-"
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "\">\r\n                        <div class=\"col-sm-offset-3 col-sm-9\">\r\n                            <a target=\"_blank\" id=\"DocumentId-"
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + alias4(((helper = (helper = helpers.LongDocumentUrl || (depth0 != null ? depth0.LongDocumentUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LongDocumentUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</a>\r\n                            <button type=\"button\" class=\"btn btn-default document-remove\"><i class=\"fa fa-remove\"></i></button>\r\n                        </div>\r\n                    </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"row\">\r\n                    <div class=\"col-md-4\">"
    + ((stack1 = container.invokePartial(partials["b4-label"],depth0,{"name":"b4-label","hash":{"name":"CerCostLabel","caption":"CER Value"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"ProjectCosts"},"data":data,"indent":"                        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"row\">\r\n                    <div class=\"col-md-4\">"
    + ((stack1 = container.invokePartial(partials["b4-label"],depth0,{"name":"b4-label","hash":{"name":"CerCashflowLabel","caption":"CER Value"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"CashflowEntries"},"data":data,"indent":"                        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div style=\"width:800px;height:500px\">\r\n                            <canvas id=\"CashflowChart\"></canvas>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"placeholder":"Search and select additional VPs","name":"OtherVps","caption":"Other VPs"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-label"],depth0,{"name":"b4-label","hash":{"text":((stack1 = (depth0 != null ? depth0.CFO : depth0)) != null ? stack1.displayName : stack1),"value":((stack1 = (depth0 != null ? depth0.CFO : depth0)) != null ? stack1.id : stack1),"name":"CFO","caption":"CFO"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-label"],depth0,{"name":"b4-label","hash":{"text":((stack1 = (depth0 != null ? depth0.CEO : depth0)) != null ? stack1.displayName : stack1),"value":((stack1 = (depth0 != null ? depth0.CEO : depth0)) != null ? stack1.id : stack1),"name":"CEO","caption":"CEO"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"FormPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["home"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"row header-buttons\">\r\n  <div class=\"col\">\r\n    <div class=\"row h-100 production-schedule-heading\">\r\n      <div class=\"col\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"placeholder":"Bulk Edit","items":(depth0 != null ? depth0.actions : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","name":"action"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"col\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"items":(depth0 != null ? depth0.filters : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","name":"filter","caption":"Filter by"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div> \r\n    </div>\r\n  </div>\r\n  <div class=\"col\" style=\"padding-right: 50px;\">\r\n      <button id=\"syncjobs\" type=\"button\" class=\"btn btn-default float-right\" style=\"color: black;\">Sync New BC Jobs</button>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"productiongrid"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","name":"ScheduleDayModal"},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","large":true,"name":"PhaseJobModal"},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"ScheduleDayForm"},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "    <h6>Please select the day you'd like to schedule the selected Jobs for:</h6>\r\n    <div class=\"input-group date\" style=\"padding-top:6px;\">\r\n        <input type=\"text\" style=\"border-radius:16px;\" class=\"form-control scheduledday-datepicker\" id=\"ScheduleDay\" name=\"ScheduleDay\"/>\r\n        <span style=\"position:absolute; right:8px;top:14px;font-size:23px;\" class=\"la la-calendar\"></span>\r\n    </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"PhaseJobForm"},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"phasegrid"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"HomePage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["inventorystatus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row header-buttons\">\r\n  <div class=\"col\">\r\n    <div class=\"row h-100 production-schedule-heading\">\r\n      <div class=\"col\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"placeholder":"Bulk Edit","items":(depth0 != null ? depth0.actions : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","name":"action"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"col\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"items":(depth0 != null ? depth0.filters : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","name":"filter","caption":"Filter by"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  <div class='col'>\r\n      <input style='float: right; margin-top: 5px;' placeholder=\"Search By ItemCode\" id=\"search-itemcode\">\r\n      <div class=\"input-group date\" style=\"float: right; max-width: 20%;\">\r\n          <input type=\"text\" style=\"border-radius:16px;\" class=\"form-control scheduledday-datepicker\" id=\"stock-datepicker\" name=\"stock-datepicker\" placeholder=\"\"/>\r\n          <span style=\"position:absolute; right:8px;top:14px;font-size:23px;\" class=\"la la-calendar\"></span>\r\n      </div>\r\n  </div> \r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"inventorystatusgrid"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"InventoryStatusPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["manualjobcard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"row header-buttons\">\r\n  <div class=\"col\">\r\n    <div class=\"row h-100 production-schedule-heading\">\r\n      <div class=\"col-sm-3\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"placeholder":"Select","items":(depth0 != null ? depth0.actions : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","name":"action"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"manualjobcardgrid"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","name":"ScheduleDayModal"},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Create","name":"CreateManualJobCardModal"},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Edit","name":"EditManualJobCardModal"},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"ScheduleDayForm"},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "    <h6>Please select the day you'd like to schedule the selected Jobs for:</h6>\r\n    <div class=\"input-group date\" style=\"padding-top:6px;\">\r\n        <input type=\"text\" style=\"border-radius:16px;\" class=\"form-control scheduledday-datepicker\" id=\"ScheduleDay\" name=\"ScheduleDay\"/>\r\n        <span style=\"position:absolute; right:8px;top:14px;font-size:23px;\" class=\"la la-calendar\"></span>\r\n    </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"CreateManualJobCardForm"},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"CustomerName","caption":"Customer Name"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"PurchaseOrder","caption":"Purchase Order"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      <div class=\"row form-group\">\r\n        <label for=\"colours-searchselect\" class=\"col-sm-3 control label my auto\">Order Colour</label>\r\n        <div class=\"col-sm-9\">\r\n          <input class=\"hidden\" id='colours-searchselect' name=\"colours-searchselect\"/>\r\n        </div>\r\n      </div>\r\n"
    + ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"OrderQuantity","caption":"Order Quantity"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"EditManualJobCardForm"},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"EditCustomerName","caption":"Customer Name"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"EditPurchaseOrder","caption":"Purchase Order"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      <div class=\"row form-group\">\r\n        <label for=\"colours-searchselect\" class=\"col-sm-3 control label my auto\">Order Colour</label>\r\n        <div class=\"col-sm-9\">\r\n          <input class=\"hidden\" id='editcolours-searchselect' name=\"editcolours-searchselect\"/>\r\n        </div>\r\n      </div>\r\n"
    + ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"EditOrderQuantity","caption":"Order Quantity"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"ManualJobCard"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["phase"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"phasegrid"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"form-group\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"form-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" onclick=\"window.history.go(-1); return false;\">Cancel</button>\r\n      <button type=\"button\" id=\"cmdPhase\" class=\"btn btn-primary\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"PhasePage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["phasejob"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n    <div class=\"col text-center\">\r\n        <div id=\"CurrentJobNumber\" class=\"phase-modal-jobnumber\"></div>\r\n    </div>\r\n    <div class=\"col text-center phase-modal-divider\">\r\n        <div id=\"NewJobNumber\" class=\"phase-modal-jobnumber\"></div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" style=\"height:50px;\">\r\n    <div class=\"col text-center\">\r\n        <div class=\"phase-modal-jobnumber\">Current Job#</div>\r\n    </div>\r\n    <div class=\"col text-center phase-modal-divider\">\r\n        <div class=\"phase-modal-jobnumber\">New Phased Job#</div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" style=\"height:65px\">\r\n    <div class=\"col text-center\">\r\n        <div class=\"phase-modal-exttobecoated phase-modal-exttobecoated-label\">Ext to be coated</div>\r\n        <div id=\"CurrentExtToBeCoated\" class=\"phase-modal-exttobecoated phase-modal-exttobecoated-value\"></div>\r\n    </div>\r\n    <div class=\"col text-center phase-modal-divider\">\r\n        <div class=\"phase-modal-exttobecoated phase-modal-exttobecoated-label\">Ext to be coated</div>\r\n        <div class=\"phase-modal-exttobecoated\"><input type=\"text\" id=\"NewExtToBeCoated\" name=\"NewExtToBeCoated\" class=\"phase-modal-exttobecoated-value b4-number w-100\" /></div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col text-center\">\r\n        <div id=\"CurrentTotalM2\" class=\"phase-modal-totalm2\"></div>\r\n    </div>\r\n    <div class=\"col text-center phase-modal-divider\">\r\n        <div id=\"NewTotalM2\" class=\"phase-modal-totalm2 phase-modal-totalm2-value\"></div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" style=\"height:55px;\">\r\n    <div class=\"col text-center\">\r\n        <div class=\"phase-modal-totalm2\">Total M2</div>\r\n    </div>\r\n    <div class=\"col text-center phase-modal-divider\">\r\n        <div class=\"phase-modal-totalm2\">Total M2</div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" style=\"height:75px;\">\r\n    <div class=\"col text-center\">\r\n        <div class=\"phase-modal-numberofflightbars phase-modal-numberofflightbars-label\"># of flight bars</div>\r\n        <div id=\"CurrentNumberOfFlightBars\" class=\"phase-modal-numberofflightbars phase-modal-numberofflightbars-value\"></div>\r\n    </div>\r\n    <div class=\"col text-center phase-modal-divider\">\r\n        <div class=\"phase-modal-numberofflightbars phase-modal-numberofflightbars-label\"># of flight bars</div>\r\n        <div class=\"phase-modal-numberofflightbars\"><input type=\"text\" id=\"NewNumberOfFlightBars\" name=\"NewNumberOfFlightBars\" class=\"phase-modal-numberofflightbars-value b4-number w-100\" /></div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" style=\"height:46px;\">\r\n    <div class=\"col text-center\">\r\n        <div>"
    + ((stack1 = container.invokePartial(partials["b4-label"],depth0,{"name":"b4-label","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","name":"CurrentManual","caption":"Route"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n    </div>\r\n    <div class=\"col text-center phase-modal-divider\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"items":(depth0 != null ? depth0.manual : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"NewManual","id":"NewManual","caption":"Manual"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["plonk"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <input class=\"hidden\" id=\"svgplonk\"/>\r\n  </div>\r\n</div>\r\n<br/>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"PlonkPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["RojobaCo"]["Templates"]["qc-reject-input"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"qc-reject-input\" class=\"row\">\r\n    <div class=\"col\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"items":(depth0 != null ? depth0.phasereasons : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"PhaseReason","id":"PhaseReason","caption":"Phase Reason"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"col text-center\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-checkbox"],depth0,{"name":"b4-checkbox","hash":{"checked":true,"text":"Manual JC","name":"IsManualJC"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"col\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","name":"PurchaseReference","caption":"PO#"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["reject"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"rejectgrid"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"form-group\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"form-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" onclick=\"window.history.go(-1); return false;\">Cancel</button>\r\n      <button type=\"button\" id=\"cmdReject\" class=\"btn btn-primary\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"RejectPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["reports"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <iframe width=\"1140\" height=\"541.25\" src=\"https://app.powerbi.com/reportEmbed?reportId=1151bec9-63ee-4d3c-866d-149033837df2&autoAuth=true&ctid=27eb6463-01c0-4d6a-a88c-83784018a5c2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWV1cm9wZS1ub3J0aC1iLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9\" frameborder=\"0\" allowFullScreen=\"true\"></iframe>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"ReportsPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["RojobaCo"]["Templates"]["reportvariables"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"reportvariablesgrid"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"ReportVariablesPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["sandbox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"col\" id=\"test\">\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"SandboxPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["RojobaCo"]["Templates"]["sandboxscraps"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["RojobaCo"]["Templates"]["schedule"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "  <div class=\"row daily-schedule-heading\">\r\n    <div class=\"col-sm-7\">\r\n      <div class=\"row h-100\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.scheduleDays : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n    <div class=\"col-sm-3 text-right my-auto\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-7\">\r\n          <div class=\"col-sm-9\">\r\n              <div class=\"input-group date\" style=\"padding-top:6px;\">\r\n                  <input type=\"text\" style=\"border-radius:16px;\" class=\"form-control scheduledday-datepicker\" id=\"ScheduledDay\" name=\"ScheduledDay\" placeholder=\"ScheduledDay\"/>\r\n                  <span style=\"position:absolute; right:8px;top:14px;font-size:23px;\" class=\"la la-calendar\"></span>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-5\" style=\"top: 5px;\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"placeholder":"Options","items":(depth0 != null ? depth0.actions : depth0),"name":"action"},"data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-2 text-right my-auto\">\r\n      <button id=\"AddBreakBtn\" class=\"btn btn-primary\">+ Add Break</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row daily-schedule-ending\">\r\n    <div class=\"col\">\r\n      <div class=\"row h-100\">\r\n        <div class=\"col-3 my-auto text-right\">\r\n          <span><b>Start Time</b></span>\r\n          <span><input type=\"text\" id=\"StartTime\" class=\"b4-timepicker text-center\" /></span>\r\n        </div>\r\n        <div class=\"col-3 my-auto text-center\">\r\n          <span><b>Last Flight Bar</b></span>\r\n          <span><label id=\"LastFlightBarTime\">18:00</label></span>\r\n        </div>\r\n        <div class=\"col-2 my-auto\">\r\n          <span><b>Last Wrapping</b></span>\r\n          <span><label id=\"LastWrappingTime\">18:30</label></span>\r\n        </div>\r\n        <div class=\"col-4 my-auto\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <span id=\"total-m2\"><b>Totalm2: </b></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"removeGutter":true,"name":"schedulegrid"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  \r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","large":true,"name":"PhaseJobModal"},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","large":true,"name":"QcRejectJobModal"},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","name":"AddBreakModal"},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","name":"AddColourChangeModal"},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","name":"ScheduleDayModal"},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","name":"CreateBatchModal"},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","name":"AllocateManualJobCardModal"},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers["b4-modal"] || (depth0 && depth0["b4-modal"]) || alias2).call(alias1,{"name":"b4-modal","hash":{"buttonCaption":"Add","name":"AdjustRouteModal"},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  <div class=\"modal\" id=\"bc-post-responsemodal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Consumption Response</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\" id=\"bc-post-responsemodal-body\" style=\"overflow-y: scroll; max-height:400px\">\r\n      </div>\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <div class=\"col text-center daily-schedule-day\">\r\n            <div class=\"row h-100\">\r\n              <div class=\"col-sm-12 my-auto\">\r\n                <a href=\"javascript:void(0);\" data-value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"PhaseJobForm"},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"phasegrid"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"QcRejectJobForm"},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"rejectgrid"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"AddBreakForm"},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-number"],depth0,{"name":"b4-number","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"DurationOfBreak","caption":"Duration of Break"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"AddColourChangeForm"},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-number"],depth0,{"name":"b4-number","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"DurationOfColourChange","caption":"Duration of ColourChange"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"ScheduleDayForm"},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "      <h6>Please select the day you'd like to schedule the selected Jobs for:</h6>\r\n      <div class=\"input-group date\" style=\"padding-top:6px;\">\r\n          <input type=\"text\" style=\"border-radius:16px;\" class=\"form-control scheduledday-datepicker\" id=\"ScheduleDay\" name=\"ScheduleDay\"/>\r\n          <span style=\"position:absolute; right:8px;top:14px;font-size:23px;\" class=\"la la-calendar\"></span>\r\n      </div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"CreateBatchForm"},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"QuantityBefore","caption":"Quantity Before"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-input"],depth0,{"name":"b4-input","hash":{"colInput":"col-sm-9","colLabel":"col-sm-3","required":true,"name":"QuantityAfter","caption":"Quantity After"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"AllocateManualJobCardForm"},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"row form-group\">\r\n        <label for=\"jobcards-searchselect\" class=\"col-sm-3 control label my auto\">Job Cards: </label>\r\n        <div class=\"col-sm-9\">\r\n          <input class=\"hidden\" id='jobcards-searchselect' name=\"jobcards-searchselect\"/>\r\n        </div>\r\n      </div>\r\n      <div class='hidden' id='manualjobcard-allocation'></div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"AdjustRouteForm"},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"row form-group\">\r\n        <label for=\"route-searchselect\" class=\"col-sm-3 control label my auto\">Route: </label>\r\n        <div class=\"col-sm-9\">\r\n          <input class=\"hidden\" id='route-searchselect' name=\"route-searchselect\"/>\r\n        </div>\r\n      </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"daily-schedule\">\r\n"
    + ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"SchedulePage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["stockposting"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row header-buttons\">\r\n  <div class=\"col\">\r\n    <div class=\"row h-100 production-schedule-heading\">\r\n      <div class=\"col\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"placeholder":"Bulk Edit","items":(depth0 != null ? depth0.actions : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","name":"action"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"col\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-select"],depth0,{"name":"b4-select","hash":{"items":(depth0 != null ? depth0.filters : depth0),"colInput":"col-sm-9","colLabel":"col-sm-3","name":"filter","caption":"Filter by"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div> \r\n    </div>\r\n  </div>\r\n  <div class=\"col\" style=\"padding-right: 50px;\">\r\n      <button id=\"syncjobs\" type=\"button\" class=\"btn btn-default float-right\" style=\"color: black;\">Sync Scales Stock</button>\r\n      <input style='float: right; margin-right: 20px; margin-top: 6px;' placeholder=\"Search By ItemCode\" id=\"search-itemcode\">\r\n  </div>\r\n</div>\r\n\r\n<nav>\r\n  <div class=\"row daily-schedule-heading\">\r\n    <div class=\"col-sm-7\">\r\n      <div class=\"row h-100\">\r\n          <div class=\"col text-center daily-schedule-day\">\r\n            <div class=\"row h-100\">\r\n              <div class=\"col-sm-12 my-auto\">\r\n                <a class=\"nav-item nav-link active\" id=\"nav-to-post-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\"><span id='to-post-text' class='tab-header-text underline'>To Post</span></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col text-center daily-schedule-day\">\r\n            <div class=\"row h-100\">\r\n              <div class=\"col-sm-12 my-auto\">\r\n                <a class=\"nav-item nav-link\" id=\"nav-completed-posting-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\"><span id='completed-posting-text' class='tab-header-text'>Completed Postings</span></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<br>\r\n<div class=\"tab-content\" id=\"nav-tabContent\">\r\n  <div class=\"tab-pane fade show active\" id=\"nav-to-post\" role=\"tabpanel\" aria-labelledby=\"nav-to-post-tab\">\r\n        <div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"stockpostinggrid"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"nav-completed-posting\" role=\"tabpanel\" aria-labelledby=\"nav-completed-posting-tab\">\r\n        <div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"completedpostinggrid"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\r\n  </div>\r\n</div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"StockPostingPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["table"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-form"] || (depth0 && depth0["b4-form"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-form","hash":{"name":"TableForm"},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"tablegrid"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["b4-formfooter"],depth0,{"name":"b4-formfooter","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"TablePage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RojobaCo"]["Templates"]["updatejob"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n"
    + ((stack1 = container.invokePartial(partials["b4-grid"],depth0,{"name":"b4-grid","hash":{"name":"updatejobgrid"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"form-group\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"form-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" onclick=\"window.history.go(-1); return false;\">Cancel</button>\r\n      <button type=\"button\" id=\"cmdPhase\" class=\"btn btn-primary\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers["b4-page"] || (depth0 && depth0["b4-page"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"b4-page","hash":{"name":"UpdateJobPage"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
Handlebars.registerPartial({
	'b4-addnew': RojobaCo.Templates["b4-addnew"],
	'b4-checkbox': RojobaCo.Templates["b4-checkbox"],
	'b4-currency': RojobaCo.Templates["b4-currency"],
	'b4-datepicker': RojobaCo.Templates["b4-datepicker"],
	'b4-datetimepicker': RojobaCo.Templates["b4-datetimepicker"],
	'b4-decimal': RojobaCo.Templates["b4-decimal"],
	'b4-editor': RojobaCo.Templates["b4-editor"],
	'b4-file': RojobaCo.Templates["b4-file"],
	'b4-formfooter': RojobaCo.Templates["b4-formfooter"],
	'b4-grid': RojobaCo.Templates["b4-grid"],
	'b4-hidden': RojobaCo.Templates["b4-hidden"],
	'b4-html': RojobaCo.Templates["b4-html"],
	'b4-input': RojobaCo.Templates["b4-input"],
	'b4-label': RojobaCo.Templates["b4-label"],
	'b4-link': RojobaCo.Templates["b4-link"],
	'b4-money': RojobaCo.Templates["b4-money"],
	'b4-multiselect': RojobaCo.Templates["b4-multiselect"],
	'b4-number': RojobaCo.Templates["b4-number"],
	'b4-percentage': RojobaCo.Templates["b4-percentage"],
	'b4-radio': RojobaCo.Templates["b4-radio"],
	'b4-richtext': RojobaCo.Templates["b4-richtext"],
	'b4-searchselect': RojobaCo.Templates["b4-searchselect"],
	'b4-select': RojobaCo.Templates["b4-select"],
	'b4-tab': RojobaCo.Templates["b4-tab"],
	'b4-textarea': RojobaCo.Templates["b4-textarea"],
	'b4-timepicker': RojobaCo.Templates["b4-timepicker"]
});

Handlebars.registerHelper('b4-form', function(options) {
    return new Handlebars.SafeString(
        '<form id="' + options.hash['name'] + '" class="form-horizontal clearfix" action="#">'
            + options.fn(this)
            + '</form>');
});

Handlebars.registerHelper('b4-modal', function(options) {
    var large = '';
    if (options.hash['large'] && options.hash['large'] === true)
	    large = ' modal-lg';

    var buttonCaption = 'Save changes';
    if (options.hash['buttonCaption'])
	    buttonCaption = options.hash['buttonCaption'];

    var saveButtonHtml = '<button type="submit" class="btn btn-primary">' + buttonCaption + '</button>';
    if (options.hash['readOnly'] && options.hash['readOnly'] === true)
	    saveButtonHtml = '';

    return new Handlebars.SafeString(
        '<div class="modal fade" id="' + options.hash['name'] + '" tabindex="-1" role="dialog" aria-labelledby="' + options.hash['name'] + 'Title">'
	        + '<div class="modal-dialog' + large + '" role="document">'
	        + '<div class="modal-content">'
	        + '<div class="modal-header">'
	        + '<h4 class="modal-title" id="' + options.hash['name'] + 'Title"></h4>'
	        + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
	        + '</div>'
	        + '<div class="modal-body">'
            + options.fn(this)
	        + '<div id="' + options.hash['name'] + 'Error" class="alert alert-danger" role="alert" style="display:none;">'
	        + '<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'
            + '<span class="sr-only">Error:</span>'
            + '<span class="message"></span></div>'
	        + '</div><div class="modal-footer">'
	        + saveButtonHtml
            + '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
	        + '</div></div></div></div>');
});

Handlebars.registerHelper('b4-page', function(options) {
    return new Handlebars.SafeString(
        '<div id="' + options.hash['name'] + '" class="b4-page">'
            + options.fn(this)
	        + '</div>');
});

Handlebars.registerHelper('b4-tabs', function(options) {
    return new Handlebars.SafeString(
        '<ul class="nav nav-tabs nav-stacked col-md-2" role="tablist">'
            + options.fn(this)
	        + '</ul>');
});

Handlebars.registerHelper('b4-tabpanels', function(options) {
    return new Handlebars.SafeString(
        '<div class="tab-content col-md-10">'
            + options.fn(this)
	        + '</div>');
});

Handlebars.registerHelper('b4-tabpanel', function(options) {
    var active = '';
    if (options.hash['selected'] && options.hash['selected'] === true)
	    active = ' active';
    return new Handlebars.SafeString(
        '<div role="tabpanel" class="tab-pane' + active + '" id="' + options.hash['name'] + '">'
            + options.fn(this)
	        + '</div>');
});

(function() {
  var bindViewDefaults, reposition, setDefaults,
    indexOf = [].indexOf,
    hasProp = {}.hasOwnProperty;

  RojobaCo.BasePlugin = class BasePlugin {
    constructor(Element) {
      this.Element = Element;
    }

  };

  RojobaCo.Grid = (function() {
    var KEY_CODES;

    class Grid {
      constructor(TableGrid) {
        var box, column, l, len, options, ref;
        this.TableGrid = TableGrid;
        options = this.TableGrid.Options;
        this.RemovedIds = [];
        this.ColumnHeader = new RojobaCo.GridColumnHeader(this.TableGrid);
        this.GridFooter = new RojobaCo.GridFooter(this.TableGrid);
        this.ColumnHeader.render(this.TableGrid.View);
        this.Detail = $('<div>').addClass('tablegrid-detail').scroll((e) => {
          var divSelect, el;
          if (this.CellSelected) {
            el = this.CellSelected.Element[0];
            divSelect = $('div.tablegrid-cell-select');
            if (divSelect.length > 0) {
              divSelect.css('left', el.offsetLeft);
            }
          }
          $('.tablegrid-header', this.TableGrid.View).scrollLeft($(e.target).scrollLeft());
        }).appendTo(this.TableGrid.View);
        box = $('<div>').addClass('tablegrid-detail-box').appendTo(this.Detail);
        this.MultiSelectColumn = null;
        if (options.multiselect) {
          this.MultiSelectColumn = new RojobaCo.GridMultiSelectColumn(this.TableGrid, this.Detail);
        }
        this.ActionColumn = null;
        if (options.rowActions.length > 0) {
          this.ActionColumn = new RojobaCo.GridActionColumn(this.TableGrid, this.Detail);
        }
        this.FrozenColumns = [];
        ref = this.ColumnHeader.GridColumns;
        for (l = 0, len = ref.length; l < len; l++) {
          column = ref[l];
          if (column.Freeze) {
            this.FrozenColumns.push(new RojobaCo.GridFrozenColumn(this.TableGrid, column));
          }
        }
        if (options.height) {
          this.Detail.css('height', options.height + 'px');
        }
        if (options.hide) {
          this.Detail.css('display', 'none');
        }
        this.TableElement = $('<table>').addClass('table table-hover').appendTo(box);
        this.TableElement.addClass(this.TableGrid.Element.attr('class'));
        this.GridFooter.render(this.TableGrid.Container);
        this.Rows = [];
        if (options.edit) {
          $(document).on('click', (e) => {
            if ($(e.target).is('a') && $(e.target).parents('ul.dropdown-menu').length > 0) {
              return;
            }
            if (this.TableGrid.Edited) {
              if (options.onEdit) {
                options.onEdit();
              }
              this.TableGrid.Edited = false;
            }
            this.clearEditing();
          }).on('keydown', (e) => {
            if (this.CellSelected) {
              if (e.shiftKey) {
                switch (e.keyCode) {
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  default:
                    return;
                }
              } else {
                switch (e.keyCode) {
                  case KEY_CODES.ARROW_LEFT:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  case KEY_CODES.ARROW_UP:
                    e.preventDefault();
                    this.moveUp();
                    break;
                  case KEY_CODES.ARROW_RIGHT:
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveRight();
                    break;
                  case KEY_CODES.ARROW_DOWN:
                    e.preventDefault();
                    this.moveDown();
                    break;
                  case KEY_CODES.F2:
                    e.preventDefault();
                    this.editCell(this.CellSelected);
                    break;
                  default:
                    return;
                }
              }
            } else if (this.CellEdited) {
              if (e.shiftKey) {
                switch (e.keyCode) {
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  default:
                    return;
                }
              } else {
                switch (e.keyCode) {
                  case KEY_CODES.ENTER:
                    e.preventDefault();
                    this.selectCell(this.CellEdited);
                    break;
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveRight();
                    break;
                  default:
                    return;
                }
              }
            }
          });
        }
        return;
      }

      destroy() {
        var column, l, len, ref;
        ref = this.ColumnHeader.GridColumns;
        for (l = 0, len = ref.length; l < len; l++) {
          column = ref[l];
          column.destroy();
        }
      }

      render(data) {
        var elTr, emptyRow, firstRow, frozenColumn, gridCell, groupValue, grouping, l, len, len1, len2, len3, len4, len5, len6, m, n, o, options, p, prev, q, r, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, row, s;
        options = this.TableGrid.Options;
        $('tr.tablegrid-row', this.TableElement).remove();
        $('tr.tablegrid-grouprow', this.TableElement).remove();
        $('tr.tablegrid-parentrow', this.TableElement).remove();
        $('tr.tablegrid-firstrow', this.TableElement).remove();
        $('tr.tablegrid-emptyrow', this.TableElement).remove();
        this.Rows = [];
        if (data.rows && data.rows.length > 0) {
          if (options.groupColumn) {
            grouping = {};
            ref = data.rows;
            for (l = 0, len = ref.length; l < len; l++) {
              row = ref[l];
              groupValue = row[options.groupColumn];
              if (!grouping[groupValue]) {
                grouping[groupValue] = [];
              }
              grouping[groupValue].push(row);
            }
            for (p in grouping) {
              this.Rows.push(new RojobaCo.GridGroupRow(this, p, options));
              ref1 = grouping[p];
              for (m = 0, len1 = ref1.length; m < len1; m++) {
                row = ref1[m];
                if (ref2 = row.id, indexOf.call(this.RemovedIds, ref2) < 0) {
                  this.Rows.push(new RojobaCo.GridRow(this, row, options));
                }
              }
            }
          } else if (options.parentColumn) {
            prev = '';
            ref3 = data.rows;
            for (n = 0, len2 = ref3.length; n < len2; n++) {
              row = ref3[n];
              if (ref4 = row.id, indexOf.call(this.RemovedIds, ref4) < 0) {
                if (row[options.parentColumn] && prev !== row[options.parentColumn]) {
                  this.Rows.push(new RojobaCo.GridParentRow(this, row, options));
                }
                this.Rows.push(new RojobaCo.GridRow(this, row, options));
                prev = row[options.parentColumn];
              }
            }
          } else {
            ref5 = data.rows;
            for (o = 0, len3 = ref5.length; o < len3; o++) {
              row = ref5[o];
              if (ref6 = row.id, indexOf.call(this.RemovedIds, ref6) < 0) {
                this.Rows.push(new RojobaCo.GridRow(this, row, options));
              }
            }
          }
        }
        if (this.MultiSelectColumn) {
          this.MultiSelectColumn.render(this.Rows);
        }
        if (this.ActionColumn) {
          this.ActionColumn.render(this.Rows);
        }
        ref7 = this.FrozenColumns;
        for (q = 0, len4 = ref7.length; q < len4; q++) {
          frozenColumn = ref7[q];
          frozenColumn.render(this.Rows);
        }
        if (this.Rows.length > 0) {
          firstRow = new RojobaCo.GridFirstRow(this, options);
          firstRow.render(this.TableElement);
        }
        if (!options.edit && this.Rows.length === 0) {
          emptyRow = new RojobaCo.GridEmptyRow(this, options);
          emptyRow.render(this.TableElement);
        }
        ref8 = this.Rows;
        for (r = 0, len5 = ref8.length; r < len5; r++) {
          row = ref8[r];
          elTr = row.render();
          this.TableElement.append(elTr);
          if (row.GridCells) {
            ref9 = row.GridCells;
            for (s = 0, len6 = ref9.length; s < len6; s++) {
              gridCell = ref9[s];
              gridCell.render(elTr);
            }
          }
          if (options.draggableRows && !(row instanceof RojobaCo.GridGroupRow || row instanceof RojobaCo.GridParentRow) && (!options.beforeRowDrag || (options.beforeRowDrag && options.beforeRowDrag(row.Data)))) {
            elTr.draggable({
              axis: 'y',
              containment: 'parent',
              helper: 'clone',
              start: (evt, ui) => {
                $(evt.target).addClass('dragged-handle');
              },
              stop: (evt, ui) => {
                $(evt.target).removeClass('dragged-handle');
              }
            });
            elTr.droppable({
              accept: '.tablegrid-row',
              //tolerance: 'touch'
              drop: (evt, ui) => {
                var draggedRowId, droppedRowId;
                $(evt.target).before(ui.draggable);
                this.adjustSize();
                if (options.afterRowDrop) {
                  droppedRowId = $(evt.target).attr('id');
                  draggedRowId = ui.draggable.attr('id');
                  options.afterRowDrop(draggedRowId, droppedRowId);
                }
              }
            });
          }
        }
        if (!options.edit && this.Rows.length > 0) {
          this.GridFooter.update();
        }
        this.adjustSize();
      }

      onCellSelect(cell) {
        this.selectCell(cell);
      }

      onCellEdit(cell) {
        this.editCell(cell);
      }

      clearEditing() {
        var options;
        options = this.TableGrid.Options;
        $('div.tablegrid-cell-select').remove();
        $('div.tablegrid-cell-edit').remove();
        if (this.CellEdited) {
          if (this.CellEdited.HasValueChanged) {
            if (options.afterCellEdit) {
              options.afterCellEdit(this.CellEdited.GridRow.Id, this.CellEdited.Element, this.CellEdited.GridColumn.Name, this.CellEdited.Value, this.CellEdited.RowIndex, this.CellEdited.ColumnIndex);
            }
          }
          this.CellEdited.HasValueChanged = false;
        }
        this.CellSelected = null;
        this.CellEdited = null;
      }

      selectCell(cell) {
        var actionsWidth, el, firstColumn, frozenColumn, l, lastColumn, len, multiselectWidth, options, ref, scrollValue, selectedFrozenColumn, self;
        self = this;
        options = this.TableGrid.Options;
        self.clearEditing();
        this.CellSelected = cell;
        if (cell.GridColumn.Freeze) {
          selectedFrozenColumn = null;
          ref = this.FrozenColumns;
          for (l = 0, len = ref.length; l < len; l++) {
            frozenColumn = ref[l];
            if (frozenColumn.Column.Name === cell.GridColumn.Name) {
              selectedFrozenColumn = frozenColumn;
              break;
            }
          }
          if (selectedFrozenColumn) {
            el = $('td', $('tr', selectedFrozenColumn.TableElement).eq(cell.Element.parent().index() - 1))[0];
            $('<div>').addClass('tablegrid-cell-select').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).on('click', function(e) {
              self.editCell(cell);
              e.stopPropagation();
            }).on('dblclick', function(e) {
              self.editCell(cell);
              e.stopPropagation();
            }).appendTo(selectedFrozenColumn.Detail);
          }
        } else {
          el = cell.Element[0];
          actionsWidth = 0;
          multiselectWidth = 0;
          if (options.rowActions.length > 0) {
            lastColumn = $('td', cell.Element.parent()).last();
            actionsWidth = lastColumn[0].offsetWidth;
          }
          if (options.multiselect) {
            firstColumn = $('td', cell.Element.parent()).first();
            multiselectWidth = firstColumn[0].offsetWidth;
          }
          scrollValue = (this.Detail[0].offsetWidth - actionsWidth) - (el.offsetLeft + el.offsetWidth);
          if (scrollValue < 0) {
            this.Detail[0].scrollLeft = Math.abs(scrollValue) + actionsWidth + this.Detail[0].scrollLeft;
          } else if (this.Detail[0].scrollLeft > 0) {
            this.Detail[0].scrollLeft = el.offsetLeft - multiselectWidth;
          }
          $('<div>').addClass('tablegrid-cell-select').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).on('click', function(e) {
            self.editCell(cell);
            e.stopPropagation();
          }).on('dblclick', function(e) {
            self.editCell(cell);
            e.stopPropagation();
          }).appendTo(this.Detail);
        }
        if (options.editOnSelect) {
          self.editCell(cell);
        }
      }

      editCell(cell) {
        var applyChange, el, frozenColumn, input, inputContainer, l, len, options, ref, selectedFrozenColumn;
        options = this.TableGrid.Options;
        if (!cell.GridColumn.Readonly && !(options.canEditRow && !options.canEditRow(cell.GridRow.Id))) {
          this.clearEditing();
          this.CellEdited = cell;
          applyChange = (value) => {
            var canEdit, cellValue, column, index, l, len, readOnlyCell, ref, renderedValue;
            canEdit = !options.beforeCellEdit;
            if (options.beforeCellEdit) {
              canEdit = options.beforeCellEdit(this.CellEdited.GridRow.Id, this.CellEdited.Element, this.CellEdited.GridColumn.Name, this.CellEdited.Value, value, this.CellEdited.RowIndex, this.CellEdited.ColumnIndex);
            }
            if (canEdit) {
              cell.Value = value;
              cell.HasValueChanged = true;
              if (cell.GridColumn.ValueChanged) {
                cell.GridColumn.ValueChanged(cell.GridRow.Data, value);
              } else {
                cell.GridRow.Data[cell.GridColumn.Name] = value;
              }
              ref = this.ColumnHeader.GridColumns;
              for (index = l = 0, len = ref.length; l < len; index = ++l) {
                column = ref[index];
                if (column.Readonly && column.GetValue) {
                  cellValue = column.GetValue(cell.GridRow.Data);
                  readOnlyCell = cell.GridRow.GridCells[index];
                  cell.GridRow.Data[column.Name] = cellValue;
                  readOnlyCell.Element.html(cellValue);
                }
              }
              el.innerText = value;
              cell.Element[0].innerText = value;
              if (options.renderCell) {
                renderedValue = options.renderCell(this.CellEdited.GridRow.Data, this.CellEdited.Element, this.CellEdited.GridColumn.Name, this.CellEdited.RowIndex, this.CellEdited.ColumnIndex);
                if (renderedValue) {
                  el.innerText = renderedValue;
                  cell.Element[0].innerText = renderedValue;
                }
              }
              if (this.CellEdited.GridColumn.Render) {
                renderedValue = this.CellEdited.GridColumn.Render(this.CellEdited.GridRow.Data);
                if (renderedValue) {
                  el.innerText = renderedValue;
                  cell.Element[0].innerText = renderedValue;
                }
              }
              $(el).attr('title', el.innerText);
              cell.Element.attr('title', el.innerText);
              this.TableGrid.Edited = true;
            }
          };
          if (cell.GridColumn.Freeze) {
            selectedFrozenColumn = null;
            ref = this.FrozenColumns;
            for (l = 0, len = ref.length; l < len; l++) {
              frozenColumn = ref[l];
              if (frozenColumn.Column.Name === cell.GridColumn.Name) {
                selectedFrozenColumn = frozenColumn;
                break;
              }
            }
            if (selectedFrozenColumn) {
              el = $('td', $('tr', selectedFrozenColumn.TableElement).eq(cell.Element.parent().index() - 1))[0];
              inputContainer = $('<div>').addClass('tablegrid-cell-edit').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).appendTo(selectedFrozenColumn.Detail);
              input = cell.GridColumn.getInput(cell.Value, (value) => {
                applyChange(value);
              });
              if (input) {
                input.css('height', el.offsetHeight).appendTo(inputContainer);
                $(':input', input).css('height', el.offsetHeight).focus();
              }
            }
          } else {
            el = cell.Element[0];
            inputContainer = $('<div>').addClass('tablegrid-cell-edit').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).appendTo(this.Detail);
            input = cell.GridColumn.getInput(cell.Value, (value) => {
              applyChange(value);
            });
            /*
            if e.shiftKey
                switch e.keyCode
                    when KEY_CODES.TAB
                        applyChange value                            
                        this.moveLeft()
                    else 
                        return
            else
                switch e.keyCode
                    when KEY_CODES.ENTER
                        applyChange value
                    when KEY_CODES.TAB
                        applyChange value                            
                        this.moveRight()
                    else 
                        return
            */
            if (input) {
              input.css('height', el.offsetHeight).appendTo(inputContainer);
              $(':input', input).css('height', el.offsetHeight).focus();
            }
          }
        }
      }

      updateCell(cell, value) {
        var el, options;
        options = this.TableGrid.Options;
        el = cell.Element[0];
        el.innerText = value;
        cell.Value = value;
        cell.HasValueChanged = true;
        cell.GridRow.Data[cell.GridColumn.Name] = value;
      }

      moveLeft() {
        var cell, row;
        if (this.CellEdited) {
          if (this.CellEdited.ColumnIndex === 1) {
            return;
          }
          row = this.Rows[this.CellEdited.RowIndex];
          cell = row.GridCells[this.CellEdited.ColumnIndex - 1];
          this.editCell(cell);
        } else if (this.CellSelected) {
          if (this.CellSelected.ColumnIndex === 1) {
            return;
          }
          row = this.Rows[this.CellSelected.RowIndex];
          cell = row.GridCells[this.CellSelected.ColumnIndex - 1];
          this.selectCell(cell);
        }
      }

      moveUp() {
        var cell, row;
        if (this.CellSelected.RowIndex === 0) {
          return;
        }
        row = this.Rows[this.CellSelected.RowIndex - 1];
        cell = row.GridCells[this.CellSelected.ColumnIndex];
        this.selectCell(cell);
      }

      moveRight() {
        var cell, options, row, skipColumns;
        options = this.TableGrid.Options;
        skipColumns = 1;
        if (options.rowActions.length > 0) {
          skipColumns = 2;
        }
        if (this.CellEdited) {
          if (this.CellEdited.ColumnIndex === this.ColumnHeader.GridColumns.length - skipColumns) {
            return;
          }
          row = this.Rows[this.CellEdited.RowIndex];
          cell = row.GridCells[this.CellEdited.ColumnIndex + 1];
          this.editCell(cell);
        } else if (this.CellSelected) {
          if (this.CellSelected.ColumnIndex === this.ColumnHeader.GridColumns.length - skipColumns) {
            return;
          }
          row = this.Rows[this.CellSelected.RowIndex];
          cell = row.GridCells[this.CellSelected.ColumnIndex + 1];
          this.selectCell(cell);
        }
      }

      moveDown(cell, view) {
        var row;
        if (this.CellSelected.RowIndex === this.Rows.length - 1) {
          return;
        }
        row = this.Rows[this.CellSelected.RowIndex + 1];
        cell = row.GridCells[this.CellSelected.ColumnIndex];
        this.selectCell(cell);
      }

      reset() {
        this.GridFooter.reset();
      }

      addRow(row) {
        var elTr, firstRow, gridCell, gridRow, l, len, options, ref;
        options = this.TableGrid.Options;
        $('.tablegrid-emptyrow', this.TableGrid.View).remove();
        if (this.Rows.length === 0) {
          firstRow = new RojobaCo.GridFirstRow(this, options);
          firstRow.render(this.TableElement);
        }
        gridRow = new RojobaCo.GridRow(this, row, options);
        elTr = gridRow.render();
        this.TableElement.append(elTr);
        ref = gridRow.GridCells;
        for (l = 0, len = ref.length; l < len; l++) {
          gridCell = ref[l];
          gridCell.render(elTr);
        }
        this.Rows.push(gridRow);
        this.TableGrid.Data.rows.push(row);
        this.TableGrid.Element.val(this.TableGrid.Data.rows.length);
        if (this.MultiSelectColumn) {
          this.MultiSelectColumn.addRow(gridRow);
        }
        if (this.ActionColumn) {
          this.ActionColumn.addRow(gridRow);
        }
        this.adjustSize();
      }

      updateRow(row) {
        var afterTr, column, elTr, gridCell, gridRow, i, j, key, l, len, len1, len2, m, n, options, ref, ref1, ref2, rowId, value;
        options = this.TableGrid.Options;
        rowId = row[options.idColumn].toString();
        ref = this.Rows;
        for (i = l = 0, len = ref.length; l < len; i = ++l) {
          gridRow = ref[i];
          if (!(gridRow instanceof RojobaCo.GridParentRow)) {
            if (gridRow.Id.toString() === rowId) {
              for (key in row) {
                value = row[key];
                ref1 = this.ColumnHeader.GridColumns;
                //@TableGrid.Data.rows[i][key] = value
                for (j = m = 0, len1 = ref1.length; m < len1; j = ++m) {
                  column = ref1[j];
                  if (column.Name === key) {
                    gridRow.Data[column.Name] = value;
                    gridRow.GridCells[j].Value = value;
                    break;
                  }
                }
              }
              elTr = gridRow.render();
              afterTr = $('tr#' + gridRow.Id, this.TableElement).prev();
              $('tr#' + gridRow.Id, this.TableElement).remove();
              //if afterTr.length is 0 or afterTr.hasClass('tablegrid-firstrow')
              //    elTr.prependTo $('tbody', @TableElement)
              //else
              elTr.insertAfter(afterTr);
              ref2 = gridRow.GridCells;
              for (n = 0, len2 = ref2.length; n < len2; n++) {
                gridCell = ref2[n];
                gridCell.render(elTr);
              }
              if (this.MultiSelectColumn) {
                this.MultiSelectColumn.updateRow(row);
              }
              if (this.ActionColumn) {
                this.ActionColumn.updateRow(row);
              }
              break;
            }
          }
        }
        this.adjustSize();
      }

      removeRow(id) {
        var frozenColumn, gridRow, i, l, len, len1, m, ref, ref1;
        ref = this.Rows;
        for (i = l = 0, len = ref.length; l < len; i = ++l) {
          gridRow = ref[i];
          if (gridRow.Id.toString() === id.toString()) {
            this.TableGrid.Data.rows.splice(i, 1);
            this.Rows.splice(i, 1);
            $('tr#' + gridRow.Id, this.TableGrid.View).remove();
            $('tr#C_' + gridRow.Id, this.TableGrid.View).remove();
            $('tr#R_' + gridRow.Id, this.TableGrid.View).remove();
            $('tr#A_' + gridRow.Id, this.TableGrid.View).remove();
            ref1 = this.FrozenColumns;
            for (m = 0, len1 = ref1.length; m < len1; m++) {
              frozenColumn = ref1[m];
              $('tr#F_' + frozenColumn.Column.Name + '_' + gridRow.Id, this.TableGrid.View).remove();
            }
            this.RemovedIds.push(id);
            break;
          }
        }
        if (this.TableGrid.Data.rows.length > 0) {
          this.TableGrid.Element.val(this.TableGrid.Data.rows.length);
        } else {
          this.TableGrid.Element.val('');
          this.render(this.TableGrid.Data);
        }
        this.adjustSize();
      }

      adjustSize() {
        var setHeaderHeight, setHeaderWidth, setRowHeight;
        $('tr.tablegrid-row, tr.tablegrid-grouprow, tr.tablegrid-parentrow, tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow, tr.tablegrid-multiselect-parentrow, tr.tablegrid-action-row, tr.tablegrid-action-grouprow, tr.tablegrid-action-parentrow', this.TableGrid.View).css('height', '');
        $('div.tablegrid-multiselect-header th, div.tablegrid-action-header th', this.TableGrid.View).css('height', '');
        setHeaderHeight = () => {
          var headerHeight;
          headerHeight = $('div.tablegrid-header', this.TableGrid.View).height() - 1;
          $('div.tablegrid-multiselect-header th, div.tablegrid-frozen-header th, div.tablegrid-action-header th', this.TableGrid.View).css('height', headerHeight + 'px');
        };
        setHeaderWidth = (indx, td) => {
          $('div.tablegrid-header th.tablegrid-column', this.TableGrid.View).eq(indx).css('width', $(td).outerWidth() + 'px');
        };
        setRowHeight = (indx, tr) => {
          var rowHeight, tempHeight;
          rowHeight = $(tr).height();
          if (this.MultiSelectColumn) {
            tempHeight = $('tr.tablegrid-multiselect-row', this.TableGrid.View).eq(indx).height();
            if (tempHeight > rowHeight) {
              rowHeight = tempHeight;
            }
          }
          if (this.ActionColumn) {
            tempHeight = $('tr.tablegrid-action-row', this.TableGrid.View).eq(indx).height();
            if (tempHeight > rowHeight) {
              rowHeight = tempHeight;
            }
          }
          if (this.MultiSelectColumn) {
            $('tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow, tr.tablegrid-multiselect-parentrow', this.TableGrid.View).eq(indx).css('height', rowHeight + 'px');
          }
          if (this.ActionColumn) {
            $('tr.tablegrid-action-row, tr.tablegrid-action-grouprow, tr.tablegrid-action-parentrow', this.TableGrid.View).eq(indx).css('height', rowHeight + 'px');
          }
          if (this.FrozenColumns.length > 0) {
            $('tr.tablegrid-frozen-row, tr.tablegrid-frozen-grouprow, tr.tablegrid-parentrow', this.TableGrid.View).eq(indx).css('height', rowHeight + 'px');
          }
          $(tr).css('height', rowHeight + 'px');
        };
        setTimeout(() => {
          var availableWidth, column, frozenColumn, index, l, len, len1, len2, len3, len4, m, n, o, q, ref, ref1, ref2, ref3, ref4, td, totalWidth;
          $('tr.tablegrid-row, tr.tablegrid-grouprow', this.TableGrid.View).each(function(indx, tr) {
            setRowHeight(indx, tr);
          });
          totalWidth = 0;
          ref = this.ColumnHeader.GridColumns;
          for (l = 0, len = ref.length; l < len; l++) {
            column = ref[l];
            if (column.Name !== 'multiselect' && column.Name !== 'action') {
              column.NewWidth = 0;
              totalWidth += parseInt(column.Width);
            }
          }
          //what about options.width?
          if (totalWidth > 0 && totalWidth < this.TableElement.parent().outerWidth()) {
            availableWidth = this.TableElement.parent().outerWidth();
            if (this.MultiSelectColumn) {
              availableWidth -= this.MultiSelectColumn.Container.outerWidth();
            }
            if (this.ActionColumn) {
              availableWidth -= this.ActionColumn.Container.outerWidth();
            }
            ref1 = this.ColumnHeader.GridColumns;
            for (m = 0, len1 = ref1.length; m < len1; m++) {
              column = ref1[m];
              if (column.Name !== 'multiselect' && column.Name !== 'action') {
                column.NewWidth = parseInt((column.Width / totalWidth) * availableWidth);
              }
            }
            totalWidth = this.TableElement.parent().outerWidth();
          }
          ref2 = this.ColumnHeader.GridColumns;
          for (index = n = 0, len2 = ref2.length; n < len2; index = ++n) {
            column = ref2[index];
            td = $('td', $('tr.tablegrid-firstrow', this.TableGrid.View)).eq(index);
            if (column.Name === 'multiselect') {
              td.css('width', this.MultiSelectColumn.Container.outerWidth() + 'px');
            } else if (column.Name === 'action') {
              td.css('width', this.ActionColumn.Container.outerWidth() + 'px');
            } else if (column.NewWidth && column.NewWidth > 0) {
              td.css('width', column.NewWidth + 'px');
            } else {
              td.css('width', column.Width + 'px');
            }
          }
          if (totalWidth > 0) {
            this.TableElement.css('width', totalWidth + 'px');
          }
          ref3 = this.FrozenColumns;
          for (o = 0, len3 = ref3.length; o < len3; o++) {
            frozenColumn = ref3[o];
            ref4 = this.ColumnHeader.GridColumns;
            for (q = 0, len4 = ref4.length; q < len4; q++) {
              column = ref4[q];
              if (frozenColumn.Column.Name === column.Name) {
                frozenColumn.Container.css('width', column.Width + 'px');
                frozenColumn.Container.css('right', this.ActionColumn.Container.outerWidth() + 'px');
                break;
              }
            }
          }
          $('tr.tablegrid-firstrow td', this.TableGrid.View).each(function(indx, td) {
            setHeaderWidth(indx, td);
          });
          this.ColumnHeader.TableElement.css('width', this.TableElement.outerWidth() + 'px');
          setHeaderHeight();
        }, 1);
      }

    };

    Grid.TableElement = null;

    Grid.CellSelected = null;

    Grid.CellEdited = null;

    Grid.Detail = null;

    KEY_CODES = {
      TAB: 9,
      ENTER: 13,
      ESCAPE: 27,
      ARROW_LEFT: 37,
      ARROW_UP: 38,
      ARROW_RIGHT: 39,
      ARROW_DOWN: 40,
      F2: 113
    };

    return Grid;

  }).call(this);

  RojobaCo.GridActionColumn = (function() {
    class GridActionColumn {
      constructor(TableGrid) {
        var detail, detailbox, header, headerbox, headertable, options, thead, trow;
        this.TableGrid = TableGrid;
        options = this.TableGrid.Options;
        this.Container = $('<div>').addClass('tablegrid-action').appendTo(this.TableGrid.View);
        if (options.hide) {
          this.Container.css('display', 'none');
        }
        header = $('<div>').addClass('tablegrid-action-header').appendTo(this.Container);
        headerbox = $('<div>').addClass('tablegrid-action-header-box').appendTo(header);
        headertable = $('<table>').addClass('table').appendTo(headerbox);
        thead = $('<thead>').appendTo(headertable);
        trow = $('<tr>').appendTo(thead);
        $('<th>').addClass('tablegrid-column action-header').css('w class="nav-item"idth', '1px').html('<span>Actions</span>').appendTo(trow);
        detail = $('<div>').addClass('tablegrid-action-detail').appendTo(this.Container);
        detailbox = $('<div>').addClass('tablegrid-action-detail-box').appendTo(detail);
        this.TableElement = $('<table>').addClass('table').appendTo(detailbox);
        return;
      }

      render(rows) {
        var l, len, row;
        $('tr.tablegrid-action-row', this.TableElement).remove();
        $('tr.tablegrid-action-grouprow', this.TableElement).remove();
        $('tr.tablegrid-action-parentrow', this.TableElement).remove();
        for (l = 0, len = rows.length; l < len; l++) {
          row = rows[l];
          this.addRow(row);
        }
      }

      addRow(row) {
        var action, actionClick, button, buttons, disabled, hidden, l, len, options, parentClass, ref, td, tr;
        options = this.TableGrid.Options;
        tr = $('<tr>').attr('id', 'A_' + row.Id).appendTo(this.TableElement);
        td = $('<td>').appendTo(tr);
        hidden = false;
        if (options.rowDisabled && options.rowDisabled(row.Data)) {
          hidden = true;
        }
        if (row instanceof RojobaCo.GridGroupRow) {
          hidden = true;
          tr.addClass('tablegrid-action-grouprow');
        } else if (row instanceof RojobaCo.GridParentRow) {
          if (options.hideParent) {
            tr.addClass('tablegrid-action-parentrow hidden');
          } else {
            tr.addClass('tablegrid-action-parentrow');
          }
          tr.attr('id', 'A_' + row.Data[options.parentColumn]);
        } else {
          parentClass = '';
          if (options.parentColumn) {
            parentClass = ' ' + row.Data[options.parentColumn];
          }
          tr.addClass('tablegrid-action-row' + parentClass);
          if (options.parentColumn && !options.expandParentColumns) {
            tr.hide();
          }
        }
        actionClick = (e) => {
          var action, iconClass, id, l, len, ref, rowId;
          id = $(e.target).closest('tr').attr('id');
          options = this.TableGrid.Options;
          iconClass = '';
          if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            iconClass = $('i', $(e.target)).attr('class');
          } else {
            iconClass = $(e.target).attr('class');
          }
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            if (iconClass.indexOf(action.icon) !== -1) {
              rowId = id.substring(2, id.length);
              action.onClick(rowId);
              if (options.afterRowAction) {
                options.afterRowAction(rowId, action.name);
              }
              break;
            }
          }
          e.stopPropagation();
        };
        if (options.rowActions.length > 0 && hidden !== true) {
          buttons = $('<div>').addClass('tablegrid-action-buttons btn-group').attr('role', 'group').appendTo(td);
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            hidden = false;
            if (action.hidden) {
              hidden = action.hidden(row.Data);
            }
            disabled = false;
            if (action.disabled) {
              disabled = action.disabled(row.Data);
            }
            if (hidden !== true) {
              button = $('<a>').attr('href', 'javascript:void(0);').attr('title', action.title).appendTo(buttons);
              if (action.caption && action.caption.length > 0) {
                button.html('<i class="fa fa-' + action.icon + '"></i>&nbsp;' + action.caption);
              } else {
                button.addClass('btn btn-default btn-secondary').html('<i class="fa fa-' + action.icon + '"></i>');
              }
              if (action.cssClass && action.cssClass.length > 0) {
                button.addClass(action.cssClass);
              }
              if (disabled === true) {
                button.addClass('disabled');
              } else {
                button.on('click', actionClick);
              }
            }
          }
        } else {
          td.html('&nbsp;');
        }
      }

      updateRow(row) {
        var action, actionClick, afterTr, button, buttons, disabled, hidden, l, len, options, ref, rowId, td, tr;
        options = this.TableGrid.Options;
        rowId = row[options.idColumn];
        afterTr = $('tr#A_' + rowId, this.TableElement).prev();
        $('tr#A_' + rowId, this.TableElement).remove();
        tr = $('<tr>').attr('id', 'A_' + rowId).addClass('tablegrid-action-row');
        if (afterTr.length === 0) {
          tr.prependTo(this.TableElement);
        } else {
          tr.insertAfter(afterTr);
        }
        td = $('<td>').appendTo(tr);
        hidden = false;
        if (options.rowDisabled && options.rowDisabled(row)) {
          hidden = true;
        }
        actionClick = (e) => {
          var action, iconClass, id, l, len, ref;
          id = $(e.target).closest('tr').attr('id');
          options = this.TableGrid.Options;
          iconClass = '';
          if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            iconClass = $('i', $(e.target)).attr('class');
          } else {
            iconClass = $(e.target).attr('class');
          }
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            if (iconClass.indexOf(action.icon) !== -1) {
              rowId = id.substring(2, id.length);
              action.onClick(rowId);
              if (options.afterRowAction) {
                options.afterRowAction(rowId, action.name);
              }
              break;
            }
          }
          e.stopPropagation();
        };
        if (options.rowActions.length > 0 && hidden !== true) {
          buttons = $('<div>').addClass('tablegrid-action-buttons btn-group').attr('role', 'group').css('float', 'left').appendTo(td);
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            hidden = false;
            if (action.hidden) {
              hidden = action.hidden(row);
            }
            disabled = false;
            if (action.disabled) {
              disabled = action.disabled(row);
            }
            if (hidden !== true) {
              button = $('<a>').attr('href', 'javascript:void(0);').attr('title', action.title).appendTo(buttons);
              if (action.caption && action.caption.length > 0) {
                button.html('<i class="fa fa-' + action.icon + '"></i>&nbsp;' + action.caption);
              } else {
                button.addClass('btn btn-default btn-secondary').html('<i class="fa fa-' + action.icon + '"></i>');
              }
              if (action.cssClass && action.cssClass.length > 0) {
                button.addClass(action.cssClass);
              }
              if (disabled === true) {
                button.addClass('disabled');
              } else {
                button.on('click', actionClick);
              }
            }
          }
        } else {
          td.html('&nbsp;');
        }
      }

    };

    GridActionColumn.TableElement = null;

    GridActionColumn.Container = null;

    return GridActionColumn;

  }).call(this);

  RojobaCo.GridCell = (function() {
    class GridCell {
      constructor(GridColumn, GridRow) {
        this.GridColumn = GridColumn;
        this.GridRow = GridRow;
        this.Value = this.GridRow.Data[this.GridColumn.Name];
        this.HasValueChanged = false;
      }

      render(element) {
        var options, renderedValue, value;
        options = this.GridColumn.TableGrid.Options;
        value = this.GridRow.Data[this.GridColumn.Name];
        if (this.GridColumn.Render) {
          value = this.GridColumn.Render(this.GridRow.Data);
        }
        if (this.GridColumn.Name === 'multiselect' || this.GridColumn.Name === 'review' || this.GridColumn.Name === 'action') {
          $('<td>').appendTo(element);
        } else {
          this.Element = $('<td>').appendTo(element);
          this.RowIndex = element.index() - 1; // -1 to exclude FirstRow
          this.ColumnIndex = this.Element.index();
          if (options.renderCell) {
            renderedValue = options.renderCell(this.GridRow.Data, this.Element, this.GridColumn.Name, this.RowIndex, this.ColumnIndex);
            if (renderedValue) {
              value = renderedValue;
            }
          }
          if (options.edit) {
            this.Element.on('click', (e) => {
              this.GridColumn.TableGrid.Grid.onCellSelect(this);
              e.stopPropagation();
            });
          }
          if (this.GridColumn.DataType === 'image') {
            if (this.GridRow.Data[this.GridColumn.Name]) {
              value = '<img src="' + value + '" alt="' + this.GridColumn.Name + ' image" />';
            }
          } else if (!this.GridColumn.Render) {
            this.Element.attr('title', value);
          }
          if (this.GridColumn.DataType === 'link') {
            $('<a>').attr('href', 'javascript:void(0);').html(value).on('click', (e) => {
              if (options.onLink) {
                options.onLink(this.GridRow.Id, this.Element, this.GridColumn.Name, this.Value, this.RowIndex, this.ColumnIndex);
              }
            }).appendTo(this.Element);
          } else {
            if (value) {
              this.Element.html(value);
            } else {
              this.Element.html('&nbsp;');
            }
          }
          if (options.afterCellCreate) {
            options.afterCellCreate(this.GridRow.Id, this.Element, this.GridColumn.Name, this.Value, this.RowIndex, this.ColumnIndex);
          }
        }
      }

    };

    GridCell.RowIndex = -1;

    GridCell.ColumnIndex = -1;

    GridCell.Element = null;

    return GridCell;

  }).call(this);

  RojobaCo.GridColumn = (function() {
    var addCheckbox, addDivider, bindBoolFilter, bindColumnFilter, bindDateFilter, bindNumberFilter, bindSetFilter, bindTextFilter, buildBoolFilter, buildBooleanInput, buildColumnFilter, buildCurrencyInput, buildDateFilter, buildDateInput, buildFilter, buildFloatInput, buildIntegerInput, buildNumberFilter, buildSelectInput, buildSetFilter, buildStringInput, buildTextFilter, buildTimeInput;

    class GridColumn {
      constructor(TableGrid, column) {
        this.TableGrid = TableGrid;
        this.Name = column.name;
        this.Caption = column.caption;
        this.Align = column.align;
        this.DataType = column.dataType;
        this.Readonly = column.readonly;
        if (column.inputType) {
          this.InputType = column.inputType;
        } else {
          this.InputType = column.dataType;
        }
        this.Width = column.width;
        this.Height = column.height;
        this.Render = column.render;
        this.GetValue = column.getValue;
        this.DataKey = column.dataKey;
        this.Freeze = column.freeze;
        return;
      }

      destroy() {
        if (this.Element.is('[data-original-title]')) {
          this.Element.popover('destroy');
        }
      }

      getInput(value, callback) {
        switch (this.InputType) {
          case 'select':
            return buildSelectInput(value, callback, this);
          default:
            switch (this.DataType) {
              case 'int':
                return buildIntegerInput(value, callback);
              case 'float':
                return buildFloatInput(value, callback);
              case 'date':
                return buildDateInput(value, callback);
              case 'time':
                return buildTimeInput(value, callback);
              case 'currency':
                return buildCurrencyInput(value, callback, this);
              case 'image':
                return null;
              case 'bool':
                return buildBooleanInput(value, callback);
              default:
                return buildStringInput(value, callback);
            }
        }
      }

      render(element) {
        var filterDiv, filterId, filterValueId, options;
        options = this.TableGrid.Options;
        if (this.Name === 'multiselect') {
          this.Element = $('<th>').addClass('tablegrid-column').css('width', '1px').appendTo(element);
          return;
        }
        if (this.Name === 'action') {
          this.Element = $('<th>').addClass('tablegrid-column').css('width', '1px').appendTo(element);
          return;
        }
        this.Element = $('<th>').addClass('tablegrid-column column-header-' + this.Caption.replace(' ', '').toLowerCase()).html('<span>' + this.Caption + '</span><i class="sort-icon hidden"></i><i class="filter-icon hidden"></i>').appendTo(element);
        if (this.Width) {
          this.Element.css('width', this.Width + 'px');
        }
        if (!options.filter || this.DataType === 'int' || this.DataType === 'float' || this.DataType === 'date' || this.DataType === 'currency' || this.Name === 'multiselect' || this.Name === 'action') {
          return;
        }
        filterId = this.TableGrid.Element.attr('id') + '-filter-' + this.Name;
        filterValueId = this.TableGrid.Element.attr('id') + '-filtervalue-' + this.Name;
        filterDiv = $('<i>').attr('id', filterId).addClass('fa fa-caret-down').appendTo(this.Element);
        this.Element.on('click', (e) => {
          $('div.tablegrid-columnfilter').each(function(index) {
            var popover;
            if ($(this).attr('id') !== $(e.target).parents('div.tablegrid-columnfilter').attr('id')) {
              popover = $('button', $(this)).data('bs.popover');
              if (popover && popover.tip) {
                $('button', $(this)).popover('hide');
              }
            }
          });
          if (!this.Element.is('[data-original-title]')) {
            this.Element.popover({
              container: 'body',
              title: this.Caption + ' setting',
              html: true,
              placement: 'bottom',
              content: () => {
                return buildFilter(this.TableGrid, this.Element, this.Name, this.Caption);
              }
            });
            this.Element.on('shown.bs.popover', (e) => {
              //popover = $(e.target).data('bs.popover').$tip
              $('#' + filterId + '-asc').off('click').on('click', (e) => {
                $('i.sort-icon', this.Element).removeClass('fa-sort-alpha-up').addClass('fa-sort-alpha-down');
                this.TableGrid.Sort[this.Name] = 'ASC';
                this.TableGrid.refresh();
              });
              $('#' + filterId + '-desc').off('click').on('click', (e) => {
                $('i.sort-icon', this.Element).removeClass('fa-sort-alpha-down').addClass('fa-sort-alpha-up');
                this.TableGrid.Sort[this.Name] = 'DESC';
                this.TableGrid.refresh();
              });
              $('#' + filterValueId).off('keydown').on('keydown', (e) => {
                clearTimeout(this.TableGrid.searching);
                this.TableGrid.searching = setTimeout((() => {
                  var value;
                  value = $(e.target).val();
                  $('i.filter-icon', this.Element).removeClass('fa-filter');
                  delete this.TableGrid.Filter[this.Name];
                  if (value && value.length > 0) {
                    $('i.filter-icon', this.Element).addClass('fa-filter');
                    if (this.TableGrid.Filter[this.Name] !== value) {
                      this.TableGrid.Filter[this.Name] = value;
                    }
                  }
                  this.TableGrid.refresh();
                }), 300);
              });
            });
            this.Element.popover('show');
          }
          e.stopPropagation();
        });
        $(document).on('click', (e) => {
          var targetDropdown;
          targetDropdown = $(e.target).parents('div.tablegrid-columnfilter');
          if (!($(e.target).is(':input') && this.Element.is('[aria-describedby]'))) {
            this.Element.popover('hide');
          }
        });
      }

    };

    GridColumn.Element = null;

    buildFilter = function(tableGrid, element, name, caption) {
      var container, custom, filterId, filterValueId, input, menu, parent;
      filterId = tableGrid.Element.attr('id') + '-filter-' + name;
      filterValueId = tableGrid.Element.attr('id') + '-filtervalue-' + name;
      parent = $('<div>');
      menu = $('<div>').appendTo(parent);
      $('<a>').attr('id', filterId + '-asc').attr('href', 'javascript:void(0);').addClass('dropdown-item').html('<i class="fa fa-sort-alpha-down" style="margin-right: 5px;"></i>Sort ascending').appendTo(menu);
      $('<a>').attr('id', filterId + '-desc').attr('href', 'javascript:void(0);').addClass('dropdown-item').html('<i class="fa fa-sort-alpha-up" style="margin-right: 5px;"></i>Sort descending').appendTo(menu);
      $('<div>').addClass('dropdown-divider').appendTo(menu);
      custom = $('<div>').appendTo(menu);
      container = $('<div>').addClass('tablegrid-columnfilter-container').appendTo(custom);
      $('<span>').text('Filter: ').appendTo(container);
      input = $('<input>').attr('type', 'text').attr('id', filterValueId).attr('placeholder', 'Search ' + caption).appendTo(container);
      return parent.html();
    };

    buildIntegerInput = function(value, callback) {
      var group, input;
      group = $('<div>');
      input = $('<input>').attr('type', 'text').attr('value', value).on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback(input.autoNumeric('get'));
      }).on('keydown', function(e) {
        callback(input.autoNumeric('get'));
      }).appendTo(group);
      input.autoNumeric('init', {
        aSep: '',
        mDec: 0
      });
      return group;
    };

    buildFloatInput = function(value, callback) {
      var group, input;
      group = $('<div>');
      input = $('<input>').attr('type', 'text').attr('value', value).on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback(input.autoNumeric('get'));
      }).on('keydown', function(e) {
        callback(input.autoNumeric('get'));
      }).appendTo(group);
      input.autoNumeric('init', {
        aSep: ''
      });
      return group;
    };

    buildBooleanInput = function(value, callback) {
      var boolValue, group, input;
      group = $('<div>');
      boolValue = false;
      if ($.isNumeric(value)) {
        boolValue = value === 1;
      } else {
        boolValue = value === 'true' || value === true;
      }
      input = $('<input>').attr('type', 'checkbox').prop('checked', boolValue).on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback(input.is(':checked'));
      }).on('keydown', function(e) {
        callback(input.is(':checked'));
      }).appendTo(group);
      return group;
    };

    buildStringInput = function(value, callback) {
      var group;
      group = $('<div>');
      $('<input>').attr('type', 'text').attr('value', value).on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback($(e.target).val());
      }).on('keydown', function(e) {
        callback($(e.target).val());
      }).appendTo(group);
      return group;
    };

    buildSelectInput = function(value, callback, self) {
      var group, input, item, l, len, ref;
      group = $('<div>');
      input = $('<select>').on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback($(e.target).val());
      }).on('keydown', function(e) {
        callback($(e.target).val());
      }).appendTo(group);
      input.append('<option value="" disabled selected hidden>Please select option</option>');
      if (self.TableGrid.Options.selectData) {
        ref = self.TableGrid.Options.selectData[self.DataKey];
        for (l = 0, len = ref.length; l < len; l++) {
          item = ref[l];
          input.append('<option value="' + item.value + '">' + item.label + '</option>');
        }
      }
      input.val(value);
      return group;
    };

    buildDateInput = function(value, callback) {
      var group, input;
      group = $('<div>').addClass('input-group');
      input = $('<input>').attr('type', 'text').attr('value', value).on('click', function(e) {
        e.stopPropagation();
      }).appendTo(group);
      $('<span>').addClass('input-group-addon').html('<span class="glyphicon glyphicon-calendar"></span>').appendTo(group);
      input.datetimepicker({
        format: 'YYYY-MM-DD',
        ignoreReadonly: true,
        allowInputToggle: true
      });
      input.on('dp.change', function(e) {
        callback($(e.target).val());
      });
      return group;
    };

    buildTimeInput = function(value, callback) {
      var group, input;
      group = $('<div>').addClass('input-group');
      input = $('<input>').attr('type', 'text').attr('value', value).on('click', function(e) {
        e.stopPropagation();
      }).appendTo(group);
      $('<span>').addClass('input-group-addon').html('<span class="glyphicon glyphicon-calendar"></span>').appendTo(group);
      input.datetimepicker({
        format: 'HH:mm',
        ignoreReadonly: true,
        allowInputToggle: true
      });
      input.on('dp.change', function(e) {
        callback($(e.target).val());
      });
      return group;
    };

    buildCurrencyInput = function(value, callback, items) {
      var amount, btnGroup, currency, group, input, item, l, len, parts, ul;
      amount = 0;
      currency = '';
      if (items.length > 0) {
        currency = items[0].value;
      }
      parts = value.split(' ');
      if (parts.length > 1) {
        amount = parseFloat(parts[0]);
        currency = parts[1];
      }
      group = $('<div>').addClass('input-group');
      btnGroup = $('<div>').addClass('input-group-btn').appendTo(group);
      $('<button>').attr('type', 'button').attr('data-toggle', 'dropdown').attr('aria-haspopup', 'true').attr('aria-expanded', 'false').addClass('btn btn-default dropdown-toggle').html('<span>GBP</span>&nbsp;<span class="caret"></span>').appendTo(btnGroup);
      ul = $('<ul>').addClass('dropdown-menu').appendTo(btnGroup);
      for (l = 0, len = items.length; l < len; l++) {
        item = items[l];
        $('<li>').html('<a href="javascript:void(0);">' + item.value + '</a>').appendTo(ul);
      }
      input = $('<input>').attr('type', 'text').attr('value', amount).on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback(input.autoNumeric('get') + ' ' + $('span', $('button', group)).first().text());
      }).on('keydown', function(e) {
        callback(input.autoNumeric('get') + ' ' + $('span', $('button', group)).first().text());
      }).appendTo(group);
      $('span', $('button', group)).first().text(currency);
      $('<span>').addClass('input-group-addon').text('.00').appendTo(group);
      input.autoNumeric('init', {
        aSep: ','
      });
      $('a', ul).on('click', function(e) {
        $('span', $('button', group)).first().text($(e.target).text());
        callback(input.autoNumeric('get') + ' ' + $(e.target).text());
      });
      return group;
    };

    buildColumnFilter = function(tableGrid, caption, name, dataType) {
      if (dataType === 'number') {
        return buildNumberFilter(tableGrid.Options, caption, name);
      } else if (dataType === 'date') {
        return buildDateFilter(tableGrid.Options, caption, name);
      } else if (dataType === 'bool') {
        return buildBoolFilter(tableGrid.Options, caption, name);
      } else if (dataType === 'set') {
        return buildSetFilter(tableGrid.Options, caption, name);
      } else {
        return buildTextFilter(tableGrid.Options, caption, name);
      }
    };

    bindColumnFilter = function(popover, tableGrid, name, dataType) {
      if (dataType === 'number') {
        bindNumberFilter(tableGrid, name);
      } else if (dataType === 'date') {
        bindDateFilter(tableGrid, name);
      } else if (dataType === 'bool') {
        bindBoolFilter(tableGrid, name);
      } else if (dataType === 'set') {
        bindSetFilter(popover, tableGrid, name);
      } else {
        bindTextFilter(tableGrid, name);
      }
    };

    buildTextFilter = function(options, caption, name) {
      var container, input;
      container = $('<div>');
      $('<span>').text('Filter: ').appendTo(container);
      input = $('<input>').attr('type', 'text').attr('id', name + 'Filter').attr('placeholder', 'Search ' + caption).appendTo(container);
      if (options.postData.Filter.hasOwnProperty(name)) {
        input.attr('value', options.postData.Filter[name]);
      }
      return container[0].outerHTML;
    };

    buildNumberFilter = function(options, caption, name) {
      var container;
      container = $('<div>');
      $('<span>').text('number filter not available').appendTo(container);
      return container[0].outerHTML;
    };

    buildDateFilter = function(options, caption, name) {
      var container;
      container = $('<div>');
      $('<span>').text('date filter not available').appendTo(container);
      return container[0].outerHTML;
    };

    buildBoolFilter = function(options, caption, name) {
      var container;
      container = $('<div>');
      if (options.postData.Filter.hasOwnProperty(name)) {
        if (options.postData.Filter[name] === true) {
          addCheckbox(container, 'Yes', 'SelectYes_' + name, true);
          addCheckbox(container, 'No', 'SelectNo_' + name, false);
        } else if (options.postData.Filter[name] === false) {
          addCheckbox(container, 'Yes', 'SelectYes_' + name, false);
          addCheckbox(container, 'No', 'SelectNo_' + name, true);
        } else {
          addCheckbox(container, 'Yes', 'SelectYes_' + name, true);
          addCheckbox(container, 'No', 'SelectNo_' + name, true);
        }
      } else {
        addCheckbox(container, 'Yes', 'SelectYes_' + name, true);
        addCheckbox(container, 'No', 'SelectNo_' + name, true);
      }
      return container[0].outerHTML;
    };

    buildSetFilter = function(options, caption, name) {
      var container, foundSet, item, itemContainer, l, len, len1, m, ref, ref1, set;
      container = $('<div>');
      addCheckbox(container, 'Select All', 'SelectAll_' + name, '', true);
      addDivider(container);
      ref = options.Sets;
      for (l = 0, len = ref.length; l < len; l++) {
        set = ref[l];
        if (set.Name === name) {
          foundSet = set;
          break;
        }
      }
      if (foundSet) {
        itemContainer = $('<div>').css('height', '200px').css('overflow-x', 'auto').appendTo(container);
        ref1 = foundSet.Items;
        for (m = 0, len1 = ref1.length; m < len1; m++) {
          item = ref1[m];
          addCheckbox(itemContainer, item.Text, name + '_' + item.Value, 'tablegrid-filter-checkbox', item.Selected);
        }
      }
      return container[0].outerHTML;
    };

    bindTextFilter = function(tableGrid, name) {
      $('#' + name + 'Filter').focus().on('keydown', function(e) {
        clearTimeout(tableGrid.searching);
        tableGrid.searching = setTimeout((function() {
          var value;
          value = $(e.target).val();
          if (tableGrid.Options.postData.Filter[name] !== value) {
            tableGrid.Options.postData.Filter[name] = value;
            tableGrid.update();
          }
        }), 300);
      });
    };

    bindNumberFilter = function(tableGrid, name) {};

    bindDateFilter = function(tableGrid, name) {};

    bindBoolFilter = function(tableGrid, name) {
      var triggerFilter;
      triggerFilter = function(tableGrid, name) {
        var selectNo, selectYes;
        selectYes = $('#SelectYes_' + name).is(':checked');
        selectNo = $('#SelectNo_' + name).is(':checked');
        if (selectYes && !selectNo) {
          tableGrid.Options.postData.Filter[name] = true;
        } else if (selectNo && !selectYes) {
          tableGrid.Options.postData.Filter[name] = false;
        } else {
          tableGrid.Options.postData.Filter[name] = null;
        }
        return tableGrid.update();
      };
      $('#SelectYes_' + name).on('change', function() {
        return triggerFilter(tableGrid, name);
      });
      $('#SelectNo_' + name).on('change', () => {
        return triggerFilter(tableGrid, name);
      });
    };

    bindSetFilter = function(popover, tableGrid, name) {
      var foundSet, l, len, ref, set;
      ref = tableGrid.Options.Sets;
      for (l = 0, len = ref.length; l < len; l++) {
        set = ref[l];
        if (set.Name === name) {
          foundSet = set;
          break;
        }
      }
      if (foundSet) {
        $('.tablegrid-filter-checkbox', popover).on('change', function(e) {
          var item, len1, m, ref1;
          ref1 = foundSet.Items;
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            item = ref1[m];
            if (name + '_' + item.Value === $(e.target).attr('id')) {
              item.Selected = $(e.target).is(':checked');
              break;
            }
          }
          clearTimeout(tableGrid.searching);
          tableGrid.searching = setTimeout((function() {
            var len2, n, ref2, value;
            value = '';
            ref2 = foundSet.Items;
            for (n = 0, len2 = ref2.length; n < len2; n++) {
              item = ref2[n];
              if (item.Selected) {
                if (value.length > 0) {
                  value += ',';
                }
                value += item.Value;
              }
            }
            tableGrid.Options.postData.Filter[name] = value;
            return tableGrid.update();
          }), 300);
        });
      }
    };

    addCheckbox = function(container, caption, name, cssClass, checked) {
      var box, item;
      item = $('<div>').css('margin-right', '10px').css('white-space', 'nowrap').appendTo(container);
      box = $('<input>').attr('type', 'checkbox').attr('id', name).attr('name', name).attr('class', cssClass).appendTo(item);
      if (checked) {
        box.attr('checked', 'true');
      }
      $('<label>').attr('for', name).css('cursor', 'pointer').text(caption).appendTo(item);
    };

    addDivider = function(container) {
      var item;
      item = $('<div>').css('margin-bottom', '5px').css('border-bottom', '1px solid #ddd').appendTo(container);
    };

    return GridColumn;

  }).call(this);

  RojobaCo.GridColumnHeader = (function() {
    var add;

    class GridColumnHeader {
      constructor(TableGrid) {
        var column, l, len, options, ref;
        this.TableGrid = TableGrid;
        this.GridColumns = [];
        options = this.TableGrid.Options;
        //multiselect column
        if (options.multiselect) {
          this.GridColumns.push(new RojobaCo.GridColumn(this.TableGrid, {
            name: 'multiselect',
            caption: ''
          }));
        }
        if (options.columnModel && options.columnModel.length > 0) {
          ref = options.columnModel;
          for (l = 0, len = ref.length; l < len; l++) {
            column = ref[l];
            this.GridColumns.push(new RojobaCo.GridColumn(this.TableGrid, column));
          }
        }
        //action column
        if (options.rowActions.length > 0) {
          this.GridColumns.push(new RojobaCo.GridColumn(this.TableGrid, {
            name: 'action',
            caption: 'Actions'
          }));
        }
      }

      render(element) {
        var box, column, l, len, options, ref, thead, trow;
        options = this.TableGrid.Options;
        this.Element = $('<div>').addClass('tablegrid-header').appendTo(element);
        box = $('<div>').addClass('tablegrid-header-box').appendTo(this.Element);
        this.TableElement = $('<table>').addClass('table').appendTo(box);
        thead = $('<thead>').appendTo(this.TableElement);
        trow = $('<tr>').appendTo(thead);
        ref = this.GridColumns;
        for (l = 0, len = ref.length; l < len; l++) {
          column = ref[l];
          column.render(trow);
        }
      }

    };

    GridColumnHeader.Element = null;

    GridColumnHeader.TableElement = null;

    add = function(gridColumns, tableGrid, column) {
      var existingColumn, gridColumn, l, len;
      existingColumn = null;
      for (l = 0, len = gridColumns.length; l < len; l++) {
        gridColumn = gridColumns[l];
        if (gridColumn.Name === column.Name) {
          existingColumn = gridColumn;
          break;
        }
      }
      if (existingColumn) {
        existingColumn.Caption = column.Caption;
        existingColumn.Align = column.Align;
        existingColumn.DataType = column.DataType;
      } else {
        gridColumns.push(new RojobaCo.GridColumn(tableGrid, column));
      }
    };

    return GridColumnHeader;

  }).call(this);

  RojobaCo.GridEmptyRow = class GridEmptyRow {
    constructor(Grid, Options) {
      this.Grid = Grid;
      this.Options = Options;
      this.Id = 'tmp-id-' + $.now();
    }

    render(element) {
      var tr;
      tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-emptyrow').appendTo(element);
      $('<td>').attr('colspan', this.Grid.ColumnHeader.GridColumns.length).text('There are no records to display').appendTo(tr);
    }

  };

  RojobaCo.GridFirstRow = class GridFirstRow {
    constructor(Grid, Options) {
      this.Grid = Grid;
      this.Options = Options;
      this.Id = 'tmp-id-' + $.now();
    }

    render(element) {
      var column, l, len, ref, td, tr;
      tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-firstrow').css('height', 'auto').appendTo(element);
      ref = this.Grid.ColumnHeader.GridColumns;
      for (l = 0, len = ref.length; l < len; l++) {
        column = ref[l];
        td = $('<td>').css('height', '0px').css('padding', '0px').css('margin', '0px').appendTo(tr);
      }
    }

  };

  RojobaCo.GridFooter = class GridFooter {
    constructor(TableGrid) {
      this.TableGrid = TableGrid;
      this.Pager = null;
      this.LastPage = 1;
    }

    reset() {
      $('.tablegrid-footer-page', this.TableGrid.View).remove();
      this.LastPage = 1;
    }

    render(element) {
      var action, buttons, footer, l, len, more, moreMenuId, options, pageSize, pagerNav, ref, ul;
      options = this.TableGrid.Options;
      if (!options.footer) {
        return;
      }
      footer = $('<div>').addClass('tablegrid-footer clearfix').appendTo(element);
      if (options.hide) {
        footer.css('display', 'none');
      }
      buttons = $('<div>').addClass('tablegrid-footer-buttons float-left btn-group').attr('role', 'group').appendTo(footer);
      $('<a>').attr('href', 'javascript:void(0);').attr('title', 'Refresh all records').addClass('btn btn-default btn-secondary').html('<i class="fa fa-sync"></i>').on('click', (e) => {
        this.TableGrid.refresh();
        e.stopPropagation();
      }).appendTo(buttons);
      $('<a>').attr('href', 'javascript:void(0);').attr('title', 'Clear all filters').addClass('btn btn-default btn-secondary').html('<i class="fa fa-filter"></i>').on('click', (e) => {
        this.TableGrid.clearFilter();
        e.stopPropagation();
      }).appendTo(buttons);
      if (options.footerActions.length > 0) {
        moreMenuId = 'moreMenuLink_' + this.TableGrid.Element.attr('id');
        more = $('<a>').attr('id', moreMenuId).attr('href', 'javascript:void(0)').attr('data-toggle', 'dropdown').addClass('btn btn-secondary dropdown-toggle').text('More actions').appendTo(buttons);
        ul = $('<div>').addClass('dropdown-menu').attr('aria-labelledby', moreMenuId).appendTo(more);
        ref = options.footerActions;
        for (l = 0, len = ref.length; l < len; l++) {
          action = ref[l];
          $('<a>').attr('href', 'javascript:void(0)').attr('title', action.title).addClass('dropdown-item').html('<i class="fa fa-' + action.icon + '" style="margin-right: 5px;"></i>' + action.caption).on('click', action.onClick).appendTo(ul);
        }
      }
      pagerNav = $('<nav>').addClass('tablegrid-footer-pager float-right').appendTo(footer);
      pageSize = $('<div>').addClass('tablegrid-footer-pagesize float-left').appendTo(pagerNav);
      $('<select>').addClass('form-control').html('<option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option>').on('change', (e) => {
        this.TableGrid.reset();
        this.TableGrid.PageSize = parseInt($(e.currentTarget).val());
        this.TableGrid.refresh();
      }).appendTo(pageSize);
      this.Pager = $('<ul>').addClass('pagination').appendTo(pagerNav);
      $('<li>').addClass('page-item disabled tablegrid-footer-previous').html('<a class="page-link" href="javascript:void(0);">Previous</a>').on('click', (e) => {
        var prevPage;
        if (!$(e.currentTarget).hasClass('disabled')) {
          prevPage = $('li[data-page="' + (this.TableGrid.PageNo - 1) + '"]');
          prevPage.trigger('click');
        }
      }).appendTo(this.Pager);
      $('<li>').addClass('page-item tablegrid-footer-next').html('<a class="page-link" href="javascript:void(0);">Next</a>').on('click', (e) => {
        var nextPage;
        if (!$(e.currentTarget).hasClass('disabled')) {
          nextPage = $('li[data-page="' + (this.TableGrid.PageNo + 1) + '"]');
          nextPage.trigger('click');
        }
      }).appendTo(this.Pager);
      $('select', pageSize).val(options.initialPageSize);
    }

    update() {
      if (!this.TableGrid.Options.footer) {
        return;
      }
      if (this.LastPage === 1) {
        $('li.tablegrid-footer-page', this.Pager).remove();
        $('<li>').addClass('page-item active tablegrid-footer-page').attr('data-prevId', this.TableGrid.PrevId).attr('data-page', 1).attr('data-nextId', this.TableGrid.NextId).html('<a class="page-link" href="javascript:void(0);">1</a>').on('click', (e) => {
          $('li.tablegrid-footer-page', this.Pager).removeClass('active');
          $(e.currentTarget).addClass('active');
          this.TableGrid.PrevId = null;
          this.TableGrid.PageNo = parseInt($(e.currentTarget).attr('data-page'));
          this.TableGrid.NextId = null;
          this.TableGrid.refresh();
        }).insertBefore($('li.tablegrid-footer-next', this.Pager));
      }
      if (this.TableGrid.NextId && this.LastPage === this.TableGrid.PageNo) {
        this.LastPage = this.TableGrid.PageNo + 1;
        $('<li>').addClass('page-item tablegrid-footer-page').attr('data-prevId', this.TableGrid.PrevId).attr('data-page', this.LastPage).attr('data-nextId', this.TableGrid.NextId).html('<a class="page-link" href="javascript:void(0);">' + this.LastPage + '</a>').on('click', (e) => {
          $('li.tablegrid-footer-page', this.Pager).removeClass('active');
          $(e.currentTarget).addClass('active');
          this.TableGrid.PrevId = $(e.currentTarget).attr('data-prevId');
          this.TableGrid.PageNo = parseInt($(e.currentTarget).attr('data-page'));
          this.TableGrid.NextId = $(e.currentTarget).attr('data-nextId');
          this.TableGrid.refresh();
        }).insertBefore($('li.tablegrid-footer-next', this.Pager));
      }
      if (this.TableGrid.PageNo === 1) {
        $('li.tablegrid-footer-previous', this.Pager).addClass('disabled');
      } else {
        $('li.tablegrid-footer-previous', this.Pager).removeClass('disabled');
      }
      if (this.TableGrid.NextId) {
        $('li.tablegrid-footer-next', this.Pager).removeClass('disabled');
      } else {
        $('li.tablegrid-footer-next', this.Pager).addClass('disabled');
      }
    }

  };

  RojobaCo.GridFrozenColumn = (function() {
    class GridFrozenColumn {
      constructor(TableGrid, Column) {
        var detailbox, header, headerbox, headertable, options, thead, trow;
        this.TableGrid = TableGrid;
        this.Column = Column;
        options = this.TableGrid.Options;
        this.Container = $('<div>').addClass('tablegrid-frozen').appendTo(this.TableGrid.View);
        if (options.hide) {
          this.Container.css('display', 'none');
        }
        header = $('<div>').addClass('tablegrid-frozen-header').appendTo(this.Container);
        headerbox = $('<div>').addClass('tablegrid-frozen-header-box').appendTo(header);
        headertable = $('<table>').addClass('table').appendTo(headerbox);
        thead = $('<thead>').appendTo(headertable);
        trow = $('<tr>').appendTo(thead);
        this.Column.render(trow);
        this.Detail = $('<div>').addClass('tablegrid-frozen-detail').appendTo(this.Container);
        detailbox = $('<div>').addClass('tablegrid-frozen-detail-box').appendTo(this.Detail);
        this.TableElement = $('<table>').addClass('table').appendTo(detailbox);
        return;
      }

      render(rows) {
        var l, len, row;
        $('tr.tablegrid-frozen-row', this.TableElement).remove();
        $('tr.tablegrid-frozen-grouprow', this.TableElement).remove();
        $('tr.tablegrid-frozen-parentrow', this.TableElement).remove();
        for (l = 0, len = rows.length; l < len; l++) {
          row = rows[l];
          this.addRow(row);
        }
      }

      addRow(row) {
        var cell, elTr, hidden, l, len, options, ref;
        options = this.TableGrid.Options;
        elTr = row.render();
        this.TableElement.append(elTr);
        elTr.attr('id', 'F_' + this.Column.Name + '_' + row.Id);
        hidden = false;
        if (options.rowDisabled && options.rowDisabled(row.Data)) {
          hidden = true;
        }
        if (row instanceof RojobaCo.GridGroupRow) {
          hidden = true;
          elTr.addClass('tablegrid-frozen-grouprow');
        } else if (row instanceof RojobaCo.GridParentRow) {
          hidden = true;
          elTr.empty();
          // .html '&nbsp;'
          $('<td>').html(row.Data.Status).appendTo(elTr);
          elTr.addClass('tablegrid-frozen-parentrow');
        } else {
          ref = row.GridCells;
          for (l = 0, len = ref.length; l < len; l++) {
            cell = ref[l];
            if (cell.GridColumn.Name === this.Column.Name) {
              cell.render(elTr);
            }
          }
          elTr.removeClass('tablegrid-row');
          elTr.addClass('tablegrid-frozen-row');
        }
      }

      updateRow(row) {
        var action, actionClick, afterTr, button, buttons, disabled, hidden, l, len, options, ref, rowId, td, tr;
        options = this.TableGrid.Options;
        rowId = row[options.idColumn];
        afterTr = $('tr#A_' + rowId, this.TableElement).prev();
        $('tr#A_' + rowId, this.TableElement).remove();
        tr = $('<tr>').attr('id', 'A_' + rowId).addClass('tablegrid-action-row');
        if (afterTr.length === 0) {
          tr.prependTo(this.TableElement);
        } else {
          tr.insertAfter(afterTr);
        }
        td = $('<td>').appendTo(tr);
        hidden = false;
        if (options.rowDisabled && options.rowDisabled(row)) {
          hidden = true;
        }
        actionClick = (e) => {
          var action, iconClass, id, l, len, ref;
          id = $(e.target).closest('tr').attr('id');
          options = this.TableGrid.Options;
          iconClass = '';
          if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            iconClass = $('i', $(e.target)).attr('class');
          } else {
            iconClass = $(e.target).attr('class');
          }
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            if (iconClass.indexOf(action.icon) !== -1) {
              rowId = id.substring(2, id.length);
              action.onClick(rowId);
              if (options.afterRowAction) {
                options.afterRowAction(rowId, action.name);
              }
              break;
            }
          }
          e.stopPropagation();
        };
        if (options.rowActions.length > 0 && hidden !== true) {
          buttons = $('<div>').addClass('tablegrid-action-buttons btn-group').attr('role', 'group').css('float', 'left').appendTo(td);
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            hidden = false;
            if (action.hidden) {
              hidden = action.hidden(row);
            }
            disabled = false;
            if (action.disabled) {
              disabled = action.disabled(row);
            }
            if (hidden !== true) {
              button = $('<a>').attr('href', 'javascript:void(0);').attr('title', action.title).appendTo(buttons);
              if (action.caption && action.caption.length > 0) {
                button.html('<i class="fa fa-' + action.icon + '"></i>&nbsp;' + action.caption);
              } else {
                button.addClass('btn btn-default btn-secondary').html('<i class="fa fa-' + action.icon + '"></i>');
              }
              if (action.cssClass && action.cssClass.length > 0) {
                button.addClass(action.cssClass);
              }
              if (disabled === true) {
                button.addClass('disabled');
              } else {
                button.on('click', actionClick);
              }
            }
          }
        } else {
          td.html('&nbsp;');
        }
      }

    };

    GridFrozenColumn.TableElement = null;

    GridFrozenColumn.Container = null;

    return GridFrozenColumn;

  }).call(this);

  RojobaCo.GridGroupRow = class GridGroupRow {
    constructor(Grid, Data, Options) {
      this.Grid = Grid;
      this.Data = Data;
      this.Options = Options;
      this.Id = 'tmp-id-' + $.now();
    }

    render() {
      var tr;
      tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-grouprow');
      $('<td>').attr('colspan', this.Grid.ColumnHeader.GridColumns.length).text(this.Data).appendTo(tr);
      return tr;
    }

  };

  RojobaCo.GridHeader = class GridHeader {
    constructor(TableGrid) {
      this.TableGrid = TableGrid;
      return;
    }

  };

  RojobaCo.GridMultiSelectColumn = (function() {
    class GridMultiSelectColumn {
      constructor(TableGrid) {
        var detail, detailbox, header, headerbox, headertable, options, th, thead, trow;
        this.select = this.select.bind(this);
        this.TableGrid = TableGrid;
        options = this.TableGrid.Options;
        this.Container = $('<div>').addClass('tablegrid-multiselect').appendTo(this.TableGrid.View);
        if (options.hide) {
          this.Container.css('display', 'none');
        }
        header = $('<div>').addClass('tablegrid-multiselect-header').appendTo(this.Container);
        headerbox = $('<div>').addClass('tablegrid-multiselect-header-box').appendTo(header);
        headertable = $('<table>').addClass('table').appendTo(headerbox);
        thead = $('<thead>').appendTo(headertable);
        trow = $('<tr>').appendTo(thead);
        th = $('<th>').addClass('tablegrid-column').css('width', '1px').appendTo(trow);
        $('<input>').attr('type', 'checkbox').addClass('tablegrid-checkbox_all').css('margin', '0').on('change', (e) => {
          var i, isChecked, l, len, ref, row;
          ref = this.TableGrid.Grid.Rows;
          for (i = l = 0, len = ref.length; l < len; i = ++l) {
            row = ref[i];
            isChecked = $(e.currentTarget).is(':checked');
            if ($('#tablegrid-checkbox_' + row.Id).length > 0) {
              row.Selected = isChecked;
              $('#tablegrid-checkbox_' + row.Id).prop('checked', isChecked);
            }
          }
        }).appendTo(th);
        detail = $('<div>').addClass('tablegrid-multiselect-detail').appendTo(this.Container);
        detailbox = $('<div>').addClass('tablegrid-multiselect-detail-box').appendTo(detail);
        this.TableElement = $('<table>').addClass('table').appendTo(detailbox);
        return;
      }

      render(rows) {
        var hidden, l, len, options, parentClass, row, td, tr;
        $('tr.tablegrid-multiselect-row', this.TableElement).remove();
        $('tr.tablegrid-multiselect-grouprow', this.TableElement).remove();
        $('tr.tablegrid-multiselect-parentrow', this.TableElement).remove();
        options = this.TableGrid.Options;
        for (l = 0, len = rows.length; l < len; l++) {
          row = rows[l];
          tr = $('<tr>').attr('id', 'C_' + row.Id).appendTo(this.TableElement);
          td = $('<td>').appendTo(tr);
          hidden = false;
          if (row instanceof RojobaCo.GridRow) {
            if (options.multiselect.hidden && options.multiselect.hidden(row.Data)) {
              hidden = true;
            }
          }
          if (options.rowDisabled && options.rowDisabled(row.Data)) {
            hidden = true;
          }
          if (row instanceof RojobaCo.GridGroupRow) {
            hidden = true;
            tr.addClass('tablegrid-multiselect-grouprow');
          } else if (row instanceof RojobaCo.GridParentRow) {
            if (options.showChildrenMultiSelect) {
              tr.addClass('tablegrid-multiselect-parentrow hidden');
            } else {
              tr.addClass('tablegrid-multiselect-parentrow');
            }
          } else {
            parentClass = '';
            if (options.parentColumn) {
              parentClass = ' ' + row.Data[options.parentColumn];
            }
            tr.addClass('tablegrid-multiselect-row' + parentClass);
            if (options.parentColumn && !options.showChildrenMultiSelect) {
              tr.hide();
            }
          }
          if (hidden) {
            td.html('&nbsp;');
          } else {
            $('<input>').attr('type', 'checkbox').attr('id', 'tablegrid-checkbox_' + row.Id).attr('value', row.Id).css('margin', '0').on('change', this.select).appendTo(td);
          }
        }
      }

      addRow(row) {
        var hidden, options, rowId, td, tr;
        options = this.TableGrid.Options;
        rowId = row[options.idColumn];
        tr = $('<tr>').attr('id', 'C_' + rowId).addClass('tablegrid-multiselect-row').appendTo(this.TableElement);
        td = $('<td>').appendTo(tr);
        hidden = false;
        if (options.multiselect.hidden) {
          hidden = options.multiselect.hidden(row);
        }
        if (options.rowDisabled && options.rowDisabled(row)) {
          hidden = true;
        }
        if (hidden) {
          td.html('&nbsp;');
        } else {
          $('<input>').attr('type', 'checkbox').attr('id', 'tablegrid-checkbox_' + rowId).attr('value', rowId).css('margin', '0').on('change', this.select).appendTo(td);
        }
      }

      updateRow(row) {
        var afterTr, hidden, options, rowId, td, tr;
        options = this.TableGrid.Options;
        rowId = row[options.idColumn];
        afterTr = $('tr#C_' + rowId, this.TableElement).prev();
        $('tr#C_' + rowId, this.TableElement).remove();
        tr = $('<tr>').attr('id', 'C_' + rowId).addClass('tablegrid-multiselect-row');
        if (afterTr.length === 0) {
          tr.prependTo(this.TableElement);
        } else {
          tr.insertAfter(afterTr);
        }
        td = $('<td>').appendTo(tr);
        hidden = false;
        if (options.multiselect.hidden) {
          hidden = options.multiselect.hidden(row);
        }
        if (options.rowDisabled && options.rowDisabled(row)) {
          hidden = true;
        }
        if (hidden !== true) {
          $('<input>').attr('type', 'checkbox').attr('id', 'tablegrid-checkbox_' + rowId).attr('value', rowId).css('margin', '0').on('change', this.select).appendTo(td);
        }
      }

      select(e) {
        var allChecked, l, len, options, parentValue, ref, row, selectedId;
        options = this.TableGrid.Options;
        selectedId = $(e.target).val();
        allChecked = true;
        ref = this.TableGrid.Grid.Rows;
        for (l = 0, len = ref.length; l < len; l++) {
          row = ref[l];
          if (row.Id.toString() === selectedId) {
            row.Selected = $(e.target).is(':checked');
            if (row instanceof RojobaCo.GridParentRow) {
              parentValue = row.Data[options.parentColumn];
              $('.' + parentValue, this.TableElement).each((index, element) => {
                var childRow, len1, m, ref1, rowId;
                rowId = $(element).attr('id').substring(2);
                $('#tablegrid-checkbox_' + rowId).prop('checked', row.Selected);
                ref1 = this.TableGrid.Grid.Rows;
                for (m = 0, len1 = ref1.length; m < len1; m++) {
                  childRow = ref1[m];
                  if (childRow.Id.toString() === rowId) {
                    childRow.Selected = row.Selected;
                    break;
                  }
                }
              });
            }
          }
          if (!row instanceof RojobaCo.GridParentRow) {
            row.Element.removeClass('tablegrid-row-selected');
            if (row.Selected) {
              row.Element.addClass('tablegrid-row-selected');
            } else {
              allChecked = false;
            }
          }
        }
        $('#tablegrid-checkbox_all').prop('checked', allChecked);
      }

    };

    GridMultiSelectColumn.TableElement = null;

    GridMultiSelectColumn.Container = null;

    return GridMultiSelectColumn;

  }).call(this);

  RojobaCo.GridNewRow = class GridNewRow {
    constructor(Grid, Options) {
      var blankRow, column, l, len, len1, m, ref, ref1;
      this.Grid = Grid;
      this.Options = Options;
      this.Id = 'tmp-id-' + $.now();
      blankRow = {};
      ref = this.Grid.ColumnHeader.GridColumns;
      for (l = 0, len = ref.length; l < len; l++) {
        column = ref[l];
        switch (column.DataType) {
          case 'int':
          case 'currency':
            blankRow[column.Name] = '0';
            break;
          default:
            blankRow[column.Name] = '';
        }
      }
      this.GridCells = [];
      ref1 = this.Grid.ColumnHeader.GridColumns;
      for (m = 0, len1 = ref1.length; m < len1; m++) {
        column = ref1[m];
        this.GridCells.push(new RojobaCo.GridCell(column, blankRow));
      }
    }

    render(element) {
      var gridCell, l, len, ref, tr;
      tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-newrow').appendTo(element);
      ref = this.GridCells;
      for (l = 0, len = ref.length; l < len; l++) {
        gridCell = ref[l];
        gridCell.render(tr);
      }
    }

  };

  RojobaCo.GridParentRow = class GridParentRow {
    constructor(Grid, Data, Options) {
      this.Grid = Grid;
      this.Data = Data;
      this.Options = Options;
      this.Id = 'tmp-id-' + this.Data[this.Options.parentColumn];
      this.HasStock = this.Data.HasStock;
      this.IsLocked = this.Data.IsLocked;
      this.ForcedParentValues = this.Data.ForcedParentValues;
      return;
    }

    render() {
      var Difference, DifferencePercentage, bcInventory, column, currentRowDuration, currentRowDurationParts, hours, i, isNumber, l, len, len1, m, minutes, now, parentColumnIndex, parentValue, ref, ref1, row, seconds, td, timeParts, totalValue, tr, value;
      parentValue = this.Data[this.Options.parentColumn].replace(' ', '');
      if (this.Options.hideParent) {
        tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-parentrow text-nowrap hidden');
      } else {
        if (this.HasStock) {
          tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-parentrow text-nowrap');
        } else {
          tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-parentrow text-nowrap no-stock');
        }
      }
      parentColumnIndex = 0;
      if (this.Grid.MultiSelectColumn) {
        parentColumnIndex = 1;
        $('<td>').appendTo(tr);
      }
      td = $('<td>').html(function() {
        if (parentValue.includes('Colour-Change')) {
          return '<span>Colour Change</span>';
        } else if (parentValue.includes('Break')) {
          return '<span>Break</span>';
        } else {
          return '<span>' + parentValue + '</span>';
        }
      }).appendTo(tr);
      //  td = $('<td>')
      //     .html '<span>' + parentValue + '</span>'
      //     .appendTo tr
      if (this.Options.expandParentColumns) {
        $('<i>').addClass('tablegrid-parentrow-toggle').prependTo(td);
      } else if (!this.Options.hideChildren) {
        $('<i>').addClass('tablegrid-parentrow-toggle la la-caret-right').attr('data-job', this.Id).on('click', (e) => {
          var job;
          job = $(e.target).data('job');
          $('[data-job=' + job + ']').toggleClass('la-caret-down');
          $('[data-job=' + job + ']').toggleClass('la-caret-right');
          $('.' + parentValue, this.Grid.View).toggle();
        }).prependTo(td);
      }
      if (this.IsLocked) {
        tr.addClass('row-locked');
        $('<i>').addClass('la la-lock').prependTo(td);
      }
      ref = this.Grid.ColumnHeader.GridColumns;
      for (i = l = 0, len = ref.length; l < len; i = ++l) {
        column = ref[i];
        if (i > parentColumnIndex) {
          totalValue = '';
          isNumber = false;
          if (column.DataType === 'int' || column.DataType === 'float') {
            totalValue = 0;
          }
          now = moment();
          if (column.DataType === 'Duration') {
            now.set({
              hour: 0,
              minute: 0,
              second: 0
            });
            totalValue = '00:00:00';
          }
          ref1 = this.Grid.Rows;
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            row = ref1[m];
            if (row instanceof RojobaCo.GridRow) {
              if (row.Data[this.Options.parentColumn] === parentValue) {
                if (column.Render) {
                  if (column.Name === 'ExtToBeCoated') {
                    value = row.Data[column.Name];
                  } else {
                    value = column.Render(this.Data);
                  }
                } else {
                  value = row.Data[column.Name];
                }
                if (column.Name === 'Status') {
                  if (value === 'QC Passed') {
                    tr.addClass('jobparent-qcpassed');
                  } else if (value === 'QA') {
                    tr.addClass('jobparent-qa');
                  } else if (value === 'Completed') {
                    tr.addClass('jobparent-completed');
                  } else if (value === 'Awaiting Dispatch') {
                    tr.addClass('jobparent-awaitingdispatch');
                  } else if (value === 'Scheduled') {
                    tr.addClass('jobparent-scheduled');
                  } else if (value === 'Colour Change') {
                    tr.addClass('jobparent-colourchange');
                  } else if (value === 'Break') {
                    tr.addClass('jobparent-break');
                  }
                }
                if (value) {
                  if (column.DataType === 'int') {
                    isNumber = true;
                    totalValue += parseInt(value);
                  } else if (column.DataType === 'float') {
                    isNumber = true;
                    totalValue += parseFloat(value);
                  } else if (column.DataType === 'StartTime') {
                    if (totalValue === '') {
                      totalValue = value;
                    }
                  } else if (column.DataType === 'PowderUsage') {
                    if (!totalValue) {
                      totalValue = value;
                    }
                  } else if (column.DataType === 'Duration') {
                    if (row.Data.DurationOfJob !== 0) {
                      hours = parseInt(row.Data.DurationOfJob * 24);
                      minutes = parseInt(((row.Data.DurationOfJob * 24) - hours) * 60);
                      seconds = parseInt((((row.Data.DurationOfJob * 24) * 60) - minutes) * 60);
                      currentRowDuration = ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2);
                      timeParts = now.format('HH:mm:ss').split(':');
                      currentRowDurationParts = currentRowDuration.split(':');
                      now.set({
                        hour: parseInt(timeParts[0]) + parseInt(currentRowDurationParts[0]),
                        minute: parseInt(timeParts[1]) + parseInt(currentRowDurationParts[1]),
                        second: parseInt(timeParts[2]) + parseInt(currentRowDurationParts[2])
                      });
                      totalValue = now.format('HH:mm:ss');
                    }
                  } else {
                    if (totalValue.indexOf(value) === -1) {
                      if (totalValue.length > 0) {
                        totalValue += ', ';
                      }
                      totalValue += value;
                    }
                  }
                }
              }
            }
          }
          if (isNumber && column.Name !== 'ExtToBeCoated') {
            $('<td>').html(totalValue.toFixed(2)).appendTo(tr);
          } else if (column.Name === 'QuantityOnPurchaseOrder' || column.Name === 'QuantityOnSalesOrder' || column.Name === 'QuantityOnComponentLines') {
            if (totalValue.length === 0) {
              $('<td>').html(0).css('text-align', 'center').appendTo(tr);
            } else {
              $('<td>').html(totalValue).css('text-align', 'center').appendTo(tr);
            }
          } else if (column.Name === 'BCInventory') {
            bcInventory = this.ForcedParentValues.BCInventory;
            $('<td>').html(bcInventory).appendTo(tr);
          } else if (column.Name === 'Difference') {
            Difference = this.ForcedParentValues.Difference;
            $('<td>').html(Difference).appendTo(tr);
          } else if (column.Name === 'DifferencePercentage') {
            DifferencePercentage = this.ForcedParentValues.DifferencePercentage;
            $('<td>').html(DifferencePercentage).appendTo(tr);
          } else {
            $('<td>').html(totalValue).appendTo(tr);
          }
        }
      }
      if (this.Grid.ActionColumn) {
        $('<td>').appendTo(tr);
      }
      return tr;
    }

  };

  RojobaCo.GridReviewColumn = class GridReviewColumn {
    constructor(TableGrid) {
      this.TableGrid = TableGrid;
    }

    render(data) {
      var div, l, len, options, ref, row, th, thead, tr;
      options = this.TableGrid.Options;
      div = $('<div>').addClass('tablegrid-review').css('position', 'absolute').css('right', '0').css('top', '0').appendTo(this.TableGrid.View);
      if (options.hide) {
        div.css('display', 'none');
      }
      this.Table = $('<table>').addClass('table table-bordered table-striped table-hover').css('margin', '0').appendTo(div);
      this.Table.addClass(this.TableGrid.Element.attr('class'));
      thead = $('<thead>').appendTo(this.Table);
      tr = $('<tr>').addClass('tablegrid-review-header').appendTo(thead);
      th = $('<th>').text('Review').appendTo(tr);
      ref = data.rows;
      for (l = 0, len = ref.length; l < len; l++) {
        row = ref[l];
        this.addRow(row);
      }
    }

    addRow(row) {
      var buttons, options, rowId, td, tr;
      options = this.TableGrid.Options;
      rowId = row[options.idColumn];
      tr = $('<tr>').attr('id', 'R_' + rowId).addClass('tablegrid-review-row').appendTo(this.Table);
      td = $('<td>').appendTo(tr);
      buttons = $('<div>').addClass('tablegrid-review-buttons btn-group').attr('role', 'group').css('float', 'left').appendTo(td);
      $('<button>').attr('type', 'button').attr('title', 'Review this record').addClass('btn btn-default').html('<i class="fa fa-eye"></i>').on('click', function(e) {
        var id;
        id = $(e.target).closest('tr').attr('id');
        options.onReviewClick(id.substring(2, id.length));
      }).appendTo(buttons);
    }

    updateRow(row) {
      var action, actionClick, afterTr, buttons, hidden, l, len, options, ref, rowId, td, tr;
      options = this.TableGrid.Options;
      rowId = row[options.idColumn];
      afterTr = $('tr#A_' + rowId, this.Table).prev();
      $('tr#A_' + rowId, this.Table).remove();
      tr = $('<tr>').attr('id', 'A_' + rowId).addClass('tablegrid-action-row');
      if (afterTr.length === 0) {
        tr.prependTo($('tbody', this.Table));
      } else {
        tr.insertAfter(afterTr);
      }
      td = $('<td>').appendTo(tr);
      actionClick = (e) => {
        var action, iconClass, id, l, len, ref;
        id = $(e.target).closest('tr').attr('id');
        iconClass = '';
        if (e.target.tagName === 'BUTTON') {
          iconClass = $('i', $(e.target)).attr('class');
        } else {
          iconClass = $(e.target).attr('class');
        }
        ref = options.rowActions;
        for (l = 0, len = ref.length; l < len; l++) {
          action = ref[l];
          if (iconClass.indexOf(action.icon) !== -1) {
            action.onClick(id.substring(2, id.length));
            break;
          }
        }
        e.stopPropagation();
      };
      if (options.rowActions.length > 0) {
        buttons = $('<div>').addClass('tablegrid-action-buttons btn-group').attr('role', 'group').css('float', 'left').appendTo(td);
        ref = options.rowActions;
        for (l = 0, len = ref.length; l < len; l++) {
          action = ref[l];
          hidden = false;
          if (action.hidden) {
            hidden = action.hidden(row);
          }
          if (hidden !== true) {
            $('<button>').attr('type', 'button').attr('title', action.title).addClass('btn btn-default').html('<i class="fa fa-' + action.icon + '"></i>').on('click', actionClick).appendTo(buttons);
          }
        }
      } else {
        td.html('&nbsp;');
      }
    }

  };

  RojobaCo.GridRow = class GridRow {
    constructor(Grid, Data, Options) {
      var column, l, len, ref;
      this.Grid = Grid;
      this.Data = Data;
      this.Options = Options;
      this.Id = this.Data[this.Options.idColumn];
      this.Selected = false;
      this.GridCells = [];
      this.ColourRow = this.Data.ColourRow;
      ref = this.Grid.ColumnHeader.GridColumns;
      for (l = 0, len = ref.length; l < len; l++) {
        column = ref[l];
        this.GridCells.push(new RojobaCo.GridCell(column, this));
      }
    }

    render() {
      var attr, key, parentClass, value;
      parentClass = '';
      if (this.Options.parentColumn && this.Data[this.Options.parentColumn]) {
        parentClass = ' ' + this.Data[this.Options.parentColumn];
      }
      if (this.ColourRow) {
        this.Element = $('<tr>').attr('id', this.Id).addClass('tablegrid-row text-nowrap' + parentClass + ' colour-row');
      } else {
        this.Element = $('<tr>').attr('id', this.Id).addClass('tablegrid-row text-nowrap' + parentClass);
      }
      if (this.Options.rowAttr) {
        attr = this.Options.rowAttr(this.Data);
        for (key in attr) {
          if (!hasProp.call(attr, key)) continue;
          value = attr[key];
          if (key === 'class') {
            this.Element.addClass(value);
          } else {
            this.Element.attr(key, value);
          }
        }
      }
      if (this.Options.rowDisabled && this.Options.rowDisabled(this.Data)) {
        this.Element.addClass('tablegrid-disable-row');
      }
      if (this.Options.parentColumn && !this.Options.expandParentColumns) {
        this.Element.hide();
      }
      return this.Element;
    }

  };

  RojobaCo.Pivot = (function() {
    var KEY_CODES;

    class Pivot {
      constructor(TableGrid) {
        var options;
        this.TableGrid = TableGrid;
        options = this.TableGrid.Options;
        this.ColumnHeader = new RojobaCo.PivotColumnHeader(this.TableGrid);
        this.Rows = [];
        if (options.edit) {
          $(document).on('click', (e) => {
            if ($(e.target).is('a') && $(e.target).parents('ul.dropdown-menu').length > 0) {
              return;
            }
            if (this.TableGrid.Edited) {
              if (options.onEdit) {
                options.onEdit();
              }
              this.TableGrid.Edited = false;
            }
            this.clearEditing();
          }).on('keydown', (e) => {
            if (this.CellSelected) {
              if (e.shiftKey) {
                switch (e.keyCode) {
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  default:
                    return;
                }
              } else {
                switch (e.keyCode) {
                  case KEY_CODES.ARROW_LEFT:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  case KEY_CODES.ARROW_UP:
                    e.preventDefault();
                    this.moveUp();
                    break;
                  case KEY_CODES.ARROW_RIGHT:
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveRight();
                    break;
                  case KEY_CODES.ARROW_DOWN:
                    e.preventDefault();
                    this.moveDown();
                    break;
                  case KEY_CODES.F2:
                    e.preventDefault();
                    this.editCell(this.CellSelected);
                    break;
                  default:
                    return;
                }
              }
            } else if (this.CellEdited) {
              if (e.shiftKey) {
                switch (e.keyCode) {
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  default:
                    return;
                }
              } else {
                switch (e.keyCode) {
                  case KEY_CODES.ENTER:
                    e.preventDefault();
                    this.selectCell(this.CellEdited);
                    break;
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveRight();
                    break;
                  default:
                    return;
                }
              }
            }
          });
        }
        return;
      }

      destroy() {
        var column, l, len, ref;
        ref = this.ColumnHeader.GridColumns;
        for (l = 0, len = ref.length; l < len; l++) {
          column = ref[l];
          column.destroy();
        }
      }

      render(data) {
        var agg, elTr, firstRow, gridCell, key, l, len, len1, len2, len3, len4, len5, len6, m, n, o, options, pivotData, q, r, ref, ref1, ref2, ref3, ref4, ref5, ref6, row, s, x, y;
        options = this.TableGrid.Options;
        if (this.Detail) {
          this.Detail.remove();
        }
        this.ColumnHeader.render(data);
        pivotData = {};
        ref = data.rows;
        for (l = 0, len = ref.length; l < len; l++) {
          row = ref[l];
          key = '';
          ref1 = options.xDimension;
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            x = ref1[m];
            key += row[x];
          }
          if (!pivotData[key]) {
            pivotData[key] = {};
          }
          pivotData[key][options.idColumn] = key;
          ref2 = options.xDimension;
          for (n = 0, len2 = ref2.length; n < len2; n++) {
            x = ref2[n];
            pivotData[key][x] = row[x];
          }
          ref3 = options.yDimension;
          for (o = 0, len3 = ref3.length; o < len3; o++) {
            y = ref3[o];
            ref4 = options.aggregates;
            for (q = 0, len4 = ref4.length; q < len4; q++) {
              agg = ref4[q];
              pivotData[key][row[y] + '_' + agg.member] = row[agg.member];
            }
          }
        }
        this.Rows = [];
        for (key in pivotData) {
          row = pivotData[key];
          this.Rows.push(new RojobaCo.GridRow(this, row, this.TableGrid.Options));
        }
        this.Detail = $('<div>').addClass('tablegrid-detail').scroll((e) => {
          var divSelect, el;
          if (this.CellSelected) {
            el = this.CellSelected.Element[0];
            divSelect = $('div.tablegrid-cell-select');
            if (divSelect.length > 0) {
              divSelect.css('left', el.offsetLeft);
            }
          }
          $('.tablegrid-header', this.TableGrid.View).scrollLeft($(e.target).scrollLeft());
        }).appendTo(this.TableGrid.View);
        this.Box = $('<div>').addClass('tablegrid-detail-box').appendTo(this.Detail);
        if (options.height) {
          this.Detail.css('height', options.height + 'px');
        }
        if (options.hide) {
          this.Detail.css('display', 'none');
        }
        this.TableElement = $('<table>').addClass('table table-hover').appendTo(this.Box);
        this.TableElement.addClass(this.TableGrid.Element.attr('class'));
        if (this.Rows.length > 0) {
          firstRow = new RojobaCo.GridFirstRow(this, options);
          firstRow.render(this.TableElement);
        }
        ref5 = this.Rows;
        for (r = 0, len5 = ref5.length; r < len5; r++) {
          row = ref5[r];
          elTr = row.render();
          this.TableElement.append(elTr);
          ref6 = row.GridCells;
          for (s = 0, len6 = ref6.length; s < len6; s++) {
            gridCell = ref6[s];
            gridCell.render(elTr);
          }
        }
        this.adjustSize();
      }

      onCellSelect(cell) {
        this.selectCell(cell);
      }

      onCellEdit(cell) {
        this.editCell(cell);
      }

      clearEditing() {
        var options;
        options = this.TableGrid.Options;
        $('div.tablegrid-cell-select').remove();
        $('div.tablegrid-cell-edit').remove();
        if (this.CellEdited) {
          if (this.CellEdited.HasValueChanged) {
            if (options.afterCellEdit) {
              options.afterCellEdit(this.CellEdited.GridRow.Id, this.CellEdited.Element, this.CellEdited.GridColumn.Name, this.CellEdited.Value, this.CellEdited.RowIndex, this.CellEdited.ColumnIndex);
            }
          }
          this.CellEdited.HasValueChanged = false;
        }
        this.CellSelected = null;
        this.CellEdited = null;
      }

      selectCell(cell) {
        var actionsWidth, el, lastColumn, options, scrollValue, self;
        self = this;
        self.clearEditing();
        this.CellSelected = cell;
        el = cell.Element[0];
        actionsWidth = 0;
        options = this.TableGrid.Options;
        if (options.rowActions.length > 0) {
          lastColumn = $('td', cell.Element.parent()).last();
          actionsWidth = lastColumn[0].offsetWidth;
        }
        scrollValue = (this.Detail[0].offsetWidth - actionsWidth) - (el.offsetLeft + el.offsetWidth);
        if (scrollValue < 0) {
          this.Detail[0].scrollLeft = Math.abs(scrollValue) + actionsWidth + this.Detail[0].scrollLeft;
        } else if (this.Detail[0].scrollLeft > 0) {
          this.Detail[0].scrollLeft = el.offsetLeft;
        }
        $('<div>').addClass('tablegrid-cell-select').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).on('click', function(e) {
          self.editCell(cell);
          e.stopPropagation();
        }).on('dblclick', function(e) {
          self.editCell(cell);
          e.stopPropagation();
        }).appendTo(this.Detail);
        if (options.editOnSelect) {
          self.editCell(cell);
        }
      }

      editCell(cell) {
        var el, input, inputContainer, options;
        options = this.TableGrid.Options;
        if (!cell.GridColumn.Readonly) {
          this.clearEditing();
          this.CellEdited = cell;
          el = cell.Element[0];
          inputContainer = $('<div>').addClass('tablegrid-cell-edit').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).appendTo(this.Detail);
          input = cell.GridColumn.getInput(cell.Value, (value) => {
            var canEdit, cellValue, column, index, key, l, len, len1, len2, len3, m, n, nameParts, o, readOnlyCell, ref, ref1, ref2, ref3, row, valueSet, x, y;
            canEdit = !options.beforeCellEdit;
            if (options.beforeCellEdit) {
              canEdit = options.beforeCellEdit(this.CellEdited.GridRow.Id, this.CellEdited.Element, this.CellEdited.GridColumn.Name, this.CellEdited.Value, value, this.CellEdited.RowIndex, this.CellEdited.ColumnIndex);
            }
            if (canEdit) {
              el.innerText = value;
              cell.Value = value;
              cell.HasValueChanged = true;
              cell.GridRow.Data[cell.GridColumn.Name] = value;
              valueSet = false;
              ref = this.TableGrid.Data.rows;
              for (l = 0, len = ref.length; l < len; l++) {
                row = ref[l];
                if (valueSet) {
                  break;
                }
                key = '';
                ref1 = options.xDimension;
                for (m = 0, len1 = ref1.length; m < len1; m++) {
                  x = ref1[m];
                  key += row[x];
                }
                if (key === cell.GridRow.Data[options.idColumn]) {
                  nameParts = cell.GridColumn.Name.split('_');
                  ref2 = options.yDimension;
                  for (n = 0, len2 = ref2.length; n < len2; n++) {
                    y = ref2[n];
                    if (row[y].toString() === nameParts[0]) {
                      row[nameParts[1]] = value;
                      valueSet = true;
                      break;
                    }
                  }
                }
              }
              ref3 = this.ColumnHeader.GridColumns;
              for (index = o = 0, len3 = ref3.length; o < len3; index = ++o) {
                column = ref3[index];
                if (column.Readonly && column.GetValue) {
                  cellValue = column.GetValue(cell.GridRow.Data);
                  readOnlyCell = cell.GridRow.GridCells[index];
                  cell.GridRow.Data[column.Name] = cellValue;
                  readOnlyCell.Element.html(cellValue);
                }
              }
              this.TableGrid.Edited = true;
            }
          });
          input.css('height', el.offsetHeight).appendTo(inputContainer);
          $(':input', input).css('height', el.offsetHeight).focus();
        }
      }

      updateCell(cell, value) {
        var key, l, len, len1, len2, m, n, nameParts, options, ref, ref1, ref2, row, valueSet, x, y;
        options = this.TableGrid.Options;
        valueSet = false;
        ref = this.TableGrid.Data.rows;
        for (l = 0, len = ref.length; l < len; l++) {
          row = ref[l];
          if (valueSet) {
            break;
          }
          key = '';
          ref1 = options.xDimension;
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            x = ref1[m];
            key += row[x];
          }
          if (key === cell.GridRow.Data[options.idColumn]) {
            nameParts = cell.GridColumn.Name.split('_');
            ref2 = options.yDimension;
            for (n = 0, len2 = ref2.length; n < len2; n++) {
              y = ref2[n];
              if (row[y].toString() === nameParts[0]) {
                row[nameParts[1]] = value;
                valueSet = true;
                break;
              }
            }
          }
        }
      }

      moveLeft() {
        var cell, row;
        if (this.CellEdited) {
          if (this.CellEdited.ColumnIndex === 1) {
            return;
          }
          row = this.Rows[this.CellEdited.RowIndex];
          cell = row.GridCells[this.CellEdited.ColumnIndex - 1];
          this.editCell(cell);
        } else if (this.CellSelected) {
          if (this.CellSelected.ColumnIndex === 1) {
            return;
          }
          row = this.Rows[this.CellSelected.RowIndex];
          cell = row.GridCells[this.CellSelected.ColumnIndex - 1];
          this.selectCell(cell);
        }
      }

      moveUp() {
        var cell, row;
        if (this.CellSelected.RowIndex === 0) {
          return;
        }
        row = this.Rows[this.CellSelected.RowIndex - 1];
        cell = row.GridCells[this.CellSelected.ColumnIndex];
        this.selectCell(cell);
      }

      moveRight() {
        var cell, options, row, skipColumns;
        options = this.TableGrid.Options;
        skipColumns = 1;
        if (options.rowActions.length > 0) {
          skipColumns = 2;
        }
        if (this.CellEdited) {
          if (this.CellEdited.ColumnIndex === this.ColumnHeader.GridColumns.length - skipColumns) {
            return;
          }
          row = this.Rows[this.CellEdited.RowIndex];
          cell = row.GridCells[this.CellEdited.ColumnIndex + 1];
          this.editCell(cell);
        } else if (this.CellSelected) {
          if (this.CellSelected.ColumnIndex === this.ColumnHeader.GridColumns.length - skipColumns) {
            return;
          }
          row = this.Rows[this.CellSelected.RowIndex];
          cell = row.GridCells[this.CellSelected.ColumnIndex + 1];
          this.selectCell(cell);
        }
      }

      moveDown(cell, view) {
        var row;
        if (this.CellSelected.RowIndex === this.Rows.length - 1) {
          return;
        }
        row = this.Rows[this.CellSelected.RowIndex + 1];
        cell = row.GridCells[this.CellSelected.ColumnIndex];
        this.selectCell(cell);
      }

      adjustSize() {
        var setHeaderHeight, setHeaderWidth, setRowHeight;
        $('tr.tablegrid-row, tr.tablegrid-grouprow, tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow, tr.tablegrid-action-row, tr.tablegrid-action-grouprow', this.TableGrid.View).css('height', '');
        $('div.tablegrid-multiselect-header th, div.tablegrid-action-header th', this.TableGrid.View).css('height', '');
        setHeaderHeight = () => {
          var headerHeight;
          headerHeight = $('div.tablegrid-header', this.TableGrid.View).height() - 1;
          $('div.tablegrid-multiselect-header th, div.tablegrid-action-header th', this.TableGrid.View).css('height', headerHeight + 'px');
        };
        setHeaderWidth = (indx, td) => {
          $('div.tablegrid-header th.tablegrid-column', this.TableGrid.View).eq(indx).css('width', $(td).outerWidth() + 'px');
        };
        setRowHeight = (indx, tr) => {
          var rowHeight, tempHeight;
          rowHeight = $(tr).height();
          if (this.MultiSelectColumn) {
            tempHeight = $('tr.tablegrid-multiselect-row', this.TableGrid.View).eq(indx).height();
            if (tempHeight > rowHeight) {
              rowHeight = tempHeight;
            }
          }
          if (this.ActionColumn) {
            tempHeight = $('tr.tablegrid-action-row', this.TableGrid.View).eq(indx).height();
            if (tempHeight > rowHeight) {
              rowHeight = tempHeight;
            }
          }
          if (this.MultiSelectColumn) {
            $('tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow', this.TableGrid.View).eq(indx).css('height', rowHeight + 'px');
          }
          if (this.ActionColumn) {
            $('tr.tablegrid-action-row, tr.tablegrid-action-grouprow', this.TableGrid.View).eq(indx).css('height', rowHeight + 'px');
          }
          $(tr).css('height', rowHeight + 'px');
        };
        setTimeout(() => {
          var availableWidth, column, headerFirstRow, index, l, len, len1, len2, m, n, ref, ref1, ref2, td, totalWidth;
          $('tr.tablegrid-row, tr.tablegrid-grouprow', this.TableGrid.View).each(function(indx, tr) {
            setRowHeight(indx, tr);
          });
          totalWidth = 0;
          ref = this.ColumnHeader.GridColumns;
          for (l = 0, len = ref.length; l < len; l++) {
            column = ref[l];
            column.NewWidth = 0;
            totalWidth += parseInt(column.Width);
          }
          //what about options.width?
          if (totalWidth > 0 && totalWidth < this.TableElement.parent().outerWidth()) {
            availableWidth = this.TableElement.parent().outerWidth();
            ref1 = this.ColumnHeader.GridColumns;
            for (m = 0, len1 = ref1.length; m < len1; m++) {
              column = ref1[m];
              column.NewWidth = parseInt((column.Width / totalWidth) * availableWidth);
            }
            totalWidth = this.TableElement.parent().outerWidth();
          }
          ref2 = this.ColumnHeader.GridColumns;
          for (index = n = 0, len2 = ref2.length; n < len2; index = ++n) {
            column = ref2[index];
            td = $('td', $('tr.tablegrid-firstrow', this.TableGrid.View)).eq(index);
            if (column.NewWidth && column.NewWidth > 0) {
              td.css('width', column.NewWidth + 'px');
            } else {
              td.css('width', column.Width + 'px');
            }
          }
          if (totalWidth > 0) {
            this.TableElement.css('width', totalWidth + 'px');
          }
          $('.tablegrid-header-firstrow', $('thead', this.ColumnHeader.TableElement)).remove();
          headerFirstRow = $('tr.tablegrid-firstrow', this.TableGrid.View).clone();
          headerFirstRow.attr('id', 'tmp-id-' + $.now());
          headerFirstRow.removeClass('tablegrid-firstrow');
          headerFirstRow.addClass('tablegrid-header-firstrow');
          $('thead', this.ColumnHeader.TableElement).prepend(headerFirstRow);
          /*
          $('tr.tablegrid-firstrow td', @TableGrid.View).each (indx, td) ->
              setHeaderWidth indx, td
              return
          */
          this.ColumnHeader.TableElement.css('width', this.TableElement.outerWidth() + 'px');
          setHeaderHeight();
        }, 1);
      }

    };

    Pivot.Detail = null;

    Pivot.Box = null;

    Pivot.TableElement = null;

    Pivot.CellSelected = null;

    Pivot.CellEdited = null;

    KEY_CODES = {
      TAB: 9,
      ENTER: 13,
      ESCAPE: 27,
      ARROW_LEFT: 37,
      ARROW_UP: 38,
      ARROW_RIGHT: 39,
      ARROW_DOWN: 40,
      F2: 113
    };

    return Pivot;

  }).call(this);

  RojobaCo.PivotColumnHeader = (function() {
    class PivotColumnHeader {
      constructor(TableGrid) {
        this.TableGrid = TableGrid;
        this.GridColumns = [];
        return;
      }

      render(data) {
        var agg, column, header, l, len, len1, len2, len3, len4, len5, len6, len7, len8, m, n, o, options, pivotColumn, pivotHeader, q, r, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, row, s, t, thead, u, x, xColumns, y;
        options = this.TableGrid.Options;
        if (this.Element) {
          this.Element.remove();
        }
        this.Element = $('<div>').addClass('tablegrid-header').appendTo(this.TableGrid.View);
        this.TableElement = $('<table>').addClass('table').appendTo(this.Element);
        thead = $('<thead>').appendTo(this.TableElement);
        pivotHeader = $('<tr>').appendTo(thead);
        $('<th>').attr('colspan', options.xDimension.length).appendTo(pivotHeader);
        xColumns = [];
        ref = data.rows;
        for (l = 0, len = ref.length; l < len; l++) {
          row = ref[l];
          ref1 = options.yDimension;
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            y = ref1[m];
            if (ref2 = row[y], indexOf.call(xColumns, ref2) < 0) {
              xColumns.push(row[y]);
            }
          }
        }
        for (n = 0, len2 = xColumns.length; n < len2; n++) {
          x = xColumns[n];
          $('<th>').attr('colspan', options.aggregates.length).text(x).appendTo(pivotHeader);
        }
        header = $('<tr>').appendTo(thead);
        ref3 = options.xDimension;
        for (o = 0, len3 = ref3.length; o < len3; o++) {
          x = ref3[o];
          ref4 = options.columnModel;
          for (q = 0, len4 = ref4.length; q < len4; q++) {
            column = ref4[q];
            if (x === column.name) {
              this.GridColumns.push(new RojobaCo.GridColumn(this.TableGrid, column));
              break;
            }
          }
        }
        for (r = 0, len5 = xColumns.length; r < len5; r++) {
          x = xColumns[r];
          ref5 = options.aggregates;
          for (s = 0, len6 = ref5.length; s < len6; s++) {
            agg = ref5[s];
            ref6 = options.columnModel;
            for (t = 0, len7 = ref6.length; t < len7; t++) {
              column = ref6[t];
              if (agg.member === column.name) {
                pivotColumn = jQuery.extend({}, column);
                pivotColumn.name = x + '_' + column.name;
                this.GridColumns.push(new RojobaCo.GridColumn(this.TableGrid, pivotColumn));
                break;
              }
            }
          }
        }
        ref7 = this.GridColumns;
        for (u = 0, len8 = ref7.length; u < len8; u++) {
          column = ref7[u];
          column.render(header);
        }
      }

    };

    PivotColumnHeader.Element = null;

    PivotColumnHeader.TableElement = null;

    return PivotColumnHeader;

  }).call(this);

  RojobaCo.TableGrid = class TableGrid extends RojobaCo.BasePlugin {
    constructor(Element, Options) {
      var readOnlyAttr, superArg;
      superArg = function() {
        return this.Element;
      };
      super(superArg);
      this.Element = Element;
      this.Options = Options;
      this.Container = $('<div>').addClass('tablegrid').insertAfter(this.Element);
      if (this.Options.width && this.Options.width > 0) {
        this.Container.css('width', this.Options.width + 'px');
      }
      this.Overlay = $('<div>').addClass('tablegrid-overlay').appendTo(this.Container);
      this.Loading = $('<div>').addClass('tablegrid-loading').text(this.Options.loadingText).appendTo(this.Container);
      this.View = $('<div>').addClass('tablegrid-view').appendTo(this.Container);
      this.Data = {
        page: 1,
        records: 0,
        total: 0,
        rows: []
      };
      this.Loaded = false;
      this.Edited = false;
      this.PrevId = null;
      this.NextId = null;
      this.PageNo = 1;
      this.PageSize = this.Options.initialPageSize;
      this.Sort = {};
      this.Filter = {};
      if (this.Options.rowActions.length > 0) {
        readOnlyAttr = this.Element.attr('data-readonly');
      }
      if (this.Options.xDimension.length > 0 && this.Options.yDimension.length > 0) {
        this.Grid = new RojobaCo.Pivot(this);
      } else {
        this.Grid = new RojobaCo.Grid(this);
      }
      
      //@Grid.render @Data           
      this.hideLoading();
      this.Container.on('resize', () => {
        this.Grid.adjustSize();
      });
      $(window).on('resize', () => {
        this.Grid.adjustSize();
      });
    }

    hide() {
      this.Element.next('div').hide();
    }

    show() {
      this.Element.next('div').show();
    }

    showLoading() {
      this.Overlay.show();
      this.Loading.show();
    }

    hideLoading() {
      this.Overlay.hide();
      this.Loading.hide();
    }

    loadData(data) {
      if (!data || !data.rows) {
        data = {
          page: 1,
          records: 0,
          total: 0,
          rows: []
        };
      }
      if (data.rows.length > 0) {
        this.Element.val(data.rows.length);
      } else {
        this.Element.val('');
      }
      this.PrevId = data.prevId;
      this.NextId = data.nextId;
      this.PageNo = data.page;
      this.Data = data;
      this.Grid.render(data);
      this.hideLoading();
      if (this.Options.afterDataLoad) {
        this.Options.afterDataLoad(data.rows);
      }
    }

    setOptions(newOptions) {
      this.Options = $.extend(true, {}, this.Options, newOptions);
    }

    getOption(option) {
      return this.Options[option];
    }

    getData() {
      return this.Data.rows;
    }

    getSelectedIds() {
      var gridRow, items, l, len, ref;
      items = [];
      ref = this.Grid.Rows;
      for (l = 0, len = ref.length; l < len; l++) {
        gridRow = ref[l];
        if (gridRow instanceof RojobaCo.GridRow && gridRow.Selected) {
          items.push(gridRow.Id);
        }
      }
      return items;
    }

    getRemovedIds() {
      return this.Grid.RemovedIds;
    }

    getCell(rowIndex, columnIndex) {
      var gridCell, gridRow, result;
      result = '';
      if (rowIndex < this.Grid.Rows.length) {
        gridRow = this.Grid.Rows[rowIndex];
        if (columnIndex < gridRow.GridCells.length) {
          gridCell = gridRow.GridCells[columnIndex];
          result = gridCell.Value;
        }
      }
      return result;
    }

    updateCell(rowIndex, columnIndex, value) {
      var gridCell, gridRow;
      if (rowIndex < this.Grid.Rows.length) {
        gridRow = this.Grid.Rows[rowIndex];
        if (columnIndex < gridRow.GridCells.length) {
          gridCell = gridRow.GridCells[columnIndex];
          gridCell.Element.text(value);
          gridCell.Value = value;
          gridRow.Data[gridCell.GridColumn.Name] = value;
          this.Grid.updateCell(gridCell, value);
          if (this.Options.afterCellEdit) {
            this.Options.afterCellEdit(gridCell.GridRow.Id, gridCell.Element, gridCell.GridColumn.Name, gridCell.Value, gridCell.RowIndex, gridCell.ColumnIndex);
          }
        }
      }
    }

    getRow(rowId) {
      var l, len, ref, result, row;
      result = null;
      ref = this.Data.rows;
      for (l = 0, len = ref.length; l < len; l++) {
        row = ref[l];
        if (row[this.Options.idColumn].toString() === rowId.toString()) {
          result = row;
          break;
        }
      }
      return result;
    }

    addRow(row) {
      if (!row[this.Options.idColumn]) {
        row[this.Options.idColumn] = 'tmp-id-' + $.now();
      }
      this.Grid.addRow(row);
    }

    updateRow(row) {
      this.Grid.updateRow(row);
    }

    removeRow(id) {
      this.Grid.removeRow(id);
    }

    update() {
      if (this.Grid) {
        this.Grid.render(this.Data);
      }
    }

    sort(columnNames) {
      this.Data.rows.sort(function(a, b) {
        var aValue, bValue, columnName, l, len, val;
        for (l = 0, len = columnNames.length; l < len; l++) {
          columnName = columnNames[l];
          aValue = a[columnName];
          bValue = b[columnName];
          val = 0;
          if (isNaN(aValue)) {
            val = aValue.localeCompare(bValue);
          } else {
            val = parseFloat(aValue) - parseFloat(bValue);
          }
          if (val !== 0) {
            return val;
          }
        }
      });
      this.update();
    }

    filter(filter) {
      this.PrevId = null;
      this.NextId = null;
      this.PageNo = 1;
      this.Filter = filter;
      this.refresh();
    }

    adjustSize() {
      this.Grid.adjustSize();
    }

    reset() {
      this.PrevId = null;
      this.NextId = null;
      this.PageNo = 1;
      this.PageSize = 10;
      if (this.Grid) {
        this.Grid.reset();
      }
    }

    refresh() {
      if (this.Options.onGetData) {
        this.showLoading();
        this.Options.onGetData(this.PrevId, this.NextId, this.PageNo, this.PageSize, this.Sort, this.Filter);
      }
    }

    trigger(optionName, param) {
      var args;
      if (this.Options[optionName]) {
        args = [];
        Array.prototype.push.apply(args, arguments);
        args.shift();
        this.Options[optionName].apply(this.Options, args);
      }
    }

    clearFilter() {
      this.PrevId = null;
      this.NextId = null;
      this.PageNo = 1;
      this.Filter = {};
      this.Sort = {};
      $('i.filter-icon', this.View).remove();
      $('i.sort-icon', this.View).remove();
      this.refresh();
    }

    clear() {
      var gridRow, i, id, ids, l, len, len1, m, ref;
      ids = [];
      ref = this.Grid.Rows;
      for (l = 0, len = ref.length; l < len; l++) {
        gridRow = ref[l];
        ids.push(gridRow.Id);
      }
      for (i = m = 0, len1 = ids.length; m < len1; i = ++m) {
        id = ids[i];
        this.Data.rows.splice(0, 1);
        this.Grid.Rows.splice(0, 1);
        $('tr#' + id, this.View).remove();
        $('tr#A_' + id, this.View).remove();
        $('tr#C_' + id, this.View).remove();
      }
      if (this.Options.edit) {
        this.update();
      }
      if (this.Data.rows.length > 0) {
        this.Element.val(this.Data.rows.length);
      } else {
        this.Element.val('');
      }
    }

    clearSelection() {
      var gridRow, l, len, ref;
      $('.tablegrid-checkbox_all').prop('checked', false);
      ref = this.Grid.Rows;
      for (l = 0, len = ref.length; l < len; l++) {
        gridRow = ref[l];
        gridRow.Selected = false;
        $('#tablegrid-checkbox_' + gridRow.Id).prop('checked', false);
      }
    }

  };

  RojobaCo.SearchSelect = (function() {
    var typeIsArray, typeIsFunction, typeIsString;

    class SearchSelect extends RojobaCo.BasePlugin {
      constructor(Element, Options, Url) {
        var createListItems, searching, selected, superArg, title;
        superArg = function() {
          return this.Element;
        };
        super(superArg);
        this.Element = Element;
        this.Options = Options;
        this.Url = Url;
        title = this.Options.title;
        selected = this.Options.title;
        this.items = {};
        this.SelectComponent = $('<div>').addClass('dropdown searchselect').insertAfter(this.Element);
        this.Button = $('<button>').addClass('btn dropdown-toggle').attr('type', 'button').attr('data-toggle', 'dropdown').appendTo(this.SelectComponent);
        if (this.Options.selected.id && this.Options.selected.id.trim().length > 0 && this.Options.selected.id.trim() !== '00000000-0000-0000-0000-000000000000') {
          this.Element.val(this.Options.selected.id.trim());
        }
        if (this.Options.selected.text && this.Options.selected.text.toString().trim() !== '') {
          this.ButtonText = $('<span>').text(this.Options.selected.text.toString().trim()).addClass('float-left').appendTo(this.Button);
          this.ButtonRemoveTextIcon = $('<i>').addClass("fas fa-times-circle clearinput-icon").show().appendTo(this.Button);
        } else {
          this.ButtonText = $('<span>').text(title).addClass('float-left').appendTo(this.Button);
          this.ButtonRemoveTextIcon = $('<i>').addClass("fas fa-times-circle clearinput-icon").hide().appendTo(this.Button);
        }
        this.DropdownMenu = $('<div>').addClass('dropdown-menu').appendTo(this.SelectComponent);
        this.SearchControl = $('<div>').addClass('search-control').appendTo(this.DropdownMenu);
        this.SearchControlInput = $('<input>').addClass('form-control').appendTo(this.SearchControl);
        this.InnerDropdownMenu = $('<div>').addClass('inner show').appendTo(this.DropdownMenu);
        this.ListContainer = $('<ul>').addClass('dropdown-menu inner show').appendTo(this.InnerDropdownMenu);
        this.Element.appendTo(this.InnerDropdownMenu);
        this.Button.on('click', () => {
          var filteredItems, item, l, len, mappedItem, ref, url;
          filteredItems = [];
          if (this.Options.items && !this.Button.parent('.searchselect').hasClass('show')) {
            if (this.SearchControlInput.val().length > 2) {
              ref = this.Options.items;
              for (l = 0, len = ref.length; l < len; l++) {
                item = ref[l];
                mappedItem = this.Options.onItemMap(item);
                if (mappedItem.label.search(this.SearchControlInput.val()) > -1) {
                  filteredItems.push(item);
                }
              }
              if (this.Options.onGetData) {
                this.items = this.Options.onGetData(filteredItems);
                createListItems(this.items);
              } else {
                this.items = filteredItems;
                createListItems(this.items);
              }
            } else {
              if (this.Options.onGetData) {
                this.items = this.Options.onGetData(this.Options.items);
                createListItems(this.items);
              } else {
                this.items = this.Options.items;
                createListItems(this.items);
              }
            }
          } else if (!this.Button.parent('.searchselect').hasClass('show')) {
            url = this.Options.source;
            if (this.SearchControlInput.val().length > 2) {
              url += '&query=' + this.SearchControlInput.val();
            }
            $.ajax({
              type: 'GET',
              url: url,
              dataType: 'json',
              error: (jqXHR, textStatus, errorThrown) => {
                $(this.ListContainer).empty();
                return $('<span>').text('An error was thrown when attempting to access the server').addClass('text').appendTo(this.ListContainer);
              }
            }).done((data) => {
              if (this.Options.onGetData) {
                this.items = this.Options.onGetData(data);
                createListItems(this.items);
              } else {
                this.items = data;
                createListItems(this.items);
              }
            });
          }
        });
        //Performs ajax call after 3 characters have been inputted
        searching = 0;
        $(this.SearchControlInput).on('keydown', (e) => {
          clearTimeout(searching);
          searching = setTimeout((() => {
            var filteredItems, item, l, len, mappedItem, ref, value;
            value = $(e.target).val();
            if (value.length > 0) {
              if (this.Options.items && this.Button.parent('.searchselect').hasClass('show')) {
                filteredItems = [];
                ref = this.Options.items;
                for (l = 0, len = ref.length; l < len; l++) {
                  item = ref[l];
                  mappedItem = this.Options.onItemMap(item);
                  if (mappedItem.label.toLowerCase().search(this.SearchControlInput.val().toLowerCase()) > -1) {
                    filteredItems.push(item);
                  }
                }
                if (this.Options.onGetData) {
                  this.items = this.Options.onGetData(filteredItems);
                  createListItems(this.items);
                } else {
                  this.items = filteredItems;
                  createListItems(this.items);
                }
              } else {
                // else
                //     if @Options.onGetData
                //         @items = @Options.onGetData @Options.items
                //         createListItems(@items)
                //     else
                //         @items = @Options.items
                //         createListItems(@items)
                $(this.SearchControlInput).addClass('loading');
                $.ajax({
                  type: 'GET',
                  url: this.Options.source + '&query=' + this.SearchControlInput.val(),
                  dataType: 'json',
                  error: (jqXHR, textStatus, errorThrown) => {
                    $(this.ListContainer).empty();
                    $('<span>').text('An error was thrown when attempting to access the server').addClass('text').appendTo(this.ListContainer);
                    $(this.SearchControlInput).removeClass('loading');
                  }
                }).done((data) => {
                  var items;
                  items = data;
                  createListItems(items);
                  $(this.SearchControlInput).removeClass('loading');
                });
              }
            } else if (value.length === 0) {
              $.ajax({
                type: 'GET',
                url: this.Options.source,
                dataType: 'json'
              }).done((data) => {
                var items;
                items = data;
                createListItems(items);
              });
            }
          }), 300);
        });
        //Changes text back to default, hides the icon
        $(this.ButtonRemoveTextIcon).on('click', (e) => {
          this.ButtonText.text(title);
          this.Element.val('');
          this.ButtonRemoveTextIcon.hide();
          if (this.Options.onSelectedItemClear) {
            this.Options.onSelectedItemClear();
          }
          e.stopPropagation();
        });
        //Creates the items for the "UL".
        createListItems = (items) => {
          var item, l, len, mappedItem;
          $(this.ListContainer).empty();
          if (items.length === 0) {
            this.ListItem = $('<li>').appendTo(this.ListContainer);
            this.Item = $('<a>').appendTo(this.ListItem);
            return $('<span>').text('No results matched' + '"' + this.SearchControlInput.val() + '"').addClass('text').appendTo(this.Item);
          } else {
            for (l = 0, len = items.length; l < len; l++) {
              item = items[l];
              mappedItem = this.Options.onItemMap(item);
              this.ListItem = $('<li>').attr('data-value', mappedItem.value).text(mappedItem.label).addClass('dropdown-item').appendTo(this.ListContainer);
            }
            
            //Adds on click event to the dropdown items
            return $('.dropdown-item', this.ListContainer).on('click', (evt) => {
              var id, text;
              id = $(evt.currentTarget).data('value');
              text = $(evt.currentTarget).text();
              this.Element.val(id);
              this.ButtonRemoveTextIcon.show();
              this.ButtonText.text(text);
              $('.dropdown-item').removeClass('active');
              $(evt.currentTarget).addClass('active');
              //Returns the item selected if "onItemSelect"
              if (this.Options.onItemSelect !== null) {
                this.Options.onItemSelect(this.getSelectedData());
              }
            });
          }
        };
        return;
      }

      // Public methods
      destroy() {
        this.Element.appendTo(this.SelectComponent.parent());
        this.SelectComponent.remove();
        this.Element.removeData('SearchSelect');
      }

      setOptions(newOptions) {
        if (newOptions.onItemSelect) {
          this.Options.onItemSelect = newOptions.onItemSelect;
        }
        if (newOptions.getCount) {
          this.Options.getCount = newOptions.getCount;
        }
        if (newOptions.source) {
          this.Options.source = newOptions.source;
          this.Source = newOptions.source;
        }
        if (newOptions.onGetData) {
          this.Options.onGetData = newOptions.onGetData;
        }
        if (newOptions.onSelectedItemClear) {
          this.Options.onSelectedItemClear = newOptions.onSelectedItemClear;
        }
      }

      getSelectedData() {
        var item, l, len, ref;
        ref = this.items;
        for (l = 0, len = ref.length; l < len; l++) {
          item = ref[l];
          this.Options.onItemMap(item).value;
          if (this.Options.onItemMap(item).value === this.Element.val()) {
            return item;
          }
        }
        return null;
      }

      setValue(value, label) {
        if (value === '') {
          this.ButtonText.text(this.Options.title);
          this.Element.val(value);
        } else {
          this.ButtonText.text(label);
          this.Element.val(value);
        }
        if (this.items.length === 0) {
          this.items.push({
            id: value,
            text: label
          });
        }
        return null;
      }

    };

    typeIsArray = function(value) {
      return value && typeof value === 'object' && value instanceof Array && typeof value.length === 'number' && typeof value.splice === 'function' && !(value.propertyIsEnumerable('length'));
    };

    typeIsString = function(value) {
      return value && typeof value === 'string' && value instanceof String;
    };

    typeIsFunction = function(value) {
      return value && typeof value === 'function';
    };

    return SearchSelect;

  }).call(this);

  RojobaCo.TimeSlider = class TimeSlider extends RojobaCo.BasePlugin {
    constructor(Element, Options) {
      var handle, l, len, superArg, value, values;
      superArg = function() {
        return this.Element;
      };
      super(superArg);
      this.Element = Element;
      this.Options = Options;
      this.TimeSliderContainer = $('<div>').addClass('timeslider-container row').insertAfter(this.Element);
      //StartContainer
      this.StartTimeContainer = $('<div>').appendTo(this.TimeSliderContainer).addClass('col-1 timeslider-starttime-container');
      
      //The block that represents the start time at the end of the timeline
      this.StartTimeBlock = $('<div>').appendTo(this.StartTimeContainer).addClass('timeslider-starttime-block').text(this.Options.startTime);
      //TimeLine
      this.TimeLine = $('<div>').appendTo(this.TimeSliderContainer).addClass('timeslider-timeline col-10');
      //EndContainer
      this.EndTimeContainer = $('<div>').appendTo(this.TimeSliderContainer).addClass('col-1 timeslider-endtime-container');
      
      //The block that represents the end time at the end of the timeline
      this.EndTimeBlock = $('<div>').appendTo(this.EndTimeContainer).addClass('timeslider-endtime-block').text(this.Options.endTime);
      //Used to assign the width to the timeline so it can be called when resizing the window
      this.TimeLine.data("timelinewidth", this.TimeLine.width());
      //load existing value
      if (this.Element.val().trim().length > 0) {
        values = JSON.parse(this.Element.val());
        for (l = 0, len = values.length; l < len; l++) {
          value = values[l];
          handle = new RojobaCo.TimeSliderHandle(this.Element, this.TimeLine, this.Options);
          handle.render(value);
        }
      }
      //Handle Icon used to add Handles to the timeslider
      this.AddHandleButton = $('<i>').addClass(() => {
        if (!this.Options.canEdit) {
          return 'fas fa-plus-square float-right timeslider-add-handle hidden';
        } else {
          return 'fas fa-plus-square float-right timeslider-add-handle';
        }
      }).appendTo(this.TimeSliderContainer).on('click', (e) => {
        var timelineWidth;
        timelineWidth = this.TimeLine.outerWidth();
        handle = new RojobaCo.TimeSliderHandle(this.Element, this.TimeLine, this.Options);
        handle.render();
      });
      this.Element.appendTo(this.TimeSliderContainer);
      return;
    }

    //Public methods
    setOptions(newOptions) {
      var handle, l, len, value, values;
      if (newOptions.startTime || newOptions.endTime) {
        if (newOptions.startTime) {
          this.Options.startTime = newOptions.startTime;
          this.StartTimeBlock.text(this.Options.startTime);
        }
        if (newOptions.endTime) {
          this.Options.endTime = newOptions.endTime;
          this.EndTimeBlock.text(this.Options.endTime);
        }
        $('.timeslider-draggable').remove();
        if (this.Element.val().trim().length > 0) {
          values = JSON.parse(this.Element.val());
          for (l = 0, len = values.length; l < len; l++) {
            value = values[l];
            handle = new RojobaCo.TimeSliderHandle(this.Element, this.TimeLine, this.Options);
            handle.render(value);
          }
        }
      }
    }

  };

  RojobaCo.TimeSliderHandle = (function() {
    class TimeSliderHandle {
      constructor(Element, TimeLine, Options) {
        this.Element = Element;
        this.TimeLine = TimeLine;
        this.Options = Options;
        return;
      }

      render(value) {
        var defaultHandleTimeSpanSplit, dragPosition, endTimeSplit, handleContainerEnd, handleContainerStart, handleContainerWidth, handleText, originalPosition, originalTime, pixelsPerFiveMinutes, startTimeSplit, totalMinutes;
        originalPosition = 0;
        originalTime = '';
        handleContainerStart = 0;
        handleContainerEnd = 0;
        handleContainerWidth = 10;
        handleText = 'Break Time';
        if (value) {
          handleContainerStart = this.convertTimeToPixels(value.startTime);
          handleContainerEnd = this.convertTimeToPixels(value.endTime);
          handleContainerWidth = handleContainerEnd - handleContainerStart;
          handleText = value.name;
        } else {
          defaultHandleTimeSpanSplit = this.Options.defaultHandleTimeSpan.split(':');
          startTimeSplit = this.Options.startTime.split(':');
          endTimeSplit = this.Options.endTime.split(':');
          totalMinutes = ((+endTimeSplit[0] * 60) + +endTimeSplit[1]) - (+startTimeSplit[0] * 60 + +startTimeSplit[1]);
          pixelsPerFiveMinutes = this.TimeLine.width() / (totalMinutes / 5);
          handleContainerWidth = (+defaultHandleTimeSpanSplit[0] * 60 + +defaultHandleTimeSpanSplit[1]) / 5 * pixelsPerFiveMinutes + 0.1;
        }
        this.HandleContainer = $('<span>').draggable({
          axis: "x",
          containment: "parent",
          cursor: 'move',
          create: (event, ui) => {},
          start: function(event, ui) {
            originalPosition = $(this).offset();
            originalTime = $(this).children('.timeslider-handle-texttime').text();
          },
          drag: (event, ui) => {
            var left, parentWidth, right;
            //Width of the parent, the timeline.
            parentWidth = $(event.target).parent('.timeslider-timeline').width();
            //Left and rightmost of the element, used to calculate the time range they represent
            left = $(event.target).offset().left;
            right = $(event.target).offset().left + $(event.target).width();
            //Change text displayed to the user 
            this.HandleContainerTextTime.text(this.calculateTimeRange(parentWidth, left, right));
          },
          stop: (event, ui) => {
            var isOverlap, left, paddingLeft, width;
            isOverlap = false;
            paddingLeft = $(event.target).closest('.timeslider-timeline').offset().left;
            $('.timeslider-draggable').not($(event.target)).each((e, element) => {
              var elementPosition, width;
              elementPosition = $(element).position();
              width = $(element).outerWidth();
              if ((elementPosition.left < (ui.offset.left + $(event.target).width() - paddingLeft) && ui.offset.left - paddingLeft < elementPosition.left + width) || (ui.offset.left - paddingLeft > elementPosition.left && elementPosition.left + width > ui.offset.left - paddingLeft)) {
                if (elementPosition.left !== ui.offset.left - paddingLeft) {
                  isOverlap = true;
                }
              }
            });
            left = $(event.target).offset().left;
            width = $(event.target).width();
            if (isOverlap) {
              $(event.target).offset(originalPosition);
              $(event.target).children('.timeslider-handle-texttime').text(originalTime);
            }
            this.updateHandleContainerValue($(event.target));
          }
        }).addClass('timeslider-draggable ').data('value', {}).offset({
          left: handleContainerStart
        }).width(handleContainerWidth).appendTo(this.TimeLine);
        this.RemoveHandleContainer = $('<div>').appendTo(this.HandleContainer).addClass('timeslider-removehandle-container');
        this.RemoveHandle = $('<i>').appendTo(this.RemoveHandleContainer).addClass(() => {
          if (!this.Options.canEdit) {
            return 'fas fa-times-circle timeslider-remove-handle hidden';
          } else {
            return 'fas fa-times-circle timeslider-remove-handle';
          }
        }).on('click', (e) => {
          var objArray;
          e.stopPropagation();
          this.HandleContainer.remove();
          objArray = [];
          $('.timeslider-draggable').each(function() {
            objArray.push($(this).data('value'));
          });
          this.Element.val(JSON.stringify(objArray));
          console.log(this.Element.val());
        });
        this.Handle = $('<div>').addClass('timeslider-handle').css('width', '100%').css('height', '100%').appendTo(this.HandleContainer);
        dragPosition = 0;
        this.HandleWidthPuller = $('<div>').draggable({
          axis: 'x',
          containment: $('.timeslider-timeline'),
          cursor: 'ew-resize',
          create: (event, ui) => {},
          start: (event, ui) => {},
          drag: (event, ui) => {
            var elementWidth, elementWidthPercentage, isOverlap, left, parentWidth, right;
            //Width of the parent, the timeline.
            parentWidth = $(event.target).closest('.timeslider-timeline').width();
            isOverlap = false;
            //Left and rightmost of the element, used to calculate the time range they represent
            left = $(event.target).closest('.timeslider-draggable').offset().left;
            right = $(event.target).offset().left + $(event.target).width();
            dragPosition = 0;
            if (left > $(event.target).offset().left) {
              $(event.target).offset(ui.originalPosition);
            }
            $('.timeslider-draggable').not($(event.target).parent('.timeslider-draggable')).each(function(evt) {
              if ($(this).offset().left < $(event.target).offset().left + $(event.target).width() && $(event.target).closest('.timeslider-draggable').offset().left < $(this).offset().left) {
                dragPosition = $(this).offset().left - $(event.target).width() - 1;
                isOverlap = true;
              }
            });
            elementWidth = "";
            if (isOverlap) {
              this.HandleContainerTextTime.text(this.calculateTimeRange(parentWidth, left, dragPosition + $(event.target).width()));
              elementWidth = (dragPosition + $(event.target).width()) - left;
              isOverlap = false;
            } else {
              this.HandleContainerTextTime.text(this.calculateTimeRange(parentWidth, left, right));
              elementWidth = right - left;
            }
            //Width of the element is acquired by subtracting the right most position, by the left
            elementWidthPercentage = elementWidth / parentWidth * 100;
            //Assigning the calculated width percentage to the element as its dragged.
            this.HandleContainer.width(elementWidthPercentage + '%');
          },
          stop: (event, ui) => {
            var left, right, topOffset;
            left = $(event.target).closest('.timeslider-draggable').offset().left;
            right = $(event.target).offset().left + $(event.target).width();
            topOffset = $(event.target).offset().top;
            if (left > right) {
              $(event.target).offset({
                left: left,
                top: topOffset
              });
            } else if (dragPosition !== 0) {
              $(event.target).offset({
                left: dragPosition,
                top: topOffset
              });
              dragPosition = 0;
            }
            this.updateHandleContainerValue(this.HandleContainer);
          }
        }).offset({
          left: handleContainerWidth - 10
        }).addClass('timeslider-width-draggable').appendTo(this.Handle);
        //Used to display the text to the user "EG. Breaktime/ Tea-time"
        this.HandleContainerTextLabel = $('<div>').text(handleText).addClass('timeslider-handle-textlabel').on('click', (e) => {
          var self, text, textLabel;
          if (this.Options.canEdit) {
            self = this;
            textLabel = $(e.target);
            text = textLabel.text().trim();
            textLabel.text('');
            $('<input>').addClass('timeslider-textlabel-input').val(text).appendTo(textLabel).focus().on('click', function(e) {
              e.stopPropagation();
            }).on('keypress', function(e) {
              //On Enter key press
              if (e.keyCode === 13) {
                if ($(e.target).val().trim().length > 0) {
                  textLabel.text($(e.target).val().trim());
                } else {
                  textLabel.html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                }
                $(e.target).remove();
                self.updateHandleContainerValue(self.HandleContainer);
              }
            //When the input is clicked away from
            }).on('focusout', (e) => {
              if ($(e.target).val().trim().length > 0) {
                textLabel.text($(e.target).val().trim());
              } else {
                textLabel.html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
              }
              $(e.target).remove();
              self.updateHandleContainerValue(self.HandleContainer);
            });
          }
        }).appendTo(this.HandleContainer);
        this.HandleContainerTextTime = $('<div>').appendTo(this.HandleContainer).addClass('timeslider-handle-texttime');
        this.HandleContainerTextTime.text(() => {
          var left, parentWidth, right;
          //Calculates the time range to be displayed to the user
          parentWidth = this.HandleContainerTextTime.closest('.timeslider-timeline').width();
          left = this.HandleContainerTextTime.parent('.timeslider-draggable').offset().left;
          right = this.HandleContainerTextTime.parent('.timeslider-draggable').offset().left + this.HandleContainerTextTime.parent('.timeslider-draggable').width();
          //return time range 
          return this.calculateTimeRange(parentWidth, left, right);
        });
        this.updateHandleContainerValue(this.HandleContainer);
        if (!this.Options.canEdit) {
          this.HandleContainer.draggable('disable');
          this.HandleWidthPuller.draggable('disable');
        }
      }

      calculateTimeRange(parentWidth, left, right) {
        var endHours, endMinutes, endRemainder, endTimeSplit, pixelsPerFiveMinutes, startHours, startMinutes, startRemainder, startTimeSplit, timeEnd, timeStart, totalMinutes;
        timeStart = '';
        timeEnd = '';
        startRemainder = 0;
        endRemainder = 0;
        startTimeSplit = this.Options.startTime.split(':');
        endTimeSplit = this.Options.endTime.split(':');
        totalMinutes = ((+endTimeSplit[0] * 60) + +endTimeSplit[1]) - (+startTimeSplit[0] * 60 + +startTimeSplit[1]);
        pixelsPerFiveMinutes = parentWidth / (totalMinutes / 5);
        startMinutes = (left - this.TimeLine.offset().left) / pixelsPerFiveMinutes;
        startHours = Math.floor(startMinutes / 12) + +startTimeSplit[0];
        if (startHours !== 24) {
          startRemainder = Math.floor(startMinutes % 12) * 5 + +startTimeSplit[1];
          if (startRemainder >= 60) {
            startHours += 1;
            startRemainder -= 60;
          }
        }
        endMinutes = (right - this.TimeLine.offset().left) / pixelsPerFiveMinutes;
        endHours = Math.floor(endMinutes / 12) + +startTimeSplit[0];
        if (endHours !== 24) {
          endRemainder = Math.floor(endMinutes % 12) * 5 + +startTimeSplit[1];
          if (endRemainder >= 60) {
            endHours += 1;
            endRemainder -= 60;
          }
        }
        if (startHours === endHours && startRemainder > endRemainder || startHours > endHours) {
          endHours = startHours;
          //Add 5 to the end time if the user attempts to drag the width lower than the handle eg 1:15 - 1:20 instead of 1:15 - 1:15
          endRemainder = +startRemainder + 5;
        }
        timeStart = startHours + ':' + ("00" + startRemainder).slice(-2);
        timeEnd = endHours + ':' + ("00" + endRemainder).slice(-2);
        return timeStart + '-' + timeEnd;
      }

      updateHandleContainerValue(handle) {
        var obj, objArray, timeRange;
        obj = {};
        obj.name = $(handle).children('.timeslider-handle-textlabel').text();
        timeRange = $(handle).children('.timeslider-handle-texttime').text().split('-');
        obj.startTime = timeRange[0];
        obj.endTime = timeRange[1];
        //Adds the object to the data-value attribute for the handle
        $(handle).data('value', obj);
        objArray = [];
        $('.timeslider-draggable').each(function() {
          objArray.push($(this).data('value'));
        });
        this.Element.val(JSON.stringify(objArray));
      }

      convertTimeToPixels(time) {
        var endTimeSplit, hours, minutes, pixelsPerFiveMinutes, positionFromLeft, startTimeSplit, testTimer, timeSplit, timelineWidth, totalMinutes;
        positionFromLeft = 0;
        timelineWidth = this.TimeLine.width();
        startTimeSplit = this.Options.startTime.split(':');
        endTimeSplit = this.Options.endTime.split(':');
        totalMinutes = ((+endTimeSplit[0] * 60) + +endTimeSplit[1]) - (+startTimeSplit[0] * 60 + +startTimeSplit[1]);
        pixelsPerFiveMinutes = timelineWidth / (totalMinutes / 5);
        timeSplit = time.split(':');
        hours = 0;
        minutes = 0;
        if (+timeSplit[1] < +startTimeSplit[1]) {
          hours = +timeSplit[0] - +startTimeSplit[0] - 1;
          minutes = 60 + +timeSplit[1] - +startTimeSplit[1];
          testTimer = hours + ':' + minutes;
        } else {
          hours = +timeSplit[0] - +startTimeSplit[0];
          minutes = +timeSplit[1] - +startTimeSplit[1];
        }
        positionFromLeft = (((hours * 60 + minutes) / 5) * pixelsPerFiveMinutes) + 0.1;
        return positionFromLeft;
      }

    };

    $(window).resize(function(event) {
      var newPixelsPerFiveMinutes, originalPixelsPerFiveMinutes, timelineNewWidth, timelineOriginalWidth;
      timelineOriginalWidth = $('.timeslider-draggable').parent('.timeslider-timeline').data('timelinewidth');
      timelineNewWidth = $('.timeslider-draggable').parent('.timeslider-timeline').width();
      originalPixelsPerFiveMinutes = timelineOriginalWidth / 288;
      newPixelsPerFiveMinutes = timelineNewWidth / 288;
      $('.timeslider-draggable').each(function(event) {
        var draggableWidthLeft, paddingLeft, value;
        paddingLeft = $(this).parent('.timeslider-timeline').offset().left;
        value = ($(this).offset().left - paddingLeft) / originalPixelsPerFiveMinutes;
        $(this).offset({
          left: (value * newPixelsPerFiveMinutes) + paddingLeft
        });
        draggableWidthLeft = $(this).offset().left + $(this).width() - 10;
        $(this).find('.timeslider-width-draggable').offset({
          left: draggableWidthLeft
        });
      });
      $('.timeslider-draggable').parent('.timeslider-timeline').data('timelinewidth', timelineNewWidth);
    });

    return TimeSliderHandle;

  }).call(this);

  RojobaCo.SvgPlonk = class SvgPlonk extends RojobaCo.BasePlugin {
    constructor(Element, Options) {
      var CircleToolMenuItemIcon, DragAndSelectTool, DrawToolMenuItemIcon, SquareToolMenuItemIcon, ToolboxHeader, appendTooltoContainer, canvasContainer, l, len, len1, m, newPlonk, plonk, plonkXCenter, plonkYCenter, plonks, randomIdString, ref, superArg, svgCanvas, tool, toolContainer, updateElementJson, url;
      superArg = function() {
        return this.Element;
      };
      super(superArg);
      this.Element = Element;
      this.Options = Options;
      //Creates a random string to be used for the ID of the canvas
      randomIdString = 'a' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      appendTooltoContainer = function(tool, toolContainer) {
        $.get({
          url: tool.url,
          dataType: 'xml',
          success: (data) => {
            var div;
            div = document.createElement('div');
            div.innerHTML = (new XMLSerializer).serializeToString(data.documentElement);
            toolContainer.removeClass('loading');
            toolContainer.append(div);
          }
        });
      };
      updateElementJson = () => {
        var plonks, plonksHolder;
        plonksHolder = [];
        plonks = Snap.selectAll('.svgplonk-plonk[data-plonkcanvasid=' + randomIdString + ']');
        plonks.forEach((plonk) => {
          var plonkHolder;
          plonkHolder = {};
          plonkHolder.name = plonk.attr('name');
          plonkHolder.geometry = {};
          if (plonk.hasClass('plonk-circle')) {
            plonkHolder.type = 'circle';
            plonkHolder.geometry.x = plonk.attr('cx');
            plonkHolder.geometry.y = plonk.attr('cy');
            plonkHolder.geometry.radius = plonk.attr('r');
          } else if (plonk.hasClass('plonk-line')) {
            plonkHolder.type = 'line';
            plonkHolder.geometry.x1 = plonk.attr('x1');
            plonkHolder.geometry.y1 = plonk.attr('y1');
            plonkHolder.geometry.x2 = plonk.attr('x2');
            plonkHolder.geometry.y2 = plonk.attr('y2');
          } else if (plonk.hasClass('plonk-square')) {
            plonkHolder.type = 'square';
            plonkHolder.geometry.x = plonk.attr('x');
            plonkHolder.geometry.y = plonk.attr('y');
            plonkHolder.geometry.width = plonk.attr('width');
            plonkHolder.geometry.height = plonk.attr('height');
            plonkHolder.geometry.rx = plonk.attr('rx');
          } else if (plonk.hasClass('plonk-svg-image')) {
            plonkHolder.type = 'svg-image';
            plonkHolder.geometry.x = plonk.attr('x');
            plonkHolder.geometry.y = plonk.attr('y');
            plonkHolder.geometry.width = plonk.attr('width');
            plonkHolder.geometry.height = plonk.attr('height');
            plonkHolder.geometry.rotate = plonk.attr('data-plonkrotate');
          }
          plonksHolder.push(plonkHolder);
        });
        console.log(JSON.stringify(plonksHolder));
        this.Element.val(JSON.stringify(plonksHolder));
      };
      //On move, on start and on end all relate to snap SVG's drag()
      // onMove = (dx, dy) =>
      //     if plonk.hasClass('plonk-svg-image') || plonk.hasClass('plonk-square')
      //         @attr
      //             'x': @ox + dx
      //             'y': @oy + dy

      //     else if plonk.hasClass 'plonk-circle'
      //         @attr
      //             'cx': @ox + dx
      //             'cy': @oy + dy
      //     else if plonk.hasClass 'plonk-line'
      //         @attr
      //             'x1': @ox1 + dx
      //             'x2': @ox2 + dx
      //             'y1': @oy1 + dy
      //             'y2': @oy2 + dy
      //     return

      // onStart = () ->
      //     if plonk.hasClass('plonk-svg-image') || plonk.hasClass('plonk-square')
      //         @ox = parseInt(@attr('x'))
      //         @oy = parseInt(@attr('y'))
      //     else if plonk.hasClass 'plonk-circle'
      //         @ox = parseInt(@attr('cx'))
      //         @oy = parseInt(@attr('cy'))
      //     else if plonk.hasClass 'plonk-line'
      //         @ox1 = parseInt(@attr('x1'))
      //         @ox2 = parseInt(@attr('x2'))
      //         @oy1 = parseInt(@attr('y1'))
      //         @oy2 = parseInt(@attr('y2'))
      //     return

      // onEnd = () ->
      //     #alert 'drag'
      //     updateElementJson()
      //     return
      this.SvgPlonkContainer = $('<div>').addClass('svgplonk-container row').insertAfter(this.Element);
      this.Toolbox = $('<div>').addClass('col-1 svgplonk-toolbox').appendTo(this.SvgPlonkContainer);
      canvasContainer = $('<div>').addClass('col-11 svgplonk-canvas-container').appendTo(this.SvgPlonkContainer);
      svgCanvas = $('<svg>').attr('id', randomIdString).attr('width', '100%').attr('height', '100%');
      canvasContainer.append(svgCanvas[0].outerHTML);
      this.SvgPlonkSnap = Snap('#' + randomIdString);
      if (this.Options.canvas) {
        this.SvgPlonkSnap.image(this.Options.canvas.url, 0, 0, '100%', '100%');
      }
      ToolboxHeader = $('<h2>').text('Toolbox').addClass('svgplonk-toolbox-header').appendTo(this.Toolbox);
      this.ToolboxRow = $('<div>').addClass('row svgplonk-toolcontainer-row').appendTo(this.Toolbox);
      this.DragAndSelectToolContainer = $('<div>').addClass('svgplonk-toolcontainer col-6 drag-toolcontainer').attr('data-toggle', 'tooltip').data('placement', 'right').attr('title', 'Select and Drag').appendTo(this.ToolboxRow);
      DragAndSelectTool = $('<i>').addClass('svgplonk-dragtool far fa-hand-pointer').appendTo(this.DragAndSelectToolContainer);
      this.DropDownLineToolContainer = $('<div>').addClass('svgplonk-toolcontainer col-6 line-toolcontainer btn-group dropright').attr('data-selection', 'line').appendTo(this.ToolboxRow);
      this.LineToolButton = $('<button>').attr('type', 'button').addClass('btn dropdown-toggle svgplonk-dropdown-button').attr('data-toggle', 'dropdown').attr('aria-haspopup', 'true').attr('aria-expanded', 'false').appendTo(this.DropDownLineToolContainer);
      this.LineToolIcon = $('<i>').addClass('svgplonk-linetool');
      
      //Used when the page is first loaded
      this.LineTool = $('<span>').text('/').css('font-size', '32px');
      this.LineTool.appendTo(this.LineToolButton);
      //Drop down menu for draw
      this.LineToolDropDownMenu = $('<div>').addClass('dropdown-menu').appendTo(this.DropDownLineToolContainer);
      
      //Contains the columns of the draw items
      this.LineToolDropDownMenuRow = $('<div>').addClass('row').appendTo(this.LineToolDropDownMenu);
      
      //For creating lines
      this.LineToolMenuItem = $('<div>').addClass('col-6 text-center').on('click', (e) => {
        this.LineToolButton.empty();
        this.LineTool.appendTo(this.LineToolButton);
        this.DropDownLineToolContainer.attr('data-selection', 'line');
      }).appendTo(this.LineToolDropDownMenuRow);
      DrawToolMenuItemIcon = $('<span>').text('/').css('font-size', '32px').appendTo(this.LineToolMenuItem);
      //For drawing a square
      this.SquareToolMenuItem = $('<div>').addClass('col-6').on('click', (e) => {
        this.LineToolButton.empty();
        this.LineToolIcon.appendTo(this.LineToolButton);
        this.LineToolIcon.addClass('svgplonk-linetool far fa-square');
        this.DropDownLineToolContainer.attr('data-selection', 'square');
      }).appendTo(this.LineToolDropDownMenuRow);
      SquareToolMenuItemIcon = $('<i>').addClass('far fa-square svgplonk-dropdowntool-icon').appendTo(this.SquareToolMenuItem);
      
      //For drawing a circle
      this.CircleToolMenuItem = $('<div>').addClass('col-6').on('click', (e) => {
        this.LineToolButton.empty();
        this.LineToolIcon.appendTo(this.LineToolButton);
        this.LineToolIcon.addClass('svgplonk-linetool far fa-circle');
        this.DropDownLineToolContainer.attr('data-selection', 'circle');
      }).appendTo(this.LineToolDropDownMenuRow);
      CircleToolMenuItemIcon = $('<i>').addClass('far fa-circle svgplonk-dropdowntool-icon').appendTo(this.CircleToolMenuItem);
      if (this.Options.toolbox) {
        ref = this.Options.toolbox;
        for (l = 0, len = ref.length; l < len; l++) {
          tool = ref[l];
          toolContainer = $('<div>').addClass('svgplonk-toolcontainer col-6 loading').attr('name', tool.name).attr('data-toggle', 'tooltip').data('placement', 'right').attr('title', tool.title).data('url', tool.url).appendTo(this.ToolboxRow);
          appendTooltoContainer(tool, toolContainer);
        }
      }
      
      //#Changes which tool has been selected and whether plonks can be dragged/resized or not
      $('.svgplonk-toolcontainer').on('click', (evt) => {
        var plonks;
        $('.svgplonk-toolcontainer').removeClass('selected');
        $(evt.target).closest('.svgplonk-toolcontainer').addClass('selected');
        //Determines whether the tool selected was the drag tool or not. If it was selected each plonk is given its drag() and event handles for mousedown/up
        //if false removes the ability to drag the plonks and is instead in "create" plonks mode
        if ($(evt.target).closest('.svgplonk-toolcontainer').hasClass('drag-toolcontainer')) {
          $('.svgplonk-plonk').addClass('can-drag');
          plonks = Snap.selectAll('.svgplonk-plonk');
          //Loops through the array of plonks, adding the mouse click/drag event handlers and giving each plonk its ability to be dragged
          plonks.forEach(((plonk) => {
            var mouseXpos, mouseYpos;
            mouseXpos = 0;
            mouseYpos = 0;
            
            //On mouse down stores the current position of the mouse click for use later in determining whether a click or drag occured.
            plonk.unmousedown().mousedown(function(evt) {
              mouseXpos = evt.pageX;
              mouseYpos = evt.pageY;
            });
            plonk.unmouseup().mouseup((evt) => {
              var SnapCanvas, handle0xCord, handle0yCord, handle1xCord, handle1yCord, handles, plonkBoundingBox, transformCords;
              //Determines whether a click or drag has occured.
              //Used to add/remove the handles that are used for scaling.
              if (mouseXpos === evt.pageX && mouseYpos === evt.pageY) {
                //If handles exist, removes the handles and gives drag back to the plonk that was being scaled
                if ($('.svgplonk-draghandle').length > 0) {
                  $('.svgplonk-draghandle').remove();
                  $('.rotate-plonk').remove();
                  $('.remove-plonk').remove();
                  Snap.select('.scaleable-plonk').removeClass('scaleable-plonk').drag(function(dx, dy) {
                    if (plonk.hasClass('plonk-svg-image')) {
                      if (plonk.attr('data-plonkrotate') === '0') {
                        this.attr({
                          'x': this.ox + dx,
                          'y': this.oy + dy
                        });
                      } else if (plonk.attr('data-plonkrotate') === '90') {
                        this.attr({
                          'x': this.ox + dy,
                          'y': this.oy - dx
                        });
                      } else if (plonk.attr('data-plonkrotate') === '180') {
                        this.attr({
                          'x': this.ox - dx,
                          'y': this.oy - dy
                        });
                      } else {
                        this.attr({
                          'x': this.ox - dy,
                          'y': this.oy + dx
                        });
                      }
                    } else if (plonk.hasClass('plonk-square')) {
                      this.attr({
                        'x': this.ox + dx,
                        'y': this.oy + dy
                      });
                    } else if (plonk.hasClass('plonk-circle')) {
                      this.attr({
                        'cx': this.ox + dx,
                        'cy': this.oy + dy
                      });
                    } else if (plonk.hasClass('plonk-line')) {
                      this.attr({
                        'x1': this.ox1 + dx,
                        'x2': this.ox2 + dx,
                        'y1': this.oy1 + dy,
                        'y2': this.oy2 + dy
                      });
                    }
                  //On Start
                  }, function() {
                    if (plonk.hasClass('plonk-svg-image') || plonk.hasClass('plonk-square')) {
                      this.ox = parseInt(this.attr('x'));
                      this.oy = parseInt(this.attr('y'));
                    } else if (plonk.hasClass('plonk-circle')) {
                      this.ox = parseInt(this.attr('cx'));
                      this.oy = parseInt(this.attr('cy'));
                    } else if (plonk.hasClass('plonk-line')) {
                      this.ox1 = parseInt(this.attr('x1'));
                      this.ox2 = parseInt(this.attr('x2'));
                      this.oy1 = parseInt(this.attr('y1'));
                      this.oy2 = parseInt(this.attr('y2'));
                    }
                  //On drag end
                  }, function() {
                    //alert 'drag'
                    updateElementJson();
                  });
                } else {
                  plonk.addClass('scaleable-plonk');
                  //Stops the ability to drag the plonk.
                  plonk.undrag();
                  plonkBoundingBox = plonk.getBBox();
                  plonkBoundingBox.x;
                  handles = [];
                  if (plonk.hasClass('plonk-line')) {
                    transformCords = plonk.attr('transform').global.replace('t', '').split(',');
                    if (transformCords[0] !== "") {
                      // plonk.attr 'transform', ''
                      handle0xCord = +plonk.attr('x1') + +transformCords[0];
                      handle1xCord = +plonk.attr('x2') + +transformCords[0];
                      handle0yCord = +plonk.attr('y1') + +transformCords[1];
                      handle1yCord = +plonk.attr('y2') + +transformCords[1];
                      plonk.attr({
                        'x1': handle0xCord,
                        'x2': handle1xCord,
                        'y1': handle0yCord,
                        'y2': handle1yCord
                      });
                    } else {
                      handle0xCord = +plonk.attr('x1');
                      handle1xCord = +plonk.attr('x2');
                      handle0yCord = +plonk.attr('y1');
                      handle1yCord = +plonk.attr('y2');
                      plonk.attr({
                        'x1': handle0xCord,
                        'x2': handle1xCord,
                        'y1': handle0yCord,
                        'y2': handle1yCord
                      });
                    }
                  } else {
                    handle0xCord = plonkBoundingBox.x;
                    handle0yCord = plonkBoundingBox.y;
                    handle1xCord = plonkBoundingBox.x + plonkBoundingBox.width;
                    handle1yCord = plonkBoundingBox.y + plonkBoundingBox.height;
                  }
                  SnapCanvas = Snap('#' + plonk.attr('data-plonkcanvasid'));
                  //Top left drag position
                  //On Move
                  handles[0] = SnapCanvas.circle(handle0xCord, handle0yCord, 5).addClass('svgplonk-draghandle').attr('data-handleposition', 'top-left').drag(function(dx, dy) {
                    var bottomRightHandleBBox, newWidth;
                    plonk = Snap.select('.scaleable-plonk');
                    bottomRightHandleBBox = Snap.select('.svgplonk-draghandle[data-handleposition=bottom-right]').getBBox();
                    newWidth = bottomRightHandleBBox.cx - this.getBBox().cx;
                    if (plonk.hasClass('plonk-circle')) {
                      plonk.attr({
                        'r': newWidth / 2,
                        'cx': this.getBBox().cx + plonk.getBBox().r1,
                        'cy': this.getBBox().cy + plonk.getBBox().r1
                      });
                      // 'transform': ''
                      if (this.ox + (dy + dx) / 2 < bottomRightHandleBBox.cx) {
                        this.attr({
                          'cx': this.ox + (dy + dx) / 2,
                          'cy': this.oy + (dy + dx) / 2
                        });
                      }
                    } else if (plonk.hasClass('plonk-line')) {
                      plonk.attr({
                        'x1': this.getBBox().cx,
                        'y1': this.getBBox().cy,
                        'x2': bottomRightHandleBBox.cx,
                        'y2': bottomRightHandleBBox.cy
                      });
                      // 'transform': ''
                      this.attr({
                        'cx': this.ox + dx,
                        'cy': this.oy + dy
                      });
                    } else {
                      //Makes the plonk stick to the top left handle
                      //Since the BB's are all squares, width = height
                      plonk.attr({
                        'x': this.ox + (dy + dx) / 2,
                        'y': this.oy + (dy + dx) / 2,
                        'width': newWidth,
                        'height': newWidth
                      });
                      // 'transform': ''
                      if (this.ox + (dy + dx) / 2 < bottomRightHandleBBox.cx) {
                        this.attr({
                          'cx': this.ox + (dy + dx) / 2,
                          'cy': this.oy + (dy + dx) / 2
                        });
                      }
                    }
                    $('.remove-plonk').attr({
                      'x': bottomRightHandleBBox.cx - 5,
                      'y': this.getBBox().cy - 5
                    });
                  //On Start
                  }, function() {
                    this.ox = parseInt(this.attr('cx'));
                    this.oy = parseInt(this.attr('cy'));
                  //On drag end
                  }, function() {
                    this.ox = parseInt(this.attr('cx'));
                    this.oy = parseInt(this.attr('cy'));
                    updateElementJson();
                  });
                  //Bottom right drag position
                  //On Move
                  handles[1] = SnapCanvas.circle(handle1xCord, handle1yCord, 5).addClass('svgplonk-draghandle').attr('data-handleposition', 'bottom-right').drag(function(dx, dy) {
                    var newWidth, topLeftHandleBBox;
                    plonk = Snap.select('.scaleable-plonk');
                    //Since we are only using squared Bound boxes, width = height so can use width for both.
                    topLeftHandleBBox = Snap.select('.svgplonk-draghandle[data-handleposition=top-left]').getBBox();
                    newWidth = this.getBBox().cx - topLeftHandleBBox.cx;
                    //Circles scale using radius, not height/width
                    if (plonk.hasClass('plonk-circle')) {
                      plonk.attr({
                        'r': newWidth / 2,
                        'cx': topLeftHandleBBox.cx + plonk.getBBox().r1,
                        'cy': topLeftHandleBBox.cy + plonk.getBBox().r1
                      });
                      // 'transform': ''
                      if (this.ox + (dy + dx) / 2 > topLeftHandleBBox.cx) {
                        this.attr({
                          'cx': this.ox + (dy + dx) / 2,
                          'cy': this.oy + (dy + dx) / 2
                        });
                      }
                    } else if (plonk.hasClass('plonk-line')) {
                      plonk.attr({
                        'x1': topLeftHandleBBox.cx,
                        'y1': topLeftHandleBBox.cy,
                        'x2': this.getBBox().cx,
                        'y2': this.getBBox().cy
                      });
                      // 'transform': ''
                      this.attr({
                        'cx': this.ox + dx,
                        'cy': this.oy + dy
                      });
                    } else {
                      // if plonk.attr('data-plonkrotate') == '0'
                      plonk.attr('width', newWidth);
                      plonk.attr('height', newWidth);
                      if (this.ox + (dy + dx) / 2 > topLeftHandleBBox.cx) {
                        this.attr({
                          'cx': this.ox + (dy + dx) / 2,
                          'cy': this.oy + (dy + dx) / 2
                        });
                      }
                    }
                    // else if plonk.attr('data-plonkrotate') == '90'

                    // else if plonk.attr('data-plonkrotate')
                    // else
                    $('.remove-plonk').attr({
                      'x': this.getBBox().cx - 5,
                      'y': topLeftHandleBBox.cy - 5
                    });
                  //On Start
                  }, function() {
                    this.ox = parseInt(this.attr('cx'));
                    this.oy = parseInt(this.attr('cy'));
                  //On drag end
                  }, function() {
                    this.ox = parseInt(this.attr('cx'));
                    this.oy = parseInt(this.attr('cy'));
                    updateElementJson();
                  });
                  if (plonk.hasClass('plonk-line')) {
                    handles[0].attr('style', 'cursor:move');
                    handles[1].attr('style', 'cursor:move');
                  } else {
                    handles[0].attr('style', 'cursor:nw-resize');
                    handles[1].attr('style', 'cursor:se-resize');
                  }
                  //Used to remove the plonk
                  //Change these to be files on the disk instead
                  SnapCanvas.image('https://image.flaticon.com/icons/svg/1632/1632708.svg', plonkBoundingBox.x + plonkBoundingBox.width - 5, plonkBoundingBox.y - 5, 10, 10).addClass('remove-plonk').attr('style', 'cursor:pointer').click(function(evt) {
                    $('.scaleable-plonk').remove();
                    $('.svgplonk-draghandle').remove();
                    $('.rotate-plonk').remove();
                    $('.remove-plonk').remove();
                    return updateElementJson();
                  });
                  if (plonk.hasClass('plonk-svg-image')) {
                    SnapCanvas.image('https://www.svgrepo.com/show/61328/rotate-left-circular-arrow-interface-symbol.svg', plonkBoundingBox.x + (plonkBoundingBox.width / 2) - 7.5, plonkBoundingBox.y - 15, 15, 15).addClass('rotate-plonk').attr('style', 'cursor:pointer').click(function(evt) {
                      var plonkXCenter, plonkYCenter;
                      if (+plonk.attr('data-plonkrotate') + 90 >= 360) {
                        plonk.attr('data-plonkrotate', 0);
                      } else {
                        plonk.attr('data-plonkrotate', +plonk.attr('data-plonkrotate') + 90);
                      }
                      Snap.select('.svgplonk-draghandle[data-handleposition=top-left]').transform('r90');
                      plonkXCenter = +plonkBoundingBox.x + +plonkBoundingBox.width / 2;
                      plonkYCenter = +plonkBoundingBox.y + +plonkBoundingBox.height / 2;
                      // plonk.attr 'transform', ''
                      plonk.transform('r' + plonk.attr('data-plonkrotate') + ',' + plonkXCenter + ',' + plonkYCenter);
                    });
                  }
                }
              }
            });
            plonk.drag(function(dx, dy) {
              if (plonk.hasClass('plonk-svg-image')) {
                if (plonk.attr('data-plonkrotate') === '0') {
                  this.attr({
                    'x': this.ox + dx,
                    'y': this.oy + dy
                  });
                } else if (plonk.attr('data-plonkrotate') === '90') {
                  this.attr({
                    'x': this.ox + dy,
                    'y': this.oy - dx
                  });
                } else if (plonk.attr('data-plonkrotate') === '180') {
                  this.attr({
                    'x': this.ox - dx,
                    'y': this.oy - dy
                  });
                } else {
                  this.attr({
                    'x': this.ox - dy,
                    'y': this.oy + dx
                  });
                }
              } else if (plonk.hasClass('plonk-square')) {
                this.attr({
                  'x': this.ox + dx,
                  'y': this.oy + dy
                });
              } else if (plonk.hasClass('plonk-circle')) {
                this.attr({
                  'cx': this.ox + dx,
                  'cy': this.oy + dy
                });
              } else if (plonk.hasClass('plonk-line')) {
                this.attr({
                  'x1': this.ox1 + dx,
                  'x2': this.ox2 + dx,
                  'y1': this.oy1 + dy,
                  'y2': this.oy2 + dy
                });
              }
            //On Start
            }, function() {
              if (plonk.hasClass('plonk-svg-image') || plonk.hasClass('plonk-square')) {
                this.ox = parseInt(this.attr('x'));
                this.oy = parseInt(this.attr('y'));
              } else if (plonk.hasClass('plonk-circle')) {
                this.ox = parseInt(this.attr('cx'));
                this.oy = parseInt(this.attr('cy'));
              } else if (plonk.hasClass('plonk-line')) {
                this.ox1 = parseInt(this.attr('x1'));
                this.ox2 = parseInt(this.attr('x2'));
                this.oy1 = parseInt(this.attr('y1'));
                this.oy2 = parseInt(this.attr('y2'));
              }
            //On drag end
            }, function() {
              updateElementJson();
            });
          }));
        } else {
          $('.svgplonk-plonk').removeClass('can-drag');
          //Removes the drag handles
          $('.svgplonk-draghandle').remove();
          $('.rotate-plonk').remove();
          plonks = Snap.selectAll('.svgplonk-plonk');
          plonks.forEach((function(plonk) {
            plonk.undrag();
            plonk.unmouseup();
            plonk.unmousedown();
          }));
        }
      });
      //Ajax call to get existing plonks from DB
      if (this.Options.url) {
        $.ajax({
          type: 'GET',
          url: this.Options.url,
          dataType: 'json',
          error: (jqXHR, textStatus, errorThrown) => {
            alert('There was an error when connecting to the database');
            return alert(errorThrown);
          }
        }).done((data) => {
          var len1, m, newPlonk, plonk, plonkXCenter, plonkYCenter, plonks, url;
          plonks = data;
          for (m = 0, len1 = plonks.length; m < len1; m++) {
            plonk = plonks[m];
            if (plonk.type === "svg-image") {
              //For squares width = height
              url = $('.svgplonk-toolcontainer[name=' + plonk.name + ']').data('url');
              newPlonk = this.SvgPlonkSnap.image(url, plonk.geometry.x, plonk.geometry.y, plonk.geometry.width, plonk.geometry.width);
              newPlonk.addClass('svgplonk-plonk plonk-svg-image');
              if (plonk.geometry.rotate > 0) {
                plonkXCenter = +plonk.geometry.x + +plonk.geometry.width / 2;
                plonkYCenter = +plonk.geometry.y + +plonk.geometry.height / 2;
                newPlonk.transform('r' + plonk.geometry.rotate + ',' + plonkXCenter + ',' + plonkYCenter);
              }
              newPlonk.attr({
                name: plonk.name,
                'data-plonkrotate': plonk.geometry.rotate,
                'data-plonkcanvasid': randomIdString
              });
            } else if (plonk.type === "circle") {
              //Circles use CX/CY and grow from the center of the circle by increasing its radius
              newPlonk = this.SvgPlonkSnap.circle(plonk.geometry.x, plonk.geometry.y, plonk.geometry.radius);
              newPlonk.addClass('svgplonk-plonk plonk-circle');
              newPlonk.attr({
                fill: 'none',
                stroke: '#000',
                strokeWidth: 5,
                name: plonk.name,
                'data-plonkcanvasid': randomIdString
              });
            } else if (plonk.type === "line") {
              //Lines use four co-ordinates(1 pair, x1/y1, x2/y2) to determine the start and end point of the line
              newPlonk = this.SvgPlonkSnap.line(plonk.geometry.x1, plonk.geometry.y1, plonk.geometry.x2, plonk.geometry.y2);
              newPlonk.addClass('svgplonk-plonk plonk-line');
              newPlonk.attr({
                stroke: '#000',
                strokeWidth: 5,
                name: plonk.name,
                'data-plonkcanvasid': randomIdString
              });
            } else if (plonk.type === 'square') {
              newPlonk = this.SvgPlonkSnap.rect(plonk.geometry.x, plonk.geometry.y, plonk.geometry.width, plonk.geometry.height, plonk.geometry.rx, plonk.geometry.rx);
              newPlonk.addClass('svgplonk-plonk plonk-square');
              newPlonk.attr({
                fill: 'none',
                stroke: '#000',
                strokeWidth: 5,
                name: plonk.name,
                'data-plonkcanvasid': randomIdString
              });
            }
          }
          updateElementJson();
        });
      }
      //If @Element has .val places the plonks on the canvas
      if (this.Element.val().trim().length > 0) {
        plonks = JSON.parse(this.Element.val());
        for (m = 0, len1 = plonks.length; m < len1; m++) {
          plonk = plonks[m];
          if (plonk.type === "svg-image") {
            //For squares width = height
            url = $('.svgplonk-toolcontainer[name=' + plonk.name + ']').data('url');
            newPlonk = this.SvgPlonkSnap.image(url, plonk.geometry.x, plonk.geometry.y, plonk.geometry.width, plonk.geometry.width);
            if (plonk.geometry.rotate > 0) {
              plonkXCenter = +plonk.geometry.x + +plonk.geometry.width / 2;
              plonkYCenter = +plonk.geometry.y + +plonk.geometry.height / 2;
              newPlonk.transform('r' + plonk.geometry.rotate + ',' + plonkXCenter + ',' + plonkYCenter);
            }
            newPlonk.addClass('svgplonk-plonk plonk-svg-image');
            newPlonk.attr({
              name: plonk.name,
              'data-plonkrotate': plonk.geometry.rotate,
              'data-plonkcanvasid': randomIdString
            });
          } else if (plonk.type === "circle") {
            //Circles use CX/CY and grow from the center of the circle by increasing its radius
            newPlonk = this.SvgPlonkSnap.circle(plonk.geometry.x, plonk.geometry.y, plonk.geometry.radius);
            newPlonk.addClass('svgplonk-plonk plonk-circle');
            newPlonk.attr({
              fill: 'none',
              stroke: '#000',
              strokeWidth: 5,
              name: plonk.name,
              'data-plonkcanvasid': randomIdString
            });
          } else if (plonk.type === "line") {
            //Lines use four co-ordinates(1 pair, x1/y1, x2/y2) to determine the start and end point of the line
            newPlonk = this.SvgPlonkSnap.line(plonk.geometry.x1, plonk.geometry.y1, plonk.geometry.x2, plonk.geometry.y2);
            newPlonk.addClass('svgplonk-plonk plonk-line');
            newPlonk.attr({
              stroke: '#000',
              strokeWidth: 5,
              name: plonk.name,
              'data-plonkcanvasid': randomIdString
            });
          } else if (plonk.type === 'square') {
            newPlonk = this.SvgPlonkSnap.rect(plonk.geometry.x, plonk.geometry.y, plonk.geometry.width, plonk.geometry.height, plonk.geometry.rx, plonk.geometry.rx);
            newPlonk.addClass('svgplonk-plonk plonk-square');
            newPlonk.attr({
              fill: 'none',
              stroke: '#000',
              strokeWidth: 5,
              name: plonk.name,
              'data-plonkcanvasid': randomIdString
            });
          }
        }
      }
      //Moves the @Element
      this.Element.appendTo(this.SvgPlonkContainer);
      
      //On click of the svg canvas
      this.SvgPlonkSnap.click(function(evt) {
        var lineStartCircleRadius, lineStartPoint, lineStartPointBBox, plonkHeight, plonkWidth, selectedTool;
        //Can move this out later
        plonkWidth = 50;
        plonkHeight = 50;
        lineStartCircleRadius = 5;
        if (($('.svgplonk-toolcontainer').hasClass('selected')) && (!$('.drag-toolcontainer').hasClass('selected')) && (!$('.line-toolcontainer').hasClass('selected'))) {
          $('.scaleable-plonk').removeClass('scaleable-plonk');
          selectedTool = $('.svgplonk-toolcontainer.selected');
          newPlonk = this.image(selectedTool.data('url'), evt.offsetX - plonkWidth / 2, evt.offsetY - plonkHeight / 2, plonkWidth, plonkHeight);
          newPlonk.addClass('svgplonk-plonk plonk-svg-image');
          newPlonk.attr({
            name: selectedTool.attr('name'),
            'data-plonkcanvasid': randomIdString,
            'data-plonkrotate': 0
          });
        } else if ($('.line-toolcontainer').hasClass('selected')) {
          if ($('.line-toolcontainer').attr('data-selection') === 'circle') {
            $('.scaleable-plonk').removeClass('scaleable-plonk');
            //Circles dont seem to need to be centered like other images/shapes.
            //Halfing plonkWidth as it uses radius not diameter
            newPlonk = this.circle(evt.offsetX, evt.offsetY, plonkWidth / 2);
            newPlonk.addClass('svgplonk-plonk plonk-circle');
            newPlonk.attr({
              fill: 'none',
              stroke: '#000',
              strokeWidth: 5,
              name: 'circle',
              'data-plonkcanvasid': randomIdString
            });
          } else if ($('.line-toolcontainer').attr('data-selection') === 'square') {
            $('.scaleable-plonk').removeClass('scaleable-plonk');
            newPlonk = this.rect(evt.offsetX - plonkWidth / 2, evt.offsetY - plonkHeight / 2, plonkWidth, plonkHeight, 1, 1);
            newPlonk.addClass('svgplonk-plonk plonk-square');
            newPlonk.attr({
              fill: 'none',
              stroke: '#000',
              strokeWidth: 5,
              name: 'square',
              'data-plonkcanvasid': randomIdString
            });
          } else if ($('.line-toolcontainer').attr('data-selection') === 'line') {
            $('.scaleable-plonk').removeClass('scaleable-plonk');
            lineStartPoint = Snap.select('.svgplonk-line-startpoint');
            if (lineStartPoint) {
              lineStartPointBBox = lineStartPoint.getBBox();
              newPlonk = this.line(lineStartPointBBox.x + lineStartCircleRadius, lineStartPointBBox.y + lineStartCircleRadius, evt.offsetX, evt.offsetY);
              newPlonk.addClass('svgplonk-plonk plonk-line');
              newPlonk.attr({
                stroke: '#000',
                strokeWidth: 5,
                name: 'line',
                'data-plonkcanvasid': randomIdString
              });
              $('.svgplonk-line-startpoint').remove();
            } else {
              newPlonk = this.circle(evt.offsetX, evt.offsetY, lineStartCircleRadius);
              newPlonk.addClass('svgplonk-line-startpoint');
            }
          }
        }
        updateElementJson();
      });
      return;
    }

  };

  RojobaCo.CalendarGrid = class CalendarGrid extends RojobaCo.BasePlugin {
    constructor(Element, Options) {
      var superArg;
      superArg = function() {
        return this.Element;
      };
      super(superArg);
      this.Element = Element;
      this.Options = Options;
      this.Data = this.Options.data;
      this.Month = moment(moment().format('YYYY-MM') + '-01');
      this.Container = $('<div>').addClass('calendargrid').insertAfter(this.Element);
      this.loadData(this.Data);
      return;
    }

    setOptions(newOptions) {
      this.Options = $.extend(true, {}, this.Options, newOptions);
    }

    loadData(data) {
      var day, days, daysOfTheWeek, endDate, hasProperty, heading, i, input, k, key, l, len, prevMonthDays, ref, span, startDate, startDayOfWeek, tbody, td, thead, title, tmpDate, tr, v, value;
      this.Container.empty();
      this.Data = data;
      if (!this.Data) {
        this.Data = {};
      }
      hasProperty = false;
      ref = this.Data;
      for (k in ref) {
        v = ref[k];
        hasProperty = true;
      }
      if (hasProperty) {
        this.Element.val('1');
      } else {
        this.Element.val('');
      }
      if (this.Options.month) {
        this.Month = moment(this.Options.month + '-01');
      }
      heading = $('<div>').addClass('row').appendTo(this.Container);
      startDate = moment().month(this.Month.month() - 1).date(25);
      endDate = moment().month(this.Month.month()).endOf('month');
      daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      startDayOfWeek = parseInt(startDate.day());
      days = {};
      prevMonthDays = startDayOfWeek - 1;
      if (startDayOfWeek === 0) {
        prevMonthDays = 6;
      }
      if (prevMonthDays > 0) {
        tmpDate = startDate.clone();
        tmpDate.subtract(prevMonthDays, 'days');
        while (tmpDate.isBefore(startDate)) {
          days[tmpDate.format('YYYY-MM-DD')] = -1;
          tmpDate.add(1, 'days');
        }
      }
      while (startDate.isBefore(endDate)) {
        days[startDate.format('YYYY-MM-DD')] = 0;
        startDate.add(1, 'days');
      }
      this.TableElement = $('<table>').addClass('table calendargrid').appendTo(this.Container);
      thead = $('<thead>').appendTo(this.TableElement);
      tr = $('<tr>').appendTo(thead);
      for (l = 0, len = daysOfTheWeek.length; l < len; l++) {
        day = daysOfTheWeek[l];
        $('<th>').attr('scope', 'col').text(day).appendTo(tr);
      }
      tbody = $('<tbody>').appendTo(this.TableElement);
      i = 0;
      for (key in days) {
        value = days[key];
        if ((i % 7) === 0) {
          tr = $('<tr>').appendTo(tbody);
        }
        td = $('<td>').appendTo(tr);
        if (value !== -1) {
          title = $('<span>').addClass('calendargrid-date').html(moment(key).format("DD MMM")).appendTo(td);
          if (this.Options.readOnly) {
            span = $('<span>').addClass('calendargrid-input-readonly').appendTo(td);
            if (this.Data[key] && this.Data[key] !== 0) {
              span.text(this.Data[key]);
            } else {
              span.html('&nbsp;');
            }
          } else {
            input = $('<input>').attr('type', 'text').addClass('form-control calendargrid-input').data('date', key).on('change', (e) => {
              var date, ref1;
              date = $(e.currentTarget).data('date');
              value = parseFloat($(e.currentTarget).autoNumeric('get'));
              if (value === 0) {
                delete this.Data[date];
              } else {
                this.Data[date] = value;
              }
              hasProperty = false;
              ref1 = this.Data;
              for (k in ref1) {
                v = ref1[k];
                hasProperty = true;
              }
              if (hasProperty) {
                this.Element.val('1');
              } else {
                this.Element.val('');
              }
              if (this.Options.afterDayEdit) {
                this.Options.afterDayEdit(date, value);
              }
            }).appendTo(td);
            if (moment(key).isBefore(this.Month)) {
              input.addClass('calendargrid-input-prev-month');
            }
            input.autoNumeric('init', {
              aSep: '',
              mDec: 2,
              aPad: false
            });
            if (this.Options.minValue) {
              input.autoNumeric('update', {
                vMin: this.Options.minValue.toString()
              });
            }
            if (this.Options.maxValue) {
              input.autoNumeric('update', {
                vMax: this.Options.maxValue.toString()
              });
            }
            if (this.Data[key] && this.Data[key] !== 0) {
              input.val(this.Data[key]);
            }
          }
        }
        i++;
      }
    }

    getData() {
      return this.Data;
    }

  };

  RojobaCo.Router = {
    Routes: {},
    Data: {}
  };

  RojobaCo.Router.setData = function(action, callback) {
    RojobaCo.Router.Data[action] = callback;
  };

  RojobaCo.Router.register = function(action, controller) {
    RojobaCo.Router.Routes[action] = controller;
  };

  RojobaCo.Router.start = function(options) {
    $(window).on('hashchange', function() {
      var action, hash, id, parts, route;
      hash = window.location.hash;
      parts = hash.slice(1).split('/');
      action = parts[0];
      id = null;
      if (parts.length > 1) {
        id = parts[1];
      }
      if (action === '') {
        action = '/';
      }
      if (action === '/' && options.view) {
        action = options.view;
      }
      route = {
        action: action,
        id: id,
        data: null
      };
      if (options.onLoad) {
        if (RojobaCo.Router.Data[action]) {
          RojobaCo.Router.Data[action](route, function(data) {
            route.data = data;
            options.onLoad(route);
            RojobaCo.Router.Routes[action](route);
          });
        } else {
          options.onLoad(route);
          RojobaCo.Router.Routes[action](route);
        }
      } else {
        RojobaCo.Router.Routes[action](route);
      }
    });
    $(window).trigger('hashchange');
  };

  RojobaCo.DropDown = class DropDown extends RojobaCo.BasePlugin {
    constructor(Element, Options) {
      var buttonGroup, superArg;
      superArg = function() {
        return this.Element;
      };
      super(superArg);
      this.Element = Element;
      this.Options = Options;
      buttonGroup = $('<div>').addClass('btn-group b4-dropdown').insertAfter(this.Element);
      this.Button = $('<button>').addClass('btn dropdown-toggle').attr('type', 'button').attr('data-toggle', 'dropdown').text('Please select').appendTo(buttonGroup);
      this.ClearIcon = $('<i>').addClass("la la-remove clear-icon").hide().on('click', (e) => {
        if ($('option:disabled', this.Element).length > 0 && $('option:disabled', this.Element).text().length > 0) {
          this.Button.text($('option:disabled', this.Element).text());
        } else {
          this.Button.text('Please select');
        }
        this.Element.val('');
        this.ClearIcon.hide();
        if (this.Options.onOptionSelect) {
          this.Options.onOptionSelect('');
        }
        e.stopPropagation();
      }).appendTo(buttonGroup);
      if ($('option:disabled', this.Element).length > 0 && $('option:disabled', this.Element).text().length > 0) {
        this.Button.text($('option:disabled', this.Element).text());
      }
      this.Menu = $('<div>').addClass('dropdown-menu').appendTo(buttonGroup);
      this.buildMenuItems();
      this.Element.hide();
      return;
    }

    // Public methods
    destroy() {
      this.Element.removeData('DropDown');
    }

    setOptions(newOptions) {
      this.Options = $.extend(true, {}, this.Options, newOptions);
    }

    setData(data) {
      var item, l, len;
      if (data && data.length > 0) {
        $('option', this.Element).not(':disabled').remove();
        this.Menu.empty();
        for (l = 0, len = data.length; l < len; l++) {
          item = data[l];
          $('<option>').attr('value', item.value).text(item.text).appendTo(this.Element);
        }
        this.buildMenuItems();
      }
    }

    setDefault(item) {
      this.Button.text(item.text);
      this.Element.val(item.value);
    }

    buildMenuItems() {
      var itemSelect;
      itemSelect = (option) => {
        this.Element.val(option.val());
        if (this.Options.menuMode) {
          if ($('option:disabled', this.Element).length > 0 && $('option:disabled', this.Element).text().length > 0) {
            this.Button.text($('option:disabled', this.Element).text());
          } else {
            this.Button.text('Please select');
          }
        } else {
          this.Button.text(option.text());
          this.ClearIcon.show();
        }
        if (this.Options.onOptionSelect) {
          this.Options.onOptionSelect(option.val());
        }
      };
      $('option', this.Element).each((index, element) => {
        var option;
        if (!$(element).attr('hidden')) {
          option = $(element);
          $('<a>').addClass('dropdown-item').attr('href', 'javascript:void(0);').text(option.text()).on('click', function(e) {
            return itemSelect(option);
          }).appendTo(this.Menu);
        }
      });
    }

    clear() {
      this.Element.val('');
      this.Button.text('Please select');
    }

  };

  $.fn.searchselect = function(options, params) {
    var args, elements, methodCalled, value;
    args = [];
    value = null;
    methodCalled = false;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, select;
      $this = $(this);
      select = $this.data('SearchSelect');
      if (typeof options === 'string' && select && select[options]) {
        args.shift();
        value = select[options].apply(select, args);
        methodCalled = true;
      } else if (!select && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.searchselect.defaults, options);
        select = new RojobaCo.SearchSelect($this, options);
        $this.data('SearchSelect', select);
        methodCalled = false;
      }
    });
    if (methodCalled) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.searchselect.defaults = {
    source: null,
    id: 'select',
    title: 'Please select',
    inputType: 'text',
    requestType: 'GET',
    selected: '',
    items: null,
    searchable: true,
    searchPlaceholder: 'Search',
    onItemSelect: null,
    onItemMap: function(item) {
      return {
        value: item.Name,
        label: item.Name
      };
    },
    onGetData: null,
    autoLoad: false,
    onEditLoad: null,
    onSelectedItemClear: null,
    itemArraySelect: null,
    filterItems: null
  };

  $.fn.tablegrid = function(options, params) {
    var args, elements, value;
    args = [];
    value = null;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, grid;
      $this = $(this);
      grid = $this.data('TableGrid');
      if (typeof options === 'string' && grid && grid[options]) {
        args.shift();
        value = grid[options].apply(grid, args);
      } else if (!grid && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.tablegrid.defaults, options);
        grid = new RojobaCo.TableGrid($this, options);
        $this.data('TableGrid', grid);
        if (options.loadOnStart && options.onGetData) {
          options.onGetData(null, null, 1, options.initialPageSize, {}, {});
        }
      }
    });
    if (value !== null) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.tablegrid.defaults = {
    height: null,
    idColumn: 'ID',
    width: null,
    initialPageSize: 10,
    loadingText: 'Working on it...',
    groupColumn: null,
    parentColumn: null,
    expandParentColumns: false,
    loadOnStart: true,
    draggableRows: false,
    filter: true,
    edit: false,
    editOnSelect: false,
    selectData: null,
    onGetData: null,
    renderCell: null,
    afterDataLoad: null,
    afterRowAction: null,
    beforeCellEdit: null,
    afterCellEdit: null,
    beforeRowDrag: null,
    afterRowDrop: null,
    onLink: null,
    columnModel: [],
    showRowNumber: false,
    footer: false,
    hide: false,
    rowDisabled: null,
    rowAttr: null,
    multiselect: null,
    onEdit: null,
    hideParent: false,
    hideChildren: false,
    rowActions: [],
    footerActions: [],
    xDimension: [],
    yDimension: [],
    aggregates: [],
    showChildrenMultiSelect: false
  };

  $.fn.calendargrid = function(options, params) {
    var args, elements, methodCalled, value;
    args = [];
    value = null;
    methodCalled = false;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, grid;
      $this = $(this);
      grid = $this.data('CalendarGrid');
      if (typeof options === 'string' && grid && grid[options]) {
        args.shift();
        value = grid[options].apply(grid, args);
        methodCalled = true;
      } else if (!grid && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.calendargrid.defaults, options);
        grid = new RojobaCo.CalendarGrid($this, options);
        $this.data('CalendarGrid', grid);
        methodCalled = false;
      }
    });
    if (methodCalled) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.calendargrid.defaults = {
    readOnly: false,
    month: null,
    minValue: null,
    maxValue: null,
    data: null,
    afterDayEdit: null
  };

  $.fn.timeslider = function(options, params) {
    var args, elements, methodCalled, value;
    args = [];
    value = null;
    methodCalled = false;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, slider;
      $this = $(this);
      slider = $this.data('TimeSlider');
      if (typeof options === 'string' && slider && slider[options]) {
        args.shift();
        value = slider[options].apply(slider, args);
        methodCalled = true;
      } else if (!slider && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.timeslider.defaults, options);
        slider = new RojobaCo.TimeSlider($this, options);
        $this.data('TimeSlider', slider);
        methodCalled = false;
      }
    });
    if (methodCalled) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.timeslider.defaults = {
    canEdit: true,
    startTime: '00:00',
    endTime: '24:00',
    defaultHandleTimeSpan: '00:10'
  };

  $.fn.svgplonk = function(options, params) {
    var args, elements, methodCalled, value;
    args = [];
    value = null;
    methodCalled = false;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, plonk;
      $this = $(this);
      plonk = $this.data('SvgPlonk');
      if (typeof options === 'string' && plonk && plonk[options]) {
        args.shift();
        value = plonk[options].apply(plonk, args);
        methodCalled = true;
      } else if (!plonk && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.svgplonk.defaults, options);
        plonk = new RojobaCo.SvgPlonk($this, options);
        $this.data('SvgPlonk', plonk);
        methodCalled = false;
      }
    });
    if (methodCalled) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.svgplonk.defaults = {
    url: null,
    toolbox: null,
    canvas: null
  };

  $.fn.dropdown = function(options, params) {
    var args, elements, methodCalled, value;
    args = [];
    value = null;
    methodCalled = false;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, dropdown;
      $this = $(this);
      dropdown = $this.data('DropDown');
      if (typeof options === 'string' && dropdown && dropdown[options]) {
        args.shift();
        value = dropdown[options].apply(dropdown, args);
        methodCalled = true;
      } else if (!dropdown && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.dropdown.defaults, options);
        dropdown = new RojobaCo.DropDown($this, options);
        $this.data('DropDown', dropdown);
        methodCalled = false;
      }
    });
    if (methodCalled) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.dropdown.defaults = {
    menuMode: false,
    onOptionSelect: null
  };

  RojobaCo.Factory = class Factory {
    constructor() {
      var ID, Name;
      //super()
      ID = null;
      Name = null;
      return;
    }

    static getFactories(callback) {
      var uri;
      uri = RojobaCo.Constants.API_URI + 'api/factories';
      $.ajax({
        type: 'GET',
        url: uri,
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
        },
        success: function(response) {
          if (callback) {
            callback(response);
          }
        }
      });
    }

  };

  RojobaCo.Powder = (function() {
    var API_KEY, API_URI, VERSION, _makeApiGetCall;

    class Powder {
      constructor() {
        //super()
        this.ID = 0;
        this.Title = null;
        this.JobCardNumber = null;
        this.LineNumber = null;
        this.ColourCode = null;
        this.ColourName = null;
        this.QuantityBefore = null;
        this.QuantityAfter = null;
        this.LocationCode = null;
      }

      static fetchAll(callback) {
        var powdersUri;
        powdersUri = API_URI + 'api' + VERSION + '/powder';
        _makeApiGetCall(powdersUri, function(success, data) {
          var l, len, powder, ref;
          if (success) {
            if (data.Success) {
              ref = data.Powders;
              for (l = 0, len = ref.length; l < len; l++) {
                powder = ref[l];
                powder.ColourName = RojobaCo.StandingData.getColourName(powder.ColourCode);
              }
              callback(data.Powders);
            } else {
              callback(null);
            }
          } else {
            callback(null);
          }
        });
      }

    };

    API_URI = 'http://localhost:58950/';

    //API_URI = 'https://bcapi.alu.bwg.co.za/'
    API_KEY = 'J8jKv6srQQ0R0Q4DH03see44h1lED1Ec';

    VERSION = '';

    _makeApiGetCall = function(uri, callback) {
      $.ajax({
        url: uri,
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + API_KEY);
        },
        success: function(data) {
          callback(true, data);
        },
        error: function(data) {
          callback(false, data);
        }
      });
    };

    return Powder;

  }).call(this);

  RojobaCo.ScheduledJob = (function() {
    var arrayMove, createdd, sequenceJobs;

    class ScheduledJob {
      constructor() {
        //super()
        this.Title = null;
        this.JobCardNumber = null;
        this.LineNumber = null;
        this.JobNumber = null;
        this.JobParent = null;
        this.Customer = null;
        this.PurchaseReference = null;
        this.MaterialReceiveDate = null;
        this.OrderDate = null;
        this.CollectionTime = null;
        this.OrderType = null;
        this.DueDate = null;
        this.DeliveryDate = null;
        this.DeliveryTime = null;
        this.ExtToBeCoated = null;
        this.ItemName = null;
        this.ItemM2 = null;
        this.TotalM2 = null;
        this.NumberOfFlightBars = null;
        this.Route = null;
        this.ColourCode = null;
        this.ColourName = null;
        this.Status = null;
        this.StartOfJob = null;
        this.DurationOfJob = null;
        this.IsLocked = false;
        this.IsArchived = false;
        this.IsColourChange = false;
        this.IsBreak = false;
        this.IsManualJC = false;
        this.Sequence = null;
        this.Position = null;
        this.PhaseReason = null;
        this.RejectReason = null;
        this.OtherReason = null;
        this.IsDirty = true;
        this.NewExtToBeCoated = null;
        this.NewNumberOfFlightBars = null;
        this.SyncStamp = null;
        this.DeliveryCollection = null;
        this.QuantityOnPurchaseOrder = null;
        this.QuantityOnSalesOrder = null;
        this.QuantityOnComponentLines = null;
        this.ExternalDocumentNumber = null;
        this.Inventory = null;
        this.HasStock = null;
        this.TotalLineExtrusions = null;
        this.PowderUsage = null;
        this.DyeNumber = null;
        return;
      }

      static fetchJobsByParentId(jobParentIds, callback) {
        var jobParentId, jobParents, l, len, uri;
        jobParents = "";
        if (Array.isArray(jobParentIds)) {
          for (l = 0, len = jobParentIds.length; l < len; l++) {
            jobParentId = jobParentIds[l];
            jobParents += jobParentId + ',';
          }
        } else {
          jobParents = jobParentIds;
        }
        uri = RojobaCo.Constants.API_URI + 'api/schedulejob?JobParents=' + jobParents;
        $.ajax({
          type: 'GET',
          url: uri,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(response) {
            console.log('Updated Successfully!');
            if (callback) {
              callback(response);
            }
          }
        });
      }

      static update(jobsToUpdate, callback) {
        var data, uri;
        data = [];
        if (!Array.isArray(jobsToUpdate)) {
          data.push(jobsToUpdate);
        } else {
          data = jobsToUpdate;
        }
        uri = RojobaCo.Constants.API_URI + 'api/schedule';
        $.ajax({
          type: 'POST',
          url: uri,
          data: JSON.stringify(data),
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(data) {
            if (!data.Success) {
              alert(data.ErrorMessage);
            } else {
              console.log('Updated Successfully!');
            }
            if (callback) {
              callback(data);
            }
          }
        });
      }

      static updateManualJobCards(manualJobCards, callback) {
        var uri;
        uri = RojobaCo.Constants.API_URI + 'api/manualjobcard';
        $.ajax({
          type: 'POST',
          url: uri,
          data: JSON.stringify(manualJobCards),
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(data) {
            if (!data.Success) {
              alert(data.ErrorMessage);
            } else {
              console.log('Updated Successfully!');
              alert('Updated Successfully.');
            }
            if (callback) {
              callback(data);
            }
          }
        });
      }

      static allocateManualJobCard(manualJobCard, jobCard, callback) {
        var uri;
        uri = RojobaCo.Constants.API_URI + 'api/manualjobcard?manualjobcard=' + manualJobCard + '&jobcard=' + jobCard;
        $.ajax({
          type: 'POST',
          url: uri,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(data) {
            if (!data.Success) {
              alert(data.ErrorMessage);
            } else {
              console.log('Allocated Successfully!');
              alert('Allocated Successfully.');
            }
            if (callback) {
              callback(data);
            }
          }
        });
      }

      static scheduleJobs(data, callback) {
        var uri;
        uri = RojobaCo.Constants.API_URI + 'api/schedulejob';
        $.ajax({
          type: 'POST',
          url: uri,
          data: JSON.stringify(data),
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function() {
            alert("Jobs Scheduled Successfully!");
            if (callback) {
              callback(data);
            }
          },
          error: function(data) {
            alert(data.responseText);
          }
        });
      }

      static getJobsScheduledForDate(date, factoryId, callback) {
        var uri;
        uri = RojobaCo.Constants.API_URI + 'api/schedulejobheader?date=' + date + '&factoryID=' + factoryId;
        $.ajax({
          type: 'GET',
          url: uri,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(data) {
            if (callback) {
              callback(data);
            }
          }
        });
      }

      static scheduleJobMethod(date, factoryId, method, callback) {
        var uri;
        uri = RojobaCo.Constants.API_URI + 'api/schedulejob?date=' + date + '&factoryID=' + factoryId + '&method=' + method;
        $.ajax({
          type: 'GET',
          url: uri,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(data) {
            if (callback) {
              callback(data);
            }
          }
        });
      }

      static createManualJobCard(data, callback) {
        var uri;
        uri = RojobaCo.Constants.API_URI + 'api/manualjobcard';
        $.ajax({
          type: 'POST',
          url: uri,
          data: JSON.stringify(data),
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(data) {
            if (callback) {
              callback(data);
            }
          }
        });
      }

      static updatePosition(jobs, callback) {
        var updateRequest;
        updateRequest = indexedDB.open(RojobaCo.Constants.BWA_DB, 1);
        updateRequest.onsuccess = function(e) {
          var db, i, store, tx, updateJob;
          db = e.target.result;
          tx = db.transaction(RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite');
          store = tx.objectStore(RojobaCo.Constants.SCHEDULED_JOB_STORE);
          if (jobs.length > 0) {
            i = 0;
            updateJob = function(i) {
              var fetchRequest, job;
              job = jobs[i];
              fetchRequest = store.get(job.JobNumber);
              fetchRequest.onsuccess = function(e) {
                if (e.target.result) {
                  store.put(job);
                } else {
                  store.add(job);
                }
                i++;
                if (i < jobs.length) {
                  updateJob(i);
                }
              };
            };
            updateJob(i);
          }
          tx.oncomplete = function() {
            db.close();
            if (callback) {
              callback();
            }
          };
        };
      }

      static delete(jobToDelete, callback) {
        var deleteRequest;
        deleteRequest = indexedDB.open(RojobaCo.Constants.BWA_DB, 1);
        deleteRequest.onsuccess = function(e) {
          var db, store, tx;
          db = e.target.result;
          tx = db.transaction(RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite');
          store = tx.objectStore(RojobaCo.Constants.SCHEDULED_JOB_STORE);
          store.delete(jobToDelete.JobNumber);
          tx.oncomplete = function() {
            db.close();
            if (callback) {
              callback();
            }
          };
        };
      }

      static updateJobsStatus(jobNumbers, jobStatus) {
        var updateRequest;
        updateRequest = indexedDB.open(RojobaCo.Constants.BWA_DB, 1);
        updateRequest.onsuccess = function(e) {
          var db, fetchRequest, jobNumber, l, len, store, tx;
          db = e.target.result;
          tx = db.transaction(RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite');
          store = tx.objectStore(RojobaCo.Constants.SCHEDULED_JOB_STORE);
          for (l = 0, len = jobNumbers.length; l < len; l++) {
            jobNumber = jobNumbers[l];
            fetchRequest = store.get(jobNumber);
            fetchRequest.onsuccess = function(e) {
              var job;
              job = e.target.result;
              if (job) {
                job.Status = jobStatus;
                job.IsDirty = true;
                store.put(job);
              }
            };
          }
          tx.oncomplete = function() {
            db.close();
          };
        };
      }

      static createConsumptionBatch(powderBatchRequest, callback) {
        var uri;
        uri = RojobaCo.Constants.API_URI + 'api/powder';
        $.ajax({
          type: 'POST',
          data: JSON.stringify(powderBatchRequest),
          url: uri,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(data) {
            alert('Batch Consumption posted Succesfully.');
            if (callback) {
              callback(data);
            }
          }
        });
      }

      static getNextPhaseNo(jobToCalculate, callback) {
        var fetchRequest;
        fetchRequest = indexedDB.open(RojobaCo.Constants.BWA_DB, 1);
        fetchRequest.onsuccess = function(e) {
          var all, db, phaseNo, store, tx;
          db = e.target.result;
          tx = db.transaction(RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite');
          store = tx.objectStore(RojobaCo.Constants.SCHEDULED_JOB_STORE);
          all = store.getAll();
          phaseNo = 0;
          all.onsuccess = function(e) {
            var job, jobs, l, len;
            jobs = e.target.result;
            for (l = 0, len = jobs.length; l < len; l++) {
              job = jobs[l];
              if (job.JobCardNumber === jobToCalculate.JobCardNumber && job.LineNumber === jobToCalculate.LineNumber) {
                phaseNo++;
              }
            }
            callback(phaseNo + 1);
            tx.oncomplete = function() {
              db.close();
            };
          };
        };
      }

      static fetchAll(callback) {
        var fetchRequest;
        fetchRequest = indexedDB.open(RojobaCo.Constants.BWA_DB, 1);
        fetchRequest.onsuccess = function(e) {
          var all, db, store, tx;
          db = e.target.result;
          tx = db.transaction(RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite');
          store = tx.objectStore(RojobaCo.Constants.SCHEDULED_JOB_STORE);
          all = store.getAll();
          all.onsuccess = function(e) {
            var jobs;
            jobs = e.target.result;
            if (callback) {
              callback(jobs);
            }
            tx.oncomplete = function() {
              db.close();
            };
          };
        };
      }

      static fetchByJob(jobCardNumber, callback) {
        var fetchRequest, filteredJobs;
        filteredJobs = [];
        fetchRequest = indexedDB.open(RojobaCo.Constants.BWA_DB, 1);
        fetchRequest.onsuccess = function(e) {
          var all, db, store, tx;
          db = e.target.result;
          tx = db.transaction(RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite');
          store = tx.objectStore(RojobaCo.Constants.SCHEDULED_JOB_STORE);
          all = store.getAll();
          all.onsuccess = function(e) {
            var job, jobs, l, len;
            jobs = e.target.result;
            if (jobCardNumber && jobs) {
              for (l = 0, len = jobs.length; l < len; l++) {
                job = jobs[l];
                if (job.JobCardNumber === jobCardNumber && !job.IsArchived) {
                  filteredJobs.push(job);
                }
              }
            }
            callback(filteredJobs);
            tx.oncomplete = function() {
              db.close();
            };
          };
        };
      }

      static fetchByJobNumber(jobNumber, callback) {
        var fetchRequest, filteredJobs;
        filteredJobs = [];
        fetchRequest = indexedDB.open(RojobaCo.Constants.BWA_DB, 1);
        fetchRequest.onsuccess = function(e) {
          var db, getRequest, store, tx;
          db = e.target.result;
          tx = db.transaction(RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite');
          store = tx.objectStore(RojobaCo.Constants.SCHEDULED_JOB_STORE);
          getRequest = store.get(jobNumber);
          getRequest.onsuccess = function(e) {
            callback(e.target.result);
          };
          tx.oncomplete = function() {
            db.close();
          };
        };
      }

      static fetchByJobParent(jobParent, callback) {
        var fetchRequest, filteredJobs;
        filteredJobs = [];
        fetchRequest = indexedDB.open(RojobaCo.Constants.BWA_DB, 1);
        fetchRequest.onsuccess = function(e) {
          var all, db, store, tx;
          db = e.target.result;
          tx = db.transaction(RojobaCo.Constants.SCHEDULED_JOB_STORE, 'readwrite');
          store = tx.objectStore(RojobaCo.Constants.SCHEDULED_JOB_STORE);
          all = store.getAll();
          all.onsuccess = function(e) {
            var job, jobs, l, len;
            jobs = e.target.result;
            filteredJobs = [];
            for (l = 0, len = jobs.length; l < len; l++) {
              job = jobs[l];
              if (job.JobParent === jobParent) {
                filteredJobs.push(job);
              }
            }
            callback(filteredJobs);
          };
          tx.oncomplete = function() {
            db.close();
          };
        };
      }

      static fetchCompletedJobs(holder, callback) {
        var uri;
        uri = RojobaCo.Constants.API_URI + 'api/completedjobs';
        $.ajax({
          type: 'GET',
          url: uri,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(data) {
            callback(data.CompletedJobs);
          }
        });
      }

      static postToBusinessCentral(callback) {
        var uri;
        uri = RojobaCo.Constants.API_URI + 'api/consumption';
        $.ajax({
          type: 'GET',
          url: uri,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(data) {
            var i, l, len, len1, m, message, messageParent, messageParentID, messages, ref;
            console.log(data.Message);
            $('#bc-post-responsemodal-body').empty();
            ref = data.Response;
            for (l = 0, len = ref.length; l < len; l++) {
              messages = ref[l];
              messageParentID = messages[0].replace(" ", "");
              messageParent = $('<div>').text(messages[0]).attr('id', messageParentID).addClass('message-parentcontainer').appendTo('#bc-post-responsemodal-body');
              $('<i>').addClass('la la-chevron-right pull-left').on('click', function(e) {
                $('[data-parentid=' + $(e.target).parent().attr('id') + ']').toggle();
                $(e.target).toggleClass('la-chevron-right la-chevron-down');
              }).appendTo(messageParent);
              for (i = m = 0, len1 = messages.length; m < len1; i = ++m) {
                message = messages[i];
                if (i !== 0) {
                  $('<div>').text(message).toggle().attr('data-parentid', messageParentID).appendTo(messageParent);
                }
              }
            }
            $('#bc-post-responsemodal').modal('show');
            callback();
          },
          error: function(data) {
            alert('An error has occured when attempting to post to BC.');
          }
        });
      }

      static downloadJobCardPdf(job) {
        var dd, description, jobDetails, l, len, length, lineItem, m2, mainTableBody, profile, qty, totalLineExtrusions;
        mainTableBody = [];
        jobDetails = {};
        //Headers for the table
        mainTableBody.push([
          {
            text: 'Profile',
            fillColor: '#dbd5d5',
            fontSize: 8,
            alignment: 'left'
          },
          {
            text: 'Description',
            fillColor: '#dbd5d5',
            fontSize: 8,
            alignment: 'left'
          },
          {
            text: 'Length',
            fillColor: '#dbd5d5',
            fontSize: 8,
            alignment: 'center'
          },
          {
            text: 'Qty for full JC',
            fillColor: '#dbd5d5',
            fontSize: 8,
            alignment: 'center'
          },
          {
            text: 'm2',
            fillColor: '#dbd5d5',
            fontSize: 8,
            alignment: 'center'
          },
          {
            text: 'Qty of JC',
            fillColor: '#dbd5d5',
            fontSize: 8,
            alignment: 'center'
          }
        ]);
        //Majority of the details to go in the header
        if (job[0].ColourName) {
          jobDetails.ColourName = job[0].ColourName;
        } else {
          jobDetails.ColourName = "";
        }
        if (job[0].ColourCode) {
          jobDetails.ColourCode = job[0].ColourCode;
        } else {
          jobDetails.ColourCode = "";
        }
        if (job[0].Customer) {
          jobDetails.Customer = job[0].Customer;
        } else {
          jobDetails.Customer = "";
        }
        if (job[0].JobParent) {
          jobDetails.JobParent = job[0].JobParent;
        } else {
          jobDetails.JobParent = "";
        }
        if (job[0].ExternalDocumentNumber) {
          jobDetails.ExternalDocumentNumber = job[0].ExternalDocumentNumber;
        } else {
          jobDetails.ExternalDocumentNumber = "";
        }
        if (jobDetails.JobParent.includes('P') || jobDetails.JobParent.includes('QC')) {
          jobDetails.JobHeader = 'Split Job Card ' + jobDetails.JobParent;
        } else {
          jobDetails.JobHeader = 'Job Card ' + jobDetails.JobParent;
        }
        jobDetails.TotalJobParentExtrusions = 0;
//Values for the table
        for (l = 0, len = job.length; l < len; l++) {
          lineItem = job[l];
          jobDetails.TotalJobParentExtrusions += +lineItem.ExtToBeCoated;
          if (!lineItem.DyeNumber) {
            lineItem.DyeNumber = '';
          }
          mainTableBody.push([
            profile = {
              text: lineItem.DyeNumber,
              fontSize: 9
            },
            description = {
              text: lineItem.ItemName,
              fontSize: 9
            },
            length = {
              text: lineItem.ExtToBeCoated.toString(),
              alignment: 'center',
              fontSize: 9
            },
            totalLineExtrusions = {
              text: lineItem.TotalLineExtrusions.toString(),
              alignment: 'center',
              fontSize: 9
            },
            m2 = {
              text: lineItem.ItemM2.toString(),
              alignment: 'center',
              fontSize: 9
            },
            qty = {
              text: lineItem.ExtToBeCoated.toString(),
              alignment: 'center',
              fontSize: 9
            }
          ]);
        }
        dd = createdd(jobDetails, mainTableBody);
        //pdfMake.createPdf(dd).print()
        pdfMake.createPdf(dd).download(jobDetails.JobParent);
      }

      static PushPositionUpdate(rows, callback) {
        var BWA_DB, SCHEDULED_JOB_STORE, openRequest;
        BWA_DB = 'bwa_db';
        SCHEDULED_JOB_STORE = 'ScheduledJob';
        openRequest = indexedDB.open(BWA_DB, 1);
        openRequest.onsuccess = function(e) {
          var all, db, store, tx;
          db = e.target.result;
          tx = db.transaction(SCHEDULED_JOB_STORE, 'readwrite');
          store = tx.objectStore(SCHEDULED_JOB_STORE);
          all = store.getAll();
          all.onsuccess = function(e) {
            var d, job, jobs, jobsToUpdate, l, len, len1, m, now, row, rowJobNumbers, uri;
            d = new Date();
            now = d.getTime();
            jobsToUpdate = [];
            jobs = e.target.result;
            rowJobNumbers = [];
            for (l = 0, len = rows.length; l < len; l++) {
              row = rows[l];
              rowJobNumbers.push(row.JobNumber);
            }
            for (m = 0, len1 = jobs.length; m < len1; m++) {
              job = jobs[m];
              if (rowJobNumbers.includes(job.JobNumber)) {
                job.SyncStamp = now;
                jobsToUpdate.push(job);
                store.put(job);
              }
            }
            uri = RojobaCo.Constants.API_URI + 'api/schedulejobposition';
            $.ajax({
              type: 'POST',
              url: uri,
              data: JSON.stringify(jobsToUpdate),
              beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
              },
              success: function() {
                alert('Jobs positions successfully updated!');
              }
            });
          };
          tx.oncomplete = function() {
            db.close();
          };
        };
        openRequest.onerror = function(e) {
          console.log('worker db error!');
          console.log(e);
        };
      }

    };

    createdd = function(jobDetails, mainTableBody) {
      return {
        pageMargins: [30, 130, 30, 40],
        pageOrientation: 'landscape',
        header: function(currentPage, pageCount) {
          if (currentPage.toString() === '1') {
            return {
              columns: [
                {
                  width: 30,
                  text: ' '
                },
                {
                  image: 'data:image/png;base64,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',
                  fit: [200,
                100]
                },
                {
                  layout: 'noBorders',
                  table: {
                    headerRows: 0,
                    widths: ['auto',
                '*'],
                    body: [
                      [
                        {
                          text: 'Pre-Treatment Sign off: ',
                          fontSize: 8
                        },
                        {
                          text: 'Date:____________',
                          fontSize: 8
                        }
                      ],
                      [
                        {
                          text: '___________________________________________',
                          colSpan: 2,
                          fontSize: 10
                        },
                        {}
                      ],
                      [
                        {
                          text: 'Powder Batch:',
                          fontSize: 8
                        },
                        {
                          text: ' '
                        }
                      ],
                      [
                        {
                          text: '___________________________________________',
                          colSpan: 2,
                          fontSize: 10
                        },
                        {}
                      ],
                      [
                        {
                          text: 'Quality Controller Sign off: ',
                          fontSize: 8
                        },
                        {
                          text: ' '
                        }
                      ],
                      [
                        {
                          text: '___________________________________________',
                          colSpan: 2,
                          fontSize: 10
                        },
                        {}
                      ]
                    ]
                  }
                },
                {
                  table: {
                    headerRows: 1,
                    widths: ['*',
                '*'],
                    body: [
                      [
                        {
                          text: jobDetails.JobHeader,
                          colSpan: 2,
                          fontSize: 15,
                          bold: true
                        },
                        {}
                      ],
                      [
                        {
                          text: 'COLOUR CODE:',
                          fontSize: 8
                        },
                        {
                          text: jobDetails.ColourCode,
                          fontSize: 8
                        }
                      ],
                      [
                        {
                          text: 'COLOUR',
                          fontSize: 8
                        },
                        {
                          text: jobDetails.ColourName,
                          fontSize: 8
                        }
                      ],
                      [
                        {
                          text: 'YOUR ORDER NO:',
                          fontSize: 8
                        },
                        {
                          text: jobDetails.ExternalDocumentNumber,
                          fontSize: 8
                        }
                      ],
                      [
                        {
                          text: 'CLIENT:',
                          fontSize: 8
                        },
                        {
                          text: jobDetails.Customer,
                          fontSize: 8
                        }
                      ]
                    ]
                  },
                  layout: 'noBorders'
                }
              ],
              layout: 'noBorders',
              margin: [0, 25]
            };
          } else {
            return {
              columns: [
                {
                  width: 30,
                  text: ' '
                },
                {
                  image: 'data:image/png;base64,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',
                  fit: [200,
                100]
                },
                {
                  text: ' ',
                  width: 260
                },
                {
                  table: {
                    headerRows: 1,
                    widths: ['*',
                '*'],
                    body: [
                      [
                        {
                          text: 'Split Job Card ' + jobDetails.JobParent,
                          colSpan: 2,
                          fontSize: 15,
                          bold: true
                        },
                        {}
                      ],
                      [
                        {
                          text: 'COLOUR CODE:',
                          fontSize: 8
                        },
                        {
                          text: jobDetails.ColourCode,
                          fontSize: 8
                        }
                      ],
                      [
                        {
                          text: 'COLOUR',
                          fontSize: 8
                        },
                        {
                          text: jobDetails.ColourName,
                          fontSize: 8
                        }
                      ],
                      [
                        {
                          text: 'YOUR ORDER NO:',
                          fontSize: 8
                        },
                        {
                          text: jobDetails.ExternalDocumentNumber,
                          fontSize: 8
                        }
                      ],
                      [
                        {
                          text: 'CLIENT:',
                          fontSize: 8
                        },
                        {
                          text: jobDetails.Customer,
                          fontSize: 8
                        }
                      ]
                    ]
                  },
                  layout: 'noBorders'
                }
              ],
              layout: 'noBorders',
              margin: [0, 25]
            };
          }
        },
        footer: function(currentPage, pageCount) {
          return {
            columns: [
              {
                margin: [15,
              15,
              15,
              15],
                text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                alignment: 'right'
              }
            ]
          };
        },
        content: [
          {
            columns: [
              {
                text: ' '
              }
            ]
          },
          {
            table: {
              headerRows: 1,
              widths: [70,
          '*',
          45,
          60,
          60,
          60],
              body: mainTableBody
            },
            layout: {
              hLineColor: function(i,
          node) {
                return '#bdb1b1';
              },
              vLineColor: function(i,
          node) {
                return '#bdb1b1';
              }
            }
          },
          {
            columns: [
              {
                text: ' ',
                width: '79%'
              },
              {
                margin: [0,
              10,
              0],
                text: 'Total Qty on this Job Card: ' + jobDetails.TotalJobParentExtrusions,
                fontSize: 10,
                width: '*'
              }
            ]
          }
        ]
      };
    };

    sequenceJobs = function(jobs, page) {
      var currentPosition, i, index, job, l, len, len1, len2, len3, m, n, o;
      if (page === 'home') {
        multisort(jobs, ['~IsLocked', 'JobParent', 'LineNumber']);
        //Sequence jobs
        i = 1;
        for (l = 0, len = jobs.length; l < len; l++) {
          job = jobs[l];
          job.Sequence = i;
          i++;
        }
      } else if (page === 'schedule') {
        multisort(jobs, ['~IsLocked', 'Position', 'JobParent', 'LineNumber']);
        // Sequence jobs
        i = 1;
        currentPosition = 1;
//Figure how to filter this to show just where Jobs.Position > 0
        for (index = m = 0, len1 = jobs.length; m < len1; index = ++m) {
          job = jobs[index];
          if (job.Position > 0 && job.Position) {
            if (index > 0 && jobs[index - 1].JobParent !== job.JobParent) {
              ++currentPosition;
            }
            if (job.Position !== currentPosition) {
              job.Position = currentPosition;
              job.Sequence = i;
              job.IsDirty = true;
            }
            i++;
          }
        }
        
        //Increment by 1 so next forloop starts with its position 1 higher than current
        currentPosition++;
//Figure how to filter this to show just where Jobs.Position == 0
        for (index = n = 0, len2 = jobs.length; n < len2; index = ++n) {
          job = jobs[index];
          if (job.Position === 0 || !job.Position) {
            if (index > 0 && jobs[index - 1].JobParent !== job.JobParent) {
              ++currentPosition;
            }
            if (job.Position !== currentPosition) {
              job.Position = currentPosition;
              job.Sequence = i;
              job.IsDirty = true;
            }
            i++;
          }
        }
      } else {
        multisort(jobs, ['~IsLocked', 'JobParent', 'LineNumber']);
        //Sequence jobs
        i = 1;
        for (o = 0, len3 = jobs.length; o < len3; o++) {
          job = jobs[o];
          job.Sequence = i;
          i++;
        }
      }
    };

    arrayMove = function(arr, from, to) {
      arr.splice(to, 0, arr.splice(from, 1)[0]);
    };

    return ScheduledJob;

  }).call(this);

  RojobaCo.StockPosting = class StockPosting {
    constructor() {
      var BCInventory, DatePosted, ID, IsArchived, IsCompleted, ItemCode, ItemDescription, ScaleTotal, StockToPost;
      //super()
      ID = null;
      ItemCode = null;
      ItemDescription = null;
      ScaleTotal = null;
      BCInventory = null;
      DatePosted = null;
      StockToPost = null;
      IsArchived = null;
      IsCompleted = null;
      return;
    }

    static getAllStockPosting(callback) {
      var factory, uri;
      factory = $('#factory-location').searchselect('getSelectedData');
      uri = RojobaCo.Constants.API_URI + 'api/StockPostings?factorylocation=' + factory.value;
      $.ajax({
        type: 'GET',
        url: uri,
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
        },
        success: function(response) {
          if (callback) {
            callback(response);
          }
        }
      });
    }

    static updateStockPostings(items, callback) {
      var uri;
      uri = RojobaCo.Constants.API_URI + 'api/StockPostings';
      $.ajax({
        type: 'POST',
        url: uri,
        data: JSON.stringify(items),
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
        },
        success: function(response) {
          console.log('Updated Successfully!');
          if (callback) {
            callback(response);
          }
        }
      });
    }

  };

  RojobaCo.BusinessCentral = (function() {
    var API_KEY, API_URI, VERSION, _makeApiGetCall, _makeApiPostCall;

    class BusinessCentral {
      static getFactories(callback) {
        var uri;
        uri = RojobaCo.Constants.API_URI + 'api/factories';
        $.ajax({
          type: 'GET',
          url: uri,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function(response) {
            if (callback) {
              callback(response);
            }
          }
        });
      }

      static getColours(callback) {
        var coloursUri;
        coloursUri = API_URI + 'api' + VERSION + '/colours';
        _makeApiGetCall(coloursUri, function(success, data) {
          if (success) {
            callback(data);
          } else {
            callback(null);
          }
        });
      }

      static getOrders(filters, factoryId, callback) {
        var ordersUri;
        //Filters are split by ','
        ordersUri = RojobaCo.Constants.API_URI + 'api' + VERSION + '/orders?filters=' + filters + '&factoryID=' + factoryId;
        _makeApiGetCall(ordersUri, function(success, data) {
          if (success) {
            callback(data);
          } else {
            callback(null);
          }
        });
      }

      static getJobOrders(filters, factoryId, callback) {
        var ordersUri;
        //Filters are split by ','
        ordersUri = RojobaCo.Constants.API_URI + 'api' + VERSION + '/joborders?filters=' + filters + '&factoryID=' + factoryId;
        _makeApiGetCall(ordersUri, function(success, data) {
          if (success) {
            callback(data);
          } else {
            callback(null);
          }
        });
      }

      static populateConsumptionJournal(request, callback) {
        var requestUri;
        requestUri = API_URI + 'api' + VERSION + '/consumption';
        _makeApiPostCall(requestUri, JSON.stringify(request), function(success, data) {
          callback(data);
        });
      }

      static populateOutputJournal(request, callback) {
        var requestUri;
        requestUri = API_URI + 'api' + VERSION + '/output';
        _makeApiPostCall(requestUri, JSON.stringify(request), function(success, data) {
          callback(data);
        });
      }

    };

    API_URI = 'http://localhost:58950/';

    //API_URI = 'https://bcapi.alu.bwg.co.za/'
    API_KEY = 'J8jKv6srQQ0R0Q4DH03see44h1lED1Ec';

    VERSION = '';

    _makeApiGetCall = function(uri, callback) {
      $.ajax({
        url: uri,
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + API_KEY);
        },
        success: function(data) {
          callback(true, data);
        },
        error: function(data) {
          callback(false, data);
        }
      });
    };

    _makeApiPostCall = function(uri, postdata, callback) {
      $.ajax({
        url: uri,
        method: 'POST',
        contentType: 'application/json',
        data: postdata,
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + API_KEY);
        },
        success: function(data) {
          callback(true, data);
        },
        error: function(data) {
          callback(false, data);
        }
      });
    };

    return BusinessCentral;

  }).call(this);

  RojobaCo.Constants = (function() {
    class Constants {};

    Constants.DATE_STRING_FORMAT = 'YYYY-MM-DD';

    Constants.DATE_STRING_DISPLAY_FORMAT = 'DD MMMM YYYY';

    Constants.DATETIME_STRING_FORMAT = 'DD MMMM YYYY HH:mm';

    Constants.BWA_DB = 'bwa_db';

    Constants.SCHEDULED_JOB_STORE = 'ScheduledJob';

    Constants.API_KEY = 'J8jKv6srQQ0R0Q4DH03see44h1lED1Ec';

    Constants.API_URI = 'http://localhost:58950/';

    return Constants;

  }).call(this);

  RojobaCo.ScheduleStartTime = (function() {
    var STORAGE_KEY;

    //@API_URI = 'https://bcapiprod.alu.bwg.co.za/'
    //@API_URI = 'https://bcapi.alu.bwg.co.za/'
    class ScheduleStartTime {
      static getStartTime(date) {
        var l, len, newStartTime, startTime, startTimes, startTimesStorageString;
        startTimes = [];
        startTimesStorageString = localStorage.getItem(STORAGE_KEY);
        if (startTimesStorageString !== null) {
          startTimes = JSON.parse(startTimesStorageString);
        }
        for (l = 0, len = startTimes.length; l < len; l++) {
          startTime = startTimes[l];
          if (startTime.Date === date) {
            return startTime.Time;
          }
        }
        newStartTime = {
          Date: date,
          Time: '07:45'
        };
        startTimes.push(newStartTime);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(startTimes));
        return newStartTime.Time;
      }

      static updateStartTime(date, time) {
        var l, len, startTime, startTimes, startTimesStorageString;
        startTimes = [];
        startTimesStorageString = localStorage.getItem(STORAGE_KEY);
        if (startTimesStorageString !== null) {
          startTimes = JSON.parse(startTimesStorageString);
        }
        for (l = 0, len = startTimes.length; l < len; l++) {
          startTime = startTimes[l];
          if (startTime.Date === date) {
            startTime.Time = time;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(startTimes));
          }
        }
      }

    };

    STORAGE_KEY = 'ScheduleStartTime';

    return ScheduleStartTime;

  }).call(this);

  RojobaCo.StandingData = (function() {
    var DATETIME_STRING_FORMAT, DATE_STRING_FORMAT, IsCurrentUserMemberOfGroup;

    class StandingData {
      static load(callback) {
        var tmpFactories;
        this.Factories = [];
        tmpFactories = this.Factories;
        RojobaCo.BusinessCentral.getColours((colours) => {
          if (colours) {
            if (colours.value) {
              this.Colours = $.map(colours.value, function(item, i) {
                return {
                  value: item.No,
                  text: item.Description
                };
              });
            } else {
              this.Colours = $.map(colours, function(item, i) {
                return {
                  value: item.Code,
                  text: item.Name
                };
              });
            }
          }
          RojobaCo.BusinessCentral.getFactories(function(response) {
            var index;
            index = 0;
            //Doesnt work on local
            // for factory in response.Factories
            // if await IsCurrentUserMemberOfGroup(factory.Name)
            //     if index is 0
            //         RojobaCo.StandingData.DefaultFactory = { value: factory.ID, text: factory.Name}
            //         index += 1

            //     tmpFactories.push { value: factory.ID, text: factory.Name}
            callback();
          });
        });
      }

      // RojobaCo.BusinessCentral.getOrders "", (orders) ->
      //     if orders
      //         jobParents = []
      //         for job in orders.Jobs
      //             if $.inArray(job.JobParent, jobParents, 0) == -1
      //                 jobParents.push job.JobParent

      //         #Dont have access to "this" here??
      //         RojobaCo.StandingData.JobParents = $.map jobParents, (item, i) ->
      //             return { value: item, text: item }

      //     callback()
      //     return
      static getColourName(colourCode) {
        var colour, colourName, l, len, ref;
        colourName = '';
        if (this.Colours) {
          ref = this.Colours;
          for (l = 0, len = ref.length; l < len; l++) {
            colour = ref[l];
            if (colour.value === colourCode) {
              colourName = colour.text;
              break;
            }
          }
        }
        return colourName;
      }

    };

    StandingData.Colours = void 0;

    StandingData.Factories = void 0;

    StandingData.DefaultFactory = void 0;

    StandingData.JobParents = void 0;

    StandingData.YesAndNo = [
      {
        value: false,
        text: 'No'
      },
      {
        value: true,
        text: 'Yes'
      }
    ];

    StandingData.Routes = [
      {
        value: 'MISSWORLD',
        label: 'MISSWORLD'
      },
      {
        value: 'MANUAL',
        label: 'MANUAL'
      },
      {
        value: "Booth1",
        label: "Booth1"
      },
      {
        value: "Booth2",
        label: "Booth2"
      },
      {
        value: "Booth3",
        label: "Booth3"
      },
      {
        value: "Booth4",
        label: "Booth4"
      }
    ];

    DATE_STRING_FORMAT = 'DD MMMM YYYY';

    DATETIME_STRING_FORMAT = 'DD MMMM YYYY HH:mm';

    IsCurrentUserMemberOfGroup = function(groupName) {
      return new Promise(function(resolve, reject) {
        var OnFailure, OnSuccess, allGroups, currentContext, currentUser, currentWeb, group, groupUsers;
        currentContext = new SP.ClientContext.get_current;
        currentWeb = currentContext.get_web();
        currentUser = currentContext.get_web().get_currentUser();
        OnSuccess = function(sender, args) {
          var groupUser, groupUserEnumerator, isMember;
          groupUserEnumerator = groupUsers.getEnumerator();
          isMember = false;
          while (groupUserEnumerator.moveNext()) {
            groupUser = groupUserEnumerator.get_current();
            if (groupUser.get_id() === currentUser.get_id()) {
              isMember = true;
            }
          }
          resolve(isMember);
        };
        OnFailure = function(sender, args) {
          resolve(false);
        };
        currentContext.load(currentUser);
        allGroups = currentWeb.get_siteGroups();
        currentContext.load(allGroups);
        group = allGroups.getByName(groupName);
        currentContext.load(group);
        groupUsers = group.get_users();
        currentContext.load(groupUsers);
        return currentContext.executeQueryAsync(OnSuccess, OnFailure);
      });
    };

    return StandingData;

  }).call(this);

  RojobaCo.Router.setData('completedjobs', function(route, callback) {
    var data;
    data = {};
    callback(data);
  });

  RojobaCo.Router.register('completedjobs', function(route) {
    $('#completedjobsgrid').tablegrid({
      idColumn: 'JobNumber',
      footer: false,
      filter: true,
      parentColumn: 'JobCardNumber',
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        var holder;
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        holder = '';
        RojobaCo.ScheduledJob.fetchCompletedJobs(holder, function(jobs) {
          var data;
          data = {
            prevId: null,
            nextId: null,
            records: jobs.length,
            total: 1,
            rows: jobs
          };
          $('#completedjobsgrid').tablegrid('loadData', data);
        });
      },
      columnModel: [
        {
          caption: 'Job #',
          name: 'JobNumber',
          width: 220,
          readonly: true,
          render: function(item) {
            var i,
        jobNumber,
        l,
        len,
        lineNumber,
        part,
        parts;
            jobNumber = parseInt(item.JobCardNumber.substring(3));
            lineNumber = item.LineNumber.toString();
            lineNumber = lineNumber.substring(0,
        lineNumber.length - 4);
            jobNumber = jobNumber + '-' + lineNumber;
            parts = item.JobNumber.split('-');
            if (parts.length > 2) {
              for (i = l = 0, len = parts.length; l < len; i = ++l) {
                part = parts[i];
                if (i >= 2) {
                  jobNumber += '-' + parts[i];
                }
              }
            }
            return jobNumber;
          }
        },
        {
          caption: 'Colour Code',
          name: 'ColourCode',
          width: 130,
          readonly: true
        },
        {
          caption: 'Colour Name',
          name: 'ColourName',
          width: 200,
          readonly: true
        },
        {
          caption: 'Production Date',
          name: 'DueDate',
          width: 130,
          readonly: true,
          render: function(item) {
            return moment(item.DueDate).format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT);
          }
        },
        {
          caption: 'Customer',
          name: 'Customer',
          width: 150,
          readonly: true
        },
        {
          caption: 'Purchase Reference',
          name: 'ExternalDocumentNumber',
          width: 140,
          readonly: true
        },
        {
          caption: 'Order Date',
          name: 'OrderDate',
          width: 130,
          readonly: true,
          render: function(item) {
            if (item.OrderDate) {
              return moment(item.OrderDate).format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT);
            }
            return '';
          }
        },
        {
          caption: 'Time of Collection',
          name: 'CollectionTime',
          width: 100,
          readonly: true
        },
        {
          caption: 'Type of Order',
          name: 'OrderType',
          width: 100,
          readonly: true
        },
        {
          caption: 'To Be Delivered',
          name: 'DeliveryDate',
          width: 130,
          readonly: true,
          render: function(item) {
            if (item.DeliveryDate) {
              return moment(item.DeliveryDate).format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT);
            }
            return '';
          }
        },
        {
          caption: 'Delivery Time',
          name: 'DeliveryTime',
          width: 100,
          readonly: true
        },
        {
          caption: 'Ext to be coated',
          name: 'ExtToBeCoated',
          width: 100
        },
        {
          caption: 'Total m2',
          name: 'TotalM2',
          width: 100
        },
        {
          caption: '# Flight Bars',
          name: 'NumberOfFlightBars',
          width: 100
        },
        {
          caption: 'Route',
          name: 'Route',
          width: 100,
          readonly: true
        },
        {
          caption: 'Item',
          name: 'ItemName',
          width: 200,
          readonly: true
        },
        {
          caption: 'Status',
          name: 'Status',
          inputType: 'select',
          dataKey: 'statuses',
          width: 150
        }
      ]
    });
  });

  RojobaCo.Router.setData('dispatch', function(route, callback) {
    var data;
    data = {
      actions: [],
      filterby: [],
      status: []
    };
    data.actions.push({
      value: '1',
      text: 'BC - Post Journal Entries'
    });
    data.actions.push({
      value: '2',
      text: 'Bulk Completed'
    });
    data.filterby.push({
      value: 'Truck',
      text: 'Truck'
    });
    data.filterby.push({
      value: 'Bakkie 1',
      text: 'Bakkie 1'
    });
    data.filterby.push({
      value: 'Bakkie 2',
      text: 'Bakkie 2'
    });
    data.status.push({
      value: 'Delayed Jobs',
      label: 'Delayed Jobs'
    });
    data.status.push({
      value: 'QC Passed',
      label: 'QC Passed'
    });
    callback(data);
  });

  RojobaCo.Router.register('dispatch', function(route) {
    var selectedDispatchTypeFilter;
    selectedDispatchTypeFilter = 'Awaiting Dispatch,QC Passed';
    $('#dispatchgrid').tablegrid({
      idColumn: 'JobNumber',
      multiselect: true,
      footer: false,
      filter: true,
      parentColumn: 'JobParent',
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        $('#dispatchgrid').tablegrid('showLoading');
        RojobaCo.BusinessCentral.getOrders(selectedDispatchTypeFilter, function(data) {
          var jobs;
          jobs = data.Jobs;
          data = {
            prevId: null,
            nextId: null,
            records: jobs.length,
            total: 1,
            rows: jobs
          };
          $('#dispatchgrid').tablegrid('loadData', data);
        });
      },
      columnModel: [
        {
          caption: 'Job #',
          name: 'JobParent',
          width: 220,
          readonly: true,
          render: function(item) {
            var i,
        jobNumber,
        l,
        len,
        lineNumber,
        part,
        parts;
            jobNumber = parseInt(item.JobCardNumber.substring(3));
            lineNumber = item.LineNumber.toString();
            lineNumber = lineNumber.substring(0,
        lineNumber.length - 4);
            jobNumber = jobNumber + '-' + lineNumber;
            parts = item.JobNumber.split('-');
            if (parts.length > 2) {
              for (i = l = 0, len = parts.length; l < len; i = ++l) {
                part = parts[i];
                if (i >= 2) {
                  jobNumber += '-' + parts[i];
                }
              }
            }
            return jobNumber;
          }
        },
        {
          caption: 'Colour Code',
          name: 'ColourCode',
          width: 130,
          readonly: true
        },
        {
          caption: 'Colour Name',
          name: 'ColourName',
          width: 200,
          readonly: true
        },
        {
          caption: 'Production Date',
          name: 'DueDate',
          width: 130,
          readonly: true,
          render: function(item) {
            return moment(item.DueDate).format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT);
          }
        },
        {
          caption: 'D/C',
          name: 'DeliveryCollection',
          width: 150,
          readonly: true
        },
        {
          caption: 'Customer',
          name: 'Customer',
          width: 150,
          readonly: true
        },
        {
          caption: 'Purchase Reference',
          name: 'ExternalDocumentNumber',
          width: 140,
          readonly: true
        },
        {
          caption: 'Order Date',
          name: 'OrderDate',
          width: 130,
          readonly: true,
          render: function(item) {
            if (item.OrderDate) {
              return moment(item.OrderDate).format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT);
            }
            return '';
          }
        },
        {
          caption: 'Time of Collection',
          name: 'CollectionTime',
          width: 100,
          readonly: true
        },
        {
          caption: 'Type of Order',
          name: 'OrderType',
          width: 100,
          readonly: true
        },
        {
          caption: 'To Be Delivered',
          name: 'DeliveryDate',
          width: 130,
          readonly: true,
          render: function(item) {
            if (item.DeliveryDate) {
              return moment(item.DeliveryDate).format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT);
            }
            return '';
          }
        },
        {
          caption: 'Delivery Time',
          name: 'DeliveryTime',
          width: 100,
          readonly: true
        },
        {
          caption: 'Ext to be coated',
          name: 'ExtToBeCoated',
          width: 100
        },
        {
          caption: 'Total m2',
          name: 'TotalM2',
          width: 100
        },
        {
          caption: '# Flight Bars',
          name: 'NumberOfFlightBars',
          width: 100
        },
        {
          caption: 'Route',
          name: 'Route',
          width: 100,
          readonly: true
        },
        {
          caption: 'Item',
          name: 'ItemName',
          width: 200,
          readonly: true
        },
        {
          caption: 'Status',
          name: 'Status',
          inputType: 'select',
          dataKey: 'statuses',
          width: 150
        }
      ]
    });
    $('#filterby').dropdown('setOptions', {
      onOptionSelect: function(value) {
        var selectedStatusFilter;
        selectedStatusFilter = value;
        $('#dispatchgrid').tablegrid('refresh');
      }
    });
    $('#action').dropdown('setOptions', {
      menuMode: true,
      onOptionSelect: function(value) {
        var answer, l, len, row, rowId, rowIds, rows;
        if (value === '1') {
          answer = confirm('Are you sure you want to post the jobs to BC?');
          if (answer) {
            $('#dispatchgrid').tablegrid('showLoading');
            RojobaCo.ScheduledJob.postToBusinessCentral(function() {
              return $('#dispatchgrid').tablegrid('refresh');
            });
          }
        } else if (value === '2') {
          rowIds = $('#dispatchgrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to set as "Completed".');
          } else {
            answer = confirm('Are you sure you want to set the selected Jobs as Completed?');
            if (answer) {
              $('#dispatchgrid').tablegrid('showLoading');
              rows = [];
              for (l = 0, len = rowIds.length; l < len; l++) {
                rowId = rowIds[l];
                row = $('#dispatchgrid').tablegrid('getRow', rowId);
                row.Status = "Completed";
                rows.push(row);
              }
              RojobaCo.ScheduledJob.update(rows, function() {
                $('#dispatchgrid').tablegrid('refresh');
              });
            }
          }
        }
      }
    });
  });

  RojobaCo.Router.setData('form', function(route, callback) {
    var data;
    data = {
      actions: [],
      filters: []
    };
    data.actions.push({
      value: '1',
      text: 'Export to Excel'
    });
    data.actions.push({
      value: '2',
      text: 'Bulk Archive'
    });
    data.actions.push({
      value: '3',
      text: 'Bulk Schedule'
    });
    data.actions.push({
      value: '4',
      text: 'Lock'
    });
    data.filters.push({
      value: '1',
      text: 'Delayed Jobs'
    });
    data.filters.push({
      value: '2',
      text: 'QC Passed'
    });
    data.filters.push({
      value: '3',
      text: 'Awaiting Schedling'
    });
    data.filters.push({
      value: '4',
      text: 'Items Sent for Stripping'
    });
    data.filters.push({
      value: '5',
      text: 'Awaiting Material/Powder'
    });
    callback(data);
  });

  RojobaCo.Router.register('form', function() {});

  RojobaCo.Router.setData('home', function(route, callback) {
    var data, dayBeforeYesterday, threeDaysAgo;
    data = {
      actions: [],
      filters: [],
      scheduleDays: [],
      statuses: [],
      routes: RojobaCo.StandingData.Routes
    };
    // data.actions.push { value: '1', text: 'Export to Excel' }
    data.actions.push({
      value: '3',
      text: 'Bulk Schedule'
    });
    data.actions.push({
      value: '6',
      text: 'Bulk Awaiting Schedule'
    });
    data.actions.push({
      value: '7',
      text: 'Bulk Awaiting Dispatch'
    });
    data.actions.push({
      value: '4',
      text: 'Lock'
    });
    data.actions.push({
      value: '5',
      text: 'Unlock'
    });
    data.actions.push({
      value: '2',
      text: 'Bulk Archive'
    });
    data.filters.push({
      value: 'Scheduled',
      text: 'Scheduled'
    });
    data.filters.push({
      value: 'Delayed Jobs',
      text: 'Delayed Jobs'
    });
    data.filters.push({
      value: 'Awaiting Scheduling',
      text: 'Awaiting Scheduling'
    });
    data.filters.push({
      value: 'Items Sent for Stripping',
      text: 'Items Sent for Stripping'
    });
    data.filters.push({
      value: 'Awaiting Material/Powder',
      text: 'Awaiting Material/Powder'
    });
    data.statuses.push({
      value: 'Awaiting Scheduling',
      label: 'Awaiting Scheduling'
    });
    data.statuses.push({
      value: 'Delayed Jobs',
      label: 'Delayed Jobs'
    });
    data.statuses.push({
      value: 'QC Passed',
      label: 'QC Passed'
    });
    data.statuses.push({
      value: 'Items Sent for Stripping',
      label: 'Items Sent for Stripping'
    });
    data.statuses.push({
      value: 'Awaiting Material/Powder',
      label: 'Awaiting Material/Powder'
    });
    data.scheduleDays.push({
      value: moment().format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: 'Today'
    });
    data.scheduleDays.push({
      value: moment().add(1, 'days').format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: 'Tomorrow'
    });
    dayBeforeYesterday = moment().add(2, 'days');
    data.scheduleDays.push({
      value: dayBeforeYesterday.format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: dayBeforeYesterday.format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT)
    });
    threeDaysAgo = moment().add(3, 'days');
    data.scheduleDays.push({
      value: threeDaysAgo.format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: threeDaysAgo.format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT)
    });
    callback(data);
  });

  RojobaCo.Router.register('home', function(route) {
    var jobToPhase, processData, selectedStatusFilter;
    processData = function(response) {
      var data, deferred;
      deferred = $.Deferred();
      data = {
        prevId: null,
        nextId: null,
        records: response.Jobs.length,
        total: 1,
        rows: response.Jobs
      };
      $('#productiongrid').tablegrid('loadData', data);
      deferred.resolve();
      return deferred.promise();
    };
    selectedStatusFilter = "";
    jobToPhase = null;
    $('#productiongrid').tablegrid({
      idColumn: 'JobNumber',
      multiselect: {
        hidden: function(item) {
          return item.IsLocked;
        }
      },
      footer: false,
      filter: false,
      edit: true,
      editOnSelect: true,
      parentColumn: 'JobParent',
      selectData: {
        statuses: route.data.statuses,
        routes: route.data.routes
      },
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        $('#productiongrid').tablegrid('showLoading');
        RojobaCo.BusinessCentral.getOrders(selectedStatusFilter, function(response) {
          var promise;
          promise = processData(response);
          promise.then(function() {
            $('.tablegrid-frozen-parentrow').on('click', function(e) {
              var currentStatus, dropdownSelect, l, len, ref, status, statusDropdownOptions;
              if (!$(this).hasClass('dropdown-statuselect')) {
                $(this).addClass('dropdown-statuselect');
                statusDropdownOptions = '';
                currentStatus = $(e.target).text();
                ref = route.data.statuses;
                for (l = 0, len = ref.length; l < len; l++) {
                  status = ref[l];
                  if (currentStatus === status.label) {
                    statusDropdownOptions += '<option selected value="' + status.label + '">' + status.label + '</option>';
                  } else {
                    statusDropdownOptions += '<option value="' + status.label + '">' + status.label + '</option>';
                  }
                }
                $(e.target).addClass('hidden');
                dropdownSelect = $('<select>').addClass('status-dropdown').focusout(function() {
                  $(e.target).removeClass('hidden');
                  $('.dropdown-statuselect').removeClass('dropdown-statuselect');
                  $(this).remove();
                }).on('change', function(evt) {
                  var jobParent, len1, m, row, rows, updatedRows;
                  $('#productiongrid').tablegrid('showLoading');
                  rows = $('#productiongrid').tablegrid('getData');
                  jobParent = $(this).parent().attr('id').replace('F_Status_tmp-id-', '');
                  updatedRows = [];
                  for (m = 0, len1 = rows.length; m < len1; m++) {
                    row = rows[m];
                    if (row.JobParent === jobParent) {
                      updatedRows.push(row);
                      row.Status = this.value;
                    }
                  }
                  RojobaCo.ScheduledJob.update(updatedRows, function() {
                    $('#productiongrid').tablegrid('refresh');
                  });
                  $('.dropdown-statuselect').removeClass('dropdown-statuselect');
                  $(e.target).text(this.value).removeClass('hidden');
                }).html(statusDropdownOptions).appendTo(this);
              }
            });
          });
        });
      },
      columnModel: [
        {
          caption: 'Job #',
          name: 'JobParent',
          width: 220,
          readonly: true,
          render: function(item) {
            var i,
        jobNumber,
        l,
        len,
        lineNumber,
        part,
        parts;
            if (item.JobCardNumber) {
              jobNumber = parseInt(item.JobCardNumber.substring(3));
            }
            lineNumber = item.LineNumber.toString();
            lineNumber = lineNumber.substring(0,
        lineNumber.length - 4);
            jobNumber = jobNumber + '-' + lineNumber;
            parts = item.JobNumber.split('-');
            if (parts.length > 2) {
              for (i = l = 0, len = parts.length; l < len; i = ++l) {
                part = parts[i];
                if (i >= 2) {
                  jobNumber += '-' + parts[i];
                }
              }
            }
            return jobNumber;
          }
        },
        {
          caption: 'Colour Code',
          name: 'ColourCode',
          width: 130,
          readonly: true
        },
        {
          caption: 'Colour Name',
          name: 'ColourName',
          width: 200,
          readonly: true
        },
        {
          caption: 'Prod. Date',
          name: 'DueDate',
          width: 130,
          readonly: true,
          render: function(item) {
            return moment(item.DueDate).format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT);
          }
        },
        {
          caption: 'Customer',
          name: 'Customer',
          width: 150,
          readonly: true
        },
        {
          caption: 'Purchase Reference',
          name: 'ExternalDocumentNumber',
          width: 140,
          readonly: true
        },
        {
          caption: 'Job Line Item',
          name: 'ItemName',
          width: 200,
          readonly: true
        },
        {
          caption: 'Ext to be coated',
          name: 'ExtToBeCoated',
          dataType: 'int',
          width: 100,
          readonly: true
        },
        {
          caption: 'Total m2',
          name: 'TotalM2',
          dataType: 'float',
          width: 100,
          readonly: true
        },
        {
          caption: '# Flight Bars',
          name: 'NumberOfFlightBars',
          dataType: 'int',
          width: 100,
          readonly: true
        },
        {
          caption: 'Material Received Date',
          name: 'MaterialReceiveDate',
          width: 130,
          dataType: 'date',
          render: function(item) {
            if (item.MaterialReceiveDate) {
              return moment(item.MaterialReceiveDate).format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT);
            }
            return '';
          }
        },
        {
          caption: 'Delivery Date',
          name: 'DeliveryDate',
          width: 130,
          readonly: true,
          render: function(item) {
            if (item.DeliveryDate) {
              return moment(item.DeliveryDate).format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT);
            }
            return '';
          }
        },
        {
          caption: 'Delivery Time',
          name: 'DeliveryTime',
          width: 100,
          dataType: 'time'
        },
        {
          caption: 'Qty On Purchase',
          name: 'QuantityOnPurchaseOrder',
          width: 200,
          readonly: true
        },
        {
          caption: 'Qty on Sales',
          name: 'QuantityOnSalesOrder',
          width: 200,
          readonly: true
        },
        {
          caption: 'Qty on Component Line',
          name: 'QuantityOnComponentLines',
          width: 200,
          readonly: true
        },
        {
          caption: 'Status',
          name: 'Status',
          width: 150,
          freeze: true,
          readonly: true
        }
      ],
      afterCellEdit: function(rowId, element, name, value, rowIndex, columnIndex) {
        var row;
        row = $('#productiongrid').tablegrid('getRow', rowId);
        $('#productiongrid').tablegrid('showLoading');
        RojobaCo.ScheduledJob.update(row, function() {
          $('#productiongrid').tablegrid('refresh');
        });
      },
      rowAttr: function(item) {
        var styles;
        styles = '';
        if (item.Status === 'Scheduled') {
          styles += ' job-scheduled';
        }
        if (item.PhaseReason) {
          styles += ' job-phased';
        }
        if (styles.length > 0) {
          return {
            'class': styles.trim()
          };
        }
      },
      rowActions: [
        {
          icon: 'pencil',
          title: 'Phase',
          caption: 'Phase',
          cssClass: 'phase',
          hidden: function(item) {
            return item.IsLocked || item.Status === "QC Passed" || item.Status === "QA";
          },
          onClick: function(id) {
            window.location = '#phase/' + id;
          }
        },
        {
          icon: 'edit',
          title: 'Edit',
          caption: 'Edit',
          cssClass: 'Edit',
          hidden: function(item) {
            return item.IsLocked;
          },
          onClick: function(id) {
            window.location = '#updatejob/' + id;
          }
        },
        {
          icon: 'book',
          title: 'Archive',
          caption: 'Archive',
          cssClass: 'archive',
          hidden: function(item) {
            return item.IsLocked || item.Status === "QC Passed" || item.Status === "QA";
          },
          onClick: function(id) {
            var answer,
        archivedJobs,
        dataRow,
        dataRows,
        l,
        len,
        row;
            row = $('#productiongrid').tablegrid('getRow',
        id);
            if (!row.JobCardNumber) {
              answer = confirm('Are you sure you want to archive all Line Items of ' + id + '?');
              if (answer) {
                $('#productiongrid').tablegrid('showLoading');
                dataRows = $('#productiongrid').tablegrid('getData');
                archivedJobs = [];
                for (l = 0, len = dataRows.length; l < len; l++) {
                  dataRow = dataRows[l];
                  if (dataRow) {
                    if (dataRow.JobParent && dataRow.JobParent === id) {
                      dataRow.IsArchived = true;
                      archivedJobs.push(dataRow);
                    }
                  }
                }
                RojobaCo.ScheduledJob.update(archivedJobs,
        function() {
                  $('#productiongrid').tablegrid('refresh');
                });
              }
            } else {
              answer = confirm('Are you sure you want to archive Job# ' + row.JobCardNumber + '?');
              if (answer) {
                row.IsArchived = true;
                RojobaCo.ScheduledJob.update(row,
        function() {
                  $('#productiongrid').tablegrid('refresh');
                });
              }
            }
          }
        }
      ]
    });
    $('#ScheduleDay').datetimepicker({
      format: 'DD MMMM YYYY',
      ignoreReadonly: true,
      allowInputToggle: true,
      date: new Date()
    });
    $('#action').dropdown('setOptions', {
      menuMode: true,
      onOptionSelect: function(value) {
        var answer, l, len, len1, len2, len3, len4, m, n, o, q, row, rowId, rowIds, rows;
        if (value === '2') {
          rowIds = $('#productiongrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to archive.');
          } else {
            answer = confirm('Are you sure you want to archive the selected jobs?');
            if (answer) {
              $('#productiongrid').tablegrid('showLoading');
              rows = [];
              for (l = 0, len = rowIds.length; l < len; l++) {
                rowId = rowIds[l];
                row = $('#productiongrid').tablegrid('getRow', rowId);
                row.IsArchived = true;
                rows.push(row);
              }
              RojobaCo.ScheduledJob.update(rows, function() {
                $('#productiongrid').tablegrid('refresh');
              });
            }
          }
        } else if (value === '3') {
          rowIds = $('#productiongrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to schedule.');
          } else {
            $('#ScheduleDayModalTitle').text('Select Schedule Day');
            $('#ScheduleDay').dropdown('clear');
            $('#ScheduleDayModal').modal('show');
          }
        } else if (value === '4') {
          rowIds = $('#productiongrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to lock.');
          } else {
            answer = confirm('Are you sure you want to lock the selected jobs?');
            if (answer) {
              $('#productiongrid').tablegrid('showLoading');
              rows = [];
              for (m = 0, len1 = rowIds.length; m < len1; m++) {
                rowId = rowIds[m];
                row = $('#productiongrid').tablegrid('getRow', rowId);
                row.IsLocked = true;
                rows.push(row);
              }
              RojobaCo.ScheduledJob.update(rows, function() {
                $('#productiongrid').tablegrid('refresh');
              });
            }
          }
        } else if (value === '5') {
          rowIds = $('#productiongrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to unlock.');
          } else {
            answer = confirm('Are you sure you want to unlock the selected jobs?');
            if (answer) {
              $('#productiongrid').tablegrid('showLoading');
              rows = [];
              for (n = 0, len2 = rowIds.length; n < len2; n++) {
                rowId = rowIds[n];
                row = $('#productiongrid').tablegrid('getRow', rowId);
                row.IsLocked = false;
                rows.push(row);
              }
              RojobaCo.ScheduledJob.update(rows, function() {
                $('#productiongrid').tablegrid('refresh');
              });
            }
          }
        } else if (value === '6') {
          rowIds = $('#productiongrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to set as "Awaiting Scheduling".');
          } else {
            answer = confirm('Are you sure you want to set the selected jobs as "Awaiting Scheduling"?');
            if (answer) {
              $('#productiongrid').tablegrid('showLoading');
              rows = [];
              for (o = 0, len3 = rowIds.length; o < len3; o++) {
                rowId = rowIds[o];
                row = $('#productiongrid').tablegrid('getRow', rowId);
                row.Status = 'Awaiting Scheduling';
                rows.push(row);
              }
              RojobaCo.ScheduledJob.update(rows, function() {
                $('#productiongrid').tablegrid('refresh');
              });
            }
          }
        } else if (value === '7') {
          rowIds = $('#productiongrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to set as "Awaiting Dispatch".');
          } else {
            answer = confirm('Are you sure you want to set the selected jobs as "Awaiting Dispatch"?');
            if (answer) {
              $('#productiongrid').tablegrid('showLoading');
              rows = [];
              for (q = 0, len4 = rowIds.length; q < len4; q++) {
                rowId = rowIds[q];
                row = $('#productiongrid').tablegrid('getRow', rowId);
                row.Status = 'Awaiting Dispatch';
                rows.push(row);
              }
              RojobaCo.ScheduledJob.update(rows, function() {
                $('#productiongrid').tablegrid('refresh');
              });
            }
          }
        }
      }
    });
    $('#filter').dropdown('setOptions', {
      onOptionSelect: function(value) {
        selectedStatusFilter = value;
        $('#productiongrid').tablegrid('refresh');
      }
    });
    $('#syncjobs').on('click', function() {
      var uri;
      $('#productiongrid').tablegrid('showLoading');
      uri = RojobaCo.Constants.API_URI + 'api/orders';
      $.ajax({
        type: 'POST',
        url: uri,
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
        },
        success: function() {
          $('#productiongrid').tablegrid('refresh');
        }
      });
    });
    $('#ScheduleDayForm').validate({
      rules: {
        ScheduleDay: {
          required: true
        }
      },
      messages: {
        ScheduleDay: {
          required: 'Please select a day to schedule'
        }
      },
      submitHandler: function(form) {
        var data, l, len, row, rowId, rowIds, uri;
        $('#productiongrid').tablegrid('showLoading');
        rowIds = $('#productiongrid').tablegrid('getSelectedIds');
        data = {};
        data.JobParents = [];
        for (l = 0, len = rowIds.length; l < len; l++) {
          rowId = rowIds[l];
          row = $('#productiongrid').tablegrid('getRow', rowId);
          if (!data.JobParents.includes(row.JobParent)) {
            data.JobParents.push(row.JobParent);
          }
        }
        data.ScheduleDate = moment($('#ScheduleDay').val()).format(RojobaCo.Constants.DATE_STRING_FORMAT);
        $('#ScheduleDayModal').modal('hide');
        uri = RojobaCo.Constants.API_URI + 'api/schedulejob';
        $.ajax({
          type: 'POST',
          url: uri,
          data: JSON.stringify(data),
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function() {
            alert("Jobs Scheduled Successfully!");
            $('#productiongrid').tablegrid('refresh');
          },
          error: function(data) {
            alert(data.responseText);
            $('#productiongrid').tablegrid('refresh');
          }
        });
        return;
        return false;
      }
    });
  });

  RojobaCo.Router.setData('inventorystatus', function(route, callback) {
    var data;
    data = {
      routes: RojobaCo.StandingData.Routes,
      actions: [],
      filters: []
    };
    data.actions.push({
      value: '1',
      text: 'Bulk Archive'
    });
    data.filters.push({
      value: '1',
      text: 'Stock Items < 200g'
    });
    callback(data);
  });

  RojobaCo.Router.register('inventorystatus', function(route) {
    var selectedFilter;
    selectedFilter = "";
    $('#refreshtimer').data('lastrefresh', (new Date).getTime());
    $('#inventorystatusgrid').tablegrid({
      idColumn: 'StockCode',
      footer: false,
      edit: true,
      editOnSelect: true,
      parentColumn: 'ProductCode',
      expandParentColumns: false,
      multiselect: true,
      selectData: {
        routes: route.data.routes
      },
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        $('#inventorystatusgrid').tablegrid('showLoading');
        RojobaCo.StockPosting.getAllStockPosting(function(response) {
          var StockUpdateDTAsDate, data, l, len, len1, m, ref, ref1, selectedStockDate, stockPost, tableStockPosting;
          tableStockPosting = [];
          if ($('#search-itemcode').val().length > 0) {
            ref = response.StockPostings;
            for (l = 0, len = ref.length; l < len; l++) {
              stockPost = ref[l];
              if (selectedFilter === 1) {
                if (stockPost.ProductCode !== "" && stockPost.ProductCode.indexOf($('#search-itemcode').val()) !== -1 && !stockPost.IsCompleted && stockPost.StockToPost < 200) {
                  if (stockPost.DifferencePercentage > 2) {
                    stockPost.HasStock = false;
                  }
                  stockPost.ForcedParentValues = {
                    BCInventory: stockPost.BCInventory,
                    Difference: stockPost.Difference,
                    DifferencePercentage: stockPost.DifferencePercentage + " %"
                  };
                  if (stockPost.StockUpdateDateTimeFormat) {
                    selectedStockDate = new Date(moment($('#stock-datepicker').val()).format(RojobaCo.Constants.DATE_STRING_FORMAT));
                    StockUpdateDTAsDate = new Date(stockPost.StockUpdateDateTimeFormat);
                    if (selectedStockDate > StockUpdateDTAsDate) {
                      stockPost.ColourRow = true;
                    }
                  } else {
                    stockPost.ColourRow = true;
                  }
                  tableStockPosting.push(stockPost);
                }
              } else {
                if (stockPost.ProductCode !== "" && stockPost.ProductCode.indexOf($('#search-itemcode').val()) !== -1 && !stockPost.IsCompleted) {
                  if (stockPost.DifferencePercentage > 2) {
                    stockPost.HasStock = false;
                  }
                  stockPost.ForcedParentValues = {
                    BCInventory: stockPost.BCInventory,
                    Difference: stockPost.Difference,
                    DifferencePercentage: stockPost.DifferencePercentage + " %"
                  };
                  if (stockPost.StockUpdateDateTimeFormat) {
                    selectedStockDate = new Date(moment($('#stock-datepicker').val()).format(RojobaCo.Constants.DATE_STRING_FORMAT));
                    StockUpdateDTAsDate = new Date(stockPost.StockUpdateDateTimeFormat);
                    if (selectedStockDate > StockUpdateDTAsDate) {
                      stockPost.ColourRow = true;
                    }
                  } else {
                    stockPost.ColourRow = true;
                  }
                  tableStockPosting.push(stockPost);
                }
              }
              data = {
                prevId: null,
                nextId: null,
                records: tableStockPosting.length,
                total: 1,
                rows: tableStockPosting
              };
            }
          } else {
            ref1 = response.StockPostings;
            for (m = 0, len1 = ref1.length; m < len1; m++) {
              stockPost = ref1[m];
              if (selectedFilter === 1) {
                if (stockPost.StockToPost < 200) {
                  if (stockPost.DifferencePercentage > 2) {
                    stockPost.HasStock = false;
                  }
                  stockPost.ForcedParentValues = {
                    BCInventory: stockPost.BCInventory,
                    Difference: stockPost.Difference.toFixed(2),
                    DifferencePercentage: stockPost.DifferencePercentage.toFixed(2) + " %"
                  };
                  if (stockPost.StockUpdateDateTimeFormat) {
                    selectedStockDate = new Date(moment($('#stock-datepicker').val()).format(RojobaCo.Constants.DATE_STRING_FORMAT));
                    StockUpdateDTAsDate = new Date(stockPost.StockUpdateDateTimeFormat);
                    if (selectedStockDate > StockUpdateDTAsDate) {
                      stockPost.ColourRow = true;
                    }
                  } else {
                    stockPost.ColourRow = true;
                  }
                  tableStockPosting.push(stockPost);
                }
              } else {
                if (stockPost.DifferencePercentage > 2) {
                  stockPost.HasStock = false;
                }
                stockPost.ForcedParentValues = {
                  BCInventory: stockPost.BCInventory,
                  Difference: stockPost.Difference.toFixed(2),
                  DifferencePercentage: stockPost.DifferencePercentage.toFixed(2) + " %"
                };
                if (stockPost.StockUpdateDateTimeFormat) {
                  selectedStockDate = new Date(moment($('#stock-datepicker').val()).format(RojobaCo.Constants.DATE_STRING_FORMAT));
                  StockUpdateDTAsDate = new Date(stockPost.StockUpdateDateTimeFormat);
                  if (selectedStockDate > StockUpdateDTAsDate) {
                    stockPost.ColourRow = true;
                  }
                } else {
                  stockPost.ColourRow = true;
                }
                tableStockPosting.push(stockPost);
              }
              data = {
                prevId: null,
                nextId: null,
                records: tableStockPosting.length,
                total: 1,
                rows: tableStockPosting
              };
            }
          }
          $('#inventorystatusgrid').tablegrid('loadData', data);
        });
      },
      columnModel: [
        {
          caption: 'Item Code',
          name: 'ProductCode',
          readonly: true,
          width: 150,
          render: function(item) {
            console.log(item);
            return item.StockCode;
          }
        },
        {
          caption: 'Item Description',
          name: 'ContainerDescription',
          readonly: true,
          width: 200
        },
        {
          caption: 'Item BC Inventory',
          name: 'BCInventory',
          dataType: 'float',
          readonly: true,
          width: 100,
          render: function(item) {
            return '';
          }
        },
        {
          caption: 'Scale Total',
          name: 'StockToPost',
          dataType: 'float',
          readonly: true,
          width: 150
        },
        {
          caption: 'Difference',
          name: 'Difference',
          dataType: 'float',
          readonly: true,
          width: 150,
          render: function(item) {
            return '';
          }
        },
        {
          caption: 'Difference Percentage',
          name: 'DifferencePercentage',
          dataType: 'float',
          readonly: true,
          width: 150,
          render: function(item) {
            return '';
          }
        }
      ],
      afterCellEdit: function(rowId, element, name, value, rowIndex, columnIndex) {
        var row;
        row = $('#updatejobgrid').tablegrid('getRow', rowId);
        $('#updatejobgrid').tablegrid('updateRow', row);
      }
    });
    $('#action').dropdown('setOptions', {
      menuMode: true,
      onOptionSelect: function(value) {
        var answer, data, l, len, row, rowId, rowIds;
        if (value === '1') {
          rowIds = $('#inventorystatusgrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more to Archive.');
          } else {
            answer = confirm('Are you sure you want to Archive these items?');
            if (answer) {
              $('#inventorystatusgrid').tablegrid('showLoading');
              data = {};
              data.StockPostings = [];
              for (l = 0, len = rowIds.length; l < len; l++) {
                rowId = rowIds[l];
                row = $('#inventorystatusgrid').tablegrid('getRow', rowId);
                row.IsArchived = true;
                data.StockPostings.push(row);
              }
              RojobaCo.StockPosting.updateStockPostings(data, function() {
                $('#inventorystatusgrid').tablegrid('refresh');
              });
            }
          }
        }
      }
    });
    $('#stock-datepicker').datetimepicker({
      format: 'DD MMMM YYYY',
      ignoreReadonly: true,
      allowInputToggle: true,
      date: new Date()
    }).on('dp.change', function(e) {
      $('#inventorystatusgrid').tablegrid('refresh');
    });
    $('#filter').dropdown('setOptions', {
      onOptionSelect: function(value) {
        selectedFilter = value;
        $('#productiongrid').tablegrid('refresh');
      }
    });
    $('#search-itemcode').on('change', function() {
      $('#inventorystatusgrid').tablegrid('refresh');
    });
    //Pulls the column headers to the left 
    $('.tablegrid-column span').css({
      'float': 'left'
    });
  });

  RojobaCo.Router.setData('manualjobcard', function(route, callback) {
    var data, dayBeforeYesterday, threeDaysAgo;
    data = {
      actions: [],
      filters: [],
      scheduleDays: [],
      statuses: [],
      routes: RojobaCo.StandingData.Routes
    };
    data.filters.push({
      value: 'Awaiting Scheduling',
      text: 'Awaiting Scheduling'
    });
    data.filters.push({
      value: 'Scheduled',
      text: 'Scheduled'
    });
    // data.actions.push { value: '1', text: 'Export to Excel' }
    data.actions.push({
      value: '2',
      text: 'Bulk Schedule'
    });
    data.actions.push({
      value: '3',
      text: 'Bulk Awaiting Schedule'
    });
    data.actions.push({
      value: '1',
      text: 'Bulk Archive'
    });
    data.actions.push({
      value: '4',
      text: 'Create Manual Job Card'
    });
    data.scheduleDays.push({
      value: moment().format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: 'Today'
    });
    data.scheduleDays.push({
      value: moment().add(1, 'days').format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: 'Tomorrow'
    });
    dayBeforeYesterday = moment().add(2, 'days');
    data.scheduleDays.push({
      value: dayBeforeYesterday.format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: dayBeforeYesterday.format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT)
    });
    threeDaysAgo = moment().add(3, 'days');
    data.scheduleDays.push({
      value: threeDaysAgo.format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: threeDaysAgo.format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT)
    });
    callback(data);
  });

  RojobaCo.Router.register('manualjobcard', function(route) {
    var jobToPhase, processData, selectedStatusFilter;
    processData = function(response) {
      var data, deferred, filteredJobs, job, l, len, ref;
      deferred = $.Deferred();
      filteredJobs = [];
      ref = response.Jobs;
      for (l = 0, len = ref.length; l < len; l++) {
        job = ref[l];
        if (job.JobCardNumber.toLowerCase().search("jobm") >= 0) {
          filteredJobs.push(job);
        }
      }
      data = {
        prevId: null,
        nextId: null,
        records: filteredJobs.length,
        total: 1,
        rows: filteredJobs
      };
      $('#manualjobcardgrid').tablegrid('loadData', data);
      deferred.resolve();
      return deferred.promise();
    };
    selectedStatusFilter = "";
    jobToPhase = null;
    $('#manualjobcardgrid').tablegrid({
      idColumn: 'JobCardNumber',
      multiselect: {
        hidden: function(item) {
          return item.IsLocked;
        }
      },
      footer: false,
      filter: false,
      edit: true,
      editOnSelect: true,
      selectData: {
        statuses: route.data.statuses,
        routes: route.data.routes
      },
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        $('#manualjobcardgrid').tablegrid('showLoading');
        RojobaCo.BusinessCentral.getOrders(selectedStatusFilter, function(response) {
          var promise;
          promise = processData(response);
          promise.then(function() {
            $('.tablegrid-frozen-parentrow').on('click', function(e) {
              var currentStatus, dropdownSelect, l, len, ref, status, statusDropdownOptions;
              if (!$(this).hasClass('dropdown-statuselect')) {
                $(this).addClass('dropdown-statuselect');
                statusDropdownOptions = '';
                currentStatus = $(e.target).text();
                ref = route.data.statuses;
                for (l = 0, len = ref.length; l < len; l++) {
                  status = ref[l];
                  if (currentStatus === status.label) {
                    statusDropdownOptions += '<option selected value="' + status.label + '">' + status.label + '</option>';
                  } else {
                    statusDropdownOptions += '<option value="' + status.label + '">' + status.label + '</option>';
                  }
                }
                $(e.target).addClass('hidden');
                dropdownSelect = $('<select>').addClass('status-dropdown').focusout(function() {
                  $(e.target).removeClass('hidden');
                  $('.dropdown-statuselect').removeClass('dropdown-statuselect');
                  $(this).remove();
                }).on('change', function(evt) {
                  var jobParent, len1, m, row, rows, updatedRows;
                  $('#manualjobcardgrid').tablegrid('showLoading');
                  rows = $('#manualjobcardgrid').tablegrid('getData');
                  jobParent = $(this).parent().attr('id').replace('F_Status_tmp-id-', '');
                  updatedRows = [];
                  for (m = 0, len1 = rows.length; m < len1; m++) {
                    row = rows[m];
                    if (row.JobParent === jobParent) {
                      updatedRows.push(row);
                      row.Status = this.value;
                    }
                  }
                  RojobaCo.ScheduledJob.update(updatedRows, function() {
                    $('#manualjobcardgrid').tablegrid('refresh');
                  });
                  $('.dropdown-statuselect').removeClass('dropdown-statuselect');
                  $(e.target).text(this.value).removeClass('hidden');
                }).html(statusDropdownOptions).appendTo(this);
              }
            });
          });
        });
      },
      columnModel: [
        {
          caption: 'Job #',
          name: 'JobCardNumber',
          width: 220,
          readonly: true
        },
        {
          // render: (item) ->
          //     if item.JobCardNumber
          //         jobNumber = parseInt item.JobCardNumber.substring 3
          //     lineNumber = item.LineNumber.toString()
          //     lineNumber = lineNumber.substring 0, lineNumber.length - 4
          //     jobNumber = jobNumber + '-' + lineNumber
          //     parts = item.JobNumber.split '-'
          //     if parts.length > 2
          //         for part,i in parts 
          //             if i >= 2
          //                 jobNumber += '-' + parts[i]

          //     return jobNumber
          caption: 'Colour Code',
          name: 'ColourCode',
          width: 150,
          readonly: true
        },
        {
          caption: 'Colour Name',
          name: 'ColourName',
          width: 220,
          readonly: true
        },
        {
          caption: 'Customer',
          name: 'Customer',
          width: 200,
          readonly: false
        },
        {
          caption: 'Order Quantity',
          name: 'ExtToBeCoated',
          width: 200,
          readonly: false
        },
        {
          caption: 'Purchase Reference',
          name: 'PurchaseReference',
          width: 200,
          readonly: false
        },
        {
          caption: 'Status',
          name: 'Status',
          width: 150,
          freeze: true,
          readonly: true
        }
      ],
      afterCellEdit: function(rowId, element, name, value, rowIndex, columnIndex) {
        var data, row;
        row = $('#manualjobcardgrid').tablegrid('getRow', rowId);
        $('#manualjobcardgrid').tablegrid('showLoading');
        data = {};
        data.ScheduledJobHeaders = [];
        data.ScheduledJobHeaders.push(row);
        RojobaCo.ScheduledJob.updateManualJobCards(data, function() {
          $('#manualjobcardgrid').tablegrid('refresh');
        });
      },
      rowAttr: function(item) {
        var styles;
        styles = '';
        if (item.Status === 'Scheduled') {
          styles += ' job-scheduled';
        }
        if (styles.length > 0) {
          return {
            'class': styles.trim()
          };
        }
      },
      rowActions: [
        {
          icon: 'edit',
          title: 'Edit',
          caption: 'Edit',
          cssClass: 'Edit',
          hidden: function(item) {
            return item.IsLocked;
          },
          onClick: function(id) {
            var html,
        row;
            // $('#manualjobcard-row').remove()
            row = $('#manualjobcardgrid').tablegrid('getRow',
        id);
            $('#editcolours-searchselect').searchselect('setValue',
        row.ColourName,
        row.ColourCode);
            $('#EditCustomerName').val(row.Customer);
            $('#EditPurchaseOrder').val(row.PurchaseReference);
            $('#EditOrderQuantity').val(row.ExtToBeCoated);
            html = '<div id="manualjobcard-row" data-object=' + JSON.stringify(row) + '></div>';
            localStorage.setItem("ManualJobCardRow",
        JSON.stringify(row));
            $('#manualjobcard-row-parent').append(html);
            $('#EditManualJobCardModalTitle').text('Editing Job Card ' + row.JobParent);
            $('#EditManualJobCardModal').modal('show');
          }
        },
        {
          icon: 'book',
          title: 'Archive',
          caption: 'Archive',
          cssClass: 'archive',
          hidden: function(item) {
            return item.IsLocked || item.Status === "QC Passed" || item.Status === "QA";
          },
          onClick: function(id) {
            var answer,
        data,
        row;
            row = $('#manualjobcardgrid').tablegrid('getRow',
        id);
            answer = confirm('Are you sure you want to archive ' + row.JobParent + '?');
            if (answer) {
              data = {};
              data.ScheduledJobHeaders = [];
              row.IsArchived = true;
              data.ScheduledJobHeaders.push(row);
              RojobaCo.ScheduledJob.updateManualJobCards(data,
        function() {
                $('#manualjobcardgrid').tablegrid('refresh');
              });
            }
          }
        }
      ]
    });
    $('#ScheduleDay').datetimepicker({
      format: 'DD MMMM YYYY',
      ignoreReadonly: true,
      allowInputToggle: true,
      date: new Date()
    });
    $('#action').dropdown('setOptions', {
      menuMode: true,
      onOptionSelect: function(value) {
        var answer, data, l, len, len1, m, row, rowId, rowIds, rows;
        if (value === '1') {
          rowIds = $('#manualjobcardgrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to archive.');
          } else {
            answer = confirm('Are you sure you want to archive the selected jobs?');
            if (answer) {
              $('#manualjobcardgrid').tablegrid('showLoading');
              data = {};
              data.ScheduledJobHeaders = [];
              rows = [];
              for (l = 0, len = rowIds.length; l < len; l++) {
                rowId = rowIds[l];
                row = $('#manualjobcardgrid').tablegrid('getRow', rowId);
                row.IsArchived = true;
                data.ScheduledJobHeaders.push(row);
              }
              RojobaCo.ScheduledJob.updateManualJobCards(data, function() {
                $('#manualjobcardgrid').tablegrid('refresh');
              });
            }
          }
        } else if (value === '2') {
          rowIds = $('#manualjobcardgrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to schedule.');
          } else {
            $('#ScheduleDayModalTitle').text('Select Schedule Day');
            $('#ScheduleDay').dropdown('clear');
            $('#ScheduleDayModal').modal('show');
          }
        } else if (value === '3') {
          rowIds = $('#manualjobcardgrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to set as "Awaiting Scheduling".');
          } else {
            answer = confirm('Are you sure you want to set the selected jobs as "Awaiting Scheduling"?');
            if (answer) {
              $('#manualjobcardgrid').tablegrid('showLoading');
              data = {};
              data.ScheduledJobHeaders = [];
              rows = [];
              for (m = 0, len1 = rowIds.length; m < len1; m++) {
                rowId = rowIds[m];
                row = $('#manualjobcardgrid').tablegrid('getRow', rowId);
                row.Status = "Awaiting Scheduling";
                row.DueDate = null;
                data.ScheduledJobHeaders.push(row);
              }
              RojobaCo.ScheduledJob.updateManualJobCards(data, function() {
                $('#manualjobcardgrid').tablegrid('refresh');
              });
            }
          }
        } else if (value === '4') {
          $('#CreateManualJobCardModalTitle').text('Create Manual Job Card');
          $('#CreateManualJobCardModal').modal('show');
        }
      }
    });
    $('#colours-searchselect').searchselect({
      items: RojobaCo.StandingData.Colours,
      onItemMap: function(item) {
        return {
          value: item.text,
          label: item.value
        };
      }
    });
    $('#editcolours-searchselect').searchselect({
      items: RojobaCo.StandingData.Colours,
      onItemMap: function(item) {
        return {
          value: item.text,
          label: item.value
        };
      }
    });
    //Pulls the column headers to the left 
    $('.tablegrid-column span').css({
      'float': 'left'
    });
    $('#ScheduleDayForm').validate({
      rules: {
        ScheduleDay: {
          required: true
        }
      },
      messages: {
        ScheduleDay: {
          required: 'Please select a day to schedule'
        }
      },
      submitHandler: function(form) {
        var data, l, len, row, rowId, rowIds;
        $('#manualjobcardgrid').tablegrid('showLoading');
        rowIds = $('#manualjobcardgrid').tablegrid('getSelectedIds');
        data = {};
        data.JobParents = [];
        for (l = 0, len = rowIds.length; l < len; l++) {
          rowId = rowIds[l];
          row = $('#manualjobcardgrid').tablegrid('getRow', rowId);
          if (!data.JobParents.includes(row.JobParent)) {
            data.JobParents.push(row.JobParent);
          }
        }
        data.ScheduleDate = moment($('#ScheduleDay').val()).format(RojobaCo.Constants.DATE_STRING_FORMAT);
        $('#ScheduleDayModal').modal('hide');
        RojobaCo.ScheduledJob.scheduleJobs(data, function(response) {
          $('#manualjobcardgrid').tablegrid('refresh');
        });
      }
    });
    $('#CreateManualJobCardForm').validate({
      rules: {
        CustomerName: {
          required: true
        },
        PurchaseOrder: {
          required: true
        },
        OrderColour: {
          required: true
        },
        OrderQuantity: {
          required: true
        }
      },
      messages: {
        CustomerName: {
          required: 'Please enter a Customer Name'
        },
        PurchaseOrder: {
          required: 'Please enter a Purchase Order'
        },
        OrderColour: {
          required: 'Please enter an Order Colour'
        },
        OrderQuantity: {
          required: 'Please enter an Order Quantity'
        }
      },
      submitHandler: function(form) {
        var data, manualJobCard, selectedColour;
        $('#manualjobcardgrid').tablegrid('showLoading');
        data = {};
        data.ScheduledJobHeaders = [];
        manualJobCard = {};
        manualJobCard.Customer = $('#CustomerName').val();
        manualJobCard.PurchaseReference = $('#PurchaseOrder').val();
        selectedColour = $('#colours-searchselect').searchselect('getSelectedData');
        manualJobCard.ColourCode = selectedColour.value;
        manualJobCard.ColourName = selectedColour.text;
        manualJobCard.ExtToBeCoated = $('#OrderQuantity').val();
        manualJobCard.FactoryID = 1;
        data.ScheduledJobHeaders.push(manualJobCard);
        $('#CreateManualJobCardModal').modal('hide');
        RojobaCo.ScheduledJob.createManualJobCard(data, function(response) {
          $('#manualjobcardgrid').tablegrid('refresh');
        });
      }
    });
    $('#EditManualJobCardForm').validate({
      rules: {
        EditCustomerName: {
          required: true
        },
        EditPurchaseOrder: {
          required: true
        },
        EditOrderColour: {
          required: true
        },
        EditOrderQuantity: {
          required: true
        }
      },
      messages: {
        EditCustomerName: {
          required: 'Please enter a Customer Name'
        },
        EditPurchaseOrder: {
          required: 'Please enter a Purchase Order'
        },
        EditOrderColour: {
          required: 'Please enter an Order Colour'
        },
        EditOrderQuantity: {
          required: 'Please enter an Order Quantity'
        }
      },
      submitHandler: function(form) {
        var data, row, selectedColour;
        $('#manualjobcardgrid').tablegrid('showLoading');
        row = JSON.parse(localStorage.getItem('ManualJobCardRow'));
        selectedColour = $('#editcolours-searchselect').searchselect('getSelectedData');
        if (selectedColour) {
          row.ColourCode = selectedColour.value;
          row.ColourName = selectedColour.text;
        }
        row.Customer = $('#EditCustomerName').val();
        row.PurchaseReference = $('#EditPurchaseOrder').val();
        row.ExtToBeCoated = $('#EditOrderQuantity').val();
        data = {};
        data.ScheduledJobHeaders = [];
        data.ScheduledJobHeaders.push(row);
        $('#EditManualJobCardModal').modal('hide');
        RojobaCo.ScheduledJob.updateManualJobCards(data, function(response) {
          $('#manualjobcardgrid').tablegrid('refresh');
        });
      }
    });
  });

  // return false
  RojobaCo.Router.setData('phase', function(route, callback) {
    var data;
    data = {
      routes: RojobaCo.StandingData.Routes
    };
    callback(data);
  });

  RojobaCo.Router.register('phase', function(route) {
    $('#phasegrid').tablegrid({
      idColumn: 'JobNumber',
      footer: false,
      edit: true,
      editOnSelect: true,
      parentColumn: 'JobParent',
      expandParentColumns: true,
      selectData: {
        routes: route.data.routes
      },
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        $('#phasegrid').tablegrid('showLoading');
        RojobaCo.ScheduledJob.fetchJobsByParentId(route.id, function(response) {
          var data;
          data = {
            prevId: null,
            nextId: null,
            records: response.Jobs.length,
            total: 1,
            rows: response.Jobs
          };
          $('#phasegrid').tablegrid('loadData', data);
        });
      },
      columnModel: [
        {
          caption: 'Job #',
          name: 'JobParent',
          width: 220,
          readonly: true,
          render: function(item) {
            var i,
        icon,
        jobNumber,
        l,
        len,
        lineNumber,
        part,
        parts;
            jobNumber = parseInt(item.JobCardNumber.substring(3));
            lineNumber = item.LineNumber.toString();
            lineNumber = lineNumber.substring(0,
        lineNumber.length - 4);
            jobNumber = jobNumber + '-' + lineNumber;
            parts = item.JobNumber.split('-');
            if (parts.length > 2) {
              for (i = l = 0, len = parts.length; l < len; i = ++l) {
                part = parts[i];
                if (i >= 2) {
                  jobNumber += '-' + parts[i];
                }
              }
            }
            if (item.PhaseReason && item.PhaseReason !== 'Standard') {
              icon = '<i class="la la-info-circle" data-toggle="popover" title="PO# ' + item.PurchaseReference + '" data-content="' + item.PhaseReason + '" data-trigger="hover"></i>&nbsp;&nbsp;';
              return icon + jobNumber;
            }
            return jobNumber;
          }
        },
        {
          caption: 'Job Line Item',
          name: 'ItemName',
          width: 200,
          readonly: true
        },
        {
          caption: 'Total m2',
          name: 'TotalM2',
          dataType: 'float',
          width: 100,
          readonly: true
        },
        {
          caption: 'Ext to be coated',
          name: 'ExtToBeCoated',
          dataType: 'float',
          width: 100,
          readonly: true,
          render: function(item) {
            if (item.NewExtToBeCoated) {
              return item.ExtToBeCoated - item.NewExtToBeCoated;
            }
            return item.ExtToBeCoated;
          }
        },
        {
          caption: '# Flight Bars',
          name: 'NumberOfFlightBars',
          dataType: 'int',
          width: 100,
          readonly: true,
          render: function(item) {
            if (item.NewNumberOfFlightBars) {
              return item.NumberOfFlightBars - item.NewNumberOfFlightBars;
            }
            return item.NumberOfFlightBars;
          }
        },
        {
          caption: 'New - Ext to be coated',
          name: 'NewExtToBeCoated',
          dataType: 'int',
          width: 100
        },
        {
          caption: 'New - # Flight Bars',
          name: 'NewNumberOfFlightBars',
          dataType: 'int',
          width: 100
        },
        {
          caption: 'Route',
          name: 'Route',
          inputType: 'select',
          dataKey: 'routes',
          readonly: true,
          width: 100
        }
      ],
      afterCellEdit: function(rowId, element, name, value, rowIndex, columnIndex) {
        var row;
        row = $('#phasegrid').tablegrid('getRow', rowId);
        $('#phasegrid').tablegrid('updateRow', row);
      }
    });
    $('#cmdPhase').on('click', function(e) {
      var data, job, jobs, l, len, phasedLine, uri;
      jobs = $('#phasegrid').tablegrid('getData');
      $('#phasegrid').tablegrid('showLoading');
      data = {};
      data.Jobs = jobs;
      data.PhasedLines = [];
      for (l = 0, len = jobs.length; l < len; l++) {
        job = jobs[l];
        if (job.NewExtToBeCoated || job.NewNumberOfFlightBars) {
          if (!job.NewExtToBeCoated) {
            job.NewExtToBeCoated === 0;
          }
          if (!job.NewNumberOfFlightBars) {
            job.NewNumberOfFlightBars === 0;
          }
          phasedLine = {
            JobNumber: job.JobNumber,
            AmountOfExtrusions: job.NewExtToBeCoated,
            AmountOfFlightBars: job.NewNumberOfFlightBars
          };
          data.PhasedLines.push(phasedLine);
        }
      }
      uri = RojobaCo.Constants.API_URI + 'api/phase';
      $.ajax({
        type: 'POST',
        url: uri,
        data: JSON.stringify(data),
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
        },
        success: function() {
          alert('JobPhased Successfully!');
          window.history.go(-1);
        }
      });
    });
  });

  RojobaCo.Router.register('plonk', function() {
    $('#svgplonk').svgplonk({
      url: "http://localapi.footytailor.com:81/testtrainingplan/1",
      toolbox: [
        {
          name: 'ball',
          url: '/images/futbol-regular.svg',
          title: 'Soccer ball'
        },
        {
          name: 'playericon',
          url: '/images/add-player-icon.svg',
          title: 'Player'
        },
        {
          name: 'opposingplayer',
          url: '/images/add-opponent-icon.svg',
          title: 'OpposingPlayer'
        },
        {
          name: 'hurdle',
          url: 'https://image.flaticon.com/icons/svg/1707/1707097.svg',
          title: 'Hurdle'
        },
        {
          name: 'cone',
          url: 'https://image.flaticon.com/icons/svg/1672/1672586.svg',
          title: 'Cone'
        },
        {
          name: 'disc',
          url: '/images/add-disc-icon.svg',
          title: 'Disc'
        },
        {
          name: 'plainflag',
          url: 'https://image.flaticon.com/icons/svg/67/67298.svg',
          title: 'Plain flag'
        }
      ],
      canvas: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Soccer_field_-_empty.svg'
      }
    });
  });

  RojobaCo.Router.setData('reject', function(route, callback) {
    var data;
    data = {
      statuses: [],
      reasons: [],
      routes: RojobaCo.StandingData.Routes,
      yesAndNo: RojobaCo.StandingData.YesAndNo
    };
    data.statuses.push({
      value: 'Re-Coat',
      label: 'Re-Coat'
    });
    data.statuses.push({
      value: 'In-House Strip',
      label: 'In-House Strip'
    });
    data.statuses.push({
      value: 'External Strip',
      label: 'External Strip'
    });
    data.statuses.push({
      value: 'Replacement',
      label: 'Replacement'
    });
    data.reasons.push({
      value: 'Powder Coating - Undercoated',
      label: 'Powder - Coating Undercoated'
    });
    data.reasons.push({
      value: 'Powder Coating - Orange Peel',
      label: 'Powder - Coating Orange Peel'
    });
    data.reasons.push({
      value: 'Powder Coating - Cross Contamination',
      label: 'Powder - Coating Cross Contamination'
    });
    data.reasons.push({
      value: 'Powder Coating - Impurities / Nibs',
      label: 'Powder - Coating Impurities / Nibs'
    });
    data.reasons.push({
      value: 'Powder Coating - Incorrect Powder Used',
      label: 'Powder - Coating Incorrect Powder Used'
    });
    data.reasons.push({
      value: 'Powder - Inconsistent Colour',
      label: 'Powder - Inconsistent Colour'
    });
    data.reasons.push({
      value: 'Powder - Contaminated',
      label: 'Powder - Contaminated'
    });
    data.reasons.push({
      value: 'Powder - Nibs',
      label: 'Powder - Nibs'
    });
    data.reasons.push({
      value: 'Metal - Damaged by BWA',
      label: 'Metal - Damaged by BWA'
    });
    data.reasons.push({
      value: 'Metal - Imperfection',
      label: 'Metal - Imperfection'
    });
    data.reasons.push({
      value: 'Other',
      label: 'Other'
    });
    callback(data);
  });

  RojobaCo.Router.register('reject', function(route) {
    $('#rejectgrid').tablegrid({
      idColumn: 'JobNumber',
      footer: false,
      edit: true,
      editOnSelect: true,
      parentColumn: 'JobParent',
      expandParentColumns: true,
      selectData: {
        statuses: route.data.statuses,
        reasons: route.data.reasons,
        routes: route.data.routes,
        yesAndNo: route.data.yesAndNo
      },
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        $('#rejectgrid').tablegrid('showLoading');
        RojobaCo.ScheduledJob.fetchJobsByParentId(route.id, function(response) {
          var data;
          data = {
            prevId: null,
            nextId: null,
            records: response.Jobs.length,
            total: 1,
            rows: response.Jobs
          };
          $('#rejectgrid').tablegrid('loadData', data);
        });
      },
      columnModel: [
        {
          caption: 'Job #',
          name: 'JobCardNumber',
          width: 220,
          readonly: true,
          render: function(item) {
            var i,
        icon,
        jobNumber,
        l,
        len,
        lineNumber,
        part,
        parts;
            jobNumber = parseInt(item.JobCardNumber.substring(3));
            lineNumber = item.LineNumber.toString();
            lineNumber = lineNumber.substring(0,
        lineNumber.length - 4);
            jobNumber = jobNumber + '-' + lineNumber;
            parts = item.JobNumber.split('-');
            if (parts.length > 2) {
              for (i = l = 0, len = parts.length; l < len; i = ++l) {
                part = parts[i];
                if (i >= 2) {
                  jobNumber += '-' + parts[i];
                }
              }
            }
            if (item.PhaseReason && item.PhaseReason !== 'Standard') {
              icon = '<i class="la la-info-circle" data-toggle="popover" title="PO# ' + item.PurchaseReference + '" data-content="' + item.PhaseReason + '" data-trigger="hover"></i>&nbsp;&nbsp;';
              return icon + jobNumber;
            }
            return jobNumber;
          }
        },
        {
          caption: 'Job Line Item',
          name: 'ItemName',
          width: 200,
          readonly: true
        },
        {
          caption: 'Total m2',
          name: 'TotalM2',
          dataType: 'float',
          width: 100,
          readonly: true
        },
        {
          caption: 'Ext to be coated',
          name: 'ExtToBeCoated',
          dataType: 'int',
          width: 100,
          readonly: true,
          render: function(item) {
            if (item.NewExtToBeCoated) {
              return item.ExtToBeCoated - item.NewExtToBeCoated;
            }
            return item.ExtToBeCoated;
          }
        },
        {
          caption: '# Flight Bars',
          name: 'NumberOfFlightBars',
          dataType: 'int',
          width: 100,
          readonly: true,
          render: function(item) {
            if (item.NewNumberOfFlightBars) {
              return item.NumberOfFlightBars - item.NewNumberOfFlightBars;
            }
            return item.NumberOfFlightBars;
          }
        },
        {
          caption: 'New - Ext to be coated',
          name: 'NewExtToBeCoated',
          dataType: 'int',
          width: 100
        },
        {
          caption: 'New - # Flight Bars',
          name: 'NewNumberOfFlightBars',
          dataType: 'int',
          width: 100
        },
        {
          caption: 'Route',
          name: 'Route',
          inputType: 'select',
          dataKey: 'routes',
          width: 100
        },
        {
          caption: 'Reject Action',
          name: 'Status',
          inputType: 'select',
          dataKey: 'statuses',
          width: 130
        },
        {
          caption: 'Reject Reason',
          name: 'RejectReason',
          inputType: 'select',
          dataKey: 'reasons',
          width: 200
        },
        {
          caption: 'Other Reason',
          name: 'OtherReason',
          width: 200
        },
        {
          caption: 'Purchase Reference',
          name: 'ExternalDocumentNumber',
          width: 140
        },
        {
          caption: 'Manual JC',
          name: 'IsManualJC',
          inputType: 'select',
          dataKey: 'yesAndNo',
          width: 100,
          render: function(item) {
            if (item.IsManualJC) {
              return 'Yes';
            }
            return 'No';
          }
        }
      ],
      afterCellEdit: function(rowId, element, name, value, rowIndex, columnIndex) {
        var row;
        row = $('#rejectgrid').tablegrid('getRow', rowId);
        $('#rejectgrid').tablegrid('updateRow', row);
      }
    });
    $('#cmdReject').on('click', function(e) {
      var data, job, jobs, l, len, rejectedLine, uri;
      jobs = $('#rejectgrid').tablegrid('getData');
      $('#rejectgrid').tablegrid('showLoading');
      data = {};
      data.Jobs = jobs;
      data.RejectedLines = [];
      for (l = 0, len = jobs.length; l < len; l++) {
        job = jobs[l];
        if (job.NewExtToBeCoated || job.NewNumberOfFlightBars) {
          if (!job.NewExtToBeCoated) {
            job.NewExtToBeCoated === 0;
          }
          if (!job.NewNumberOfFlightBars) {
            job.NewNumberOfFlightBars === 0;
          }
          rejectedLine = {
            JobNumber: job.JobNumber,
            AmountOfExtrusions: job.NewExtToBeCoated,
            AmountOfFlightBars: job.NewNumberOfFlightBars
          };
          data.RejectedLines.push(rejectedLine);
        }
      }
      uri = RojobaCo.Constants.API_URI + 'api/reject';
      $.ajax({
        type: 'POST',
        url: uri,
        data: JSON.stringify(data),
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
        },
        success: function() {
          alert('Job rejected Successfully!');
          window.history.go(-1);
        }
      });
    });
  });

  RojobaCo.Router.setData('reports', function(route, callback) {
    var data;
    data = {
      routes: RojobaCo.StandingData.Routes
    };
    callback(data);
  });

  RojobaCo.Router.register('reports', function(route) {});

  RojobaCo.Router.setData('reportvariables', function(route, callback) {
    var data;
    data = {
      routes: RojobaCo.StandingData.Routes,
      actions: []
    };
    data.actions.push({
      value: '1',
      text: 'Create Shift'
    });
    callback(data);
  });

  RojobaCo.Router.register('reportvariables', function(route) {
    $('#reportvariablesgrid').tablegrid({
      idColumn: 'ID',
      footer: false,
      edit: true,
      editOnSelect: true,
      expandParentColumns: false,
      multiselect: true,
      selectData: {
        routes: route.data.routes
      },
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        RojobaCo.ScheduledJob.getReportVariables(RojobaCo.StandingData.DefaultFactoryId, function(response) {
          var data;
          data = {
            prevId: null,
            nextId: null,
            records: response.Shifts.length,
            total: 1,
            rows: response.Shifts
          };
          $('#stockpostinggrid').tablegrid('loadData', data);
        });
      },
      columnModel: [
        {
          caption: 'Shift#',
          name: 'NumberOfShifts',
          readonly: true,
          width: 200
        },
        {
          caption: 'Date',
          name: 'Date',
          readonly: true,
          width: 200
        }
      ],
      afterCellEdit: function(rowId, element, name, value, rowIndex, columnIndex) {}
    });
    
    //Pulls the column headers to the left 
    $('.tablegrid-column span').css({
      'float': 'left'
    });
  });

  RojobaCo.Router.setData('sandbox', function(route, callback) {
    var data;
    data = {
      scheduleDays: [],
      statuses: [],
      reasons: [],
      filters: [],
      yesAndNo: RojobaCo.StandingData.YesAndNo
    };
    data.filters.push({
      value: 'Scheduled',
      text: 'Scheduled'
    });
    data.filters.push({
      value: 'Awaiting Scheduling,Awaiting Powder,Items Sent for Stripping',
      text: 'Awaiting Scheduling'
    });
    data.filters.push({
      value: 'Stripping - Client Request',
      text: 'Stripping - Client Request'
    });
    data.filters.push({
      value: 'Stripping - QCR',
      text: 'Stripping - QCR'
    });
    data.filters.push({
      value: 'Awaiting Punched Mat. (ATLANTIS)',
      text: 'Awaiting Punched Mat. (ATLANTIS)'
    });
    data.filters.push({
      value: 'Wispeco Back Order (ATLANTIS)',
      text: 'Wispeco Back Order (ATLANTIS)'
    });
    data.filters.push({
      value: 'Awaiting Powder',
      text: 'Awaiting Powder'
    });
    data.filters.push({
      value: 'Awaiting Replacement Metal',
      text: 'Awaiting Replacement Metal'
    });
    data.filters.push({
      value: 'On Hold',
      text: 'On Hold'
    });
    callback(data);
  });

  RojobaCo.Router.register('sandbox', function(route) {
    var holder, list;
    list = [];
    list.push({
      value: "Booth1",
      text: "Booth1"
    });
    list.push({
      value: "Booth2",
      text: "Booth2"
    });
    list.push({
      value: "Booth3",
      text: "Booth3"
    });
    list.push({
      value: "Booth4",
      text: "Booth4"
    });
    holder = RojobaCo.Templates["b4-select"]({
      caption: "Filter by",
      name: "filter",
      colLabel: "col-sm-3",
      colInput: "col-sm-9",
      items: list,
      placeholder: 'test'
    });
    // myFunction = ->

    //     return
    // setTimeout myFunction, 5000
    // debugger
    $('#test').after(holder);
    $('#filter').dropdown();
  });

  
  RojobaCo.Router.setData('schedule', function(route, callback) {
    var data;
    data = {
      scheduleDays: [],
      statuses: [],
      actions: [],
      colours: RojobaCo.StandingData.Colours,
      routes: RojobaCo.StandingData.Routes
    };
    data.scheduleDays.push({
      value: 'Outstanding Jobs',
      text: 'Outstanding Jobs'
    });
    data.scheduleDays.push({
      value: moment().format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: 'Today'
    });
    data.scheduleDays.push({
      value: moment().add(1, 'days').format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: 'Tomorrow'
    });
    data.scheduleDays.push({
      value: moment().add(2, 'days').format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: moment().add(2, 'days').format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT)
    });
    data.scheduleDays.push({
      value: moment().add(3, 'days').format(RojobaCo.Constants.DATE_STRING_FORMAT),
      text: moment().add(3, 'days').format(RojobaCo.Constants.DATE_STRING_DISPLAY_FORMAT)
    });
    data.statuses.push({
      value: 'Receiving',
      label: 'Receiving'
    });
    data.statuses.push({
      value: 'Packing',
      label: 'Packing'
    });
    data.statuses.push({
      value: 'Pre-Treatment',
      label: 'Pre-Treatment'
    });
    data.statuses.push({
      value: 'Jigging',
      label: 'Jigging'
    });
    data.statuses.push({
      value: 'MissWorld',
      label: 'MissWorld'
    });
    data.statuses.push({
      value: 'De-Jigging',
      label: 'De-Jigging'
    });
    data.statuses.push({
      value: 'QA',
      label: 'QA'
    });
    data.statuses.push({
      value: 'Wrapping',
      label: 'Wrapping'
    });
    data.statuses.push({
      value: 'QC Passed',
      label: 'QC Passed'
    });
    data.actions.push({
      value: '12',
      text: 'Update Positions'
    });
    data.actions.push({
      value: '5',
      text: 'Adjust Route'
    });
    data.actions.push({
      value: '2',
      text: 'QC Passed'
    });
    data.actions.push({
      value: '11',
      text: 'Download JC'
    });
    data.actions.push({
      value: '6',
      text: 'Schedule'
    });
    data.actions.push({
      value: '9',
      text: 'Completed'
    });
    data.actions.push({
      value: '7',
      text: 'BC - Post Journal Entries'
    });
    data.actions.push({
      value: '1',
      text: 'Lock'
    });
    data.actions.push({
      value: '10',
      text: 'Unlock'
    });
    data.actions.push({
      value: '3',
      text: 'Awaiting Scheduling'
    });
    data.actions.push({
      value: '8',
      text: 'Add Colour Change'
    });
    data.actions.push({
      value: '13',
      text: 'Create Batch'
    });
    callback(data);
  });

  RojobaCo.Router.register('schedule', function(route) {
    var applyDragToRows, calculateTime, jobToPhase, scheduleDayAnchors, selectedScheduleDate, updateJobPhase, updateTimes;
    scheduleDayAnchors = $('.daily-schedule-day a');
    $(scheduleDayAnchors[1]).addClass('selected');
    selectedScheduleDate = $(scheduleDayAnchors[1]).data('value');
    scheduleDayAnchors.on('click', function(e) {
      scheduleDayAnchors.removeClass('selected');
      $(this).addClass('selected');
      selectedScheduleDate = $(this).data('value');
      $('#ScheduledDay').css({
        'background-color': ''
      });
      $('#StartTime').val(RojobaCo.ScheduleStartTime.getStartTime(selectedScheduleDate));
      $('#schedulegrid').tablegrid('refresh');
    });
    $('#AddBreakBtn').on('click', function(e) {
      var cnt, job, jobs, l, len, times;
      times = [];
      jobs = $('#schedulegrid').tablegrid('getData');
      cnt = 1;
      for (l = 0, len = jobs.length; l < len; l++) {
        job = jobs[l];
        if (!job.IsColourChange) {
          cnt++;
          times.push({
            value: job.Sequence * -1,
            text: job.StartOfJob
          });
        }
      }
      $('#TimeOfBreak').dropdown('setData', times);
      $('#DurationOfBreak').autoNumeric('set', 25);
      $('#AddBreakModalTitle').text('Add Break Details');
      $('#AddBreakModal').modal('show');
    });
    $('#StartTime').val(RojobaCo.ScheduleStartTime.getStartTime(selectedScheduleDate));
    $('#StartTime').on('dp.change', function(e) {
      RojobaCo.ScheduleStartTime.updateStartTime(selectedScheduleDate, $(this).val());
      $('#schedulegrid').tablegrid('refresh');
    });
    calculateTime = function(value) {
      var hours, minutes, seconds;
      hours = parseInt(value * 24);
      minutes = parseInt(((value * 24) - hours) * 60);
      seconds = parseInt((((value * 24) * 60) - minutes) * 60);
      return ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2);
    };
    updateTimes = function(jobs, callback) {
      var id, job, l, len, now, prevJob, time, timeParts, v1, v2;
      now = moment();
      timeParts = $('#StartTime').val().split(':');
      now.set({
        hour: parseInt(timeParts[0]),
        minute: parseInt(timeParts[1]),
        second: 0
      });
      prevJob = null;
      id = $.now();
      for (l = 0, len = jobs.length; l < len; l++) {
        job = jobs[l];
        if (prevJob) {
          time = calculateTime(prevJob.DurationOfJob);
          timeParts = time.split(':');
          now.add(timeParts[0], 'h');
          now.add(timeParts[1], 'm');
          now.add(timeParts[2], 's');
        }
        if (!job.IsColourChange && !job.IsBreak) {
          v1 = job.NumberOfFlightBars * (252 / 60) / 1440;
          v2 = 0;
          // if job.Route is 'MANUAL' then v2 = ((252 * 2) / 60) / 1440
          job.DurationOfJob = v1 + v2;
        }
        job.StartOfJob = now.format('HH:mm:ss');
        prevJob = job;
      }
      //Uses the last job of the jobs forloop to update the last flight bar and wrapping time.
      if (prevJob) {
        time = calculateTime(prevJob.DurationOfJob);
        timeParts = time.split(':');
        now.add(timeParts[0], 'h');
        now.add(timeParts[1], 'm');
        now.add(timeParts[2], 's');
        $('#LastFlightBarTime').text(now.format('HH:mm'));
        now.add(30, 'm');
        $('#LastWrappingTime').text(now.format('HH:mm'));
      }
      multisort(jobs, [
        function(a) {
          return moment(selectedScheduleDate + ' ' + a.StartOfJob);
        }
      ]);
      callback();
    };
    jobToPhase = null;
    $('#schedulegrid').tablegrid({
      idColumn: 'JobCardNumber',
      footer: false,
      draggableRows: false,
      filter: false,
      edit: true,
      editOnSelect: true,
      multiselect: true,
      selectData: {
        statuses: route.data.statuses,
        routes: route.data.routes
      },
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        $('#schedulegrid').tablegrid('showLoading');
        selectedScheduleDate = '';
        if ($('.daily-schedule-day a.selected').length > 0) {
          selectedScheduleDate = $('.daily-schedule-day a.selected').data('value');
        } else {
          selectedScheduleDate = moment($('#ScheduledDay').val()).format(RojobaCo.Constants.DATE_STRING_FORMAT);
        }
        RojobaCo.ScheduledJob.getJobsScheduledForDate(selectedScheduleDate, function(data) {
          updateTimes(data.Jobs, function() {
            var excludedStatus, l, len, row, rows, totalm2, totalm2Remaining;
            data = {
              prevId: null,
              nextId: null,
              records: data.Jobs.length,
              total: 1,
              rows: data.Jobs
            };
            $('#schedulegrid').tablegrid('loadData', data);
            $('[data-toggle="popover"]').popover();
            applyDragToRows();
            rows = $('#schedulegrid').tablegrid('getData');
            totalm2 = 0.0;
            totalm2Remaining = 0.0;
            excludedStatus = 'QA, QC Passed, Awaiting Dispatch, Completed';
            for (l = 0, len = rows.length; l < len; l++) {
              row = rows[l];
              totalm2 += parseFloat(row.TotalM2);
              if (!excludedStatus.includes(row.Status)) {
                totalm2Remaining += parseFloat(row.TotalM2);
              }
            }
            $('#total-m2').text('Totalm2: ' + (totalm2.toFixed(2) - totalm2Remaining.toFixed(2)).toFixed(2) + '/' + totalm2.toFixed(2));
          });
        });
      },
      columnModel: [
        {
          caption: 'Job #',
          name: 'JobParent',
          width: 220,
          readonly: true
        },
        {
          // render: (item) ->
          //     if item.IsColourChange
          //         return 'Colour Change'

          //     if item.IsBreak
          //         return 'Break'

          //     jobNumber = parseInt item.JobCardNumber.substring 3
          //     lineNumber = item.LineNumber.toString()
          //     lineNumber = lineNumber.substring 0, lineNumber.length - 4
          //     jobNumber = jobNumber + '-' + lineNumber
          //     parts = item.JobNumber.split '-'
          //     if parts.length > 2
          //         for part,i in parts 
          //             if i >= 2
          //                 jobNumber += '-' + parts[i]

          //     if item.PhaseReason and item.PhaseReason isnt 'Standard'
          //         icon = '<i class="la la-info-circle" data-toggle="popover" title="PO# ' + item.PurchaseReference + '" data-content="' + item.PhaseReason + '" data-trigger="hover"></i>&nbsp;&nbsp;'
          //         return icon + jobNumber

          //     return jobNumber
          caption: 'Colour Code',
          name: 'ColourCode',
          width: 130,
          readonly: true
        },
        {
          caption: 'Colour Name',
          name: 'ColourName',
          width: 200,
          readonly: true
        },
        {
          caption: 'Customer',
          name: 'Customer',
          width: 150,
          readonly: true
        },
        {
          caption: 'Route',
          name: 'Route',
          inputType: 'select',
          dataKey: 'routes',
          width: 100
        },
        {
          caption: 'Purchase Reference',
          name: 'ExternalDocumentNumber',
          width: 140,
          readonly: true
        },
        {
          caption: 'Ext to be coated',
          name: 'ExtToBeCoated',
          dataType: 'int',
          width: 100,
          readonly: true
        },
        {
          caption: 'Total m2',
          name: 'TotalM2',
          dataType: 'float',
          width: 100,
          readonly: true
        },
        {
          caption: 'grams/m2',
          name: 'PowderUsage',
          dataType: 'PowderUsage',
          width: 100,
          readonly: true
        },
        {
          caption: '# Flight Bars',
          name: 'NumberOfFlightBars',
          dataType: 'int',
          width: 100,
          readonly: true
        },
        {
          caption: 'Delivery Date',
          name: 'DeliveryTime',
          width: 100,
          readonly: true
        },
        {
          caption: 'Start of Job / Colour Change',
          name: 'StartOfJob',
          dataType: 'StartTime',
          width: 130,
          readonly: true
        },
        {
          caption: 'Duration of Job / Colour Change',
          name: 'DurationOfJob',
          width: 130,
          dataType: 'Duration',
          render: function(item) {
            return calculateTime(item.DurationOfJob);
          }
        },
        {
          caption: 'Status',
          name: 'Status',
          width: 150,
          freeze: true,
          readonly: true
        }
      ],
      beforeCellEdit: function(rowId, element, name, oldValue, newValue, rowIndex, colIndex) {
        return true;
      },
      afterCellEdit: function(rowId, element, name, value, rowIndex, columnIndex) {
        var row;
        if (name === 'DurationOfJob') {
          row = $('#schedulegrid').tablegrid('getRow', rowId);
          row.DurationOfJob = value / 1440;
          RojobaCo.ScheduledJob.update(row, function() {
            $('#schedulegrid').tablegrid('refresh');
          });
        } else {
          row = $('#schedulegrid').tablegrid('getRow', rowId);
          RojobaCo.ScheduledJob.update(row, function() {
            if (name === 'Status' && value === 'QC Passed' && row.Route === 'MISSWORLD') {
              RojobaCo.ScheduledJob.repositionManual(row, function() {
                $('#schedulegrid').tablegrid('refresh');
              });
            }
          });
        }
      },
      rowAttr: function(item) {
        if (item.IsColourChange) {
          if (item.DurationOfJob > 0.017) {
            return {
              'class': 'colour-change-long'
            };
          } else {
            return {
              'class': 'colour-change-short'
            };
          }
        }
        if (item.PhaseReason) {
          return {
            'class': 'job-phased'
          };
        }
        if (item.IsBreak) {
          return {
            'class': 'break'
          };
        }
      },
      rowActions: [
        {
          icon: 'pencil',
          title: 'Phase',
          caption: 'Phase',
          cssClass: 'phase',
          hidden: function(item) {
            var hiddenStatus;
            hiddenStatus = 'QA,QC Passed,Break,Awaiting Dispatch,Completed';
            return item.IsColourChange || item.IsLocked || item.IsBreak || hiddenStatus.includes(item.Status) || item.JobParent.toLowerCase().search('jobm') >= 0;
          },
          onClick: function(id) {
            window.location = '#phase/' + id;
          }
        },
        {
          icon: 'edit',
          title: 'Edit',
          caption: 'Edit',
          cssClass: 'Edit',
          hidden: function(item) {
            var hiddenStatus;
            hiddenStatus = 'Awaiting Dispatch,Completed';
            return item.IsLocked || item.IsColourChange || item.IsBreak || item.JobParent.toLowerCase().search('jobm') >= 0;
          },
          onClick: function(id) {
            window.location = '#updatejob/' + id;
          }
        },
        {
          icon: 'point',
          title: 'Archive',
          caption: 'Archive',
          cssClass: 'archive',
          hidden: function(item) {
            return item.JobParent.toLowerCase().search('jobm') >= 0;
          },
          onClick: function(id) {
            var answer,
        archivedJob,
        archivedJobs,
        dataRow,
        dataRows,
        l,
        len,
        len1,
        len2,
        len3,
        m,
        n,
        o,
        row;
            row = $('#schedulegrid').tablegrid('getRow',
        id);
            if (row.IsColourChange) {
              answer = confirm('Are you sure you want to archive this Colour Change?');
              if (answer) {
                dataRows = $('#schedulegrid').tablegrid('getData');
                archivedJobs = [];
                for (l = 0, len = dataRows.length; l < len; l++) {
                  dataRow = dataRows[l];
                  if (dataRow) {
                    if (dataRow.JobParent && dataRow.JobParent === id) {
                      dataRow.IsArchived = true;
                      archivedJobs.push(dataRow);
                    }
                  }
                }
                for (m = 0, len1 = archivedJobs.length; m < len1; m++) {
                  archivedJob = archivedJobs[m];
                  $('#schedulegrid').tablegrid('removeRow',
        archivedJob.JobNumber);
                }
                RojobaCo.ScheduledJob.update(archivedJobs,
        function() {
                  $('#schedulegrid').tablegrid('refresh');
                });
              }
            } else {
              answer = confirm('Are you sure you want to archive all Line Items of ' + id + '?');
              if (answer) {
                dataRows = $('#schedulegrid').tablegrid('getData');
                archivedJobs = [];
                for (n = 0, len2 = dataRows.length; n < len2; n++) {
                  dataRow = dataRows[n];
                  if (dataRow) {
                    if (dataRow.JobParent && dataRow.JobParent === id) {
                      dataRow.IsArchived = true;
                      archivedJobs.push(dataRow);
                    }
                  }
                }
                for (o = 0, len3 = archivedJobs.length; o < len3; o++) {
                  archivedJob = archivedJobs[o];
                  $('#schedulegrid').tablegrid('removeRow',
        archivedJob.JobNumber);
                }
                RojobaCo.ScheduledJob.update(archivedJobs,
        function() {
                  $('#schedulegrid').tablegrid('refresh');
                });
              }
            }
          }
        },
        {
          icon: 'book',
          title: 'QC Reject',
          caption: 'QC Reject',
          cssClass: 'reject',
          hidden: function(item) {
            return item.IsColourChange || item.IsLocked || item.IsBreak || item.Status !== "QA" || item.JobParent.toLowerCase().search('jobm');
          },
          onClick: function(id) {
            window.location = '#reject/' + id;
          }
        },
        {
          icon: 'ruler',
          title: 'Allocate',
          caption: 'Allocate',
          cssClass: 'Allocate',
          hidden: function(item) {
            return item.JobParent.toLowerCase().search('jobm') === -1;
          },
          onClick: function(id) {
            var row;
            row = $('#schedulegrid').tablegrid('getRow',
        id);
            $('#AllocateManualJobCardModalTitle').text('Allocate JobCard');
            $('#manualjobcard-allocation').attr('manualjobcard',
        row.JobCardNumber);
            $('#AllocateManualJobCardModal').modal('show');
          }
        }
      ]
    });
    jQuery.validator.addMethod('notZero', function(value, element) {
      return parseInt(value) !== 0;
    }, 'Value cannot be zero');
    jQuery.validator.addMethod('tooManyCoated', function(value, element) {
      return parseInt(value) <= (jobToPhase.ExtToBeCoated - 1);
    }, 'Too many.');
    jQuery.validator.addMethod('tooManyFlightBars', function(value, element) {
      return parseInt(value) <= (jobToPhase.NumberOfFlightBars - 1);
    }, 'Too many.');
    $('#jobcards-searchselect').searchselect({
      items: RojobaCo.StandingData.JobParents,
      onItemMap: function(item) {
        return {
          value: item.value,
          label: item.text
        };
      }
    });
    $('#route-searchselect').searchselect({
      items: route.data.routes,
      onItemMap: function(item) {
        return {
          value: item.value,
          label: item.label
        };
      }
    });
    $('#PhaseJobForm').validate({
      rules: {
        PhaseReason: {
          required: true
        },
        PurchaseReference: {
          required: function() {
            if ($('#PhaseReason').length > 0) {
              return $('#PhaseReason').val() === 'External Strip' || $('#PhaseReason').val() === 'Replacement';
            }
            return false;
          }
        },
        NewExtToBeCoated: {
          required: true,
          tooManyCoated: true,
          notZero: true
        },
        NewNumberOfFlightBars: {
          required: true,
          tooManyFlightBars: true,
          notZero: true
        },
        NewManual: {
          required: true
        }
      },
      messages: {
        PhaseReason: {
          required: 'Please select a phase reason'
        },
        PurchaseReference: {
          required: 'Please enter a PO number'
        },
        NewExtToBeCoated: {
          required: 'Please enter ext to be coated'
        },
        NewNumberOfFlightBars: {
          required: 'Please enter number of flight bars'
        },
        NewManual: {
          required: 'Please select manual'
        }
      },
      submitHandler: function(form) {
        var newJob;
        newJob = new RojobaCo.ScheduledJob();
        newJob.ID = 'tmp-id-' + $.now();
        newJob.Title = null;
        newJob.JobCardNumber = jobToPhase.JobCardNumber;
        newJob.LineNumber = jobToPhase.LineNumber;
        newJob.JobNumber = $('#NewJobNumber').text();
        newJob.Customer = jobToPhase.Customer;
        newJob.PurchaseReference = jobToPhase.PurchaseReference;
        newJob.MaterialReceiveDate = jobToPhase.MaterialReceiveDate;
        newJob.OrderDate = jobToPhase.OrderDate;
        newJob.CollectionTime = jobToPhase.CollectionTime;
        newJob.OrderType = jobToPhase.OrderType;
        newJob.DueDate = jobToPhase.DueDate;
        newJob.DeliveryDate = jobToPhase.DeliveryDate;
        newJob.DeliveryTime = '';
        newJob.ExtToBeCoated = $('#NewExtToBeCoated').autoNumeric('get');
        newJob.TotalM2 = parseFloat($('#NewTotalM2').text());
        newJob.NumberOfFlightBars = $('#NewNumberOfFlightBars').autoNumeric('get');
        newJob.Route = 'MISSWORLD';
        if ($('#NewManual').val() === 'true') {
          newJob.Route = 'MANUAL';
        }
        newJob.ColourCode = jobToPhase.ColourCode;
        newJob.ColourName = jobToPhase.ColourName;
        newJob.ItemName = jobToPhase.ItemName;
        newJob.Status = jobToPhase.Status;
        newJob.PhaseReason = 'Standard';
        if ($('#PhaseReason').length > 0) {
          newJob.PhaseReason = $('#PhaseReason').val();
          newJob.PurchaseReference = $('#PurchaseReference').val();
          newJob.IsManualJC = $('#IsManualJC').is(':checked');
          newJob.Status = $('#PhaseReason').val();
        }
        newJob.StartOfJob = '';
        newJob.DurationOfJob = '';
        RojobaCo.ScheduledJob.create(newJob);
        jobToPhase.PhaseReason = 'Standard';
        jobToPhase.ExtToBeCoated = parseInt($('#CurrentExtToBeCoated').text());
        jobToPhase.TotalM2 = parseFloat($('#CurrentTotalM2').text());
        jobToPhase.NumberOfFlightBars = parseInt($('#CurrentNumberOfFlightBars').text());
        if (jobToPhase.JobNumber !== $('#CurrentJobNumber').text()) {
          RojobaCo.ScheduledJob.delete(jobToPhase, function() {
            jobToPhase.JobNumber = $('#CurrentJobNumber').text();
            RojobaCo.ScheduledJob.create(jobToPhase, function() {
              jobToPhase = null;
              $('#schedulegrid').tablegrid('refresh');
              $('#PhaseJobModal').modal('hide');
            });
          });
        } else {
          RojobaCo.ScheduledJob.update(jobToPhase, function() {
            jobToPhase = null;
            $('#schedulegrid').tablegrid('refresh');
            $('#PhaseJobModal').modal('hide');
          });
        }
        return false;
      }
    });
    updateJobPhase = function() {
      var m2PerExt, newTotalM2;
      $('#CurrentExtToBeCoated').html(jobToPhase.ExtToBeCoated - $('#NewExtToBeCoated').autoNumeric('get'));
      $('#CurrentNumberOfFlightBars').html(jobToPhase.NumberOfFlightBars - $('#NewNumberOfFlightBars').autoNumeric('get'));
      m2PerExt = jobToPhase.TotalM2 / jobToPhase.ExtToBeCoated;
      newTotalM2 = m2PerExt * $('#NewExtToBeCoated').autoNumeric('get');
      $('#NewTotalM2').html(newTotalM2.toFixed(2));
      $('#CurrentTotalM2').html((jobToPhase.TotalM2 - newTotalM2).toFixed(2));
    };
    $('#NewExtToBeCoated').on('change', function(e) {
      updateJobPhase();
    });
    $('#NewNumberOfFlightBars').on('change', function(e) {
      updateJobPhase();
    });
    $('#ScheduledDay').datetimepicker({
      format: 'DD MMMM YYYY',
      ignoreReadonly: true,
      allowInputToggle: true,
      date: new Date()
    }).on('dp.change', function(e) {
      $('#ScheduledDay').css({
        'background-color': '#E3EAEE'
      });
      $('.daily-schedule-day a.selected').removeClass('selected');
      $('#schedulegrid').tablegrid('refresh');
    });
    $('#ScheduleDay').datetimepicker({
      format: 'DD MMMM YYYY',
      ignoreReadonly: true,
      allowInputToggle: true,
      date: new Date()
    });
    $('#action').dropdown('setOptions', {
      menuMode: true,
      onOptionSelect: function(value) {
        var answer, canContinue, colourCode, i1, index, interval, j1, job, jobParent, jobParents, jobs, jobsAreInQA, l, lastLockedPosition, len, len1, len10, len11, len12, len2, len3, len4, len5, len6, len7, len8, len9, m, n, o, position, prevRowJobParent, q, r, row, rowId, rowIds, rows, s, t, u, uri, w, z;
        if (value === '1') {
          rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to lock.');
          } else {
            answer = confirm('Are you sure you want to lock the selected jobs?');
            if (answer) {
              $('#schedulegrid').tablegrid('showLoading');
              rows = $('#schedulegrid').tablegrid('getData');
              lastLockedPosition = 0;
//#To get the position of the last locked row
              for (l = 0, len = rows.length; l < len; l++) {
                row = rows[l];
                if (row.IsLocked && lastLockedPosition < +row.Position) {
                  lastLockedPosition = row.Position;
                }
              }
              // lastLockedPosition++
              prevRowJobParent = "";
              for (m = 0, len1 = rows.length; m < len1; m++) {
                row = rows[m];
                if (rowIds.includes(row.JobNumber)) {
                  if (prevRowJobParent !== row.JobParent) {
                    lastLockedPosition++;
                  }
                  row.Position = lastLockedPosition;
                  row.IsLocked = true;
                }
                prevRowJobParent = row.JobParent;
              }
              multisort(rows, ['~IsLocked', 'Position', 'JobParent', 'LineNumber']);
              position = 0;
              //#Make sure prevRowJobParent is empty again.
              prevRowJobParent = "";
              for (n = 0, len2 = rows.length; n < len2; n++) {
                row = rows[n];
                if (!prevRowJobParent || prevRowJobParent !== row.JobParent) {
                  position++;
                  prevRowJobParent = row.JobParent;
                }
                row.Position = position;
              }
              uri = RojobaCo.Constants.API_URI + 'api/schedulejobposition';
              $.ajax({
                type: 'POST',
                url: uri,
                data: JSON.stringify(rows),
                beforeSend: function(xhr) {
                  xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
                },
                success: function() {
                  console.log('Updated Successfully!');
                  $('#schedulegrid').tablegrid('refresh');
                }
              });
            }
          }
        } else if (value === '2') {
          rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to set as QC Passed.');
          } else {
            jobsAreInQA = true;
            for (o = 0, len3 = rowIds.length; o < len3; o++) {
              rowId = rowIds[o];
              row = $('#schedulegrid').tablegrid('getRow', rowId);
              if (row.Status !== 'QA') {
                jobsAreInQA = false;
              }
            }
            if (!jobsAreInQA) {
              alert('One or more jobs selected are not in QA, unable to QC pass selected jobs.');
            } else {
              answer = confirm('Are you sure you want to QC Pass the selected jobs?');
              if (answer) {
                $('#schedulegrid').tablegrid('showLoading');
                rows = [];
                for (q = 0, len4 = rowIds.length; q < len4; q++) {
                  rowId = rowIds[q];
                  row = $('#schedulegrid').tablegrid('getRow', rowId);
                  row.Status = 'QC Passed';
                  rows.push(row);
                }
                RojobaCo.ScheduledJob.update(rows, function() {
                  $('#schedulegrid').tablegrid('refresh');
                });
              }
            }
          }
        } else if (value === '3') {
          rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to set as "Awaiting Scheduling".');
          } else {
            answer = confirm('Are you sure you want to set the selected jobs as "Awaiting Scheduling"?');
            if (answer) {
              $('#schedulegrid').tablegrid('showLoading');
              rows = [];
              for (r = 0, len5 = rowIds.length; r < len5; r++) {
                rowId = rowIds[r];
                row = $('#schedulegrid').tablegrid('getRow', rowId);
                row.Status = 'Awaiting Scheduling';
                rows.push(row);
              }
              RojobaCo.ScheduledJob.update(rows, function() {
                $('#schedulegrid').tablegrid('refresh');
              });
            }
          }
        // else if value is '4'
        //     rowIds = $('#schedulegrid').tablegrid 'getSelectedIds'
        //     if rowIds.length is 0
        //         alert 'Please select one or more jobs to update the ROUTE to "MISSWORLD".'
        //     else
        //         answer = confirm 'Are you sure you want to set the selected jobs ROUTE to "MISSWORLD"?'
        //         if answer
        //             $('#schedulegrid').tablegrid 'showLoading'
        //             rows = []
        //             for rowId in rowIds
        //                 row = $('#schedulegrid').tablegrid 'getRow', rowId
        //                 row.Route = 'MISSWORLD'
        //                 rows.push row

        //             RojobaCo.ScheduledJob.update rows, () ->
        //                 $('#schedulegrid').tablegrid 'refresh'
        //                 return
        } else if (value === '5') {
          rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to adjust routes for.');
          } else {
            $('#AdjustRouteModalTitle').text('Change Route of JobCards');
            $('#AdjustRouteModal').modal('show');
            $('#schedulegrid').tablegrid('showLoading');
            rows = [];
            for (s = 0, len6 = rowIds.length; s < len6; s++) {
              rowId = rowIds[s];
              row = $('#schedulegrid').tablegrid('getRow', rowId);
              row.Route = $('#route-searchselect').searchselect('getSelectedData').value;
              rows.push(row);
              RojobaCo.ScheduledJob.update(rows, function() {
                $('#schedulegrid').tablegrid('refresh');
              });
            }
          }
        } else if (value === '6') {
          rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to schedule.');
          } else {
            $('#ScheduleDayModalTitle').text('Select Schedule Day');
            $('#ScheduleDay').dropdown('clear');
            $('#ScheduleDayModal').modal('show');
          }
        } else if (value === '7') {
          answer = confirm('Are you sure you want to post the jobs to BC?');
          if (answer) {
            $('#schedulegrid').tablegrid('showLoading');
            RojobaCo.ScheduledJob.postToBusinessCentral(function() {
              return $('#schedulegrid').tablegrid('refresh');
            });
          }
        } else if (value === '8') {
          $('#DurationOfColourChange').autoNumeric('set', 25);
          $('#AddColourChangeModalTitle').text('Add Colour Change Details');
          $('#AddColourChangeModal').modal('show');
        } else if (value === '9') {
          rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to set as "Completed".');
          } else {
            answer = confirm('Are you sure you want to set the selected Jobs as Completed?');
            if (answer) {
              $('#schedulegrid').tablegrid('showLoading');
              rows = [];
              for (t = 0, len7 = rowIds.length; t < len7; t++) {
                rowId = rowIds[t];
                row = $('#schedulegrid').tablegrid('getRow', rowId);
                row.Status = 'Completed';
                rows.push(row);
              }
              RojobaCo.ScheduledJob.update(rows, function() {
                $('#schedulegrid').tablegrid('refresh');
              });
            }
          }
        } else if (value === '10') {
          rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to unlock.');
          } else {
            answer = confirm('Are you sure you want to unlock the selected jobs?');
            if (answer) {
              $('#schedulegrid').tablegrid('showLoading');
              rows = [];
              for (u = 0, len8 = rowIds.length; u < len8; u++) {
                rowId = rowIds[u];
                row = $('#schedulegrid').tablegrid('getRow', rowId);
                row.IsLocked = false;
                rows.push(row);
              }
              RojobaCo.ScheduledJob.update(rows, function() {
                $('#schedulegrid').tablegrid('refresh');
              });
            }
          }
        } else if (value === '11') {
          rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to download as a PDF.');
          } else {
            jobParents = [];
            for (w = 0, len9 = rowIds.length; w < len9; w++) {
              rowId = rowIds[w];
              row = $('#schedulegrid').tablegrid('getRow', rowId);
              if (!jobParents.includes(row.JobParent)) {
                jobParents.push(row.JobParent);
              }
            }
            jobs = [];
            for (z = 0, len10 = jobParents.length; z < len10; z++) {
              jobParent = jobParents[z];
              job = [];
              for (i1 = 0, len11 = rowIds.length; i1 < len11; i1++) {
                rowId = rowIds[i1];
                row = $('#schedulegrid').tablegrid('getRow', rowId);
                if (row.JobParent === jobParent) {
                  job.push(row);
                }
              }
              jobs.push(job);
            }
            index = 0;
            interval = setInterval(function() {
              if (index < jobs.length) { // docArray here is array of docs contents
                BWA.ScheduledJob.downloadJobCardPdf(jobs[index]);
                return index++;
              } else {
                return clearInterval(interval);
              }
            }, 200);
          }
        } else if (value === '12') {
          answer = confirm('Are you sure you want to update the Jobs Positions?');
          if (answer) {
            $('#schedulegrid').tablegrid('showLoading');
            rows = $('#schedulegrid').tablegrid('getData');
            uri = RojobaCo.Constants.API_URI + 'api/schedulejobposition';
            $.ajax({
              type: 'POST',
              url: uri,
              data: JSON.stringify(rows),
              beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
              },
              success: function() {
                console.log('Updated Successfully!');
                $('#schedulegrid').tablegrid('refresh');
              }
            });
          }
        } else if (value === '13') {
          rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more jobs to create a batch with.');
          } else {
            colourCode = ($('#schedulegrid').tablegrid('getRow', rowIds[0])).ColourCode;
            canContinue = true;
            for (j1 = 0, len12 = rowIds.length; j1 < len12; j1++) {
              rowId = rowIds[j1];
              row = $('#schedulegrid').tablegrid('getRow', rowId);
              if (colourCode !== row.ColourCode) {
                alert('Colour Codes across batches do not match!');
                canContinue = false;
              }
            }
            if (canContinue) {
              answer = confirm('Are you sure you want to create a batch with the selected jobs?');
              if (answer) {
                $('#CreateBatchModalTitle').text('Create Batch');
                $('#schedulegrid').tablegrid('showLoading');
                $('#CreateBatchModal').modal('show');
              }
            }
          }
        }
      }
    });
    $('#CreateBatchForm').validate({
      rules: {
        QuantityBefore: {
          required: true
        },
        QuantityAfter: {
          required: true
        }
      },
      messages: {
        QuantityBefore: {
          required: 'Please select a value greater than 0.'
        },
        QuantityAfter: {
          required: 'Please select a value greater than 0.'
        }
      },
      submitHandler: function(form) {
        var batchID, consumptionBatch, date, l, len, powderRequest, row, rowId, rowIds, rows;
        $('#schedulegrid').tablegrid('showLoading');
        rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
        consumptionBatch = {};
        rows = [];
        date = new Date();
        batchID = "ManualInsert-" + $.datepicker.formatDate('yymmdd', date) + date.getTime();
        consumptionBatch.QuantityBefore = $('#QuantityBefore').val();
        consumptionBatch.QuantityAfter = $('#QuantityAfter').val();
        consumptionBatch.ColourCode = ($('#schedulegrid').tablegrid('getRow', rowIds[0])).ColourCode;
        consumptionBatch.BatchID = batchID;
        consumptionBatch.PowderRequests = [];
        for (l = 0, len = rowIds.length; l < len; l++) {
          rowId = rowIds[l];
          row = $('#schedulegrid').tablegrid('getRow', rowId);
          powderRequest = {};
          powderRequest.OrderNumber = row.JobCardNumber;
          powderRequest.JobNumber = row.JobNumber;
          powderRequest.LineNumber = row.LineNumber;
          powderRequest.ColourCode = row.ColourCode;
          powderRequest.LocationCode = "";
          powderRequest.BatchIDFK = batchID;
          consumptionBatch.PowderRequests.push(powderRequest);
        }
        $('#CreateBatchModal').modal('hide');
        RojobaCo.ScheduledJob.createConsumptionBatch(consumptionBatch, function(data) {
          $('#schedulegrid').tablegrid('refresh');
        });
        return;
        return false;
      }
    });
    $('#AdjustRouteForm').validate({
      submitHandler: function(form) {
        var l, len, row, rowId, rows;
        $('#schedulegrid').tablegrid('showLoading');
        rows = [];
        for (l = 0, len = rowIds.length; l < len; l++) {
          rowId = rowIds[l];
          row = $('#schedulegrid').tablegrid('getRow', rowId);
          row.Route = $('#route-searchselect').searchselect('getSelectedData').value;
          rows.push(row);
        }
        $('#AdjustRouteModal').modal('hide');
        RojobaCo.ScheduledJob.update(rows, function() {
          $('#schedulegrid').tablegrid('refresh');
        });
        return;
        return false;
      }
    });
    $('#ScheduleDayForm').validate({
      rules: {
        ScheduleDay: {
          required: true
        }
      },
      messages: {
        ScheduleDay: {
          required: 'Please select a day to schedule'
        }
      },
      submitHandler: function(form) {
        var l, len, row, rowId, rowIds, rows;
        $('#schedulegrid').tablegrid('showLoading');
        rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
        rows = [];
        for (l = 0, len = rowIds.length; l < len; l++) {
          rowId = rowIds[l];
          row = $('#schedulegrid').tablegrid('getRow', rowId);
          row.DueDate = moment($('#ScheduleDay').val()).format(RojobaCo.Constants.DATE_STRING_FORMAT);
          row.Status = 'Scheduled';
          rows.push(row);
        }
        $('#ScheduleDayModal').modal('hide');
        RojobaCo.ScheduledJob.update(rows, function() {
          $('#schedulegrid').tablegrid('refresh');
        });
        return;
        return false;
      }
    });
    $('#AllocateManualJobCardForm').validate({
      submitHandler: function(form) {
        var jobCard, manualJobCard;
        manualJobCard = $('#manualjobcard-allocation').attr('manualjobcard');
        jobCard = $('#jobcards-searchselect').searchselect('getSelectedData');
        $('#AllocateManualJobCardModal').modal('hide');
        RojobaCo.ScheduledJob.allocateManualJobCard(manualJobCard, jobCard, function() {
          $('#schedulegrid').tablegrid('refresh');
        });
        return;
        return false;
      }
    });
    $('#AddBreakForm').validate({
      rules: {
        DurationOfBreak: true
      },
      messages: {
        DurationOfBreak: {
          required: 'Please enter duration in minutes'
        }
      },
      submitHandler: function(form) {
        var data, l, lastPosition, len, newJob, now, row, rows, uri;
        rows = $('#schedulegrid').tablegrid('getData');
        lastPosition = 1;
        for (l = 0, len = rows.length; l < len; l++) {
          row = rows[l];
          if (row.Position > lastPosition) {
            lastPosition = row.Position;
          }
        }
        newJob = new RojobaCo.ScheduledJob();
        now = $.now();
        newJob.JobParent = 'Break' + now;
        newJob.JobNumber = 'Break' + now;
        newJob.Status = 'Break';
        newJob.JobCardNumber = 'Break';
        newJob.DueDate = selectedScheduleDate;
        newJob.IsBreak = true;
        newJob.Position = ++lastPosition;
        newJob.DurationOfJob = $('#DurationOfBreak').autoNumeric('get') / 1440;
        data = [];
        data.push(newJob);
        $('#AddBreakModal').modal('hide');
        uri = RojobaCo.Constants.API_URI + 'api/schedule';
        $.ajax({
          type: 'POST',
          url: uri,
          data: JSON.stringify(data),
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function() {
            console.log('Break Added!');
            $('#schedulegrid').tablegrid('refresh');
          }
        });
        return false;
      }
    });
    $('.column-header-colourcode').on('click', function() {
      var answer, currentPosition, data, highestLockedJobPosition, job, jobs, l, len, len1, m, nonLockedJobs, prevJob;
      answer = confirm('Are you sure you want to order the jobs by ColourCode?');
      if (answer) {
        $('#schedulegrid').tablegrid('showLoading');
        jobs = $('#schedulegrid').tablegrid('getData');
        nonLockedJobs = [];
        highestLockedJobPosition = 1;
        for (l = 0, len = jobs.length; l < len; l++) {
          job = jobs[l];
          if (highestLockedJobPosition < job.Position) {
            highestLockedJobPosition = job.Position;
          }
        }
        //Position can be ignored for now as the only positions that wont change are Locked jobs, which are not included in the Position update            
        multisort(jobs, ['~IsLocked', 'ColourCode', 'JobParent', 'LineNumber']);
        currentPosition = highestLockedJobPosition;
        prevJob = null;
        for (m = 0, len1 = jobs.length; m < len1; m++) {
          job = jobs[m];
          if (!job.IsLocked) {
            if (prevJob) {
              if (prevJob.JobParent === job.JobParent) {
                job.Position = prevJob.Position;
              } else {
                job.Position = ++currentPosition;
              }
            } else {
              job.Position = ++currentPosition;
            }
            prevJob = job;
          }
        }
        //Resort the jobs by Position before loading the data
        multisort(jobs, ['Position']);
        data = {
          prevId: null,
          nextId: null,
          records: jobs.length,
          total: 1,
          rows: jobs
        };
        $('#schedulegrid').tablegrid('loadData', data);
        applyDragToRows();
        alert('Jobs ordered by Colour Code! Please select "Update Positions" under Options to save these changes.');
      }
    });
    applyDragToRows = function() {
      $('.tablegrid-parentrow:not(.row-locked)').draggable({
        axis: 'y',
        containment: 'parent',
        helper: 'clone',
        start: (evt, ui) => {
          $(evt.target).addClass('dragged-handle');
        },
        stop: (evt, ui) => {
          $(evt.target).removeClass('dragged-handle');
        }
      });
      $('.tablegrid-parentrow:not(.row-locked)').droppable({
        accept: '.tablegrid-parentrow',
        drop: (evt, ui) => {
          var currentPosition, data, draggedRowId, draggedRowJobParent, draggedRowPosition, droppedOnPosition, droppedRowId, droppedRowJobParent, i, index, job, l, len, len1, len2, len3, len4, len5, len6, len7, len8, len9, m, n, o, parentId, parentPrevRowId, q, r, row, rowId, rowIds, rowParentId, rowParentIds, rows, s, t, u, w;
          // $('#schedulegrid').tablegrid 'showLoading'
          rowIds = $('#schedulegrid').tablegrid('getSelectedIds');
          rowParentIds = [];
          parentPrevRowId = null;
          for (l = 0, len = rowIds.length; l < len; l++) {
            rowId = rowIds[l];
            parentId = rowId.split('-')[0];
            if (!parentPrevRowId || parentPrevRowId !== parentId) {
              rowParentIds.push(parentId);
            }
            parentPrevRowId = parentId;
          }
          if (rowIds.length === 0) {
            $(evt.target).before(ui.draggable);
            droppedRowId = $(evt.target).attr('id');
            draggedRowId = ui.draggable.attr('id');
            rows = $('#schedulegrid').tablegrid('getData');
            droppedRowJobParent = droppedRowId.split('tmp-id-')[1];
            draggedRowJobParent = draggedRowId.split('tmp-id-')[1];
            for (m = 0, len1 = rows.length; m < len1; m++) {
              row = rows[m];
              if (row.JobParent === droppedRowJobParent) {
                droppedOnPosition = row.Position;
              } else if (row.JobParent === draggedRowJobParent) {
                draggedRowPosition = row.Position;
              }
            }
            if (droppedOnPosition > draggedRowPosition) {
              for (n = 0, len2 = rows.length; n < len2; n++) {
                row = rows[n];
                if (droppedOnPosition > row.Position && draggedRowPosition < row.Position) {
                  --row.Position;
                } else if (draggedRowPosition === row.Position) {
                  row.Position = droppedOnPosition - 1;
                }
              }
            } else {
              for (o = 0, len3 = rows.length; o < len3; o++) {
                row = rows[o];
                if ((droppedOnPosition < row.Position && draggedRowPosition > row.Position) || (droppedOnPosition === row.Position)) {
                  ++row.Position;
                } else if (draggedRowPosition === row.Position) {
                  row.Position = droppedOnPosition;
                }
              }
            }
            data = {
              prevId: null,
              nextId: null,
              records: rows.length,
              total: 1,
              rows: rows
            };
            multisort(rows, ['~IsLocked', 'Position', 'JobParent', 'LineNumber']);
            $('#schedulegrid').tablegrid('loadData', data);
            applyDragToRows();
          } else {
            droppedRowId = $(evt.target).attr('id');
            droppedRowJobParent = droppedRowId.split('tmp-id-')[1];
            rows = $('#schedulegrid').tablegrid('getData');
            for (i = q = 0, len4 = rowParentIds.length; q < len4; i = ++q) {
              rowParentId = rowParentIds[i];
              draggedRowJobParent = rowParentId;
              for (r = 0, len5 = rows.length; r < len5; r++) {
                row = rows[r];
                if (row.JobParent === droppedRowJobParent) {
                  droppedOnPosition = row.Position;
                } else if (row.JobParent === draggedRowJobParent) {
                  draggedRowPosition = row.Position;
                }
              }
              if (droppedOnPosition > draggedRowPosition) {
                for (s = 0, len6 = rows.length; s < len6; s++) {
                  row = rows[s];
                  if (droppedOnPosition > row.Position && draggedRowPosition < row.Position) {
                    --row.Position;
                  } else if (draggedRowPosition === row.Position) {
                    row.Position = droppedOnPosition - 1;
                  }
                }
              } else {
                for (t = 0, len7 = rows.length; t < len7; t++) {
                  row = rows[t];
                  if ((droppedOnPosition < row.Position && draggedRowPosition > row.Position) || (droppedOnPosition === row.Position)) {
                    ++row.Position;
                  } else if (draggedRowPosition === row.Position) {
                    row.Position = droppedOnPosition;
                  }
                }
              }
              multisort(rows, ['~IsLocked', 'Position', 'JobParent', 'LineNumber']);
              i = 1;
              currentPosition = 1;
              for (index = u = 0, len8 = rows.length; u < len8; index = ++u) {
                job = rows[index];
                if (job.Position > 0 && job.Position) {
                  if (index > 0 && rows[index - 1].JobParent !== job.JobParent) {
                    ++currentPosition;
                  }
                  if (job.Position !== currentPosition) {
                    job.Position = currentPosition;
                    job.Sequence = i;
                  }
                  i++;
                }
              }
              currentPosition++;
              for (index = w = 0, len9 = rows.length; w < len9; index = ++w) {
                job = rows[index];
                if (job.Position === 0 || !job.Position) {
                  if (index > 0 && rows[index - 1].JobParent !== job.JobParent) {
                    ++currentPosition;
                  }
                  if (job.Position !== currentPosition) {
                    job.Position = currentPosition;
                    job.Sequence = i;
                  }
                  i++;
                }
              }
              droppedRowJobParent = draggedRowJobParent;
            }
            data = {
              prevId: null,
              nextId: null,
              records: rows.length,
              total: 1,
              rows: rows
            };
            $('#schedulegrid').tablegrid('loadData', data);
            applyDragToRows();
          }
        }
      });
      
      //Only allow status change of rows that arent Colour change or Break
      $('.tablegrid-frozen-parentrow:not(.jobparent-colourchange):not(.jobparent-break)').on('click', function(e) {
        var currentStatus, dropdownSelect, l, len, ref, status, statusDropdownOptions;
        if (!$(this).hasClass('dropdown-statuselect')) {
          $(this).addClass('dropdown-statuselect');
          statusDropdownOptions = '';
          currentStatus = $(e.target).text();
          ref = route.data.statuses;
          for (l = 0, len = ref.length; l < len; l++) {
            status = ref[l];
            if (currentStatus === status.label) {
              statusDropdownOptions += '<option selected value="' + status.label + '">' + status.label + '</option>';
            } else if ((status.label === 'QC Passed' && currentStatus === 'QA') || status.label !== 'QC Passed') {
              statusDropdownOptions += '<option value="' + status.label + '">' + status.label + '</option>';
            }
          }
          $(e.target).addClass('hidden');
          dropdownSelect = $('<select>').addClass('status-dropdown').focusout(function() {
            $(e.target).removeClass('hidden');
            $('.dropdown-statuselect').removeClass('dropdown-statuselect');
            $(this).remove();
          }).on('change', function(evt) {
            var jobParent, len1, m, row, rows, updatedRows;
            $('#schedulegrid').tablegrid('showLoading');
            rows = $('#schedulegrid').tablegrid('getData');
            jobParent = $(this).parent().attr('id').replace('F_Status_tmp-id-', '');
            updatedRows = [];
            for (m = 0, len1 = rows.length; m < len1; m++) {
              row = rows[m];
              if (row.JobParent === jobParent) {
                updatedRows.push(row);
                row.Status = this.value;
              }
            }
            RojobaCo.ScheduledJob.update(updatedRows, function() {
              $('#schedulegrid').tablegrid('refresh');
            });
            $('.dropdown-statuselect').removeClass('dropdown-statuselect');
            $(e.target).text(this.value).removeClass('hidden');
          }).html(statusDropdownOptions).appendTo(this);
        }
      });
    };
    $('#AddColourChangeForm').validate({
      rules: {
        DurationOfColourChange: true
      },
      messages: {
        DurationOfBreak: {
          required: 'Please enter duration in minutes'
        }
      },
      submitHandler: function(form) {
        var data, l, lastPosition, len, newJob, now, row, rows, uri;
        rows = $('#schedulegrid').tablegrid('getData');
        lastPosition = 1;
        for (l = 0, len = rows.length; l < len; l++) {
          row = rows[l];
          if (row.Position > lastPosition) {
            lastPosition = row.Position;
          }
        }
        
        //Create Colour Change record
        newJob = new RojobaCo.ScheduledJob();
        now = $.now();
        newJob.JobParent = 'Colour-Change' + now;
        newJob.JobNumber = 'Colour-Change' + now;
        newJob.Status = 'Colour Change';
        newJob.JobCardNumber = 'Colour-Change';
        newJob.DueDate = selectedScheduleDate;
        newJob.IsColourChange = true;
        newJob.Position = ++lastPosition;
        newJob.DurationOfJob = $('#DurationOfColourChange').autoNumeric('get') / 1440;
        data = [];
        data.push(newJob);
        $('#AddColourChangeModal').modal('hide');
        uri = RojobaCo.Constants.API_URI + 'api/schedule';
        $.ajax({
          type: 'POST',
          url: uri,
          data: JSON.stringify(data),
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
          },
          success: function() {
            console.log('Colour Change Added!');
            $('#schedulegrid').tablegrid('refresh');
          }
        });
        return false;
      }
    });
  });

  RojobaCo.Router.setData('stockposting', function(route, callback) {
    var data;
    data = {
      routes: RojobaCo.StandingData.Routes,
      actions: [],
      filters: []
    };
    data.actions.push({
      value: '1',
      text: 'Complete'
    });
    data.actions.push({
      value: '2',
      text: 'Bulk Archive'
    });
    data.filters.push({
      value: '1',
      text: 'Stock Items < 200g'
    });
    callback(data);
  });

  RojobaCo.Router.register('stockposting', function(route) {
    $('#refreshtimer').data('lastrefresh', (new Date).getTime());
    $('#stockpostinggrid').tablegrid({
      idColumn: 'StockCode',
      footer: false,
      edit: true,
      editOnSelect: true,
      parentColumn: 'ProductCode',
      expandParentColumns: false,
      multiselect: true,
      selectData: {
        routes: route.data.routes
      },
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        $('#stockpostinggrid').tablegrid('showLoading');
        RojobaCo.StockPosting.getAllStockPosting(function(response) {
          var data, l, len, len1, m, ref, ref1, stockPost, tableStockPosting;
          tableStockPosting = [];
          if ($('#search-itemcode').val().length > 0) {
            ref = response.StockPostings;
            for (l = 0, len = ref.length; l < len; l++) {
              stockPost = ref[l];
              if (stockpost.ProductCode !== "" && stockPost.ProductCode.indexOf($('#search-itemcode').val()) !== -1) {
                if (!stockPost.IsCompleted) {
                  stockPost.ForcedParentValues = {
                    BCInventory: stockPost.BCInventory
                  };
                  tableStockPosting.push(stockPost);
                }
              }
            }
            data = {
              prevId: null,
              nextId: null,
              records: tableStockPosting.length,
              total: 1,
              rows: tableStockPosting
            };
          } else {
            ref1 = response.StockPostings;
            for (m = 0, len1 = ref1.length; m < len1; m++) {
              stockPost = ref1[m];
              if (!stockPost.IsCompleted) {
                stockPost.ForcedParentValues = {
                  BCInventory: stockPost.BCInventory
                };
                tableStockPosting.push(stockPost);
              }
            }
            data = {
              prevId: null,
              nextId: null,
              records: tableStockPosting.length,
              total: 1,
              rows: tableStockPosting
            };
          }
          $('#stockpostinggrid').tablegrid('loadData', data);
        });
      },
      columnModel: [
        {
          caption: 'Item Code',
          name: 'ProductCode',
          readonly: true,
          width: 100,
          render: function(item) {
            return item.StockCode;
          }
        },
        {
          caption: 'Item Description',
          name: 'ContainerDescription',
          readonly: true,
          width: 200
        },
        {
          caption: 'Date Created',
          name: 'DateCreatedFormat',
          width: 100,
          readonly: true
        },
        {
          caption: 'Item BC Inventory',
          name: 'BCInventory',
          dataType: 'float',
          readonly: true,
          width: 150,
          render: function(item) {
            return '';
          }
        },
        {
          caption: 'Stock To Post',
          name: 'StockToPost',
          dataType: 'float',
          readonly: true,
          width: 150
        }
      ],
      afterCellEdit: function(rowId, element, name, value, rowIndex, columnIndex) {
        var row;
        row = $('#updatejobgrid').tablegrid('getRow', rowId);
        $('#updatejobgrid').tablegrid('updateRow', row);
      }
    });
    $('#completedpostinggrid').tablegrid({
      idColumn: 'StockCode',
      footer: false,
      edit: true,
      editOnSelect: true,
      parentColumn: 'ProductCode',
      expandParentColumns: false,
      multiselect: true,
      selectData: {
        routes: route.data.routes
      },
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        $('#completedpostinggrid').tablegrid('showLoading');
        RojobaCo.StockPosting.getAllStockPosting(function(response) {
          var data, l, len, len1, m, ref, ref1, stockPost, tableStockPosting;
          tableStockPosting = [];
          if ($('#search-itemcode').val().length > 0) {
            ref = response.StockPostings;
            for (l = 0, len = ref.length; l < len; l++) {
              stockPost = ref[l];
              if (stockpost.ProductCode !== "" && stockPost.ProductCode.indexOf($('#search-itemcode').val()) !== -1) {
                if (stockPost.IsCompleted) {
                  stockPost.ForcedParentValues = {
                    BCInventory: stockPost.BCInventory
                  };
                  tableStockPosting.push(stockPost);
                }
              }
            }
            data = {
              prevId: null,
              nextId: null,
              records: tableStockPosting.length,
              total: 1,
              rows: tableStockPosting
            };
          } else {
            ref1 = response.StockPostings;
            for (m = 0, len1 = ref1.length; m < len1; m++) {
              stockPost = ref1[m];
              if (stockPost.IsCompleted) {
                stockPost.ForcedParentValues = {
                  BCInventory: stockPost.BCInventory
                };
                tableStockPosting.push(stockPost);
              }
            }
            data = {
              prevId: null,
              nextId: null,
              records: tableStockPosting.length,
              total: 1,
              rows: tableStockPosting
            };
          }
          $('#completedpostinggrid').tablegrid('loadData', data);
        });
      },
      columnModel: [
        {
          caption: 'Item Code',
          name: 'ProductCode',
          readonly: true,
          width: 100,
          render: function(item) {
            console.log(item);
            return item.StockCode;
          }
        },
        {
          caption: 'Date Posted',
          name: 'DatePostedFormat',
          width: 100,
          readonly: true
        },
        {
          caption: 'Item Description',
          name: 'ContainerDescription',
          readonly: true,
          width: 200
        },
        {
          caption: 'Item BC Inventory',
          name: 'BCInventory',
          dataType: 'float',
          readonly: true,
          width: 150,
          render: function(item) {
            return '';
          }
        },
        {
          caption: 'Stock Posted',
          name: 'StockToPost',
          dataType: 'float',
          readonly: true,
          width: 150
        },
        {
          caption: 'BC Balance Total',
          name: 'BCBalanceTotal',
          dataType: 'int',
          readonly: true,
          width: 100
        }
      ],
      afterCellEdit: function(rowId, element, name, value, rowIndex, columnIndex) {
        var row;
        row = $('#updatejobgrid').tablegrid('getRow', rowId);
        $('#updatejobgrid').tablegrid('updateRow', row);
      }
    });
    $('#action').dropdown('setOptions', {
      menuMode: true,
      onOptionSelect: function(value) {
        var answer, data, grid, l, len, len1, m, row, rowId, rowIds;
        if (value === '1') {
          rowIds = $('#stockpostinggrid').tablegrid('getSelectedIds');
          if ($('#nav-completed-posting-tab').hasClass('active')) {
            alert('Items cannot be marked as Completed from the Completed Postings.');
          } else if (rowIds.length === 0) {
            alert('Please select one or more to mark as Completed.');
          } else {
            answer = confirm('Are you sure you want to mark the selected items as Completed?');
            if (answer) {
              $('#stockpostinggrid').tablegrid('showLoading');
              data = {};
              data.StockPostings = [];
              for (l = 0, len = rowIds.length; l < len; l++) {
                rowId = rowIds[l];
                row = $('#stockpostinggrid').tablegrid('getRow', rowId);
                row.IsCompleted = true;
                row.DatePosted = moment().format(RojobaCo.Constants.DATE_STRING_FORMAT);
                data.StockPostings.push(row);
              }
              RojobaCo.StockPosting.updateStockPostings(data, function() {
                $('#stockpostinggrid').tablegrid('refresh');
              });
            }
          }
        } else if (value === '2') {
          if ($('#nav-completed-posting-tab').hasClass('active')) {
            grid = 'completedpostinggrid';
          } else {
            grid = 'stockpostinggrid';
          }
          rowIds = $('#' + grid).tablegrid('getSelectedIds');
          if (rowIds.length === 0) {
            alert('Please select one or more to Archive.');
          } else {
            answer = confirm('Are you sure you want to Archive the items?');
            if (answer) {
              $('#' + grid).tablegrid('showLoading');
              data = {};
              data.StockPostings = [];
              for (m = 0, len1 = rowIds.length; m < len1; m++) {
                rowId = rowIds[m];
                row = $('#' + grid).tablegrid('getRow', rowId);
                row.IsArchived = true;
                data.StockPostings.push(row);
              }
              RojobaCo.StockPosting.updateStockPostings(data, function() {
                $('#' + grid).tablegrid('refresh');
              });
            }
          }
        }
      }
    });
    $('#search-itemcode').on('change', function() {
      $('#stockpostinggrid').tablegrid('refresh');
      $('#completedpostinggrid').tablegrid('refresh');
    });
    $('.nav-item').on('click', function(e) {
      $('.tab-header-text').removeClass('underline');
      console.log($(this).children('.tab-header-text').addClass('underline'));
      $('.nav-item').toggleClass('active');
      $('.tab-pane').toggleClass('active');
      $('.tab-pane').toggleClass('show');
      $('#completedpostinggrid').tablegrid('refresh');
      $('#stockpostinggrid').tablegrid('refresh');
    });
    
    //Pulls the column headers to the left 
    $('.tablegrid-column span').css({
      'float': 'left'
    });
  });

  RojobaCo.Router.register('table', function() {
    var pivotData;
    $('#tablegrid').tablegrid({
      idColumn: 'id',
      initialPageSize: 25,
      multiselect: true,
      footer: true,
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        var url;
        url = 'http://localapi.footytailor.com:81/teams/1/players';
        $.get(url, function(result) {
          $('#tablegrid').tablegrid('loadData', result);
        });
      },
      columnModel: [
        {
          caption: 'Firstname',
          name: 'firstname'
        },
        {
          caption: 'Lastname',
          name: 'lastname'
        },
        {
          caption: 'Name',
          name: 'name'
        },
        {
          caption: 'DOB',
          name: 'dob',
          dataType: 'date'
        }
      ],
      rowActions: [
        {
          icon: 'pencil',
          title: 'Edit',
          caption: 'Edit',
          cssClass: 'edit',
          onClick: function(id) {
            $('#tablegrid').tablegrid('updateRow',
        {
              _id: '5a17480bf317860a44c27184',
              type: 'facebook',
              accountId: '9999',
              name: 'Updated Campaign'
            });
          }
        },
        {
          icon: 'remove',
          title: 'Remove',
          caption: 'Remove',
          cssClass: 'remove',
          name: 'remove',
          onClick: function(id) {
            $('#tablegrid').tablegrid('removeRow',
        id);
          }
        }
      ],
      //$('#tablegrid').tablegrid 'adjustSize'
      footerActions: [
        {
          icon: 'plus',
          title: 'Add',
          caption: 'Add row',
          onClick: function() {
            $('#tablegrid').tablegrid('addRow',
        {
              channel: 'facebook',
              account: '00001',
              campaignId: '334',
              name: 'Jacksonville'
            });
          }
        },
        {
          icon: 'print',
          title: 'Print',
          caption: 'Print to PDF',
          onClick: function() {
            console.log($('#tablegrid').tablegrid('getRemovedIds'));
          }
        }
      ]
    });
    pivotData = {
      total: 1,
      page: 1,
      records: 5,
      rows: [
        {
          id: 1,
          firstname: 'Roger',
          lastname: 'Balie',
          name: 'Balie',
          year: 2016,
          q1: 1,
          q2: 2,
          q3: 3,
          q4: 4
        },
        {
          id: 2,
          firstname: 'Roger',
          lastname: 'Balie',
          name: 'Balie',
          year: 2017,
          q1: 5,
          q2: 6,
          q3: 7,
          q4: 8
        },
        {
          id: 3,
          firstname: 'Yusuf',
          lastname: 'Van Wyk',
          name: 'Van Wyk',
          year: 2016,
          q1: 9,
          q2: 8,
          q3: 7,
          q4: 6
        },
        {
          id: 4,
          firstname: 'Yusuf',
          lastname: 'Van Wyk',
          name: 'Van Wyk',
          year: 2017,
          q1: 5,
          q2: 4,
          q3: 3,
          q4: 2
        },
        {
          id: 5,
          firstname: 'Berka',
          lastname: 'Ayowa',
          name: 'Ayowa',
          year: 2016,
          q1: 1,
          q2: 3,
          q3: 5,
          q4: 6
        },
        {
          id: 6,
          firstname: 'Berka',
          lastname: 'Ayowa',
          name: 'Ayowa',
          year: 2017,
          q1: 7,
          q2: 8,
          q3: 9,
          q4: 0
        }
      ]
    };
    $('#pivotgrid').tablegrid({
      idColumn: 'id',
      footer: false,
      filter: false,
      edit: true,
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $("#pivotgrid").tablegrid('loadData', pivotData);
      },
      columnModel: [
        {
          caption: 'Firstname',
          name: 'firstname',
          readonly: true,
          width: 150
        },
        {
          caption: 'Lastname',
          name: 'lastname',
          readonly: true,
          width: 150
        },
        {
          caption: 'Name',
          name: 'name',
          readonly: true,
          width: 250
        },
        {
          caption: 'Year',
          name: 'year',
          dataType: 'int',
          width: 100
        },
        {
          caption: 'Q1',
          name: 'q1',
          dataType: 'int',
          input: 'select',
          dataKey: 'ratings',
          width: 80
        },
        {
          caption: 'Q2',
          name: 'q2',
          dataType: 'int',
          input: 'select',
          dataKey: 'ratings',
          width: 80
        },
        {
          caption: 'Q3',
          name: 'q3',
          dataType: 'int',
          input: 'select',
          dataKey: 'ratings',
          width: 80
        },
        {
          caption: 'Q4',
          name: 'q4',
          dataType: 'int',
          input: 'select',
          dataKey: 'ratings',
          width: 80
        }
      ],
      xDimension: ['firstname', 'lastname', 'name'],
      yDimension: ['year'],
      aggregates: [
        {
          member: 'q1',
          aggregator: 'none',
          caption: ''
        },
        {
          member: 'q2',
          aggregator: 'none',
          caption: ''
        },
        {
          member: 'q3',
          aggregator: 'none',
          caption: ''
        },
        {
          member: 'q4',
          aggregator: 'none',
          caption: ''
        }
      ]
    });
  });

  RojobaCo.Router.setData('updatejob', function(route, callback) {
    var data;
    data = {
      routes: RojobaCo.StandingData.Routes
    };
    callback(data);
  });

  RojobaCo.Router.register('updatejob', function(route) {
    $('#refreshtimer').data('lastrefresh', (new Date).getTime());
    $('#updatejobgrid').tablegrid({
      idColumn: 'JobNumber',
      footer: false,
      edit: true,
      editOnSelect: true,
      parentColumn: 'JobParent',
      expandParentColumns: true,
      selectData: {
        routes: route.data.routes
      },
      onGetData: function(prevId, nextId, pageNo, pageSize, sort, filter) {
        $('#refreshtimer').data('lastrefresh', (new Date).getTime());
        $('#updatejobgrid').tablegrid('showLoading');
        RojobaCo.ScheduledJob.fetchJobsByParentId(route.id, function(response) {
          var data;
          data = {
            prevId: null,
            nextId: null,
            records: response.Jobs.length,
            total: 1,
            rows: response.Jobs
          };
          $('#updatejobgrid').tablegrid('loadData', data);
        });
      },
      columnModel: [
        {
          caption: 'Job #',
          name: 'JobParent',
          width: 220,
          readonly: true,
          render: function(item) {
            var i,
        icon,
        jobNumber,
        l,
        len,
        lineNumber,
        part,
        parts;
            jobNumber = parseInt(item.JobCardNumber.substring(3));
            lineNumber = item.LineNumber.toString();
            lineNumber = lineNumber.substring(0,
        lineNumber.length - 4);
            jobNumber = jobNumber + '-' + lineNumber;
            parts = item.JobNumber.split('-');
            if (parts.length > 2) {
              for (i = l = 0, len = parts.length; l < len; i = ++l) {
                part = parts[i];
                if (i >= 2) {
                  jobNumber += '-' + parts[i];
                }
              }
            }
            if (item.PhaseReason && item.PhaseReason !== 'Standard') {
              icon = '<i class="la la-info-circle" data-toggle="popover" title="PO# ' + item.PurchaseReference + '" data-content="' + item.PhaseReason + '" data-trigger="hover"></i>&nbsp;&nbsp;';
              return icon + jobNumber;
            }
            return jobNumber;
          }
        },
        {
          caption: 'Job Line Item',
          name: 'ItemName',
          width: 200,
          readonly: true
        },
        {
          caption: 'Total m2',
          name: 'TotalM2',
          dataType: 'float',
          width: 100,
          readonly: true
        },
        {
          caption: 'Ext to be coated',
          name: 'ExtToBeCoated',
          dataType: 'int',
          width: 100
        },
        {
          caption: '# Flight Bars',
          name: 'NumberOfFlightBars',
          dataType: 'int',
          width: 100
        },
        {
          caption: 'Route',
          name: 'Route',
          inputType: 'select',
          dataKey: 'routes',
          readonly: true,
          width: 100
        }
      ],
      afterCellEdit: function(rowId, element, name, value, rowIndex, columnIndex) {
        var row;
        row = $('#updatejobgrid').tablegrid('getRow', rowId);
        $('#updatejobgrid').tablegrid('updateRow', row);
      }
    });
    $('#cmdPhase').on('click', function(e) {
      var jobs, uri;
      jobs = $('#updatejobgrid').tablegrid('getData');
      $('#updatejobgrid').tablegrid('showLoading');
      uri = RojobaCo.Constants.API_URI + 'api/schedule';
      $.ajax({
        type: 'POST',
        url: uri,
        data: JSON.stringify(jobs),
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + RojobaCo.Constants.API_KEY);
        },
        success: function() {
          alert('JobUpdated Successfully!');
          window.history.go(-1);
        }
      });
    });
  });

  //  MODAL positioning
  reposition = function() {
    var dialog, modal;
    modal = $(this);
    dialog = modal.find('.modal-dialog');
    modal.css('display', 'block');
    // Dividing by two centers the modal exactly, but dividing by three 
    // or four works better for larger screens.
    dialog.css('margin-top', Math.max(0, ($(window).height() - dialog.height()) / 2));
  };

  setDefaults = function() {
    // AJAX
    $.ajaxSetup({
      async: true,
      cache: true,
      dataType: 'json',
      contentType: 'application/json'
    });
    // Reposition when the window is resized
    $(window).on('resize', function() {
      $('.modal:visible').each(reposition);
    });
    $('a.toggle-menu').on('click', function(e) {
      $('div.app-sidebar-expanded').toggleClass('hidden');
    });
    //FORM validation
    jQuery.validator.setDefaults({
      focusInvalid: false,
      ignore: [],
      highlight: function(element) {
        var link, tabId;
        $(element).addClass('errorField');
        $(element).closest('.form-group').addClass('has-error');
        tabId = $(element).closest('.tab-pane').attr('id');
        link = $('a[data-target="#' + tabId + '"]');
        if (link.has('i').length === 0) {
          link.append('<i class="fa fa-exclamation-circle" style="padding-left: 10px; color: #a94442;" title="There are errors on this tab"></i>');
        }
      },
      unhighlight: function(element) {
        var elTab, link, tabId;
        $(element).removeClass('errorField');
        $(element).closest('.form-group').removeClass('has-error');
        $('span#' + $(element).attr('aria-describedby')).remove();
        $(element).removeAttr('aria-describedby');
        elTab = $(element).closest('.tab-pane');
        if (elTab.has('div.has-error').length === 0) {
          tabId = elTab.attr('id');
          link = $('a[data-target="#' + tabId + '"]');
          $('i', link).remove();
        }
      },
      errorElement: 'span',
      errorClass: 'error',
      errorPlacement: function(error, element) {
        if ($(element).hasClass("az-datepicker")) {
          error.insertAfter(element.parent().parent());
        } else if ($(element).hasClass('b4-select')) {
          error.insertAfter(element.next());
        } else if ($(element).hasClass('b4-timepicker')) {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      }
    });
    
    //Partial Views
    Handlebars.registerPartial({
      'phasejob': RojobaCo.Templates["phasejob"]
    });
    Handlebars.registerPartial({
      'qc-reject-input': RojobaCo.Templates["qc-reject-input"]
    });
  };

  bindViewDefaults = function() {
    $('div.app-sidebar-expanded').addClass('hidden');
    $('input').keydown(function(e) {
      if (e.keyCode === 13) {
        return $(this).closest('form').submit();
      }
    });
    $('form:first *:input[type!=hidden]:first').focus();
    // MODAL initialize
    $('.modal').modal({
      show: false
    });
    
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // MODAL auto-submit
    $('button[type="submit"]').on('click', function(e) {
      if ($(this).parent().hasClass('modal-footer')) {
        $('form', $(this).parent().prev()).submit();
      }
    });
    //if $(this).parent().hasClass 'form-footer' then $(this).closest('form').submit()
    $('span.glyphicon-calendar').each(function() {
      var parent;
      parent = $(this).parent();
      parent.css('cursor', 'pointer').css('border-left', '0').on('click', function() {
        $(this).siblings('input').data('DateTimePicker').show();
      });
    });
    // PERCENTAGE
    $('.b4-percentage').autoNumeric('init', {
      vMax: '100'
    });
    // NUMBER
    $('.b4-number').autoNumeric('init', {
      aSep: '',
      mDec: 0,
      vMin: '0',
      lZero: 'keep'
    });
    // DECIMAL
    $('.b4-decimal').autoNumeric('init');
    // CURRENCY
    $('.b4-currency').autoNumeric('init', {
      aSep: ','
    });
    $('.b4-currency').each(function(indx) {
      var hiddenCurrency, inputGroup;
      hiddenCurrency = $(this).prev();
      inputGroup = $(this).prev().prev();
      hiddenCurrency.on('change', function(e) {
        $('span', $('button', inputGroup)).first().text($(e.target).val());
      });
      $('a', inputGroup).on('click', function(e) {
        hiddenCurrency.val($(e.target).text()).trigger('change');
      });
    });
    // MONEY
    $('.b4-money').autoNumeric('init', {
      aSep: ','
    });
    
    // DATETIME PICKER
    $('.b4-datetimepicker').datetimepicker({
      format: 'DD MMMM YYYY HH:mm',
      sideBySide: true,
      ignoreReadonly: true,
      allowInputToggle: true
    });
    // DATE PICKER
    $('.b4-datepicker').datetimepicker({
      format: 'DD MMMM YYYY',
      ignoreReadonly: true,
      allowInputToggle: true
    });
    // TIME PICKER
    $('.b4-timepicker').datetimepicker({
      format: 'HH:mm',
      ignoreReadonly: true,
      allowInputToggle: true
    });
    // MULTI-SELECT
    $('.az-multiselect').multiselect({
      includeSelectAllOption: true,
      onInitialized: function(select, container) {
        container.css('width', '100%');
        $('button', container).addClass('form-control').css('text-align', 'left');
      }
    });
    // DROP DOWN
    $('.b4-select').dropdown();
    // POPOVER
    $('[data-toggle="popover"]').popover({
      container: 'body',
      html: true,
      placement: 'bottom'
    });
    // FACTORY SELECT
    $('#factory-location').searchselect({
      source: 'https://bcapi.alu.bwg.co.za/api/factories',
      itemArraySelect: function(items) {
        var selectedArray;
        selectedArray = items.Factories;
        return selectedArray;
      },
      onItemSelect: function(item) {
        $('#productiongrid').tablegrid('refresh');
        return $('#schedulegrid').tablegrid('refresh');
      }
    });
  };

  $(document).ready(function() {
    var openRequest;
    setDefaults();
    $('.logout').attr('href', 'https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=' + encodeURI(window.location.protocol + '//' + window.location.hostname + window.location.pathname));
    openRequest = indexedDB.open(RojobaCo.Constants.BWA_DB, 1);
    openRequest.onupgradeneeded = function(e) {
      var db;
      db = e.target.result;
      console.log('db onupgradeneeded');
      if (!db.objectStoreNames.contains(RojobaCo.Constants.SCHEDULED_JOB_STORE)) {
        db.createObjectStore(RojobaCo.Constants.SCHEDULED_JOB_STORE, {
          keyPath: 'JobNumber'
        });
      }
    };
    openRequest.onsuccess = function(e) {
      console.log('db onsuccess');
      RojobaCo.StandingData.load(function() {
        RojobaCo.Router.start({
          view: 'home',
          onLoad: function(route) {
            $('div.app-content').html(RojobaCo.Templates[route.action](route.data));
            bindViewDefaults();
          }
        });
      });
    };
    openRequest.onerror = function(e) {
      console.log('db error!');
      console.log(e);
    };
  });

  $(window).on('load', function() {
    var lastRefresh, x;
    lastRefresh = (new Date).getTime();
    $('#refreshtimer').data('lastrefresh', lastRefresh);
    // Update the count down every 1 second
    x = setInterval((function() {
      var minutes, now, seconds, timeDifference;
      now = (new Date).getTime();
      timeDifference = Math.floor((now - $('#refreshtimer').data('lastrefresh')) / 1000); // /1000 converts it to seconds
      minutes = 0;
      seconds = timeDifference;
      if (timeDifference >= 60) {
        minutes = Math.floor(timeDifference / 60);
        seconds = timeDifference % 60;
      }
      $('#refreshtimer').text('Time Since Last Refresh: ' + minutes + 'm ' + seconds + 's');
    }), 1000);
  });

}).call(this);
