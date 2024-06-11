import Card from "@/components/Card";
import Image from '@/public/Antitragus-piercing-1.png';
import Image2 from '@/public/Auricle-Piercing.png';
import Image3 from '@/public/Conch-piercing.png';
import Image4 from '@/public/Daith-piercing.png';
import Image5 from '@/public/Flat-piercing.png';
import Image6 from '@/public/Forward-helix-piercing-1.png';
import Image7 from '@/public/Helix-piercing.png';
import Image8 from '@/public/High-lobe-piercing.png';
import Image9 from '@/public/Industrial-piercing.png';
import Image10 from '@/public/Lobe-piercing.png';
import Image11 from '@/public/Orbital-Piercing.png';
import Image12 from '@/public/Rook-piercing-Maria-Tash.png';
import Image13 from '@/public/Snug-piercing.png';
import Image14 from '@/public/Tragus-piercing.png';

const images = [
    {
        image: Image, title: 'Anti-tragus', healTime: 'Healing time: 6—12 months', details: "Located opposite the ear canal in the small curved area above your earlobe, and adjacent to the tragus, is the anti-tragus piercing. It’s a great spot for micro studs and hoops."
    },
    {
        image: Image2, title: 'Auricle', healTime: 'Healing time: 3—9 months', details: "You can think of an auricle piercing as somewhere between a helix and a high lobe, and a step outwards from a snug.Auricles are placed in the fold between your helix(outer fold) and earlobe."
    },
    {
        image: Image3, title: 'Conch', healTime: 'Healing time: 6—12 months', details: "The conch is the inner cup of your ear — that bit of cartilage that somewhat resembles a conch shell (that’s how it gets its name). It’s quite a versatile area for piercings, as you can get multiple studs, or a cuff like this that hugs around the ear."
    },
    {
        image: Image4, title: 'Daith', healTime: 'Healing time: 6—18 months', details: "The daith piercing occurs on the ridge below the rook, and hugs the cartilage on the inside of your ear."
    },
    {
        image: Image5, title: 'Flat', healTime: 'Healing time: 6—12 months', details: "Not quite a rook and not quite a helix, the flat piercing — as the name implies — is located in the flat area of cartilage below the upper rim of the ear."
    },
    {
        image: Image6, title: 'Forward Helix', healTime: 'Healing time: 4—6 months', details: "The forward helix piercing is above the tragus, on the bit of your helix at the front of your ear. As a large-ish area, it’s suitable for multiple piercings."
    },
    {
        image: Image7, title: 'Helix', healTime: 'Healing time: 6—12 months', details: "You might have heard these colloquially referred to as “cartilage piercings” — but a helix piercing is one occurring on the upper outer cartilage of the ear, from the side as pictured to further along the top edge of the ear."
    },
    {
        image: Image8, title: 'High Lobe', healTime: 'Healing time: 3—6 months', details: "Just as the name states, a high lobe piercing is located higher up than your standard lobe (but lower than the auricle, more on that below)."
    },
    {
        image: Image9, title: 'Industrial', healTime: 'Healing time: 9—12 months', details: "Industrial piercings are a striking look — they’re basically a straight barbell that connects one cartilage piercing to another on the upper part of the ear. Since they’re two piercings in one, they can be harder to heal."
    },
    {
        image: Image10, title: 'Lobe', healTime: 'Healing time: 3—6 months', details: "Lobe piercings are the most common ear piercing — they are situated in the soft and fleshy region of the ear called the lobule. Depending on the size and shape of your lobes — everyone’s are different! — you can get one or multiple piercings in this zone."
    },
    {
        image: Image11, title: 'Orbital', healTime: 'Healing time: 3—12 months (depending on location)', details: "There’s a lot of incorrectly named orbital piercings out there — no, it’s not just a hoop going through your conch. An orbital piercing is a combination of two piercings connected by one hoop. They’re common on the lobe and auricle area, but can be placed just about anywhere on the ear with room for two piercings side-by-side."
    },
    {
        image: Image12, title: 'Rook', healTime: 'Healing time: 6—18 months', details: "The rook piercing goes through the inner edge of the highest ridge on your ear. It’s a good spot for a hoop, or a bar during the healing process."
    },
    {
        image: Image13, title: 'Snug', healTime: 'Healing time: 4—6 months', details: "A snug piercing is located in that next ridge of cartilage inwards of the helix, between the helix and the inner conch."
    },
    {
        image: Image14, title: 'Tragus', healTime: 'Healing time: 12—18 months', details: "The tragus piercing is located on the small bit of cartilage that partially covers your ear canal. It’s an ideal spot for mini studs or hoops."
    }
];

export default function PiercingList() {
    return (
        <>
            {
                images.map((item, index) => (
                    <Card key={index} img={item.image} title={item.title} index={index} details={item.details} healTime={item.healTime} />
                ))
            }
        </>
    )
}
