const form = document.getElementById('qForm');
const input = document.getElementById('userInput');
const out = document.getElementById('output');

const roasts = [
`Wow. That's... impressively mediocre.`,
`You typed that with confidence? Cute.`,
`If enthusiasm was talent, you'd be a prodigy. Sadly it isn't.`,
`I would explain why that's wrong, but you already knew.`,
`Bold move. Expecting applause. Got crickets.`,
`Congratulations — you've achieved peak 'close enough'.`,
`You're a few pixels away from being interesting.`,
`I admire your optimism. I also file it under 'fiction'.`,
`That answer aged like milk left on a windowsill.`,
`The effort was visible. The result was optional.`,
`You're proof that even evolution takes breaks.`,
`You're like a cloud. When you disappear, it’s a beautiful day.`,
`You bring people so much joy… when you leave the room.`,
`You have something on your chin… no, the third one down.`,
`You have something on your face: your face.`,
`You have something in common with a cloud: both block the sun.`,
`You’re like a software update—whenever I see you, I think “Do I really need this right now?”`,
`You have something in common with a slinky: not really good for anything, but fun to watch fall down the stairs.`,
`Your secrets are safe with me. I never even listen when you tell me them.`,
`If I had a face like yours, I’d sue my parents.`,
`You bring everyone so much happiness… when you go away.`,
`You're like a cloud of WiFi—weak and useless in the corner.`,
`You're living proof that even mistakes can have mistakes.`,
`You're like a gray cloud—dull, annoying, and in the way.`,
`You’re like a software bug—annoying, persistent, and no one knows why you exist.`,
`You have something on your face—oh wait, that’s just your personality.`,
`You bring people closer together… because they’re running away from you.`,
`You’re like a candle in the wind—easily blown out and not missed for long.`,
`You’re like Monday morning: nobody likes you.`,
`You’re proof that even failure has a backup plan.`,
`You’re like a cloud of smoke—useless and bad for everyone’s health.`,
`You bring the room down like gravity.`,
`You’re like a password: hard to remember and best avoided.`,
`You have something rare about you: it’s called common sense, because you clearly don’t have it.`,
`You’re like a software demo: impressive at first, disappointing in reality.`,
`You’re like a cloud blocking the sun—no one asked for you.`,
`You have something most people lack: an off button that never works.`,
`You bring the average down in any room you enter.`,
`You’re like a broken pencil—pointless.`,
`You’re like a cloud of dust—unwanted and impossible to get rid of.`,
`You’re proof that natural selection sometimes just shrugs.`,
`You’re like a bad haircut—everyone notices, no one wants it.`,
`You have something called potential… to annoy everyone.`,
`You bring conversations to a grinding halt like a broken record.`,
`You’re like a dollar store version of someone interesting.`,
`You’re like background noise: nobody cares unless it’s gone, and then they realize life is better.`,
`You’re like a puzzle with missing pieces—confusing and not worth the time.`,
`You have a face made for radio and a voice made for text.`,
`You’re like diet soda—no substance, just fizz.`,
`You’re proof that silence is golden.`,
`You’re like a slow internet connection—frustrating and unnecessary.`,
`You have a gift for making people appreciate silence.`,
`You’re like a participation trophy—technically here, but nobody’s impressed.`,
`You’re like a rumor—everyone hears you, but no one believes you.`,
`You’re like an expired coupon—useless and annoying.`,
`You’re like spam email—unwanted and ignored.`,
`You’re proof that not all evolution leads to improvement.`,
`You’re like an app that crashes constantly—no one wants you, but you keep showing up.`,
`You’re like a cloud at sunset—still in the way, just slightly less ugly.`
];

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function makeRoast(text) {
  const trimmed = text.trim();
  const lower = trimmed.toLowerCase();

  if (lower === 'polugo') {
    window.location.href = 'https://www.youtube.com/watch?v=qOqFRrrb8_c';
    return '';
  }

  if (lower === 'bucketof42pufferfish') {
    return `<span class="secret">How did you find this code?</span>`;
  }

  const r = roasts[Math.floor(Math.random() * roasts.length)];
  const safeText = trimmed ? `"${escapeHtml(trimmed)}" — ` : '';
  return `<span class="roast">${safeText}${r}</span>`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = input.value;
  out.innerHTML = '<span class="muted">Thinking...</span>';
  input.disabled = true;
  setTimeout(() => {
    out.innerHTML = makeRoast(val);
    input.disabled = false;
    input.focus();
    input.select();
  }, 650);
});

window.addEventListener('load', () => input.focus());
