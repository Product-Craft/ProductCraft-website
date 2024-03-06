import { Label } from '@/components/Label';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <div className="relative mb-16 md:mb-32">
      <div className="px-container mx-auto flex max-w-xl flex-col-reverse items-center gap-8 py-8 md:gap-16 lg:max-w-container lg:flex-row">
        <div>
          <h3 className="font-accent text-3xl font-medium md:text-4xl">
            Hey, I am Binod
          </h3>
          <p className="my-5 text-xl md:text-2xl">
            A solution engineer - or to put it simply: A technical architect, 
            crafting and implementing tailored solutions to resolve complex business challenges..
          </p>
          <p className="my-5 opacity-90">
          My passion lies in the fusion of product innovation and user engagement. 
          I enjoy conversing with users, brainstorming innovative concepts, and crafting solutions. 
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Label color="gray">5+ years of building apps</Label>
            <Label color="gray">PM & Pre Sales Engineer at webpoint.io</Label>
          </div>
        </div>
        <div className="max-w-[580px] flex-shrink-0 rounded-md">
          <Image
            src="/images/portraits/binod-aryal-crosshand-smile.jpg"
            alt="Binod Aryal"
            width={480 * 2}
            height={324 * 2}
            sizes="(max-width: 768px) 100vw, 760px"
            className="h-full w-full rounded-md object-cover"
          />
          <span className="mt-2 hidden text-center text-xs opacity-50 md:block">
          From ideation to launch and sustainment, I cover every aspect of the product lifecycle, focusing on efficiency and effectiveness.
          </span>
        </div>
      </div>
    </div>
  );
};
