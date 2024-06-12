
// sales dropdown
$(document).ready(function () {
    $('#drop').click(function () {
        $('#drop2').toggle();
    });
});
// sales dropdown

// chart animation

$(document).ready(function () {
    $('.progress-bar-animated').animate(
        {
            width: '25%'
        },
        {
            duration: 1000,
            step: function (now, fx) {
                $(this).attr('aria-valuenow', now.toFixed(0));
            }
        }
    );
});
// chart animation

