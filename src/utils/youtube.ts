export const getYouTubeThumbnail = (url?: string) => {
  if (!url) return undefined;

  try {
    const parsedUrl = new URL(url);
    let videoId = parsedUrl.searchParams.get("v");

    if (!videoId && parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.slice(1).split("/")[0];
    }

    if (!videoId && (parsedUrl.pathname.startsWith("/embed/") || parsedUrl.pathname.startsWith("/shorts/"))) {
      videoId = parsedUrl.pathname.split("/")[2];
    }

    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : undefined;
  } catch {
    return undefined;
  }
};