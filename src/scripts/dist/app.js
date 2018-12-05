var $ = window.$;
var PA;
(function (PA) {
    var AppService = /** @class */ (function () {
        function AppService() {
            this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        }
        AppService.prototype.run = function () {
            var _this = this;
            var $email = $('#email');
            var $send = $('#btnSubscribe');
            $email.keyup(function () {
                if ($email.val() && _this.emailRegex.test($email.val())) {
                    $send.removeAttr('disabled');
                }
                else {
                    $send.attr('disabled', 'disabled');
                }
            });
        };
        return AppService;
    }());
    PA.AppService = AppService;
})(PA || (PA = {}));
