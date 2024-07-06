import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return(
        <footer class="bg-white shadow mt-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm flex gap-2 text-gray-500 text-center dark:text-gray-400"> 
                    This webpage is built using a free to use JSON based configuration project on github
                    <a className="text-red-700 flex gap-2" href="https://github.com/gouravbhardwaj/jsonpages">
                        <div className="align-baseline"><FaGithub /> </div>
                        <div>jsonpages.</div>
                    </a>
                    
                </span>
                
            </div>
        </footer>

    )
}