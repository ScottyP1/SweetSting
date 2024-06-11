import PiercingList from "@/components/PiercingList";
import Label from "@/components/Label";

export default function Pricing() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <span className="text-white text-3xl text-center tracking-[10px]">
                {/* tw lines  */}
                Any Event <br />Any Piercing
            </span>
            <div className="mt-2 flex justify-center">
                <div className="shadow-2xl">
                    <hr className="w-96 border-2 border-white" />
                    <p className="text-white text-center tracking-[8px]">Except that one</p>
                </div>
            </div>
            <div className="flex justify-center text-white text-[18px] mt-2">
                <Label title="Weddings" />
                <Label title="Events" />
                <Label title="Races" />
                <Label title="Party's" />
                <Label title="InHome" />
            </div>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
                    <PiercingList />
                </div>
            </div>
        </main>
    );
}
