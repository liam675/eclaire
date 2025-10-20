const mediaData = [
    { id: 'id1', url: 'https://discord.gg/eclaire' },
    { id: 'id2', url: 'https://discord.gg/eclaire' },
    { id: 'id3', url: 'https://discord.gg/eclaire' }
    // Add more media entries here with id and YouTube embed URL
];

const mediaContainer = document.getElementById('media-container');

mediaData.forEach(media => {
    const iframe = document.createElement('iframe');
    iframe.src = media.url;
    iframe.title = `Media ${media.id}`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    mediaContainer.appendChild(iframe);
});
