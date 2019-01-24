angular.module('todoApp', [])
    .controller('TodoController', function () {
        var ctrl = this;

        ctrl.todoText = ''
        ctrl.todos = [
            { text: "Run hello world", done: true },
            { text: "Run todo app ", done: false }
        ]

        ctrl.addTodo = function () {
            ctrl.todos.push(
                { text: ctrl.todoText, done: false }
            );
            ctrl.todoText = ''
        }

        ctrl.remaining = function () {
            var count = 0;
            angular.forEach(ctrl.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

    })

