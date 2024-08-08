function isValidYoutubeURL(url) {
  const videoIdPattern =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const playlistIdPattern = /[?&]list=([a-zA-Z0-9_-]+)/;

  return videoIdPattern.test(url) || playlistIdPattern.test(url);
}

function isPlaylist(url) {
  const urlObj = new URL(url);
  return urlObj.searchParams.has("list");
}

export { isValidYoutubeURL, isPlaylist };
