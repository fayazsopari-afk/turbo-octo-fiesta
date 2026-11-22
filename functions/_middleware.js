
const SHORT_URLS = {
  "/google": "https://google.com",
  "/facebook": "https://raw.githubusercontent.com/fayazsopari-afk/turbo-octo-fiesta/refs/heads/main/Untitled-1%20copy.gif",
  "/youtube": "https://youtube.com"
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const destination = SHORT_URLS[url.pathname];

    if (!destination) {
      return new Response("Short URL not found", {
        status: 404
      });
    }

    return Response.redirect(destination, 302);
  }
};
