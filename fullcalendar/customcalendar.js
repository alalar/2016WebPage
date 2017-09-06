//Global variables
	//working start time;
	MIN_HOUR_CALENDAR = 7;
	MAX_HOUR_CALENDAR = 18;
	WORKING_START_TIME = 8*60*60*1000;
	WORKING_HOURS = 8*60*60*1000;
	MILISECS_DAY = 24*60*60*1000;
	MILISECS_SLOT = 1800000;
	FILL_DAYS = true;
	WORKING_START_HOUR = 8;
	WORKING_HOUR = 8;
	var lstColors = [
        '#CC6633', '#33CC66', '#6633CC', '#3366CC', '#CC3366'
    ];
	var itemId=1;
	
	$(document).ready(function() {
	
	
		/* initialize the external events
		-----------------------------------------------------------------*/
		$('#external-events div.external-event').each(function(i,element) {
			$(element).css("background-color", lstColors[i % lstColors.length]);
			// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
			// it doesn't need to have a start or end
			var eventObject = {
				title: $.trim($(this).find("span").text()), // use the element's text as the event title
				allDay: false,
				startEditable: true,
				durationEditable: true,
				BGcolor: lstColors[i % lstColors.length]
			};
			
			// store the Event Object in the DOM element so we can get to it later
			$(this).data('eventObject', eventObject);
			
			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
			
		});
	
		
		$('#calendar').fullCalendar({
			theme: true,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			axisFormat: 'HH:mm',
			timeFormat: {
				agenda: 'HH:mm',
				'': 'HH(:mm)'
			},
			columnFormat: {
				month: 'ddd',                             
				week: 'ddd D/M', 
				day: 'dddd D/M'
			},
			defaultEventMinutes:60,
			firstDay: 1,
			minTime: '7:00',
			maxTime: '18:00',
			selectable: true,
			allDaySlot: false,
			editable: true,
			disableResizing: false,
			defaultView: 'month',
			droppable: true, // this allows things to be dropped onto the calendar !!!
			drop: function(date, allDay) { // this function is called when something is dropped
			
				addNewEntryTime(this,date,allDay);
				
			},
			dayRender: function (date, cell) {
				
			  },
			eventRender: function(event, element, view) {
				element.css("background-color", event.BGcolor);
				element.css("border-color", event.BGcolor);
				var btnClose=document.createElement('div');
				$(btnClose).addClass('cssRemove ui-state-error')
				.html('<span  class="ui-icon  ui-icon-circle-close" title="remove entry"></span>')
				.appendTo($(element).find('.fc-time'))
				.click(function() {
					$('#calendar').fullCalendar('removeEvents', event.id);
					if (FILL_DAYS)
					{
						addRemoveItemFillDay(event,true);
					}
				});
				


			},
			dayRender: function (date, cell) {
				
			  },
			eventAfterAllRender: function(view) {
				var allEvents = $("#calendar").fullCalendar('clientEvents');
				var items = {};//create new object
				for (var i = 0; allEvents.length > i ; i++){
					//to know hours in day
					intPosDay = allEvents[i].start.date();
					intDuration = allEvents[i].end.diff(allEvents[i].start,'miliseconds');
					items[intPosDay] = (isNaN(items[intPosDay])?0:items[intPosDay]) + intDuration;
					intDuration = items[intPosDay];
				}
				$("td.fc-widget-content").removeClass("CssWarningDay CssOkDay");
				$("td.ui-widget-content").removeClass("CssWarningDay CssOkDay");
				$("td.fc-day-number").removeClass("CssWarningDay CssOkDay");
				for (var key in items) {
					if (items.hasOwnProperty(key)) {
						if (items[key]<(WORKING_HOURS))
						{
							strCssStyle = "CssWarningDay";
						}
						else
						{
							strCssStyle = "CssOkDay";
						}
						if (view.name=="month")
							{
								$("td[data-date='" + moment(view.start).date(key).format("YYYY-MM-DD") + "']").addClass(strCssStyle);
							}
							else if (view.name=="agendaWeek")
							{
								$("td[data-date='" + moment(view.start).date(key).format("YYYY-MM-DD") + "']").addClass(strCssStyle);
							}
							
					}
				}

			},
			eventClick: function(calEvent, jsEvent, view) {

			},
			eventDragStart: function (calEvent, jsEvent, ui, view) {
					   
			},
			 eventDragStop: function (event, dayDelta, minuteDelta, allDay, revertFunc) {


            },
			eventResize: function(event, delta, revertFunc)  {
				if (isOverlapping(event) || isMultipleDays(event))  {
					revertFunc();
				}
				else
				{
					adjustEventTime(event);
				}
			},
			eventDrop: function(event, delta, revertFunc) {
				if (FILL_DAYS) {
					addRemoveItemFillDay(event,false);
					$('#calendar').fullCalendar('updateEvent', event);
				}
				else
				{
					if (isOverlapping(event)) {
						revertFunc();
					}
					else
					{
						adjustEventTime(event);
					}
				}
			},

			eventMouseover: function(calEvent, domEvent) {

			}, 
 
			eventMouseout: function(calEvent, domEvent) {
			}
		});
		
		$(".external-event").mouseover(function () {
			$(".external-event").not(this).find(".explain-event").slideUp('slow');
			$(this).find(".explain-event").slideDown('slow');
		});
		
		//bind the checkbox with the value of the vable
		$('#filldates').change(function() {
			FILL_DAYS = $(this).is(":checked");
		});
		$('#filldates')[0].checked = FILL_DAYS;
		

		intOptions = $('#external-events div.external-event').length;
		//We create some calendar entries
		for (intTempAux=0;intTempAux<30;intTempAux++) {
			addNewEntryTime($('#external-events div.external-event')[intTempAux % intOptions],moment().date(Math.floor(Math.random() * 31) + 1),false);
		}
		
	});
	
	
	
	
	function addNewEntryTime(domElement,date,allDay){
		// retrieve the dropped element's stored Event Object
		var originalEventObject = $(domElement).data('eventObject');
		
		// we need to copy it, so that multiple events don't have a reference to the same object
		var copiedEventObject = $.extend({}, originalEventObject);
		
		
		// assign it the date that was reported
		copiedEventObject.start = date;
		copiedEventObject.end = new moment(copiedEventObject.start).add(1,'h');
		copiedEventObject.allDay = false;
		if (allDay || FILL_DAYS) {
			addRemoveItemFillDay(copiedEventObject,false);
		}
		copiedEventObject.id = itemId++;
		//if (!isOverlapping(copiedEventObject))
		{
			// render the event on the calendar
			// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
			$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
			
			// is the "remove after drop" checkbox checked?
			if ($('#drop-remove').is(':checked')) {
				// if so, remove the element from the "Draggable Events" list
				$(domElement).remove();
			}
		}
		//else
		//{
		//	itemId--;
		//}
	}
	function adjustEventTime(event){
		//We put the entries to the min an max values
		if (event.start.hour()<MIN_HOUR_CALENDAR) {
			event.start.hour(MIN_HOUR_CALENDAR)
		}
		if (event.end.hour()>MAX_HOUR_CALENDAR) {
			event.end.hour(MAX_HOUR_CALENDAR)
		}
	}
	function isOverlapping(event){
		var array = $('#calendar').fullCalendar('clientEvents');
		for(i in array){
			if (event.id!=array[i].id && event.end > array[i].start && event.start < array[i].end){
			   return true;
			}
		}
		return false;
	}
	function isMultipleDays(event){
		return !event.start.isSame(event.end,'day');
	}
	function addRemoveItemFillDay(newEvent,blnRemoved){
		//We go over each current event we split the working hours between number of events
		//var selectedDate = new Date(newEvent.start.getFullYear(), newEvent.start.getMonth(), newEvent.start.getDate());
		//We work with momentjs object
		var selectedDate = new moment(newEvent.start).hour(0).minute(0).second(0).millisecond(0);
		var nextSelectedDate = new moment(selectedDate).hour(24);
		var initialDateTime = new moment(selectedDate).hour(WORKING_START_HOUR);
		var array = $('#calendar').fullCalendar('clientEvents');
		var sameDayEvents = [];
		for(i in array){
			if (newEvent.id!=array[i].id && newEvent.start.isSame(array[i].start,'d')){
					sameDayEvents.push(array[i].id);
			}
		}
		if (sameDayEvents.length>0 || sameDayEvents)
		{
			eventTime = Math.round(WORKING_HOURS / MILISECS_SLOT / (sameDayEvents.length + (blnRemoved?0:1)));
			eventTime = eventTime * MILISECS_SLOT;
			var tempDate
			for (intAux=0;intAux<sameDayEvents.length;intAux++)
			{
				var items = $('#calendar').fullCalendar('clientEvents',sameDayEvents[intAux]);
				for (intElem = 0; intElem < items.length; ++intElem) {
					var elementToUpdate = items[intElem];
					elementToUpdate.start.hour(WORKING_START_HOUR).minute(0).second(0).millisecond(intAux*eventTime);
					if (blnRemoved && intAux==(sameDayEvents.length-1))
					{
						elementToUpdate.end.hour(WORKING_START_HOUR + WORKING_HOUR).minute(0).second(0).millisecond(0);
					}
					else
					{
						elementToUpdate.end.hour(WORKING_START_HOUR).minute(0).second(0).millisecond((intAux+1)*eventTime);
					}
					$('#calendar').fullCalendar('updateEvent', elementToUpdate);
				}
			}
			if (!blnRemoved)
			{
				newEvent.start.hour(WORKING_START_HOUR).minute(0).second(0).millisecond(sameDayEvents.length*eventTime);
				newEvent.end.hour(WORKING_START_HOUR + WORKING_HOUR).minute(0).second(0).millisecond(0);
				
			}
		}
	}