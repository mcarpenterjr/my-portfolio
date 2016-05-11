function resume() {
    var self = this;

    self.workExp = ko.observableArray([]);
    self.education = ko.observableArray([]);
    self.projects = ko.observableArray([]);


}

var contact = function() {
    swal({
            title: "Contact Mark",
            text: '<div class="progress"><div class="indeterminate"></div></div>' +
                '<div class="card blue-grey darken-1">' +
                '<div class="card-content white-text">' +
                '<p>There seems to be a problem loading our app, we will try again.</p>' +
                '<br><a href="mailto:mark@mncarpenter.ninja" target="_blank"><span>Direct E-Mail &nbsp<i class="fa fa-envelope"></i></span></a>' +
                '</div>' +
                '</div>' +
                '</div>',
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: "Retry",
            confirmButtonColor: "#ffb300",
            html: true,
            timer: 8500,
        },
        function() {

        });
};

var resume = new resume();
