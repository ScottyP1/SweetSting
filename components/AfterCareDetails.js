export default function AfterCareDetails({ title, details }) {
    return (
        <>
            <h2 className="text-white text-center text-3xl lg:text-4xl ml-2 tracking-[8px] mt-4">{title}</h2>
            <hr className="w-32 border-2 border-white mx-auto" />
            <p className="xl:text-center">{details}</p>
        </>
    )
}