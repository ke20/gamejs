
$.ready(function() {
    var $board = $('#board');
    
    $('#btn-generate').on('click', function(e) {
        e.preventDefault();

        let nbCaseWidth  = $('#nb-case-width').val();
        let nbCaseHeight = $('#nb-case-height').val();
        let nbBlock      = $('#nb-block').val();

        $board.empty();

        // Create the board
        for(let i = 0; i < nbCaseWidth; i++) {
            let $row = $(document.createElement('div'))
            .addClass('row');

            for (let j = 0; j < nbCaseHeight; j++) {
                let $col = $(document.createElement('div'))
                    .addClass('col')
                    .append(
                        $(document.createElement('div'))
                            .attr('id', 'case'+i+j)
                            .addClass('case')
                    )
                ;
                
                $row.append($col);
            }

            $board.append($row);
        }

        // Create the block case
        let createNewBlockCase = function() {
            let isOk = false;

            do {
                let $case = $('#case'+getRandomInt(nbCases));
                
                if ($case.length > 0 && !$case.hasClass('block')) {
                    $case.addClass('block');
                    isOk = true;
                }
            } while(!isOk);
        };

        let createStartBlockCase = function() {
            let isOk = false;

            do {
                let $case = $('#case'+getRandomInt(nbCases));
                
                if ($case.length > 0 && !$case.hasClass('block')) {
                    $case.append(
                        $(document.createElement('div'))
                            .addClass('sprite-characters mario mt-3 ml-4')
                    );

                    isOk = true;
                }
            } while(!isOk);
        };

        let nbCases = nbCaseWidth * nbCaseHeight;
        for (let i = 0; i < nbBlock; i++) {
            createNewBlockCase();
        }

        // Add character
        createStartBlockCase();
    });
}());
