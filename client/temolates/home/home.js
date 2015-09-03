Template.Home.onRendered(function () {
    $("#open-modal").animatedModal({
        modalTarget:'animatedModal',
        animatedIn:'lightSpeedIn',
        animatedOut:'bounceOutDown',
        color:'rgba(0, 150, 136, 0.5)',
        animationDuration:'.5s'});
});