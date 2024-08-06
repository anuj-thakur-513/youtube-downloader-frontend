function isPlaylist(url) {
  const urlObj = new URL(url);
  return urlObj.searchParams.has("list");
}

export { isPlaylist };
