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
