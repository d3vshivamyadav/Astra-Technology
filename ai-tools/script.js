// ============================================================
// ASTRA AI TOOLS - COMPLETE SCRIPT WITH SCROLL REVEAL
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // TOOLS DATABASE - 150+ FREE AI TOOLS
    // ============================================================

    const tools = [
        // ============================================================
        // CHAT & CONVERSATION (20+ Tools)
        // ============================================================
        {
            name: "ChatGPT",
            company: "OpenAI",
            description: "AI assistant for writing, coding, research and creative tasks.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/openai",
            url: "https://chatgpt.com"
        },
        {
            name: "Google Gemini",
            company: "Google",
            description: "Google's advanced AI assistant for productivity and learning.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/googlegemini",
            url: "https://gemini.google.com"
        },
        {
            name: "Claude",
            company: "Anthropic",
            description: "Helpful AI assistant for writing, analysis and complex tasks.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/anthropic",
            url: "https://claude.ai"
        },
        {
            name: "DeepSeek",
            company: "DeepSeek",
            description: "Powerful AI model for coding, reasoning and problem-solving.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/deepseek",
            url: "https://chat.deepseek.com"
        },
        {
            name: "Mistral AI",
            company: "Mistral",
            description: "Open-source AI models with strong reasoning capabilities.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/mistralai",
            url: "https://mistral.ai"
        },
        {
            name: "Perplexity AI",
            company: "Perplexity",
            description: "AI-powered search engine with cited, verifiable answers.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/perplexity",
            url: "https://www.perplexity.ai"
        },
        {
            name: "YouChat",
            company: "You.com",
            description: "AI search assistant with real-time information and citations.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/you",
            url: "https://you.com"
        },
        {
            name: "Character AI",
            company: "Character.AI",
            description: "Chat with AI-powered characters for entertainment and learning.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/characterai",
            url: "https://character.ai"
        },
        {
            name: "Poe",
            company: "Quora",
            description: "AI chat platform with multiple models including ChatGPT and Claude.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/poe",
            url: "https://poe.com"
        },
        {
            name: "HuggingChat",
            company: "Hugging Face",
            description: "Open-source AI chat powered by Hugging Face models.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/huggingface",
            url: "https://huggingface.co/chat"
        },
        {
            name: "Bard AI",
            company: "Google",
            description: "Google's conversational AI for creative collaboration.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/googlebard",
            url: "https://bard.google.com"
        },
        {
            name: "Pi AI",
            company: "Inflection AI",
            description: "Emotionally intelligent AI assistant for conversations.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/inflectionai",
            url: "https://pi.ai"
        },
        {
            name: "Cohere AI",
            company: "Cohere",
            description: "AI platform for natural language understanding and generation.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/cohere",
            url: "https://cohere.ai"
        },
        {
            name: "AI21 Labs",
            company: "AI21",
            description: "AI platform for text generation and analysis.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/ai21",
            url: "https://ai21.com"
        },
        {
            name: "Kimi AI",
            company: "Moonshot AI",
            description: "AI assistant for reading, writing and research tasks.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/moonshot",
            url: "https://kimi.moonshot.cn"
        },
        {
            name: "Qwen AI",
            company: "Alibaba",
            description: "AI assistant for chat, coding and creative writing.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/alibaba",
            url: "https://qwen.alibaba.com"
        },
        {
            name: "Doubao AI",
            company: "ByteDance",
            description: "AI assistant for chat, learning and creative tasks.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/bytedance",
            url: "https://doubao.com"
        },
        {
            name: "MaxAI",
            company: "MaxAI",
            description: "AI assistant for chat, writing and productivity tasks.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/maxai",
            url: "https://maxai.com"
        },
        {
            name: "Inbox AI",
            company: "Inbox AI",
            description: "AI-powered email assistant for smart management.",
            category: "Chat",
            price: "Free",
            logo: "https://cdn.simpleicons.org/inboxai",
            url: "https://inboxai.com"
        },

        // ============================================================
        // CODING & DEVELOPMENT (15 Tools)
        // ============================================================
        {
            name: "GitHub Copilot",
            company: "GitHub",
            description: "AI coding assistant that helps you write code faster.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/github",
            url: "https://github.com/features/copilot"
        },
        {
            name: "Tabnine",
            company: "Tabnine",
            description: "AI code completion tool supporting all programming languages.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/tabnine",
            url: "https://www.tabnine.com"
        },
        {
            name: "Codeium",
            company: "Codeium",
            description: "Free AI-powered code completion and generation.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/codeium",
            url: "https://codeium.com"
        },
        {
            name: "Replit AI",
            company: "Replit",
            description: "AI-powered coding environment with code assistance.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/replit",
            url: "https://replit.com"
        },
        {
            name: "Cody by Sourcegraph",
            company: "Sourcegraph",
            description: "AI code assistant for code understanding and generation.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/sourcegraph",
            url: "https://sourcegraph.com/cody"
        },
        {
            name: "Amazon CodeWhisperer",
            company: "Amazon",
            description: "AI coding companion for building applications faster.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/amazon",
            url: "https://aws.amazon.com/codewhisperer"
        },
        {
            name: "Blackbox AI",
            company: "Blackbox",
            description: "AI code assistant with real-time code suggestions.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/blackbox",
            url: "https://blackbox.ai"
        },
        {
            name: "Mutable AI",
            company: "Mutable",
            description: "AI-powered development environment for fast coding.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/mutableai",
            url: "https://mutable.ai"
        },
        {
            name: "CodiumAI",
            company: "Codium",
            description: "AI code analysis and testing suggestions.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/codium",
            url: "https://codium.ai"
        },
        {
            name: "DeepCode",
            company: "DeepCode",
            description: "AI code review and security analysis tool.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/deepcode",
            url: "https://deepcode.ai"
        },
        {
            name: "CodeGeeX",
            company: "CodeGeeX",
            description: "AI code generation and completion for developers.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/codegeex",
            url: "https://codegeex.cn"
        },
        {
            name: "Bloop AI",
            company: "Bloop",
            description: "AI code search and understanding for large codebases.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/bloop",
            url: "https://bloop.ai"
        },
        {
            name: "AskCodi",
            company: "AskCodi",
            description: "AI coding assistant with natural language interface.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/askcodi",
            url: "https://askcodi.com"
        },
        {
            name: "Pieces AI",
            company: "Pieces",
            description: "AI coding assistant for developers and teams.",
            category: "Coding",
            price: "Free",
            logo: "https://cdn.simpleicons.org/pieces",
            url: "https://pieces.app"
        },

        // ============================================================
        // IMAGE GENERATION (12 Tools)
        // ============================================================
        {
            name: "Stable Diffusion",
            company: "Stability AI",
            description: "Open-source text-to-image generation model.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/stabilityai",
            url: "https://stability.ai"
        },
        {
            name: "Leonardo AI",
            company: "Leonardo",
            description: "AI image and video generation platform for creators.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/leonardoai",
            url: "https://leonardo.ai"
        },
        {
            name: "Playground AI",
            company: "Playground",
            description: "Easy-to-use AI image generation and editing tool.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/playgroundai",
            url: "https://playgroundai.com"
        },
        {
            name: "DreamStudio",
            company: "Stability AI",
            description: "Stable Diffusion image generation interface.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/dreamstudio",
            url: "https://dreamstudio.ai"
        },
        {
            name: "Artbreeder",
            company: "Artbreeder",
            description: "AI image generation and manipulation platform.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/artbreeder",
            url: "https://artbreeder.com"
        },
        {
            name: "Craiyon",
            company: "Craiyon",
            description: "Free text-to-image generation with multiple variations.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/craiyon",
            url: "https://craiyon.com"
        },
        {
            name: "Picsart AI",
            company: "Picsart",
            description: "AI-powered image editing and creative tools.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/picsart",
            url: "https://picsart.com"
        },
        {
            name: "Clipdrop AI",
            company: "Clipdrop",
            description: "AI image editing and enhancement tools.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/clipdrop",
            url: "https://clipdrop.co"
        },
        {
            name: "DeepAI",
            company: "DeepAI",
            description: "AI image generation and editing platform.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/deepai",
            url: "https://deepai.org"
        },
        {
            name: "NightCafe",
            company: "NightCafe",
            description: "AI art generator with multiple styles and models.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/nightcafe",
            url: "https://nightcafe.studio"
        },
        {
            name: "Lensa AI",
            company: "Lensa",
            description: "AI photo editing and avatar generation tool.",
            category: "Image",
            price: "Free",
            logo: "https://cdn.simpleicons.org/lensa",
            url: "https://lensa.ai"
        },

        // ============================================================
        // VIDEO & ANIMATION (8 Tools)
        // ============================================================
        {
            name: "Runway ML",
            company: "Runway",
            description: "AI-powered video editing and generation tools.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/runway",
            url: "https://runwayml.com"
        },
        {
            name: "Pika Labs",
            company: "Pika",
            description: "Text-to-video generation with creative control.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/pika",
            url: "https://pika.art"
        },
        {
            name: "HeyGen",
            company: "HeyGen",
            description: "AI video generation with animated avatars.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/heygen",
            url: "https://heygen.com"
        },
        {
            name: "Clipchamp AI",
            company: "Microsoft",
            description: "AI-powered video editing and creation tool.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/microsoft",
            url: "https://clipchamp.com"
        },
        {
            name: "InVideo AI",
            company: "InVideo",
            description: "AI video creation and editing platform.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/invideo",
            url: "https://invideo.io"
        },
        {
            name: "Lumen5",
            company: "Lumen5",
            description: "AI video creation from blog posts and articles.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/lumen5",
            url: "https://lumen5.com"
        },
        {
            name: "Fliki AI",
            company: "Fliki",
            description: "AI video creation with text-to-video capability.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/fliki",
            url: "https://fliki.ai"
        },
        {
            name: "Synthesia",
            company: "Synthesia",
            description: "AI video creation with realistic avatars and voiceovers.",
            category: "Video",
            price: "Free",
            logo: "https://cdn.simpleicons.org/synthesia",
            url: "https://www.synthesia.io"
        },

        // ============================================================
        // DESIGN (10 Tools)
        // ============================================================
        {
            name: "Canva AI",
            company: "Canva",
            description: "Design creation with AI-powered tools and templates.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/canva",
            url: "https://www.canva.com"
        },
        {
            name: "Figma AI",
            company: "Figma",
            description: "AI-powered design tool for UI/UX and prototyping.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/figma",
            url: "https://www.figma.com"
        },
        {
            name: "Adobe Firefly",
            company: "Adobe",
            description: "AI-powered creative tools for design and photography.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/adobe",
            url: "https://firefly.adobe.com"
        },
        {
            name: "Designs.ai",
            company: "Designs.ai",
            description: "AI design platform for logos, videos, and mockups.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/designsai",
            url: "https://designs.ai"
        },
        {
            name: "Looka",
            company: "Looka",
            description: "AI logo design and brand creation tool.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/looka",
            url: "https://looka.com"
        },
        {
            name: "Uizard",
            company: "Uizard",
            description: "AI-powered UI/UX design and prototyping.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/uizard",
            url: "https://uizard.io"
        },
        {
            name: "Hatchful AI",
            company: "Shopify",
            description: "AI logo generator for businesses and brands.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/shopify",
            url: "https://hatchful.shopify.com"
        },
        {
            name: "LogoAI",
            company: "LogoAI",
            description: "AI logo design and brand identity creation.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/logoai",
            url: "https://logoai.com"
        },
        {
            name: "Brandmark AI",
            company: "Brandmark",
            description: "AI logo and brand identity creation tool.",
            category: "Design",
            price: "Free",
            logo: "https://cdn.simpleicons.org/brandmark",
            url: "https://brandmark.io"
        },

        // ============================================================
        // WRITING & CONTENT (15 Tools)
        // ============================================================
        {
            name: "Grammarly",
            company: "Grammarly",
            description: "AI writing and grammar assistant for clear communication.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/grammarly",
            url: "https://www.grammarly.com"
        },
        {
            name: "Copy.ai",
            company: "Copy.ai",
            description: "AI copywriting tool for marketing and sales content.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/copyai",
            url: "https://www.copy.ai"
        },
        {
            name: "QuillBot",
            company: "QuillBot",
            description: "AI paraphrasing and writing improvement tool.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/quillbot",
            url: "https://quillbot.com"
        },
        {
            name: "Rytr",
            company: "Rytr",
            description: "AI writing assistant for blogs, emails, and social media.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/rytr",
            url: "https://rytr.me"
        },
        {
            name: "Writesonic",
            company: "Writesonic",
            description: "AI content generator for articles, ads, and product descriptions.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/writesonic",
            url: "https://writesonic.com"
        },
        {
            name: "AI Writer",
            company: "AI Writer",
            description: "AI-powered content creation and text generation.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/aiwriter",
            url: "https://ai-writer.com"
        },
        {
            name: "ShortlyAI",
            company: "ShortlyAI",
            description: "AI writing assistant for long-form content and articles.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/shortlyai",
            url: "https://shortlyai.com"
        },
        {
            name: "Wordtune",
            company: "Wordtune",
            description: "AI-powered rewriting and paraphrasing tool.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/wordtune",
            url: "https://wordtune.com"
        },
        {
            name: "Hemingway Editor",
            company: "Hemingway",
            description: "AI writing assistant that improves readability and clarity.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/hemingway",
            url: "https://hemingwayapp.com"
        },
        {
            name: "ProWritingAid",
            company: "ProWritingAid",
            description: "AI grammar and style checker for writers.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/prowritingaid",
            url: "https://prowritingaid.com"
        },
        {
            name: "SudoWrite",
            company: "SudoWrite",
            description: "AI writing assistant for fiction and creative writing.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/sudowrite",
            url: "https://sudowrite.com"
        },
        {
            name: "Lex",
            company: "Lex",
            description: "AI-powered writing tool for creative professionals.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/lex",
            url: "https://lex.page"
        },
        {
            name: "HyperWrite AI",
            company: "HyperWrite",
            description: "AI writing assistant for content creation and editing.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/hyperwrite",
            url: "https://hyperwriteai.com"
        },
        {
            name: "LongShot AI",
            company: "LongShot",
            description: "AI content generator for blogs and long-form content.",
            category: "Writing",
            price: "Free",
            logo: "https://cdn.simpleicons.org/longshot",
            url: "https://longshot.ai"
        },

        // ============================================================
        // PRODUCTIVITY (18 Tools)
        // ============================================================
        {
            name: "Notion AI",
            company: "Notion",
            description: "AI-powered workspace for notes, projects and collaboration.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/notion",
            url: "https://www.notion.so"
        },
        {
            name: "Otter AI",
            company: "Otter",
            description: "AI meeting transcription and note-taking assistant.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/otterai",
            url: "https://otter.ai"
        },
        {
            name: "Mem AI",
            company: "Mem",
            description: "AI-powered note-taking and knowledge management.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/mem",
            url: "https://mem.ai"
        },
        {
            name: "Fireflies AI",
            company: "Fireflies",
            description: "AI meeting assistant that records and transcribes calls.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/firefliesai",
            url: "https://fireflies.ai"
        },
        {
            name: "Tome",
            company: "Tome",
            description: "AI-powered storytelling and presentation tool.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/tome",
            url: "https://tome.app"
        },
        {
            name: "Gamma AI",
            company: "Gamma",
            description: "AI presentation and document creation platform.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/gamma",
            url: "https://gamma.app"
        },
        {
            name: "Beautiful AI",
            company: "Beautiful",
            description: "AI presentation tool that creates stunning slides.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/beautifulai",
            url: "https://beautiful.ai"
        },
        {
            name: "Decktopus AI",
            company: "Decktopus",
            description: "AI-powered presentation and deck creation.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/decktopus",
            url: "https://decktopus.com"
        },
        {
            name: "Motion AI",
            company: "Motion",
            description: "AI project management and scheduling assistant.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/motion",
            url: "https://usemotion.com"
        },
        {
            name: "Reclaim AI",
            company: "Reclaim",
            description: "AI scheduling and time management tool.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/reclaimai",
            url: "https://reclaim.ai"
        },
        {
            name: "Trello AI",
            company: "Atlassian",
            description: "AI-powered project management with automation.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/trello",
            url: "https://trello.com"
        },
        {
            name: "Zapier AI",
            company: "Zapier",
            description: "AI-powered automation and workflow builder.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/zapier",
            url: "https://zapier.com"
        },
        {
            name: "Airtable AI",
            company: "Airtable",
            description: "AI-powered database and project management platform.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/airtable",
            url: "https://airtable.com"
        },
        {
            name: "Monday AI",
            company: "Monday",
            description: "AI-powered work management and collaboration tool.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/monday",
            url: "https://monday.com"
        },
        {
            name: "Asana AI",
            company: "Asana",
            description: "AI project management and task tracking.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/asana",
            url: "https://asana.com"
        },
        {
            name: "ClickUp AI",
            company: "ClickUp",
            description: "AI-powered project management and productivity.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/clickup",
            url: "https://clickup.com"
        },
        {
            name: "Fathom AI",
            company: "Fathom",
            description: "AI meeting assistant that records and summarizes calls.",
            category: "Productivity",
            price: "Free",
            logo: "https://cdn.simpleicons.org/fathom",
            url: "https://fathom.video"
        },

        // ============================================================
        // AUDIO & VOICE (10 Tools)
        // ============================================================
        {
            name: "Descript",
            company: "Descript",
            description: "AI-powered audio and video editing with transcription.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/descript",
            url: "https://www.descript.com"
        },
        {
            name: "Murf AI",
            company: "Murf",
            description: "AI voice generation and text-to-speech with realistic voices.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/murfai",
            url: "https://murf.ai"
        },
        {
            name: "ElevenLabs",
            company: "ElevenLabs",
            description: "AI voice synthesis with ultra-realistic voices.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/elevenlabs",
            url: "https://elevenlabs.io"
        },
        {
            name: "AssemblyAI",
            company: "AssemblyAI",
            description: "AI-powered speech-to-text and audio intelligence.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/assemblyai",
            url: "https://assemblyai.com"
        },
        {
            name: "Play.ht",
            company: "Play.ht",
            description: "AI voice generator for content creators.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/playht",
            url: "https://play.ht"
        },
        {
            name: "Lovo AI",
            company: "Lovo",
            description: "AI voiceover and text-to-speech platform.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/lovoai",
            url: "https://lovo.ai"
        },
        {
            name: "Resemble AI",
            company: "Resemble",
            description: "AI voice cloning and custom voice generation.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/resembleai",
            url: "https://resemble.ai"
        },
        {
            name: "WellSaid Labs",
            company: "WellSaid",
            description: "AI voiceover platform with realistic voices.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/wellsaid",
            url: "https://wellsaidlabs.com"
        },
        {
            name: "Speechify",
            company: "Speechify",
            description: "AI text-to-speech and voiceover tool.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/speechify",
            url: "https://speechify.com"
        },
        {
            name: "Voicemaker AI",
            company: "Voicemaker",
            description: "AI text-to-speech and voice generation tool.",
            category: "Audio",
            price: "Free",
            logo: "https://cdn.simpleicons.org/voicemaker",
            url: "https://voicemaker.in"
        }
    ];

    // ============================================================
    // DOM REFERENCES
    // ============================================================

    const container = document.getElementById("toolsContainer");
    const searchInput = document.getElementById("searchInput");
    const categoryChips = document.querySelectorAll(".category-chip");

    // ============================================================
    // STATE
    // ============================================================

    let currentCategory = "all";
    let currentSearch = "";

    // ============================================================
    // SCROLL REVEAL - Intersection Observer
    // ============================================================

    function observeCards() {
        const cards = document.querySelectorAll('.card');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Add delay for staggered effect
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 80);
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            });
            
            cards.forEach(card => {
                observer.observe(card);
            });
        } else {
            // Fallback for older browsers
            cards.forEach(card => {
                card.classList.add('visible');
            });
        }
    }

    // ============================================================
    // RENDER FUNCTION
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

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-search"></i>
                    <h3>No tools found</h3>
                    <p>Try adjusting your search or category filter</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(tool => {
            return `
                <div class="card">
                    <div class="logo-box">
                        <img src="${tool.logo}" alt="${tool.name}" loading="lazy" onerror="this.classList.add('error')">
                        <i class="fa-solid fa-robot fallback-icon"></i>
                    </div>
                    <span class="card-category">${tool.category}</span>
                    <h3>${tool.name}</h3>
                    <div class="company">${tool.company}</div>
                    <p class="desc">${tool.description}</p>
                    <div class="card-footer">
                        <span class="badge free">${tool.price}</span>
                        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="open-btn">
                            Open <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join('');

        // Observe new cards for scroll reveal
        observeCards();
    }

    // ============================================================
    // SEARCH FUNCTIONALITY
    // ============================================================

    searchInput.addEventListener("input", function() {
        currentSearch = this.value.trim();
        renderTools();
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
    // INITIAL RENDER
    // ============================================================

    renderTools();

})();