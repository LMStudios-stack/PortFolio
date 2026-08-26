import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// Video Editor Tech & Tool Stack
// Inverted pyramid layout: 12 -> 10 -> 8 -> 6 -> 4 -> 2
const techStack: TechItem[][] = [
  // Row 1 - Core Video Editing & Motion Graphics (12 items)
  [
    { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg", url: "https://www.adobe.com/products/premiere.html" },
    { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", url: "https://www.adobe.com/products/aftereffects.html" },
    { name: "DaVinci Resolve", icon: "https://img.icons8.com/color/48/davinci-resolve.png", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", url: "https://www.adobe.com/products/photoshop.html" },
    { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg", url: "https://www.adobe.com/products/illustrator.html" },
    { name: "Audition", icon: "https://img.icons8.com/color/48/adobe-audition.png", url: "https://www.adobe.com/products/audition.html" },
    { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", url: "https://www.blender.org" },
    { name: "Cinema 4D", icon: "https://img.icons8.com/color/48/cinema-4d.png", url: "https://www.maxon.net/en/cinema-4d" },
    { name: "Final Cut Pro", icon: "https://img.icons8.com/color/48/final-cut-pro-x.png", url: "https://www.apple.com/final-cut-pro/" },
    { name: "Media Encoder", icon: "https://img.icons8.com/color/48/adobe-media-encoder.png", url: "https://www.adobe.com/products/media-encoder.html" },
    { name: "Lightroom", icon: "https://img.icons8.com/color/48/adobe-lightroom.png", url: "https://www.adobe.com/products/photoshop-lightroom.html" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://www.figma.com" },
  ],
  // Row 2 - FX, Plugins & Color Tools (10 items)
  [
    { name: "Boris FX", icon: "https://img.icons8.com/color/48/video-editing.png", url: "https://borisfx.com" },
    { name: "Red Giant", icon: "https://img.icons8.com/color/48/visual-effects.png", url: "https://www.maxon.net/en/red-giant" },
    { name: "Mister Horse", icon: "https://img.icons8.com/color/48/motion-graphics.png", url: "https://misterhorse.com" },
    { name: "Motion Array", icon: "https://img.icons8.com/color/48/video-trimmer.png", url: "https://motionarray.com" },
    { name: "Envato Elements", icon: "https://img.icons8.com/color/48/layers.png", url: "https://elements.envato.com" },
    { name: "Topaz Video AI", icon: "https://img.icons8.com/color/48/artificial-intelligence.png", url: "https://www.topazlabs.com/topaz-video-ai" },
    { name: "Runway ML", icon: "https://img.icons8.com/color/48/brain.png", url: "https://runwayml.com" },
    { name: "Unreal Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg", url: "https://www.unrealengine.com" },
    { name: "CapCut", icon: "https://img.icons8.com/color/48/video.png", url: "https://www.capcut.com" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", url: "https://www.canva.com" },
  ],
  // Row 3 - Audio Processing & Sound Design (8 items)
  [
    { name: "FL Studio", icon: "https://img.icons8.com/color/48/fl-studio.png", url: "https://www.image-line.com" },
    { name: "iZotope RX", icon: "https://img.icons8.com/color/48/audio-wave.png", url: "https://www.izotope.com" },
    { name: "Audacity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/audacity/audacity-original.svg", url: "https://www.audacityteam.org" },
    { name: "Epidemic Sound", icon: "https://img.icons8.com/color/48/music.png", url: "https://www.epidemicsound.com" },
    { name: "Artlist", icon: "https://img.icons8.com/color/48/sound-effects.png", url: "https://artlist.io" },
    { name: "ElevenLabs", icon: "https://img.icons8.com/color/48/voice-search.png", url: "https://elevenlabs.io" },
    { name: "OBS Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/obs/obs-original.svg", url: "https://obsproject.com" },
    { name: "Handbrake", icon: "https://img.icons8.com/color/48/convert.png", url: "https://handbrake.fr" },
  ],
  // Row 4 - System Tweaking, Storage & Media Management (6 items)
  [
    { name: "Frame.io", icon: "https://img.icons8.com/color/48/cloud-folder.png", url: "https://frame.io" },
    { name: "Google Drive", icon: "https://img.icons8.com/color/48/google-drive--v1.png", url: "https://drive.google.com" },
    { name: "MS Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg", url: "https://microsoft.com/windows" },
    { name: "NVIDIA CUDA", icon: "https://img.icons8.com/color/48/nvidia.png", url: "https://www.nvidia.com" },
    { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg", url: "https://notion.so" },
    { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", url: "https://trello.com" },
  ],
  // Row 5 - AI Video & Social Media Tools (4 items)
  [
    { name: "Midjourney", icon: "https://img.icons8.com/color/48/image.png", url: "https://midjourney.com" },
    { name: "ChatGPT AI", icon: "https://img.icons8.com/color/48/chatgpt.png", url: "https://chatgpt.com" },
    { name: "YouTube", icon: "https://img.icons8.com/color/48/youtube-play.png", url: "https://youtube.com" },
    { name: "Instagram", icon: "https://img.icons8.com/color/48/instagram-new.png", url: "https://instagram.com" },
  ],
  // Row 6 - Primary Creative Suite (2 items - Tip of Pyramid)
  [
    { name: "Adobe Creative Cloud", icon: "https://img.icons8.com/color/48/adobe-creative-cloud.png", url: "https://www.adobe.com/creativecloud.html" },
    { name: "DaVinci Studio", icon: "https://img.icons8.com/color/48/video-camera.png", url: "https://www.blackmagicdesign.com" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Editing & VFX Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;