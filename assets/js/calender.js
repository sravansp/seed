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
    if (selectYear) {
        document.getElementById("year").innerHTML = createYear;
    }

    var calendar = document.getElementById("calendar");

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

    months = monthDefault;
    days = dayDefault;

    var $dataHead = "<tr>";
    for (dhead in days) {
        $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
    }
    $dataHead += "</tr>";

    document.getElementById("thead-month").innerHTML = $dataHead;

    monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);

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

    function jump() {
        currentYear = parseInt(selectYear.value);
        currentMonth = parseInt(selectMonth.value);
        showCalendar(currentMonth, currentYear);
    }

    // Make the showCalendar function available in the global scope
    window.showCalendar = showCalendar;


    function showCalendar(month, year) {
        var firstDay = new Date(year, month).getDay();
        tbl = document.getElementById("calendar-body");
        tbl.innerHTML = "";

        monthAndYear.innerHTML = months[month] + " " + year;
        selectYear.value = year;
        selectMonth.value = month;

        function countEventsForDate(targetDate) {
            return events.filter((event) => event.date === targetDate).length;
        }

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
                    cell.innerHTML = "<a href='#'>" + date + "</a";

                    if (
                        date === today.getDate() &&
                        year === today.getFullYear() &&
                        month === today.getMonth()
                    ) {
                        cell.className = "date-picker selected";
                    }

                    const dateString = `${year}-${month + 1}-${date}`;
                    const eventCount = countEventsForDate(dateString);

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

    function updateSelectBoxes() {
        selectYear.value = currentYear;
        selectMonth.value = currentMonth;
    }

    function jumpToToday() {
        const today = new Date();
        currentYear = today.getFullYear();
        currentMonth = today.getMonth();
        showCalendar(currentMonth, currentYear);
        updateSelectBoxes();
    }

    if (document.querySelector("#date")) {
        const todays = new Date();
        const formattedDate = `${todays.getDate().toString().padStart(2, '0')}/${(todays.getMonth() + 1).toString().padStart(2, '0')}/${todays.getFullYear()}`;
        document.getElementById('date').textContent = formattedDate;
    }

    if (document.querySelector("#today")) {
        const todaydate = new Date();
        const day = today.getDate();
        const dayOfWeek = today.getDay();
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const month = today.getMonth();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const year = today.getFullYear();
        const dayOfWeekName = dayNames[dayOfWeek];

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