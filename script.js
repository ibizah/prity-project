function updateTime() {
    let newYorkTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    let londonTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    let tokyoTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});

    document.getElementById('nyTime').textContent = newYorkTime;
    document.getElementById('lndTime').textContent = londonTime;
    document.getElementById('tkyTime').textContent = tokyoTime;
}

setInterval(updateTime, 1000); // Update the time every second