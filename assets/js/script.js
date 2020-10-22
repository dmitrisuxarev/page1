/**Calendar range */
$(function () {
    $("#datetimepicker7").datetimepicker({
        useCurrent: true,
        locale: "ru",
        format:"DD.MM.YYYY"
    });
    $("#datetimepicker8").datetimepicker({
        useCurrent: false,
        locale: "ru",
        format:"DD.MM.YYYY"
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker8').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker8").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").maxDate(e.date);
    });
});

/**Date string */
let dateNow = document.querySelector(".date-now");
let options = { year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric', separator:"." };
let today = new Date();
dateNow.innerHTML = today.toLocaleDateString("ru-Ru",options).replace(/,/g,'');