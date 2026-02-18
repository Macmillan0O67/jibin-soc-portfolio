const logs = [
"[INFO] Splunk Alert: Failed Login Attempt Detected",
"[INFO] Investigating Suspicious IP 192.168.1.45",
"[WARNING] SQL Injection Pattern Detected",
"[INFO] Phishing Email Classified as Malicious",
"[ALERT] Brute Force Attempt Blocked",
"[INFO] MITRE ATT&CK T1110 Mapped"
];

const logFeed = document.getElementById("logFeed");

function addLog() {
    const randomLog = logs[Math.floor(Math.random() * logs.length)];
    const p = document.createElement("p");
    p.textContent = randomLog;
    logFeed.appendChild(p);

    if (logFeed.children.length > 8) {
        logFeed.removeChild(logFeed.firstChild);
    }
}

setInterval(addLog, 1500);
