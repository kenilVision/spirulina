import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import blogOne from '../assets/blog1.webp';
import blogTwo from '../assets/blog2.webp';
import blogThree from '../assets/blog3.webp';
import NavigationIcon from '../component/icons/NavigateIcon';
import { Tooltip } from 'react-tooltip';
import Mayalsolike from '../component/cart/Mayalsolike';

const BlogDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const data = [
        {
            slug: "amla-tablets-benefits-the-super-supplement-for-daily-wellness",
            title: "Amla Tablets Benefits: The Super Supplement for Daily Wellness",
            image: blogOne,
            description1: {
                title: "Amla Tablets Benefits: The Super Supplement for Daily Wellness",
                description: "Ayurveda, the ancient science of life, has gifted us with countless treasures, but few are as remarkable as Amla, the Indian gooseberry (Phyllanthus emblica). Known as Amalaki in Sanskrit, Amla is a nutritional dynamo, revered for its ability to rejuvenate, heal, and balance the body. At Spiruswastha, we’re dedicated to making Ayurveda accessible, and our Amla tablets are a convenient way to harness this superfood’s benefits. In this blog, we’ll explore the extraordinary benefits of Amla tablets, focusing on their role in daily wellness, with specific advantages for hair, skin, immunity, and more. Discover why Amla tablets are the super supplement you need for a vibrant, healthy life.",
            },
            description2: {
                title: "What Are Amla Tablets?",
                description1: "Amla is a small, tangy fruit native to India, prized for its unparalleled Vitamin C content and rich array of antioxidants, flavonoids, and minerals. In Ayurveda, Amla is a Rasayana herb, meaning it promotes longevity, vitality, and balance across all doshas (Vata, Pitta, Kapha). Amla tablets are crafted by processing the fruit into a concentrated, shelf-stable form, delivering its potent nutrients in a portable, easy-to-use tablet.",
                description2: "Unlike powders or fresh fruit, Amla tablets offer unmatched convenience, making it simple to incorporate this Ayurvedic gem into your daily routine. Whether you’re at home or on the go, Amla tablets provide a consistent dose of wellness in every serving."
            },
            description3: {
                title: "Amla’s Ayurvedic Legacy",
                description1: "In Ayurveda, Amla is hailed as a “divine herb” for its ability to nourish the body’s tissues (Dhatus) and support overall health. Ancient texts like the Charaka Samhita describe Amla as a remedy for digestion, immunity, and rejuvenation. Its cooling potency (Sheeta Virya) and diverse taste profile (sweet, sour, astringent) make it ideal for calming Pitta-related issues, such as inflammation and acidity, while its nourishing qualities benefit all constitutions.",
                description2: "Amla’s role as a tridoshic herb ensures it supports everyone, from those seeking radiant skin to those aiming for robust immunity. Its holistic action makes it a cornerstone of Ayurvedic wellness."
            },
            content: {
                title: "Top Benefits of Amla Tablets",
                description: "Here are the top benefits of Amla tablets, with a focus on daily wellness and specific advantages for hair, skin, and immunity:",
                benefits: [
                    {
                        title: "Strengthens Hair Health",
                        description: "Amla tablets are a natural elixir for hair. Their Vitamin C and tannins strengthen hair follicles, reduce hair loss, and prevent premature graying. Amla also improves scalp health, tackling dandruff and promoting lustrous, voluminous hair."
                    },
                    {
                        title: "Promotes Glowing Skin",
                        description: "Amla’s antioxidants and Vitamin C make it a skin savior. Amla tablets help detoxify the blood, reduce acne, and fade pigmentation. By boosting collagen synthesis, they keep skin elastic and youthful, combating fine lines and dullness."
                    },
                    {
                        title: "Enhances Immunity",
                        description: "Amla’s immune-boosting prowess comes from its high Vitamin C content and polyphenols, which enhance white blood cell activity and protect against oxidative stress. Amla tablets are a daily defense against infections, allergies, and seasonal illnesses."
                    },
                    {
                        title: "Improves Digestion",
                        description: "Amla tablets support a healthy gut by stimulating digestive enzymes and balancing stomach acid. They alleviate bloating, constipation, and indigestion while promoting detoxification, ensuring optimal nutrient absorption."
                    },
                    {
                        title: "Supports Cardiovascular Health",
                        description: "Amla’s flavonoids and antioxidants lower LDL cholesterol and prevent oxidative damage to blood vessels. Amla tablets promote healthy blood pressure and circulation, reducing the risk of heart-related issues"
                    },
                    {
                        title: "Balances Blood Sugar",
                        description: "Amla tablets aid in blood sugar regulation by improving insulin sensitivity and protecting pancreatic function. Their low glycemic index makes them a safe, effective supplement for managing diabetes."
                    },
                    {
                        title: "Detoxifies the Liver",
                        description: "Amla’s hepatoprotective properties help the liver eliminate toxins and regenerate healthy cells. Amla tablets are beneficial for conditions like fatty liver and support overall detoxification."
                    },
                    {
                        title: "Boosts Vision",
                        description: "Amla’s Vitamin A and carotene content protect eye health, reducing the risk of cataracts and macular degeneration. Amla tablets also relieve eye strain, making them ideal for digital-heavy lifestyles."
                    },
                    {
                        title: "Combats Stress",
                        description: "Amla’s adaptogenic qualities help regulate stress hormones, promoting mental clarity and resilience. Amla tablets reduce fatigue and enhance focus, supporting a balanced, energized mind."
                    },
                    {
                        title: "Slows Aging",
                        description: "As a Rasayana, Amla promotes cellular health and longevity. Amla tablets fight free radicals, support tissue repair, and maintain youthful skin, bones, and organs, embodying true anti-aging wellness."
                    },
                ]
            },
            blogImage: "https://cdn.shopify.com/s/files/1/0611/1038/6771/files/Frame_19_c3f7c6a6-7d94-48f8-890c-447aa7dca06c.png?v=1744268773",
            description4: {
                title: "Amplify Your Routine with Spiruswastha’s Amla Powder",
                description1: "Ready to take your wellness to the next level? Pair Amla tablets with Spiruswastha’s premium Amla Powder, crafted from organic Indian gooseberries. Perfect for teas, smoothies, or skincare masks, our Amla Powder is bursting with Vitamin C and antioxidants to supercharge your health.",
                description2: "Order now at spiruswastha.com and embrace the power of Ayurvedic superfoods!"
            },
            howToUse: {
                title: "How to Use Amla Tablets",
                description1: "Amla tablets are versatile and user-friendly. Try these methods:",
                step1: "Daily Dose:",
                step1content: "Swallow 1-2 Amla tablets with water after meals, or as advised by a healthcare professional.",
                step2: "Morning Ritual:",
                step2content: "Take Amla tablets with warm water and honey for a cleansing boost.",
                step3: "On-the-Go:",
                step3content: "Carry Amla tablets for a quick wellness fix during travel or busy days.",
                description2: "Dosage: 1-2 tablets (500-1000 mg) daily is standard. Consult an Ayurvedic practitioner for personalized advice, especially if you have medical conditions or are pregnant."
            },
            description5: {
                title: "Safety and Precautions",
                description: "Amla tablets are safe for most people, but excessive intake may cause loose stools or low blood sugar. Those on blood thinners or diabetic medications should consult a doctor due to Amla’s potential to enhance their effects. Opt for pure, organic Amla tablets, like Spiruswastha’s, to ensure quality and safety."
            },
            description6: {
                title: "Why Spiruswastha’s Amla Tablets?",
                description1: "At Spiruswastha, we prioritize purity and potency. Our Amla tablets are:",
                content: [
                    "100% organic, with no artificial additives.",
                    "Sourced from eco-friendly farms in India.",
                    "Rigorously tested for quality and efficacy.",
                    "Designed for maximum nutrient retention."
                ],
                description2: "Choose Spiruswastha for Ayurvedic products you can trust."
            },
            description7: {
                title: "The Science of Amla",
                description: "Research supports Amla’s traditional benefits. A 2020 study in Nutrients highlighted Amla’s role in reducing oxidative stress and improving heart health. Another in Journal of Clinical Biochemistry and Nutrition confirmed its blood sugar-lowering effects. Amla’s antioxidant properties, noted in Phytotherapy Research, validate its anti-aging and immune-enhancing benefits, aligning ancient wisdom with modern science."
            },
            description8: {
                title: "Amla for Daily Wellness",
                description: "Amla tablets are more than a supplement—they’re a commitment to holistic health. Combine them with a balanced diet, regular movement, and stress-relieving practices like meditation for a life of harmony. Ayurveda teaches balance, and Amla tablets help you achieve it effortlessly."
            },
            conclusion: {
                title: "Conclusion",
                description: "Amla tablets are a shining example of Ayurveda’s timeless wisdom, delivering unparalleled benefits for hair, skin, immunity, and overall wellness. At Spiruswastha, we’re honored to share the transformative power of Amla with you. Visit spiruswastha.com to discover our premium Amla tablets and start your journey to vibrant health today!"
            },
            readAlso: {
                title: "Read Also",
                description: " Top 10 Health Benefits of Giloy Powder You Need to Know"
            }
        },
        {
            slug: "amla-tablets-uses-for-hair-skin-and-immunity",
            title: "Amla Tablets Uses for Hair, Skin, and Immunity",
            image: blogTwo,
            description1: {
                title: "Amla Tablets Uses for Hair, Skin, and Immunity",
                description: "In the realm of Ayurveda, few superfoods shine as brightly as Amla, the Indian gooseberry (Phyllanthus emblica). Revered for centuries as a cornerstone of holistic health, Amla is celebrated for its potent nutritional profile and versatile healing properties. At Spiruswastha, we’re passionate about harnessing the power of Ayurveda to elevate modern wellness, and Amla tablets are one of our flagship offerings. These convenient, nutrient-packed supplements deliver the goodness of Amla in a form that fits seamlessly into your busy lifestyle. In this blog, we’ll explore the myriad uses of Amla tablets, with a focus on their transformative benefits for hair, skin, and immunity, and why they deserve a place in your daily routine.",
            },
            description2: {
                title: "What Are Amla Tablets?",
                description1: "Amla, known as Amalaki in Ayurveda, is a small, green fruit renowned for its tart flavor and exceptional health benefits. Packed with Vitamin C, antioxidants, polyphenols, and essential minerals, Amla is a nutritional powerhouse. Amla tablets are made by drying and processing the fruit into a concentrated form, preserving its bioactive compounds in an easy-to-consume tablet. Unlike fresh Amla, which can be hard to source and prepare, tablets offer convenience without compromising potency.",
                description2: "In Ayurveda, Amla is classified as a Rasayana—a rejuvenative herb that promotes longevity, balances the doshas (Vata, Pitta, Kapha), and nourishes all body tissues. Its cooling energy (Sheeta Virya) and sweet, sour, and astringent tastes make it particularly effective for Pitta-related imbalances, such as skin inflammation and digestive issues."
            },
            description3: {
                title: "Amla in Ayurveda: A Timeless Remedy",
                description1: "Amla holds a sacred place in Ayurvedic texts like the Charaka Samhita and Sushruta Samhita, where it is praised for its ability to enhance vitality, support digestion, and promote radiant health. Known as the “mother of herbs,” Amla is believed to nurture the body like a parent, supporting every system from immunity to cognition. Its high Vitamin C content—up to 20 times that of an orange—makes it a natural immune booster, while its antioxidants combat oxidative stress and aging.",
                description2: "Amla’s tridoshic nature means it benefits all constitutions, making it a universal remedy. Whether you’re seeking stronger hair, glowing skin, or robust immunity, Amla tablets deliver holistic wellness rooted in ancient wisdom."
            },
            content: {
                title: "Key Uses of Amla Tablets",
                description: "Here are the top uses of Amla tablets, with a focus on their benefits for hair, skin, and immunity, alongside other wellness advantages:",
                benefits: [
                    {
                        title: "Promotes Healthy Hair",
                        description: "Amla is a time-honored remedy for hair health. Its rich Vitamin C and antioxidant content nourish hair follicles, strengthen roots, and prevent premature graying. Amla tablets help reduce hair fall, combat dandruff, and promote a healthy scalp by improving blood circulation. Regular use can lead to thicker, shinier hair that radiates vitality."
                    },
                    {
                        title: "Enhances Skin Radiance",
                        description: "Amla’s skin-loving properties make it a go-to for a clear, youthful complexion. Its antioxidants neutralize free radicals, reducing signs of aging like wrinkles and dark spots. Amla tablets purify the blood, alleviate acne, and soothe inflammatory conditions like eczema. The high Vitamin C content also boosts collagen production, keeping skin firm and glowing."
                    },
                    {
                        title: "Boosts Immunity",
                        description: "Amla is a natural immunomodulator, strengthening the body’s defenses against infections. Its Vitamin C enhances white blood cell production, while its polyphenols fight oxidative stress. Amla tablets are especially beneficial during seasonal changes, helping you ward off colds, flu, and other illnesses."
                    },
                    {
                        title: "Supports Digestive Health",
                        description: "Amla tablets stimulate digestive fire (Agni), improving metabolism and nutrient absorption. They help relieve acidity, bloating, and constipation while promoting a healthy gut microbiome. Amla’s cooling properties also soothe ulcers and acid reflux."
                    },
                    {
                        title: "Protects Heart Health",
                        description: "Amla’s antioxidants, particularly flavonoids, support cardiovascular health by reducing cholesterol levels and preventing arterial plaque buildup. Amla tablets help regulate blood pressure and improve circulation, lowering the risk of heart disease."
                    },
                    {
                        title: "Regulates Blood Sugar",
                        description: "For those managing diabetes, Amla tablets can help stabilize blood sugar levels. Their chromium content enhances insulin sensitivity, while antioxidants protect pancreatic cells. Studies show Amla can reduce fasting glucose levels, making it a valuable supplement for diabetic care."
                    },
                    {
                        title: "Enhances Liver Function",
                        description: "Amla’s hepatoprotective properties support liver detoxification and protect against damage from toxins or medications. Amla tablets aid in managing conditions like fatty liver and jaundice, ensuring optimal liver health."
                    },
                    {
                        title: "Improves Eye Health",
                        description: "Rich in Vitamin A and carotene, Amla tablets support vision and protect against age-related eye disorders like cataracts. They also reduce eye strain, making them ideal for those with prolonged screen time."
                    },
                    {
                        title: "Reduces Stress and Fatigue",
                        description: "As an adaptogen, Amla helps the body cope with stress by balancing cortisol levels. Amla tablets boost energy, enhance mental clarity, and combat fatigue, supporting overall vitality."
                    },
                    {
                        title: "Anti-Aging Benefits",
                        description: "Amla’s Rasayana properties promote longevity by protecting cells from oxidative damage. Amla tablets slow aging at the cellular level, supporting healthy skin, strong bones, and vibrant energy well into later years."
                    },
                ]
            },
            description4: {
                title: "Elevate Your Wellness with Spiruswastha’s Amla Powder",
                description1: "While Amla tablets are a fantastic way to enjoy the benefits of this superfood, you can amplify your wellness routine with our premium Amla Powder. Sourced from organic Indian gooseberries, Spiruswastha’s Amla Powder is perfect for smoothies, teas, or DIY face masks. Packed with Vitamin C and antioxidants, it’s a versatile addition to your daily regimen.",
                description2: "Shop now at spiruswastha.com and unlock the full potential of Ayurveda!"
            },
            blogImage: "https://cdn.shopify.com/s/files/1/0611/1038/6771/files/Frame_19_c3f7c6a6-7d94-48f8-890c-447aa7dca06c.png?v=1744268773",
            howToUse: {
                title: "How to Use Amla Tablets",
                description1: "Amla tablets are easy to incorporate into your routine. Here are some tips:",
                step1: "Daily Supplement:",
                step1content: "Take 1-2 Amla tablets with water, preferably after meals, or as directed by an Ayurvedic practitioner.",
                step2: "Morning Boost:",
                step2content: "Pair Amla tablets with a glass of warm water and lemon for a detoxifying start to your day.",
                step3: "Travel-Friendly",
                step3content: "Keep Amla tablets in your bag for on-the-go wellness, especially during travel or flu season.",
                description2: "Dosage: A typical dose is 1-2 tablets (500-1000 mg) daily. Consult a healthcare provider if you’re pregnant, nursing, or taking medications, especially for diabetes or blood pressure."
            },
            description5: {
                title: "Precautions and Side Effects",
                description: "Amla tablets are generally safe, but moderation is key. Overconsumption may cause mild digestive upset or diarrhea due to its high Vitamin C content. Those with low blood sugar or on anticoagulant medications should consult a doctor, as Amla may enhance their effects. Choose high-quality, organic Amla tablets, like those from Spiruswastha, to ensure purity and safety."
            },
            description6: {
                title: "Why Choose Spiruswastha’s Amla Tablets?",
                description1: "At Spiruswastha, we’re committed to authenticity and excellence. Our Amla tablets are:",
                content: [
                    "100% organic, free from additives or fillers.",
                    "Sourced from sustainable farms in India.",
                    "Lab-tested for potency and purity.",
                    "Formulated to retain maximum nutritional value."
                ],
                description2: "With Spiruswastha, you’re choosing a brand that honors Ayurveda’s traditions while delivering modern convenience."
            },
            description7: {
                title: "The Science Behind Amla",
                description: "Modern research validates Amla’s traditional uses. A 2019 study in Food & Function demonstrated Amla’s ability to reduce cholesterol and improve heart health. Another study in Diabetes, Metabolic Syndrome and Obesity showed its efficacy in lowering blood sugar. Amla’s high antioxidant capacity, as noted in Journal of Ethnopharmacology, underscores its anti-aging and immune-boosting benefits. These findings bridge ancient wisdom with contemporary science, making Amla tablets a trusted choice."
            },
            description8: {
                title: "Amla in Daily Life: A Holistic Approach",
                description: "Incorporating Amla tablets into your routine is a step toward balanced living. Pair them with a nutrient-rich diet, regular exercise, and mindfulness practices like yoga for optimal results. Ayurveda teaches that true health comes from harmony, and Amla is a perfect partner in this journey."
            },
            conclusion: {
                title: "Conclusion",
                description: "Amla tablets are a testament to Ayurveda’s enduring wisdom, offering a natural, holistic solution for hair, skin, immunity, and beyond. At Spiruswastha, we’re proud to bring you the finest Amla tablets to support your wellness goals. Ready to experience the transformative power of Amla? Visit spiruswastha.com to explore our range of Ayurvedic products and start your journey to vibrant health today!"
            },
            readAlso: {
                title: "Read Also",
                description: "Giloy in Ayurveda: The Ancient Herb with Modern Benefits"
            }
        },
        {
            slug: "top-10-health-benefits-of-giloy-powder-you-need-to-know",
            title: "Top 10 Health Benefits of Giloy Powder You Need to Know",
            image: blogThree,
            content: {
                title: "Top 10 Health Benefits of Giloy Powder You Need to Know",
                description: "Here are the top 10 reasons why Giloy powder is a must-have in your wellness arsenal:",
                benefits: [
                    {
                        title: "Boosts Immunity",
                        description: "Giloy is often called the “queen of immunity” in Ayurveda. Its immunomodulatory properties help strengthen the body’s defense mechanisms by increasing white blood cell production and enhancing the activity of macrophages (immune cells that fight pathogens). Regular consumption of Giloy powder can help protect against infections, colds, and flu, making it especially valuable in today’s world."
                    },
                    {
                        title: "Manages Fever and Infections",
                        description: "Giloy is a natural antipyretic, meaning it helps reduce fever. It has been traditionally used to treat chronic and recurrent fevers, including dengue, malaria, and typhoid. The herb’s antimicrobial properties also combat bacterial and viral infections, supporting faster recovery."
                    },
                    {
                        title: "Supports Digestive Health",
                        description: "Struggling with indigestion, constipation, or bloating? Giloy powder can help. It stimulates digestive fire (Agni), improves metabolism, and promotes healthy gut flora. By detoxifying the digestive tract, Giloy alleviates issues like acidity and irritable bowel syndrome (IBS)."
                    },
                    {
                        title: "Enhances Liver Function",
                        description: "The liver is the body’s detox powerhouse, and Giloy supports its optimal functioning. Its hepatoprotective properties protect the liver from damage caused by toxins, alcohol, or medications. Giloy powder is often recommended for managing liver disorders like jaundice and fatty liver."
                    },
                    {
                        title: "Promotes Skin Health",
                        description: "Giloy’s antioxidant and anti-inflammatory properties make it a boon for skin health. It helps purify the blood, reduce acne, and combat skin conditions like eczema and psoriasis. Regular use of Giloy powder can give you a natural, radiant glow."
                    },
                    {
                        title: "Regulates Blood Sugar",
                        description: "For those managing diabetes, Giloy powder can be a game-changer. Its hypoglycemic properties help regulate blood sugar levels by improving insulin sensitivity. Studies have shown that Giloy can reduce fasting blood glucose levels, making it a valuable addition to diabetic care."
                    },
                    {
                        title: "Reduces Stress and Anxiety",
                        description: "As an adaptogen, Giloy helps the body cope with stress by balancing cortisol levels. It also supports mental clarity and reduces anxiety, making it ideal for those navigating high-pressure lifestyles. Ayurveda recommends Giloy for improving memory and cognitive function."
                    },
                    {
                        title: "Supports Respiratory Health",
                        description: "Giloy’s anti-inflammatory and expectorant properties make it effective for respiratory issues like asthma, bronchitis, and chronic cough. It clears mucus from the airways, improves lung function, and soothes irritation in the respiratory tract."
                    },
                    {
                        title: "Aids Weight Management",
                        description: "Giloy powder can support healthy weight loss by boosting metabolism and reducing fat accumulation. Its detoxifying properties help eliminate toxins that can hinder weight loss efforts, while its ability to balance blood sugar prevents overeating caused by cravings."
                    },
                    {
                        title: "Anti-Aging Benefits",
                        description: "Rich in antioxidants, Giloy fights free radicals that cause premature aging. It promotes cell regeneration, reduces wrinkles, and keeps skin and organs youthful. In Ayurveda, Giloy’s Rasayana properties are credited with enhancing longevity and vitality."
                    },
                ]
            },
            description4: {
                title: "Boost Your Wellness with Spiruswastha’s Amla Powder",
                description1: "While Giloy powder is a fantastic addition to your routine, pairing it with other Ayurvedic superfoods can amplify your health benefits. At Spiruswastha, we’re proud to offer our premium Amla Powder, sourced from the finest Indian gooseberries. Amla is a potent source of Vitamin C and antioxidants, perfect for boosting immunity, improving skin health, and supporting digestion. Incorporate Amla Powder into your daily smoothies or teas for a holistic wellness boost.",
                description2: "Shop now at spiruswastha.com and discover the power of Ayurveda!"
            },
            blogImage: "https://cdn.shopify.com/s/files/1/0611/1038/6771/files/Frame_19_c3f7c6a6-7d94-48f8-890c-447aa7dca06c.png?v=1744268773",
            howToUse: {
                title: "How to Use Giloy Powder",
                description1: "Giloy powder is incredibly versatile and easy to incorporate into your routine. Here are some popular ways to use it:",
                steps: [
                    {
                        name: "Giloy Tea",
                        description: "Boil 1 teaspoon of Giloy powder in a cup of water for 5-7 minutes. Strain and add honey or lemon for taste.",
                    },
                    {
                        name: "Smoothie Booster",
                        description: "Add ½ teaspoon of Giloy powder to your morning smoothie for an immunity boost.",
                    },
                    {
                        name: "Capsules",
                        description: "If you prefer convenience, take Giloy powder in capsule form as per the recommended dosage.",
                    },
                    {
                        name: "Face Mask",
                        description: "Mix Giloy powder with honey and yogurt for a rejuvenating DIY face mask.",
                    }
                ],
                description2: "Dosage: A typical dose is 1-2 teaspoons daily, but consult an Ayurvedic practitioner for personalized advice, especially if you’re pregnant, nursing, or on medication."
            },
            description5: {
                title: "Precautions and Side Effects",
                description: "While Giloy is generally safe, moderation is key. Overconsumption may lead to low blood sugar or digestive discomfort. Those with autoimmune conditions should consult a doctor, as Giloy’s immune-stimulating properties may exacerbate symptoms. Always choose high-quality, organic Giloy powder, like the one offered by Spiruswastha, to ensure purity and potency."
            },
            description6: {
                title: "Why Choose Spiruswastha’s Giloy Powder?",
                description1: "At Spiruswastha, we’re committed to authenticity and quality. Our Giloy powder is:",
                content: [
                    "100% organic and free from additives or preservatives.",
                    "Sourced from sustainable farms in India.",
                    "Lab-tested for potency and purity.",
                    "Packaged to retain maximum freshness and nutritional value."
                ],
                description2: "We believe in honoring Ayurveda’s traditions while making its benefits accessible to all. When you choose Spiruswastha, you’re choosing wellness rooted in trust and quality."
            },
            description7: {
                title: "The Science Behind Giloy",
                description: "Modern research validates Giloy’s traditional uses. Studies published in journals like the Journal of Ethnopharmacology have highlighted its immunomodulatory, anti-diabetic, and hepatoprotective effects. For instance, a 2017 study demonstrated Giloy’s ability to reduce blood glucose levels in diabetic rats, while another showed its efficacy in boosting antioxidant defenses. These findings bridge the gap between ancient wisdom and contemporary science, making Giloy a trusted remedy for modern health challenges."
            },
            description8: {
                title: "Giloy in Daily Life: A Holistic Approach",
                description: "Incorporating Giloy powder into your routine is more than just a health choice—it’s a lifestyle shift toward balance and vitality. Pair it with a balanced diet, regular exercise, and mindfulness practices like yoga or meditation for optimal results. Ayurveda teaches us that true health comes from harmony, and Giloy is a perfect ally in this journey."
            },
            conclusion: {
                title: "Conclusion",
                description1: "Giloy powder is a testament to Ayurveda’s timeless wisdom, offering a natural, holistic approach to modern health challenges. From boosting immunity and managing diabetes to promoting radiant skin and mental clarity, its benefits are as diverse as they are powerful. At Spiruswastha, we’re honored to bring you the finest Giloy powder to support your wellness journey.",
                description2: "Ready to experience the magic of Giloy? Visit spiruswastha.com to explore our range of Ayurvedic products and start your path to vibrant health today!"
            },
            readAlso: {
                title: "Read Also",
                description: "Giloy in Ayurveda: The Ancient Herb with Modern Benefits"
            }
        }
    ]

    const newData = data.find((item) => item.slug === slug);
    const otherBlogs = data?.filter(blog => blog.slug !== slug);
    const randomBlog = otherBlogs[Math.floor(Math.random() * otherBlogs.length)];

    const currentIndex = data.findIndex(blog => blog.slug === slug);
    const previousBlog = currentIndex > 0 ? data[currentIndex - 1] : null;
    const nextBlog = currentIndex < data.length - 1 ? data[currentIndex + 1] : null;

    // Navigation handlers
    const handlePrevious = () => navigate(`/blog-details/${previousBlog.slug}`);
    const handleNext = () => navigate(`/blog-details/${nextBlog.slug}`);

    return (
        <div className='w-full max-w-[1400px] mx-auto pt-12 px-6'>
            <div>
                <img src={newData?.image} alt="blog new" className='w-full h-full' />
            </div>
            {
                newData?.description1 &&
                <div className='pt-10'>
                    <h2 className='text-4xl font-bold'>{newData?.description1?.title}</h2>
                    <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description1?.description}</p>
                </div>
            }
            {
                newData?.description2 &&
                <div className='pt-6'>
                    <h2 className='text-2xl font-bold'>{newData?.description2?.title}</h2>
                    <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description2?.description1}</p>
                    <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description2?.description2}</p>
                </div>
            }
            {
                newData?.description3 &&
                <div className='pt-6'>
                    <h2 className='text-2xl font-bold'>{newData?.description3?.title}</h2>
                    <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description3?.description1}</p>
                    <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description3?.description2}</p>
                </div>
            }
            <div className='pt-6'>
                <h2 className='text-2xl font-bold'>{newData?.content?.title}</h2>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.content?.description}</p>
                <ol className='list-decimal ms-5'>
                    {
                        newData?.content?.benefits?.map((item, index) => (
                            <li key={index} className='text-xl pt-2'>
                                <h4 className='font-bold'>{item.title}</h4>
                                <p className='text-[18px] text-[#696969] pt-1 leading-[2]'>{item.description}</p>
                            </li>
                        ))
                    }
                </ol>
            </div>
            <div className='pt-7'>
                <img src={newData?.blogImage} alt="blog new" className='h-full pt-6' />
            </div>
            <div className='pt-6'>
                <h2 className='text-3xl font-bold'>{newData?.description4?.title}</h2>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description4?.description1}</p>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description4?.description2}</p>
            </div>
            <div className='pt-10'>
                <h2 className='text-xl font-bold'>{newData?.howToUse?.title}</h2>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.howToUse?.description1}</p>
                <ul className='list-disc ms-5 pt-4 text-[#696969] leading-[2]'>
                    {
                        newData?.howToUse?.steps?.map((item, index) => (
                            <li className='pb-5' key={index}>
                                <p className='text-[18px]'><b>{item.name}</b> {item.description}</p>
                            </li>
                        ))
                    }
                </ul>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.howToUse?.description2}</p>
            </div>
            <div className='pt-6'>
                <h2 className='text-xl font-bold'>{newData?.description5?.title}</h2>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description5?.description}</p>
            </div>
            <div className='pt-6'>
                <h2 className='text-xl font-bold'>{newData?.description6?.title}</h2>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description6?.description1}</p>
                <ul className='list-disc ms-5 pt-4 text-[#696969] leading-[2]'>
                    {
                        newData?.description6?.content?.map((item, index) => (
                            <li className='pb-5' key={index}>
                                <p className='text-[18px]'>{item}</p>
                            </li>
                        ))
                    }
                </ul>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description6?.description2}</p>
            </div>
            <div className='pt-6'>
                <h2 className='text-xl font-bold'>{newData?.description7?.title}</h2>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description7?.description}</p>
            </div>
            <div className='pt-6'>
                <h2 className='text-xl font-bold'>{newData?.description8?.title}</h2>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.description8?.description}</p>
            </div>
            <div className='pt-6'>
                <h2 className='text-xl font-bold'>{newData?.conclusion?.title}</h2>
                <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.conclusion?.description1}</p>
                {newData?.conclusion?.description2 && <p className='text-[18px] text-[#696969] pt-2 leading-[2]'>{newData?.conclusion?.description2}</p>}
            </div>
            <div className='pt-6'>
                <p className='text-[18px] pt-2 leading-[2]'><b className='text-[#696969]'>{newData?.readAlso.title}</b>:-
                    {" "}{randomBlog && <b className='cursor-pointer' onClick={() => navigate(`/blog-details/${randomBlog?.slug}`)}>{randomBlog?.title}</b>}
                </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center py-8 ">
                {previousBlog && (
                    <button
                        onClick={handlePrevious}
                        className="flex items-center gap-2 group hover:opacity-80 transition-opacity px-8"
                        data-tooltip-id="previous" data-tooltip-content={previousBlog?.title}
                    >
                        <svg className="w-6 h-6 hover:text-[#018D43] transition duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}
                <div className='px-8' data-tooltip-id="newsblog" data-tooltip-content={'Back to News'} onClick={() => navigate('/blogs/news')}>
                    <NavigationIcon className="cursor-pointer hover:text-[#018D43] transition duration-500" />
                </div>
                {nextBlog && (
                    <button
                        onClick={handleNext}
                        className="flex items-center gap-2 group hover:opacity-80 transition-opacity px-8"
                        data-tooltip-id="next" data-tooltip-content={nextBlog?.title}
                    >
                        <svg className="w-6 h-6 hover:text-[#018D43] transition duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}
                <Tooltip
                    id="previous"
                    place="top-center"
                    style={{ padding: '5px', fontSize: '13px' }}
                />
                <Tooltip
                    id="next"
                    place="top-center"
                    style={{ padding: '5px', fontSize: '13px' }}
                />
                <Tooltip
                    id="newsblog"
                    place="top-center"
                    style={{ padding: '5px', fontSize: '13px' }}
                />
            </div>
            <div className='pt-5'>
                <Mayalsolike title={"You may also like"} />
            </div>
        </div>
    );
};

export default BlogDetails;
