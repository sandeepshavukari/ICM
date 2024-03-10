import { useEffect, useState } from "react";
import ExploringData from "./ExploringData";
import "../components/festival.css";
import slide1 from "../assests/silide1.jpg"


const Festivalscel = () => {
  return (
    <>
    {/* <div className="image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
    </div> */}
    <div className="Festivals">
      <h1>The Festivals captarization</h1>
      <ExploringData
        className="first-des"
        heading="Buddhist Wesak"
        // link="/buddhistwesak"
        text="Buddhist_Wesak Celebrated on the full moon in May, this is the most important Buddhist holiday. It is celebrated to commemorate the death and birth of Buddha and to remember how the Buddha became enlightened. It is also an opportunity for Buddhists to try to gain their own enlightenment.People celebrate by cleaning and decorating their houses. They also go to temple to worship and bring flowers, candles and food to the monks. They also pour water on the statue of Buddha to remind them to purify their minds of selfishness and maliciousness. They also offer gifts to the Buddha out of admiration for Buddha and Buddhism. The food offered is often vegetarian because Buddhists do not like to kill any living thing."
        img2=" https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2020/04/Asalha-Puja-Day-India.jpeg?resize=800%2C600&ssl=1"
        img1="https://cdn2.wanderlust.co.uk/media/1061/vesak-day-main-burma.jpg?anchor=center&mode=crop&width=650&height=0&rnd=132022394390000000"
      />
       <ExploringData
        className="first-des-reverse"
        heading="Sikhism Vaisakhi"
        // link="/sikhismvaisakhi"
        text="Vaisakhi (sometimes spelled Baisakhi) is traditionally beginning of the harvest season in India. Typically falling on April 13, the day also marks beginning of the Sikh Nanakshahi solar calendar. Since 1699, it has also been recognised as the origin of the Khalsa or commemoration of the beginning of Sikhism – hence Khalsa Day – that further added to the reverence and fervor of the festival.According to Statcan, Canada is home to over 450,000 people of Sikh faith, mainly concentrated in the Greater Toronto and Vancouver Metropolitan areas. The community celebrates Vaisakhi with much zeal and is driven by their pride and enthusiasm for sharing their rich culture and history."
        // text="Arunachal Pradesh, situated in the northeastern part of India, holds immense historical significance, primarily due to its strategic location and cultural diversity. The state's border regions have been pivotal in India's historical interactions with Tibet, Bhutan, and Southeast Asia. Arunachal Pradesh's rugged terrain has contributed to its isolation, preserving indigenous cultures and traditions among its various tribes, many of which have origins dating back centuries. The ancient pilgrimage site of Parashuram Kund and the medieval fortresses like Bhismaknagar offer glimpses into the state's historical past. The region also played a role in the centuries-old trade routes connecting India with Tibet and other neighboring regions. Arunachal Pradesh's historical heritage, intertwined with its cultural diversity, continues to be a subject of interest and exploration for historians and archaeologists, offering valuable insights into the broader history of the Indian subcontinent."
        // img1="https://images.unsplash.com/photo-1598429725052-bbd6eca769d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ1bmFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        img1="https://focuscomms.com/wp-content/uploads/160218-Vaisakhi-Celebrating-the-Sikh-New-Year-IMG01-v1.jpg"
        img2="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Handsworth_Vaisakhi.jpg/800px-Handsworth_Vaisakhi.jpg
        "
        // img2="https://images.unsplash.com/photo-1600947509785-29fb4e7d1362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ1bmFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
         <ExploringData
        className="first-des"
        heading="Ambubachi"
        // link="/buddhistwesak"
    //     text="Buddhist_Wesak Celebrated on the full moon in May, this is the most important Buddhist holiday. It is celebrated to commemorate the death and birth of Buddha and to remember how the Buddha became enlightened. It is also an opportunity for Buddhists to try to gain their own enlightenment.People celebrate by cleaning and decorating their houses. They also go to temple to worship and bring flowers, candles and food to the monks. They also pour water on the statue of Buddha to remind them to purify their minds of selfishness and maliciousness. They also offer gifts to the Buddha out of admiration for Buddha and Buddhism. The food offered is often vegetarian because Buddhists do not like to kill any living thing."
    //     img2=" https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2020/04/Asalha-Puja-Day-India.jpeg?resize=800%2C600&ssl=1"
    //     img1="https://cdn2.wanderlust.co.uk/media/1061/vesak-day-main-burma.jpg?anchor=center&mode=crop&width=650&height=0&rnd=132022394390000000"
    //   
    text="Ambubachi Mela is one of the biggest congregations of eastern India. It is the most important festival of the Kamakhya temple and is celebrated in the month of June every year.It is more of a ritual of austerities, a festival celebrated with Shakti rites. The belief is that Kamakhya embodies the mother cult, the Shakti. During the period of Ambubachi from the seventh to the tenth day of the Hindu month of Asadha , the doors of the shrine are closed to all as it is believed that Goddess Kamakhya goes through the annual cycle of menstruation. On the twelfth day, the doors are opened ceremonially and a big fair held at the temple premises on that day."
    img1="https://www.discovereast.in/wp-content/uploads/2020/06/images-2020-06-25T154048.088.jpeg"
    img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09C3irJy0HR4ehtXUug3TP0nPIUXjMwEWacZyi5hffiDl5n6qnusOvzKQ_ib-msHMaMs&usqp=CAU
    "
    />
    
    <ExploringData
        className="first-des-reverse"
        heading="Vijayadashami"
        // text="Bihar holds immense historical significance in the annals of India's past, primarily because of its role as a cradle of ancient Indian civilization. The region was the seat of several influential empires and dynasties, including the Mauryas and Guptas, who played a critical role in shaping the subcontinent's political and cultural landscape. Pataliputra, now modern-day Patna, served as the capital of these empires and was renowned as a thriving center of trade, governance, and learning. Bihar was the birthplace of Lord Mahavira, the 24th Tirthankara of Jainism, and was also closely associated with the life and teachings of Lord Buddha, as it was in Bihar that he attained enlightenment in Bodh Gaya. The state is dotted with numerous historical sites, monasteries, and ancient universities, underscoring its enduring significance in India's heritage and the evolution of its philosophical, religious, and cultural traditions."
        // img1="https://images.unsplash.com/photo-1602308951223-d9cb63de8766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmloYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        // img2="https://images.unsplash.com/photo-1613502046140-a326183a0bae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJpaGFyJTIwZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>
        text="Vijayadashami is one of the most important festivals in India, celebrating the triumph of good over evil. It is celebrated on the tenth day of the Hindu month of Ashvin, which usually falls in September or October. The festival commemorates the victory of Lord Rama over the demon king Ravana.On the day of Dussehra, sculptures of Ravana and his brothers Meghnad and Kumbhakarna are burnt in public squares. This symbolises the victory of good over evil and the destruction of evil forces.Dussehra is also a time for family gatherings and celebrations. People exchange gifts, sweets, and other delicacies. They also visit temples and pray for good fortune and prosperity."
        img2=" https://www.tamilnadutourism.com/blog/wp-content/uploads/2019/10/navaratri-westbengal-1024x640.jpg"
        img1="https://c8.alamy.com/comp/RBKAEF/indian-police-parade-in-traditional-uniform-for-mysore-dussehra-celebration-or-dasara-festival-procession-at-the-mysore-king-in-karnataka-india-RBKAEF.jpg"
    />
     <ExploringData
        className="first-des"
        heading="Ugadi"
        // link="/buddhistwesak"
        text="In Karnataka, the auspicious festival of Ugadi, which represents the beginning of the New Year, is celebrated with great sheer delight and zeal on the first day of Chaitra. The universe was presumably formed on this day, according to Hindu mythology, by Lord Brahma.
        "
        img2="https://static.toiimg.com/photo/imgsize-913259,msid-81919308/81919308.jpg
        "
        img1="https://organiser.org/wp-content/uploads/NBImages/2021/04/12/2_05_34_49_a_1.jpg
        "
      />
    <ExploringData
        className="first-des-reverse"
        heading="Maghi Purnima"
        // link='/tamilnadu'
        text="The month of Magha is considered very important and auspicious for Hindus. People believe that gods come down to the earth in human form and take a dip in the Sangam at Prayagraj, donate to the needy, and chant prayers. That's why it's said that bathing in the Ganges on this day fulfills the wishes of the devotees and leads to salvation.Magha Purnima, also called Maghi Purnima, is a full moon day that falls in the month of Magh according to the Hindu calendar. This usually corresponds to January or February in the Gregorian calendar. It's the month when the famous Kumbh Mela and the Magha Mela take place at Triveni Sangam in Prayagraj or Allahabad.
        "
         img1="https://static.tnn.in/thumb/msid-107858637,thumbsize-59796,width-1280,height-720,resizemode-75/107858637.jpg"
        img2="https://inventory.rudra-centre.org/static/images/blogs/3.jpg
        "
        />
     <ExploringData
        className="first-des"
        heading="Bihula"
        // link="/buddhistwesak"
        text="Bihula or Bishari puja is celebrated in the Bhagalpur district, Bihar, in August every year. The people worship goddess Mansa and pray for protection over their families. The festival celebrates and displays the Manjusha form of art. The celebration of Bihula originates from the folktale of a girl Bihula who prayed to the goddess Mansa who restored the life of her husband, Lakshinder. 
        "
        img1="https://images1.livehindustan.com/uploadimage/library/2020/08/20/16_9/16_9_1/19_AUG_MUNG_20_1597875925_1597875925.JPG"
        img2="https://images.herzindagi.info/image/2019/Oct/chhath-puja-prasad-are-beneficial-for-health-main.jpg
        "
      />
    <ExploringData
        className="first-des-reverse"
        heading="Losar"
        // link='/tamilnadu'
        // text="Tamil Nadu's culture is a vibrant tapestry woven with classical arts, music, and dance, exemplified by Bharatanatyam and Carnatic music. Its culinary landscape boasts iconic dishes like dosa and idli, reflecting its diverse gastronomic heritage. Traditional attire, including colorful sarees for women and elegant veshti-dhotis for men, adds to its cultural richness. Festivals such as Pongal and Navaratri bring communities together in joyful celebration, while the Tamil language, one of the world's oldest classical languages, and traditional crafts like Tanjore painting, enrich its cultural legacy, showcasing a blend of ancient traditions and modern vibrancy."
        // img1="https://images.unsplash.com/photo-1546954552-eb2ada4a3654?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="In Arunachal Pradesh, Losar is the main festival observed during the Tibetan New Year. According to the lunisolar Tibetan calendar, it is celebrated in February or early March and lasts for two weeks. It is organised by the people of the Mahayana Buddhist Monpa tribe, who dominate the West Kameng and Tawang districts. Tawang is one of the most popular tourist attractions in North East India.In the pre-Buddhist period, the Losar festival was organised to celebrate the blossoming of apricot trees. Earlier known as an Agrarian Festival, Losar has evolved into an annual Buddhist festival.It is observed to ward off evil and invite happiness and prosperity into the new year. "
        img1="https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/03/losar-arunachal.jpg?resize=520%2C352&ssl=1"
        img2="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDxdwUJLGESLzv-OOG3bmU1eiJwYz5WsGlWORbei17KqQceOauSTobP5eC3BZWIrDhR9j7NUYgcnd2akz6hxB8LYh39xw8uJcsLJFg5jmG5-Sh06zHmNVGeHlJpQsCNTtNb5W7_sC09rs/s1600/lighttravelaction_nyishi_tribe_women_nyokum_yullo-e1521095540226.jpg"
        // img2="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        />   
          <ExploringData
        className="first-des"
        heading="Mondo"
        // link="/buddhistwesak"
        text="The All Goa State Level Mando Festival has five categories – Children, Teenagers, Original, Traditional and Dance categories. A mando dance takes about 8-12 minutes. In 2022, in the Dance Category, there was just one performance at the Mando Festival. This time, there are six entries.
        "
        img1="https://www.tsiholidays.com/wp-content/uploads/2019/02/goa4.jpg"img2="https://media.istockphoto.com/id/506018510/photo/international-kite-festival-in-india.jpg?s=612x612&w=0&k=20&c=TyHukU_lerFAi02t3Nnl5lHSykSF57RB6zQezmL-McA=
        "
      /> 
       <ExploringData
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
      
    </div>
    </>
    
  );
};

export default Festivalscel;