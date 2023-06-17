import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { forwardRef } from "react";

export const Footer =  forwardRef<HTMLElement>((_props,ref) => {
    return (
        <footer ref={ref} className="m-0 p-0 bg-richBlackFogra text-ghostWhite">
            
            <div className="flex items-center justify-center p-8">
                <img id="line" src="/line.svg" alt="line" />
            </div>
            <div className="flex items-center justify-center pb-4 pt-2 text-xl"> 
                <a href="mailto:lucasl22l@proton.me" className="transition-color hover:text-orangeRedCrayole duration-200">
                    <span className="link link-underline link-underline-black">
                        lucasl22l@proton.me
                    </span>
                </a>
            </div>
            <div className="flex items-center justify-center">
                <a href="https://www.linkedin.com/in/l22l/" target="_blank" rel="noreferrer" className="px-2.5">
                   <LinkedinLogo size={36} color="#F7F7FF" weight="fill"/>
                </a>
                <a href="https://github.com/luycaslima" target="_blank" rel="noreferrer" className="px-2.5">
                    <GithubLogo size={36} color="#F7F7FF" weight="fill"/>
                </a>
            </div>
        
            <div className="text-center p-6 text-sm">
                <span>2023. Developed, Pixel art by Lucas Lima.</span>
            </div>
        </footer>
    )
})