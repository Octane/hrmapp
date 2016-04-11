(function () {
    var speedUpNode = document.querySelector('#speedup');
    var speedDownNode = document.querySelector('#speeddown');
    var toolbarNode = document.querySelector('.toolbar');
    var workoutNode = document.querySelector('.workout');
    var buttonNode = document.querySelector('.workout__button');
    var curHrNode = document.querySelector('.workout__heart-rate');
    var curHrValue = parseInt(curHrNode.textContent, 10);
    var maxHrValue = 200;
    var minHrValue = 50;
    var stepUp = 15;
    var stepDown = 10;
    var lastHrZone = calcHrZone(curHrValue);
    var paused = true;

    function calcHrZone(hrValue) {
        if (200 * 0.6 > hrValue) {
            return 1;
        }

        if (200 * 0.7 > hrValue) {
            return 2;
        }

        if (200 * 0.8 > hrValue) {
            return 3;
        }

        if (200 * 0.9 > hrValue) {
            return 4;
        }

        return 5;
    }

    (function setRndHr() {
        curHrValue = parseInt(curHrNode.textContent, 10);

        requestAnimationFrame(function () {
            var newHrValue = Math.min(Math.max(curHrValue + Math.round(Math.random() * stepUp) - Math.round(Math.random() * stepDown), minHrValue), maxHrValue);

            curHrValue = newHrValue;
            curHrNode.textContent = newHrValue;

            if (curHrValue == maxHrValue || curHrValue == minHrValue) {
                var tmp = stepUp;

                stepUp = stepDown;
                stepDown = tmp;
            }

            changeWorkoutClasses();
            changeButtonClasses();

            if (!paused) {
                var newHrZone = calcHrZone(curHrValue);

                if (lastHrZone != newHrZone) {
                    if (newHrZone > 3) {
                        speedDownNode.play();

                    } else if (newHrZone < 2) {
                        speedUpNode.play();
                    }
                }
            }

            if (lastHrZone != newHrZone) {
                lastHrZone = newHrZone;
            }

            setTimeout(setRndHr, 500);
        });
    }());

    function changeWorkoutClasses() {
        workoutNode.classList.remove('workout_zone-1', 'workout_zone-2', 'workout_zone-3', 'workout_zone-4', 'workout_zone-5');

        if (!paused) {
            workoutNode.classList.add('workout_zone-' + calcHrZone(curHrValue));
        }
    }

    function changeButtonClasses() {
        buttonNode.classList.remove('workout__button_zone-1', 'workout__button_zone-2', 'workout__button_zone-3', 'workout__button_zone-4', 'workout__button_zone-5');
        buttonNode.classList.add('workout__button_zone-' + calcHrZone(curHrValue));
    }

    buttonNode.addEventListener('click', function () {
        buttonNode.classList.toggle('workout__button_paused');
        toolbarNode.classList.toggle('hidden');
        paused = !paused;
        changeWorkoutClasses();
        changeButtonClasses();
    });
}());


(function () {
    var display = document.querySelector('.viewport');
    var burger = document.querySelector('.toolbar__burger');
    var menu = document.querySelector('.menu');

    function toggleMenu() {
        display.classList.toggle('viewport_with-menu');
    }

    burger.addEventListener('click', toggleMenu);
    menu.addEventListener('click', toggleMenu);
}());
