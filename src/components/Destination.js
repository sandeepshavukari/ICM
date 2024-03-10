import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Festivals</h1>
      <p>
        Festivals are a time to cherish moments with loved ones and create
        beautiful memories.
      </p>
      <DestinationData
        className="first-des"
        heading="Diwali"
        // link='/diwali'
        text="On Diwali, a festival celebrated across India, people engage in a
      series of cherished rituals. Homes are meticulously cleaned and
      adorned with colorful decorations. The lighting of oil lamps and
      candles symbolizes the triumph of light over darkness, while
      fireworks and firecrackers fill the night sky to ward off
      negativity. Families perform Lakshmi Puja, a ritual to seek the
      blessings of the goddess of wealth and prosperity, and Ganesha Puja
      to remove obstacles. Sweets and gifts are exchanged as tokens of
      love and well-wishing, and visiting temples to offer prayers is a
      common practice. Special meals are prepared, and playing games of
      chance is a tradition in some regions. Charity and acts of kindness
      are encouraged, and the lighting of sky lanterns adds to the festive
      atmosphere. The rituals of Diwali bring together people from various
      backgrounds, fostering a sense of unity and joy as they celebrate
      the victory of good over evil."
        img1="https://images.unsplash.com/photo-1541955208104-805851060644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGRpd2FsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60"
        img2="https://images.unsplash.com/photo-1574380965762-d7af37362e0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGl3YWxpfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60"
      />

      <DestinationData
      className="first-des-reverse"
        heading="Rath Yatra"
        text="As per description in the Skanda Purana , among the twelve Yatras of Shree Jagannatha, Ratha Yatra or Shree Cundicha Yatra is considered
        the most famous one.
        According to 'Bamadev Samhita' those who can witness the four deities on the Simhasana (the sacred seat) of Gundicha Temple for a week,
        they along with their ancestors would get a place in the heavenly abode i.e. Baikuntha for all time to come. As per this text those who can
        hear about this great festival they also get the desired result. Besides this, those who study the rituals of the divine festival and make others
        aware of the same they can also get a place in his holy abode.
        The Ratha Yatra of the 'four deities' takes place on the 2nd day of the bright fortnight of Ashadha for the overall well-being of the mankind.
        In the Skanda purana it has been described that no festival of Mahaprabhu is more important than that of the Shree Gundicha Yatra.
        Because, Shree Hari the supreme Lord of the cosmos rides & his chariot in a very delightful mood to the Gundicha Temple to fulfill His
        pledged command."
        img1="https://im.rediff.com/news/2021/jul/12yatra1.jpg"
        img2="https://www.unusualgifts.in/wp-content/uploads/2016/05/jagannath_photo.jpg"
      />
       <DestinationData
      className="first-des"
        heading="Christmas"
        text="Christmas is celebrated every year on December 25. The festival marks the celebration of the birth anniversary of Jesus Christ. Jesus Christ is worshipped as the Messiah of God in Christian Mythology. Hence, his birthday is one of the most joyous ceremonies amongst Christians. Although the festival is mainly celebrated by the followers of Christianity, it is one of the most enjoyed festivals all over the globe. Christmas symbolizes merriment and love. It is celebrated with a lot of zeal and enthusiasm by everyone, no matter what religion they follow. 
        The season of Christmas that begins from Thanksgiving brings festivity and joy to everyone’s lives. Thanksgiving is the day when people thank the almighty for blessing them with harvest and also show gratitude towards all the good things and people around. On Christmas, people wish each other Merry Christmas and pray that the day takes away all the negativity and darkness from people’s life. 
        "
        img1="https://media.istockphoto.com/id/491090202/photo/santa-is-placing-gift-boxes-under-christmas-tree.jpg?s=612x612&w=0&k=20&c=UgxoDhhPTh7SckdalBjCLdGmh1zRqVtC3f7-RxMslBY="
        img2="https://w0.peakpx.com/wallpaper/273/717/HD-wallpaper-2021-christmas-tree-b-christmas-tree-black-dark-glass-gold-green-new-year-red.jpg"
      />
      <DestinationData
      className="first-des-reverse"
      heading="Ramzan"
      text="Ramadan, the ninth month of the Muslim calendar, is one of the most sacred times for
      Muslims. It is the month in which it is believed that the Holy Qur'an was sent down from
      heaven 'as a guidance for men and women,\ a declaration of direction, and a means of
      salvation. '
      During this month, Muslims observe a strict fast from dawn until sunset. They are not
      allowed to eat or drink (even water) during daylight hours. Fasting is a private act of worship
      bringing about nearness to God, as well as a form of spiritual discipline and a means to
      empathize with those less fortunate. The fast is broken at the end of the day with prayer and a I
      festive meal called an iftar. It is customary to visit family and friends following the iftar.
      During Ramadan, many Muslims go to the mosque and spend several hours praying. In
      addition to the five daily prayers that are part of the core of Islam, Muslims recite a special
      prayer called the Tarawih prayer (night prayer).
      On the evening of the 27th day of Ramadan, Muslims observe a special night called Layat al-
      Qadr, sometimes referred to as the Night of Power. It is believed that Muhammad first
      received the Holy Qur'an on this night.
      "
      img1="https://assets.thehansindia.com/h-upload/feeds/2019/05/14/174906-ramzan.jpg"
      img2="https://w0.peakpx.com/wallpaper/1019/439/HD-wallpaper-mosque-and-the-moon-arabic-islamic-light-night-thumbnail.jpg"
      />
    </div>
  );
};

export default Destination;
