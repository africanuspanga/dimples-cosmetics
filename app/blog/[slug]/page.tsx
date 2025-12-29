"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { useLanguage } from "@/context/language-context"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogContent: Record<
  string,
  {
    image: string
    titleEn: string
    titleSw: string
    date: string
    readTime: string
    category: string
    contentEn: string[]
    contentSw: string[]
    metaDescription: string
  }
> = {
  "morning-skincare-routine": {
    image: "/images/blog/whitening-cream.jpeg",
    titleEn: "5 Essential Steps for Your Morning Skincare Routine",
    titleSw: "Hatua 5 Muhimu za Utaratibu Wako wa Asubuhi wa Ngozi",
    date: "Dec 20, 2025",
    readTime: "5 min",
    category: "Skincare Tips",
    metaDescription:
      "Discover the 5 essential morning skincare steps for glowing, healthy skin. Expert tips from Dimples Cosmetics Tanzania for radiant African beauty.",
    contentEn: [
      "A consistent morning skincare routine is the foundation of healthy, glowing skin. At Dimples Cosmetics, we believe that every woman deserves to start her day feeling confident and beautiful. Here are the five essential steps that will transform your morning skincare routine and give you that radiant glow all day long.",

      "**Step 1: Gentle Cleansing**\n\nStart your morning with a gentle cleanser to remove any overnight buildup of oils and impurities. Our La Purrona Amino Acid Cleanser is perfect for this - it's gentle enough for daily use yet effective at removing debris without stripping your skin's natural moisture. Massage it onto damp skin in circular motions for about 60 seconds, then rinse with lukewarm water.",

      "**Step 2: Toning**\n\nToning is a crucial step that many people skip. A good toner balances your skin's pH levels and prepares it to better absorb the products that follow. Look for alcohol-free toners with hydrating ingredients like hyaluronic acid or rose water. Pat the toner gently onto your skin using your fingertips or a cotton pad.",

      "**Step 3: Serum Application**\n\nSerums are concentrated treatments that target specific skin concerns. For morning use, we recommend vitamin C serums as they provide antioxidant protection against environmental damage and help brighten your complexion. Apply a few drops to your face and neck, gently pressing it into your skin.",

      "**Step 4: Moisturizing**\n\nHydration is key to maintaining healthy, supple skin. Even if you have oily skin, don't skip this step - just choose a lightweight, oil-free moisturizer. Our La Purrona Body Cream is enriched with natural ingredients that lock in moisture and keep your skin soft throughout the day. Apply it while your skin is still slightly damp from the serum to seal in hydration.",

      "**Step 5: Sun Protection**\n\nThis is perhaps the most important step in any morning skincare routine. UV rays cause premature aging, dark spots, and can lead to more serious skin concerns. Apply a broad-spectrum sunscreen with at least SPF 30 as the final step in your routine, even on cloudy days. Wait a few minutes before applying makeup to allow it to fully absorb.",

      "**Bonus Tips for Radiant Skin**\n\n- Drink a glass of water first thing in the morning to hydrate from within\n- Get enough sleep - your skin repairs itself while you rest\n- Eat a balanced diet rich in fruits, vegetables, and healthy fats\n- Be consistent with your routine - results take time\n\nAt Dimples Cosmetics, we're committed to helping you achieve your best skin. Visit our stores in Dar es Salaam, Arusha, or Zanzibar to discover our full range of premium skincare products, or order via WhatsApp for convenient delivery anywhere in Tanzania and worldwide.",
    ],
    contentSw: [
      "Utaratibu thabiti wa utunzaji wa ngozi asubuhi ni msingi wa ngozi yenye afya na inayong'ara. Katika Dimples Cosmetics, tunaamini kuwa kila mwanamke anastahili kuanza siku yake akijisikia na kujiamini na mzuri. Hapa kuna hatua tano muhimu ambazo zitabadilisha utaratibu wako wa asubuhi wa ngozi na kukupa mng'ao huo mzuri mchana kutwa.",

      "**Hatua ya 1: Usafishaji Mpole**\n\nAnza asubuhi yako na kisafishaji mpole kuondoa mafuta na uchafu wowote uliojilimbikiza usiku. La Purrona Amino Acid Cleanser yetu ni bora kwa hili - ni mpole wa kutosha kwa matumizi ya kila siku lakini inafanya kazi katika kuondoa uchafu bila kuondoa unyevu wa asili wa ngozi yako.",

      "**Hatua ya 2: Kutia Tona**\n\nKutia tona ni hatua muhimu ambayo watu wengi wanairuka. Tona nzuri inasawazisha viwango vya pH ya ngozi yako na kuiandaa kunyonya vizuri bidhaa zinazofuata. Tafuta tona zisizo na pombe zenye viungo vya unyevu kama hyaluronic acid au maji ya waridi.",

      "**Hatua ya 3: Kuweka Seramu**\n\nSeramu ni matibabu yaliyokolea yanayolenga matatizo maalum ya ngozi. Kwa matumizi ya asubuhi, tunapendekeza seramu za vitamin C kwani zinatoa ulinzi wa antioxidant dhidi ya uharibifu wa mazingira na kusaidia kung'arisha uso wako.",

      "**Hatua ya 4: Kutia Unyevu**\n\nUnyevu ni muhimu kwa kudumisha ngozi yenye afya na laini. Hata kama una ngozi ya mafuta, usiruke hatua hii - chagua tu moisturizer nyepesi, isiyo na mafuta. La Purrona Body Cream yetu imeongezewa viungo vya asili vinavyofunga unyevu.",

      "**Hatua ya 5: Ulinzi wa Jua**\n\nHii labda ni hatua muhimu zaidi katika utaratibu wowote wa ngozi wa asubuhi. Miale ya UV husababisha kuzeeka mapema, madoa meusi, na inaweza kusababisha matatizo makubwa zaidi ya ngozi. Weka sunscreen ya SPF 30 au zaidi kama hatua ya mwisho.",

      "Katika Dimples Cosmetics, tumejitolea kukusaidia kupata ngozi yako bora. Tembelea maduka yetu Dar es Salaam, Arusha, au Zanzibar kugundua bidhaa zetu zote za ngozi za ubora, au agiza kupitia WhatsApp kwa usambazaji rahisi popote Tanzania na duniani kote.",
    ],
  },
  "natural-ingredients-skincare": {
    image: "/images/blog/glowing-skin.jpg",
    titleEn: "The Power of Natural Ingredients in Skincare",
    titleSw: "Nguvu ya Viungo vya Asili katika Utunzaji wa Ngozi",
    date: "Dec 15, 2025",
    readTime: "7 min",
    category: "Ingredients",
    metaDescription:
      "Learn about the power of natural skincare ingredients for beautiful, healthy skin. Discover organic beauty secrets from Tanzania's leading cosmetics brand.",
    contentEn: [
      "In today's world of countless skincare products, natural ingredients have emerged as the gold standard for achieving healthy, radiant skin. At Dimples Cosmetics, we believe in harnessing the power of nature to deliver effective, safe skincare solutions. Here's why natural ingredients matter and how they can transform your beauty routine.",

      "**Why Choose Natural Ingredients?**\n\nNatural skincare ingredients are derived from plants, minerals, and other organic sources. Unlike synthetic chemicals, they work in harmony with your skin's natural processes, reducing the risk of irritation and adverse reactions. Many natural ingredients have been used for centuries in traditional beauty practices across Africa and around the world.",

      "**Key Natural Ingredients for Glowing Skin**\n\n**Shea Butter**: This rich, nourishing butter from the shea tree is a staple in African skincare. It's packed with vitamins A, E, and F, providing intense hydration and helping to repair damaged skin. Shea butter is excellent for treating dry skin, reducing inflammation, and improving skin elasticity.",

      "**Aloe Vera**: Known as the 'plant of immortality' by ancient Egyptians, aloe vera is a powerhouse of hydration and healing. It soothes irritated skin, accelerates wound healing, and provides a protective barrier against environmental damage.",

      "**Coconut Oil**: This versatile oil is rich in lauric acid, which has antimicrobial properties. It deeply moisturizes the skin, helps strengthen the skin barrier, and can even help reduce the appearance of scars and stretch marks.",

      "**Vitamin C**: Found naturally in citrus fruits, vitamin C is a potent antioxidant that brightens the skin, fades dark spots, and stimulates collagen production. It's essential for achieving that coveted glow and fighting signs of aging.",

      "**Green Tea Extract**: Loaded with antioxidants called catechins, green tea extract helps protect the skin from sun damage, reduces inflammation, and can help with acne-prone skin.",

      "**The Dimples Cosmetics Difference**\n\nAt Dimples Cosmetics, we carefully select and source the finest natural ingredients for our products. Our La Purrona skincare line combines traditional African beauty wisdom with modern formulation techniques to deliver products that are both effective and gentle on your skin.",

      "**How to Incorporate Natural Skincare into Your Routine**\n\n1. Start by reading ingredient labels - look for products where natural ingredients are listed first\n2. Introduce one new product at a time to see how your skin responds\n3. Be patient - natural ingredients often work more gradually but with lasting results\n4. Store natural products properly, as they may have shorter shelf lives than synthetic alternatives\n\nVisit Dimples Cosmetics stores in Dar es Salaam, Arusha, or Zanzibar to explore our range of natural skincare products. Our expert staff can help you find the perfect products for your skin type and concerns.",
    ],
    contentSw: [
      "Katika ulimwengu wa leo wa bidhaa nyingi za ngozi, viungo vya asili vimejitokeza kuwa kiwango cha dhahabu cha kupata ngozi yenye afya na inayong'ara. Katika Dimples Cosmetics, tunaamini katika kutumia nguvu ya asili kutoa suluhisho za ngozi zinazofanya kazi na salama.",

      "**Kwa Nini Uchague Viungo vya Asili?**\n\nViungo vya asili vya ngozi vinatokana na mimea, madini, na vyanzo vingine vya kikaboni. Tofauti na kemikali za bandia, vinafanya kazi kwa pamoja na michakato ya asili ya ngozi yako, kupunguza hatari ya kuwasha na athari mbaya.",

      "**Viungo Muhimu vya Asili kwa Ngozi Inayong'ara**\n\n**Siagi ya Shea**: Siagi hii tajiri, yenye lishe kutoka kwa mti wa shea ni muhimu katika utunzaji wa ngozi wa Afrika. Imejaa vitamini A, E, na F, ikitoa unyevu mkubwa na kusaidia kurekebisha ngozi iliyoharibiwa.",

      "**Aloe Vera**: Inajulikana kama 'mmea wa kutokufa' na Wamisri wa kale, aloe vera ni nguvu ya unyevu na uponyaji. Inatuliza ngozi iliyokasirika na kutoa kizuizi cha ulinzi dhidi ya uharibifu wa mazingira.",

      "**Mafuta ya Nazi**: Mafuta haya yenye matumizi mengi yana lauric acid, ambayo ina mali ya antimicrobial. Inatia unyevu ngozi kwa kina na kusaidia kuimarisha kizuizi cha ngozi.",

      "**Vitamin C**: Inapatikana kwa asili katika matunda ya machungwa, vitamin C ni antioxidant yenye nguvu inayong'arisha ngozi, kupunguza madoa meusi, na kuchochea uzalishaji wa collagen.",

      "**Tofauti ya Dimples Cosmetics**\n\nKatika Dimples Cosmetics, tunachagua kwa makini na kupata viungo bora vya asili kwa bidhaa zetu. Mstari wetu wa La Purrona unachanganya hekima ya urembo wa jadi wa Afrika na mbinu za kisasa za kutengeneza.",

      "Tembelea maduka ya Dimples Cosmetics Dar es Salaam, Arusha, au Zanzibar kuchunguza bidhaa zetu za ngozi za asili. Wafanyakazi wetu wataalam wanaweza kukusaidia kupata bidhaa bora kwa aina yako ya ngozi.",
    ],
  },
  "african-beauty-melanin-skin": {
    image: "/images/blog/body-care.jpg",
    titleEn: "Celebrating African Beauty: Skincare for Melanin-Rich Skin",
    titleSw: "Kusherehekea Uzuri wa Afrika: Utunzaji wa Ngozi yenye Melanini",
    date: "Dec 10, 2025",
    readTime: "6 min",
    category: "Beauty",
    metaDescription:
      "Expert skincare tips for melanin-rich African skin. Discover the best products and routines for beautiful, healthy dark skin from Dimples Cosmetics Tanzania.",
    contentEn: [
      "Melanin-rich skin is beautiful, resilient, and unique. At Dimples Cosmetics, we celebrate the diverse beauty of African skin and understand that it requires specialized care to look and feel its best. This guide will help you understand your skin's unique needs and how to create a skincare routine that enhances your natural beauty.",

      "**Understanding Melanin-Rich Skin**\n\nMelanin is the pigment that gives our skin its color. While higher melanin levels provide natural sun protection and slower signs of aging, melanin-rich skin also has specific characteristics that require attention:\n\n- Greater tendency toward hyperpigmentation and uneven skin tone\n- More visible scarring from acne or injuries\n- Increased sensitivity to certain skincare ingredients\n- Tendency toward dryness, especially in certain climates\n- Unique concerns like keloid scarring",

      "**Common Skincare Concerns and Solutions**\n\n**Hyperpigmentation**: Dark spots and uneven skin tone are common concerns. Look for products with vitamin C, niacinamide, or alpha arbutin to help brighten and even out your complexion. Our La Purrona Whitening Face Cream is formulated specifically to address these concerns safely and effectively.",

      "**Dryness and Ashy Skin**: Melanin-rich skin can appear 'ashy' when dry. Regular moisturizing is essential. Use rich, nourishing creams and body butters that contain ingredients like shea butter, cocoa butter, or natural oils. Our La Purrona Body Cream provides deep, lasting hydration.",

      "**Acne and Scarring**: Post-inflammatory hyperpigmentation (dark marks left after acne) is more common in darker skin tones. Gentle, consistent skincare is key. Avoid harsh products that can cause inflammation and make hyperpigmentation worse.",

      "**Building Your Skincare Routine**\n\n**Morning Routine**:\n1. Cleanse with a gentle, hydrating cleanser\n2. Apply a vitamin C serum for brightness and protection\n3. Moisturize with a lightweight lotion\n4. Always use sunscreen (yes, melanin-rich skin needs sun protection too!)\n\n**Evening Routine**:\n1. Double cleanse to remove makeup and sunscreen\n2. Use a toner to balance your skin\n3. Apply treatment products (retinol, acids) if using\n4. Seal everything in with a rich night cream",

      "**Ingredients to Embrace**\n\n- Vitamin C - for brightening and antioxidant protection\n- Niacinamide - helps with hyperpigmentation and oil control\n- Hyaluronic acid - provides intense hydration\n- Shea butter - deeply nourishing and protective\n- Glycolic acid - gentle exfoliation for glowing skin",

      "**Ingredients to Use with Caution**\n\n- Hydroquinone - can cause ochronosis with long-term use\n- High concentrations of acids - can cause irritation and hyperpigmentation\n- Harsh physical scrubs - can damage the skin barrier\n\n**Embrace Your Natural Beauty**\n\nAt Dimples Cosmetics, we believe in enhancing your natural beauty, not changing it. Our products are designed to help you achieve healthy, glowing skin that celebrates your unique melanin-rich complexion. Visit us in Dar es Salaam, Arusha, or Zanzibar to discover products perfect for your skin.",
    ],
    contentSw: [
      "Ngozi yenye melanini nyingi ni nzuri, imara, na ya kipekee. Katika Dimples Cosmetics, tunasherehekea uzuri tofauti wa ngozi ya Afrika na tunaelewa kuwa inahitaji utunzaji maalum ili kuonekana na kujisikia vizuri zaidi.",

      "**Kuelewa Ngozi yenye Melanini Nyingi**\n\nMelanini ni rangi inayoipa ngozi yetu rangi yake. Ingawa viwango vya juu vya melanini vinatoa ulinzi wa asili wa jua na dalili za polepole za kuzeeka, ngozi yenye melanini nyingi pia ina sifa maalum:\n\n- Uwezekano mkubwa wa hyperpigmentation\n- Makovu yanayoonekana zaidi kutokana na chunusi\n- Usikivu mkubwa kwa viungo fulani vya ngozi\n- Uwezekano wa ukavu",

      "**Matatizo ya Kawaida ya Ngozi na Suluhisho**\n\n**Hyperpigmentation**: Madoa meusi na rangi isiyo sawa ya ngozi ni matatizo ya kawaida. Tafuta bidhaa zenye vitamin C, niacinamide, au alpha arbutin kusaidia kung'arisha. La Purrona Whitening Face Cream yetu imetengenezwa mahususi kushughulikia matatizo haya kwa usalama.",

      "**Ukavu wa Ngozi**: Ngozi yenye melanini nyingi inaweza kuonekana 'kijivu' ikikiwa kavu. Kutia unyevu mara kwa mara ni muhimu. Tumia krimu tajiri na siagi za mwili zenye viungo kama siagi ya shea au mafuta ya asili.",

      "**Chunusi na Makovu**: Post-inflammatory hyperpigmentation ni ya kawaida zaidi katika rangi za ngozi nyeusi. Utunzaji mpole na thabiti wa ngozi ni muhimu.",

      "**Kujenga Utaratibu Wako wa Ngozi**\n\n**Utaratibu wa Asubuhi**:\n1. Safisha na kisafishaji mpole\n2. Weka seramu ya vitamin C\n3. Tia unyevu na lotion nyepesi\n4. Tumia sunscreen daima\n\n**Utaratibu wa Jioni**:\n1. Safisha mara mbili kuondoa vipodozi\n2. Tumia toner kusawazisha ngozi yako\n3. Weka bidhaa za matibabu\n4. Funga kila kitu na krimu ya usiku",

      "**Kumbatia Uzuri Wako wa Asili**\n\nKatika Dimples Cosmetics, tunaamini katika kuongeza uzuri wako wa asili, si kuubadilisha. Bidhaa zetu zimeundwa kukusaidia kupata ngozi yenye afya, inayong'ara. Tembelea Dar es Salaam, Arusha, au Zanzibar kugundua bidhaa bora kwa ngozi yako.",
    ],
  },
  "anti-aging-retinol-serum": {
    image: "/images/blog/retinol-serum.jpeg",
    titleEn: "Anti-Aging Secrets: The Benefits of Retinol Serum",
    titleSw: "Siri za Kupambana na Uzee: Faida za Retinol Serum",
    date: "Dec 5, 2025",
    readTime: "4 min",
    category: "Anti-Aging",
    metaDescription:
      "Discover the anti-aging benefits of retinol serum for youthful, radiant skin. Expert tips from Dimples Cosmetics on using retinol safely for all skin types.",
    contentEn: [
      "Retinol is often called the gold standard of anti-aging skincare, and for good reason. This powerful vitamin A derivative has decades of scientific research backing its effectiveness in reducing wrinkles, improving skin texture, and promoting a youthful complexion. At Dimples Cosmetics, we're excited to share everything you need to know about incorporating retinol into your skincare routine.",

      "**What is Retinol?**\n\nRetinol is a form of vitamin A that works at the cellular level to accelerate skin renewal and collagen production. When applied to the skin, it converts to retinoic acid, which communicates with skin cells to behave more 'youthfully.' This results in smoother, firmer, and more radiant skin over time.",

      "**Benefits of Retinol Serum**\n\n**Reduces Fine Lines and Wrinkles**: By stimulating collagen production, retinol helps plump the skin and smooth out fine lines and wrinkles, particularly around the eyes and forehead.\n\n**Improves Skin Texture**: Regular use of retinol promotes cell turnover, revealing fresher, smoother skin beneath the surface. This helps with rough texture, enlarged pores, and overall skin quality.\n\n**Fades Dark Spots and Hyperpigmentation**: Retinol inhibits melanin production and speeds up cell turnover, helping to fade age spots, sun damage, and post-acne marks.\n\n**Clears Acne**: Retinol helps unclog pores and reduce oil production, making it effective for treating and preventing acne breakouts.\n\n**Evens Skin Tone**: With consistent use, retinol helps create a more uniform, radiant complexion.",

      "**How to Use Retinol Safely**\n\nRetinol is powerful, and it's important to introduce it gradually to avoid irritation:\n\n1. **Start Slow**: Begin with a low concentration (0.25-0.5%) and use only 2-3 times per week\n2. **Apply at Night**: Retinol makes skin more sensitive to sunlight, so it's best used in your evening routine\n3. **Wait Before Applying**: Apply retinol to completely dry skin, at least 20 minutes after cleansing\n4. **Moisturize**: Follow with a rich moisturizer to combat any dryness\n5. **Use Sunscreen**: Always wear SPF 30+ during the day when using retinol\n6. **Be Patient**: Results typically take 4-12 weeks to become visible",

      "**Who Should Use Retinol?**\n\nRetinol can benefit most skin types, but it's particularly effective for:\n- Those concerned with signs of aging\n- People with acne-prone skin\n- Anyone looking to improve skin texture\n- Those dealing with hyperpigmentation\n\n**Precautions**\n\n- Pregnant or breastfeeding women should avoid retinol\n- Those with very sensitive skin should consult a dermatologist first\n- Don't use retinol with other strong actives like AHAs/BHAs initially\n\n**The La Purrona Retinol Serum**\n\nOur La Purrona Retinol Serum is specially formulated for all skin types, including melanin-rich skin. It combines retinol with soothing and hydrating ingredients to minimize irritation while delivering powerful anti-aging benefits.\n\nVisit Dimples Cosmetics stores in Dar es Salaam, Arusha, or Zanzibar to discover our La Purrona skincare range and get personalized advice from our beauty experts.",
    ],
    contentSw: [
      "Retinol mara nyingi huitwa kiwango cha dhahabu cha utunzaji wa ngozi wa kupambana na uzee, na kwa sababu nzuri. Derivative hii yenye nguvu ya vitamin A ina miongo kadhaa ya utafiti wa kisayansi unaounga mkono ufanisi wake katika kupunguza mikunjo na kuboresha texture ya ngozi.",

      "**Retinol ni Nini?**\n\nRetinol ni aina ya vitamin A inayofanya kazi katika ngazi ya seli kuharakisha upya wa ngozi na uzalishaji wa collagen. Inapowekwa kwenye ngozi, inabadilika kuwa retinoic acid, ambayo inawasiliana na seli za ngozi kufanya kazi kwa 'ujana' zaidi.",

      "**Faida za Retinol Serum**\n\n**Inapunguza Mistari Midogo na Mikunjo**: Kwa kuchochea uzalishaji wa collagen, retinol husaidia kujaza ngozi na kulaini mistari midogo na mikunjo.\n\n**Inaboresha Texture ya Ngozi**: Matumizi ya mara kwa mara ya retinol yanakuza mzunguko wa seli, kufunua ngozi mpya, laini zaidi chini ya uso.\n\n**Inapunguza Madoa Meusi**: Retinol inazuia uzalishaji wa melanini na kuharakisha mzunguko wa seli, kusaidia kupunguza madoa ya umri na uharibifu wa jua.",

      "**Jinsi ya Kutumia Retinol kwa Usalama**\n\n1. **Anza Polepole**: Anza na mkusanyiko mdogo na tumia mara 2-3 tu kwa wiki\n2. **Weka Usiku**: Retinol inafanya ngozi kuwa nyeti zaidi kwa jua\n3. **Subiri Kabla ya Kuweka**: Weka retinol kwenye ngozi kavu kabisa\n4. **Tia Unyevu**: Fuata na moisturizer tajiri kupambana na ukavu wowote\n5. **Tumia Sunscreen**: Vaa SPF 30+ wakati wa mchana\n6. **Kuwa na Subira**: Matokeo kwa kawaida huchukua wiki 4-12 kuonekana",

      "**Nani Anapaswa Kutumia Retinol?**\n\nRetinol inaweza kunufaisha aina nyingi za ngozi, lakini inafanya kazi hasa kwa:\n- Wale wanaohangaika na dalili za kuzeeka\n- Watu wenye ngozi inayopata chunusi\n- Mtu yeyote anayetaka kuboresha texture ya ngozi\n\n**La Purrona Retinol Serum**\n\nLa Purrona Retinol Serum yetu imetengenezwa maalum kwa aina zote za ngozi, ikiwa ni pamoja na ngozi yenye melanini nyingi. Inachanganya retinol na viungo vya kutuliza na unyevu kupunguza kuwasha huku ikitoa faida zenye nguvu za kupambana na uzee.\n\nTembelea maduka ya Dimples Cosmetics Dar es Salaam, Arusha, au Zanzibar kugundua bidhaa zetu za La Purrona.",
    ],
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const { language } = useLanguage()
  const slug = params.slug as string
  const post = blogContent[slug]

  if (!post) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const content = language === "en" ? post.contentEn : post.contentSw
  const title = language === "en" ? post.titleEn : post.titleSw

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 lg:pt-32">
        <div className="relative h-[50vh] lg:h-[60vh]">
          <Image src={post.image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-primary font-[family-name:var(--font-montserrat)] text-sm mb-8 hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "en" ? "Back to Blog" : "Rudi Blogu"}
            </Link>

            {/* Category */}
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-[family-name:var(--font-montserrat)] uppercase tracking-wider mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-serif font-light mb-6 leading-tight">{title}</h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 font-[family-name:var(--font-montserrat)] mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} {language === "en" ? "read" : "kusoma"}
              </span>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {content.map((paragraph, index) => (
                <div key={index} className="mb-6">
                  {paragraph.split("\n\n").map((block, blockIndex) => {
                    if (block.startsWith("**") && block.includes("**\n")) {
                      const [heading, ...rest] = block.split("\n")
                      const headingText = heading.replace(/\*\*/g, "")
                      return (
                        <div key={blockIndex} className="mb-4">
                          <h2 className="text-2xl font-serif font-medium text-foreground mb-3">{headingText}</h2>
                          <p className="text-foreground/80 font-[family-name:var(--font-montserrat)] leading-relaxed whitespace-pre-line">
                            {rest.join("\n")}
                          </p>
                        </div>
                      )
                    } else if (block.startsWith("**")) {
                      const headingText = block.replace(/\*\*/g, "")
                      return (
                        <h2 key={blockIndex} className="text-2xl font-serif font-medium text-foreground mb-3 mt-8">
                          {headingText}
                        </h2>
                      )
                    } else if (block.startsWith("- ")) {
                      const items = block.split("\n").filter((item) => item.startsWith("- "))
                      return (
                        <ul
                          key={blockIndex}
                          className="list-disc list-inside space-y-2 text-foreground/80 font-[family-name:var(--font-montserrat)] mb-4"
                        >
                          {items.map((item, i) => (
                            <li key={i}>{item.replace("- ", "")}</li>
                          ))}
                        </ul>
                      )
                    } else if (block.match(/^\d\./)) {
                      const items = block.split("\n").filter((item) => item.match(/^\d\./))
                      return (
                        <ol
                          key={blockIndex}
                          className="list-decimal list-inside space-y-2 text-foreground/80 font-[family-name:var(--font-montserrat)] mb-4"
                        >
                          {items.map((item, i) => (
                            <li key={i}>{item.replace(/^\d\.\s*/, "")}</li>
                          ))}
                        </ol>
                      )
                    }
                    return (
                      <p
                        key={blockIndex}
                        className="text-foreground/80 font-[family-name:var(--font-montserrat)] leading-relaxed mb-4"
                      >
                        {block}
                      </p>
                    )
                  })}
                </div>
              ))}
            </article>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-foreground/60 font-[family-name:var(--font-montserrat)] text-sm">
                  {language === "en" ? "Share this article:" : "Shiriki makala hii:"}
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                    <Link
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                      target="_blank"
                    >
                      <Facebook className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                    <Link
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(title)}`}
                      target="_blank"
                    >
                      <Twitter className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                    <Link
                      href={`https://wa.me/?text=${encodeURIComponent(title + " " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                      target="_blank"
                    >
                      <Share2 className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
