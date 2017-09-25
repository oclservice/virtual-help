var virtualHelpParticipants = {
  'Algonquin': {queue: 'c_algonquin-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15633'},
  'Canadore': {queue: 'c_canadore-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15634'},
  'Centennial': {queue: 'centennial-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15635'},
  'Conestoga': {queue: 'conestoga-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15636'},
  'Confederation': {queue: 'confederation-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15637'},
  'Durham': {queue: 'durham-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15638'},
  'Fanshawe': {queue: 'fanshawe-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15639'},
  'Fleming': {queue: 'c_fleming-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15640'},
  'George Brown': {queue: 'george_brown-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15641'},
  'Georgian': {queue: 'georgian-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15642'},
  'Humber': {queue: 'humber-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15643'},
  'Lambton': {queue: 'lambton-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15644'},
  'Loyalist': {queue: 'c_loyalist-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15645'},
  'Mohawk': {queue: 'c_mohawk-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15646'},
  'Niagara': {queue: 'c_niagara-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15647'},
  'Seneca': {queue: 'seneca-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15648'},
  'St. Clair': {queue: 'st_clair-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15649'},
  'St. Lawrence': {queue: 'c_st_lawrence-learning-portal', domain: 'ca.libraryh3lp.com', skin: '15650'}
};

var libAnswersChatService = {
  'Cambrian': {widgetId: 7494, url: "https://region-ca.libanswers.com/chati.php?hash=9e325506f2798d4cdd4b4c4a7051902a"},
  'Sault': {widgetId: 8592, url: "https://region-ca.libanswers.com/chati.php?hash=517bfb0e24904307f08cd50a5234b476"},
  'Sheridan': {widgetId: 6114, url: "http://sheridancollege.libguides.com/askalibrarian", options: {height: 750, width: 725}}
};

var mosioChatService = {
  'Northern': {keyword: 'northerncollege', url: 'https://ca.textalibrarian.com/par/chat/new_chat/northerncollege'}
};

var localServiceHours = { // Times are in local time.
  'Northern': {
    url: 'https://ca.textalibrarian.com/par/chat/new_chat/northerncollege',
    schedule: { // Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
      '01-01': [
        {open: 0, close: 0},
        {open: 0, close: 0},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 0, close: 0}],
      '01-08': [
        {open: 12, close: 16},
        {open: 8, close: 21},
        {open: 8, close: 21},
        {open: 8, close: 21},
        {open: 8, close: 21},
        {open: 8, close: 18},
        {open: 12, close: 16}],
      '04-27': [
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 8, close: 16}],
      '09-11': [
        {open: 12, close: 16},
        {open: 8, close: 21},
        {open: 8, close: 21},
        {open: 8, close: 21},
        {open: 8, close: 21},
        {open: 8, close: 18},
        {open: 12, close: 16}],
      '12-15': [
        {open: 0, close: 0},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 8, close: 16},
        {open: 0, close: 0}],
      '12-23': [
        {open: 0, close: 0},
        {open: 0, close: 0},
        {open: 0, close: 0},
        {open: 0, close: 0},
        {open: 0, close: 0},
        {open: 0, close: 0},
        {open: 0, close: 0}]
    }
  }
};

var contactPages = {
  'Algonquin': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=algonquin', width: 600, height: 600},
  'Boréal': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=boreal', width: 600, height: 600},
  'Cambrian': {url: 'https://region-ca.libanswers.com/chati.php?hash=9e325506f2798d4cdd4b4c4a7051902a', width: 500, height: 300},
  'Canadore': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=canadore', width: 600, height: 600},
  'Centennial': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=centennial', width: 600, height: 600},
  'Conestoga': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=conestoga', width: 600, height: 600},
  'Confederation': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=confederation', width: 600, height: 600},
  'Durham': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=durham', width: 600, height: 600},
  'Fanshawe': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=fanshawe', width: 600, height: 600},
  'Fleming': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=fleming', width: 600, height: 600},
  'George Brown': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=georgebrown', width: 600, height: 600},
  'Georgian': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=georgian', width: 600, height: 600},
  'Humber': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=humber', width: 600, height: 600},
  'La Cité': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=lacite', width: 600, height: 600},
  'Lambton': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=lambton', width: 600, height: 600},
  'Loyalist': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=loyalist', width: 600, height: 600},
  'Mohawk': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=mohawk', width: 600, height: 600},
  'Niagara': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=niagara', width: 600, height: 600},
  'Northern': {url: 'https://ca.textalibrarian.com/par/chat/new_chat/northerncollege', width: 500, height: 300},
  'Sault': {url: 'https://region-ca.libanswers.com/chati.php?hash=517bfb0e24904307f08cd50a5234b476', width: 500, height: 300},
  'Seneca': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=seneca', width: 600, height: 600},
  'Sheridan': {url: 'http://sheridancollege.libguides.com/askalibrarian', width: 725, height: 750},
  'St. Clair': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=stclair', width: 600, height: 600},
  'St. Lawrence': {url: 'https://www.ocls.ca/virtualhelp/contact.php?college=stlawrence', width: 600, height: 600}
};

// Track click events for various Virtual Help elements.
var trackVirtualHelpEvent = function(eventName) {
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push({'event': eventName});
  }
};

// Updates the college entry to launch a Virtual Help chat box.
var goOnline = function(college, url, options) {
  var height = (options && options.height) || 300,
      width = (options && options.width) || 500,
      popUpOptions = {'title': 'Ask Us', 'style': 'resizable = 1, top = 50, left = 50, width = ' + width + ', height = ' + height},
      description = 'Chat with ' + college;

  $('[data-college="' + college + '"]').removeClass('chat-offline').addClass('chat-online').prepend('<i class="fa fa-comment" aria-hidden="true"></i>').attr('aria-label', description).attr('title', description).attr('href', '#').attr('target','').attr('onclick','window.open(\'' + url + '\', \'' + popUpOptions.title + '\', \'' + popUpOptions.style + '\');');
  $('a[data-college="' + college + '"]').click(function(event) {
    event.preventDefault();
    window.open(url, popUpOptions['title'], popUpOptions['style']);
    trackVirtualHelpEvent('online-click');
  });
  $('a[data-college="' + college + '"] i.fa-envelope').remove();
};

// Check LibAnswers widget to see if chat is online.
var checkLibAnswersPresence = function(college) {
  var widgetId = libAnswersChatService[college].widgetId,
      url = libAnswersChatService[college].url,
      options = libAnswersChatService[college].options;

  $.ajax({
    url: "https://api2-ca.libanswers.com/1.0/chat/widgets/status/" + widgetId,
    dataType: 'jsonp',
    success: function(response) {
      if (response.data.online) {
        goOnline(college, url, options);
      }
    }
  });
};

// Check Virtual Help LH3 queue to see if chat is online.
var checkLibraryH3lpPresence = function(college) {
  var queue = virtualHelpParticipants[college].queue,
      skin = virtualHelpParticipants[college].skin,
      domain = virtualHelpParticipants[college].domain,
      baseUrl = 'https://' + domain;

  $.ajax({
    url: [baseUrl, 'presence', 'jid', queue, 'chat.' + domain, 'js'].join('/'),
    dataType: 'jsonp',
    jsonp: 'cb',
    success: function() {
      for (var i = 0; i < jabber_resources.length; ++i) {
        var resource = jabber_resources[i];

        // A LibraryH3lp queue accepts new chats if its status is availble or chatty.
        if (resource.show === 'available' || resource.show === 'chat') {
          // Replace offline appearance with online appearance.
          var chatBoxOptions = virtualHelpParticipants[college],
              chatBoxUrl = 'https://' + chatBoxOptions.domain + '/chat/' + chatBoxOptions.queue + '@chat.' + chatBoxOptions.domain + '?skin=' + chatBoxOptions.skin;
          goOnline(college, chatBoxUrl);
        }
      }
    }
  });
};

// Check LibAnswers widget to see if chat is online.
var checkMosioPresence = function(college) {
    var keyword = mosioChatService[college].keyword,
        url = mosioChatService[college].url;

    $.ajax({
        url: "https://ca.textalibrarian.com/par/chat/cb_init_widget?mosio_chat_session=null&keyword=" + keyword,
        dataType: 'jsonp',
        success: function(response) {
            var html = response.html;
            if (html.indexOf('Start a Live Chat') !== -1) {
                goOnline(college, url);
            }
        }
    });
};

// Check against a schedule to see if a college's chat is online.
var checkLocalServiceHours = function(college) {
  var url = localServiceHours[college]['url'],
      schedule = localServiceHours[college]['schedule'],
      now = moment().tz('America/Toronto'),
      currentYear = now.year(),
      currentHour = now.hour(),
      dayOfTheWeek = now.day(),
      isOnline = false;

  $.each(schedule, function(startDate, hours) {
    var scheduleDate = moment(currentYear + '-' + startDate);

    if (now.isAfter(scheduleDate)) {
      var openHour = schedule[startDate][dayOfTheWeek]['open'],
          closeHour = schedule[startDate][dayOfTheWeek]['close'];

      isOnline = (currentHour >= openHour) && (currentHour < closeHour);
      return true;
    } else {
      return false;
    }
  });

  if (isOnline) {
    goOnline(college, url);
  }
};

$(function() {
  // By default, all colleges are offline until determined otherwise.
  Object.keys(contactPages).sort().forEach(function(college) {
    var page = contactPages[college],
        title = 'Contact ' + college,
        popUpOptions = 'resizable = 1, top = 50, left = 50, width = ' + page.width + ', height = ' + page.height,
        link = '<a href="#" onclick="window.open(\'' + page.url + '\', \'' + title + '\', \'' + popUpOptions + '\'); trackVirtualHelpEvent(\'offline-click\'); return false;" title="' + title + '" aria-label="' + title + '" class="list-group-item chat-offline" data-college="' + college + '"><i class="fa fa-envelope" aria-hidden="true"></i> ' + college + '</a>';
    $('#virtualHelp').append(link);
  });

  function focusDrawer() {
    $('input#pure-toggle-right').first().focus();
  }

  function removeChatBubble() {
    document.cookie = "virtual-help-shhhh=true; path=/";
    $('.chat-bubble').remove();
    $('.chat-bubble-close').remove();
  }

  function toggleDrawer() {
    $('input#pure-toggle-right').trigger('click');
    removeChatBubble();
    focusDrawer();
  }

  // Wrap around to first college when tabbing through drawer.
  $('a[data-college]').last().blur(function() {
    focusDrawer();
  });

  // Set up virtual help drawer toggle button.
  $('input#pure-toggle-right')
    .keypress(function(event) {
      // Open/close virtual help drawer when input focused and Enter pressed.
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode === 13) {
        toggleDrawer();
      }
    })
    .change(function() {
      if ($(this).is(':not(:checked)')) {
        $(this).blur();
      }
    });

  // Close virtual help drawer when Esc pressed.
  $(document).keyup(function(e) {
    if (e.keyCode === 27) { // Escape
      if ($('input#pure-toggle-right').is(':checked')) {
        toggleDrawer();
      }
    }
  });

  // Show chat invitation close button when hovering over bubble.
  $('.pure-toggle-label')
    .hover(function() {
      $('.chat-bubble-close').show();
    }, function() {
      $('.chat-bubble-close').hide();
    });

  // Close chat invitation bubble when close button clicked.
  $('.chat-bubble-close')
    .click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      removeChatBubble();
    });

  // Track clicks anywhere on the floating Virtual Help button.
  $('.chat-button')
    .click(function() {
      removeChatBubble();
      trackVirtualHelpEvent('floating-button');
    });

  // Make virtual help static link and virtual help static button triggers for drawer.
  $('.chat-button-static-icon')
    .click(function() {
      toggleDrawer();
      trackVirtualHelpEvent('static-button');
    });
  $('.chat-button-static-link')
    .click(function() {
      toggleDrawer();
      trackVirtualHelpEvent('static-link');
    });

  // Retrieve Virtual Help participant chat availability.
  Object.keys(virtualHelpParticipants).sort().forEach(function(college) {
    checkLibraryH3lpPresence(college);
  });

  // Retrieve chat availability for local LibAnswers services.
  Object.keys(libAnswersChatService).sort().forEach(function(college) {
    checkLibAnswersPresence(college);
  });

  // Retrieve chat availability for local Mosio services.
  Object.keys(mosioChatService).sort().forEach(function(college) {
      checkMosioPresence(college);
  });

  // Use schedule to determine availability of local service participants.
  Object.keys(localServiceHours).sort().forEach(function(college) {
    //checkLocalServiceHours(college);
  });

  // Show the VH button after a short delay.
  setTimeout(function() {
    $('.chat-button').addClass('animated pulse').show();

    // Lifted from: https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
    if ((document.cookie.replace(/(?:(?:^|.*;\s*)virtual-help-shhhh\s*\=\s*([^;]*).*$)|^.*$/, '$1') !== 'true')) {
      // Only show the bubble if the guest has not already viewed the VH drawer or closed the bubble.
      setTimeout(function() {
        $('.chat-bubble').addClass('animated pulse').show();
      }, 2 * 1000);
    } else {
      removeChatBubble();
    }
  }, 3 * 1000);
});
