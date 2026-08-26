export interface Project {
    id: number;
    title: string;
    category: string;
    technologies: string;
    image: string;
    description: string;
    link: string;
    youtubeUrl?: string;
    tags?: string[];
}

export const config = {
    developer: {
        name: "Likhith",
        fullName: "LIKHITH SAI !",
        title: "Video Editor & Motion Designer",
        description: "Video Editor & Motion Graphics Designer crafting high-impact visual stories, cinematic edits, and dynamic content. Passionate about color grading, sound design, and seamless post-production."
    },
    social: {
        github: "LM Studios",
        email: "lmstudios.media01@gmail.com",
        location: "India"
    },
    about: {
        title: "About Me",
        description: "Self-taught Video Editor & Motion Graphics Designer based in India crafting high-impact visual stories, cinematic edits, and dynamic motion graphics. Specialized in color grading, sound design, and seamless post-production with a passion for creative storytelling."
    },
    experiences: [
    {
        position: "Mastering Advanced Post-Production",
        company: "Self-Development",
        period: "2025 - Present",
        location: "India",
        description: "Continuously mastering advanced visual effects, 3D motion design, and high-end color grading techniques to elevate storytelling.",
        responsibilities: [
            "Researching cinema-grade color science and visual effects techniques",
            "Experimenting with 3D compositing, CGI integration, and camera tracking",
            "Analyzing high-performing short-form and long-form video trends",
            "Upskilling in advanced post-production tools and plugins"
        ],
        technologies: ["3D Compositing", "Color Science", "Visual Effects", "Motion Design"]
    },
    {
        position: "Senior Video Editor & Motion Designer",
        company: "Freelance & Clients",
        period: "2025",
        location: "India",
        description: "Crafting high-impact video content, cinematic promotional edits, and dynamic motion graphics for digital creators, brands, and agencies.",
        responsibilities: [
            "Editing engaging YouTube content, commercials, and high-retention short-form videos",
            "Designing custom motion graphics, kinetic typography, and visual transitions",
            "Performing professional audio cleanup, sound design, and audio mixing",
            "Managing full post-production pipelines from raw footage to final render"
        ],
        technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Motion Graphics"]
    },
    {
        position: "Video Editor & Colorist",
        company: "Freelance & Projects",
        period: "2024",
        location: "India",
        description: "Focused on narrative pacing, color grading, and creative storytelling to transform raw camera footage into polished cinematic visuals.",
        responsibilities: [
            "Executing primary and secondary color correction and cinematic grading",
            "Applying multi-camera editing, pacing adjustments, and seamless transitions",
            "Sourcing and integrating sound effects, background music, and foley work",
            "Optimizing video exports for web, broadcast, and social media platforms"
        ],
        technologies: ["DaVinci Resolve", "Premiere Pro", "Color Grading", "Sound Design", "LUTs"]
    },
    {
        position: "Content Creator & Editor",
        company: "Self-Taught & Projects",
        period: "2023",
        location: "India",
        description: "Dived deep into non-linear video editing, building foundational skills in storytelling, pacing, and visual assembly.",
        responsibilities: [
            "Learning video editing fundamentals, timeline organization, and cut styles",
            "Editing promo clips, gaming videos, and social media reels",
            "Exploring keyframing, speed ramping, and basic text animations",
            "Understanding video codecs, frame rates, and render settings"
        ],
        technologies: ["Video Editing", "Pacing", "Speed Ramping", "CapCut", "Premiere Pro"]
    },
    {
        position: "Graphic Designer & Visual Artist",
        company: "Freelance",
        period: "2022",
        location: "India",
        description: "Started my creative journey in graphic design, mastering composition, typography, and color theory before transitioning into video editing.",
        responsibilities: [
            "Designing YouTube thumbnails, channel banners, and brand assets",
            "Creating custom graphics, logos, and promotional posters",
            "Collaborating with creators to establish cohesive visual brand identities",
            "Mastering color balance, layout composition, and visual aesthetics"
        ],
        technologies: ["Photoshop", "Illustrator", "Thumbnail Design", "Typography", "Visual Design"]
    },
    {
        position: "Digital Foundations & Media Basics",
        company: "Begin Learning",
        period: "2021",
        location: "India",
        description: "Began my journey into the digital space by mastering computer operations, media management, and essential productivity tools.",
        responsibilities: [
            "Learning digital media file management and folder structuring",
            "Creating presentations, storyboards, and digital documentation",
            "Understanding basic computer hardware and performance optimization",
            "Building foundational digital and creative skills"
        ],
        technologies: ["Media Management", "File Organization", "MS Office", "Computer Basics"]
    }
],
    projects: [
        {
            id: 1,
            title: "Maari 02",
            category: "TyphoGraphy",
            technologies: "After Effects, PNGs, Instagram ",
            image: "/images/Maari 02.png",
            description: "India's Film Maari Song. For AN Women Trnasition Edit. ",
            link: "https://www.instagram.com/reel/DcfAyXjt_VW/?utm_source=ig_web_button_share_sheet&igsi=MzRlODBiNWFlZA=="
        },
        {
            id: 2,
            title: "Ramp Edit",
            category: "Speed Ramp",
            technologies: "After Effects, Key Frame, PNGS, Audio ",
            image: "/images/Ramp.png",
            description: "Beat Scence Speed Ramp Desire TO Audio ",
            link: "https://www.instagram.com/reel/DcfBOrwxPFJ/?utm_source=ig_web_copy_link"
        },
        {
            id: 4,
            title: "Hoooo Hooo",
            category: "TyphoGraphy",
            technologies: "After Effects, Key Frame, PNGS, Audio, Instgram",
            image: "/images/hoo.png",
            description: "This Video For Practice Purpose",
            link: "https://www.instagram.com/reel/DcfCvXfh2wx/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
        },
        {
            id: 5,
            title: "Clutch !vs4",
            category: "Free Fire | Gaming",
            technologies: "After Effects, Brazilian Phonk, PNGS, Audio, OBS",
            image: "/images/Clutch.png",
            description: "A Gaming Clip . Raw Footage To A Stunning Reel. Brazilian Phonk.",
            link: "https://www.instagram.com/reel/DcfDnFNRzhS/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
        },
        {
            id: 6,
            title: "Emotion Free Fire Reel ",
            category: "Gaminn | Free Fire",
            technologies: "After Effects, Brazilian Phonk, PNGS, Audio, OBS",
            image: "/images/Emotional.png",
            description: "A Reel Contain Attitde And Emotion And Brother Sentiment Which IS in Stunning Game Lobby Ans Visuals",
            link: "https://www.instagram.com/reel/DcfEGNKuB36/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
        },
        {
            id: 7,
            title: "Free Fire Fun Reel",
            category: "Gaming | Free Fire",
            technologies: "After Effects, Brazilian Phonk, PNGS, Audio, OBS",
            image: "/images/FunFF.png",
            description: "A Free Fire Reel In Funy Wise With Sound Effects And Effects",
            link: "https://www.instagram.com/reel/DcfEtTIO6uz/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
        },
        {
            id: 8,
            title: "Wedding Invitation ",
            category: "Motion Graphics ",
            technologies: "After Effects, Background Music, PNGS, Audio, 3D, 3D Elements. ",
            image: "/images/Invitations.png",
            description: "Profitional And Premium Wedding Invitation. Cenimatic 3D Invitations. ",
            link: "https://www.instagram.com/reel/DcfFYxltjTZ/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
        }
    ] as Project[],
    contact: {
        email: "lmstudios.media01@gmail.com",
        github: "https://github.com/LMStudios-stack",
        linkedin: "https://linkedin.com/in/",
        twitter: "https://x.com/ROYAL_EMULATORS",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/sailikhith80/"
    },
    skills: {
        develop: {
            title: "VIDEO EDITOR",
            description: "Crafting cinematic edits & motion graphics",
            details: "Specializing in high-retention video editing, cinematic color grading, dynamic motion graphics, and immersive sound design using industry-standard tools like Premiere Pro, After Effects, and DaVinci Resolve.",
            tools: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Sound Design", "Motion Graphics", "VFX", "Kinetic Typography", "Visual Storytelling"]
        },
        design: {
            title: "LM Studios",
            description: "Cinematic color grading & After Effects compositing",
            details: "Focusing on advanced color grading, LUT creation, speed ramp effects, keyframing, and custom visual effects inside After Effects to turn raw footage into cinematic art.",
            tools: ["After Effects Color Grading", "Color Correction", "Lumetri Color", "Speed Ramping", "Motion Blur", "Keyframing & Masking", "Visual Effects (VFX)", "Photoshop", "Thumbnail Design"]
        }
    }
};


