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
    
        <!-- Featured sponsors: Springleaf + Boulder Planet -->
        <div class="featured-sponsors">

            <div
                v-for="sponsor in featured"
                :key="sponsor.name"
                class="featured-card"
                :class="{ open: sponsor.open }"
            >
    
                <img
                    :src="sponsor.logo"
                    :alt="sponsor.name"
                >
    
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
    
        <div class="sponsors-grid">
    
            <div
                v-for="sponsor in sponsors"
                :key="sponsor.name"
                class="sponsor-card"
                :class="{ open: sponsor.open }"
            >
    
                <img
                    :src="sponsor.logo"
                    :alt="sponsor.name"
                >
    
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
    
    const featured = reactive([
        {
        name: "Springleaf Prata Place",
        tier: "Main Sponsor",
        logo: springleafLogo,
        description: "Springleaf Prata Place has been serving delicious crispy prata since 2003, offering innovative prata creations in Singapore with warm service and a family-friendly dining experience.",
        open: false,
        },
        {
        name:"Boulder Planet",
        tier:"Sponsor",
        logo:boulderPlanetLogo,
        description:"Boulder Planet is Southeast Asia's homegrown bouldering gym, built around progression, community, and adventure. In Singapore, we operate two climbing gyms in Sembawang and Tai Seng. Our gyms are built to make climbing accessible, challenging, and rewarding. Beyond the walls, Boulder Planet has grown into one of Singapore's most active climbing communities, a place where friendships are built, goals are chased, and progress is celebrated. For those new to climbing, our Starter Pack includes an introductory class, 2 weeks of unlimited climbing across all our locations, and rental shoes included. Your next adventure starts here.",
        open:false
    }
    ]);
    
    const sponsors = reactive([
    
    {
        name:"Balang Baik SG",
        tier:"Sponsor",
        logo:balangBaikLogo,
        description:"Balang Baik SG offers one of the most-affordable Balang Live & Non-Live Stations in Singapore, for events, wedding, gathering and many other occassions! With over more than 16 variety of flavours, be spoilt for choices and give a special experience to your guests!",
        open:false
    },
    
    {
        name:"Beryl's",
        tier:"Sponsor",
        logo:berylsLogo,
        description:"Beryl's Chocolate is a well-known Malaysian chocolate manufacturer that offers a wide selection of premium quality chocolates that anyone can enjoy.",
        open:false
    },
    
    {
        name:"East West Fusion",
        tier:"Sponsor",
        logo:eastWestFusionLogo,
        description:"At East West Fusion, we believe that good food brings people together. Our mission is to provide delicious, high-quality meals at affordable prices while delivering exceptional service to our valued customers. Every dish is prepared with passion, care, and a commitment to excellence. We are proud to be Halal-certified, ensuring all our food is prepared in accordance with Halal standards.",
        open:false
    },
    
    {
        name:"Good Old Days",
        tier:"Sponsor",
        logo:goodOldDaysLogo,
        description:"At G.O.D. (Good Old Days), we bring back more than food — we bring back memories. We serve authentic halal dishes at prices from the past, lovingly prepared, and delivered straight to your doorstep.",
        open:false
    },
    
    {
        name:"HaruFilm",
        tier:"Sponsor",
        logo:haruFilmLogo,
        description:"An authentic Korean self-photobooth brand offering high-quality photo experiences and instant keepsakes that help people capture and celebrate meaningful moments.",
        open:false
    },
    
    {
        name:"Wali",
        tier:"Sponsor",
        logo:waliLogo,
        description:"Wali Fragrance is a Singapore-based perfume brand specializing in high-quality, alcohol-free, and concentrated fragrance oils. Founded in 2013, the brand offers a variety of products including pocket-friendly roll-ons (such as the Dubai Series), designer-inspired spray perfumes, and natural soy wax candles. ",
        open:false
    },
    {
        name:"Foptics",
        tier:"Sponsor",
        logo:fopticsLogo,
        description:"Foptics is a proudly local eyewear brand bridging the gap between affordability and style, without compromising on form or function. Get quality frames and lenses from just $39.90!",
        voucher:fopticsVoucher,
        open:false
    },
    {
        name:"Choco Albab",
        tier:"Sponsor",
        logo:chocoalbabLogo,
        description:"Choco Albab Singapore distributes high-quality chocolate products are are committed to supporting meaningful initiatives and collaborations within the academic and student communities.",
        open:false
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
    
    /* ===== featured sponsors (Springleaf + Boulder Planet) ===== */
    
    .featured-sponsors{

        display:flex;

        flex-wrap:wrap;

        justify-content:center;

        align-items:flex-start;

        gap:30px;
    
        margin-bottom:50px;
    
    }
    
    .featured-card{
    
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
    
    .featured-badge{
    
        position:absolute;
    
        top:-16px;
    
        left:50%;
    
        transform:translateX(-50%);
    
        background:#E3A726;
    
        color:white;
    
        font-size:.8rem;
    
        font-weight:bold;
    
        letter-spacing:1px;
    
        padding:6px 20px;
    
        border-radius:999px;
    
        box-shadow:0 6px 14px rgba(227,167,38,.4);
    
    }
    
    .featured-card img{
    
        width:240px;
    
        height:140px;
    
        object-fit:contain;
    
        margin-bottom:20px;
    
    }
    
    .featured-card h2{
    
        color:#402B6D;
    
        font-size:1.4rem;
    
        margin-bottom:8px;
    
    }
    
    .featured-card p{
    
        color:#B58A29;
    
        font-weight:bold;
    
    }

    /* ===== info dropdown (shared by featured + grid cards) ===== */

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

        text-align: justify;

    }

    .open .info-panel{

        grid-template-rows:1fr;

        margin-top:8px;

    }

    .sponsor-card .voucher-img{

        display:block;

        width:280px;

        max-width:100%;

        height:auto;

        margin:16px auto 0;

        border-radius:12px;

    }
    
    /* ===== other sponsors ===== */
    
    .sponsors-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

gap:35px;

max-width:1100px;

margin:auto;

align-items:start;

}
    
    .sponsor-card{
    
        background:white;
    
        border-radius:24px;
    
        padding:35px;
    
        text-align:center;
    
        box-shadow:0 10px 25px rgba(0,0,0,.08);
    
        transition:.3s;
    
    }
    
    .sponsor-card:hover{
    
        transform:translateY(-8px);
    
    }
    
    .sponsor-card img{
    
        width:170px;
    
        height:100px;
    
        object-fit:contain;
    
        margin-bottom:25px;
    
    }
    
    .sponsor-card h2{
    
        color:#402B6D;
    
        margin-bottom:10px;
    
    }
    
    .sponsor-card p{
    
        color:#402B6D;

    
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

        .featured-sponsors{
            gap:20px;
        }
    
        .featured-card{
            padding:36px 30px;
            max-width:340px;
        }
    
        .featured-card img{
            width:180px;
            height:110px;
        }
    
        .sponsors-grid{
            grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
            gap:22px;
        }
    
        .sponsor-card{
            padding:24px;
        }
    
        .sponsor-card img{
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
    
        .featured-badge{
            font-size:.7rem;
            padding:5px 16px;
        }

        .featured-sponsors{
            gap:16px;
            flex-direction:column;
            align-items:center;
        }
    
        .featured-card{
            padding:30px 20px;
            max-width:100%;
            border-radius:20px;
        }
    
        .featured-card img{
            width:150px;
            height:90px;
        }
    
        .featured-card h2{
            font-size:1.1rem;
        }
    
        .sponsors-grid{
            grid-template-columns:1fr 1fr;
            gap:14px;
        }
    
        .sponsor-card{
            padding:16px;
            border-radius:16px;
        }
    
        .sponsor-card img{
            width:100%;
            height:60px;
            margin-bottom:10px;
        }
    
        .sponsor-card h2{
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