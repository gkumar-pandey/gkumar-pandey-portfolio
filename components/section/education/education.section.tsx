import { Container } from "@/components";
import { SectionHeading } from "@/components/sectionheading/sectionheading";
import graduateIcon from "@/public/icons/graduate.png";
import Image from "next/image";

export const Education = () => {
  return (
    <Container>
      <section>
        <SectionHeading>
          <p>Education</p>
        </SectionHeading>
        <div className="flex flex-row gap-4 py-4 " >
          <Image
            className="w-10 h-10 rounded-full border border-slate-500 "
            src={graduateIcon}
            alt="graduate-icon"
          />
          <div>
            <h3 className=" text-xl font-semibold text-white " >Bihar Engineering University</h3>
            <h4 className=" font-medium text-base text-[var(--primary-gray)] " >2020-2024</h4>
            <p className="text-base font-medium text-[var(--primary-gray)] " >Electrical And Electronics Engineering</p>
          </div>
        </div>
        <div></div>
      </section>
    </Container>
  );
};