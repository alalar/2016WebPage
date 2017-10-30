function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

var language = readCookie("userLanguage");
if (language==null) {
	language = navigator.language || navigator.userLanguage; 
	language = language.substring(0,2).toUpperCase();
}

var showWelcomeMessagesInterval = null;
var nextTimeShowWelcomeMessages = null;
var slowTime=200;
function showWelcomeMessages(lstMessages) {
			clearInterval(showWelcomeMessagesInterval);
			clearTimeout(nextTimeShowWelcomeMessages);
			$('h1 span.mainInfo').text("");
			$('h1 span.blink').text("|");
			var intCurrentText = 0;
			var intWaitShowingInfo = 0;
			showWelcomeMessagesInterval = setInterval(function(lstInfoToShow) {
				strText = lstInfoToShow[intCurrentText];
				currentLengthInfo = $('span.mainInfo').text().length;
				// Add text to the target element
				$('h1 span.mainInfo').text(strText.substring(0,currentLengthInfo+1));

				// No more characters - exit
				if (strText.length < currentLengthInfo+1) { 
					intWaitShowingInfo++;
					if (intWaitShowingInfo>10) {
						$('h1 span.mainInfo').text("");
						intCurrentText++;
						intWaitShowingInfo = 0;
						if (intCurrentText==lstInfoToShow.length) {
							$('h1 span.mainInfo').text("");
							$('h1 span.blink').text("");
							 clearInterval(showWelcomeMessagesInterval);
							 nextTimeShowWelcomeMessages = setTimeout(function(){showWelcomeMessages(lstMessages)}, 15000);
						}
					}
				}
			}, slowTime, lstMessages);
}

	$(document).ready(function(){
		
		translatePageTo(language);
		$(".cssAboutMe span.buttondown").click(function () {
		   $( ".cssAboutMe" ).slideUp( "slow", function () {$( ".cssAboutMe1" ).slideDown()});
		});
		$(".cssAboutMe1 span.buttonup").click(function () {
		   $( ".cssAboutMe1" ).slideUp( "slow", function () {$( ".cssAboutMe" ).slideDown()});
		});
		$("#hyperLang").click(function () {
			
			if (language=="EN")
				language="SP"
			else
				language="EN";
			createCookie("userLanguage",language,100);
			translatePageTo(language);
		});
		$(".cssSplashWindow").hide();

		$('[data-toggle="tooltip"]').tooltip()
	});

