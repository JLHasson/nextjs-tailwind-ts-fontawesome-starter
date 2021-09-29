import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
        <h1 className="font-mono text-xl code">
          Welcome to <span className="text-purple-700">Nextjs</span>, <span className="text-indigo-700">TailwindCSS</span> and <span className="text-gray-700">TypeScript</span> and Font Awesome<span className="text-purple-500">
            <FontAwesomeIcon icon={faExclamation} />
          </span>
        </h1>
      </main>
    </div>
  )
}
