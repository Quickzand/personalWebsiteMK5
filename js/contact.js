var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

$("input").change(() => {
    var inputs = $("input");
    inputs.each(function () {
        if ($(this).val()) {
            $(this).parent().addClass("hasText");
            if (emailReg.test($(this).val())) {
                $(this).parent().addClass("hasEmail");
            } else {
                $(this).parent().removeClass("hasEmail");
            }
        } else {
            $(this).parent().removeClass("hasText");
        }
    });
})