function initService(){
    $('#nails-service').hide();
    $('#grooming-service').hide();
    $('#full-service').hide();
    
    $('#hair').on('click',function(){
        $('#hair-service').show();
        $('#nails-service').hide();
        $('#grooming-service').hide();
        $('#full-service').hide();
        
    });

    $('#nails').on('click',function(){
        $('#nails-service').show();
        $('#hair-service').hide();
        $('#grooming-service').hide();
        $('#full-service').hide();
    });

    $('#grooming').on('click',function(){
        $('#grooming-service').show();
        $('#hair-service').hide();
        $('#nails-service').hide();
        $('#full-service').hide();
    });

    $('#full').on('click',function(){
        $('#full-service').show();
        $('#hair-service').hide();
        $('#nails-service').hide();
        $('#grooming-service').hide();
    });
}

