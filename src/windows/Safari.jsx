import { WindowControls } from "#components/index";
import { blogPosts } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react";

const Safari = () => {

  const { windows } = useWindowStore();
  const isMaximized = windows.safari?.isMaximized;

  return (
    <>
    <div id="window-header">
        <WindowControls target="safari"/>

        <PanelLeft className="ml-10 icon"/>

        <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className="icon" />
            <ChevronRight className="icon" />
        </div>
        
        <div className="flex-1 flex-center gap-3">
            <ShieldHalf className="icon" />

            <div className="search">
                <Search className="icon" />
                
                <input type="text" placeholder="Search or enter website name" className="flex-1" />
            </div>
        </div>

        <div className="flex items-center gap-5">
            <Share className="icon" />
            <Plus className="icon" />
            <Copy className="icon" />
        </div>
    </div>

    <div className={`blog ${isMaximized ? "mt-10" : ""}`}>
        <h2>My Developer Blog</h2>

        <div className={` ${isMaximized ? "space-y-16" : "space-y-8"}`}>
            {blogPosts.map(({ id, image, title, date, link }) => (
                <div key={id} className="blog-post">
                    <div className="col-span-2">
                       <img src={image} alt={title} /> 
                    </div>
                    <div className="content">
                        <p>{date}</p>
                        <h3>{title}</h3>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Check out the full post <MoveRight className="icon-hover" />
                        </a>
                    </div>
                </div>
            ))}
        </div>

    </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;