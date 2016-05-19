$(document).ready(function()
{
    $("#submit").click(function()
    {

        $("#form").submit();
          alert("hello");

    });
    $("#submit2").click(function()
    {
        $("form[name='myForm']").submit();
    });
    $("#submit3").click(function()
    {
        $("form:first").submit();

    });

    $("#submit4").click(function()
    {
        $("#testForm").submit(function()
        {
         alert('Form is submitting');
         return true;
        });
        $("#testForm").submit(); //invoke form submission

    });
});
