function initializeCalendar() {
    function generate_year_range(start, end) {
        var years = "";
        for (var year = start; year <= end; year++) {
            years += "<option value='" + year + "'>" + year + "</option>";
        }
        return years;
    }

    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    selectYear = document.getElementById("year");
    selectMonth = document.getElementById("month");

    createYear = generate_year_range(1970, 2050);
    /** or
     * createYear = generate_year_range( 1970, currentYear );
     */
    if (selectYear) {
        document.getElementById("year").innerHTML = createYear;
    }

    var calendar = document.getElementById("calendar");
    // var lang = calendar.getAttribute("data-lang");

    var months = "";
    var days = "";


    // Add a "Today" button click event listener
    const todayButton = document.getElementById("todayButton");
    if (todayButton) {
        todayButton.addEventListener("click", jumpToToday);
    }

    // Define an array of events with date information
    const events = [{
            date: "2023-10-15",
            title: "Meeting with Client",
        },
        {
            date: "2023-10-11",
            title: "Meeting with friends",
        },
        {
            date: "2023-10-16",
            title: "Team Lunch",
        },
        {
            date: "2023-10-18",
            title: "Presentation",
        },
        {
            date: "2023-10-15",
            title: "Another Meeting",
        },
        {
            date: "2023-10-18",
            title: "Presentation",
        },
        // Add more events as needed
    ];

    var monthDefault = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    var dayDefault = ["S", "M", "T", "W", "T", "F", "S"];

    // if (lang == "en") {
    months = monthDefault;
    days = dayDefault;
    // } else {
    // months = monthDefault;
    // days = dayDefault;
    // }

    var $dataHead = "<tr>";
    for (dhead in days) {
        $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
    }
    $dataHead += "</tr>";

    //alert($dataHead);
    document.getElementById("thead-month").innerHTML = $dataHead;

    monthAndYear = document.getElementById("monthAndYear");
    
    showCalendar(currentMonth, currentYear);

    window.showCalendar = showCalendar;

    function showCalendar(month, year) {
        var firstDay = new Date(year, month).getDay();

        tbl = document.getElementById("calendar-body");

        tbl.innerHTML = "";

        monthAndYear.innerHTML = months[month] + " " + year;
        selectYear.value = year;
        selectMonth.value = month;


        // Function to count events for a given date
        function countEventsForDate(targetDate) {
            return events.filter((event) => event.date === targetDate).length;
        }


        // creating all cells
        var date = 1;
        for (var i = 0; i < 6; i++) {
            var row = document.createElement("tr");

            for (var j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    cell = document.createElement("td");
                    cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > daysInMonth(month, year)) {
                    break;
                } else {
                    cell = document.createElement("td");
                    cell.setAttribute("data-date", date);
                    cell.setAttribute("data-month", month + 1);
                    cell.setAttribute("data-year", year);
                    cell.setAttribute("data-month_name", months[month]);
                    cell.className = "date-picker";
                    cell.innerHTML = "<a href='#'>" + date + "</a>";

                    if (
                        date === today.getDate() &&
                        year === today.getFullYear() &&
                        month === today.getMonth()
                    ) {
                        cell.className = "date-picker selected";
                    }

                    // Calculate the date string for the current cell
                    const dateString = `${year}-${month + 1}-${date}`;

                    // Find the count of events for the current date
                    const eventCount = countEventsForDate(dateString);

                    // Display the event count if it's greater than 0
                    if (eventCount > 0) {
                        const eventCountElement = document.createElement("div");
                        eventCountElement.className = "event-count";
                        cell.classList.add("event-cell");
                        cell.innerHTML = "<a href='#'>" + date + "</a>";
                        eventCountElement.textContent = eventCount;
                        cell.appendChild(eventCountElement);
                    }


                    row.appendChild(cell);
                    date++;
                }
            }

            tbl.appendChild(row);
        }
    }



    function daysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }

    if (document.querySelector("#date")) {
        // Get today's date
        const todays = new Date();

        // Format the date as "01/01/2023"
        const formattedDate = `${todays.getDate().toString().padStart(2, '0')}/${(todays.getMonth() + 1).toString().padStart(2, '0')}/${todays.getFullYear()}`;

        // Display the formatted date in the specified <span> element
        document.getElementById('date').textContent = formattedDate;
    }

    if (document.querySelector("#today")) {

        const todaydate = new Date();

        // Get today's date
        const day = today.getDate();

        // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const dayOfWeek = today.getDay();

        // Define an array of day names
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // Get the month (0 = January, 1 = February, ..., 11 = December)
        const month = today.getMonth();

        // Define an array of month names
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // Get the year
        const year = today.getFullYear();

        // Get the day of the week name
        const dayOfWeekName = dayNames[dayOfWeek];

        // Display the results
        document.getElementById("today").textContent = day;
        document.getElementById("dayOfWeek").textContent = dayOfWeekName;
        document.getElementById("today-month").textContent = monthNames[month];
        document.getElementById("today-year").textContent = year;

    }
}



// Call the function to initialize the calendar
initializeCalendar();

// Make the jump function available in the global scope
window.jump = jump;
window.updateSelectBoxes = updateSelectBoxes;
window.jumpToToday = jumpToToday;
window.next = next;
window.previous = previous;



function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}


function updateSelectBoxes() {
    selectYear.value = currentYear;
    selectMonth.value = currentMonth;

    // Trigger the change event for the Select2 select boxes
    $(selectYear).trigger('change.select2');
    $(selectMonth).trigger('change.select2');
}

function jumpToToday() {
    const today = new Date();
    currentYear = today.getFullYear();
    currentMonth = today.getMonth();
    showCalendar(currentMonth, currentYear);
    updateSelectBoxes();
}

function next() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    updateSelectBoxes();
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    updateSelectBoxes();
    showCalendar(currentMonth, currentYear);
}