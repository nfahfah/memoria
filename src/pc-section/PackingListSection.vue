<template>

    <section
        id="packing-list"
        class="packing-page"
    >
    
        <h2 class="section-title">
             Packing List
        </h2>
    
        <div class="packing-card">
    
            <div class="tabs">
                <button
                    class="tab"
                    :class="{ active: activeTab === 'overnight' }"
                    @click="activeTab = 'overnight'"
                >
                    For Overnighters
                </button>
                <button
                    class="tab"
                    :class="{ active: activeTab === 'day' }"
                    @click="activeTab = 'day'"
                >
                    For Non-Overnighters/Day Bag
                </button>
            </div>
    
            <p class="intro">
                {{ activeTab === 'overnight'
                    ? "Here's what you should bring for overnight camp!"
                    : "Here's what you should bring for your day bag!" }}
            </p>
    
            <div class="list-header numbered">
                <span class="item-no">No.</span>
                <span class="item-name">Items</span>
                <span class="item-qty">Recommended Quantity</span>
            </div>
    
            <ul class="packing-list numbered">
    
                <template v-for="section in currentSections" :key="section.title">
    
                    <li
                        v-if="section.showHeader"
                        class="section-row"
                    >
                        <span>{{ section.title }}</span>
                    </li>
    
                    <li
                        v-for="(item, idx) in section.items"
                        :key="item.name"
                    >
                        <span class="item-no">{{ idx + 1 }}</span>
                        <span class="item-name">{{ item.name }}</span>
                        <span class="item-qty">{{ item.qty }}</span>
                    </li>
    
                </template>
    
            </ul>
    
        </div>
    
    </section>
    
    </template>
    
    <script setup>
    import { ref, computed } from 'vue'
    
    const activeTab = ref('overnight')
    
    const reportingAttire = {
        title: 'Required Reporting Attire',
        showHeader: true,
        items: [
            { name: 'OG-Coloured Shirt', qty: '1' },
            { name: 'Long Pants', qty: '1' },
            { name: 'Covered Shoes (to be worn at all times)', qty: '1' },
        ],
    }
    
    const overnightSections = [
        reportingAttire,
        {
            title: 'Overnight Items',
            showHeader: true,
            items: [
                { name: 'Dark Blue Dri Fit Shirt', qty: '1-2' },
                { name: 'Camp Shirt (Will be given on Day 1)', qty: '1' },
                { name: 'Extra Black Dri Fit Shirt (Optional)', qty: '1' },
                { name: 'Long pants', qty: '2-3' },
                { name: 'Pyjamas Set', qty: '1-2' },
                { name: 'Undergarments', qty: 'As needed' },
                { name: 'Toothbrush', qty: '1' },
                { name: 'Toothpaste', qty: '1' },
                { name: 'Toiletries', qty: 'As needed' },
                { name: 'Towel (Bath Sized)', qty: '1' },
                { name: 'Plastic Bags (To keep soiled clothes)', qty: '3-4' },
                { name: 'Slipper/Sandal for Toilet Use', qty: '1' },
                { name: 'Water Bottle', qty: '1' },
                { name: 'Prayer Paraphernalia', qty: '1' },
                { name: 'Personal Medication (Including Panadol)', qty: 'As needed' },
                { name: 'Day Bag', qty: '1' },
                { name: 'Phone Charger with Head', qty: '1' },
                { name: 'Power Bank', qty: '1' },
                { name: 'Sunscreen', qty: '1' },
                { name: 'Deodorant/Perfume', qty: '1' },
                { name: 'Umbrella/Poncho', qty: '1' },
                { name: 'Cap/Hat (Optional)', qty: '1' },
                { name: 'Bedsheet (Optional)', qty: '1' },
                { name: 'Blanket (Optional)', qty: '1' },
                { name: 'Room Freshener Spray (Optional)', qty: '1' },
            ],
        },
    ]
    
    const daySections = [
        reportingAttire,
        {
            title: 'Day Bag',
            showHeader: true,
            items: [
                { name: 'Water Bottle', qty: '1' },
                { name: 'Prayer Paraphernalia', qty: '1' },
                { name: 'Personal Medication (Including Panadol)', qty: 'As needed' },
                { name: 'Powerbank', qty: '1' },
                { name: 'Phone Charger with Head', qty: '1' },
                { name: 'Umbrella/Poncho', qty: '1' },
                { name: 'Extra Black Dri Fit Shirt (Optional)', qty: '1' },
                { name: 'Sunscreen (Optional)', qty: '1' },
                { name: 'Cap/Hat (Optional)', qty: '1' },
                { name: 'Deodorant/Perfume (Optional)', qty: '1' },
            ],
        },
    ]
    
    const currentSections = computed(() =>
        activeTab.value === 'overnight' ? overnightSections : daySections
    )
    </script>
    
    <style scoped>
    
    .packing-page{
    
        min-height:100vh;
    
        padding:120px 10%;
    
        box-sizing:border-box;
    
        background:#EEF8FF;
    
    }
    
    .section-title{
    
        font-family:"Luckiest Guy";
    
        font-size:3rem;
    
        color:#402B6D;
    
        text-align:center;
    
        margin-bottom:50px;
    
    }
    
    .packing-card{
    
        max-width:900px;
    
        margin:auto;
    
        background:white;
    
        padding:50px;
    
        border-radius:28px;
    
        box-shadow:0 15px 30px rgba(0,0,0,.08);
    
    }
    
    .tabs{
    
        display:flex;
    
        gap:14px;
    
        margin-bottom:30px;
    
    }
    
    .tab{
    
        font-family:inherit;
    
        font-size:1.05rem;
    
        font-weight:600;
    
        color:#8A8FA3;
    
        background:white;
    
        border:2px solid #E3E6F0;
    
        border-radius:12px;
    
        padding:14px 28px;
    
        cursor:pointer;
    
        transition:all .2s ease;
    
    }
    
    .tab:hover{
    
        border-color:#B8AEE0;
    
        color:#402B6D;
    
    }
    
    .tab.active{
    
        color:white;
    
        background:#402B6D;
    
        border-color:#402B6D;
    
    }
    
    .intro{
    
        font-size:1.2rem;
    
        margin-bottom:30px;
    
        color:#555;
    
    }
    
    .list-header{
    
        display:flex;
    
        background:#9ac2f6;
    
        border-radius:8px 8px 0 0;
    
        font-weight:700;
    
        font-size:1rem;
    
        color:#333;
    
    }
    
    .list-header .item-no,
    .list-header .item-name,
    .list-header .item-qty{
    
        text-decoration:underline;
    
    }
    
    .packing-list{
    
        list-style:none;
    
        margin:0;
    
        padding:0;
    
        border:1px solid #E3E6F0;
    
        border-top:none;
    
        border-radius:0 0 8px 8px;
    
        overflow:hidden;
    
    }
    
    .packing-list li{
    
        display:flex;
    
        border-top:1px solid #E3E6F0;
    
        font-size:1.05rem;
    
        color:#464648;
    
    }
    
    .numbered .item-no{
    
        flex:0 0 50px;
    
        box-sizing:border-box;
    
        padding:14px 16px;
    
        border-right:1px solid #E3E6F0;
    
    }
    
    .numbered .item-name{
    
        flex:1;
    
        box-sizing:border-box;
    
        padding:14px 16px;
    
        border-right:1px solid #E3E6F0;
    
    }
    
    .numbered .item-qty{
    
        flex:0 0 40%;
    
        box-sizing:border-box;
    
        padding:14px 16px;
    
        color:#555;
    
        text-align:left;
    
    }
    
    .list-header.numbered .item-no,
    .list-header.numbered .item-name{
    
        border-right:1px solid #d6ded0;
    
    }
    
    .section-row{
    
        background:#9ba6c9;
    
        font-weight:700;
    
        padding:10px 16px;
    
    }
    
    .section-row span{
    
        text-decoration:underline;
    
    }

    /* Mobile */
@media (max-width: 600px) {

.packing-page{

    padding:60px 5%;

}

.section-title{

    font-size:2rem;

    margin-bottom:30px;

}

.packing-card{

    padding:24px 16px;

    border-radius:20px;

}

.tabs{

    gap:8px;

}

.tab{

    flex:1;

    padding:10px 12px;

    font-size:0.9rem;

    text-align:center;

}

.intro{

    font-size:1rem;

    margin-bottom:20px;

}

.list-header,
.packing-list li{

    font-size:0.85rem;

}

.numbered .item-no{

    flex:0 0 32px;

    padding:10px 6px;

}

.numbered .item-name{

    padding:10px 8px;

}

.numbered .item-qty{

    flex:0 0 34%;

    padding:10px 8px;

}

}
    
    </style>