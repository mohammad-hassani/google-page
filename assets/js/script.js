$( document ).ready(function() {
    console.log( "ready!" );
    $('#dropdown-google').attr('style','display:none !important')
/*
    $('#drop-button-google').on('mouseup',function () {
        $('#dropdown-google').attr('style','display:flex !important')
    })
    $('body:not(.drp-span)').on('mousedown',function () {
        $('#dropdown-google').attr('style','display:none !important')
    })*/
    if ($('#drop-button-google').on('mouseenter',f))
    {

    }
    $('#body-google').on('mouseup',function () {
        $('#dropdown-google').attr('style','display:none !important')
    })
    function f()
    {
        $('#dropdown-google').attr('style','display:flex !important')
    }


    $('.short-button').on('mouseup',function () {
    $('.new-short-div').attr('style','display:block')
    })

    $('.cancel-button').on('mouseup',function () {
        $('.new-short-div').attr('style','display:none')
    })


    $('.done-button').prop('disabled', true);
    $('.short-box-iii').keyup(function() {
        console.log(1,$('.one').val())
        console.log(2,$('.two').val())
        if($('.one').val()==""||$('.two').val()=="") {
            $('.done-button').prop('disabled', true);
            $('.done-button').attr('style','background-color:#e1e3e3');
        }
        else
        {
            $('.done-button').prop('disabled', false);
            $('.done-button').attr('style','background-color:#3399f1');


        }
    });

    let i = 1;
    $('.done-button').on('mouseup',function () {

        $('.p' + i).html($('.two').val().substring(0, 1));
        $('.p' + i).next().html($('.one').val())

            i++;
        $('.s' + i).attr('style','display:block');
        $('.one').val(null);
        $('.two').val(null);
        $('.done-button').prop('disabled', true);
        $('.done-button').attr('style','background-color:#e1e3e3');
    })



    $('.done-button').on('mouseup',function () {

        // TODO : HANOOZ KAR DARE
        $('.new-short-div').attr('style','display:none')
    })
});