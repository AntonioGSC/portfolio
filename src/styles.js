const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",

    heroHeadText:
        "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
        "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    sectionHeadText:
        "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
        "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
    btnBurguer:
        `w-[32px] h-[4px] bg-[#FFFFFF] rounded-[5px] transition-all duration-500 
        after:content-[''] after:absolute after:w-[32px] after:h-[4px] after:bg-[#FFFFFF] after:rounded-[5px] after:transition-all after:duration-500
        before:content-[''] before:absolute before:w-[32px] before:h-[4px] before:bg-[#FFFFFF] before:rounded-[5px] before:transition-all before:duration-500
        after:translate-y-[12px] before:translate-y-[-12px]`,
    btnClose:
        `translate-x-[-50px] bg-transparent before:rotate-[45deg] before:translate-x-[48px] before:translate-y-[2px] after:rotate-[-45deg] after:translate-x-[48px] after:translate-y-[2px]`
};

export { styles };