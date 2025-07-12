async function getQuote() {
  try {
    const res = await fetch('https://api.allorigins.win/raw?url=https://zenquotes.io/api/random');
    const data = await res.json();
    document.getElementById('quote').innerText = `"${data[0].q}" — ${data[0].a}`;
  } catch (error) {
    document.getElementById('quote').innerText = `"Talk is cheap. Show me the code." — Linus Torvalds`;
  }
}

function copyQuote() {
  const text = document.getElementById('quote').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("✅ Quote copied to clipboard!");
  });
}

function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle('dark');
}


// Run on page load
getQuote();
