
$(document).ready(function () {

	if($('#calendar').length > 0){		
		var dates =  [
		{
			title: 'preschedule scheduled',
			start: '2018-09-4 3:00 AM',
			end: '2018-09-4 7:00 AM',
			className: 'preschedule_type1 events_types scheduled'
		},

		{
			title: 'CI_request scheduled',
			start: '2018-09-4 9:00 PM',
			end: '2018-09-4 10:00 PM',
			className: 'CI_request_type2 events_types scheduled'
		},
		{
			title: 'Partner_request complete',
			start: '2018-09-15',
			end: '2018-09-15',
			className: 'partner_request_type3 events_types complete'
		},
		{
			title: 'custom_class_visit scheduled',
			start: '2018-09-12',
			end: '2018-09-14',
			className: 'custom_class_visit_type4 events_types scheduled'
		},

		{
			title: 'custom_general_visit scheduled',
			start: '2018-09-4 8:00 AM',
			end: '2018-09-5 ',
			className: 'custom_general_visit_type5 events_types scheduled'
		},

		{
			title: 'preschedule cancelled',
			start: '2018-09-5 9:00 AM',
			end: '2018-09-5 10:00 AM',
			className: 'preschedule_type1 events_types cancelled'
		},

		{
			title: 'CI_request cancelled',
			start: '2018-09-5 11:00 AM',
			end: '2018-09-5 2:00 PM',
			className: 'CI_request_type2 events_types cancelled'
		},
		{
			title: 'Partner_request assigned',
			start: '2018-09-1 1:00 AM',
			end: '2018-09-3 3:00 AM',
			className: 'partner_request_type3 events_types assigned'
		},
		{
			title: 'custom_class_visit conducted',
			start: '2018-09-8',
			end: '2018-09-8',
			className: 'custom_class_visit_type4 events_types conducted'
		},

		{
			title: 'custom_general_visit conducted',
			start: '2018-09-9',
			end: '2018-09-9',
			className: 'custom_general_visit_type5 events_types conducted'
		}


		]

		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
                navLinks: true, // can click day/week names to navigate views
                selectable: true,
                selectHelper: true,
                eventRender: function(event, element) {
                	$(element).tooltip({title: event.title});             
                },
                selectConstraint: {
                	start: $.fullCalendar.moment().subtract(1, 'days'),
                	end: $.fullCalendar.moment().startOf('month').add(1, 'month')
                },

                select: function (start, end) {

                	$("#startDatetime").val(convertToDate(start));
                	$("#endDatetime").val(convertToDate(end));
                	$("#eventForm").html('');
                	$("#newModalTypeID").val('');
                	$(".selectpicker").selectpicker('refresh');
                	$("#eventModal").modal('show');
                	$('#calendar').fullCalendar('unselect');
                },
                editable: false,
                events: dates,
                allDaySlot: false,
                
                eventMouseover: function (calEvent, jsEvent, view)
                {

                	if (Number(calEvent.StatusId) === 3) {
                		var tooltip = `<div class="tooltipevent" 
                		style="width:100px;height:100px;background:#ccc;border-color:black;border-width:0.8px;border-style:solid;position:absolute;z-index:10001;">
                		<h6>Final Report:</h6>`
                		
                		+ calEvent.FinalReport +
                		`</div>`;
                		var $tooltip = $(tooltip).appendTo('body');

                		$(this).mouseover(function (e) {
                			$(this).css('z-index', 10000);
                			$tooltip.fadeIn('500');
                			$tooltip.fadeTo('10', 1.9);
                		}).mousemove(function (e) {
                			$tooltip.css('top', e.pageY + 10);
                			$tooltip.css('left', e.pageX + 20);
                		});
                	}
                	else {
                		$(this).tooltip({ title: event.description, html: true, container: "body" });
                		$(this).tooltip('show');
                	}
                	

                },
                eventMouseout: function (event, jsEvent, view) {
                	$(this).css('z-index', 8);
                	$('.tooltipevent').remove();
                },
                eventClick: function (calEvent, jsEvent, view) {
                	console.log(calEvent);
                	$("#editDate").val(calEvent.Date);
                	$("#editStartDatetime").val(calEvent.StartTime);
                	$("#editEndDatetime").val(calEvent.EndTime);
                	$("#startCalendarDate").val(convertToDate(calEvent.start));
                	$("#endCalendarDate").val(convertToDate(calEvent.end));
                	$("#editProgramName").val(calEvent.programName);
                	$("#editCourseName").val(calEvent.courseName);
                	$("#editPartnerName").val(calEvent.partnerName);
                	$("#editClassCode").val(calEvent.classCode);
                	$("#statusId").val(calEvent.StatusId);
                	$("#editNotes").val(calEvent.Description);
                	var status = calEvent.StatusId;
                	if (Number(status) === 4 ) {
                		$("#cancelReasonContainer").css("display", "");
                		$("#finalReportContainer").css("display", "none");
                		$("#editCancelReason").val(calEvent.CancellationReason);
                		$("#assignTooID").attr("disabled", "disabled");
                	}
                	else if (Number(status) === 3)
                	{
                		$("#finalReportContainer").css("display", "");
                		$("#cancelReasonContainer").css("display", "none");
                		$("#editFinalReport").val(calEvent.FinalReport);
                		$("#editFinalReport").attr("readonly", "readonly");
                		$("#assignTooID").attr("disabled", "disabled");
                	}
                	else if (Number(status) === 2)
                	{
                		$("#cancelReasonContainer").css("display", "none");
                		$("#finalReportContainer").css("display", "none");
                		$("#editCancelReason").attr("readonly", "readonly");
                		$("#editCancelReason").val("");
                		$("#assignTooID").attr("disabled", "disabled");
                	}
                	else {
                		$("#cancelReasonContainer").css("display", "none");
                		$("#finalReportContainer").css("display", "none");
                		$("#editCancelReason").attr("readonly","readonly");
                		$("#editCancelReason").val("");
                		$("#assignTooID").removeAttr("disabled");
                	}
                //$("#editNotes").val(calEvent.Description);
                if (calEvent !== null) {
                	$("#assignTooID").val(calEvent.AssignedTo);
                }
                clearValidation();
                $("#editEventModal").modal('show');
                var cId = calEvent.classId;
                var qCIntervals = calEvent.QCVisitsIntervals;
                var currentId = calEvent.id;
                var currentSession = calEvent.sessionNo;
                var model = {
                	classId: cId,
                	selectedId: currentId,
                	selectedSession: currentSession,
                	QCIntervals: qCIntervals,
                	currentQCStatus: status
                };

                console.log(model);
                /// AJAX Get Sessions
                $.ajax({
                	method: 'POST',
                	url: '/QualityControl/GetClassSessions',
                	data: model,
                	success: function (result) {
                		$("#sessions").html(result);
                		$(".selectpicker").selectpicker('refresh');
                	},
                	error: function (xhr, ajaxOptions, thrownError) {
                		ShowNotification("An internal error occurred please try again.", 'error', 'topCenter', false, 3000);
                	}
                });
            }
        });

}

});
function addEvent() {
	eventData = {
		title: $("#eventName").val(),
		start: $("#startCalendarDate").val(),
		end: $("#endCalendarDate").val()
	};
	$('#calendar').fullCalendar('renderEvent', eventData, true);
	$("#eventModal").modal('hide');

}
function convertToDate(str) {
       // ALL DATES CONVERTS TO UTC TO BE MATCHING WITH CALENDAR
       var date = new Date(str),
       mnth = ("0" + (date.getUTCMonth() + 1)).slice(-2),
       day = ("0" + date.getUTCDate()).slice(-2),
       hours = ("0" + date.getUTCHours()).slice(-2),
       mins = ("0" + date.getUTCMinutes()).slice(-2);
       var finalDate = [day, mnth, date.getFullYear()].join("/");
       finalDate += " " + formatAMPM(hours,mins);
       return finalDate;
   }
   function formatAMPM(hours, minutes) {
   	minutes = Number(minutes);
   	hours = Number(hours);
   	var ampm = hours >= 12 ? 'PM' : 'AM';
   	hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    function updateSelectedSession() {
    	if (isValidToUpdate()) {
    		var model = {
    			ID: $("#hiddenCurrentId").val(),
    			SessionNo: $("#newSessionId").val(),
    			OldSessionNo: $("#hiddenOldSessionNo").val(),
    			ClassID: $("#hiddenClassId").val(),
    			AssignedTo: $("#assignTooID").val(),
    			StatusID: $("#statusId").val(),
    			CancellationReason: "",
    			FinalReport:""
    		};
    		if (Number(model.StatusID) === 4) {
            //Cancel
            model.CancellationReason = $("#editCancelReason").val();
        }
        if (Number(model.StatusID) === 3) {
            // Conducted
            model.FinalReport = $("#editFinalReport").val();
        }
        $.ajax({
        	method: 'POST',
        	url: '/QualityControl/UpdateQCVisitNumber',
        	data: model,
        	success: function (result) {
                  // DO THE CALENDAR UPDATE
                  $('#calendar').fullCalendar('removeEvents', Number(model.ID)); // stick? = true
                  $('#calendar').fullCalendar('renderEvent', result, true); // stick? = true
                  $("#editEventModal").modal('hide');
                  ShowNotification("Updated Successfully", 'success', 'topCenter', false, 3000);
              },
              error: function (xhr, ajaxOptions, thrownError) {
              	ShowNotification("An internal error occurred please try again.", 'error', 'topCenter', false, 3000);
              }
          });
    }

}
function isValidToUpdate() {
	var model = {
		ID: $("#hiddenCurrentId").val(),
		SessionNo: $("#newSessionId").val(),
		OldSessionNo: $("#hiddenOldSessionNo").val(),
		ClassID: $("#hiddenClassId").val(),
		AssignedTo: $("#assignTooID").val(),
		StatusID: $("#statusId").val(),
		CancellationReason: "",
		FinalReport: ""
	};
	var isValid = true;
	if (Number(model.StatusID) === 2) {
		if (model.AssignedTo === "" || model.AssignedTo === 0 || model.AssignedTo === undefined) {
			isValid = false;
			$("#assignTooID").parent().next().html('The field is mandatory');
		}
	}
	if (Number(model.StatusID) === 3) {
            // Conducted
            model.FinalReport = $("#editFinalReport").val();
            if (model.FinalReport === null || model.FinalReport.trim() === "" || model.FinalReport === undefined) {
            	isValid = false;
            	$("#editFinalReport").next().html('The field is mandatory');
            }
            else {
            	if (model.FinalReport.length > 500) {
            		isValid = false;
            		$("#editFinalReport").next().html('The maximum length is 500 characters');
            	}
            }
        }
        if (Number(model.StatusID) === 4) {
            //Cancel
            model.CancellationReason = $("#editCancelReason").val();
            if (model.CancellationReason === null || model.CancellationReason.trim() === "" || model.CancellationReason === undefined) {
            	isValid = false;
            	$("#editCancelReason").next().html('The field is mandatory');
            }
            else {
            	if (model.CancellationReason.length > 500) {
            		isValid = false;

            		$("#editCancelReason").next().html('The maximum length is 500 characters');
            	}
            }
        }
        if (model.StatusID === null || model.StatusID === 0 || model.StatusID === "") {
        	isValid = false;
        	$("#statusId").parent().next().html('The field is mandatory');
        }

        return isValid;
    }
    function getEventForm(item) {
    	$.ajax({
    		method: 'GET',
    		url: '/QualityControl/GetViewByQCType?typeId='+item.value,
    		success: function (result) {
    			$("#eventForm").html(result);
    			$(".selectpicker").selectpicker('refresh');
    		},
    		error: function (xhr, ajaxOptions, thrownError) {
    			ShowNotification("An internal error occurred please try again.", 'error', 'topCenter', false, 3000);
    		}
    	});
    }
    function clearValidation() {
    	$("#assignTooID").parent().next().html('');
    	$("#editFinalReport").next().html('');
    	$("#editCancelReason").next().html('');
    	$("#statusId").parent().next().html('');


    }
