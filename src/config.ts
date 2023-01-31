export var config = {
    web_server: {
        use_http: false,
        port: 3000,
        cors: ["*"],
    },
    mapping: {
        threshold: 0.8,
        comparison_threshold: 0.8,
        wait: 200,
        search_partial: false,
        partial_amount: 1,
        provider: {
            // CrunchyRoll is currently experiencing some issues.
            // It is recommended to disable it for now even if
            // you have a premium account.
            // However, it may work with an insanely high wait limit (5 seconds).
            CrunchyRoll: {
                threshold: 0.95,
                comparison_threshold: 0.95,
                wait: 5000,
                email: "",
                password: "",
                locale: "en-US",
                search_partial: false,
                partial_amount: 1,
                disabled: true
            },
            Zoro: {
                threshold: 0.8,
                comparison_threshold: 0.9,
                wait: 200,
                search_partial: true,
                partial_amount: 0.95,
                disabled: false
            },
            // Gogo only provides romaji titles.
            GogoAnime: {
                threshold: 0.8,
                comparison_threshold: 0.8,
                wait: 200,
                search_partial: true,
                partial_amount: 0.75,
                disabled: false
            },
            // AnimeFox as well. AnimeFox is essentially Zoro but
            // with GogoAnime sources/data.
            AnimeFox: {
                threshold: 0.65,
                comparison_threshold: 0.8,
                wait: 200,
                search_partial: true,
                partial_amount: 0.85,
                disabled: false
            },
            AnimePahe: {
                threshold: 0.8,
                comparison_threshold: 0.8,
                wait: 200,
                search_partial: true,
                partial_amount: 0.75,
                disabled: false
            },
            // Enime is the most accurate since it provides
            // the romaji, english, and native title.
            // However, there is an annoying rate limit that
            // takes into effect after crawling around 70 pages.
            // A high wait limit might be necessary (around 1000ms).
            Enime: {
                threshold: 0.95,
                comparison_threshold: 0.95,
                wait: 500,
                search_partial: false,
                partial_amount: 1,
                disabled: true
            },
            ComicK: {
                threshold: 0.8,
                comparison_threshold: 0.8,
                wait: 200,
                search_partial: false,
                partial_amount: 1,
                disabled: false
            },
            // Relatively accurate.
            MangaDex: {
                threshold: 0.65,
                comparison_threshold: 0.65,
                wait: 200,
                search_partial: false,
                partial_amount: 1,
                disabled: false
            },
            Mangakakalot: {
                threshold: 0.8,
                comparison_threshold: 0.8,
                wait: 200,
                search_partial: false,
                partial_amount: 1,
                disabled: false
            },
            MangaPark: {
                threshold: 0.85,
                comparison_threshold: 0.8,
                wait: 200,
                search_partial: false,
                partial_amount: 1,
                disabled: false
            },
            MangaSee: {
                threshold: 0.85,
                comparison_threshold: 0.8,
                wait: 200,
                search_partial: false,
                partial_amount: 1,
                disabled: false
            },
            TMDB: {
                api_key: "5201b54eb0968700e693a30576d7d4dc",
                threshold: 0.6,
                comparison_threshold: 0.6,
                wait: 350,
                search_partial: false,
                partial_amount: 1,
                disabled: false
            },
            Kitsu: {
                threshold: 0.9,
                comparison_threshold: 0.9,
                wait: 350,
                search_partial: false,
                partial_amount: 1,
                disabled: false
            },
            AniList: {
                SEASON: "WINTER",
                SEASON_YEAR: 2023,
                NEXT_SEASON: "SPRING",
                NEXT_YEAR: 2023,
                disabled: false,
                wait: 350
            }
        },
    },
    crawling: {
        // The path can be relative. For example:
        // ../Documents/Coding/AniSync/db.db
        database_path: "/Users/eltik/Documents/Coding/AniSync/db.db",
        debug: true,
        data: {
            wait: 1000,
            max_pages: 10,
            ids_per_page: 10, // How many IDs to crawl through per-page
            start: 0
        }
    }
};