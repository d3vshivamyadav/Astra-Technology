// ============================================================
// ASTRA AI TOOLS - COMPLETE SCRIPT
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // TOOLS DATABASE - 150+ FREE AI TOOLS
    // ============================================================

    const tools = [
        // ============================================================
        // CHAT & CONVERSATION
        // ============================================================
        {
            name: "ChatGPT",
            company: "OpenAI",
            description: "AI assistant for writing, coding, research and creative tasks.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/openai",
            url: "https://chatgpt.com",
            featured: true
        },
        {
            name: "Google Gemini",
            company: "Google",
            description: "Google's advanced AI assistant for productivity and learning.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/googlegemini",
            url: "https://gemini.google.com",
            featured: true
        },
        {
            name: "Claude",
            company: "Anthropic",
            description: "Helpful AI assistant for writing, analysis and complex tasks.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/anthropic",
            url: "https://claude.ai",
            featured: true
        },
        {
            name: "DeepSeek",
            company: "DeepSeek",
            description: "Powerful AI model for coding, reasoning and problem-solving.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/deepseek",
            url: "https://chat.deepseek.com",
            featured: false
        },
        {
            name: "Mistral AI",
            company: "Mistral",
            description: "Open-source AI models with strong reasoning capabilities.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/mistralai",
            url: "https://mistral.ai",
            featured: false
        },
        {
            name: "Perplexity AI",
            company: "Perplexity",
            description: "AI-powered search engine with cited, verifiable answers.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/perplexity",
            url: "https://www.perplexity.ai",
            featured: true
        },
        {
            name: "YouChat",
            company: "You.com",
            description: "AI search assistant with real-time information and citations.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/you",
            url: "https://you.com",
            featured: false
        },
        {
            name: "Character AI",
            company: "Character.AI",
            description: "Chat with AI-powered characters for entertainment and learning.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/characterai",
            url: "https://character.ai",
            featured: false
        },
        {
            name: "Poe",
            company: "Quora",
            description: "AI chat platform with multiple models including ChatGPT and Claude.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/poe",
            url: "https://poe.com",
            featured: false
        },
        {
            name: "HuggingChat",
            company: "Hugging Face",
            description: "Open-source AI chat powered by Hugging Face models.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/huggingface",
            url: "https://huggingface.co/chat",
            featured: false
        },
        {
            name: "Bard AI",
            company: "Google",
            description: "Google's conversational AI for creative collaboration.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/googlebard",
            url: "https://bard.google.com",
            featured: false
        },
        {
            name: "Pi AI",
            company: "Inflection AI",
            description: "Emotionally intelligent AI assistant for conversations.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/inflectionai",
            url: "https://pi.ai",
            featured: false
        },
        {
            name: "Cohere AI",
            company: "Cohere",
            description: "AI platform for natural language understanding and generation.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/cohere",
            url: "https://cohere.ai",
            featured: false
        },
        {
            name: "AI21 Labs",
            company: "AI21",
            description: "AI platform for text generation and analysis.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/ai21",
            url: "https://ai21.com",
            featured: false
        },
        {
            name: "Kimi AI",
            company: "Moonshot AI",
            description: "AI assistant for reading, writing and research tasks.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/moonshot",
            url: "https://kimi.moonshot.cn",
            featured: false
        },
        {
            name: "Qwen AI",
            company: "Alibaba",
            description: "AI assistant for chat, coding and creative writing.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/alibaba",
            url: "https://qwen.alibaba.com",
            featured: false
        },
        {
            name: "Doubao AI",
            company: "ByteDance",
            description: "AI assistant for chat, learning and creative tasks.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/bytedance",
            url: "https://doubao.com",
            featured: false
        },
        {
            name: "MaxAI",
            company: "MaxAI",
            description: "AI assistant for chat, writing and productivity tasks.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/maxai",
            url: "https://maxai.com",
            featured: false
        },
        {
            name: "Inbox AI",
            company: "Inbox AI",
            description: "AI-powered email assistant for smart management.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/inboxai",
            url: "https://inboxai.com",
            featured: false
        },

        // ============================================================
        // CODING & DEVELOPMENT
        // ============================================================
        {
            name: "GitHub Copilot",
            company: "GitHub",
            description: "AI coding assistant that helps you write code faster.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/github",
            url: "https://github.com/features/copilot",
            featured: true
        },
        {
            name: "Tabnine",
            company: "Tabnine",
            description: "AI code completion tool supporting all programming languages.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/tabnine",
            url: "https://www.tabnine.com",
            featured: false
        },
        {
            name: "Codeium",
            company: "Codeium",
            description: "Free AI-powered code completion and generation.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/codeium",
            url: "https://codeium.com",
            featured: true
        },
        {
            name: "Replit AI",
            company: "Replit",
            description: "AI-powered coding environment with code assistance.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/replit",
            url: "https://replit.com",
            featured: false
        },
        {
            name: "Cody by Sourcegraph",
            company: "Sourcegraph",
            description: "AI code assistant for code understanding and generation.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/sourcegraph",
            url: "https://sourcegraph.com/cody",
            featured: false
        },
        {
            name: "Amazon CodeWhisperer",
            company: "Amazon",
            description: "AI coding companion for building applications faster.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/amazon",
            url: "https://aws.amazon.com/codewhisperer",
            featured: false
        },
        {
            name: "Blackbox AI",
            company: "Blackbox",
            description: "AI code assistant with real-time code suggestions.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/blackbox",
            url: "https://blackbox.ai",
            featured: false
        },
        {
            name: "Mutable AI",
            company: "Mutable",
            description: "AI-powered development environment for fast coding.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/mutableai",
            url: "https://mutable.ai",
            featured: false
        },
        {
            name: "CodiumAI",
            company: "Codium",
            description: "AI code analysis and testing suggestions.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/codium",
            url: "https://codium.ai",
            featured: false
        },
        {
            name: "DeepCode",
            company: "DeepCode",
            description: "AI code review and security analysis tool.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/deepcode",
            url: "https://deepcode.ai",
            featured: false
        },
        {
            name: "CodeGeeX",
            company: "CodeGeeX",
            description: "AI code generation and completion for developers.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/codegeex",
            url: "https://codegeex.cn",
            featured: false
        },
        {
            name: "Bloop AI",
            company: "Bloop",
            description: "AI code search and understanding for large codebases.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/bloop",
            url: "https://bloop.ai",
            featured: false
        },
        {
            name: "AskCodi",
            company: "AskCodi",
            description: "AI coding assistant with natural language interface.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/askcodi",
            url: "https://askcodi.com",
            featured: false
        },
        {
            name: "Pieces AI",
            company: "Pieces",
            description: "AI coding assistant for developers and teams.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/pieces",
            url: "https://pieces.app",
            featured: false
        },

        // ============================================================
        // IMAGE GENERATION
        // ============================================================
        {
            name: "Stable Diffusion",
            company: "Stability AI",
            description: "Open-source text-to-image generation model.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/stabilityai",
            url: "https://stability.ai",
            featured: true
        },
        {
            name: "Leonardo AI",
            company: "Leonardo",
            description: "AI image and video generation platform for creators.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/leonardoai",
            url: "https://leonardo.ai",
            featured: false
        },
        {
            name: "Playground AI",
            company: "Playground",
            description: "Easy-to-use AI image generation and editing tool.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/playgroundai",
            url: "https://playgroundai.com",
            featured: false
        },
        {
            name: "DreamStudio",
            company: "Stability AI",
            description: "Stable Diffusion image generation interface.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/dreamstudio",
            url: "https://dreamstudio.ai",
            featured: false
        },
        {
            name: "Artbreeder",
            company: "Artbreeder",
            description: "AI image generation and manipulation platform.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/artbreeder",
            url: "https://artbreeder.com",
            featured: false
        },
        {
            name: "Craiyon",
            company: "Craiyon",
            description: "Free text-to-image generation with multiple variations.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/craiyon",
            url: "https://craiyon.com",
            featured: false
        },
        {
            name: "Picsart AI",
            company: "Picsart",
            description: "AI-powered image editing and creative tools.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/picsart",
            url: "https://picsart.com",
            featured: false
        },
        {
            name: "Clipdrop AI",
            company: "Clipdrop",
            description: "AI image editing and enhancement tools.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/clipdrop",
            url: "https://clipdrop.co",
            featured: false
        },
        {
            name: "DeepAI",
            company: "DeepAI",
            description: "AI image generation and editing platform.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/deepai",
            url: "https://deepai.org",
            featured: false
        },
        {
            name: "NightCafe",
            company: "NightCafe",
            description: "AI art generator with multiple styles and models.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/nightcafe",
            url: "https://nightcafe.studio",
            featured: false
        },
        {
            name: "Lensa AI",
            company: "Lensa",
            description: "AI photo editing and avatar generation tool.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/lensa",
            url: "https://lensa.ai",
            featured: false
        },

        // ============================================================
        // VIDEO & ANIMATION
        // ============================================================
        {
            name: "Runway ML",
            company: "Runway",
            description: "AI-powered video editing and generation tools.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/runway",
            url: "https://runwayml.com",
            featured: true
        },
        {
            name: "Pika Labs",
            company: "Pika",
            description: "Text-to-video generation with creative control.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/pika",
            url: "https://pika.art",
            featured: false
        },
        {
            name: "HeyGen",
            company: "HeyGen",
            description: "AI video generation with animated avatars.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/heygen",
            url: "https://heygen.com",
            featured: false
        },
        {
            name: "Clipchamp AI",
            company: "Microsoft",
            description: "AI-powered video editing and creation tool.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/microsoft",
            url: "https://clipchamp.com",
            featured: false
        },
        {
            name: "InVideo AI",
            company: "InVideo",
            description: "AI video creation and editing platform.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/invideo",
            url: "https://invideo.io",
            featured: false
        },
        {
            name: "Lumen5",
            company: "Lumen5",
            description: "AI video creation from blog posts and articles.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/lumen5",
            url: "https://lumen5.com",
            featured: false
        },
        {
            name: "Fliki AI",
            company: "Fliki",
            description: "AI video creation with text-to-video capability.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/fliki",
            url: "https://fliki.ai",
            featured: false
        },
        {
            name: "Synthesia",
            company: "Synthesia",
            description: "AI video creation with realistic avatars and voiceovers.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/synthesia",
            url: "https://www.synthesia.io",
            featured: false
        },

        // ============================================================
        // DESIGN
        // ============================================================
        {
            name: "Canva AI",
            company: "Canva",
            description: "Design creation with AI-powered tools and templates.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/canva",
            url: "https://www.canva.com",
            featured: true
        },
        {
            name: "Figma AI",
            company: "Figma",
            description: "AI-powered design tool for UI/UX and prototyping.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/figma",
            url: "https://www.figma.com",
            featured: true
        },
        {
            name: "Adobe Firefly",
            company: "Adobe",
            description: "AI-powered creative tools for design and photography.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/adobe",
            url: "https://firefly.adobe.com",
            featured: false
        },
        {
            name: "Designs.ai",
            company: "Designs.ai",
            description: "AI design platform for logos, videos, and mockups.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/designsai",
            url: "https://designs.ai",
            featured: false
        },
        {
            name: "Looka",
            company: "Looka",
            description: "AI logo design and brand creation tool.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/looka",
            url: "https://looka.com",
            featured: false
        },
        {
            name: "Uizard",
            company: "Uizard",
            description: "AI-powered UI/UX design and prototyping.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/uizard",
            url: "https://uizard.io",
            featured: false
        },
        {
            name: "Hatchful AI",
            company: "Shopify",
            description: "AI logo generator for businesses and brands.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/shopify",
            url: "https://hatchful.shopify.com",
            featured: false
        },
        {
            name: "LogoAI",
            company: "LogoAI",
            description: "AI logo design and brand identity creation.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/logoai",
            url: "https://logoai.com",
            featured: false
        },
        {
            name: "Brandmark AI",
            company: "Brandmark",
            description: "AI logo and brand identity creation tool.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/brandmark",
            url: "https://brandmark.io",
            featured: false
        },

        // ============================================================
        // WRITING & CONTENT
        // ============================================================
        {
            name: "Grammarly",
            company: "Grammarly",
            description: "AI writing and grammar assistant for clear communication.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/grammarly",
            url: "https://www.grammarly.com",
            featured: true
        },
        {
            name: "Copy.ai",
            company: "Copy.ai",
            description: "AI copywriting tool for marketing and sales content.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/copyai",
            url: "https://www.copy.ai",
            featured: false
        },
        {
            name: "QuillBot",
            company: "QuillBot",
            description: "AI paraphrasing and writing improvement tool.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/quillbot",
            url: "https://quillbot.com",
            featured: false
        },
        {
            name: "Rytr",
            company: "Rytr",
            description: "AI writing assistant for blogs, emails, and social media.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/rytr",
            url: "https://rytr.me",
            featured: false
        },
        {
            name: "Writesonic",
            company: "Writesonic",
            description: "AI content generator for articles, ads, and product descriptions.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/writesonic",
            url: "https://writesonic.com",
            featured: false
        },
        {
            name: "AI Writer",
            company: "AI Writer",
            description: "AI-powered content creation and text generation.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/aiwriter",
            url: "https://ai-writer.com",
            featured: false
        },
        {
            name: "ShortlyAI",
            company: "ShortlyAI",
            description: "AI writing assistant for long-form content and articles.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/shortlyai",
            url: "https://shortlyai.com",
            featured: false
        },
        {
            name: "Wordtune",
            company: "Wordtune",
            description: "AI-powered rewriting and paraphrasing tool.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/wordtune",
            url: "https://wordtune.com",
            featured: false
        },
        {
            name: "Hemingway Editor",
            company: "Hemingway",
            description: "AI writing assistant that improves readability and clarity.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/hemingway",
            url: "https://hemingwayapp.com",
            featured: false
        },
        {
            name: "ProWritingAid",
            company: "ProWritingAid",
            description: "AI grammar and style checker for writers.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/prowritingaid",
            url: "https://prowritingaid.com",
            featured: false
        },
        {
            name: "SudoWrite",
            company: "SudoWrite",
            description: "AI writing assistant for fiction and creative writing.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/sudowrite",
            url: "https://sudowrite.com",
            featured: false
        },
        {
            name: "Lex",
            company: "Lex",
            description: "AI-powered writing tool for creative professionals.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/lex",
            url: "https://lex.page",
            featured: false
        },
        {
            name: "HyperWrite AI",
            company: "HyperWrite",
            description: "AI writing assistant for content creation and editing.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/hyperwrite",
            url: "https://hyperwriteai.com",
            featured: false
        },
        {
            name: "LongShot AI",
            company: "LongShot",
            description: "AI content generator for blogs and long-form content.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/longshot",
            url: "https://longshot.ai",
            featured: false
        },

        // ============================================================
        // PRODUCTIVITY
        // ============================================================
        {
            name: "Notion AI",
            company: "Notion",
            description: "AI-powered workspace for notes, projects and collaboration.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/notion",
            url: "https://www.notion.so",
            featured: true
        },
        {
            name: "Otter AI",
            company: "Otter",
            description: "AI meeting transcription and note-taking assistant.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/otterai",
            url: "https://otter.ai",
            featured: false
        },
        {
            name: "Mem AI",
            company: "Mem",
            description: "AI-powered note-taking and knowledge management.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/mem",
            url: "https://mem.ai",
            featured: false
        },
        {
            name: "Fireflies AI",
            company: "Fireflies",
            description: "AI meeting assistant that records and transcribes calls.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/firefliesai",
            url: "https://fireflies.ai",
            featured: false
        },
        {
            name: "Tome",
            company: "Tome",
            description: "AI-powered storytelling and presentation tool.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/tome",
            url: "https://tome.app",
            featured: false
        },
        {
            name: "Gamma AI",
            company: "Gamma",
            description: "AI presentation and document creation platform.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/gamma",
            url: "https://gamma.app",
            featured: false
        },
        {
            name: "Beautiful AI",
            company: "Beautiful",
            description: "AI presentation tool that creates stunning slides.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/beautifulai",
            url: "https://beautiful.ai",
            featured: false
        },
        {
            name: "Decktopus AI",
            company: "Decktopus",
            description: "AI-powered presentation and deck creation.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/decktopus",
            url: "https://decktopus.com",
            featured: false
        },
        {
            name: "Motion AI",
            company: "Motion",
            description: "AI project management and scheduling assistant.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/motion",
            url: "https://usemotion.com",
            featured: false
        },
        {
            name: "Reclaim AI",
            company: "Reclaim",
            description: "AI scheduling and time management tool.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/reclaimai",
            url: "https://reclaim.ai",
            featured: false
        },
        {
            name: "Trello AI",
            company: "Atlassian",
            description: "AI-powered project management with automation.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/trello",
            url: "https://trello.com",
            featured: false
        },
        {
            name: "Zapier AI",
            company: "Zapier",
            description: "AI-powered automation and workflow builder.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/zapier",
            url: "https://zapier.com",
            featured: false
        },
        {
            name: "Airtable AI",
            company: "Airtable",
            description: "AI-powered database and project management platform.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/airtable",
            url: "https://airtable.com",
            featured: false
        },
        {
            name: "Monday AI",
            company: "Monday",
            description: "AI-powered work management and collaboration tool.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/monday",
            url: "https://monday.com",
            featured: false
        },
        {
            name: "Asana AI",
            company: "Asana",
            description: "AI project management and task tracking.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/asana",
            url: "https://asana.com",
            featured: false
        },
        {
            name: "ClickUp AI",
            company: "ClickUp",
            description: "AI-powered project management and productivity.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/clickup",
            url: "https://clickup.com",
            featured: false
        },
        {
            name: "Fathom AI",
            company: "Fathom",
            description: "AI meeting assistant that records and summarizes calls.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/fathom",
            url: "https://fathom.video",
            featured: false
        },

        // ============================================================
        // AUDIO & VOICE
        // ============================================================
        {
            name: "Descript",
            company: "Descript",
            description: "AI-powered audio and video editing with transcription.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/descript",
            url: "https://www.descript.com",
            featured: true
        },
        {
            name: "Murf AI",
            company: "Murf",
            description: "AI voice generation and text-to-speech with realistic voices.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/murfai",
            url: "https://murf.ai",
            featured: false
        },
        {
            name: "ElevenLabs",
            company: "ElevenLabs",
            description: "AI voice synthesis with ultra-realistic voices.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/elevenlabs",
            url: "https://elevenlabs.io",
            featured: true
        },
        {
            name: "AssemblyAI",
            company: "AssemblyAI",
            description: "AI-powered speech-to-text and audio intelligence.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/assemblyai",
            url: "https://assemblyai.com",
            featured: false
        },
        {
            name: "Play.ht",
            company: "Play.ht",
            description: "AI voice generator for content creators.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/playht",
            url: "https://play.ht",
            featured: false
        },
        {
            name: "Lovo AI",
            company: "Lovo",
            description: "AI voiceover and text-to-speech platform.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/lovoai",
            url: "https://lovo.ai",
            featured: false
        },
        {
            name: "Resemble AI",
            company: "Resemble",
            description: "AI voice cloning and custom voice generation.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/resembleai",
            url: "https://resemble.ai",
            featured: false
        },
        {
            name: "WellSaid Labs",
            company: "WellSaid",
            description: "AI voiceover platform with realistic voices.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/wellsaid",
            url: "https://wellsaidlabs.com",
            featured: false
        },
        {
            name: "Speechify",
            company: "Speechify",
            description: "AI text-to-speech and voiceover tool.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/speechify",
            url: "https://speechify.com",
            featured: false
        },
        {
            name: "Voicemaker AI",
            company: "Voicemaker",
            description: "AI text-to-speech and voice generation tool.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/voicemaker",
            url: "https://voicemaker.in",
            featured: false
        }
    ];

    // ============================================================
    // DOM REFERENCES
    // ============================================================

    const container = document.getElementById("toolsContainer");
    const featuredContainer = document.getElementById("featuredContainer");
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearch");
    const categoryChips = document.querySelectorAll(".category-chip");
    const resultCount = document.getElementById("resultCount");

    // ============================================================
    // CATEGORY COLOR MAP
    // ============================================================

    const categoryColorMap = {
        'Chat': 'chat',
        'Coding': 'coding',
        'Image': 'image',
        'Video': 'video',
        'Design': 'design',
        'Writing': 'writing',
        'Productivity': 'productivity',
        'Audio': 'audio'
    };

    // ============================================================
    // STATE
    // ============================================================

    let currentCategory = "all";
    let currentSearch = "";

    // ============================================================
    // RENDER FEATURED TOOLS
    // ============================================================

    function renderFeatured() {
        const featuredTools = tools.filter(t => t.featured === true).slice(0, 10);
        
        featuredContainer.innerHTML = featuredTools.map(tool => {
            const colorClass = categoryColorMap[tool.category] || 'chat';
            return `
                <div class="featured-card category-color-${colorClass}">
                    <span class="featured-badge"><i class="fa-solid fa-star"></i> Featured</span>
                    <div class="logo-box">
                        <img src="${tool.logo}" alt="${tool.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                        <i class="fa-solid fa-robot fallback-icon" style="display:none;"></i>
                    </div>
                    <h3>${tool.name}</h3>
                    <div class="company">${tool.company}</div>
                    <p class="desc">${tool.description}</p>
                    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="open-btn">
                        Try Now <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            `;
        }).join('');
    }

    // ============================================================
    // RENDER TOOLS
    // ============================================================

    function renderTools() {
        const filtered = tools.filter(tool => {
            const matchesCategory = currentCategory === "all" || tool.category.toLowerCase() === currentCategory;
            const searchLower = currentSearch.toLowerCase();
            const matchesSearch = currentSearch === "" ||
                tool.name.toLowerCase().includes(searchLower) ||
                tool.company.toLowerCase().includes(searchLower) ||
                tool.description.toLowerCase().includes(searchLower) ||
                tool.category.toLowerCase().includes(searchLower);
            return matchesCategory && matchesSearch;
        });

        // Update result count
        if (resultCount) {
            resultCount.textContent = filtered.length === tools.length 
                ? `Showing all ${tools.length} tools` 
                : `Showing ${filtered.length} of ${tools.length} tools`;
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fa-regular fa-face-frown"></i>
                    <h3>No tools found</h3>
                    <p>Try adjusting your search or category filter</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(tool => {
            const colorClass = categoryColorMap[tool.category] || 'chat';
            return `
                <div class="tool-card category-color-${colorClass}">
                    <div class="logo-box">
                        <img src="${tool.logo}" alt="${tool.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                        <i class="fa-solid fa-robot fallback-icon" style="display:none;"></i>
                    </div>
                    <span class="category-tag ${colorClass}">${tool.category}</span>
                    <h3>${tool.name}</h3>
                    <div class="company">${tool.company}</div>
                    <p class="desc">${tool.description}</p>
                    <div class="card-footer">
                        <span class="badge">${tool.price}</span>
                        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="open-btn">
                            Open <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ============================================================
    // SEARCH FUNCTIONALITY
    // ============================================================

    searchInput.addEventListener("input", function() {
        currentSearch = this.value.trim();
        clearBtn.classList.toggle('visible', this.value.length > 0);
        renderTools();
    });

    clearBtn.addEventListener("click", function() {
        searchInput.value = "";
        currentSearch = "";
        clearBtn.classList.remove('visible');
        renderTools();
        searchInput.focus();
    });

    // ============================================================
    // CATEGORY FILTERING
    // ============================================================

    categoryChips.forEach(chip => {
        chip.addEventListener("click", function() {
            categoryChips.forEach(c => c.classList.remove("active"));
            this.classList.add("active");
            currentCategory = this.dataset.category;
            renderTools();
        });
    });

    // ============================================================
    // FOOTER YEAR
    // ============================================================

    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ============================================================
    // KEYBOARD SHORTCUT: Ctrl+K / Cmd+K for Search
    // ============================================================

    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
        if (e.key === 'Escape') {
            searchInput.blur();
            if (searchInput.value) {
                searchInput.value = "";
                currentSearch = "";
                clearBtn.classList.remove('visible');
                renderTools();
            }
        }
    });

    // ============================================================
    // INITIAL RENDER
    // ============================================================

    renderFeatured();
    renderTools();

})();