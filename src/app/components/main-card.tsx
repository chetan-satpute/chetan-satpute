import GithubButton from './github-button';
import LinkedinButton from './linkedin-button';
import MailButton from './mail-button';
import ResumeButton from './resume-button';

function MainCard() {
  return (
    <div className="flex min-h-full flex-col-reverse overflow-hidden rounded-none bg-white shadow-xl md:min-h-auto md:flex-row md:rounded-xl">
      <div className="flex flex-1 flex-col gap-8 p-10">
        <div className="">
          <h1 className="mb-2 text-4xl font-semibold">Chetan Satpute</h1>
          <h2 className="text-2xl font-thin">Software Engineer</h2>
        </div>
        <div className="">
          <p className="mb-2 font-normal">
            A software engineer with expertise in web and mobile application
            development, I enjoy sharing knowledge and crafting projects like
            Code Canvas to enhance learning experiences.
          </p>
          <p className="font-normal">React | React Native | Nodejs | GCP</p>
        </div>

        <div className="flex flex-col gap-4">
          <LinkedinButton />
          <GithubButton />
          <MailButton />
        </div>

        <div>
          <ResumeButton />
        </div>
      </div>
      <div className="aspect-square flex-1 shrink-0 bg-[url(/blue-dragon.jpeg)] bg-cover bg-center"></div>
    </div>
  );
}

export default MainCard;
