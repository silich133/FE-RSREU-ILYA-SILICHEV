(function () {
    'use strict';

    function Application() {
        this.tasks = [];
    }

    Application.prototype.addTask = addTask;
    Application.prototype.removeTask = removeTask;

    function addTask() {
        var $ul = document.getElementsByTagName("ul");
        var $li = document.createElement("li");
        var tasks = app.tasks;
        var description = document.getElementById('task').value;

        var textTask = new window.app.TODOItem(description, true);
        tasks.push(textTask);


        $li.classList.add('collection-item');

        var $description = document.createElement("input");
        var inputId = 'filled-in-box-' + (tasks.length - 1);
        $description.id = inputId;
        $description.type = 'checkbox';
        $description.classList.add('filled-in');
        $description.addEventListener('change', function (event) {
            var parentIn = this.parentNode;
            console.log('aa');
            var text = parentIn.children[0+1];
            text.classList.add('line_thr');
            $description.desabled = true;
            $description.style.transition = '1s';
        });
        $li.appendChild($description);
        var $label = document.createElement('label');
        $label.classList.add('textTask');
        $label.setAttribute('for', inputId);
        $label.textContent = textTask.getDescr();
        $li.appendChild($label);


        var $button = document.createElement('button');
        $button.classList.add("secondary-content");
        var $imgB = document.createElement('i');
        $imgB.classList.add('material-icons');
        $imgB.textContent = 'delete';
        $button.appendChild($imgB);

        $li.appendChild($button);

        if ((description) && (description != '')) {
            $ul[0].appendChild($li);
            app.removeTask();
        } else {
            alert('Not correct data');
        }
    }


    function removeTask() {
        var buttonsDel = document.querySelectorAll('#todoList .collection-item .secondary-content');
        for (var i = 0; i < buttonsDel.length; i++) {
            buttonsDel[i].onclick = function () {
                var task = this.parentNode;
                task.parentNode.removeChild(task);
            };
        }
    }

    var app = new Application();

    var buttonC = document.getElementById('buttonCreate');
    buttonC.addEventListener('click', function () {
        app.addTask();
    });


}());


