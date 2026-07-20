<template>

    <section
        id="our-sponsors"
        class="sponsors-section"
    >

        <div class="hero">

            <p class="small-title">
                THANK YOU TO
            </p>

            <h1>
                Our Sponsors
            </h1>

            <p class="subtitle">
                Every journey through Memoria was made possible thanks to the
                generosity and support of our wonderful sponsors.
            </p>

        </div>

        <!-- ===== GOLD TIER ===== -->
        <p class="tier-label gold-label">Gold Sponsors</p>

        <div class="gold-sponsors">

            <div
                v-for="sponsor in gold"
                :key="sponsor.name"
                class="gold-card"
                :class="{ open: sponsor.open }"
            >

                <img
                    v-if="sponsor.logo"
                    :src="sponsor.logo"
                    :alt="sponsor.name"
                >
                <div
                    v-else
                    class="logo-placeholder gold-placeholder"
                >
                    {{ initials(sponsor.name) }}
                </div>

                <h2>
                    {{ sponsor.name }}
                </h2>

                <button
                    class="info-toggle"
                    @click="sponsor.open = !sponsor.open"
                >
                    {{ sponsor.open ? "Hide info" : "More info" }}
                    <span class="chevron">▾</span>
                </button>

                <div class="info-panel">
                    <div class="info-panel-inner">
                        <p>{{ sponsor.description }}</p>
                    </div>
                </div>

            </div>

        </div>

        <!-- ===== SILVER TIER ===== -->
        <p class="tier-label silver-label">Silver Sponsors</p>

        <div class="silver-sponsors">

            <div
                v-for="sponsor in silver"
                :key="sponsor.name"
                class="silver-card"
                :class="{ open: sponsor.open }"
            >

                <img
                    v-if="sponsor.logo"
                    :src="sponsor.logo"
                    :alt="sponsor.name"
                >
                <div
                    v-else
                    class="logo-placeholder silver-placeholder"
                >
                    {{ initials(sponsor.name) }}
                </div>

                <h2>
                    {{ sponsor.name }}
                </h2>

                <button
                    class="info-toggle"
                    @click="sponsor.open = !sponsor.open"
                >
                    {{ sponsor.open ? "Hide info" : "More info" }}
                    <span class="chevron">▾</span>
                </button>

                <div class="info-panel">
                    <div class="info-panel-inner">
                        <p>{{ sponsor.description }}</p>
                        <img
                            v-if="sponsor.voucher"
                            :src="sponsor.voucher"
                            :alt="sponsor.name + ' voucher'"
                            class="voucher-img"
                        >
                    </div>
                </div>

            </div>

        </div>

        <!-- ===== BRONZE TIER ===== -->
        <p class="tier-label bronze-label">Bronze Sponsors</p>

        <div class="bronze-sponsors">

            <div
                v-for="sponsor in bronze"
                :key="sponsor.name"
                class="bronze-card"
                :class="{ open: sponsor.open }"
            >

                <img
                    v-if="sponsor.logo"
                    :src="sponsor.logo"
                    :alt="sponsor.name"
                >
                <div
                    v-else
                    class="logo-placeholder bronze-placeholder"
                >
                    {{ initials(sponsor.name) }}
                </div>

                <h2>
                    {{ sponsor.name }}
                </h2>

                <button
                    class="info-toggle"
                    @click="sponsor.open = !sponsor.open"
                >
                    {{ sponsor.open ? "Hide info" : "More info" }}
                    <span class="chevron">▾</span>
                </button>

                <div class="info-panel">
                    <div class="info-panel-inner">
                        <p>{{ sponsor.description }}</p>
                    </div>
                </div>

            </div>

        </div>

    </section>

    </template>

    <script setup>

    import { reactive } from "vue";

    import balangBaikLogo from "../assets/images/sponsors/balang-baik.jpg";
    import berylsLogo from "../assets/images/sponsors/beryls-logo.png";
    import eastWestFusionLogo from "../assets/images/sponsors/east-west-fusion.jpg";
    import goodOldDaysLogo from "../assets/images/sponsors/god100hf.jpg";
    import haruFilmLogo from "../assets/images/sponsors/harufilm-logo.jpg";
    import springleafLogo from "../assets/images/sponsors/springleaf-logo.png";
    import waliLogo from "../assets/images/sponsors/wali.png";
    import fopticsLogo from "../assets/images/sponsors/foptics.jpg";
    import chocoalbabLogo from "../assets/images/sponsors/chocoalbab.jpg";
    import boulderPlanetLogo from "../assets/images/sponsors/boulder-planet.png";
    import fopticsVoucher from "../assets/images/sponsors/fopticsvoucher.png";
    import milesLogo from "../assets/images/sponsors/miles.jpeg";
    import ricoLogo from "../assets/images/sponsors/rico-logo.png";
    import mendakiLogo from "../assets/images/sponsors/mendakiLogo.png";
    import muisLogo from "../assets/images/sponsors/muisLogo.png";
    import zaLogo from "../assets/images/sponsors/zaBakes.png";
    import financingWithSyah from "../assets/images/sponsors/financingWithSyah.jpg";
    import sejadahSG from "../assets/images/sponsors/sejadahSG.JPG";
    import lbkmLogo from "../assets/images/sponsors/lbkm.png";
    import alfarouqLogo from "../assets/images/sponsors/alfarouq.png";
    import overriceLogo from "../assets/images/sponsors/overrice.JPG";

    function initials(name) {
        return name
            .split(/\s+/)
            .map(w => w[0])
            .join("")
            .slice(0, 3)
            .toUpperCase();
    }

    const gold = reactive([
        {
            name: "Boulder Planet",
            tier: "Gold",
            logo: boulderPlanetLogo,
            description: "Boulder Planet is Southeast Asia's homegrown bouldering gym, built around progression, community, and adventure. In Singapore, we operate two climbing gyms in Sembawang and Tai Seng. Our gyms are built to make climbing accessible, challenging, and rewarding. Beyond the walls, Boulder Planet has grown into one of Singapore's most active climbing communities, a place where friendships are built, goals are chased, and progress is celebrated. For those new to climbing, our Starter Pack includes an introductory class, 2 weeks of unlimited climbing across all our locations, and rental shoes included. Your next adventure starts here.",
            open: false
        },
        {
            name: "Mendaki",
            tier: "Gold",
            logo: mendakiLogo,
            description: "Yayasan MENDAKI (Council for the Development of Singapore Malay/Muslim Community) is a pioneer Self-Help Group formed in 1982 dedicated to empower the community through excellence in education in the context of a multi-racial and multi-religious Singapore. Its programmes assist students and individuals with education and training, helping to uplift the Malay/Muslim community’s educational performance and develop its resilience and adaptability. MENDAKI also charts its strategic directions based on three pillars — School Ready, Perform in School and Future Ready.",
            open: false
        },
        {
            name: "MUIS",
            tier: "Gold",
            logo: muisLogo,
            description: "Majlis Ugama Islam Singapura (MUIS), also known as the Islamic Religious Council of Singapore, was established as a statutory body in 1968 when the Administration of Muslim Law Act (AMLA) came into effect. Under AMLA, Muis is to advise the President of Singapore on all matters relating to Islam in Singapore. The role of Muis is to see that the many and varied interests of Singapore's Muslim community are looked after.",
            open: false
        },
        {
            name: "LBKM",
            tier: "Gold",
            logo: lbkmLogo,
            description: "LBKM empowers lives through education by providing bursaries, scholarships, and developmental opportunities to uplift the community and nurture future-ready individuals.",
            open: false
        },
        {
            name: "Sejadah One Stop SG",
            tier: "Gold",
            logo: sejadahSG,
            description: "Sejadah One Stop SG is your one-stop destination for prayer mats combining quality, comfort, and affordability.",
            open: false
        },
        {
            name: "Financing with Syah",
            tier: "Gold",
            logo: financingWithSyah,
            description: "Financing With Syah empowers individuals to make informed financial decisions through Shariah-compliant planning, helping reduce riba while building lasting financial resilience.",
            open: false
        }
    ]);

    const silver = reactive([
        {
            name: "Choco Albab",
            tier: "Silver",
            logo: chocoalbabLogo,
            description: "Choco Albab Singapore distributes high-quality chocolate products are are committed to supporting meaningful initiatives and collaborations within the academic and student communities.",
            open: false
        },
        {
            name: "Beryl's",
            tier: "Silver",
            logo: berylsLogo,
            description: "Beryl's Chocolate is a well-known Malaysian chocolate manufacturer that offers a wide selection of premium quality chocolates that anyone can enjoy.",
            open: false
        },
        {
            name: "Wali",
            tier: "Silver",
            logo: waliLogo,
            description: "Wali Fragrance is a Singapore-based perfume brand specializing in high-quality, alcohol-free, and concentrated fragrance oils. Founded in 2013, the brand offers a variety of products including pocket-friendly roll-ons (such as the Dubai Series), designer-inspired spray perfumes, and natural soy wax candles.",
            open: false
        },
        {
            name: "Foptics",
            tier: "Silver",
            logo: fopticsLogo,
            description: "Foptics is a proudly local eyewear brand bridging the gap between affordability and style, without compromising on form or function. Get quality frames and lenses from just $39.90!",
            voucher: fopticsVoucher,
            open: false
        },
        {
            name: "Springleaf Prata Place",
            tier: "Silver",
            logo: springleafLogo,
            description: "Springleaf Prata Place has been serving delicious crispy prata since 2003, offering innovative prata creations in Singapore with warm service and a family-friendly dining experience.",
            open: false
        },
        {
            name: "Z&A",
            tier: "Silver",
            logo: zaLogo,
            description: "Indulge in the elegance of Z&A Bakes where home-baked brownies, cookie fudge bars, and tapak kuda are lovingly made to bring refined sweetness to every moment.",
            open: false
        },
        {
            name: "Al-Farouq",
            tier: "Silver",
            logo: alfarouqLogo,
            description: "Al Faarouq Honey specializes in Egyptian and Yemeni Honey and source only the finest honey from the region. Our honey is 100% Pure, Natural and Unadulterated for Your Everyday Immunity.",
            open: false
        }
    ]);

    const bronze = reactive([
        {
            name: "Balang Baik SG",
            tier: "Bronze",
            logo: balangBaikLogo,
            description: "Balang Baik SG offers one of the most-affordable Balang Live & Non-Live Stations in Singapore, for events, wedding, gathering and many other occassions! With over more than 16 variety of flavours, be spoilt for choices and give a special experience to your guests!",
            open: false
        },
        {
            name: "Rico Catering",
            tier: "Bronze",
            logo: ricoLogo,
            description: "Rico Catering is delighted to support this meaningful event with our delicious Halal-certified cuisine. We hope our food brings everyone together and makes this special occasion even more memorable. Enjoy!",
            open: false
        },
        {
            name: "HaruFilm",
            tier: "Bronze",
            logo: haruFilmLogo,
            description: "An authentic Korean self-photobooth brand offering high-quality photo experiences and instant keepsakes that help people capture and celebrate meaningful moments.",
            open: false
        },
        {
            name: "Good Old Days",
            tier: "Bronze",
            logo: goodOldDaysLogo,
            description: "At G.O.D. (Good Old Days), we bring back more than food — we bring back memories. We serve authentic halal dishes at prices from the past, lovingly prepared, and delivered straight to your doorstep.",
            open: false
        },
        {
            name: "East West Fusion",
            tier: "Bronze",
            logo: eastWestFusionLogo,
            description: "At East West Fusion, we believe that good food brings people together. Our mission is to provide delicious, high-quality meals at affordable prices while delivering exceptional service to our valued customers. Every dish is prepared with passion, care, and a commitment to excellence. We are proud to be Halal-certified, ensuring all our food is prepared in accordance with Halal standards.",
            open: false
        },
        {
            name: "13 Miles",
            tier: "Bronze",
            logo: milesLogo,
            description: "13 Miles is a halal restaurant in Kampong Glam, Singapore, specializing in seafood shellout, Western cuisine, dim sum, and catering. We create memorable dining experiences with quality food, warm hospitality, and exceptional value.",
            open: false
        },
        {
            name: "Overrice",
            tier: "Bronze",
            logo: overriceLogo,
            description: "Overrice brings the New York street cart dining experience halfway across the world to a vibrant and unpretentious café along Sultan Gate - Singapore's trendy, hipster district of Kampong Glam. This contemporary, Muslim-owned eatery amassed fans from all over the country through their signature hearty, affordable rice bowls, and edgy restaurant vibes.",
            open: false
        }
    ]);

    </script>

    <style scoped>

    .sponsors-section{
        min-height:100vh;
        background:#FFFDF7;
        padding:100px 8%;
    }

    .hero{
        text-align:center;
        margin-bottom:60px;
    }

    .small-title{
        color:#C8A54B;
        letter-spacing:5px;
        font-weight:bold;
    }

    .hero h1{
        font-family:"Luckiest Guy";
        font-size:4rem;
        color:#5A3B13;
        margin:15px 0;
    }

    .subtitle{
        max-width:650px;
        margin:auto;
        color:#777;
        line-height:1.8;
    }

    .tier-label{
        text-align:center;
        font-weight:800;
        letter-spacing:3px;
        text-transform:uppercase;
        font-size:.9rem;
        margin:0 0 24px;
    }

    .gold-label{ color:#B8860B; }
    .silver-label{ color:#8A8F98; }
    .bronze-label{ color:#9C5A2E; }

    /* ===== logo placeholder (for sponsors without a logo yet) ===== */

    .logo-placeholder{
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:800;
        letter-spacing:1px;
        color:#fff;
        border-radius:14px;
        background:linear-gradient(135deg,#D9C9A3,#B58A29);
    }

    .gold-placeholder{
        width:240px;
        height:140px;
        font-size:2rem;
        margin-bottom:20px;
    }

    .silver-placeholder{
        width:190px;
        height:110px;
        font-size:1.6rem;
        margin-bottom:20px;
        background:linear-gradient(135deg,#C7CBD1,#8A8F98);
    }

    .bronze-placeholder{
        width:170px;
        height:100px;
        font-size:1.3rem;
        margin-bottom:25px;
        background:linear-gradient(135deg,#D9A97C,#9C5A2E);
    }

    /* ===== GOLD tier (big, like the old featured cards) ===== */

    .gold-sponsors{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:flex-start;
        gap:30px;
        margin-bottom:60px;
    }

    .gold-card{
        position:relative;
        background:linear-gradient(160deg, #FFFFFF 0%, #FFF6E0 100%);
        border-radius:28px;
        padding:50px 60px;
        text-align:center;
        box-shadow:0 18px 40px rgba(0,0,0,.12);
        border:3px solid #E3A726;
        max-width:420px;
        width:100%;
    }

    .gold-card img{
        width:240px;
        height:140px;
        object-fit:contain;
        margin-bottom:20px;
    }

    .gold-card h2{
        color:#402B6D;
        font-size:1.4rem;
        margin-bottom:8px;
    }

    /* ===== SILVER tier (medium) ===== */

    .silver-sponsors{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:flex-start;
        gap:26px;
        margin-bottom:60px;
    }

    .silver-card{
        position:relative;
        background:linear-gradient(160deg, #FFFFFF 0%, #F3F4F6 100%);
        border-radius:24px;
        padding:38px 42px;
        text-align:center;
        box-shadow:0 14px 32px rgba(0,0,0,.10);
        border:3px solid #B0B5BD;
        max-width:300px;
        width:100%;
    }

    .silver-card img{
        width:190px;
        height:110px;
        object-fit:contain;
        margin-bottom:20px;
    }

    .silver-card h2{
        color:#402B6D;
        font-size:1.2rem;
        margin-bottom:8px;
    }

    .silver-card .voucher-img{
        display:block;
        width:240px;
        max-width:100%;
        height:auto;
        margin:16px auto 0;
        border-radius:12px;
    }

    /* ===== BRONZE tier (compact grid) ===== */

    .bronze-sponsors{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
        gap:30px;
        max-width:1100px;
        margin:auto;
        align-items:start;
    }

    .bronze-card{
        background:white;
        border-radius:22px;
        padding:30px;
        text-align:center;
        box-shadow:0 10px 22px rgba(0,0,0,.07);
        border:1px solid #E9D9C3;
        transition:.3s;
    }

    .bronze-card:hover{
        transform:translateY(-6px);
    }

    .bronze-card img{
        width:170px;
        height:100px;
        object-fit:contain;
        margin-bottom:25px;
    }

    .bronze-card h2{
        color:#402B6D;
        margin-bottom:10px;
        font-size:1.05rem;
    }

    /* ===== info dropdown (shared by all tiers) ===== */

    .info-toggle{
        display:inline-flex;
        align-items:center;
        gap:6px;
        margin-top:14px;
        background:none;
        border:none;
        color:#C8A54B;
        font-family:inherit;
        font-size:.85rem;
        font-weight:700;
        cursor:pointer;
        padding:4px 0;
    }

    .info-toggle:focus-visible{
        outline:2px solid #C8A54B;
        outline-offset:3px;
        border-radius:6px;
    }

    .info-toggle .chevron{
        display:inline-block;
        transition:transform .25s ease;
    }

    .open .info-toggle .chevron{
        transform:rotate(180deg);
    }

    .info-panel{
        display:grid;
        grid-template-rows:0fr;
        transition:grid-template-rows .3s ease;
        text-align:left;
    }

    .info-panel-inner{
        overflow:hidden;
        min-height:0;
    }

    .info-panel p{
        color:#777;
        font-weight:normal;
        font-size:.9rem;
        line-height:1.6;
        margin:0;
        text-align:justify;
    }

    .open .info-panel{
        grid-template-rows:1fr;
        margin-top:8px;
    }

    /* =========================
       Tablet
    ========================= */
    @media (max-width: 768px) {

        .sponsors-section{
            padding:70px 6%;
        }

        .hero{
            margin-bottom:40px;
        }

        .hero h1{
            font-size:2.4rem;
        }

        .subtitle{
            font-size:.9rem;
        }

        .gold-sponsors,
        .silver-sponsors{
            gap:20px;
        }

        .gold-card{
            padding:36px 30px;
            max-width:340px;
        }

        .gold-card img,
        .gold-placeholder{
            width:180px;
            height:110px;
        }

        .silver-card{
            padding:28px 24px;
            max-width:260px;
        }

        .silver-card img,
        .silver-placeholder{
            width:150px;
            height:90px;
        }

        .bronze-sponsors{
            grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
            gap:22px;
        }

        .bronze-card{
            padding:24px;
        }

        .bronze-card img,
        .bronze-placeholder{
            width:130px;
            height:80px;
            margin-bottom:16px;
        }

    }

    /* =========================
       Mobile phones
    ========================= */
    @media (max-width: 480px) {

        .sponsors-section{
            padding:50px 6%;
            min-height:auto;
        }

        .small-title{
            font-size:.75rem;
            letter-spacing:3px;
        }

        .hero h1{
            font-size:1.8rem;
            margin:10px 0;
        }

        .subtitle{
            font-size:.82rem;
            line-height:1.6;
        }

        .tier-label{
            font-size:.78rem;
            letter-spacing:2px;
            margin-bottom:16px;
        }

        .badge{
            font-size:.7rem;
            padding:5px 16px;
        }

        .gold-sponsors,
        .silver-sponsors{
            gap:16px;
            flex-direction:column;
            align-items:center;
            margin-bottom:40px;
        }

        .gold-card{
            padding:30px 20px;
            max-width:100%;
            border-radius:20px;
        }

        .gold-card img,
        .gold-placeholder{
            width:150px;
            height:90px;
        }

        .gold-card h2{
            font-size:1.1rem;
        }

        .silver-card{
            padding:24px 18px;
            max-width:100%;
            border-radius:18px;
        }

        .silver-card img,
        .silver-placeholder{
            width:130px;
            height:80px;
        }

        .silver-card h2{
            font-size:1rem;
        }

        .bronze-sponsors{
            grid-template-columns:1fr 1fr;
            gap:14px;
        }

        .bronze-card{
            padding:16px;
            border-radius:16px;
        }

        .bronze-card img,
        .bronze-placeholder{
            width:100%;
            height:60px;
            margin-bottom:10px;
        }

        .bronze-card h2{
            font-size:.85rem;
            margin-bottom:4px;
        }

        .info-toggle{
            font-size:.75rem;
        }

        .info-panel p{
            font-size:.8rem;
        }

    }

    </style>