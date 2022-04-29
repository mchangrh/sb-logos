addEventListener('fetch', (e) => {
  e.respondWith(redirectResponse())
});

async function redirectResponse() {
  const choices = ["vuetube", "ecoli"]
  const choice = choices[Math.floor(Math.random() * choices.length)]
  const picture = "https://logo.sb.mchang.xyz/logos/" + choice + ".png"
  return new Response('', {
    status: 301,
    headers: {
      'Location': picture,
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    }
  })
}