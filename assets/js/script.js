$(document).ready(function () {
   // Remove 'active' class from all nav-links
   $('#nav .nav-link').removeClass('active');

   // Get current page URL
   var currentPath = window.location.pathname;

   // Initialize a variable to hold the active link text
   var activeLinkText = '';

   // Iterate through each nav-link, including dropdown items
   $('#nav .nav-link').each(function () {
      // Get the href attribute of the nav-link
      var href = $(this).attr('href');

      // Check if href matches current page URL
      if (href && currentPath.includes(href)) {
         // Add 'active' class to the matching nav-link
         $(this).addClass('active');

         // Get the text of the active nav-link
         activeLinkText = $(this).text();

         // Check if the active link is a dropdown item
         if ($(this).closest('#drop').length) {
            // Add 'active' class to the parent dropdown link
            $('#drop > a').addClass('active');

            // Ensure the dropdown menu is visible
            $('#drop2').show();
         }
      }
   });

   // Update the text of the title-link with the active link text
   if (activeLinkText) {
      $('#title-link').text(activeLinkText);
   }

   // Toggle dropdown menu on click
   $('#drop > a').click(function (e) {
      e.preventDefault();
      $('#drop2').slideToggle();
   });

   // Close dropdown if clicked outside
   $(document).click(function (e) {
      if (!$(e.target).closest('#drop').length) {
         $('#drop2').slideUp();
      }
   });
});

// sales dropdown

// chart animation
$(document).ready(function () {
   $('.progress-bar-animated').animate({
      width: '25%'
   }, {
      duration: 1000,
      step: function (now, fx) {
         $(this).attr('aria-valuenow', now.toFixed(0));
      }
   });
});
// chart animation

// progress bar4
$(document).ready(function () {
   var progressValue = 49; // Adjust this value as needed
   var progressBarLeft = $('.progress-left .progress-bar');
   var progressBarRight = $('.progress-right .progress-bar');

   if (progressValue <= 50) {
       progressBarRight.css('animation', 'loading-1 ' + (1.8 * progressValue / 100) + 's linear forwards');
       progressBarLeft.css('animation', 'none');
   } else {
       progressBarRight.css('animation', 'loading-1 1.8s linear forwards');
       progressBarLeft.css('animation', 'loading-2 ' + ((progressValue - 50) * 1.8 / 100) + 's linear forwards 1.8s');
   }

   $('.progress-value').text(progressValue + '%');
});
// progress bar








// index page end 


// accounting page
$(document).ready(function () {
   $('#submit-btn').click(function () {
      $('#submit-section').fadeOut(200, function () {
         $('#upload-section').fadeIn(300);
      });
   });
   $('#back-btn').click(function () {
      $('#upload-section').hide()
      $('#submit-section').fadeIn(100);
   });
});


$(document).ready(function () {
   function handleFiles(files, method) {
      console.log(`Files selected via ${method}:`);
      for (let i = 0; i < files.length; i++) {
         console.log(`File ${i + 1}: ${files[i].name}, Size: ${files[i].size} bytes, Type: ${files[i].type}`);
      }


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

   $('#close-verify-document').click(function () {
      $('#verify-document').hide();
      $('#upload-data').show();
   });
});

$(document).ready(function () {
   $('input[type="checkbox"]').on('change', function () {
      if ($(this).is(':checked')) {
         $(this).closest('.tables-system').addClass('bg-white');
      } else {
         $(this).closest('.tables-system').removeClass('bg-white');
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
         $('#success-message').fadeIn();
      } else {
         progress += 10;
         updateCustomProgressBar(progress);
      }
   }, 1000);
});
$(document).ready(function () {
   $('#verify-btn').click(function () {
      $('#upload-document').fadeOut('slow', function () {
         $('#verify-document').fadeIn('slow');
      });
   });
});

// accounting page



// sales page
$(document).ready(function () {
   $('#invoice-btn').on('click', function () {
       $('#invoice-section').fadeOut(function () {
           $('#invoice-generate').fadeIn();
       });
   });
   $('#estimate-btn').on('click', function () {
       $('#istimate-section').fadeOut(function () {
           $('#estimate-generate').fadeIn();
       });
   });
   $('#back-invoice').on('click', function () {
       $('#invoice-generate').fadeOut(function () {
           $('#invoice-section').fadeIn();
       });
   });

   $('#back-estimate').on('click', function () {
       $('#estimate-generate').fadeOut(function () {
           $('#istimate-section').fadeIn();
       });
   });
});


$(document).ready(function () {
   $('#cash-fields').hide(); // Initially hide the cash-fields div

   $('#paymentSwitch').change(function () {
      if (this.checked) {
         $('#cash-fields').fadeIn();
      } else {
         $('#cash-fields').fadeOut();
      }
   });
});




// sales page




//  document page

$(document).ready(function () {
   $("#show-submit-document").click(function () {
      $('#file-section').hide();
      $("#submit-document").fadeIn();
      $("#Fiscal-Year").hide();
      $("#d-back-btn").fadeIn();
   });

   $("#show-fiscal-year").click(function () {
      $('#file-section').hide();
      $("#submit-document").hide();
      $("#Fiscal-Year").fadeIn();
      $("#d-back-btn").fadeIn();
   });

   $('#d-back-btn').click(function () {
      $("#submit-document").hide();
      $("#Fiscal-Year").hide();
      $('#file-section').fadeIn();
      $("#d-back-btn").fadeOut();

      // Resetting the nested content visibility
      $('#fiscal-year-document').show();
      $('#sales-month-table').hide();
      $('#Sales').show();
      $('#purchase').show();
      $('#Banking').show();
   });

   $('#Sales').click(function () {
      $('#Sales').hide();
      $('#purchase').hide();
      $('#Banking').hide();
      $('#sales-month-table').fadeIn();
   });
   $('#purchase').click(function () {
      $('#Sales').hide();
      $('#purchase').hide();
      $('#Banking').hide();
      $('#purchase-month-table').fadeIn();
   });

   $('#Banking').click(function () {
      $('#Sales').hide();
      $('#purchase').hide();
      $('#Banking').hide();
      $('#Banking-month-table').fadeIn();
   });
});


$(document).ready(function () {
   $('.toggle-password').on('click', function () {
      var passwordInput = $(this).prev('input');
      var type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
      passwordInput.attr('type', type);
      $(this).toggleClass('fa-eye fa-eye-slash');
   });

   $('.Save-password-btn').on('click', function (e) {
      e.preventDefault();
      $('#blur-overlay').toggleClass('hidden');

   });
});


//  document page

// reports page
$(document).ready(function () {
   $('.toggle-button').click(function () {
      var movementEquity = $(this).siblings('.movement-equity');
      var icon = $(this).find('i');
      var buttonText = $(this).contents().filter(function () {
         return this.nodeType === 3;
      })[0];

      movementEquity.slideToggle('slow', function () {
         if (movementEquity.is(':visible')) {
            icon.removeClass('fa-angle-down').addClass('fa-angle-up');
            buttonText.nodeValue = ' Less Reports';
         } else {
            icon.removeClass('fa-angle-up').addClass('fa-angle-down');
            buttonText.nodeValue = ' More Reports';
         }
      });
   });

   $('.box-tb').click(function () {
      $(this).toggleClass('selected');
   });
});

// reposrts page


// apply-for-lone-page
$(document).ready(function () {
   $('#apply-btn').click(function () {
      $('#lone-content').hide();
      $('#otp-section').fadeIn();
   });
});
// apply-for-lone-page


// setting page

$(document).ready(function () {
   let currentStep = 0;
   const steps = $('.step');
   const progressSteps = $('.progress-step');
   const progressText = $('#progressText');
   const formData = {};

   function showStep(step) {
      steps.eq(currentStep).fadeOut(400, function () {
         steps.removeClass('active').eq(step).fadeIn(400).addClass('active');
      });
      progressSteps.removeClass('active').slice(0, step + 1).addClass('active');
      progressText.text(`${step + 1} of ${steps.length}`);
   }

   function saveFormData() {
      $('#multiStepForm')
         .find('input, select, textarea')
         .each(function () {
            formData[this.id] = $(this).val();
         });
   }

   function loadFormData() {
      $.each(formData, function (key, value) {
         $(`#${key}`).val(value);
      });
   }

   $('.next-step').click(function () {
      if (currentStep < steps.length - 1) {
         saveFormData();
         const nextStep = currentStep + 1;
         steps.eq(currentStep).fadeOut(400, function () {
            currentStep = nextStep;
            showStep(currentStep);
         });
      }
   });
   progressSteps.click(function () {
      const step = $(this).data('step');
      if (step < currentStep) {
         steps.eq(currentStep).fadeOut(400, function () {
            currentStep = step;
            showStep(currentStep);
         });
      }
   });

   $('#multiStepForm').submit(function (event) {
      event.preventDefault();
      saveFormData();
      console.log(formData);
   });

   loadFormData();
   showStep(currentStep);
});

// setting page


$(document).ready(function () {
   $('.custom-select-option').on('click', function () {
      const dropdown = $(this).next('.custom-dropdown');
      $('.custom-dropdown').not(dropdown).hide(); // Hide all other dropdowns
      dropdown.toggle();
   });

   $('.custom-dropdown').on('click', 'div', function () {
      const value = $(this).data('value');
      $(this).parent().prev('.custom-select-option').text(value);
      $(this).parent().hide();
   });

   $(document).on('click', function (e) {
      if (!$(e.target).closest('.custom-select-container').length) {
         $('.custom-dropdown').hide();
      }
   });
});