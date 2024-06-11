export default function Label({ title, classes }) {
    return (
        <div className={`p-2 lg:p-3 rounded-full bg-[#CDF5EC]/[50%] m-1 ${classes}`}>
            {title}
        </div>

    )
}