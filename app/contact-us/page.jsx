import { BreadCrumb } from "@/components/pages/BreadCrumb";
import { PrimaryButton } from "@/components/PrimaryButton";
export default function Career() {
  return (
    <div className="w-ful flex flex-col md:gap-12 gap-6 ">
      <main className="md:h-screen ">
        <div className="h-full  flex justify-center items-center w-full ">
          <BreadCrumb label={'Get in touch with Us'} page={'Contact Us'} />
        </div>
      </main>
      {/* section 2 */}
      <main className="bg-lightOrange">
          <div className="flex flex-col  gap-12 md:px-[80px] p-6 md:py-[64px]">
             <div className="w-full">
             <h2 className="md:text-[48px] font-medium text-[#151314] text-center">Join our team of compassionate caregivers and </h2>
              <h2 className="md:text-[48px] font-medium text-[#151314] text-center">embark on a fulfilling career.</h2>
              <p className="md:text-[20px] leading-[32px] text-neutral text-center">Make a difference in the lives of others while building a rewarding future with us.</p>
             </div>
              <div className="flex bg-[#FFE9DA] py-12 justify-center items-center rounded-lg  ">
                  <PrimaryButton label={'Contact-Us'} link={'https://docs.google.com/forms/d/e/1FAIpQLSdd3cCZ1p4Kkq-njTKk76rY04y0JCDtFTZk20oWEALF8B568g/viewform?embedded=true%22'} color={'bg-primary'} />
              </div>
          </div>
      </main>
    </div>
  );
}
