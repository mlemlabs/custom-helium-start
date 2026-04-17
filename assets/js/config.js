/**
 * PROJECT HELIUM - CONFIGURATION
 * ----------------------------
 * Use this file to customize the look and feel of your search page.
 * No coding experience required! Just change the values below.
 */


window.CONFIG = {
    animation: {
        // How fast the 3D logo spins (higher = faster)
        speedX: 0.0003,
        speedY: 0.0005,
        // How big the logo appears on screen
        scale: 1.5
    },
    search: {
        // The default engine to use if you don't use a !bang
        default: 'google',
        // URLs for the standard search engines
        engineUrls: {
            google: 'https://www.google.com/search?q=',
            duckduckgo: 'https://duckduckgo.com/?q=',
            ecosia: 'https://www.ecosia.org/search?q=',
            brave: 'https://search.brave.com/search?q=',
            kagi: 'https://kagi.com/search?q=',
            chatgpt: 'https://chatgpt.com/?q='
        }
    },
    /**
     * SEARCH SHORTCUTS (!bangs)
     * ------------------------
     * Add your own here! 
     * trigger: what you type (e.g., !g)
     * name: the display name
     * url: the search URL with {q} where the search text goes
     */
    bangsList: [
        { trigger: '!g', name: 'Google', url: 'https://www.google.com/search?q={q}' },
        { trigger: '!yt', name: 'YouTube', url: 'https://www.youtube.com/results?search_query={q}' },
        { trigger: '!gh', name: 'GitHub', url: 'https://github.com/search?q={q}' },
        { trigger: '!r', name: 'Reddit', url: 'https://www.reddit.com/search/?q={q}' },
        { trigger: '!w', name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search={q}' },
        { trigger: '!a', name: 'Amazon', url: 'https://www.amazon.com/s?k={q}' },
        { trigger: '!k', name: 'Kagi', url: 'https://kagi.com/search?q={q}' },
        { trigger: '!chat', name: 'ChatGPT', url: 'https://chatgpt.com/?q={q}' },
        { trigger: '!wa', name: 'WolframAlpha', url: 'https://www.wolframalpha.com/input/?i={q}' },
        { trigger: '!gm', name: 'Google Maps', url: 'https://www.google.com/maps/search/{q}' },
        { trigger: '!tw', name: 'Twitter', url: 'https://twitter.com/search?q={q}' },
        { trigger: '!so', name: 'StackOverflow', url: 'https://stackoverflow.com/search?q={q}' },
        { trigger: '!mdn', name: 'MDN', url: 'https://developer.mozilla.org/en-US/search?q={q}' },
        { trigger: '!py', name: 'Python', url: 'https://docs.python.org/3/search.html?q={q}' },
        { trigger: '!npm', name: 'NPM', url: 'https://www.npmjs.com/search?q={q}' },
        { trigger: '!duck', name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q={q}' },
        { trigger: '!imdb', name: 'IMDb', url: 'https://www.imdb.com/find?q={q}' },
        { trigger: '!fb', name: 'Facebook', url: 'https://www.facebook.com/search/top/?q={q}' },
        { trigger: '!ig', name: 'Instagram', url: 'https://www.instagram.com/explore/tags/{q}/' },
        { trigger: '!li', name: 'LinkedIn', url: 'https://www.linkedin.com/search/results/all/?keywords={q}' },
        { trigger: '!nf', name: 'Netflix', url: 'https://www.netflix.com/search?q={q}' },
        { trigger: '!sp', name: 'Spotify', url: 'https://open.spotify.com/search/{q}' },
        { trigger: '!am', name: 'Apple Music', url: 'https://music.apple.com/search?term={q}' },
        { trigger: '!apple', name: 'Apple', url: 'https://www.apple.com/us/search/{q}' },
        { trigger: '!ms', name: 'Microsoft', url: 'https://www.microsoft.com/en-us/search/result.aspx?q={q}' },
        { trigger: '!gif', name: 'GIPHY', url: 'https://giphy.com/search/{q}' },
        { trigger: '!img', name: 'Google Images', url: 'https://www.google.com/search?tbm=isch&q={q}' },
        { trigger: '!news', name: 'Google News', url: 'https://news.google.com/search?q={q}' },
        { trigger: '!tr', name: 'Google Translate', url: 'https://translate.google.com/?sl=auto&tl=en&text={q}' },
        { trigger: '!ebay', name: 'eBay', url: 'https://www.ebay.com/sch/i.html?_nkw={q}' },
        { trigger: '!wp', name: 'WordPress', url: 'https://wordpress.org/search/{q}' },
        { trigger: '!stack', name: 'Stack Exchange', url: 'https://stackexchange.com/search?q={q}' },
        { trigger: '!git', name: 'Git', url: 'https://git-scm.com/search/results?search={q}' },
        { trigger: '!drive', name: 'Google Drive', url: 'https://drive.google.com/drive/search?q={q}' },
        { trigger: '!docs', name: 'Google Docs', url: 'https://docs.google.com/document/u/0/?q={q}' },
        { trigger: '!mail', name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#search/{q}' },
        { trigger: '!cal', name: 'Google Calendar', url: 'https://calendar.google.com/calendar/r/search?q={q}' },
        { trigger: '!medium', name: 'Medium', url: 'https://medium.com/search?q={q}' },
        { trigger: '!dev', name: 'Dev.to', url: 'https://dev.to/search?q={q}' },
        { trigger: '!hn', name: 'Hacker News', url: 'https://hn.algolia.com/?q={q}' },
        { trigger: '!ph', name: 'Product Hunt', url: 'https://www.producthunt.com/search?q={q}' },
        { trigger: '!figma', name: 'Figma', url: 'https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query={q}' },
        { trigger: '!dribbble', name: 'Dribbble', url: 'https://dribbble.com/search/{q}' },
        { trigger: '!behance', name: 'Behance', url: 'https://www.behance.net/search?search={q}' },
        { trigger: '!vimeo', name: 'Vimeo', url: 'https://vimeo.com/search?q={q}' },
        { trigger: '!twitch', name: 'Twitch', url: 'https://www.twitch.org/search?term={q}' },
        { trigger: '!steam', name: 'Steam', url: 'https://store.steampowered.com/search/?term={q}' },
        { trigger: '!epic', name: 'Epic Games', url: 'https://www.epicgames.com/store/en-US/browse?q={q}' },
        { trigger: '!gpt', name: 'ChatGPT', url: 'https://chatgpt.com/?q={q}' },
        { trigger: '!claude', name: 'Claude AI', url: 'https://claude.ai/new?q={q}' },
        { trigger: '!per', name: 'Perplexity', url: 'https://www.perplexity.ai/search?q={q}' },
        { trigger: '!dis', name: 'Discord', url: 'https://discord.com/search?q={q}' },
        { trigger: '!tg', name: 'Telegram', url: 'https://t.me/s/{q}' },
        { trigger: '!ytm', name: 'YouTube Music', url: 'https://music.youtube.com/search?q={q}' }
    ]
};
