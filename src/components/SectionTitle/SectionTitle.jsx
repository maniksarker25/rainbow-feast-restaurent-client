

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center mx-auto my-8 lg:w-3/12 md:8/12 w-10/12 ">
            <p className="text-[#D99904] mb-4">{subHeading}</p>
            <h3 className="text-4xl font-semibold uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;