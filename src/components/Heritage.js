import { useEffect, useState } from "react";
import ExploringData from "./ExploringData";
import "../components/festival.css";
// import slide1 from "../assests/silide1.jpg"


const Festivalscel = () => {
  return (
    <>
    {/* <div className="image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
    </div> */}
    <div className="Heritage Sites">
      <h1>The Heritage Sites of India</h1>
      <ExploringData
        className="first-des"
        heading="Taj Mahal"
        // link="/buddhistwesak"
        text="The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.
        "
        img1="https://static.vecteezy.com/system/resources/previews/030/272/959/large_2x/the-taj-mahal-is-a-famous-mosque-in-india-ai-generated-free-photo.jpg
        "
        img2="https://t3.ftcdn.net/jpg/00/14/92/10/360_F_14921069_eOFw329dVeHFk0jn87B5wQRfY52SDmni.jpg
        "
         />
       <ExploringData
        className="first-des-reverse"
        heading="Red Fort        "
        // link="/sikhismvaisakhi"
        text="The Red Fort Complex was built as the palace fort of Shahjahanabad – the new capital of the fifth Mughal Emperor of India, Shah Jahan. Named for its massive enclosing walls of red sandstone, it is adjacent to an older fort, the Salimgarh, built by Islam Shah Suri in 1546, with which it forms the Red Fort Complex.
        "
        // text="Arunachal Pradesh, situated in the northeastern part of India, holds immense historical significance, primarily due to its strategic location and cultural diversity. The state's border regions have been pivotal in India's historical interactions with Tibet, Bhutan, and Southeast Asia. Arunachal Pradesh's rugged terrain has contributed to its isolation, preserving indigenous cultures and traditions among its various tribes, many of which have origins dating back centuries. The ancient pilgrimage site of Parashuram Kund and the medieval fortresses like Bhismaknagar offer glimpses into the state's historical past. The region also played a role in the centuries-old trade routes connecting India with Tibet and other neighboring regions. Arunachal Pradesh's historical heritage, intertwined with its cultural diversity, continues to be a subject of interest and exploration for historians and archaeologists, offering valuable insights into the broader history of the Indian subcontinent."
        // img1="https://images.unsplash.com/photo-1598429725052-bbd6eca769d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ1bmFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        img1="https://images.nightcafe.studio/jobs/YjJRFj0py5lRa8N0B1gL/YjJRFj0py5lRa8N0B1gL.jpg?tr=w-1600,c-at_max
        "
        img2="https://t3.ftcdn.net/jpg/06/34/72/08/360_F_634720826_Gqc0dvkaaAFLdxZzUtgFc9U9SPcThaz4.jpg
        "
        // img2="https://images.unsplash.com/photo-1600947509785-29fb4e7d1362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ1bmFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
         <ExploringData
        className="first-des"
        heading="charminar "
        // link="/buddhistwesak"
    //     text="Buddhist_Wesak Celebrated on the full moon in May, this is the most important Buddhist holiday. It is celebrated to commemorate the death and birth of Buddha and to remember how the Buddha became enlightened. It is also an opportunity for Buddhists to try to gain their own enlightenment.People celebrate by cleaning and decorating their houses. They also go to temple to worship and bring flowers, candles and food to the monks. They also pour water on the statue of Buddha to remind them to purify their minds of selfishness and maliciousness. They also offer gifts to the Buddha out of admiration for Buddha and Buddhism. The food offered is often vegetarian because Buddhists do not like to kill any living thing."
    //     img2=" https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2020/04/Asalha-Puja-Day-India.jpeg?resize=800%2C600&ssl=1"
    //     img1="https://cdn2.wanderlust.co.uk/media/1061/vesak-day-main-burma.jpg?anchor=center&mode=crop&width=650&height=0&rnd=132022394390000000"
    //   
    text="The four pillars around Charminar represent the four caliphs. These pillars or minars are 48.7 meters high. These are four stories, with each floor divided by intricately carved rings that surround it. On the top floor of Chaminar there is a mosque which is believed to be the oldest mosque of Hyderabad city.
    "
    img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgn6m0jySAs94Jo1S7gKd507ZuvD87wfHXfR1rWXCaPru6VF8qLMtVLhWg9pap74XMMg&usqp=CAU
    "
    img2="https://www.savaari.com/blog/wp-content/uploads/2023/04/Charminar.webp
    "
    />
    
    <ExploringData
        className="first-des-reverse"
        heading="Great Himalayan National Park"
        // text="Bihar holds immense historical significance in the annals of India's past, primarily because of its role as a cradle of ancient Indian civilization. The region was the seat of several influential empires and dynasties, including the Mauryas and Guptas, who played a critical role in shaping the subcontinent's political and cultural landscape. Pataliputra, now modern-day Patna, served as the capital of these empires and was renowned as a thriving center of trade, governance, and learning. Bihar was the birthplace of Lord Mahavira, the 24th Tirthankara of Jainism, and was also closely associated with the life and teachings of Lord Buddha, as it was in Bihar that he attained enlightenment in Bodh Gaya. The state is dotted with numerous historical sites, monasteries, and ancient universities, underscoring its enduring significance in India's heritage and the evolution of its philosophical, religious, and cultural traditions."
        // img1="https://images.unsplash.com/photo-1602308951223-d9cb63de8766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmloYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        // img2="https://images.unsplash.com/photo-1613502046140-a326183a0bae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJpaGFyJTIwZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>
        text="The Great Himalayan National Park (GHNP) is a national park in India, located in Banjar sub-division of Kullu in the state of Himachal Pradesh. The park was established in 1984 and is spread over an area of 1171 km2; elevations within the park range between 1500 and 6000m. 
        
        " img2="https://media-cdn.tripadvisor.com/media/photo-s/0b/9a/28/fe/prime-gateway-to-great.jpg
        "
         img1="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/05/41fbabc6fff68596a93835b4b9fe3517_1000x1000.jpg

         " />
     <ExploringData
        className="first-des"
        heading="Agra Fort         "
        // link="/buddhistwesak"
        text="Agra Fort is a historical fort in the city of Agra in India. It was the main residence of the emperors of the Mughal Dynasty till 1638, when the capital was shifted from Agra to Delhi. The Agra fort is a UNESCO World Heritage site.It is about 2.5 km northwest of its more famous sister monument, the Taj Mahal.
        "
        img2="https://www.shutterstock.com/image-photo/tourists-entrance-agra-fort-uttar-600nw-163061444.jpg
        "
        img1= "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/f7/af.jpg"
      />
    <ExploringData
        className="first-des-reverse"
        heading="Ajanta Caves         "
        // link='/tamilnadu'
        text="Ajanta Caves exemplifies one of the greatest achievements in ancient Buddhist rock-cut architecture. The artistic traditions at Ajanta present an important and rare specimen of art, architecture, painting, and socio-cultural, religious and political history of contemporary society in India.
        "
         img1="https://i0.wp.com/1.bp.blogspot.com/-J-ad_8AT4OI/XL1v9dvscRI/AAAAAAAADeU/17uvb4g0aSAakH6FgSddQERn8NH4hNA8ACKgBGAs/s1600/ajanta-ellora-caves-1-777x437.jpg?ssl=1
         " img2="https://www.onacheaptrip.com/wp-content/uploads/Kailasa-Temple-at-Ellora-Caves-Aurangabad.jpg
         "
        />
     <ExploringData
        className="first-des"
        heading=" Hampi"
        // link="/buddhistwesak"
        text="Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.
        "
        img1="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRjOodQi1X9KjU4A_pSN7rzjntEyhn38JWUbkwF2jAhaatZ5QQnDZNC1BU11ux8WFrW
        "img2="https://t4.ftcdn.net/jpg/03/75/40/73/360_F_375407347_spt4AF5sxsIt9gBIKVzJl95tiQhEGNXy.jpg
        "
      />
    <ExploringData
        className="first-des-reverse"
        heading="Bodh Gaya         "
        // link='/tamilnadu'
        // text="Tamil Nadu's culture is a vibrant tapestry woven with classical arts, music, and dance, exemplified by Bharatanatyam and Carnatic music. Its culinary landscape boasts iconic dishes like dosa and idli, reflecting its diverse gastronomic heritage. Traditional attire, including colorful sarees for women and elegant veshti-dhotis for men, adds to its cultural richness. Festivals such as Pongal and Navaratri bring communities together in joyful celebration, while the Tamil language, one of the world's oldest classical languages, and traditional crafts like Tanjore painting, enrich its cultural legacy, showcasing a blend of ancient traditions and modern vibrancy."
        // img1="https://images.unsplash.com/photo-1546954552-eb2ada4a3654?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="It is situated west of the Phalgu River, a tributary of the Ganges (Ganga) River. Bodh Gaya contains one of the holiest of Buddhist sites: the location where, under the sacred pipal, or Bo tree, Gautama Buddha (Prince Siddhartha) attained enlightenment and became the Buddha.
        "
        img1="https://dynamic-media-cdn.tripadvisor.com/media/daodao/photo-o/15/b8/f2/7c/caption.jpg?w=500&h=400&s=1
        "
        img2="https://indiano.travel/wp-content/uploads/2022/04/A-monk-by-the-Mahabodhi-Buddhist-temple-in-Bodhgaya..jpg" />   
          <ExploringData
        className="first-des"
        heading="Konark Temple "
        // link="/buddhistwesak"
        text="
        It lies on the coast by the Bay of Bengal, 65 kilometres from the capital of the state, Bhubaneswar. It is the site of the 13th-century Sun Temple, also known as the Black Pagoda, built in black granite during the reign of Narasinghadeva-I. The temple is a World Heritage Site"
        img1="https://scontent.fvga5-1.fna.fbcdn.net/v/t1.6435-9/61527290_2328029794191127_7270365843752484864_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AnLcwcAV6CcAX9pbSYN&_nc_ht=scontent.fvga5-1.fna&oh=00_AfAZXIM_VS0LjHjUlyQqYwOinOxht-vOXw0LBDKQ4k6hEg&oe=6614862F"
        img2="https://www.savaari.com/blog/wp-content/uploads/2022/11/Konark-Sun-Temple-Ancient.webp"
      /> 
       {/* <ExploringData
        className="first-des-reverse"
        heading="Uttarayana"
        // link='/tamilnadu'
        text="The festival of Uttarayan marks the day when winter begins to turn into summer, according to the Indian calendar. It is the sign for farmers that the sun is back and that harvest season, Makara Sankranti/Mahasankranti, is approaching. This is considered one of the most important harvest days in India as it also marks the end of winter and the beginning of the harvest season. Many cities in Gujarat organize kite competitions among their citizens.
        "
        img1="https://lh3.googleusercontent.com/proxy/F5iIj9MvCphW8vsJJRbJ801OasmS4kHSYUNUcDaVGtLN6tRiibQ_Kx7hy05_YAIOsHyJctDWVJwzYQ1F8_3FXmbP59Yp3O_x70O5qH8BMqhwxZsW18FgN_wuGBngxNMhybbyqA"
        img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4ReJ90MuHgDn6XCCGOStmO1njURCNLscGy6zw2FnD7zoQISx8tYbsWpH_4NaSoNENT0&usqp=CAU
        "
        />
          <ExploringData
        className="first-des"
        heading="Holi"
        // link="/buddhistwesak"
        text="The festival of Holi is celebrated with great charm and vigor in the state of Jharkhand. The legend of Holika is very much prevalent here. The lighting of bonfire also forms a special feature of the Holi celebrations in Dhanbad. Fun and frolic is also redefined in various forms in the festive celebrations 
        "
        img1="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2019/02/holi-vrindavan.jpg?resize=1024%2C658&ssl=1"
        img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIJGqlIoIPhdz8Mpq9oHVtfoqqRjUDGWs0cEWd_lcUxm1QivzO0MoEVc3uUAhua319SU&usqp=CAU
        "
      /> 
      <ExploringData
        className="first-des-reverse"
        heading="Rakhadumni"
        // link='/tamilnadu'
        text="The Rakhadumni festival is celebrated on the full moon day in the monsoon month of Bhadrapad. During the festival, married women return to their parents' houses to tie rakhi – the sacred thread – on the wrists of their brothers. They are received warmly and given gifts of money and clothes.
        "
        // img1="https://lh3.googleusercontent.com/proxy/F5iIj9MvCphW8vsJJRbJ801OasmS4kHSYUNUcDaVGtLN6tRiibQ_Kx7hy05_YAIOsHyJctDWVJwzYQ1F8_3FXmbP59Yp3O_x70O5qH8BMqhwxZsW18FgN_wuGBngxNMhybbyqA"
        // img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4ReJ90MuHgDn6XCCGOStmO1njURCNLscGy6zw2FnD7zoQISx8tYbsWpH_4NaSoNENT0&usqp=CAU
        // "
        img1="https://i.pinimg.com/736x/eb/e7/ea/ebe7ea4992fc2fcba112628def96f257.jpg
        "
        img2="https://cdn1.tripoto.com/media/filter/tst/img/395815/Image/1656175634_218760482_4129302433823739_5809657385875561045_n.jpg.webp
        "
        />
          <ExploringData
        className="first-des"
        heading="Har Navami"
        // link="/buddhistwesak"
        text="The All Goa State Level Mando Festival has five categories – Children, Teenagers, Original, Traditional and Dance categories. A mando dance takes about 8-12 minutes. In 2022, in the Dance Category, there was just one performance at the Mando Festival. This time, there are six entries.
        "
        img1="https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2022/07/page12.jpg"
        img2="https://www.honeymoonbug.com/blog/wp-content/uploads/2023/03/lohri-festival-in-kashmir.jpg
        "
      /> 
       <ExploringData
        className="first-des-reverse"
        heading="Onam"
        // link='/tamilnadu'
        text=
        "The festival of Onam is celebrated throughout the state of Kerala. Kerala during Onam is marked by happiness, excitement and enjoyment among all sections of people. Onam is celebrated as an outcome of reasons that have to do with mythology as well as old agrarian practices. If one is to go by the myth, then King Mahabali or Maveli was a generous and virtuous ruler, who had once ruled Kerala. "
        
        img1="https://www.tourmyindia.com/blog/wp-content/uploads/2021/08/Onam-Festival-Kerala-Feature.jpg
        "
        img2="https://images.livemint.com/img/2022/08/31/original/PTI08-30-2022-000142B-0_1661919160073_1661919160073.jpg"
        />
       */}
    </div>
    </>
    
  );
};

export default Festivalscel;