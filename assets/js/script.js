
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


$(document).ready(function () {
    $('#submit-btn').click(function () {
        $('#submit-section').fadeOut(200, function () {
            $('#upload-section').fadeIn(300);
        });
    });

    $('#back-btn').click(function () {
        $('#upload-section').fadeOut(200, function () {
            $('#submit-section').fadeIn(300);
        });
    });
});


$(document).ready(function () {
    function handleFiles(files, method) {
        console.log(`Files selected via ${method}:`);
        for (let i = 0; i < files.length; i++) {
            console.log(`File ${i + 1}: ${files[i].name}, Size: ${files[i].size} bytes, Type: ${files[i].type}`);
        }

        // Update the UI
        $('#file-name').text(files[0].name);
        $('#file-name-detail').text(files[0].name);
        $('#file-size').text((files[0].size / 1024 / 1024).toFixed(2) + ' MB');
        $('#uploaded-on').text(new Date().toLocaleDateString());

        // Hide the upload wrapper and show the upload data
        $('.file-upload-wrapper').hide();
        $('#upload-data').fadeIn();
    }

    $('#browse-files-btn').click(function () {
        $('#fileInput').click();
    });

    $('#fileInput').change(function () {
        handleFiles(this.files, 'browse button');
    });

    $('.file-upload-wrapper').on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('dragging');
    });

    $('.file-upload-wrapper').on('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass('dragging');
    });

    $('.file-upload-wrapper').on('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass('dragging');
        var files = e.originalEvent.dataTransfer.files;
        handleFiles(files, 'drag-and-drop');
    });

    $('#close-upload-data').click(function () {
        $('#upload-data').hide();
        $('.file-upload-wrapper').show();
    });

    $('#second-upload-btn').click(function () {
        $('#upload-document').fadeIn();
        $('#upload-data').hide();
    });


    $('#close-verify-data').click(function () {
        $('#upload-document').hide();
        $('#upload-data').show();
    });
});

$(document).ready(function () {
    $('input[type="checkbox"]').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('table-tr-bg');
        } else {
            $(this).closest('tr').removeClass('table-tr-bg');
        }
    }); 
});

$(document).ready(function () {
    const rowsPerPage = 4; 
    const $table = $('#pdf-table tbody');
    const $paginationControls = $('#pagination-controls');
    const $prevPageButton = $('#prev-page');
    const $nextPageButton = $('#next-page');
    const $pageInfo = $('#page-info');

    let currentPage = 1;
    let totalPages = Math.ceil($table.find('tr').length / rowsPerPage);

    function displayPage(page) {
        const startRow = (page - 1) * rowsPerPage;
        const endRow = startRow + rowsPerPage;

        $table.find('tr').fadeOut(100);

        $table.find('tr').slice(startRow, endRow).fadeIn();

        $pageInfo.text(`Page ${page} of ${totalPages}`);

        $prevPageButton.prop('disabled', page === 1);
        $nextPageButton.prop('disabled', page === totalPages);
    }

    $prevPageButton.on('click', function () {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
        }
    });

    $nextPageButton.on('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
        }
    });
    displayPage(currentPage);
});


$(document).ready(function () {
    function updateCustomProgressBar(progress) {
        $('#custom-progress-bar').css('width', progress + '%');
        $('#custom-progress-text').text(progress + '%');
    }
    var progress = 0;
    var interval = setInterval(function () {
        if (progress >= 100) {
            clearInterval(interval);
            $('#file-upload-progress').hide();
            $('#success-message').show();
        } else {
            progress += 10;
            updateCustomProgressBar(progress);
        }
    }, 1000);
});

  

    

// accounting page



// apply-for-lone-page
$(document).ready(function() {
    $('#apply-btn').click(function() {
        $('#lone-content').hide();
        $('#otp-section').fadeIn();
    });
});
// apply-for-lone-page

