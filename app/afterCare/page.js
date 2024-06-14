import AfterCareDetails from "@/components/AfterCareDetails";
import Layout from "@/components/Layout";

export default function AfterCare() {
    return (
        <Layout header='After Care'>
            <div className="m-4 text-center">
                <AfterCareDetails
                    title="Rinse"
                    details="Rinse the piercing site daily in the shower. Rinse with saline 2-3 times daily. Promote circulation by loosening debris and bacteria."
                />
                <AfterCareDetails
                    title="Do Not Touch"
                    details="Piercings naturally release fluid for healing that causes a buildup of crust that can be tempting to pick at. DO NOT DO IT! Any movement can impact the healing process. Wash your pillowcase weekly or lay a clean shirt down to sleep on."
                />
                <AfterCareDetails
                    title="Observe"
                    details="Keep an eye on the piercing site throughout the healing process. Everyone's body is different, so aftercare can vary from person to person."
                />
                <h2 className="text-white text-center text-2xl ml-2 tracking-[8px] mt-4">Questions or Concerns</h2>
                <hr className="w-32 border-2 border-white mx-auto" />
                <p className="text-center">Samantha Scott <a href="tel:301-997-3385">(301)997-4575</a></p>
            </div>
        </Layout>


    );
}
