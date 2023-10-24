import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
    en: {
        name: "Brendon Tsim",
        subline: "Software Development",

        github: "GitHub",
        resume: "Resume",
        email: "Email",
        linkedin: "LinkedIn",

        intro_first: `Hi! I'm Brendon, a Computer Science student at The University of British Columbia in Vancouver, BC, Canada.`,
        intro_second: `My interests in computing are mainly in distributed systems, computer networking, image information (media encoding, image processing) and machine learning.`,
        intro_third: `In my free time, I like to play the guitar, look at keyboards that I can't afford and learn Japanese.`,
        intro_fourth: `I also like to apply new knowledge to my interests by working on game development & livestreaming related projects.`,
        intro_fifth: `For academic, career opportunities or other enquiries, please contact me through my email.`,

        footer: 'Background Image by Laurence Lee',
    },
    zh: {
        name: "詹耀鈞",
        subline: "軟件開發",

        github: "GitHub",
        resume: "英文簡歷",
        email: "電郵",
        linkedin: "LinkedIn",

        intro_first: `您好！我是耀鈞 (Brendon)，一位在英屬哥倫比亞大學裏修讀計算機科學的大學生。`,
        intro_second: `在計算機科學的領域裏，我對分布式計算、電腦聯網、媒體基礎（視訊編碼、圖像處理）和機器學習特別感興趣。`,
        intro_third: `在我空閑的時間，我喜歡彈吉他，追蹤有關我買不起的鍵盤的資訊和學習日文。`,
        intro_fourth: `我也喜歡透過研發游戲以及有關直播的科技去把學到的新知識應用到我的興趣裏。`,
        intro_fifth: `有關學術，工作的機會或其他查詢，請透過電郵聯絡我。`,

        footer: '背景照片由 Laurence Lee 提供',
    },
    jp: {
        name: "詹耀鈞 (ブレンドン)",
        subline: "ソフトウェア開発",

        github: "GitHub",
        resume: "英文履歴書",
        email: "メール",
        linkedin: "LinkedIn",

        intro_first: `初めまして！カナダのブリティッシュコロンビア大学、コンピューターサイエンス専攻のブレンドン (Brendon) です。`,
        intro_second: `コンピューターサイエンスの分野の中で、分散システム、コンピューターネットワーク、画像情報（ビデオエンコーディング、画像処理）と機材機械学習を中心として勉強しています。`,
        intro_third: `暇な時はギターを引いたり、買えないキーボードを見たり、日本語を勉強したりします。`,
        intro_fourth: `ゲームと配信に関するプロジェクトを開発することで、学んだ知識を活かしています。`,
        intro_fifth: `学術・仕事の機会やお問い合わせはメールでご連絡くださいますようお願いいたします。`,

        footer: '背景画像: Laurence Lee',
    }
})

export default strings;