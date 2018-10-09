function darkMode() {
	var body = document.getElementsByTagName('body')[0];
	var toggleButton = document.getElementById('themeToggle');
	var linkBox = document.getElementById('linkBox');
	var frameButton = document.getElementById('frameToggle');
	var sidebarButton = document.getElementById('sidebarToggle');
	var addBar = document.getElementById('addBar');
	var clickLink = document.getElementById('clicky');
	var headerBox = document.getElementById('headerBox');
	
	
	/* dark mode */
	if (toggleButton.innerHTML === "Dark mode") {
		toggleButton.innerHTML = "Light mode";
		toggleButton.style.backgroundColor = "#363636";
		toggleButton.style.color = "#eeeeee";
		frameButton.style.backgroundColor = "#363636";
		frameButton.style.color = "#eeeeee";
		sidebarButton.style.backgroundColor = "#363636";
		sidebarButton.style.color = "#eeeeee";
		body.style.backgroundColor = "#121212";
		linkBox.style.backgroundColor = "rgba(40, 40, 40, 0.5)";
		addBar.style.color = "#dddddd";
		addBar.style.backgroundColor = "#303030";
		clickLink.style.color = "#00dd00";
		clickLink.style.fontFamily = "Consolas";
		headerBox.style.backgroundColor = "#303f9f";
	} else {
		/* light mode */
		toggleButton.innerHTML = "Dark mode";
		toggleButton.style.backgroundColor = "#dddddd";
		toggleButton.style.color = "#000000";
		frameButton.style.backgroundColor = "#dddddd";
		frameButton.style.color = "#000000";
		sidebarButton.style.backgroundColor = "#dddddd";
		sidebarButton.style.color = "#000000";
		body.style.backgroundColor = "#ffffff";
		linkBox.style.backgroundColor = "rgba(200, 200, 200, 0.5)";
		addBar.style.color = "#000000";
		addBar.style.backgroundColor = "#ffffff";
		clickLink.style.color = "#0000ff";
		clickLink.style.fontFamily = "Times New Roman";
		headerBox.style.backgroundColor = "#2196f3";
	}
}

function frameToggle() {
	var viewerFrame = document.getElementById('viewerFrame');
	var clickLink = document.getElementById('clicky');
	var addBar = document.getElementById('addBar');
	var linkBox = document.getElementById('linkBox');
	
	/* visible --> invisible */
	if (viewerFrame.style.opacity == 1) {
		viewerFrame.style.opacity = 0;
		viewerFrame.style.height = "0px";
		clickLink.style.opacity = 0;
		addBar.style.opacity = 0;
		changeLinksToFrameSafe(false);
	} else {
		viewerFrame.style.opacity = 1;
		/* viewerFrame.style.height = "600px"; */
		clickLink.style.opacity = 1;
		addBar.style.opacity = 1;
		changeLinksToFrameSafe(true);
		
		/* resize frame to window size - linkbox */
		viewerFrame.style.width = (window.innerWidth - linkBox.style.width.slice(0, -2)) * .95 + "px";
		
		viewerFrame.style.height = (window.innerHeight - linkBox.style
			.height.slice(0, -2)) * .80 + "px";
	}
}

function changeLinksToFrameSafe(frameActive) {
	/* For extra clarity, 'frameActive' indicates the viewerFrame is open, so links should be ones that can open in iFrame */
	var google = document.getElementById('google');
	var googleMaps = document.getElementById('google-maps');
	var googleTranslate = document.getElementById('google-translate');
	if (frameActive) {
		google.src = "images/bing.png";
		google.alt = "Bing";
		googleMaps.src = "images/mapquest.png";
		googleMaps.alt = "Mapquest";
		googleTranslate.src = "images/bing-translator.png";
		googleTranslate.alt = "Bing Translator";
	} else {
		google.src = "images/google.png";
		google.alt = "Google";
		googleMaps.src = "images/google-maps.png";
		googleMaps.alt = "Google Maps";
		googleTranslate.src = "images/google-translate.png";
		googleTranslate.alt = "Google Translate";
	}
	
}

function fillLink() {
	var clickLink = document.getElementById('clicky');
	var input = document.getElementById('addBar');
	clickLink.innerHTML = input.value;
}

function goToLink(clickLink) {
	document.getElementById('viewerFrame').src = clickLink;
}

function frameLoadNewSite() { /* USED TO BE CALLED THE frameChange() FUNCTION */
	var clickLink = document.getElementById('clicky');
	if (clickLink.innerHTML.indexOf('http') != 0) {
		var x = clickLink.innerHTML;
		clickLink.innerHTML = "http://" + x;
	}
	goToLink(clickLink.innerHTML);
}

function decideBehaviourOfAddBar(url) { /** USED TO BE CALLED a() FUNCTION CHANGE THE NEXT FUNCTION NAME **/
	/* check if toggle is active or not, decides behaviour of linkIcons */
	var viewerFrame = document.getElementById('viewerFrame');
	console.log(url);
	/* if the frame is open, make buttons go to frame. Otherwise, send the user directly to the link*/
	if (viewerFrame.style.opacity == 1) {
		/* frame is open, change links to frame-safe */
		viewerFrame.src = swapURL(url, true)
	} else {
		window.location.assign(swapURL(url, false));
	}
}

function swapURL(url, frameActive) {
	/* (string, boolean) Change URL depending on if the frame is open or not */
	var returnVal =  url;
	if (frameActive) {
		switch (url) {
			case "https://www.google.ca":
				returnVal = "https://www.bing.ca";
				break;
			case "https://www.google.ca/maps":
				returnVal = "https://www.mapquest.com";
				break;
			case "https://translate.google.ca":
				returnVal = "https://www.bing.com/translator";
				break;
		}
	} else {
		switch (url) {
			case "https://www.bing.ca":
				returnVal = "https://www.google.ca";
				break;
			case "https://www.mapquest.com":
				returnVal = "https://www.google.ca/maps";
				break;
			case "https://www.bing.com/translator":
				returnVal = "https://translate.google.ca";
				break;
		}
	}
	return returnVal;
}

function runClock() {
	var dateObj = new Date();
	var h = dateObj.getHours();
	var m = dateObj.getMinutes();
	var s  = dateObj.getSeconds();
	
	document.getElementById('clock').innerHTML = getFormattedTime(h,
	m, s);
	var t = setTimeout(runClock, 100);
}

function checkClockZeros(num) {
	if (num < 10) {
		num = "0" + num;
	}
	return num;
}

function getFormattedTime(h, m, s) {
	var suffix = "AM";
	m = checkClockZeros(m);
	s = checkClockZeros(s);
	if (h > 12) {
		h -= 12;
		suffix = "PM";
	}
	return h + ":" + m + ":" + s + " " + suffix;
}

function sidebarToggle() {
	var btn = document.getElementById('sidebarToggle');
	var linkBox = document.getElementById('linkBox');
	
	/* determine initial state, expand or collapse sidebar based on state */
	
	if (btn.innerHTML === "collapse") {
		btn.innerHTML = "expand";
		linkBox.style.width = "25px";
		
	} else if (btn.innerHTML === "expand") {
		btn.innerHTML = "collapse";
		linkBox.style.width = "150px";
	}
}