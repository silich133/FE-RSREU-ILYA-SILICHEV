(function () {
    'use strict';
    function TODOItem(description, complated) {
        var _description;
        var _complated;
        Object.defineProperties(this, {
            'description': {
                set: function (description) {
                    _description = description;
                },
                get: function () {
                    return _description
                },
                'compalted': {
                    set: function (complated) {
                        _complated = complated;
                    },
                    get: function () {
                        return _complated;
                    }
                }
            }
        })

        TODOItem.prototype.getDescr = function() {
            return this.description;
        }

        this.description = description;
        this.complated = complated;
    }

    window.app = window.app || {};
    window.app.TODOItem = TODOItem;
}())
