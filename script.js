function updateTick() {
  const currentTimeMs = Date.now();
  console.log("Current Time (ms):", currentTimeMs);
  
  document.getElementById('test-user-time').innerText = currentTimeMs;
}

const refreshRate = 1000; 
const tickInterval = setInterval(updateTick, refreshRate);
