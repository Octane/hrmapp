(function () {
    var heartZonesNode = document.querySelector('.heart-zones');

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        onSlideChangeEnd: function (swiper) {
            heartZonesNode.classList.remove('heart-zones_zone-1', 'heart-zones_zone-2', 'heart-zones_zone-3', 'heart-zones_zone-4', 'heart-zones_zone-5');
            heartZonesNode.classList.add('heart-zones_zone-' + (swiper.activeIndex + 1));
        },
        onInit: function () {
            var checkboxes = document.querySelectorAll('.js-switch');

            Array.prototype.forEach.call(checkboxes, function (checkbox) {
                new Switchery(checkbox);
            });
        }
    });
}());
