(function() {
    function onValueChanged(key, value, isNew) {
        if (isNew) {
            //console.info('onValueChanged', key, value, isNew);
            var table = '#nt > tbody:last';

            var autoKeys = [];

            if (key.startsWith("/Elevator/")) {
                table = '#elevator_vars > tbody:last';
            }
            if(key.startsWith("/Climber/RightBack")){
                table = '#rightback > tbody:last'
            }
            if(key.startsWith("Climber/RightFront")){
                table = '#rightfront > tbody:last'
            }
            if(key.startsWith("/Climber/LeftBack")){
                table = '#leftback > tbody:last'
            }
            if(key.startsWith("/Climber/LeftFront")){
                table = '#leftfront > tbody:front'
            }
            if(key.startsWith("/Drivetrain/")) {
                table = '#drivetrain_vars > tbody:last';
            }

            for (var i = 0; i < autoKeys.length; i++) {
                if (key === "SmartDashboard/" + autoKeys[i]) {
                    table = '#auto_vars > tbody:last';
                }
            }
            if($('#' + NetworkTables.keySelector(key)).length == 0) {
                var tr = $('<tr></tr>').appendTo($(table));
                $('<td></td>').text(key).appendTo(tr);
                $('<td></td>').attr('id', NetworkTables.keyToId(key))
                    .text(value)
                    .appendTo(tr);
            }else{
                $('#' + NetworkTables.keySelector(key)).text(value);
            }


        } else {
            $('#' + NetworkTables.keySelector(key)).text(value);

        }

        if (key === "SmartDashboard/autonomousOver") {
            autonomousOver();	
        }

        if (key === "SmartDashboard/driveMode") {
            $("#driveMode").text(value);

        }
    }

    $(function() {
        NetworkTables.addGlobalListener(onValueChanged, true);
    });
})();
