(function() {
    'use strict';

    var code = document.getElementById('code');
    var load = document.getElementById('load');
    var step = document.getElementById('step');
    var run = document.getElementById('run');
    var reset = document.getElementById('reset');
    var result = document.getElementById('result');

    var Bf;
    var bf;

    Bf = function() {
        var codeString;
        var pos;
        var cells = [];
        var ptr;
        var outputString;

        this.load = function(s) {
            codeString = s;
            pos = 0;
            cells = Array(20).fill(0);
            ptr = 0;
            outputString = '';
            this.updateUI();
        };

        this.updateUI = function() {
            //code
            var uiCode = document.getElementById('ui_code');
            var span;
            var i;
            for (i = 0; i < codeString.length; i++) {
                span = document.createElement('span');
                span.appendChild(document.createTextNode(codeString[i]));
                if (pos === i) {
                    span.className = 'current';
                }
                uiCode.appendChild('span');
            }
        };

        this.step = function(s) {

        };

        this.run = function(s) {

        };
    };

    load.addEventListener('click', function() {
        var codeString = code.value.replace(/[^\+\-<>\.,\[\]]/g, '');
        if (codeString == '') {
            return;
        }
        result.className = '';
        bf.load(codeString);
    });

    step.addEventListener('click', function() {
        bf.step();
    });

    run.addEventListener('click', function() {
        bf.run();
    });

    reset.addEventListener('click', function() {
        result.className = 'hidden';

    });

    bf = new Bf();

    code.focus();

})();