export default function Layout({ header, children }) {
    return (
        <main className="relative background">
            <div className="text-white xl:w-2/3 mx-auto mt-20">
                <h1 className="text-center text-4xl lg:text-5xl tracking-[15px]">{header}</h1>
                {children}
            </div>
        </main>
    )
}